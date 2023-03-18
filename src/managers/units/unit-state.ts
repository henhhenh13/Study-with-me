import { atom, selector } from 'recoil';

import { UnitsDefinitions } from './interface';

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
    const { units, flags } = get(UNITS_STATE);

    return {
      flags,
      units: Array.from(units.values()),
    };
  },
});
