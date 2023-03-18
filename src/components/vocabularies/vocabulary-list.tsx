import React, { useMemo } from 'react';

import { useThemeManager } from '../../managers/themes/use-theme-manager';
import { AddVocabularyCard } from './add-vocabulary-card';
import { VocabularyCard } from './vocabulary-card';

export const VocabularyList = (): React.ReactElement => {
  const { themeList } = useThemeManager();
  const { themes, flags } = themeList;

  const render = useMemo(() => {
    switch (true) {
      case flags.isFetching:
        return <div>Loading...</div>;
      case flags.isFetched:
        return (
          <>
            {themes.length
              ? themes.map(({ themeId, vocabularies, theme }) => (
                  <VocabularyCard
                    key={themeId}
                    themeId={themeId}
                    vocabularies={vocabularies}
                    theme={theme}
                  />
                ))
              : null}
          </>
        );
      case flags.isFetchError:
        return <div>Error</div>;
      default:
        return <div>Loading...</div>;
    }
  }, [flags.isFetchError, flags.isFetched, flags.isFetching, themes]);
  return (
    <div className="w-[836px] h-[85vh] overflow-y-auto grid grid-cols-2 gap-4 custom-scrollbar">
      {render}
      <AddVocabularyCard />
    </div>
  );
};
