import { atom } from 'recoil';

import { SerializedVocabulary } from '../vocabulary/serialized-vocabulary';

export interface VocabularyThemeState {
  themeId: string;
  theme: string;
  vocabularies?: SerializedVocabulary[];
}

export const VOCABULARY_THEME_STATE = atom<Map<string, VocabularyThemeState>>({
  key: 'vocabularyThemeState',
  default: new Map(),
});
