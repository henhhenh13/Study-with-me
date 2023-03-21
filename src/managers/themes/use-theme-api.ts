import { supabase } from '../../supabaseClient';
import { ThemeApi, ThemeApiDefinitions } from './interface';

interface UseThemeApi {
  fetchThemes: () => Promise<ThemeApiDefinitions['Themes']>;
  addTheme: (themeName: string) => Promise<ThemeApiDefinitions['ThemeAdd']>;
}

export const useThemeApi = (): UseThemeApi => {
  const initialTheme: ThemeApi = {
    themeId: 'themeId',
    theme: 'theme',
    vocabularies: [],
  };
  const fetchThemes = async (): Promise<ThemeApiDefinitions['Themes']> => {
    const { data, error, status } = await supabase
      .from('themes')
      .select<'*, vocabularies(*)', ThemeApiDefinitions['Theme']>(
        '*, vocabularies(*)',
      );
    return {
      themes: data || [],
      flags: {
        isFetched: Boolean(data && status === 200),
        isFetchError: !!error,
        isFetching: false,
      },
    };
  };

  const addTheme = async (
    themeName: string,
  ): Promise<ThemeApiDefinitions['ThemeAdd']> => {
    const { data, error, status } = await supabase
      .from('themes')
      .insert([{ theme: themeName }])
      .select<'*', ThemeApi>('*')
      .single();

    return {
      theme: data || initialTheme,
      flags: {
        isAdded: status === 201,
        isError: !!error,
        isLoading: false,
      },
    };
  };

  return {
    fetchThemes,
    addTheme,
  };
};
