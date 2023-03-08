import { MdFamilyRestroom } from 'react-icons/md';

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
  themeId: UnitState['themeId'];
  flags: {
    isSvgAvatar: boolean;
    isAvatar: boolean;
  };
}

export const fromApiToUnit = (raw: UnitState): UnitSerialized => {
  const { unitId, title, description, avatar, exercises, themeId } = raw;
  const exercisesSerialized = exercises.map((exercise) =>
    fromApiToExercise(exercise),
  );
  return {
    unitId,
    title,
    themeId,
    description,
    avatar,
    svgAvatar: MdFamilyRestroom,
    exercises: exercisesSerialized,
    flags: {
      isSvgAvatar: true,
      isAvatar: Boolean(avatar),
    },
  };
};
