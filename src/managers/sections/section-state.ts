import { atom } from 'recoil';

export type SectionState = 'units' | 'vocabularies' | 'exercise' | 'grammars';

export const SECTION_STATE = atom<SectionState>({
  key: 'sectionState',
  default: 'units',
});
