import React from 'react'

export const Sidebar = (): React.ReactElement => {
  return (
    <div className="w-[15%] shadow-lg border-r h-full bg-white">
      <h1 className="py-8 font-bold text-blue-500 text-xl text-center">
        Hênh Hoàng
      </h1>
      <div className="w-full">
        <ul className="divide-y px-8 font-semibold">
          <li className="py-2 cursor-pointer hover:text-blue-500 transition-colors duration-200">
            Dashboard
          </li>
          <li className="py-2 cursor-pointer hover:text-blue-500 transition-colors duration-200">
            Bar
          </li>
        </ul>
      </div>
    </div>
  )
}
