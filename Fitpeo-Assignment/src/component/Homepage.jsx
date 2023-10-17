import React from 'react'
import Sidebar from './Sidebar'
import RightContainer from './RightContainer'

export default function Homepage() {
  return (
    <div className='flex' >
        <Sidebar />
        <RightContainer />
    </div>
  )
}
