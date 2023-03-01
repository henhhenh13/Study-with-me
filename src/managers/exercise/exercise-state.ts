export interface ExerciseState {
  exerciseId: string
  title: string
  unitId: string
  exerciseType: ExerciseType
  index: string
}

export type ExerciseType = 'vocabulary' | 'sentense'
