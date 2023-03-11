import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import vocabularyThemeJson from '../../data/themes.json';
import vocabulariesJson from '../../data/vocabularies.json';
import generatorUuid from '../../utils/generatorUuid';
import {
  serializationVocabulary,
  SerializedVocabulary,
} from '../vocabulary/serialized-vocabulary';
import { useVocabularyManager } from '../vocabulary/use-vocabulary-manager';
import {
  VOCABULARY_THEME_STATE,
  VocabularyThemeState,
} from './vocabulary-theme-state';

interface UseVocabularyThemeManager {
  vbrThemes: VocabularyThemeState[];
  getVocabularyTheme: () => void;
  addVocabularyInTheme: (vocabularies: {
    themeId: string;
    vocabulary: string;
    translationVn: string;
    detail: string | null;
  }) => void;
  addTheme: (theme: string) => void;
}
export const useVocabularyThemeManager = (): UseVocabularyThemeManager => {
  const [vbrThemeState, setVbrThemeState] = useRecoilState(
    VOCABULARY_THEME_STATE,
  );
  const { addVocabulary } = useVocabularyManager();

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
    (vocabularies: {
      themeId: string;
      vocabulary: string;
      translationVn: string;
      detail: string | null;
    }) => {
      setVbrThemeState((prevState) => {
        const { themeId, vocabulary, translationVn, detail } = vocabularies;

        prevState = new Map(prevState);
        const prevTheme = prevState.get(themeId);
        if (prevTheme && prevTheme.vocabularies) {
          const uuid = generatorUuid();
          const newVocabulary: SerializedVocabulary = serializationVocabulary({
            vocabularyId: uuid,
            themeId,
            vocabulary,
            translations: {
              vn: translationVn,
            },
            detail,
          });
          prevState.set(themeId, {
            ...prevTheme,
            vocabularies: [...prevTheme.vocabularies, newVocabulary],
          });
        }
        return prevState;
      });
      addVocabulary(vocabularies);
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
