import { AddStatus, FetchStatus } from '../../contains/interface';

interface GrammarApi {
  grammarId: string;
  grammarFormula: string;
  grammarName: string;
  grammarDetail: string;
  grammarExample: string;
}

export interface Grammar {
  grammarId: string;
  grammarName: string;
  grammarFormula: string[];
  grammarDetail: string[];
  grammarExample: string[];
}

export interface GrammarApiDefinitions {
  Grammar: GrammarApi;
  Grammars: {
    grammars: GrammarApi[];
    flags: FetchStatus;
  };
  GrammarAdd: {
    grammar: GrammarApi;
    flags: AddStatus;
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
