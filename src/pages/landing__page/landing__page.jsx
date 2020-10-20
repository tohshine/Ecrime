import React from "react";
import { Link } from "react-router-dom";
import "./landing__page.css";

const landing__page = () => {
  return (
    <header className='flex justify-center items-center w-full'>
      <div className='flex justify-center items-center flex-col'>
        <img
          src='https://res.cloudinary.com/dlecos9op/image/upload/v1600776343/jqqkisrsgxfedyrjjm5f.png'
          alt='ogun state logo'
          className='child__space content__margin w-32 object-cover'
        />
        <h1 className=' text-xl sm:text-6xl '>Welcome to Ogun state</h1>
        <h2 className='font-extrabold  text-lg sm:text-3xl content__margin '>
          HRCP
        </h2>
        <Link
          to='/getStarted'
          className='text-white child__space hover:bg-orange-400 rounded-lg px-16 sm:px-32  py-4 border-orange-400 border '
          type='button'
        >
          <p className='text-white'> Get Started &rarr;</p>
        </Link>
      </div>
    </header>
  );
};

export default landing__page;
