import React from 'react';

import { useVocabularyThemeManager } from '../../managers/vocabulary-theme/use-vocabulary-theme-manager';
import { AddVocabularyCard } from './add-vocabulary-card';
import { VocabularyCard } from './vocabulary-card';

export const VocabularyList = (): React.ReactElement => {
  const { vbrThemes } = useVocabularyThemeManager();

  return (
    <div className="w-[836px] h-[85vh] overflow-y-auto grid grid-cols-2 gap-4 custom-scrollbar">
      {!!vbrThemes.length &&
        vbrThemes.map(({ themeId, vocabularys, theme }) => (
          <VocabularyCard
            key={themeId}
            themeId={themeId}
            vocabularys={vocabularys}
            theme={theme}
          />
        ))}
      <AddVocabularyCard />
    </div>
  );
};
