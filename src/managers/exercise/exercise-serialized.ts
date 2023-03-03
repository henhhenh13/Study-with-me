import { VocabularyState } from '../vocabulary/vocabulary-state';
import { type ExerciseState } from './exercise-state';

export interface ExerciseSerialized {
  title: ExerciseState['title'];
  index: number;
  exerciseType: ExerciseState['exerciseType'];
  unitId: ExerciseState['unitId'];
  exerciseId: ExerciseState['exerciseId'];
}

export interface ExericiseVocabularyState extends ExerciseState {
  vocabularys: VocabularyState[];
}

export interface ExericiseVocabularySerialized extends ExerciseSerialized {
  vocabularys: VocabularyState[];
}

export const fromApiToExercise = (raw: ExerciseState): ExerciseSerialized => {
  const { title, index, exerciseType, exerciseId, unitId } = raw;
  return {
    title,
    exerciseType,
    unitId,
    exerciseId,
    index: Number(index),
  };
};

export const fromApiToExerciseVocabulary = (
  raw: ExericiseVocabularyState,
): ExericiseVocabularySerialized => {
  const { title, index, exerciseType, exerciseId, unitId, vocabularys } = raw;
  return {
    title,
    exerciseType,
    unitId,
    exerciseId,
    index: Number(index),
    vocabularys,
  };
};
