import React from 'react'

export default function App (): React.ReactElement {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-nowrap overflow-hidden">

      <div className='w-[15%] shadow-lg border-r h-full bg-white'>
        <h1 className='py-8 font-bold text-blue-500 text-xl text-center'>Hênh Hoàng</h1>
        <div className='w-full'>
          <ul className='divide-y px-8 font-semibold'>
            <li className='py-2 cursor-pointer hover:text-blue-500 transition-colors duration-200'>Dashboard</li>
            <li className='py-2 cursor-pointer hover:text-blue-500 transition-colors duration-200'>Bar</li>
          </ul>
        </div>
      </div>

      <div className='w-[60%] px-6'>
        <div className='py-8'>
          <h1 className='text-2xl font-bold'>Dashboard</h1>
        </div>
        <div className='w-full'>
          <ul className='w-full space-y-6'>
            <li className='py-4 px-6 space-y-4 w-full bg-white rounded-lg shadow-md border'>
              <div className='flex items-center w-full gap-x-6'>
                <div className='min-w-[40px] min-h-[40px] rounded-sm bg-blue-300 flex-1'><img src="" alt="" /></div>
                <div className='max-w-full'>
                  <h2 className='capitalize font-semibold text-lg'>Inclide state change</h2>
                  <p className='line-clamp-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quos, maxime impedit, voluptate vel recusandae molestias error deleniti eaque a aliquid minus nihil? Quod amet pariatur non maiores eos deserunt?</p>
                </div>
              </div>
              <hr />
              <div className='flex items-center justify-between'>
                <h4>ServiceNow</h4>
                <h4>1 min ago</h4>
              </div>
            </li>
            <li className='py-4 px-6 space-y-4 w-full bg-white rounded-lg shadow-md border'>
              <div className='flex items-center w-full gap-x-6'>
                <div className='min-w-[40px] min-h-[40px] rounded-sm bg-blue-300 flex-1'><img src="" alt="" /></div>
                <div className='max-w-full'>
                  <h2 className='capitalize font-semibold text-lg'>Inclide state change</h2>
                  <p className='line-clamp-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quos, maxime impedit, voluptate vel recusandae molestias error deleniti eaque a aliquid minus nihil? Quod amet pariatur non maiores eos deserunt?</p>
                </div>
              </div>
              <hr />
              <div className='flex items-center justify-between'>
                <h4>ServiceNow</h4>
                <h4>1 min ago</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
