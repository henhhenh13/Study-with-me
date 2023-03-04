import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import vocabularyThemeJson from '../../data/vocabulary-theme.json';
import vocabularysJson from '../../data/vocabularys.json';
import {
  VOCABULARY_THEME_STATE,
  VocabularyThemeState,
} from './vocabulary-theme-state';

interface UseVocabularyThemeManager {
  vbrThemes: VocabularyThemeState[];
  getVocabularyTheme: () => void;
}
export const useVocabularyThemeManager = (): UseVocabularyThemeManager => {
  const [vbrThemeState, setVbrThemeState] = useRecoilState(
    VOCABULARY_THEME_STATE,
  );

  const getVocabularyTheme = useCallback(() => {
    const newMaps = new Map();

    vocabularyThemeJson.forEach((theme) => {
      newMaps.set(theme.themeId, {
        ...theme,
        vocabularys: vocabularysJson.filter(
          ({ themeId }) => theme.themeId === themeId,
        ),
      });
    });
    setVbrThemeState(newMaps);
  }, [setVbrThemeState]);

  return { vbrThemes: Array.from(vbrThemeState.values()), getVocabularyTheme };
};
