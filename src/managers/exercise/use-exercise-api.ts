import { supabase } from '../../supabaseClient';
import {
  VocabularyApi,
  VocabularyApiDefinitions,
} from '../vocabularies/interface';
import { ExerciseApi, ExerciseApiDefinitions } from './interface';

interface UseExerciseApi {
  fetchVocabularyExerciseByThemeId: (
    themeId: string,
  ) => Promise<VocabularyApiDefinitions['Vocabularies']>;
  addExercise: (
    exercise: Partial<ExerciseApi>,
  ) => Promise<ExerciseApiDefinitions['Exercise']>;
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
  const addExercise = async (
    exercise: Partial<ExerciseApi>,
  ): Promise<ExerciseApiDefinitions['Exercise']> => {
    const { exerciseType, themeId, title, unitId } = exercise;
    const { data, error, status } = await supabase
      .from('exercises')
      .insert([{ exerciseType, themeId, title, unitId }])
      .select<'*', ExerciseApi>('*')
      .single();
    return {
      exercise: data,
      flags: {
        isFetching: false,
        isFetchError: !!error,
        isFetched: status === 200 && !!data,
      },
    };
  };

  return {
    fetchVocabularyExerciseByThemeId,
    addExercise,
  };
};
