import { useRecoilCallback, useRecoilState } from 'recoil';

import { ActiveExerciseState } from '../active-exercise/active-exercise-state';
import { EXERCISE_STATE } from './exercise-state';

interface UseExerciseManager {
  exercises: ActiveExerciseState[] | undefined;
  getVbrsByThemeId: (
    exercise: ActiveExerciseState,
    themeIdTemp: string,
  ) => void;
}

export const useExerciseManager = (): UseExerciseManager => {
  const [exerciseState, setExerciseState] = useRecoilState(EXERCISE_STATE);

  const getVbrsByThemeId = useRecoilCallback(
    ({ snapshot }) =>
      (exercise: ActiveExerciseState, themeIdTemp: string) => {
        const release = snapshot.retain();
        const exercisesState = snapshot.getLoadable(EXERCISE_STATE).getValue();
        if (exercisesState.has(exercise.exerciseId)) return;

        // setExerciseState((prev) => {
        //   const vbrState = snapshot.getLoadable(VOCABULARIES_STATE).getValue();
        //   const vbrs = Array.from(vbrState.values());
        //   const exerciseVbr = vbrs.filter(
        //     ({ themeId }) => themeId === themeIdTemp,
        //   );
        //   new Map(prev);
        //   prev.set(exercise.exerciseId, {
        //     ...exercise,
        //     vocabularies: exerciseVbr,
        //   });
        //
        //   return prev;
        // });

        release();
      },
    [setExerciseState],
  );

  return {
    exercises: Array.from(exerciseState.values()),
    getVbrsByThemeId,
  };
};
