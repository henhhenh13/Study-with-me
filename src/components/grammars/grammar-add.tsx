import { Transition } from '@headlessui/react';
import React, { ChangeEvent, useCallback, useState } from 'react';

import { Button } from '../../elements/button';

export const GrammarAdd = (): React.ReactElement => {
  const [{ name, formula, meaning, example }, setGrammars] = useState({
    name: '',
    formula: '',
    meaning: '',
    example: '',
  });

  const handleGrammarsChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
      type: 'name' | 'formula' | 'meaning' | 'example',
    ) => {
      switch (type) {
        case 'name':
          setGrammars((prevState) => {
            return { ...prevState, [type]: e.target.value };
          });
          break;
        case 'formula':
          setGrammars((prevState) => {
            return { ...prevState, [type]: e.target.value };
          });
          break;
        case 'meaning':
          setGrammars((prevState) => {
            return { ...prevState, [type]: e.target.value };
          });
          break;
        case 'example':
          setGrammars((prevState) => {
            return { ...prevState, [type]: e.target.value };
          });
          break;
        default:
          return;
      }
    },
    [],
  );

  return (
    <Transition
      show
      appear
      enter="ease-out duration-300 origin-top-right"
      enterFrom="opacity-0 scale-[0.95] translate-x-[10px] -translate-y-[5px]"
      enterTo="opacity-100 scale-100 translate-x-0 translate-y-0"
    >
      <div className="overflow-y-auto custom-scrollbar min-w-[630px] max-w-[630px] h-full border rounded-lg shadow-lg min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] bg-white py-6 space-y-6">
        <div className="w-full px-8">
          <input
            value={name}
            onChange={(e) => handleGrammarsChange(e, 'name')}
            className="text-3xl text-center text-blue-500 w-full outline-none border-b"
            placeholder="Grammar name..."
          />
        </div>

        <div className="w-[400px] bg-gray-200 mx-auto py-8 text-center text-lg rounded-md">
          <input
            value={formula}
            onChange={(e) => handleGrammarsChange(e, 'formula')}
            className="w-full outline-none bg-transparent text-center"
            placeholder="Grammar formula..."
          />
        </div>
        <div className="px-6 space-y-1.5">
          <div>
            <h2 className="font-semibold">What is Simple sentence (Câu đơn)</h2>
            <textarea
              onChange={(e) => handleGrammarsChange(e, 'meaning')}
              value={meaning}
              className="w-full outline-none border rounded-md border-blue-500 mt-2 p-2 ring-[1px] ring-transparent focus:ring-sky-500"
              rows={4}
            />
          </div>
          <div>
            <h2 className="font-semibold">
              Example for Simple sentence (Câu đơn)
            </h2>
            <div>
              <textarea
                onChange={(e) => handleGrammarsChange(e, 'example')}
                value={example}
                className="w-full outline-none border rounded-md border-blue-500 mt-2 p-2 ring-[1px] ring-transparent focus:ring-sky-500"
                rows={7}
              />
            </div>
          </div>
        </div>
        <Button
          color="primary"
          variants="background"
          className="px-6 py-1.5 ml-auto mr-6"
        >
          Add
        </Button>
      </div>
    </Transition>
  );
};
