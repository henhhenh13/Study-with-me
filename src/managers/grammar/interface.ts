import { FetchStatus } from '../../contains/interface';

interface GrammarApi {
  grammarId: string;
  grammarFormula: string;
  grammarName: string;
  grammarDetail: string;
  grammarExample: string;
}

export interface Grammar {
  grammarId: string;
  grammarFormula: string;
  grammarName: string;
  grammarDetail: string[];
  grammarExample: string[];
}

export interface GrammarApiDefinitions {
  Grammar: GrammarApi;
  Grammars: {
    grammars: GrammarApi[];
    flags: FetchStatus;
  };
}

export interface GrammarDefinitions {
  State: {
    grammars: Map<string, GrammarApi>;
    flags: FetchStatus;
  };
  Selector: {
    grammarList: Grammar[];
    flags: FetchStatus;
  };
}
