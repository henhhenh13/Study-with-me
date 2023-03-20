import { supabase } from '../../supabaseClient';
import { VocabularyApi, VocabularyApiDefinitions } from './interface';

interface UseVocabularyApi {
  addVocabulary: (
    vocabularies: Partial<VocabularyApi>,
  ) => Promise<VocabularyApiDefinitions['VocabularyAdd']>;
}
export const initialVocabulary: VocabularyApi = {
  vocabularyId: 'vocabularyId',
  translation: 'translation',
  vocabulary: 'vocabulary',
  detail: null,
  themeId: 'themeId',
  createdAt: 'createdAt',
};
export const useVocabularyApi = (): UseVocabularyApi => {
  const addVocabulary: UseVocabularyApi['addVocabulary'] = async (
    vocabularies,
  ): Promise<VocabularyApiDefinitions['VocabularyAdd']> => {
    const { vocabulary, translation, themeId } = vocabularies;
    const { data, status, error } = await supabase
      .from('vocabularies')
      .insert([
        {
          themeId,
          vocabulary,
          translation,
        },
      ])
      .select<
        'detail,themeId,translation,vocabulary,vocabularyId',
        VocabularyApi
      >('detail,themeId,translation,vocabulary,vocabularyId')
      .single();
    return {
      vocabulary: data ? data : initialVocabulary,
      flags: {
        isAdded: status === 201,
        isError: !!error,
        isLoading: false,
      },
    };
  };
  return { addVocabulary };
};
