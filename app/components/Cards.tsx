import React from 'react'

const FloatingImageContentBolck = () => {
  return (
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
      <div className='md:w-1/2 md:pr-10'>
      <h2 className='text-3xl font-bold mb-4 text-white'>Delicious Burger's</h2>
      <p className='text-white mb-4'>Experience the juciest burgers and made with fresh ingredients and grilled to perfection.</p>
      <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 trasition duration-300'>Order Now</button>
      <h3 className='text-2xl text-center text-white mt-6 mb-2 font-semibold'>
        {""}
        Coming Soon: Our new burgers Launches.{""}
        </h3>
        <ul>
          <li className='text-white'>
            <strong>Chessy BBQ becon burger:</strong> A mouthwatering blend of cheddar cheese,
            crispy becan and cheese.
          </li>
          <br />

          <li className='text-white'>
            <strong>Chessy BBQ becon burger:</strong> A mouthwatering blend of cheddar cheese,
            crispy becan and cheese.
          </li>
          <br />

          <li className='text-white'>
            <strong>Chessy BBQ becon burger:</strong> A mouthwatering blend of cheddar cheese,
            crispy becan and cheese.
          </li>
          <br />

          <li className='text-white'>
            <strong>Chessy BBQ becon burger:</strong> A mouthwatering blend of cheddar cheese,
            crispy becan and cheese.
          </li>
          <br />
        </ul>
        </div>
        <div className='md:w-1/2 mt-6 md:mt-6'>
          <img src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148706001.jpg?t=st=1728489458~exp=1728493058~hmac=13bab08003a7fb657ea8a8be13bcf62c549614f6163b0349fbd0b197fb65020e&w=740" alt="delicious burger" 
          className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'/>
        </div>
      
    </section>
  )
}

export default FloatingImageContentBolck
