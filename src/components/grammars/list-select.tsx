import clsx from 'clsx';
import React, { useMemo } from 'react';

import { Grammar } from '../../managers/grammar/interface';
import { ListSelectAdd } from './list-select-add';
import { ListSelectItem } from './list-select-item';

interface ListSelectProps {
  grammarList: Grammar[];
  selectIndex: number;
  onSelectClick: (index: number) => void;
}
export const ListSelect = (props: ListSelectProps): React.ReactElement => {
  const { selectIndex, grammarList, onSelectClick } = props;
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
          {grammarList.map(({ grammarName }, index) => (
            <ListSelectItem
              title={grammarName}
              key={index}
              onClick={() => {
                onSelectClick(index);
              }}
            />
          ))}
          <ListSelectAdd
            onClick={() => {
              onSelectClick(grammarList.length);
            }}
          />
        </ul>
      </div>
    </div>
  );
};
