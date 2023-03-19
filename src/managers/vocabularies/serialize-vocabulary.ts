import { NOT_DETAIL_IN_VOCABULARY } from '../../contains/sentences';
import { SerializedVocabulary, VocabularyApiDefinitions } from './interface';

export const serializationVocabulary = (
  raw: VocabularyApiDefinitions['Vocabulary'],
): SerializedVocabulary => {
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
