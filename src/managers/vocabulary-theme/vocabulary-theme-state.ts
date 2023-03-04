import { atom } from 'recoil';

import { VocabularyState } from '../vocabulary/vocabulary-state';

export interface VocabularyThemeState {
  themeId: string;
  theme: string;
  vocabularys?: VocabularyState[];
}

export const VOCABULARY_THEME_STATE = atom<Map<string, VocabularyThemeState>>({
  key: 'vocabularyThemeState',
  default: new Map(),
});
