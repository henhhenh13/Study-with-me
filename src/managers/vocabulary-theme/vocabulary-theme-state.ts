import { atom } from 'recoil';

import { VocabulariesState } from '../vocabulary/vocabulary-state';

export interface VocabularyThemeState {
  themeId: string;
  theme: string;
  vocabularies?: VocabulariesState[];
}

export const VOCABULARY_THEME_STATE = atom<Map<string, VocabularyThemeState>>({
  key: 'vocabularyThemeState',
  default: new Map(),
});
