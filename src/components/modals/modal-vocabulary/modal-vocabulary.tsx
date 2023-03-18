import NiceModal, { useModal } from '@ebay/nice-modal-react';
import clsx from 'clsx';
import React, {
  FormEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { AiOutlineArrowRight, AiOutlineCloseCircle } from 'react-icons/ai';
import { TbVocabulary } from 'react-icons/tb';

import { Button } from '../../../elements/button';
import { useActiveExercise } from '../../../managers/active-exercise/use-active-exercise';
import { useToastManager } from '../../../managers/toast-manager.tsx/use-toat-manager';
// import { VocabulariesState } from '../../../managers/vocabularies/vocabularies-state';
import { ModalWrapper } from '../modal-wrapper/modal-wrapper';

export const ModalVocabulary = NiceModal.create((): React.ReactElement => {
  const { visible, hide, remove } = useModal();
  const { activeExercise } = useActiveExercise();
  const [vocabularyIndex, setVocabularyIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isCompletedExercise, setIsCompletedExercise] =
    useState<boolean>(false);
  const { successToast, errorToast } = useToastManager();

  const vocabularies = useMemo(() => {
    return activeExercise?.vocabularies || [];
  }, [activeExercise?.vocabularies]);

  const activeVbr = useMemo(() => {
    return vocabularies[vocabularyIndex];
  }, [vocabularies, vocabularyIndex]);

  const isLastVbr = useMemo(() => {
    return vocabularyIndex === vocabularies.length - 1;
  }, [vocabularyIndex, vocabularies.length]);

  const increaseVbrIndex = () => {
    setVocabularyIndex((prev) =>
      prev + 1 > vocabularies.length - 1 ? prev : prev + 1,
    );
  };

  const dereaseVbrIndex = () => {
    setVocabularyIndex((prev) => (prev - 1 < 0 ? prev : prev - 1));
  };

  const clearAndFocusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }, []);

  const navigationVbr = useCallback(
    (type: 'prev' | 'next') => {
      if (type === 'prev') {
        dereaseVbrIndex();
      } else {
        increaseVbrIndex();
      }
      clearAndFocusInput();
    },
    [clearAndFocusInput],
  );

  const checkCorrectAnswer = useCallback(
    (answer: string) => {
      return answer === activeVbr?.vocabulary;
    },
    [activeVbr.vocabulary],
  );

  const submitAnswer = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (inputRef.current) {
        const value = inputRef.current.value.trim();
        const isCorrectAnswer = checkCorrectAnswer(value);
        const isCompletedExercise = isCorrectAnswer && isLastVbr;

        switch (true) {
          case isCorrectAnswer: {
            if (isCompletedExercise) {
              successToast('You was completed exercise!');
              setIsCompletedExercise(isCompletedExercise);
            } else {
              increaseVbrIndex();
              clearAndFocusInput();
              successToast();
            }
            break;
          }
          case !isCorrectAnswer: {
            errorToast();
            setIsError(true);
            break;
          }
          default:
            return;
        }
      }
    },
    [checkCorrectAnswer, isLastVbr],
  );

  if (isCompletedExercise) {
    console.log('Successfully exercise!');
  }

  return (
    <ModalWrapper
      isShow={visible}
      customSize="w-[75vw] h-[90vh]"
      close={hide}
      onAfterClose={remove}
    >
      <div className="bg-white rounded-lg relative w-full h-full">
        <div className="w-full h-[55px] bg-blue-600 rounded-t flex items-center text-2xl text-gray-100 justify-around">
          <div className="flex items-center space-x-2">
            <TbVocabulary className="mt-1 text-3xl" />
            <h2>Vocabulary Test {vocabularyIndex + 1}</h2>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <h2>Time Remaining:</h2>
            <span>06:15</span>
            <AiOutlineCloseCircle
              onClick={hide}
              className="!ml-10 transition-all cursor-pointer text-gray-100 hover:scale-125 hover:text-blue-300 active:text-blue-500"
            />
          </div>
        </div>
        {!!vocabularies?.length && (
          <>
            <div className="w-[65%] mx-auto text-center h-[calc(100%-100px)] pt-20">
              <div className="space-y-2.5">
                <h2 className="text-2xl text-green-500 uppercase">Question</h2>
                <h3>What is the meaning of:</h3>
                <hr />
              </div>
              <h2 className="text-4xl font-semibold text-blue-600 py-8">
                {activeVbr.translation}
              </h2>
              <hr />
              <div className="mt-10">
                <h2 className="text-red-500 text-2xl">Answer</h2>
                {/* <ul className='mt-4 space-y-4'>
                <li className='py-2 shadow w-full border border-gray-300 select-none bg-gray-100 text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-200 active:bg-gray-300'>Important</li>
                <li className='py-2 shadow w-full border border-gray-300 select-none bg-gray-100 text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-200 active:bg-gray-300'>Important</li>
                <li className='py-2 shadow w-full border border-gray-300 select-none bg-gray-100 text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-200 active:bg-gray-300'>Important</li>
                <li className='py-2 shadow w-full border border-gray-300 select-none bg-gray-100 text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-200 active:bg-gray-300'>Important</li>
              </ul> */}
                <form onSubmit={submitAnswer}>
                  <input
                    onChange={() => setIsError(false)}
                    ref={inputRef}
                    type="text"
                    className={clsx(
                      'border border-gray-300 outline-none w-2/4 mt-4 py-2 px-4 text-xl rounded-lg shadow-lg text-center  focus:ring-1',
                      isError ? 'focus:ring-red-500' : 'focus:ring-blue-500',
                    )}
                  />
                </form>

                <p className="mt-4 text-xs italic">
                  Tip: When you enter correct answer, input will transform to
                  green color.
                </p>
              </div>
            </div>
            <div className="w-full h-[45px] bg-green-600 rounded-b flex items-center justify-center">
              <div className="space-x-16 text-white flex items-center">
                <Button
                  color="common"
                  variants="text"
                  disabled={vocabularyIndex === 0}
                  onClick={() => navigationVbr('prev')}
                >
                  PREVIOUS
                </Button>
                <Button
                  color="common"
                  variants="text"
                  disabled={isLastVbr}
                  onClick={() => navigationVbr('next')}
                >
                  NEXT <AiOutlineArrowRight className="ml-3 mt-0.5" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </ModalWrapper>
  );
});
