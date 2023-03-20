import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { VocabularyApi } from '../vocabularies/interface';
import { ThemesDefinitions } from './interface';
import { THEMES_SELECTOR, THEMES_STATE } from './themes-state';
import { useThemeApi } from './use-theme-api';

interface UseThemeManager {
  fetchThemes: () => Promise<void>;
  themeList: ThemesDefinitions['ThemesSelector'];
  updateVocabulariesById: (themeId: string, vocabulary: VocabularyApi) => void;
}

export const useThemeManager = (): UseThemeManager => {
  const { fetchThemes: fetchThemesApi } = useThemeApi();
  const setThemesState = useSetRecoilState(THEMES_STATE);
  const themes = useRecoilValue(THEMES_SELECTOR);

  const fetchThemes = useCallback(async () => {
    const { themes, flags } = await fetchThemesApi();

    setThemesState((prevState) => {
      themes.forEach((theme) => {
        prevState.themes.set(theme.themeId, theme);
      });

      return {
        ...prevState,
        flags,
      };
    });
  }, [fetchThemesApi, setThemesState]);

  const updateVocabulariesById = useCallback(
    async (themeId: string, vocabulary: VocabularyApi) => {
      setThemesState((prevState) => {
        const theme = prevState.themes.get(themeId);
        if (theme) {
          const newVocabularies = theme.vocabularies
            ? [...theme.vocabularies, vocabulary]
            : null;
          prevState.themes.set(themeId, {
            ...theme,
            vocabularies: newVocabularies,
          });
        }
        return {
          ...prevState,
          themes: prevState.themes,
        };
      });
    },
    [setThemesState],
  );

  return {
    fetchThemes,
    updateVocabulariesById,
    themeList: themes,
  };
};
