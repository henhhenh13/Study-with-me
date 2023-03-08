import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import vocabularyThemeJson from '../../data/themes.json';
import vocabulariesJson from '../../data/vocabularies.json';
import generatorUuid from '../../utils/generatorUuid';
import { useVocabulary } from '../vocabulary/use-vocabulary';
import { VocabulariesState } from '../vocabulary/vocabulary-state';
import {
  VOCABULARY_THEME_STATE,
  VocabularyThemeState,
} from './vocabulary-theme-state';

interface UseVocabularyThemeManager {
  vbrThemes: VocabularyThemeState[];
  getVocabularyTheme: () => void;
  addVocabularyInTheme: (
    themeId: string,
    vocabulary: string,
    translationVn: string,
  ) => void;
  addTheme: (theme: string) => void;
}
export const useVocabularyThemeManager = (): UseVocabularyThemeManager => {
  const [vbrThemeState, setVbrThemeState] = useRecoilState(
    VOCABULARY_THEME_STATE,
  );
  const { addVocabulary } = useVocabulary();

  const getVocabularyTheme = useCallback(() => {
    const newMaps = new Map();

    vocabularyThemeJson.forEach((theme) => {
      newMaps.set(theme.themeId, {
        ...theme,
        vocabularies: vocabulariesJson.filter(
          ({ themeId }) => theme.themeId === themeId,
        ),
      });
    });
    setVbrThemeState(newMaps);
  }, [setVbrThemeState]);

  const addVocabularyInTheme = useCallback(
    (themeId: string, vocabulary: string, translationVn: string) => {
      setVbrThemeState((prevState) => {
        const newState = new Map(prevState);
        const prevTheme = newState.get(themeId);
        if (prevTheme && prevTheme.vocabularies) {
          const uuid = generatorUuid();
          const newVbr: VocabulariesState = {
            vocabularyId: uuid,
            vocabulary,
            themeId,
            translations: {
              vn: translationVn,
            },
          };
          newState.set(themeId, {
            ...prevTheme,
            vocabularies: [...prevTheme.vocabularies, newVbr],
          });
        }
        return newState;
      });
      addVocabulary(themeId, vocabulary, translationVn);
    },
    [addVocabulary, setVbrThemeState],
  );

  const addTheme = useCallback(
    (theme: string) => {
      setVbrThemeState((prevState) => {
        const newMap = new Map(prevState);
        const uuid = generatorUuid();
        const newTheme: VocabularyThemeState = {
          themeId: uuid,
          theme,
          vocabularies: [],
        };
        newMap.set(newTheme.themeId, newTheme);
        return newMap;
      });
    },
    [setVbrThemeState],
  );

  return {
    vbrThemes: Array.from(vbrThemeState.values()),
    getVocabularyTheme,
    addVocabularyInTheme,
    addTheme,
  };
};
