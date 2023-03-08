import React, { useEffect, useMemo } from 'react';
import { Toaster } from 'sonner';

import { UnitList } from './components/units/unit-list';
import { useSectionManager } from './managers/use-section-manager/use-section-manager';
import { useVocabulary } from './managers/vocabulary/use-vocabulary';
import { useVocabularyThemeManager } from './managers/vocabulary-theme/use-vocabulary-theme-manager';
import { Vocabularies } from './page/vocabularies';
import { MainBody } from './sections/main-body';
import { Sidebar } from './sections/sidebar';

export default function App(): React.ReactElement {
  const { getVocabularies, vocabularies } = useVocabulary();
  const { vbrThemes } = useVocabularyThemeManager();
  const { section } = useSectionManager();

  console.log('vocabularies', vocabularies);
  console.log('vbrThemes', vbrThemes);

  useEffect(() => {
    getVocabularies();
  }, []);

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
