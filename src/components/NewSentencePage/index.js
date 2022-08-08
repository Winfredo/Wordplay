
import React from 'react'


function NewSentencePage() {
  return (
    <div className='w-screen h-[90vh] bg-dark-bg'>
        <div className='w-full h-full bg-dark-bg flex flex-col justify-center items-center'>
            <div className='text-primary font-bold text-[5rem] title'>
                <h2>Write</h2>
            </div> 
            <div className='border-2 border-dashed w-8 px-10 m-1 border-primary'></div>
            <div className='border-2 border-solid w-8 px-10 mb-2 border-primary'></div>  
            <div className='text-primary font-semibold text-2xl pb-2'>
              <p>You get to start a new story! Write the first word.</p>  
            </div> 
             
            <div className='text-primary font-semibold text-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  border-gray-200 shadow-lg rounded-full '>
              <button>Add the next word here!</button>
            </div> 
            
            {/* <form >
              <div className='text-primary border-none bg-primary color-'>
                <input type='text' placeholder='Add the next word here! '></input>
                <button></button>
              </div>
            </form> */}
        </div>
        
    </div>

  )
}

export default NewSentencePage

