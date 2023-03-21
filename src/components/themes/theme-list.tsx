import React, { useMemo } from 'react';

import { useThemeManager } from '../../managers/themes/use-theme-manager';
import { ThemeCard } from './theme-card';
import { ThemeCardAdd } from './theme-card-add';

export const ThemeList = (): React.ReactElement => {
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
                  <ThemeCard
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
      <ThemeCardAdd />
    </div>
  );
};
