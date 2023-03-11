import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import vocabulariesJson from '../../data/vocabularies.json';
import generatorUuid from '../../utils/generatorUuid';
import {
  serializationVocabulary,
  SerializedVocabulary,
} from './serialized-vocabulary';
import { VOCABULARIES_STATE } from './vocabulary-state';

interface UseVocabulary {
  getVocabularies: () => void;
  addVocabulary: (vocabularies: {
    themeId: string;
    vocabulary: string;
    translationVn: string;
    detail: string | null;
  }) => void;
  vocabularies: SerializedVocabulary[];
}

export const useVocabulary = (): UseVocabulary => {
  const [vocabulariesState, setVocabulariesState] =
    useRecoilState(VOCABULARIES_STATE);
  const getVocabularies = useCallback(() => {
    const newMaps = new Map();
    vocabulariesJson.forEach((vocabulary) => {
      const serializedVocabulary = serializationVocabulary(vocabulary);
      newMaps.set(vocabulary.vocabularyId, serializedVocabulary);
    }, []);

    setVocabulariesState(newMaps);
  }, [setVocabulariesState]);
  const addVocabulary = useCallback(
    (vocabularies: {
      themeId: string;
      vocabulary: string;
      translationVn: string;
      detail: string | null;
    }) => {
      setVocabulariesState((prevState) => {
        prevState = new Map(prevState);
        const { themeId, vocabulary, translationVn, detail } = vocabularies;
        const uuid = generatorUuid();
        const newVocabulary: SerializedVocabulary = serializationVocabulary({
          vocabularyId: uuid,
          themeId,
          vocabulary,
          translations: {
            vn: translationVn,
          },
          detail,
        });
        prevState.set(uuid, newVocabulary);
        return prevState;
      });
    },
    [setVocabulariesState],
  );
  return {
    vocabularies: Array.from(vocabulariesState.values()),
    getVocabularies,
    addVocabulary,
  };
};
