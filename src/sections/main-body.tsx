import React, { type PropsWithChildren } from 'react';

export const MainBody = ({
  children,
}: PropsWithChildren<unknown>): React.ReactElement => {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-nowrap overflow-hidden">
      {children}
    </div>
  );
};
