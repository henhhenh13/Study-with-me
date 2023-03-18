import { supabase } from '../../supabaseClient';
import { ThemeApiDefinitions } from './interface';

interface UseThemeApi {
  fetchThemes: () => Promise<ThemeApiDefinitions['Themes']>;
}

export const useThemeApi = (): UseThemeApi => {
  const fetchThemes = async (): Promise<ThemeApiDefinitions['Themes']> => {
    const { data, error, status } = await supabase
      .from('themes')
      .select<'*, vocabularies(*)', ThemeApiDefinitions['ThemeApi']>(
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
  return {
    fetchThemes,
  };
};
