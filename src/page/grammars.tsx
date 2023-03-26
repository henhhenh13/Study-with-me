import React, { useEffect, useMemo, useState } from 'react';

import { GrammarContainer } from '../components/grammars/grammar-container';
import { useGrammarManager } from '../managers/grammar/use-grammar-manager';

export const Grammars = (): React.ReactElement => {
  const { grammars, fetchGrammars } = useGrammarManager();

  useEffect(() => {
    if (grammars.flags.isFetching) {
      fetchGrammars();
    }
  }, [fetchGrammars, grammars.flags.isFetching]);

  return (
    <div className="w-max px-6 h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-bold">Grammars</h1>
        <GrammarContainer />
      </div>
    </div>
  );
};
