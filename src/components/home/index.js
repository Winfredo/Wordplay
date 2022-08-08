import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="w-screen h-[90vh] bg-black">
      <div className="w-full h-full bg-dark-bg flex flex-col justify-center items-center ">
        <div className="text-primary text-[5rem] ">
          <h2 className="font-text title">WordPlay</h2>
        </div>
        <div className="text-primary text-4xl font-semibold pb-10">
         <Link to="/write">
         <button className='bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  border-gray-200 shadow-lg rounded-full'>Write</button>
         </Link>
        </div>
        <div className="text-primary w-fit  cursor-pointer rounded-full px-5 py-1 text-4xl  font-semibold bg-[#00000] shadow-lg ">
          <button>Sentence Gallery</button>           
          </div>
          <div className="text-lg text-primary font-semibold pt-60">
            <button>Logged in as winfrednukpe2002@gmail.com</button>
          </div>
      </div>
    </div>
  );
}

export default Home;
