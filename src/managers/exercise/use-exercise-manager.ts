import { useCallback } from 'react';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';

import { UnitExercise } from '../units/interface';
import { EXERCISES_SELECTOR, EXERCISES_STATE } from './exercise-state';
import { Exercise, ExerciseDefinitions } from './interface';
import { serializationVocabularyExercise } from './serialize-exercise';
import { useExerciseApi } from './use-exercise-api';

interface UseExerciseManager {
  fetchVocabularyExerciseByThemeId: (
    exercises: UnitExercise,
  ) => Promise<Exercise | void>;
  exerciseList: ExerciseDefinitions['ExercisesSelector'];
  getVocabularyExerciseById: (exerciseId: string) => Exercise | null;
}
export const useExerciseManager = (): UseExerciseManager => {
  const { fetchVocabularyExerciseByThemeId: fetchVocabularyExerciseByIdApi } =
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
  const fetchVocabularyExerciseByThemeId = useRecoilCallback(
    ({ snapshot }) =>
      async (exercises: UnitExercise) => {
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
  return {
    fetchVocabularyExerciseByThemeId,
    exerciseList: exercisesSelector,
    getVocabularyExerciseById,
  };
};
