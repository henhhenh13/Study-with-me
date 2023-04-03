import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { SECTION_STATE, SectionState } from './section-state';

interface UseSectionManager {
  section: SectionState;
  updateSection: (section: SectionState) => void;
}
export const useSectionManager = (): UseSectionManager => {
  const [section, setSectionState] = useRecoilState(SECTION_STATE);

  const updateSection = useCallback(
    (section: SectionState) => {
      setSectionState(section);
    },
    [setSectionState],
  );

  return {
    section: section,
    updateSection,
  };
};
