import React from 'react'
import Dashboard1 from '../pages/Dashboard1'
import Dashboard2 from '../pages/Dashboard2'
import { NavLink } from 'react-router-dom'


function classNames(...classes){
    return classes.filter(Boolean).join(" ")
}
function Header() {

    const activeStyles={
        backgroundColor:"rgb(59 130 246)"
    }
    return (
        <div className=" flex flex-col items-center">
            <div className="fixed top-4 left-4 flex space-x-4 z-10">
                <NavLink
                    to="/"
                    style={({isActive})=>isActive?activeStyles:null}
                    className={({active})=>classNames(active?'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600','px-4 py-2 rounded text-white')}

      
      >
                Dashboard 1
            </NavLink>
            <NavLink
            to="/dashboard-2"
            style={({isActive})=>isActive?activeStyles:null}

            className={({active})=>classNames(active?'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600','px-4 py-2 rounded text-white')}

            >
                Dashboard 2
            </NavLink>
        </div>
  </div >
  )
}

export default Header

