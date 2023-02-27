import React from 'react'
import { AiOutlineCloseSquare, AiOutlineCloseCircle, AiOutlineArrowRight } from 'react-icons/ai'
import { TbVocabulary } from 'react-icons/tb'

export const ModalBase = (): React.ReactElement => {
  return (
    <div className="fixed w-full h-full z-50 bg-black bg-opacity-60 flex items-center justify-center top-0 left-0">
      <div className="w-3/4 h-[90%] bg-white rounded-lg relative">
        <div className='w-full h-[55px] bg-blue-600 rounded-t flex items-center text-2xl text-gray-100 justify-around'>
          <div className='flex items-center space-x-2'>
            <TbVocabulary className='mt-1 text-3xl'/>
            <h2>Vocabulary Test 1</h2>
          </div>
          <div className='flex items-center justify-center space-x-2'>
            <h2>Time Remaining:</h2>
            <span>06:15</span>
            <AiOutlineCloseCircle className="!ml-10 transition-all cursor-pointer text-gray-100 hover:scale-125 hover:text-blue-300 active:text-blue-500" />
          </div>
        </div>
        <div className='w-[65%] mx-auto text-center h-[calc(100%-100px)] pt-20'>
          <div className='space-y-2.5'>
            <h2 className='text-2xl text-green-500 uppercase'>Question</h2>
            <h3>What is the meaning of:</h3>
            <hr />
          </div>
          <h2 className='text-4xl font-semibold text-blue-600 py-8'>Quan trọng</h2>
          <hr />
          <div className='mt-10'>
            <h2 className='text-red-500 text-2xl'>Answer</h2>
            {/* <ul className='mt-4 space-y-4'>
              <li className='py-2 shadow w-full border border-gray-300 select-none bg-gray-100 text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-200 active:bg-gray-300'>Important</li>
              <li className='py-2 shadow w-full border border-gray-300 select-none bg-gray-100 text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-200 active:bg-gray-300'>Important</li>
              <li className='py-2 shadow w-full border border-gray-300 select-none bg-gray-100 text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-200 active:bg-gray-300'>Important</li>
              <li className='py-2 shadow w-full border border-gray-300 select-none bg-gray-100 text-lg font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-200 active:bg-gray-300'>Important</li>
            </ul> */}
            <input type="text" className='border border-gray-300 outline-none w-2/4 mt-4 py-2 px-4 text-xl rounded-lg shadow-lg text-center focus:ring-blue-500 focus:ring-1'/>
            <p className='mt-4 text-xs italic'>Tip: When you enter correct answer, input will transform to green color.</p>
          </div>
        </div>
        <div className='w-full h-[45px] bg-green-600 rounded-b flex items-center justify-center'>
          <div className='space-x-16 text-white flex items-center'>
            <button className='hover:underline flex items-center'>PREVIOUS</button>
            <button className='hover:underline flex items-center'>NEXT <AiOutlineArrowRight className='ml-3 mt-0.5'/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

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
  )
}
