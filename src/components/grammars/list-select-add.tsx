import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

interface ListSelectAddProps {
  onClick: () => void;
}
export const ListSelectAdd = ({
  onClick,
}: ListSelectAddProps): React.ReactElement => {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer py-4 px-5 rounded-lg hover:bg-gray-200 hover:bg-opacity-50 relative"
    >
      <div className="flex items-center space-x-4 z-[3] relative">
        <FaPlusCircle className="text-2xl text-blue-500" />
        <div>
          <h3 className="font-bold">New Grammar</h3>
          <p className="text-sm text-gray-600">New grammar paragraph</p>
        </div>
      </div>
    </li>
  );
};
