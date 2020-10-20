import React from "react";

const Recent__cases = () => {

  const date = new Date()
  
  return (
    <section className='flex flex-col p-8'>
      <h1 className='text-black font-bold text-4xl'>Upload logs</h1>
      <div className='grid-3 mt-4'>
        <div className='bg-white shadow-xl rounded-lg p-4'>
          <p className="text-gray-800 font-bold mb-4">Police brutality</p>
          <p className="text-sm font-bold text-gray-500 mb-4">{date.toLocaleString()}</p>
          <p>status: <span className="text-green-500">case resolved</span></p>
        </div>

        <div className='bg-white shadow-xl rounded-lg p-4'>
          <p className="text-gray-800 font-bold mb-4">Rape case</p>
          <p className="text-sm font-bold text-gray-500 mb-4">{date.toLocaleString()}</p>
          <p>status: <span className="text-orange-500">In progress</span></p>
        </div>

        <div className='bg-white shadow-xl rounded-lg p-4'>
          <p className="text-gray-800 font-bold mb-4">Sucide</p>
          <p className="text-sm font-bold text-gray-500 mb-4">{date.toLocaleString()}</p>
          <p>status: <span className="text-red-500">Pending</span></p>
        </div>

        <div className='bg-white shadow-xl rounded-lg p-4'>
          <p className="text-gray-800 font-bold mb-4">Assult</p>
          <p className="text-sm font-bold text-gray-500 mb-4">{date.toLocaleString()}</p>
          <p>status: <span className="text-red-500">Pending</span></p>
        </div>
       
        <div className='bg-white shadow-xl rounded-lg p-4'>
          <p className="text-gray-800 font-bold mb-4">Robbery</p>
          <p className="text-sm font-bold text-gray-500 mb-4">{date.toLocaleString()}</p>
          <p>status: <span className="text-red-500">Pending</span></p>
        </div>
      </div>
    </section>
  );
};

export default Recent__cases;
