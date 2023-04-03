import { AddStatus, FetchStatus } from '../../contains/interface';
import { Vocabulary, VocabularyApi } from '../vocabularies/interface';

export interface ThemeApi {
  themeId: string;
  theme: string;
  vocabularies: VocabularyApi[] | null;
}
export interface ThemeApiDefinitions {
  Theme: ThemeApi;
  Themes: {
    themes: ThemeApi[];
    flags: FetchStatus;
  };
  ThemeAdd: {
    theme: ThemeApi;
    flags: AddStatus;
  };
}
export interface Theme {
  themeId: string;
  theme: string;
  vocabularies: Vocabulary[];
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
