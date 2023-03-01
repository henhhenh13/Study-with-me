import NiceModal, { useModal } from '@ebay/nice-modal-react';
import React from 'react';
import { AiOutlineArrowRight, AiOutlineCloseCircle } from 'react-icons/ai';
import { TbVocabulary } from 'react-icons/tb';

import { ModalWrapper } from '../modal-wrapper/modal-wrapper';

export const ModalVocabulary = NiceModal.create((): React.ReactElement => {
  const { visible, hide, remove } = useModal();
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
            <h2>Vocabulary Test 1</h2>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <h2>Time Remaining:</h2>
            <span>06:15</span>
            <AiOutlineCloseCircle className="!ml-10 transition-all cursor-pointer text-gray-100 hover:scale-125 hover:text-blue-300 active:text-blue-500" />
          </div>
        </div>
        <div className="w-[65%] mx-auto text-center h-[calc(100%-100px)] pt-20">
          <div className="space-y-2.5">
            <h2 className="text-2xl text-green-500 uppercase">Question</h2>
            <h3>What is the meaning of:</h3>
            <hr />
          </div>
          <h2 className="text-4xl font-semibold text-blue-600 py-8">
            Quan trọng
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
            <input
              type="text"
              className="border border-gray-300 outline-none w-2/4 mt-4 py-2 px-4 text-xl rounded-lg shadow-lg text-center focus:ring-blue-500 focus:ring-1"
            />
            <p className="mt-4 text-xs italic">
              Tip: When you enter correct answer, input will transform to green
              color.
            </p>
          </div>
        </div>
        <div className="w-full h-[45px] bg-green-600 rounded-b flex items-center justify-center">
          <div className="space-x-16 text-white flex items-center">
            <button className="hover:underline flex items-center">
              PREVIOUS
            </button>
            <button className="hover:underline flex items-center">
              NEXT <AiOutlineArrowRight className="ml-3 mt-0.5" />
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
});
