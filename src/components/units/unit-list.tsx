import React, { useMemo } from 'react';

import unitsJson from '../../data/units.json';
import { fromApiToUnit } from '../../managers/units/unit-serialized';
import { UnitState } from '../../managers/units/unit-state';
import { UnitItem } from './unit-item';

export const UnitList = (): React.ReactElement => {
  const units = useMemo(() => {
    const data = unitsJson as unknown as UnitState[];
    return data.map((unit) => fromApiToUnit(unit));
  }, []);
  return (
    <div className="w-[60%] px-6 h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="w-full">
        <ul className="w-full space-y-6 h-screen overflow-y-auto">
          {units.map((unit, index) => (
            <UnitItem {...unit} unitIndex={index + 1} key={unit.unitId} />
          ))}
        </ul>
      </div>
    </div>
  );
};
