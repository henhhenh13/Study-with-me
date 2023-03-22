import { FetchStatus } from '../../contains/interface';

export type ExerciseType = 'vocabulary' | 'sentence';

interface VocabularyExercise {
  vocabulary: string;
  translation: string;
}
export interface ExerciseApi {
  exerciseId: string;
  title: string;
  themeId: string;
  unitId: string;
  exerciseType: ExerciseType;
  vocabularies: VocabularyExercise[];
}
export interface ExerciseApiDefinitions {
  Exercise: {
    exercise: ExerciseApi | null;
    flags: FetchStatus;
  };
  Exercises: {
    exercise: ExerciseApi[];
    flags: FetchStatus;
  };
}

export interface Exercise {
  exerciseId: string;
  title: string;
  exerciseType: ExerciseType;
  vocabularies: VocabularyExercise[];
  flags: {
    isVocabularyExercise: boolean;
    hasVocabularyExercise: boolean;
  };
}

export interface ExerciseDefinitions {
  ExercisesState: {
    exercises: Map<string, ExerciseApi>;
    flags: FetchStatus;
  };
  ExercisesSelector: {
    exercises: Exercise[];
    flags: FetchStatus;
  };
}
