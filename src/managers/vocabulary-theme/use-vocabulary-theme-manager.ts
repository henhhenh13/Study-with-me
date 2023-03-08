import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import vocabularyThemeJson from '../../data/themes.json';
import vocabulariesJson from '../../data/vocabularies.json';
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
          const newVbr: VocabulariesState = {
            vocabularyId: String(prevTheme.vocabularies.length + 1),
            vocabulary,
            themeId: themeId,
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

  return {
    vbrThemes: Array.from(vbrThemeState.values()),
    getVocabularyTheme,
    addVocabularyInTheme,
  };
};
