import { atom } from 'recoil';

export interface VocabularyState {
  vocabularyId: string;
  vocabulary: string;
  themeId: string;
  translations: Record<string, string>;
}

export const VOCABULARYS_STATE = atom<Map<string, VocabularyState>>({
  key: 'vocabularysState',
  default: new Map(),
});
