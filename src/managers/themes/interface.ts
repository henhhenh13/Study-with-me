import { FetchStatus } from '../../contains/interface';
import {
  SerializedVocabulary,
  VocabularyApiDefinitions,
} from '../vocabularies/interface';

export interface ThemeApi {
  themeId: string;
  theme: string;
  vocabularies: VocabularyApiDefinitions['Vocabulary'][] | null;
}
export interface ThemeApiDefinitions {
  Theme: ThemeApi;
  Themes: {
    themes: ThemeApi[];
    flags: FetchStatus;
  };
}
export interface Theme {
  themeId: string;
  theme: string;
  vocabularies: SerializedVocabulary[];
}

export interface ThemesDefinitions {
  ThemesState: {
    themes: Map<string, ThemeApi>;
    flags: FetchStatus;
  };
  ThemesSelector: {
    themes: Theme[];
    flags: FetchStatus;
  };
}
