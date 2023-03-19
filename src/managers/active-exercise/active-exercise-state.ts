import { atom } from 'recoil';

import { Exercise } from '../exercise/interface';

const initialActiveExercise: Exercise = {
  exerciseId: 'exerciseId',
  title: 'Title',
  exerciseType: 'vocabulary',
  vocabularies: [],
  flags: {
    isVocabularyExercise: false,
    hasVocabularyExercise: false,
  },
};

export const ACTIVE_EXERCISE = atom<Exercise>({
  key: 'activeExercise',
  default: initialActiveExercise,
});
