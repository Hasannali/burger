import React from 'react'
import { FaHamburger } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className='grid xl:grid-cols-1 grid-cols-1'>
        <div className='p-5'>
          <div className='py-5 px-5 rounded-xl border w-full bg-gradient-to-r from-black to-gray-900'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-items-center items-center gap-2'>
                {/* burger logo */}
                <FaHamburger className='w-6 h-6 text-yellow-400 hover:text-cyan-300'/>
                {/* Search icon */}
                <div style={{position: 'relative'}}>
                  <input className='rounded-3xl py-3 px-3 outline-none text-xs w-[280px] pr-10 hidden lg:block md:block' placeholder='Search for your favourite burger from now.'/>
                  <FaSearch className='w-5 h-5 text-lime-300 absolute right-3 top-1/4 transform-translate-y-1/2 hidden lg:block md:block'/>
                </div>
              </div>
              <div className='flex justify-center items-center gap-2'>
              <FaBolt className='w-5 h-5 hidden text-amber-400 lg:block md:block'/>
              <p className='text-sm text-white hidden lg:block md:block'>Order now and get it with
                <span className='text-amber-400'>15 minutes</span>
              </p>
              
              {/* Cart icon */}
              <FaCartShopping className='w-8 h-8 rounded-full ring-2 ring-sky-400 p-1 relative hover:text-amber-400'/>
              <img src='https://img.freepik.com/free-photo/anime-style-portrait-traditional-japanese-samurai-character_23-2151499067.jpg?t=st=1727892082~exp=1727895682~hmac=0917c757724f383518351b9a77282dbcbb5b2d3e9f65fd6c72d923a7128731e2&w=360' className='w-8 h-8 inline-block rounded-full ring-2 ring-sky-400 hover:text-amber-400' alt='user avatar'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
