import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { Exercise } from '../exercise/interface';
import { ACTIVE_EXERCISE } from './active-exercise-state';

interface UseActiveExercise {
  changeActiveExercise: (exercise: Exercise) => void;
  activeExercise: Exercise;
}
export const useActiveExercise = (): UseActiveExercise => {
  const [activeExerciseState, setActiveExerciseState] =
    useRecoilState(ACTIVE_EXERCISE);

  const changeActiveExercise = useCallback(
    (exercise: Exercise) => {
      setActiveExerciseState(exercise);
    },
    [setActiveExerciseState],
  );

  return {
    changeActiveExercise,
    activeExercise: activeExerciseState,
  };
};
