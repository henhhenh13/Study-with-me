import { supabase } from '../../supabaseClient';
import { ExerciseApi, ExerciseApiDefinitions } from './interface';

interface UseExerciseApi {
  fetchVocabularyExerciseById: (
    exerciseId: string,
  ) => Promise<ExerciseApiDefinitions['Exercise']>;
}
export const useExerciseApi = (): UseExerciseApi => {
  const fetchVocabularyExerciseById = async (
    exerciseId: string,
  ): Promise<ExerciseApiDefinitions['Exercise']> => {
    const { data, status, error } = await supabase
      .from('exercises')
      .select<
        'exerciseId,exerciseType,title, vocabularies(vocabulary,translation)',
        ExerciseApi
      >('exerciseId,exerciseType,title, vocabularies(vocabulary,translation)')
      .eq('exerciseId', exerciseId)
      .single();
    return {
      exercise: data,
      flags: {
        isFetched: true,
        isFetchError: !!error,
        isFetching: false,
      },
    };
  };

  return {
    fetchVocabularyExerciseById,
  };
};
