import React, { type PropsWithChildren } from 'react'

export const UnitList = ({
  children
}: PropsWithChildren<unknown>): React.ReactElement => {
  return (
    <div className="w-[60%] px-6 h-screen">
      <div className="py-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="w-full">
        <ul className="w-full space-y-6 h-screen overflow-y-auto">{children}</ul>
      </div>
    </div>
  )
}
