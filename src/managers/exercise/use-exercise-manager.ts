import { useCallback } from 'react';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';

import { EXERCISES_SELECTOR, EXERCISES_STATE } from './exercise-state';
import { Exercise, ExerciseApi, ExerciseDefinitions } from './interface';
import { serializationVocabularyExercise } from './serialize-exercise';
import { useExerciseApi } from './use-exercise-api';

interface UseExerciseManager {
  fetchVocabularyExerciseByThemeId: (
    exercises: ExerciseApi,
  ) => Promise<Exercise | void>;
  exerciseList: ExerciseDefinitions['ExercisesSelector'];
  getVocabularyExerciseById: (exerciseId: string) => Exercise | null;
  addExercise: (exercise: Partial<ExerciseApi>) => Promise<void>;
}
export const useExerciseManager = (): UseExerciseManager => {
  const {
    fetchVocabularyExerciseByThemeId: fetchVocabularyExerciseByIdApi,
    addExercise: addExerciseApi,
  } = useExerciseApi();
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
  const fetchVocabularyExerciseByThemeId = useRecoilCallback(
    ({ snapshot }) =>
      async (exercises: ExerciseApi) => {
        const { exerciseId, themeId } = exercises;
        const exerciseState = snapshot.getLoadable(EXERCISES_STATE).getValue();
        if (exerciseState.exercises.has(exerciseId)) return;

        startFetchAnyExercise();
        const { flags, vocabularies } = await fetchVocabularyExerciseByIdApi(
          themeId,
        );
        const exercise = { ...exercises, vocabularies };
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
  const getVocabularyExerciseById = useRecoilCallback(
    ({ snapshot }) =>
      (exerciseId: string) => {
        const exerciseState = snapshot.getLoadable(EXERCISES_STATE).getValue();
        const { exercises } = exerciseState;
        if (exercises.has(exerciseId)) {
          const exercise = exercises.get(exerciseId);

          return exercise ? serializationVocabularyExercise(exercise) : null;
        }
        return null;
      },
    [],
  );
  const addExercise = useCallback(
    async (exercise: Partial<ExerciseApi>) => {
      startFetchAnyExercise();
      const { exercise: newExercise, flags } = await addExerciseApi(exercise);
      if (flags.isFetched && !!newExercise) {
        setExercises((prevState) => {
          prevState.exercises.set(newExercise.exerciseId, newExercise);
          return {
            ...prevState,
            flags,
          };
        });
      }
    },
    [addExerciseApi, setExercises, startFetchAnyExercise],
  );
  return {
    fetchVocabularyExerciseByThemeId,
    exerciseList: exercisesSelector,
    getVocabularyExerciseById,
    addExercise,
  };
};
