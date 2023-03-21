import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Button } from './button';

interface LoadingButtonProps {
  onClick: () => Promise<void>;
  className?: string;
  title: string;
}
export const LoadingButton = ({
  title,
  className,
  onClick,
}: LoadingButtonProps): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingWhenClick = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  }, [isLoading, onClick]);

  return (
    <Button
      onClick={handleLoadingWhenClick}
      variants="background"
      color="primary"
      className={clsx('space-x-1', className, isLoading && 'cursor-progress')}
    >
      <FaSpinner
        className={clsx(
          'transition-opacity duration-200 delay-75',
          isLoading ? 'opacity-100 animate-spin' : 'opacity-0',
        )}
      />
      <span
        className={clsx(
          'transition-transform duration-100',
          !isLoading && '-translate-x-[10px]',
        )}
      >
        {title}
      </span>
    </Button>
  );
};
