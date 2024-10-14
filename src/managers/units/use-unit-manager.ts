import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { UnitsDefinitions } from './interface';
import { UNITS_SELECTOR, UNITS_STATE } from './unit-state';
import { useUnitApi } from './use-unit-api';

interface UseUnitManager {
  fetchUnit: () => Promise<void>;
  units: UnitsDefinitions['UnitsSelector'];
}

export const useUnitManager = (): UseUnitManager => {
  const { fetchUnits } = useUnitApi();
  const setUnitState = useSetRecoilState(UNITS_STATE);
  const unitSelector = useRecoilValue(UNITS_SELECTOR);

  const fetchUnit = useCallback(async () => {
    const { units, flags } = await fetchUnits();

    setUnitState((prevState) => {
      units.forEach((unit) => {
        prevState.units.set(unit.unitId, unit);
      });
      return {
        ...prevState,
        flags,
      };
    });
  }, [fetchUnits, setUnitState]);

  return { fetchUnit, units: unitSelector };
};
