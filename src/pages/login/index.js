import React from 'react'
import {Link} from 'react-router-dom'


function LoginPage() {
  return (
    <div className='w-screen h-screen bg-dark-bg flex flex-col justify-center items-center '  >
      <div className='text-primary text-[8rem]'>
        <h2 className='font-text title'>WordPlay</h2>
      </div>
      <div className='text-primary text-4xl font-semibold pb-10'>
        <p> You are logged in</p>
      </div>
      <div className='text-primary w-fit  cursor-pointer rounded-full px-5 py-1 text-4xl  font-semibold bg-[#00000] shadow-lg ' >
      <Link to='/home'>
      <button> Log In</button>
      </Link>
      </div>
    </div>
  )
}

export default LoginPage