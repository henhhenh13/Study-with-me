import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import vocabularysJson from '../../data/vocabularys.json';
import { VOCABULARYS_STATE, VocabularyState } from './vocabulary-state';

interface UseVocabulary {
  getVocabularys: () => void;
  addVocabulary: (
    themeId: string,
    vocabulary: string,
    translationVn: string,
  ) => void;
  vocabularys: VocabularyState[];
}

export const useVocabulary = (): UseVocabulary => {
  const [vocabularysState, setVocabularysState] =
    useRecoilState(VOCABULARYS_STATE);
  const getVocabularys = useCallback(() => {
    const newMaps = new Map();
    vocabularysJson.forEach((vocabulary) => {
      newMaps.set(vocabulary.vocabularyId, vocabulary);
    }, []);

    setVocabularysState(newMaps);
  }, [setVocabularysState]);
  const addVocabulary = useCallback(
    (themeId: string, vocabulary: string, translationVn: string) => {
      setVocabularysState((prevState) => {
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
    vocabularys: Array.from(vocabularysState.values()),
    getVocabularys,
    addVocabulary,
  };
};
