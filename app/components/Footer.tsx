import React from 'react'

const Footer = () => {
  return (
    <div className='p-5 bg-gradient-to-r from-black to-slate-700'>
      <footer className='flex flex-col space-y-10 justify-center m-10 mb-0 '>
        <nav className='flex justify-center flex-wrap gap-6 text-slate-500 font-medium '>
          <a href="#" className='hover:text-cyan-500 text-amber-500'>Home</a>
          <a href="#" className='hover:text-cyan-500 text-amber-500'>About</a>
          <a href="#" className='hover:text-cyan-500 text-amber-500'>Delivery</a>
          <a href="#" className='hover:text-cyan-500 text-amber-500'>Contact</a>
        </nav>
        <div className='flex justify-center space-x-5 transition-transform duration-500 transform ease-in-out hover:scale-105'>
          <a href="http://facebook.com" target='blank' rel='nofollow noopener'>
          <img src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook logo" />
          </a>

          <a href="http://instagram.com" target='blank' rel='nofollow noopener'>
          <img src="https://img.icons8.com/color/48/instagram-new.png" alt="instagram logo" />
          </a>

          <a href="http://linkedin.com" target='blank' rel='nofollow noopener'>
          <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin logo" />
          </a>

          <a href="http://twitter.com" target='blank' rel='nofollow noopener'>
          <img src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter logo" />
          </a>

        </div>
        <p className='text-center hover:text-cyan-600 text-amber-400 font-medium mb-8'>2024 Muhammad Hasan. All Rights Reserved.</p>
        <br />
        <br />
      </footer>
    </div>
  )
}

export default Footer
