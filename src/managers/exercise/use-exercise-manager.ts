import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { EXERCISES_STATE } from './exercise-state';
import { useExerciseApi } from './use-exercise-api';

interface UseExerciseManager {
  fetchVocabularyExerciseById: (exerciseId: string) => Promise<void>;
}
export const useExerciseManager = (): UseExerciseManager => {
  const { fetchVocabularyExerciseById: fetchVocabularyExerciseByIdApi } =
    useExerciseApi();
  const setExercises = useSetRecoilState(EXERCISES_STATE);

  const startFetchAnyExercise = useCallback(() => {
    setExercises((prevState) => {
      return {
        ...prevState,
        flags: {
          ...prevState.flags,
          isFetching: true,
          isFetched: false,
        },
      };
    });
  }, [setExercises]);

  const fetchVocabularyExerciseById = useCallback(
    async (exerciseId: string) => {
      startFetchAnyExercise();
      const { exercise, flags } = await fetchVocabularyExerciseByIdApi(
        exerciseId,
      );

      setExercises((prevState) => {
        if (flags.isFetched && exercise) {
          prevState.exercise.set(exercise.exerciseId, exercise);
        }
        return {
          ...prevState,
          flags,
        };
      });
    },
    [fetchVocabularyExerciseByIdApi, setExercises, startFetchAnyExercise],
  );
  return {
    fetchVocabularyExerciseById,
  };
};
