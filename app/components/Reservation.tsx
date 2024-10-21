import React from 'react'

const ReservationSection = () => {
  return (
    <section className='bg-gradient-to-r from-black to-slate-900 py-10'>
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl font-extrabold text-white mb-6'>
                {""}
                Make a Reservation{""}</h2>
            <form className='max-w-md mx-auto'>
                <div className='mb-4 text-black'>
                <input type="text" 
                placeholder='Your Name'
                className='rounded-md w-full p-3 border border-gray-300 '
                required/>
                </div>

                <div className='mb-4 text-black'>
                    <input type="email"
                    placeholder='Your Email'
                    className='rounded-md w-full p-3 border border-gray-300 '
                    required/>
                </div>

                <div className='mb-4'>
                    <input type="date"
                    className='rounded-md w-full p-3 border border-gray-300 '
                    required/>
                </div>

                <div className='mb-4'>
                    <input type="time"
                    className='rounded-md w-full p-3 border border-gray-300 '
                    required/>
                </div>

                <div className='mb-4'>
                    <button className='bg-blue-600 text-white  px-4 py-2 hover:bg-blue-700'>Reserved table</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ReservationSection;
