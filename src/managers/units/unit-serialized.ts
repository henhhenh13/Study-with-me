import { MdFamilyRestroom } from 'react-icons/md';

import { UnitsApiDefinitions, UnitSerialized } from './interface';

export const fromApiToUnit = (
  raw: UnitsApiDefinitions['UnitApi'],
): UnitSerialized => {
  const { unitId, title, description, avatar, themeId } = raw;
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
