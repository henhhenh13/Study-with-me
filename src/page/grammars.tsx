import React from 'react';

import { ListSelect } from '../components/grammars/list-select';

export const Grammars = (): React.ReactElement => {
  return (
    <div className="w-max px-6 h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-bold">Grammars</h1>
      </div>
      <div className="flex space-x-12">
        <ListSelect />
        <div className="min-w-[630px] h-full border rounded-lg shadow-lg min-h-[511px] max-h-[511px] bg-white">
          Body
        </div>
      </div>
    </div>
  );
};
