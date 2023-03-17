import { IconType } from 'react-icons/lib';

import { FetchStatus } from '../../contains/interface';
import { ExerciseState } from '../exercise/exercise-state';
import { UnitSerialized } from './unit-serialized';

interface UnitApi {
  unitId: string;
  title: string;
  description: string;
  themeId: string;
  avatar: string | null;
  svgAvatar: IconType | null;
  exercises: ExerciseState[];
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
