import clsx from 'clsx'
import React, { useState } from 'react'
import { FaRegEdit, FaChevronRight, FaCheck, FaPlayCircle, FaTrashAlt } from 'react-icons/fa'
import { MdFamilyRestroom } from 'react-icons/md'

export const UnitItem = (): React.ReactElement => {
  const [isShowExercise, setIsShowExercise] = useState<boolean>(false)

  return (
    <li className="py-4 px-6 space-y-4 w-full bg-white rounded-lg shadow-md border hover:shadow-lg transition-all duration-500">
      <div className="flex items-center w-full gap-x-6">
        <div className="min-w-[40px] min-h-[40px] rounded-sm bg-gray-100 flex-1 flex items-center justify-center drop-shadow">
          <MdFamilyRestroom className='text-xl text-sky-600'/>
        </div>
        <div className="max-w-full">
          <div className='flex items-center justify-between'>
            <h2 className="capitalize font-semibold text-lg">
              Inclide state change
            </h2>
            <FaPlayCircle className='text-green-400 text-xl cursor-pointer transition-all duration-200 hover:text-green-500 hover:scale-125 active:text-green-600'/>
          </div>
          <p className="line-clamp-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quos, maxime impedit, voluptate vel recusandae molestias error
            deleniti eaque a aliquid minus nihil? Quod amet pariatur non maiores
            eos deserunt?
          </p>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FaRegEdit className="cursor-pointer text-blue-500 transition-all duration-200 hover:scale-125 hover:text-blue-600 active:text-blue-700" />
          <FaTrashAlt className='cursor-pointer text-red-500 transition-all duration-200 hover:scale-125 hover:text-red-600 active:text-red-700'/>
        </div>
        <div>
          <FaChevronRight
            onClick={() => {
              setIsShowExercise((prev) => !prev)
            }}
            className={clsx(
              'hover:text-blue-700 transition-all duration-200 cursor-pointer',
              isShowExercise && 'rotate-90'
            )}
          />
        </div>
      </div>
      {isShowExercise && (
        <div>
          <h2 className="font-semibold text-lg">Exercises</h2>
          <ul>
            <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200 flex items-center justify-between">
              <p>
                1.1: Look at the family tree on the opposite page. Complete the
                sentense.
              </p>
              <FaCheck className="text-green-400" />
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
              <p>1.2: Complete the sentense with words from to the box.</p>
            </li>
          </ul>
        </div>
      )}
    </li>
  )
}
