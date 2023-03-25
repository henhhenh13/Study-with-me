import React, { useState } from 'react';

import { GrammarSection } from '../components/grammars/grammar-section';
import { ListSelect } from '../components/grammars/list-select';

export const Grammars = (): React.ReactElement => {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div className="w-max px-6 h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-bold">Grammars</h1>
      </div>
      <div className="flex space-x-12">
        <ListSelect onSelectClick={setSelectIndex} selectIndex={selectIndex} />
        <GrammarSection title={String(selectIndex)} />
      </div>
    </div>
  );
};
