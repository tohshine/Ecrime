import React from "react";
import {Link} from 'react-router-dom'

const New = () => {
  const now = new Date();

  return (
    <div className='flex flex-col justify-center items-center text-gray-500  w-full  '>
      <div className=' max-w-6xl w-full'>
        
        <div className='grid-2'>
          <div className='  bg-white w-full   shadow-2xl p-8 '>
            <Link
              to='/'
              className='border border-orange-400 p  px-4 rounded-lg hover:bg-orange-400 hover:text-white'
            >
              &larr; Go back home
            </Link>

            <h1 className='my-6 text-2xl sm:text-4xl text-black font-bold'>User information</h1>
            <p className='text-gray-500'>
              Setup account with ogun state crime unit any credentials sent
              us is been used for further     up to making ogun state a
              better place to live.
            </p>

            <form action='' method='post' className='my-6 form-group'>
              <label htmlFor=''>
                Full name <span className='text-red-500'>&lowast;</span>
              </label>
              <input
                type='text'
                name='name'
                className=' p-2 border-gray bg-white '
              />

              <label htmlFor=''>
                Email <span className='text-red-500'>&lowast;</span>
              </label>
              <input
                type='text'
                name='email'
                className=' p-2 border-gray bg-white '
              />

              <label htmlFor=''>
                Phone number 1 <span className='text-red-500'>&lowast;</span>
              </label>
              <input
                type='text'
                name='phone1'
                className=' p-2 border-gray bg-white '
              />

              <label htmlFor=''>
                Phone number 2<span className='text-red-500'>&lowast;</span>
              </label>
              <input
                type='text'
                name='phone2'
                className=' p-2 border-gray bg-white '
              />

              <label htmlFor=''>
                street name <span className='text-red-500'>&lowast;</span>
              </label>
              <input
                type='text'
                name='name'
                className=' p-2 border-gray bg-white '
              />
            </form>
          </div>

          {/* crime report form */}
          <div className=' bg-white w-full shadow-2xl p-8'>
            <h1 className='my-6 text-2xl sm:text-4xl text-black font-bold'>Report crime</h1>
            <p className='text-gray-500'></p>

            <form className='my-6 form-group'>
              <label htmlFor=''>
                Crime type <span className='text-red-500'>&lowast;</span>
              </label>
              <select name='category' className='bg-white outline-none'>
                <option value='crime type' disabled selected>
                 select an option ...
                </option>
                <option value='rape' id=''>
                  rape
                </option>
                <option value='robbery' id=''>
                  robbery
                </option>
                <option value='riot' id=''>
                  riot
                </option>
                <option value='brutality' id=''>
                  police brutality
                </option>
              </select>

              <label htmlFor=''>
                Date <span className='text-red-500'>&lowast;</span>
              </label>
              <input
                disabled
                value={now.toLocaleString()}
                type='text'
                name='name'
                className=' p-2 border-gray bg-white '
              />

              <label htmlFor=''>
                Location <span className='text-red-500'>&lowast;</span>
              </label>
              <input
                type='text'
                name='name'
                className=' p-2 border-gray bg-white '
              />

              <label htmlFor='' className=''>
                Video upload should not be more than 30mb{" "}
                <span className='text-red-500'>&lowast;</span>
              </label>
              <input
                type='file'
                name='video'
                className=' py-2 bg-white  '
              />
               
              <label htmlFor='' className="inline-block">
                Full description of the crime{" "}
                <span className='text-red-500'>&lowast;</span>
              </label>
              <textarea name='description'></textarea>

              <button
                type='submit'
                className='p btn-block  border border-orange-500 rounded-lg hover:bg-orange-500 my-6 hover:text-white'
              >
                submit now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
