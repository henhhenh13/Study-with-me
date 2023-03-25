import { Transition } from '@headlessui/react';
import React, { Fragment, useCallback, useEffect, useState } from 'react';

export const GrammarSection = ({
  title,
}: {
  title: string;
}): React.ReactElement => {
  const [isShow, setIsShow] = useState(true);
  const resetIsShowing = useCallback(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 100);
  }, []);

  useEffect(() => {
    setIsShow(false);
    resetIsShowing();
  }, [resetIsShowing, title]);
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
          <div className="min-w-[630px] max-w-[630px] h-full border rounded-lg shadow-lg min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] bg-white py-6 space-y-6">
            <h2 className="text-3xl text-center text-blue-500">{title}</h2>
            <div className="w-[400px] bg-gray-200 mx-auto py-8 text-center text-lg rounded-md">
              Chủ ngữ (Subject) + Động từ (Verb)
            </div>
            <div className="px-6 space-y-1.5">
              <div>
                <h2 className="font-semibold">
                  What is Simple sentence (Câu đơn)
                </h2>
                <ul className="list-disc pl-[20px] space-y-1">
                  <li>
                    Câu đơn (simple sentences) là câu chỉ có một chủ ngữ
                    (subject) và một động từ (verb). Câu đơn thường được sử dụng
                    để truyền đạt một thông tin đơn giản, không phức tạp.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold">
                  Example for Simple sentence (Câu đơn)
                </h2>
                <ul className="list-disc pl-[20px] space-y-1">
                  <li>
                    Although I was tired, I stayed up late to finish my
                    homework. (Mặc dù tôi mệt mỏi, tôi vẫn thức khuya để hoàn
                    thành bài tập về nhà.) Because she was sick, she couldnt
                    come to the party. (Vì cô ấy bị ốm, cô ấy không thể đến dự
                    tiệc.)
                  </li>
                  <li>
                    When I was a child, I used to play with dolls. (Khi tôi còn
                    nhỏ, tôi thường chơi với búp bê.)
                  </li>
                  If it rains, well stay inside. (Nếu trời mưa, chúng ta sẽ ở
                  trong nhà.)
                  <li>
                    Since I started studying English, my speaking skills have
                    improved.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Transition>
      ) : null}
    </>
  );
};
