import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import vocabulariesJson from '../../data/vocabularies.json';
import { VOCABULARIES_STATE, VocabulariesState } from './vocabulary-state';

interface UseVocabulary {
  getVocabularies: () => void;
  addVocabulary: (
    themeId: string,
    vocabulary: string,
    translationVn: string,
  ) => void;
  vocabularies: VocabulariesState[];
}

export const useVocabulary = (): UseVocabulary => {
  const [vocabulariesState, setVocabulariesState] =
    useRecoilState(VOCABULARIES_STATE);
  const getVocabularies = useCallback(() => {
    const newMaps = new Map();
    vocabulariesJson.forEach((vocabulary) => {
      newMaps.set(vocabulary.vocabularyId, vocabulary);
    }, []);

    setVocabulariesState(newMaps);
  }, [setVocabulariesState]);
  const addVocabulary = useCallback(
    (themeId: string, vocabulary: string, translationVn: string) => {
      setVocabulariesState((prevState) => {
        prevState = new Map(prevState);
        const id = String(Array.from(prevState.values()).length);
        prevState.set(id, {
          vocabularyId: id,
          vocabulary,
          themeId,
          translations: {
            vn: translationVn,
          },
        });
        return prevState;
      });
    },
    [],
  );
  return {
    vocabularies: Array.from(vocabulariesState.values()),
    getVocabularies,
    addVocabulary,
  };
};
