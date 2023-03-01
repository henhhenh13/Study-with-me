import { type IconType } from 'react-icons/lib'
import { type ExerciseState } from '../exercise/exercise-state'

export interface UnitState {
  unitId: string
  title: string
  description: string
  avatar: string | null
  svgAvatar: IconType | null
  exercises: ExerciseState[]
}
