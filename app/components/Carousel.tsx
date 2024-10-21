import React from 'react'

const Carousel = () => {
  return (
    <div>
      <section className='bg-gradient-to-r from-blackblack to-gray-700'>
        <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
            <div className='col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col'>
              <a href="" className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                <img src="https://img.freepik.com/free-photo/view-3d-delicious-looking-burger_23-2150914673.jpg?t=st=1728120526~exp=1728124126~hmac=8f93fd3a1657103af6bb131eae488f5b8097e10ce9e8f6af057a77aa1d542451&w=360" 
                alt="burger 1" 
                className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                <h3 className='z-10 text-2xlxl font-medium text-white absolute  top-0 left-0 p-4 xs:text-xl md:text-0xl'>Classic Bites</h3>
              </a>
            </div>

            <div className='col-span-2 sm:col-span-1 md:col-span-2 '>
              <a href="" className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'>
                <img src="https://img.freepik.com/free-photo/hamburger-with-glass-water-side_188544-12233.jpg?t=st=1728122014~exp=1728125614~hmac=2a2d9d68fd138b2b5a5ba56c760e8815c16f4545eda90d2b3e83d4c917ce16ef&w=826" 
                alt="burger2" 
                className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                <h3 className='z-10 text-2xlxl font-medium text-white absolute  top-0 left-0 p-4 xs:text-xl md:text-0xl'>Gourmet Grills{""}</h3>
              </a>
              <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
              <a href="" className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
                <img src="https://img.freepik.com/free-photo/close-up-delicious-burger-meal_23-2151433866.jpg?t=st=1728122583~exp=1728126183~hmac=28ce5da4c3c12c5caa56a99d5386b429bbfdfdae2d9750358db7038b2d97f26f&w=360" 
                alt="burger3" 
                className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                <h3 className='z-10 text-2xlxl font-medium text-white absolute  top-0 left-0 p-4 xs:text-xl md:text-0xl'>Spicy Masala{""}</h3>
              </a>
              <a href="" className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
              <img src="https://img.freepik.com/free-photo/delicious-looking-3d-burger-with-simple-background_23-2150914861.jpg?t=st=1728123871~exp=1728127471~hmac=e5cd0cfb57e6b482e6f51a7f48f04536a2cdec77f8a77ca3f5388258dab9b1fc&w=740" 
                alt="burger4" 
                className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                <h3 className='z-10 text-2xlxl font-medium text-white absolute  top-0 left-0 p-4 xs:text-xl md:text-0xl'>Veggle{""}</h3>
              </a>
            </div>
            </div>

            <div className='col-span-2 sm:col-span-2 md:col-span-1 md:h-full flex flex-col'>
              <a href="" className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                <img src="https://img.freepik.com/free-photo/close-up-delicious-burger-meal_23-2151433866.jpg?t=st=1728122583~exp=1728126183~hmac=28ce5da4c3c12c5caa56a99d5386b429bbfdfdae2d9750358db7038b2d97f26f&w=360" 
                alt="burger5" 
                className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                <h3 className='z-10 text-2xlxl font-medium text-white absolute  top-0 left-0 p-4 xs:text-xl md:text-0xl'>Cheesy Delights{""}</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Carousel
