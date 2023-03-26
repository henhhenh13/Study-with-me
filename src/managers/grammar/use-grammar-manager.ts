import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { AddStatus } from '../../contains/interface';
import { GRAMMARS_SELECTOR, GRAMMARS_STATE } from './grammar-state';
import { GrammarDefinitions } from './interface';
import { GrammarAddApiArgs, useGrammarApi } from './use-grammar-api';

interface UseGrammarManager {
  grammars: GrammarDefinitions['Selector'];

  fetchGrammars: () => Promise<void>;
  addGrammar: (grammars: GrammarAddApiArgs) => Promise<AddStatus>;
}
export const useGrammarManager = (): UseGrammarManager => {
  const { fetchGrammars: fetchGrammarsApi, addGrammar: addGrammarApi } =
    useGrammarApi();
  const setGrammarsState = useSetRecoilState(GRAMMARS_STATE);
  const grammarSelector = useRecoilValue(GRAMMARS_SELECTOR);

  const fetchGrammars = useCallback(async () => {
    const { grammars, flags } = await fetchGrammarsApi();
    setGrammarsState((prevState) => {
      grammars.forEach((grammar) => {
        console.log(grammar.grammarId);
        prevState.grammars.set(grammar.grammarId, grammar);
      });

      return {
        ...prevState,
        flags,
      };
    });
  }, [fetchGrammarsApi, setGrammarsState]);

  const addGrammar = useCallback(
    async (grammars: GrammarAddApiArgs) => {
      const { grammar, flags } = await addGrammarApi(grammars);
      if (flags.isAdded && !flags.isError) {
        setGrammarsState((prevState) => {
          prevState.grammars.set(grammar.grammarId, grammar);
          return {
            ...prevState,
          };
        });
      }
      return flags;
    },
    [addGrammarApi, setGrammarsState],
  );

  return {
    fetchGrammars,
    grammars: grammarSelector,
    addGrammar,
  };
};
