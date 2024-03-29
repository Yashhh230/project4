import React from 'react'
import { Header, Home, HomeSLider } from '../components'

const Main = () => {
  return (
    <main className='w-screen min-h-screen flex items-center justify-start bg-primary'>
      <Header/>
      <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        <Home />
        <HomeSLider />
      </div>
    </main>
  )
}

export default Main