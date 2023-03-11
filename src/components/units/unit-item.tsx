import { useModal } from '@ebay/nice-modal-react';
import clsx from 'clsx';
import React, { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import {
  FaChevronRight,
  FaPlayCircle,
  FaRegEdit,
  FaTrashAlt,
} from 'react-icons/fa';

import { type UnitSerialized } from '../../managers/units/unit-serialized';
import { ModalSentence } from '../modals/modal-sentence/modal-sentence';
import { UnitExerciseItem } from './unit-exercise-item';

interface UnitItemProps extends UnitSerialized {
  unitIndex: number;
}
export const UnitItem = ({ ...props }: UnitItemProps): React.ReactElement => {
  const { show } = useModal(ModalSentence);

  const {
    title,
    svgAvatar: SvgAvatar,
    flags,
    description,
    exercises,
    unitIndex,
    themeId,
  } = props;
  const [isShowExercise, setIsShowExercise] = useState<boolean>(false);

  return (
    <li
      className={clsx(
        'py-4 px-6 space-y-4 w-full bg-white rounded-lg shadow-md border hover:shadow-lg transition-all duration-500',
        isShowExercise && '!shadow-lg',
      )}
    >
      <div className="flex items-center w-full gap-x-6">
        <div className="min-w-[40px] min-h-[40px] rounded-sm bg-gray-100 flex-1 flex items-center justify-center drop-shadow">
          {flags.isSvgAvatar && SvgAvatar != null && (
            <SvgAvatar className="text-xl text-sky-600" />
          )}
        </div>
        <div className="max-w-full">
          <div className="flex items-center justify-between">
            <h2 className="capitalize font-semibold text-lg">{title}</h2>
            <FaPlayCircle
              onClick={() => {
                show();
              }}
              className="text-green-400 text-xl cursor-pointer transition-all duration-200 hover:text-green-500 hover:scale-125 active:text-green-600"
            />
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
      </div>
      {isShowExercise && (
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
      )}
    </li>
  );
};
