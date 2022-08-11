import React from 'react'
import {Link} from 'react-router-dom'


function Write() {
  return (
          <div className='w-screen h-[90vh] text-primary bg-dark-bg flex flex-col justify-center items-center'>
            <div className='title font-semibold text-[5rem]'>
              <h2>Write</h2>
               </div>
               <div className='border-2  w-52 border-dashed mb-3 border-primary'></div>
               <div className='border-2 border-solid w-52 mb-3 border-primary'></div>
               
               <div>
               <Link to='/NewSentencePage'>
               <button className='font-semibold text-4xl shadow-lg'>New Sentence</button>
               </Link>

               </div>
          </div>
      
    
    
  )

  
}

export default Write
