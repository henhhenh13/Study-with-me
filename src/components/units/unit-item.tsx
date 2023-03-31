import clsx from 'clsx';
import React, { useState } from 'react';
import {
  FaChevronRight,
  FaPlayCircle,
  FaRegEdit,
  FaTrashAlt,
} from 'react-icons/fa';

import { useExerciseManager } from '../../managers/exercise/use-exercise-manager';
import { Unit } from '../../managers/units/interface';
import { UnitExerciseItem } from './unit-exercise-item';

interface UnitItemProps extends Unit {
  unitIndex: number;
}
export const UnitItem = ({ ...props }: UnitItemProps): React.ReactElement => {
  const {
    title,
    svgAvatar: SvgAvatar,
    flags,
    description,
    exercises,
    unitIndex,
    themeId,
    unitId,
  } = props;
  const { addExercise } = useExerciseManager();
  const [isShowExercise, setIsShowExercise] = useState<boolean>(false);

  return (
    <li
      className={clsx(
        'py-4 px-6 space-y-4 w-full bg-white rounded-lg shadow-md border hover:shadow-lg transition-all duration-500',
        isShowExercise && '!shadow-lg',
      )}
    >
      <div className="flex items-center w-full gap-x-6">
        <div className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-sm bg-gray-100 flex-1 flex items-center justify-center drop-shadow">
          {flags.isSvgAvatar && SvgAvatar != null && (
            <SvgAvatar className="text-xl text-sky-600" />
          )}
        </div>
        <div className="max-w-full flex-1">
          <div className="flex items-center justify-between">
            <h2 className="capitalize font-semibold text-lg">{title}</h2>
            <FaPlayCircle className="text-green-400 text-xl cursor-pointer transition-all duration-200 hover:text-green-500 hover:scale-125 active:text-green-600" />
          </div>
          <p className="line-clamp-1">{description}</p>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FaRegEdit
            onClick={async () => {
              await addExercise({
                exerciseType: 'vocabulary',
                themeId,
                title,
                unitId,
              });
            }}
            className="cursor-pointer text-blue-500 transition-all duration-200 hover:scale-125 hover:text-blue-600 active:text-blue-700"
          />
          <FaTrashAlt className="cursor-pointer text-red-500 transition-all duration-200 hover:scale-125 hover:text-red-600 active:text-red-700" />
        </div>
        {flags.hasExercise ? (
          <button
            className="flex-1 flex group cursor-pointer"
            onClick={() => {
              setIsShowExercise((prev) => !prev);
            }}
          >
            <FaChevronRight
              className={clsx(
                'group-hover:text-blue-700 group-hover:scale-125 transition-all duration-200 ml-auto',
                isShowExercise && 'rotate-90 scale-125 text-blue-700',
              )}
            />
          </button>
        ) : null}
      </div>
      {isShowExercise && flags.hasExercise ? (
        <div>
          <h2 className="font-semibold text-lg">Exercises</h2>
          <ul>
            {exercises.map((exercise, index) => (
              <UnitExerciseItem
                key={index}
                exercise={exercise}
                index={index}
                themeId={themeId}
                unitIndex={unitIndex}
              />
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
};
