import { VocabulariesState } from '../vocabulary/vocabulary-state';
import { type ExerciseState } from './exercise-state';

export interface ExerciseSerialized {
  title: ExerciseState['title'];
  index: number;
  exerciseType: ExerciseState['exerciseType'];
  unitId: ExerciseState['unitId'];
  exerciseId: ExerciseState['exerciseId'];
}

export interface ExerciseVocabulariesState extends ExerciseState {
  vocabularies: VocabulariesState[];
}

export interface ExerciseVocabulariesSerialized extends ExerciseSerialized {
  vocabularies: VocabulariesState[];
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
  raw: ExerciseVocabulariesState,
): ExerciseVocabulariesSerialized => {
  const { title, index, exerciseType, exerciseId, unitId, vocabularies } = raw;
  return {
    title,
    exerciseType,
    unitId,
    exerciseId,
    index: Number(index),
    vocabularies,
  };
};
