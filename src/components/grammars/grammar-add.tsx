import { Transition } from '@headlessui/react';
import React, { ChangeEvent, useCallback, useState } from 'react';

import { LoadingButton } from '../../elements/loading-button';
import { useGrammarManager } from '../../managers/grammar/use-grammar-manager';
import { useToastManager } from '../../managers/toast-manager.tsx/use-toat-manager';

export const GrammarAdd = (): React.ReactElement => {
  const { addGrammar } = useGrammarManager();
  const { errorToast, successToast } = useToastManager();
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

  const checkEmptyAnyField = useCallback(() => {
    return Boolean(name && formula && meaning && example);
  }, [example, formula, meaning, name]);

  const clearAllValue = useCallback(() => {
    setGrammars(() => {
      return {
        name: '',
        formula: '',
        meaning: '',
        example: '',
      };
    });
  }, []);

  const handleAddGrammar = useCallback(async () => {
    const hasEmptyField = checkEmptyAnyField();
    if (hasEmptyField) {
      const { isError, isAdded } = await addGrammar({
        grammarName: name,
        grammarExample: example,
        grammarFormula: formula,
        grammarDetail: meaning,
      });
      switch (true) {
        case isAdded: {
          clearAllValue();
          successToast(`You added "${name}"`);
          return;
        }
        case isError: {
          errorToast(`You failed add "${name}"`);
          return;
        }
      }
    } else {
      errorToast('Do not empty any field');
    }
  }, [
    addGrammar,
    checkEmptyAnyField,
    clearAllValue,
    errorToast,
    example,
    formula,
    meaning,
    name,
    successToast,
  ]);

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

        <textarea
          value={formula}
          onChange={(e) => handleGrammarsChange(e, 'formula')}
          className="w-[400px] bg-gray-200 mx-auto text-center text-lg rounded-md outline-none block"
          placeholder="Grammar formula..."
        />
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
        <LoadingButton
          onClick={handleAddGrammar}
          title="Add Grammar"
          className="ml-auto mr-6 p-2 my-2"
        />
      </div>
    </Transition>
  );
};
