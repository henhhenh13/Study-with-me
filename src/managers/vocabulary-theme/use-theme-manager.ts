import { useCallback } from 'react';

import { useThemeApi } from './use-theme-api';

interface UseThemeManager {
  fetchThemes: () => Promise<void>;
}

export const useThemeManager = (): UseThemeManager => {
  const { fetchThemes: fetchThemesApi } = useThemeApi();
  const fetchThemes = useCallback(async () => {
    const themes = await fetchThemesApi();
    console.log(themes);
  }, [fetchThemesApi]);

  return {
    fetchThemes,
  };
};
