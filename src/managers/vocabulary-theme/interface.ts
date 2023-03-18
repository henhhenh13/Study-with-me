import { FetchStatus } from '../../contains/interface';
import { SerializedVocabulary } from '../vocabulary/serialized-vocabulary';

export interface ThemeApi {
  themeId: string;
  theme: string;
  //TODO: Add vocabulary interface
  vocabularies: SerializedVocabulary[] | null;
}
export interface ThemeApiDefinitions {
  ThemeApi: ThemeApi;
  Themes: {
    themes: ThemeApi[];
    flags: FetchStatus;
  };
}

export interface ThemesDefinitions {
  ThemesState: {
    themes: Map<string, ThemeApi>;
    flags: FetchStatus;
  };
  ThemesSelector: {
    themes: ThemeApi[];
    flags: FetchStatus;
  };
}
