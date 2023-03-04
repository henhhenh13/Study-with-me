import React from 'react';
import { Toaster } from 'sonner';

import { UnitList } from './components/units/unit-list';
import { MainBody } from './sections/main-body';
import { Sidebar } from './sections/sidebar';

export default function App(): React.ReactElement {
  return (
    <>
      <MainBody>
        <Sidebar />
        <UnitList />
      </MainBody>
      <Toaster richColors />
    </>
  );
}
