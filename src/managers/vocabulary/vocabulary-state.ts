import { atom } from 'recoil';

import { SerializedVocabulary } from './serialized-vocabulary';

export interface VocabulariesState {
  vocabularyId: string;
  vocabulary: string;
  themeId: string;
  detail?: string | null;
  translations: Record<string, string>;
}

export const VOCABULARIES_STATE = atom<Map<string, SerializedVocabulary>>({
  key: 'vocabulariesState',
  default: new Map(),
});
