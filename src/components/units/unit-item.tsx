import React from 'react'

export const UnitItem = (): React.ReactElement => {
  return (
    <li className="py-4 px-6 space-y-4 w-full bg-white rounded-lg shadow-md border">
      <div className="flex items-center w-full gap-x-6">
        <div className="min-w-[40px] min-h-[40px] rounded-sm bg-blue-300 flex-1">
          <img src="" alt="" />
        </div>
        <div className="max-w-full">
          <h2 className="capitalize font-semibold text-lg">
            Inclide state change
          </h2>
          <p className="line-clamp-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quos, maxime impedit, voluptate vel recusandae molestias error
            deleniti eaque a aliquid minus nihil? Quod amet pariatur non maiores
            eos deserunt?
          </p>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <h4>ServiceNow</h4>
        <h4>1 min ago</h4>
      </div>
    </li>
  )
}
