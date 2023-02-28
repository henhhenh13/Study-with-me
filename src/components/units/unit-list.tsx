import React, { useMemo } from 'react'
import { UnitItem } from './unit-item'
import { type UnitState } from '../../managers/units/unit-state'
import { MdFamilyRestroom } from 'react-icons/md'
import { fromApiToUnit } from '../../managers/units/unit-serialized'

const data: UnitState[] = [
  {
    title: 'The family',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias voluptates illum expedita, a dolorum, optio natus magnam, incidunt possimus fugiat minima eaque reiciendis! Sit sed voluptatem quam deserunt earum!',
    svgAvatar: MdFamilyRestroom,
    avatar: null,
    exercises: [
      {
        unitId: '1',
        index: '0',
        exerciseId: '0',
        exerciseType: 'vocabulary',
        title: 'Look at the family tree on the opposite page. Complete the sentense.'
      }
    ]
  },
  {
    title: 'The family 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias voluptates illum expedita, a dolorum, optio natus magnam, incidunt possimus fugiat minima eaque reiciendis! Sit sed voluptatem quam deserunt earum!',
    svgAvatar: MdFamilyRestroom,
    avatar: null,
    exercises: [
      {
        unitId: '1',
        index: '0',
        exerciseId: '0',
        exerciseType: 'vocabulary',
        title: 'Look at the family tree on the opposite page. Complete the sentense.'
      }
    ]
  }
]

export const UnitList = (): React.ReactElement => {
  const units = useMemo(() => {
    return data.map((unit) => fromApiToUnit(unit))
  }, [])
  return (
    <div className="w-[60%] px-6 h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="w-full">
        <ul className="w-full space-y-6 h-screen overflow-y-auto">
          {units.map(unit => (
            <UnitItem {...unit}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
