import { atom, selector } from 'recoil';

import { ExerciseSerialized } from '../exercise/exercise-serialized';
import { EXERCISE_STATE } from '../exercise/exercise-state';
import { SentenseState } from '../sentense/sentense-state';
import { VocabulariesState } from '../vocabulary/vocabulary-state';

export interface ActiveExerciseState extends ExerciseSerialized {
  vocabularies?: VocabulariesState[];
  sentenses?: SentenseState[];
}

export const ACTIVE_EXERCISE_ID_STATE = atom<string | undefined>({
  key: 'activeExerciseIndex',
  default: undefined,
});

export const ACTIVE_EXERCISE_STATE = selector<ActiveExerciseState | undefined>({
  key: 'activeExercise',
  get: ({ get }) => {
    const exercises = get(EXERCISE_STATE);
    const activeExerciseId = get(ACTIVE_EXERCISE_ID_STATE);

    if (activeExerciseId && exercises) {
      return exercises.get(activeExerciseId);
    } else return undefined;
  },
});
