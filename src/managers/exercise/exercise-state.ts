import { atom } from 'recoil';

import { ExerciseDefinitions } from './interface';

export const EXERCISES_STATE = atom<ExerciseDefinitions['ExercisesState']>({
  key: 'exerciseState',
  default: {
    exercise: new Map(),
    flags: {
      isFetching: false,
      isFetched: true,
      isFetchError: false,
    },
  },
});
