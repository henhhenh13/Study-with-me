import React, { useEffect } from 'react';

import { useUnitManager } from '../../managers/units/use-unit-manager';
import { UnitItem } from './unit-item';

export const UnitList = (): React.ReactElement => {
  const { fetchUnit, unitList } = useUnitManager();
  const { units, flags } = unitList;
  useEffect(() => {
    if (flags.isFetching) {
      fetchUnit();
    }
  }, []);

  return (
    <div className="w-[60%] px-6 h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="w-full">
        <ul className="w-full space-y-6 h-screen overflow-y-auto">
          {flags.isFetched
            ? units.map((unit, index) => (
                <UnitItem {...unit} unitIndex={index + 1} key={unit.unitId} />
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};
