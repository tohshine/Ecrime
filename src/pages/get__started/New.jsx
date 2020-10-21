import React, { useState } from "react";
import { Link } from "react-router-dom";

const New = () => {
  const now = new Date();
  const [input, setinput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    mobileNumber: "",
    address: "",
    crimeType: "",
    date: "",
    location: "",
    file: "",
    description: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    const {
      fullName,
      email,
      phoneNumber,
      mobileNumber,
      address,
      crimeType,
      date,
      location,
      file,
      description,
    } = input;

    if (
      fullName === "" &&
      email === "" &&
      phoneNumber === "" &&
      address === "" &&
      crimeType === "" &&
      date === "" &&
      location === "" &&
      file === "" &&
      description === ""
    )
      return;

    //start upload
  };

  const SubmitRequest = (e) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col justify-center items-center text-gray-500  w-full  '>
      <div className=' max-w-6xl w-full sm:mt-12'>
        <div className='grid-2'>
          <div className='  bg-white w-full   shadow-2xl p-8 '>
            <Link
              to='/'
              className='border border-orange-400 p  px-4 rounded-lg hover:bg-orange-400 hover:text-white'
            >
              &larr; Go back home
            </Link>

            <h1 className='my-6 text-2xl sm:text-4xl text-black font-bold'>
              User Information
            </h1>
            <p className='text-gray-500 text-sm'>
              Setup an account with the <span className="text-orange-500">Ogun State Crime Unit</span>. The information
              captured in these form is been used to unveil arising crime
              situation. Let us all collaboratively make Ogun State safe and
              secured
            </p>

            <form className='my-6 form-group'>
              <label htmlFor=''>
                Full Name <span className='text-red-500'>&lowast;</span>
              </label>
              <input
                style={{ outline: 0 }}
                onChange={onChange}
                type='text'
                name='fullName'
                className=' p-2 border-gray bg-white '
              />

              <label htmlFor=''>
                Email <span className='text-red-500'>&lowast;</span>
              </label>
              <input
                style={{ outline: 0 }}
                onChange={onChange}
                type='text'
                name='email'
                className=' p-2 border-gray bg-white '
              />

              <label htmlFor=''>
                Mobile Number 1 <span className='text-red-500'>&lowast;</span>
              </label>
              <input
                style={{ outline: 0 }}
                onChange={onChange}
                type='text'
                name='phoneNumber'
                className=' p-2 border-gray bg-white '
              />

              <label htmlFor=''>Mobile Number 2 (optional)</label>
              <input
                style={{ outline: 0 }}
                onChange={onChange}
                type='text'
                name='mobileNumber'
                className=' p-2 border-gray bg-white '
              />

              <label htmlFor=''>
                Address<span className='text-red-500'>&lowast;</span>
              </label>
              <input
                style={{ outline: 0 }}
                onChange={onChange}
                type='text'
                name='address'
                className=' p-2 border-gray bg-white '
              />
            </form>
          </div>

          {/* crime report form */}
          <div className=' bg-white w-full shadow-2xl p-8'>
            <h1 className='my-6 text-2xl sm:text-4xl text-black font-bold'>
              Report Crime
            </h1>
            <p className='text-gray-500'></p>

            <form className='my-6 form-group'>
              <label htmlFor=''>
                Crime Type <span className='text-red-500'>&lowast;</span>
              </label>
              <select name='crimeType' className='bg-white outline-none'>
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
                style={{ outline: 0 }}
                onChange={onChange}
                disabled
                value={now.toLocaleString()}
                type='text'
                name='date'
                className=' p-2 border-gray bg-white '
              />

              <label htmlFor=''>
                Location <span className='text-red-500'>&lowast;</span>
              </label>
              <input
                style={{ outline: 0 }}
                onChange={onChange}
                type='text'
                name='location'
                className=' p-2 border-gray bg-white '
              />

              <label htmlFor='' className=''>
                Video upload should not be more than 30mb{" "}
                <span className='text-red-500'>&lowast;</span>
              </label>
              <input
                style={{ outline: 0 }}
                onChange={onChange}
                type='file'
                name='file'
                className=' py-2 bg-white  '
              />

              <label htmlFor='' className='inline-block'>
                Full description of the crime{" "}
                <span className='text-red-500'>&lowast;</span>
              </label>
              <textarea name='description'></textarea>

              <button
                style={{ outline: 0 }}
                onClick={SubmitRequest}
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
