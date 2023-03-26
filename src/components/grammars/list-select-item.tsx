import React from 'react';
import { FaRegClock } from 'react-icons/fa';

interface ListSelectItemProps {
  title: string;
  onClick: () => void;
}
export const ListSelectItem = (
  props: ListSelectItemProps,
): React.ReactElement => {
  const { title, onClick } = props;
  return (
    <li
      onClick={onClick}
      className="cursor-pointer py-4 px-5 rounded-lg hover:bg-gray-200 hover:bg-opacity-50 relative"
    >
      <div className="flex items-center space-x-4 z-[3] relative">
        <FaRegClock className="text-2xl text-blue-500" />
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-gray-600">Grammar paragraph</p>
        </div>
      </div>
    </li>
  );
};
