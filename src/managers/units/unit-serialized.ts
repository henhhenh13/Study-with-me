import { IconType } from 'react-icons';
import { MdFamilyRestroom } from 'react-icons/md';

import {
  type ExerciseSerialized,
  // fromApiToExercise,
} from '../exercise/exercise-serialized';
import { UnitsApiDefinitions } from './interface';

export interface UnitSerialized {
  unitId: string;
  title: string;
  description: string;
  avatar: string;
  svgAvatar: string | IconType;
  exercises: ExerciseSerialized[];
  themeId: string;
  flags: {
    isSvgAvatar: boolean;
    isAvatar: boolean;
  };
}

export const fromApiToUnit = (
  raw: UnitsApiDefinitions['UnitApi'],
): UnitSerialized => {
  const { unitId, title, description, avatar, exercises, themeId } = raw;
  // const exercisesSerialized = exercises.map((exercise) =>
  //   fromApiToExercise(exercise),
  // );
  return {
    unitId,
    title,
    themeId,
    description,
    avatar: avatar || 'unAvatar',
    svgAvatar: MdFamilyRestroom,
    exercises: [],
    flags: {
      isSvgAvatar: true,
      isAvatar: Boolean(avatar),
    },
  };
};
