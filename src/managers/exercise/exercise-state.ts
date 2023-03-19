import { atom, selector } from 'recoil';

import { ExerciseDefinitions } from './interface';
import { serializationVocabularyExercise } from './serialize-exercise';

export const EXERCISES_STATE = atom<ExerciseDefinitions['ExercisesState']>({
  key: 'exerciseState',
  default: {
    exercises: new Map(),
    flags: {
      isFetching: false,
      isFetched: true,
      isFetchError: false,
    },
  },
});

export const EXERCISES_SELECTOR = selector<
  ExerciseDefinitions['ExercisesSelector']
>({
  key: 'exercisesSelector',
  get: ({ get }) => {
    const { exercises, flags } = get(EXERCISES_STATE);
    const serializedExercises = Array.from(exercises.values()).map(
      (exercise) => {
        return serializationVocabularyExercise(exercise);
      },
    );
    return {
      exercises: serializedExercises,
      flags,
    };
  },
});
