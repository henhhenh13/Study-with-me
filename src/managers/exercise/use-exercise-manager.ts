import { useCallback } from 'react';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';

import { EXERCISES_SELECTOR, EXERCISES_STATE } from './exercise-state';
import { Exercise, ExerciseDefinitions } from './interface';
import { serializationVocabularyExercise } from './serialize-exercise';
import { useExerciseApi } from './use-exercise-api';

interface UseExerciseManager {
  fetchVocabularyExerciseById: (
    exerciseId: string,
    isNeedReturn?: boolean,
  ) => Promise<Exercise | void>;
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
      async (exerciseId: string, isNeedReturn = false) => {
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
        if (isNeedReturn && !!exercise) {
          return serializationVocabularyExercise(exercise);
        }
      },
    [fetchVocabularyExerciseByIdApi, setExercises, startFetchAnyExercise],
  );
  return {
    fetchVocabularyExerciseById,
    exerciseList: exercisesSelector,
  };
};
