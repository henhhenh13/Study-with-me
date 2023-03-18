import { MdFamilyRestroom } from 'react-icons/md';

import { UnitsApiDefinitions, UnitSerialized } from './interface';

export const serializationUnit = (
  raw: UnitsApiDefinitions['UnitApi'],
): UnitSerialized => {
  const { unitId, title, description, avatar, themeId, exercises } = raw;
  return {
    unitId,
    title,
    themeId,
    description,
    avatar: avatar || 'unAvatar',
    svgAvatar: MdFamilyRestroom,
    exercises,
    flags: {
      isSvgAvatar: true,
      isAvatar: Boolean(avatar),
      hasExercise: !!exercises.length,
    },
  };
};
