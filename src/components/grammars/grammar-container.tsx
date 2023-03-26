import React, { useMemo, useState } from 'react';

import { useGrammarManager } from '../../managers/grammar/use-grammar-manager';
import { GrammarAdd } from './grammar-add';
import { GrammarSection } from './grammar-section';
import { ListSelect } from './list-select';

export const GrammarContainer = (): React.ReactElement => {
  const { grammars } = useGrammarManager();
  const { grammarList, flags } = grammars;
  const [selectIndex, setSelectIndex] = useState(0);

  const renderGrammarSection = useMemo(() => {
    const isGrammarAdd = selectIndex === grammarList.length;
    if (isGrammarAdd) {
      return <GrammarAdd />;
    } else
      return (
        <>
          {grammarList.map((grammar, index) => {
            return (
              <>
                {index === selectIndex ? (
                  <GrammarSection grammars={grammar} />
                ) : null}
              </>
            );
          })}
        </>
      );
  }, [grammarList, selectIndex]);
  return (
    <div className="flex space-x-12">
      {flags.isFetched ? (
        <>
          <ListSelect
            grammarList={grammarList}
            onSelectClick={setSelectIndex}
            selectIndex={selectIndex}
          />
          {renderGrammarSection}
        </>
      ) : null}
    </div>
  );
};
