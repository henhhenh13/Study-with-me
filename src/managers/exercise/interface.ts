import { FetchStatus } from '../../contains/interface';

export type ExerciseType = 'vocabulary' | 'sentense';

interface VocabularyExercise {
  vocabulary: string;
  translation: string;
}
export interface ExerciseApi {
  exerciseId: string;
  title: string;
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

export interface ExerciseDefinitions {
  ExercisesState: {
    exercise: Map<string, ExerciseApi>;
    flags: FetchStatus;
  };
}
