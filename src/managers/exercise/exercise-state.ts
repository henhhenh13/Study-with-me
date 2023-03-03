import { atom } from 'recoil';

import { ActiveExerciseState } from '../active-exercise/active-exercise-state';
import { SentenseState } from '../sentense/sentense-state';
import { VocabularyState } from '../vocabulary/vocabulary-state';

export interface ExerciseState {
  exerciseId: string;
  title: string;
  unitId: string;
  exerciseType: ExerciseType;
  index: string;
  vocabularys?: VocabularyState[];
  sentenses?: SentenseState[];
}

export type ExerciseType = 'vocabulary' | 'sentense';

export const EXERCISE_STATE = atom<Map<string, ActiveExerciseState>>({
  key: 'exerciseState',
  default: new Map(),
});
