import {
  type ExerciseSerialized,
  fromApiToExercise,
} from '../exercise/exercise-serialized';
import { type UnitState } from './unit-state';

export interface UnitSerialized {
  unitId: UnitState['unitId'];
  title: UnitState['title'];
  description: UnitState['description'];
  avatar: UnitState['avatar'];
  svgAvatar: UnitState['svgAvatar'];
  exercises: ExerciseSerialized[];
  flags: {
    isSvgAvatar: boolean;
    isAvatar: boolean;
  };
}

export const fromApiToUnit = (raw: UnitState): UnitSerialized => {
  const { unitId, title, description, avatar, svgAvatar, exercises } = raw;
  const exercisesSerialized = exercises.map((exercise) =>
    fromApiToExercise(exercise),
  );
  return {
    unitId,
    title,
    description,
    avatar,
    svgAvatar,
    exercises: exercisesSerialized,
    flags: {
      isSvgAvatar: Boolean(svgAvatar),
      isAvatar: Boolean(avatar),
    },
  };
};
