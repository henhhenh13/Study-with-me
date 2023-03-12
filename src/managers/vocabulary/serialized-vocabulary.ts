import { NOT_DETAIL_IN_VOCABULARY } from '../../contains/sentences';
import { VocabulariesState } from './vocabulary-state';

export interface SerializedVocabulary {
  vocabularyId: string;
  vocabulary: string;
  themeId: string;
  detail: string;
  translations: Record<string, string>;
  flags: {
    hasDetail: boolean;
  };
}

export const serializationVocabulary = (
  raw: VocabulariesState,
): SerializedVocabulary => {
  const flags = {
    hasDetail: Boolean(raw.detail),
  };
  return { ...raw, detail: raw.detail || NOT_DETAIL_IN_VOCABULARY, flags };
};
