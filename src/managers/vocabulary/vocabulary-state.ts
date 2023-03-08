import { atom } from 'recoil';

export interface VocabulariesState {
  vocabularyId: string;
  vocabulary: string;
  themeId: string;
  translations: Record<string, string>;
}

export const VOCABULARIES_STATE = atom<Map<string, VocabulariesState>>({
  key: 'vocabulariesState',
  default: new Map(),
});
