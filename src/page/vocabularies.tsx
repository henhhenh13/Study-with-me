import React, { useEffect } from 'react';

import { VocabularyList } from '../components/vocabularies/vocabulary-list';
import { useThemeManager } from '../managers/themes/use-theme-manager';

export const Vocabularies = (): React.ReactElement => {
  const { fetchThemes, themeList } = useThemeManager();

  useEffect(() => {
    if (themeList.flags.isFetching) {
      fetchThemes();
    }
  }, []);

  return (
    <div className="w-[60%] px-6 h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-bold">Vocabularies</h1>
      </div>

      <VocabularyList />
    </div>
  );
};
