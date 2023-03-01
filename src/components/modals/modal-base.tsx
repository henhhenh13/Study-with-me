import React from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';

export const CompleteSentense = (): React.ReactElement => {
  return (
    <>
      <AiOutlineCloseSquare className="absolute top-0 right-0 text-3xl -translate-x-6 translate-y-4 transition-all cursor-pointer text-red-500 hover:scale-125 hover:text-red-600 active:text-red-700" />
      <div className="w-full h-full pt-16 px-20">
        <div className="flex border-2 p-4 rounded-xl shadow-xl">
          <h1 className="shadow-black w-10 h-10 flex items-center justify-center bg-blue-600 text-xl text-white font-bold relative">
            2
          </h1>
          <h2 className="ml-4 pt-1 font-bold">
            Complete the sentenses using the correct forms of the verbs
          </h2>
        </div>
        <div className="px-6">
          <ul className="w-full px-10 border-2 border-gray-300 border-t-0 py-10 space-y-2 shadow-xl rounded-b-lg">
            <li className="flex items-center text-lg">
              <span className="font-bold mr-2">1.</span>
              <p>
                I{' '}
                <input
                  className="outline-none max-w-[115px] px-1 font-bold border-b border-gray-500"
                  type="text"
                />
                a new car last year. <span>(buy)</span>
              </p>
            </li>
            <li className="flex items-center text-lg">
              <span className="font-bold mr-2">2.</span>
              <p>
                I{' '}
                <input
                  className="outline-none max-w-[115px] px-1 font-bold border-b border-gray-500"
                  type="text"
                />
                a new car last year. <span>(buy)</span>
              </p>
            </li>
            <li className="flex items-center text-lg">
              <span className="font-bold mr-2">3.</span>
              <p>
                I{' '}
                <input
                  className="outline-none max-w-[115px] px-1 font-bold border-b border-gray-500"
                  type="text"
                />
                a new car last year. <span>(buy)</span>
              </p>
            </li>
            <li className="flex items-center text-lg">
              <span className="font-bold mr-2">4.</span>
              <p>
                I{' '}
                <input
                  className="outline-none max-w-[115px] px-1 font-bold border-b border-gray-500"
                  type="text"
                />
                a new car last year. <span>(buy)</span>
              </p>
            </li>
            <li className="flex items-center text-lg">
              <span className="font-bold mr-2">5.</span>
              <p>
                I{' '}
                <input
                  className="outline-none max-w-[115px] px-1 font-bold border-b border-gray-500"
                  type="text"
                />
                a new car last year. <span>(buy)</span>
              </p>
            </li>
            <li className="flex items-center text-lg">
              <span className="font-bold mr-2">6.</span>
              <p>
                I{' '}
                <input
                  className="outline-none max-w-[115px] px-1 font-bold border-b border-gray-500"
                  type="text"
                />
                a new car last year. <span>(buy)</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
