import { AddStatus, FetchStatus } from '../../contains/interface';

export interface VocabularyApi {
  vocabularyId: string;
  vocabulary: string;
  translation: string;
  themeId: string;
  detail: string | null;
}

export interface SerializedVocabulary {
  vocabularyId: string;
  vocabulary: string;
  translation: string;
  themeId: string;
  detail: string;
  flags: {
    hasDetail: boolean;
  };
}

export interface VocabularyApiDefinitions {
  Vocabulary: VocabularyApi;
  Vocabularies: {
    vocabularies: VocabularyApi[];
    flags: FetchStatus;
  };
  VocabularyAdd: {
    vocabulary: VocabularyApi;
    flags: AddStatus;
  };
}
