import { Transition } from '@headlessui/react';
import React, { Fragment, useCallback, useEffect, useState } from 'react';

import { Grammar } from '../../managers/grammar/interface';

interface GrammarSectionProps {
  grammars: Grammar;
}
export const GrammarSection = (
  props: GrammarSectionProps,
): React.ReactElement => {
  const { grammars } = props;
  const {
    grammarFormula,
    grammarId,
    grammarExample,
    grammarName,
    grammarDetail,
  } = grammars;
  const [isShow, setIsShow] = useState(true);
  const resetIsShowing = useCallback(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 100);
  }, []);

  useEffect(() => {
    setIsShow(false);
    resetIsShowing();
  }, [resetIsShowing, grammarId]);

  return (
    <>
      {isShow ? (
        <Transition
          as={Fragment}
          show={isShow}
          appear
          enter="ease-out duration-300 origin-top-right"
          enterFrom="opacity-0 scale-[0.95] translate-x-[10px] -translate-y-[5px]"
          enterTo="opacity-100 scale-100 translate-x-0 translate-y-0"
        >
          <div className="overflow-y-auto custom-scrollbar min-w-[630px] max-w-[630px] h-full border rounded-lg shadow-lg min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] bg-white py-6 space-y-6">
            <h2 className="text-3xl text-center text-blue-500">
              {grammarName}
            </h2>
            <ul className="w-[400px] bg-gray-200 mx-auto py-8 text-center text-lg rounded-md">
              {grammarFormula.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
            <div className="px-6 space-y-1.5">
              <div>
                <h2 className="font-semibold">What is {grammarName}</h2>
                <ul className="list-disc pl-[20px] space-y-1">
                  {grammarDetail.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold">Example for {grammarName}</h2>
                <ul className="list-disc pl-[20px] space-y-1">
                  {grammarExample.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Transition>
      ) : null}
    </>
  );
};
