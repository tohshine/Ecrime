import React from "react";
import { useParams,Link } from "react-router-dom";

const CaseProfile = () => {
  const { crimeId } = useParams();
  return (
    <div className='flex flex-row justify-center items-center'>
      <div className=' max-w-6xl w-full '>
        <div className='flex  item-center'>
          <Link
            to='/dashboard'
            className='hover:bg-orange-400 border border-orange-400 p px-8 text-white rounded-lg '
          >
            &larr; Go Home
          </Link>
          <p className='text-white bg-green-500 rounded-lg p px-4 ml-4'>
            {" "}
            profile case Resolved
          </p>
        </div>
        <div className='mt-8 p-8'>
          <h1 className='text-4xl text-black font-bold'>Crime Profile</h1>

          <div className='flex justify-center flex-col items-center'>
            <div className='flex justify-center items-center p-8'>
              <video
                width='320'
                height='240'
                autoplay
                controls
                className=' border-orange-600  rounded-lg'
              >
                <source
                  src='https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4'
                  type='video/mp4'
                />
              </video>

              <div className='ml-8'>
                <h1 className='text-3xl text-black my-4 font-bold'>John Doe</h1>
                <p className='text-gray-600 mb-4'>
                  KM 2 bolanle close lagos sate
                </p>
                <p className='text-xl text-black '>08138386645</p>
                <p className=' text-black mb-4'>test@test.com</p>
                <p className='text-black text-white bg-orange-600 p rounded-lg inline'>
                  Robbery
                </p>
                <p className='  text-gray-600 my-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam beatae nam quis perferendis ut, animi ducimus atque
                  consequatur, ad voluptatem incidunt numquam molestiae
                  blanditiis officia voluptatum vero. Eos, debitis? Quisquam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseProfile;
