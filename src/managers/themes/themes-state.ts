import { atom, selector } from 'recoil';

import { serializationVocabulary } from '../vocabularies/serialize-vocabulary';
import { Theme, ThemesDefinitions } from './interface';

export const THEMES_STATE = atom<ThemesDefinitions['ThemesState']>({
  key: 'themesState',
  default: {
    themes: new Map(),
    flags: {
      isFetched: false,
      isFetching: true,
      isFetchError: false,
    },
  },
});

export const THEMES_SELECTOR = selector<ThemesDefinitions['ThemesSelector']>({
  key: 'themeSelector',
  get: ({ get }) => {
    const { themes, flags } = get(THEMES_STATE);
    const newThemes: Theme[] = Array.from(themes.values()).map(
      ({ theme, themeId, vocabularies }) => {
        const newVocabularies = vocabularies?.length
          ? vocabularies.map((vocabulary) =>
              serializationVocabulary(vocabulary),
            )
          : [];
        return {
          theme,
          themeId,
          vocabularies: newVocabularies,
        };
      },
    );
    return {
      themes: newThemes,
      flags,
    };
  },
});
