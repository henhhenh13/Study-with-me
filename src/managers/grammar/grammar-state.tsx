import { atom, selector } from 'recoil';

import { GrammarDefinitions } from './interface';
import { serializationGrammar } from './serialize-grammar';

export const GRAMMARS_STATE = atom<GrammarDefinitions['State']>({
  key: 'grammarState',
  default: {
    grammars: new Map(),
    flags: {
      isFetching: true,
      isFetchError: false,
      isFetched: false,
    },
  },
});

export const GRAMMARS_SELECTOR = selector<GrammarDefinitions['Selector']>({
  key: 'grammarSelector',
  get: ({ get }) => {
    const grammarState = get(GRAMMARS_STATE);
    const grammars = Array.from(grammarState.grammars.values()).map(
      (grammar) => {
        return serializationGrammar(grammar);
      },
    );
    return {
      grammars,
      flags: grammarState.flags,
    };
  },
});
