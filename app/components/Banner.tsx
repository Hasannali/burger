import React from 'react'

const Banner = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7'>
      <div className='absolute inset-0 opacity-20'>
        <img className='w-full h-full object-cover' src="data:image/jpeg;base64,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" alt="Delicious burger banner" />
      </div>
      <div className='relative z-10 container mx-auto flex flex-col items-center text-center'>
        <h2 className='text-white sm:text-5xl font-bold mb-4'>Discover our Menu</h2>
        <p className='text-white text-lg text-center mb-6 max-w-xl'>Shop Now For Exclusive Burger Discounts!</p>
        <button type="button" className='bg-blue-500 text-white rounded-full shadow-lg px-6 py-3 font-semibold text-sm hover:bg-cyan-600 transition duration-300'>Exciting Deals Launch at 12PM!</button>
      </div>
      
    </div>
  )
}

export default Banner