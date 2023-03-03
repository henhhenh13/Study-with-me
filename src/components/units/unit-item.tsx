import { useModal } from '@ebay/nice-modal-react';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import {
  FaCheck,
  FaChevronRight,
  FaPlayCircle,
  FaRegEdit,
  FaTrashAlt,
} from 'react-icons/fa';

import { useActiveExercise } from '../../managers/active-exercise/use-active-exercise';
import { useExerciseManager } from '../../managers/exercise/exercise-manager';
import { type UnitSerialized } from '../../managers/units/unit-serialized';
import { ModalVocabulary } from '../modals/modal-vocabulary/modal-vocabulary';

interface UnitItemProps extends UnitSerialized {
  unitIndex: number;
}
export const UnitItem = ({ ...props }: UnitItemProps): React.ReactElement => {
  const { getVbrByExerciseId } = useExerciseManager();
  const { updateActiveExerciseId } = useActiveExercise();
  const {
    title,
    svgAvatar: SvgAvatar,
    flags,
    description,
    exercises,
    unitIndex,
  } = props;
  const [isShowExercise, setIsShowExercise] = useState<boolean>(false);
  const { show } = useModal(ModalVocabulary);

  return (
    <li className="py-4 px-6 space-y-4 w-full bg-white rounded-lg shadow-md border hover:shadow-lg transition-all duration-500">
      <div className="flex items-center w-full gap-x-6">
        <div className="min-w-[40px] min-h-[40px] rounded-sm bg-gray-100 flex-1 flex items-center justify-center drop-shadow">
          {flags.isSvgAvatar && SvgAvatar != null && (
            <SvgAvatar className="text-xl text-sky-600" />
          )}
        </div>
        <div className="max-w-full">
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
          <FaRegEdit className="cursor-pointer text-blue-500 transition-all duration-200 hover:scale-125 hover:text-blue-600 active:text-blue-700" />
          <FaTrashAlt className="cursor-pointer text-red-500 transition-all duration-200 hover:scale-125 hover:text-red-600 active:text-red-700" />
        </div>
        <div>
          <FaChevronRight
            onClick={() => {
              setIsShowExercise((prev) => !prev);
            }}
            className={clsx(
              'hover:text-blue-700 transition-all duration-200 cursor-pointer',
              isShowExercise && 'rotate-90',
            )}
          />
        </div>
      </div>
      {isShowExercise && (
        <div>
          <h2 className="font-semibold text-lg">Exercises</h2>
          <ul>
            {exercises.map((exercise, index) => (
              <li
                key={exercise.exerciseId}
                onClick={() => {
                  getVbrByExerciseId('1');
                  updateActiveExerciseId('1');
                  show();
                }}
                className="cursor-pointer hover:text-blue-600 transition-colors duration-200 flex items-center justify-between"
              >
                <p>
                  {unitIndex}.{index + 1}: {exercise.title}
                </p>
                <FaCheck className="text-green-400" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
