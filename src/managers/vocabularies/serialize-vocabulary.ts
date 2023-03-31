import { NOT_DETAIL_IN_VOCABULARY } from '../../contains/sentences';
import { Vocabulary, VocabularyApi } from './interface';

export const serializationVocabulary = (raw: VocabularyApi): Vocabulary => {
  const { vocabulary, vocabularyId, themeId, detail, translation } = raw;

  return {
    vocabulary,
    vocabularyId,
    themeId,
    detail: detail || NOT_DETAIL_IN_VOCABULARY,
    translation,
    flags: {
      hasDetail: !!detail,
    },
  };
};
