import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';

import { EXERCISES_STATE } from '../../managers/exercise/exercise-state';
import { useExerciseManager } from '../../managers/exercise/use-exercise-manager';
import { UnitExercise } from '../../managers/units/interface';

interface UnitExerciseItemProps {
  exercise: UnitExercise;
  themeId: string;
  index: number;
  unitIndex: number;
}

export const UnitExerciseItem = ({
  exercise,
  themeId,
  index,
  unitIndex,
}: UnitExerciseItemProps): React.ReactElement => {
  const { fetchVocabularyExerciseById } = useExerciseManager();
  const exerciseState = useRecoilValue(EXERCISES_STATE);

  console.log(exerciseState);

  return (
    <div>
      <li
        onClick={async () => {
          await fetchVocabularyExerciseById(exercise.exerciseId);
        }}
        className="cursor-pointer hover:text-blue-600 transition-colors duration-200 flex items-center justify-between"
      >
        <p>
          {unitIndex}.{index + 1}: {exercise.title}
        </p>
        <FaSpinner className="text-green-400 animate-spin duration-100" />
      </li>
    </div>
  );
};
