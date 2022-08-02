import React from 'react'


function LoginPage() {
  return (
    <div className='w-screen h-screen bg-[#1C1C1C] flex flex-col justify-center items-center '  >
      <div className='text-[#FFBE32] text-[9rem]'>
        <h2 className='font-text title'>WeWrite</h2>
      </div>
      <div className='text-[#FFBE32] text-6xl font-bold pb-10'>
        <p> You are logged in</p>
      </div>
      <div className='text-[#FFBE32] w-fit  cursor-pointer rounded-full px-5 py-1 text-3xl font-bold bg-[#1C1C0B ] shadow-lg shadow-[#1C1C0B]-500/10' >
      <button> Log In</button>
      </div>
    </div>
  )
}

export default LoginPage