import { IconType } from 'react-icons/lib';

import { FetchStatus } from '../../contains/interface';
import { ExerciseSerialized } from '../exercise/exercise-serialized';
import { ExerciseState } from '../exercise/exercise-state';

interface UnitApi {
  unitId: string;
  title: string;
  description: string;
  themeId: string;
  avatar: string | null;
  svgAvatar: IconType | null;
  exercises: ExerciseState[];
}

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

export interface UnitsApiDefinitions {
  UnitApi: UnitApi;
  Units: {
    units: UnitApi[];
    flags: FetchStatus;
  };
}

export interface UnitsDefinitions {
  UnitsState: {
    units: Map<string, UnitSerialized>;
    flags: FetchStatus;
  };
  UnitsSelector: {
    units: UnitSerialized[];
    flags: FetchStatus;
  };
}
