import { useModal } from '@ebay/nice-modal-react';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { useActiveExercise } from '../../managers/active-exercise/use-active-exercise';
import { useExerciseManager } from '../../managers/exercise/exercise-manager';
import { ExerciseSerialized } from '../../managers/exercise/exercise-serialized';
import { ModalVocabulary } from '../modals/modal-vocabulary/modal-vocabulary';

interface UnitExerciseItemProps {
  exercise: ExerciseSerialized;
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
  const { getVbrsByExerciseId } = useExerciseManager();
  const { updateActiveExerciseId } = useActiveExercise();
  const { show } = useModal(ModalVocabulary);

  return (
    <div>
      <li
        onClick={async () => {
          await getVbrsByExerciseId(
            {
              exerciseId: exercise.exerciseId,
              title: exercise.title,
              index: index,
              exerciseType: 'vocabulary',
              unitId: exercise.unitId,
            },
            themeId,
          );
          await updateActiveExerciseId(exercise.exerciseId);
          show();
        }}
        className="cursor-pointer hover:text-blue-600 transition-colors duration-200 flex items-center justify-between"
      >
        <p>
          {unitIndex}.{index + 1}: {exercise.title}
        </p>
        <FaCheck className="text-green-400" />
      </li>
    </div>
  );
};
