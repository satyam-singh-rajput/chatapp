import React from 'react'
import Sidebar from '../components/Sidebar'
import Messagecontainer from '../components/messages/Messagecontainer'
function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' >
        <Sidebar/>
        <Messagecontainer/>
    </div>
  )
}

export default Home