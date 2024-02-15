import { useState } from 'react'
import GetString from './components/GetString'
import ChildrenRender from './components/ChildrenRender'

export default function App() {
  return (
    <>
      <GetString />
      <ChildrenRender> use children Text 1 </ChildrenRender>
      <ChildrenRender> use children Text 2 </ChildrenRender>
      <ChildrenRender> use children Text 3</ChildrenRender>
    </>
  )
}

