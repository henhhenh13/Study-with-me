import React, { useEffect } from 'react';

import { VocabularyList } from '../components/vocabularys/vocabulary-list';
import { useVocabularyThemeManager } from '../managers/vocabulary-theme/use-vocabulary-theme-manager';

export const Vocabularys = (): React.ReactElement => {
  const { getVocabularyTheme } = useVocabularyThemeManager();

  useEffect(() => {
    getVocabularyTheme();
  }, []);

  return (
    <div className="w-[60%] px-6 h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-bold">Vocabularys</h1>
      </div>

      <VocabularyList />
    </div>
  );
};
