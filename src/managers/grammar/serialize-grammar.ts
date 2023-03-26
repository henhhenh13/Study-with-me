import { stringToArray } from '../units/string-to-array';
import { Grammar, GrammarApiDefinitions } from './interface';

export const serializationGrammar = (
  raw: GrammarApiDefinitions['Grammar'],
): Grammar => {
  const {
    grammarId,
    grammarExample,
    grammarFormula,
    grammarName,
    grammarDetail,
  } = raw;

  console.log(raw);

  return {
    grammarDetail: stringToArray(grammarDetail),
    grammarExample: stringToArray(grammarExample),
    grammarName,
    grammarId,
    grammarFormula,
  };
};
