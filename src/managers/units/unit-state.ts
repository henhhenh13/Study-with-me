import { atom, selector } from 'recoil';

import { UnitsDefinitions } from './interface';
import { serializationUnit } from './serialize-unit';

export const UNITS_STATE = atom<UnitsDefinitions['UnitsState']>({
  key: 'unitState',
  default: {
    units: new Map(),
    flags: {
      isFetching: true,
      isFetched: false,
      isFetchError: false,
    },
  },
});

export const UNITS_SELECTOR = selector<UnitsDefinitions['UnitsSelector']>({
  key: 'unitSelector',
  get: ({ get }) => {
    const unitsState = get(UNITS_STATE);
    const units = Array.from(unitsState.units.values()).map((unit) => {
      return serializationUnit(unit);
    });

    return {
      flags: unitsState.flags,
      unitList: units,
    };
  },
});
