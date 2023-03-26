import React, { useMemo, useState } from 'react';

import { GrammarAdd } from '../components/grammars/grammar-add';
import { GrammarSection } from '../components/grammars/grammar-section';
import { ListSelect } from '../components/grammars/list-select';

export const Grammars = (): React.ReactElement => {
  const [selectIndex, setSelectIndex] = useState(0);
  const [isShow, setIsShow] = useState(true);

  const renderGrammarSection = useMemo(() => {
    const isGrammarAdd = selectIndex === 6;
    if (isGrammarAdd) {
      return <GrammarAdd />;
    } else return <GrammarSection title={String(selectIndex)} />;
  }, [selectIndex]);

  return (
    <div className="w-max px-6 h-screen">
      <div className="py-8">
        <h1 onClick={() => setIsShow(!isShow)} className="text-2xl font-bold">
          Grammars
        </h1>
      </div>
      <div className="flex space-x-12">
        <ListSelect onSelectClick={setSelectIndex} selectIndex={selectIndex} />
        {renderGrammarSection}
      </div>
    </div>
  );
};
