import { Exercise, ExerciseApi } from './interface';

export const serializationVocabularyExercise = (raw: ExerciseApi): Exercise => {
  const { title, exerciseType, exerciseId, vocabularies } = raw;

  return {
    title,
    exerciseType,
    exerciseId,
    vocabularies,
    flags: {
      isVocabularyExercise: exerciseType === 'vocabulary',
      hasVocabularyExercise: !!vocabularies.length,
    },
  };
};
