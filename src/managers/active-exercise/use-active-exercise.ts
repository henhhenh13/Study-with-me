import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import {
  ACTIVE_EXERCISE_ID_STATE,
  ACTIVE_EXERCISE_STATE,
  ActiveExerciseState,
} from './active-exercise-state';

interface UseExerciseManager {
  activeExercise: ActiveExerciseState | undefined;
  updateActiveExerciseId: (exerciseId: string) => void;
}
export const useActiveExercise = (): UseExerciseManager => {
  const activeExerciseState = useRecoilValue(ACTIVE_EXERCISE_STATE);
  const setActiveExerciseIdState = useSetRecoilState(ACTIVE_EXERCISE_ID_STATE);

  const updateActiveExerciseId = useCallback(
    (exerciseId: string) => setActiveExerciseIdState(exerciseId),
    [setActiveExerciseIdState],
  );

  return {
    updateActiveExerciseId,
    activeExercise: activeExerciseState,
  };
};
