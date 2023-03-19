import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { serializationVocabulary } from '../vocabularies/serialize-vocabulary';
import { ThemesDefinitions } from './interface';
import { THEMES_SELECTOR, THEMES_STATE } from './themes-state';
import { useThemeApi } from './use-theme-api';

interface UseThemeManager {
  fetchThemes: () => Promise<void>;
  themeList: ThemesDefinitions['ThemesSelector'];
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

  return {
    fetchThemes,
    themeList: themes,
  };
};
