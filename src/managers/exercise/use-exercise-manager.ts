import { useCallback } from 'react';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';

import { EXERCISES_SELECTOR, EXERCISES_STATE } from './exercise-state';
import { ExerciseDefinitions } from './interface';
import { useExerciseApi } from './use-exercise-api';

interface UseExerciseManager {
  fetchVocabularyExerciseById: (exerciseId: string) => Promise<void>;
  exerciseList: ExerciseDefinitions['ExercisesSelector'];
}
export const useExerciseManager = (): UseExerciseManager => {
  const { fetchVocabularyExerciseById: fetchVocabularyExerciseByIdApi } =
    useExerciseApi();
  const setExercises = useSetRecoilState(EXERCISES_STATE);
  const exercisesSelector = useRecoilValue(EXERCISES_SELECTOR);

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
  const fetchVocabularyExerciseById = useRecoilCallback(
    ({ snapshot }) =>
      async (exerciseId: string) => {
        const exerciseState = snapshot.getLoadable(EXERCISES_STATE).getValue();
        if (exerciseState.exercises.has(exerciseId)) return;

        startFetchAnyExercise();
        const { exercise, flags } = await fetchVocabularyExerciseByIdApi(
          exerciseId,
        );

        setExercises((prevState) => {
          if (flags.isFetched && exercise) {
            prevState.exercises.set(exercise.exerciseId, exercise);
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
    exerciseList: exercisesSelector,
  };
};