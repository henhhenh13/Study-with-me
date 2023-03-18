import React, { useEffect, useMemo } from 'react';
import { Toaster } from 'sonner';

import { UnitList } from './components/units/unit-list';
import { useSectionManager } from './managers/use-section-manager/use-section-manager';
// import { useVocabularyManager } from './managers/vocabularies/use-vocabularies-manager';
// import { useVocabularyThemeManager } from './managers/themes/use-theme-manager';
import { Vocabularies } from './page/vocabularies';
import { MainBody } from './sections/main-body';
import { Sidebar } from './sections/sidebar';

export default function App(): React.ReactElement {
  // const { getVocabularies } = useVocabularyManager();
  const { section } = useSectionManager();

  // useEffect(() => {
  //   getVocabularies();
  // }, []);

  const render = useMemo(() => {
    switch (section) {
      case 'units':
        return <UnitList />;
      case 'vocabularies':
        return <Vocabularies />;
      default:
        return <UnitList />;
    }
  }, [section]);

  return (
    <>
      <MainBody>
        <Sidebar />
        {render}
      </MainBody>
      <Toaster richColors />
    </>
  );
}
