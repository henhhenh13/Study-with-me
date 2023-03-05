import React, { useEffect } from 'react';
import { Toaster } from 'sonner';

import { useVocabulary } from './managers/vocabulary/use-vocabulary';
// import { UnitList } from './components/units/unit-list';
import { Vocabularys } from './page/vocabularys';
import { MainBody } from './sections/main-body';
import { Sidebar } from './sections/sidebar';

export default function App(): React.ReactElement {
  const { getVocabularys, vocabularys } = useVocabulary();

  console.log('vocabularys', vocabularys);

  useEffect(() => {
    getVocabularys();
  }, []);

  return (
    <>
      <MainBody>
        <Sidebar />
        {/* <UnitList /> */}
        <Vocabularys />
      </MainBody>
      <Toaster richColors />
    </>
  );
}
