import React, { useMemo } from 'react';
import { FaCheck, FaSpinner } from 'react-icons/fa';

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
  index,
  unitIndex,
}: UnitExerciseItemProps): React.ReactElement => {
  const { fetchVocabularyExerciseById } = useExerciseManager();
  const { exerciseList } = useExerciseManager();
  const { flags } = exerciseList;

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
        {renderIcon}
      </li>
    </div>
  );
};
