import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { ActiveExerciseState } from '../active-exercise/active-exercise-state';
import {
  ExericiseVocabularyState,
  fromApiToExerciseVocabulary,
} from './exercise-serialized';
import { EXERCISE_STATE } from './exercise-state';

interface UseExerciseManager {
  exercises: ActiveExerciseState[] | undefined;
  getVbrByExerciseId: (exerciseId: string) => void;
}

const dataTemp: ExericiseVocabularyState = {
  unitId: '0',
  index: '1',
  title: 'The family',
  exerciseId: '0',
  exerciseType: 'vocabulary',
  vocabularys: [
    {
      vocabularyId: '0',
      vocabulary: 'important',
      themeId: '0,',
      translations: {
        vn: 'Quan trọng',
      },
    },
    {
      vocabularyId: '1',
      vocabulary: 'beach',
      themeId: '0,',
      translations: {
        vn: 'Bãi biển',
      },
    },
  ],
};

export const useExerciseManager = (): UseExerciseManager => {
  const [exerciseState, setExerciseState] = useRecoilState(EXERCISE_STATE);

  const getVbrByExerciseId = useCallback(
    (exerciseId: string) => {
      setExerciseState((prev) => {
        const exercises = prev;
        const serialized = fromApiToExerciseVocabulary(dataTemp);
        exercises?.set(exerciseId, serialized);
        return exercises;
      });
    },
    [setExerciseState],
  );

  return {
    exercises: Array.from(exerciseState.values()),
    getVbrByExerciseId,
  };
};
