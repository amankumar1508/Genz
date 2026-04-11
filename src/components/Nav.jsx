import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong, FaBars, FaXmark } from 'react-icons/fa6'

export default function Nav() {

  var [showMenu, setMenu] = useState(false);

  return (
    <div className="w-full fixed top-0 z-50 backdrop-blur-2xl">
      <div className="flex items-center justify-between px-6 py-8 sm:px-12 md:px-24 lg:px-40 border-2">
        {/* Logo section */}
        <div>
          <span className="text-2xl font-bold ">Gen-Z</span>
          <div className="w-4 h-4 bg-amber-500 border-2 rounded-full"></div>
        </div>


        {/* Nav bar section */}
        <div className=" hidden sm:flex items-center justify-between space-x-8 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/career">Career</Link>
          <Link to="/support">Support</Link>
         

        </div>

        {/* Contact us */}
        <div className="hidden sm:block w">
          <button className=" w-45  items-center justify-center gap-3 bg-amber-300  rounded-full">
           <Link to="/contactus" className=' flex items-center gap-2 justify-center p-1 ' >Contact us
            <FaArrowRightLong /></Link> 

            
          </button>
        </div>

        {/* Mobile menu bar */}
        {
          showMenu ?
            <FaXmark onClick={() => { setMenu(!showMenu) }} className="text-2xl font-semibold font-black/50 sm:hidden" /> :
            <FaBars onClick={() => { setMenu(!showMenu) }} className="text-2xl font-semibold font-black/50 sm:hidden" />
        }
      </div>
    </div>
  )
}
