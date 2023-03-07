import React from 'react';

import { Button } from '../../elements/button';
export const AddVocabularyCard = (): React.ReactElement => {
  return (
    <div className="w-[400px] max-h-[calc(100vh-112px)] bg-white border-4 border-blue-500">
      <input
        className="text-center py-8 w-full text-2xl italic font-semibold border-b-2 outline-none"
        placeholder="Enter Theme Name..."
      />
      <ul className="w-full max-w-full overflow-hidden h-[calc(100vh-292px)] overflow-y-auto px-4 divide-y scroll-smooth">
        {Array.from(Array(13)).map((_, index) => (
          <li
            key={index}
            className="w-full flex items-center justify-between py-1"
          >
            <div className="flex items-center">
              <div className="font-bold capitalize w-28 h-[16px] bg-gray-300 rounded-sm animate-pulse" />
              <div className="mx-2">-</div>
              <div className="font-bold capitalize w-28 h-[16px] bg-gray-300 rounded-sm animate-pulse" />
            </div>
            <div className="space-x-2.5 flex items-center">
              <Button
                variants="text"
                color="primary"
                disabled
                className="text-blue-400"
              >
                Edit
              </Button>
              <Button
                variants="text"
                color="danger"
                disabled
                className="text-red-400"
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
        <li>
          <Button
            variants="background"
            color="primary"
            className="w-2/4 mx-auto py-2 mt-4"
          >
            Add Theme
          </Button>
        </li>
      </ul>
    </div>
  );
};
