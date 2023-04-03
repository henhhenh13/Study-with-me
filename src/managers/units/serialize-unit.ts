import { MdFamilyRestroom } from 'react-icons/md';

import { Unit, UnitApi } from './interface';

export const serializationUnit = (raw: UnitApi): Unit => {
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
