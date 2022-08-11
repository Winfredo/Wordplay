import React from 'react'

function SentencePage() {
  return (
    <div className='w-screen h-[90vh] bg-dark-bg'>
        <div className='w-full h-full bg-dark-bg flex flex-col  items-center'>
            <div className='text-primary title font-bold text-[4rem] '>
                <h2>Gallery</h2>
            </div>
            <div className='text-primary pt-5 font-medium'>
                <p>COMING SOON</p>
            </div>
            <div className='text-gray-700 mb-5 font-semibold bg-clip-padding mt-3 p-2 backdrop-filter backdrop-blur-xl bg-opacity-60  border-gray-200 shadow-lg rounded-full'>
                <button>BuzFnxgvgHaZe8SFDI28m</button>
            </div>
            <div className='text-primary flex justify-between '>
                <p className='pr-2'>Sort By:</p>
                <div>
                    <ul className='list-disc list-inside'>
                        <li>Newest - Oldest</li>
                        <li>Oldest - Newest</li>
                    </ul>
                </div>
                
            </div>
            <div className='m-6 text-primary w-fit  cursor-pointer rounded-full px-5 py-1 text-3xl  font-semibold bg-[#00000] shadow-lg '>
                <button>Search</button>
            </div>
            
            

        </div>

    </div>
  )
}

export default SentencePage