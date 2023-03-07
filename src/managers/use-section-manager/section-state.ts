import { atom } from 'recoil';

export type SectionState = 'units' | 'vocabularys' | 'exercise';

export const SECTION_STATE = atom<SectionState>({
  key: 'sectionState',
  default: 'units',
});
