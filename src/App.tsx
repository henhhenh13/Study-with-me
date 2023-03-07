import React, { useEffect, useMemo } from 'react';
import { Toaster } from 'sonner';

import { UnitList } from './components/units/unit-list';
import { useSectionManager } from './managers/use-section-manager/use-section-manager';
import { useVocabulary } from './managers/vocabulary/use-vocabulary';
import { Vocabularys } from './page/vocabularys';
import { MainBody } from './sections/main-body';
import { Sidebar } from './sections/sidebar';

export default function App(): React.ReactElement {
  const { getVocabularys, vocabularys } = useVocabulary();
  const { section } = useSectionManager();

  console.log('vocabularys', vocabularys);

  useEffect(() => {
    getVocabularys();
  }, []);

  const render = useMemo(() => {
    switch (section) {
      case 'units':
        return <UnitList />;
      case 'vocabularys':
        return <Vocabularys />;
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
