import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { GRAMMARS_SELECTOR, GRAMMARS_STATE } from './grammar-state';
import { GrammarDefinitions } from './interface';
import { useGrammarApi } from './use-grammar-api';

interface UseGrammarManager {
  fetchGrammars: () => Promise<void>;
  grammars: GrammarDefinitions['Selector'];
}
export const useGrammarManager = (): UseGrammarManager => {
  const { fetchGrammars: fetchGrammarsApi } = useGrammarApi();
  const setGrammarsState = useSetRecoilState(GRAMMARS_STATE);
  const grammarSelector = useRecoilValue(GRAMMARS_SELECTOR);

  const fetchGrammars = useCallback(async () => {
    const { grammars, flags } = await fetchGrammarsApi();
    setGrammarsState((prevState) => {
      grammars.forEach((grammar) => {
        prevState.grammars.set(grammar.grammarId, grammar);
      });
      return {
        grammars: prevState.grammars,
        flags,
      };
    });
  }, [fetchGrammarsApi, setGrammarsState]);

  return {
    fetchGrammars,
    grammars: grammarSelector,
  };
};
