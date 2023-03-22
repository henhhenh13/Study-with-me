import { supabase } from '../../supabaseClient';
import {
  VocabularyApi,
  VocabularyApiDefinitions,
} from '../vocabularies/interface';

interface UseExerciseApi {
  fetchVocabularyExerciseByThemeId: (
    themeId: string,
  ) => Promise<VocabularyApiDefinitions['Vocabularies']>;
}
export const useExerciseApi = (): UseExerciseApi => {
  const fetchVocabularyExerciseByThemeId = async (
    themeId: string,
  ): Promise<VocabularyApiDefinitions['Vocabularies']> => {
    const { data, error } = await supabase
      .from('vocabularies')
      .select<'*', VocabularyApi>('*')
      .eq('themeId', themeId);
    return {
      vocabularies: data || [],
      flags: {
        isFetched: true,
        isFetchError: !!error,
        isFetching: false,
      },
    };
  };

  return {
    fetchVocabularyExerciseByThemeId,
  };
};
