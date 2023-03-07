import { useRecoilCallback, useRecoilState } from 'recoil';

import { ActiveExerciseState } from '../active-exercise/active-exercise-state';
import { VOCABULARYS_STATE } from '../vocabulary/vocabulary-state';
import { EXERCISE_STATE } from './exercise-state';

interface UseExerciseManager {
  exercises: ActiveExerciseState[] | undefined;
  getVbrsByExerciseId: (
    exercise: ActiveExerciseState,
    themeIdTemp: string,
  ) => void;
}

export const useExerciseManager = (): UseExerciseManager => {
  const [exerciseState, setExerciseState] = useRecoilState(EXERCISE_STATE);

  const getVbrsByExerciseId = useRecoilCallback(
    ({ snapshot }) =>
      (exercise: ActiveExerciseState, themeIdTemp: string) => {
        const release = snapshot.retain();
        const vbrState = snapshot.getLoadable(VOCABULARYS_STATE).getValue();
        const vbrs = Array.from(vbrState.values());
        const exerciseVbr = vbrs.filter(
          ({ themeId }) => themeId === themeIdTemp,
        );
        setExerciseState((prev) => {
          new Map(prev);
          prev.set(exercise.exerciseId, {
            ...exercise,
            vocabularys: exerciseVbr,
          });

          return prev;
        });

        release();
      },
    [setExerciseState],
  );

  return {
    exercises: Array.from(exerciseState.values()),
    getVbrsByExerciseId,
  };
};
