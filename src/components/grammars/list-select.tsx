import clsx from 'clsx';
import React, { useMemo, useState } from 'react';

import { ListSelectItem } from './list-select-item';

export const ListSelect = (): React.ReactElement => {
  const [selectIndex, setSelectIndex] = useState(0);

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
                setSelectIndex(index);
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
