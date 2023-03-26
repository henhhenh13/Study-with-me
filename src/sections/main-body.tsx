import React, { type PropsWithChildren } from 'react';

export const MainBody = ({
  children,
}: PropsWithChildren<unknown>): React.ReactElement => {
  return (
    <div className="w-full h-screen bg-[#f8f9fa] flex flex-nowrap overflow-hidden">
      {children}
    </div>
  );
};
