import { atom, selector } from 'recoil';

import { UnitsDefinitions } from './interface';

export const UNIT_STATE = atom<UnitsDefinitions['UnitsState']>({
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

export const UNIT_SELECTOR = selector<UnitsDefinitions['UnitsSelector']>({
  key: 'unitSelector',
  get: ({ get }) => {
    const { units, flags } = get(UNIT_STATE);

    return {
      flags,
      units: Array.from(units.values()),
    };
  },
});
