import React from 'react'
import { MainBody } from './sections/main-body'
import { Sidebar } from './sections/sidebar'
import { UnitList } from './components/units/unit-list'
import { UnitItem } from './components/units/unit-item'
import { ModalBase } from './components/modals/modal-base'

export default function App (): React.ReactElement {
  return (
    <MainBody>
      <Sidebar />
      <UnitList>
        <UnitItem />
        <UnitItem />
        <UnitItem />
        <UnitItem />
        <UnitItem />
        <UnitItem />
        <UnitItem />
        <UnitItem />
        <UnitItem />
      </UnitList>
      <ModalBase />
    </MainBody>
  )
}
