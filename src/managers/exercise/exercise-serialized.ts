import { type ExerciseState } from './exercise-state';

export interface ExerciseSerialized {
  title: ExerciseState['title'];
  index: number;
  exerciseType: ExerciseState['exerciseType'];
  unitId: ExerciseState['unitId'];
  exerciseId: ExerciseState['exerciseId'];
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
