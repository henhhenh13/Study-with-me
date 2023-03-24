import React, { useMemo } from 'react';
import { Toaster } from 'sonner';

import { UnitList } from './components/units/unit-list';
import { useSectionManager } from './managers/use-section-manager/use-section-manager';
import { Grammars } from './page/grammars';
import { Vocabularies } from './page/vocabularies';
import { MainBody } from './sections/main-body';
import { Sidebar } from './sections/sidebar';

export default function App(): React.ReactElement {
  const { section } = useSectionManager();

  const render = useMemo(() => {
    switch (section) {
      case 'units':
        return <UnitList />;
      case 'vocabularies':
        return <Vocabularies />;
      case 'grammars':
        return <Grammars />;
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
