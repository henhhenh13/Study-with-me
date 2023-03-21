import { VocabularyApi, VocabularyApiDefinitions } from './interface';
import { useVocabularyApi } from './use-vocabulary-api';

interface UseVocabularyManager {
  addVocabulary: (
    vocabularies: Partial<VocabularyApi>,
  ) => Promise<VocabularyApiDefinitions['VocabularyAdd']>;
}
export const useVocabularyManager = (): UseVocabularyManager => {
  const { addVocabulary } = useVocabularyApi();

  return {
    addVocabulary,
  };
};
