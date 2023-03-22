import { useModal } from '@ebay/nice-modal-react';
import React, { useCallback, useMemo } from 'react';
import { FaCheck, FaSpinner } from 'react-icons/fa';

import { useActiveExercise } from '../../managers/active-exercise/use-active-exercise';
import { ExerciseApi } from '../../managers/exercise/interface';
import { useExerciseManager } from '../../managers/exercise/use-exercise-manager';
import { ModalVocabulary } from '../modals/modal-vocabulary/modal-vocabulary';

interface UnitExerciseItemProps {
  exercise: ExerciseApi;
  themeId: string;
  index: number;
  unitIndex: number;
}

export const UnitExerciseItem = ({
  exercise,
  index,
  unitIndex,
}: UnitExerciseItemProps): React.ReactElement => {
  const { fetchVocabularyExerciseByThemeId, getVocabularyExerciseById } =
    useExerciseManager();
  const { exerciseList } = useExerciseManager();
  const { changeActiveExercise } = useActiveExercise();
  const { flags } = exerciseList;
  const { show } = useModal(ModalVocabulary);

  const renderIcon = useMemo(() => {
    const { isFetched, isFetching, isFetchError } = flags;
    switch (true) {
      case isFetched:
        return <FaCheck className="text-green-400" />;
      case isFetching:
        return <FaSpinner className="text-green-400 animate-spin" />;
      case isFetchError:
        return <FaCheck className="text-red-400" />;
    }
  }, [flags]);

  const handleOpenExercise = useCallback(async () => {
    await fetchVocabularyExerciseByThemeId(exercise);
    const exerciseFetched = getVocabularyExerciseById(exercise.exerciseId);
    if (exerciseFetched && exerciseFetched.flags.hasVocabularyExercise) {
      await changeActiveExercise(exerciseFetched);
      show();
    }
  }, [
    changeActiveExercise,
    exercise.exerciseId,
    fetchVocabularyExerciseByThemeId,
    getVocabularyExerciseById,
    show,
  ]);

  return (
    <div>
      <li
        onClick={handleOpenExercise}
        className="cursor-pointer hover:text-blue-600 transition-colors duration-200 flex items-center justify-between"
      >
        <p>
          {unitIndex}.{index + 1}: {exercise.title}
        </p>
        {renderIcon}
      </li>
    </div>
  );
};
