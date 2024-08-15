import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Header/>
        <main className='flex-grow w-full mt-14'>
            <Outlet/>
        </main>
      
    </div>
  )
}

export default Layout
