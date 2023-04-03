import { IconType } from 'react-icons/lib';

import { FetchStatus } from '../../contains/interface';
import { ExerciseApi } from '../exercise/interface';

export interface UnitApi {
  unitId: string;
  title: string;
  description: string;
  themeId: string;
  avatar: string | null;
  svgAvatar: IconType | null;
  exercises: ExerciseApi[];
}

export interface Unit {
  unitId: string;
  title: string;
  description: string;
  avatar: string;
  svgAvatar: string | IconType;
  exercises: ExerciseApi[];
  themeId: string;
  flags: {
    isSvgAvatar: boolean;
    isAvatar: boolean;
    hasExercise: boolean;
  };
}

export interface UnitsApiDefinitions {
  Units: {
    units: UnitApi[];
    flags: FetchStatus;
  };
}

export interface UnitsDefinitions {
  UnitsState: {
    units: Map<string, UnitApi>;
    flags: FetchStatus;
  };
  UnitsSelector: {
    unitList: Unit[];
    flags: FetchStatus;
  };
}
