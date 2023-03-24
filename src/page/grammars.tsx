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
        <div className="min-w-[630px] max-w-[630px] h-full border rounded-lg shadow-lg min-h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] bg-white py-6 space-y-6">
          <h2 className="text-3xl text-center text-blue-500">Grammar title</h2>
          <div className="w-[400px] bg-gray-200 mx-auto py-8 text-center text-lg rounded-md">
            Chủ ngữ (Subject) + Động từ (Verb)
          </div>
          <div className="px-6">
            <div>
              <h2 className="font-semibold">
                What is Simple sentence (Câu đơn)
              </h2>
              <p>
                Câu đơn (simple sentences) là câu chỉ có một chủ ngữ (subject)
                và một động từ (verb). Câu đơn thường được sử dụng để truyền đạt
                một thông tin đơn giản, không phức tạp.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">
                Example for Simple sentence (Câu đơn)
              </h2>
              <p>
                Although I was tired, I stayed up late to finish my homework.
                (Mặc dù tôi mệt mỏi, tôi vẫn thức khuya để hoàn thành bài tập về
                nhà.)
                <br />
                Because she was sick, she couldnt come to the party. (Vì cô ấy
                bị ốm, cô ấy không thể đến dự tiệc.)
                <br />
                When I was a child, I used to play with dolls. (Khi tôi còn nhỏ,
                tôi thường chơi với búp bê.)
                <br />
                If it rains, well stay inside. (Nếu trời mưa, chúng ta sẽ ở
                trong nhà.)
                <br />
                Since I started studying English, my speaking skills have
                improved.
                <br />
                (Kể từ khi tôi bắt đầu học tiếng Anh, kỹ năng nói của tôi đã
                được cải thiện.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
