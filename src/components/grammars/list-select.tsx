import clsx from 'clsx';
import React, { useMemo } from 'react';

import { ListSelectAdd } from './list-select-add';
import { ListSelectItem } from './list-select-item';

export const ListSelect = ({
  selectIndex,
  onSelectClick,
}: {
  selectIndex: number;
  onSelectClick: (index: number) => void;
}): React.ReactElement => {
  const fragmentTransformY = useMemo(() => {
    return selectIndex * 76;
  }, [selectIndex]);
  return (
    <div className="flex space-x-12">
      <div className="h-[511px] min-w-[356px]">
        <ul className="w-full relative">
          <div
            className={clsx(
              'absolute left-0 right-0 h-[76px] bg-white border rounded-lg shadow-lg z-[2]',
              'transition-transform duration-300',
            )}
            style={{ transform: `translate(0, ${fragmentTransformY}px)` }}
          />
          {Array.from(Array(6)).map((_, index) => (
            <ListSelectItem
              key={index}
              onClick={() => {
                onSelectClick(index);
              }}
            />
          ))}
          <ListSelectAdd
            onClick={() => {
              onSelectClick(6);
            }}
          />
        </ul>
      </div>
    </div>
  );
};
