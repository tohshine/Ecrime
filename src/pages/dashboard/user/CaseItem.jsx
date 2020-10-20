import React from "react";

const CaseItem = ({ caseType, numberOfCases }) => {
  const date = new Date();
  return (
    <div className='bg-white shadow-xl rounded-lg p-4'>
      <p className='text-gray-800 font-bold mb-4'>{caseType}</p>
      <div className=' text-center flex justify-center item-center mb-4'>
        <p className='text-xl font-bold text-center text-red-700 bg-gray-200 p-2 shadow-lg  rounded-full '>
          {" "}
          {numberOfCases}
          <br />
          cases
        </p>
      </div>
      <p className='text-sm font-bold text-gray-500 mb-4 '>
        {date.toLocaleString()}
      </p>
      <p>
        status: <span className='text-orange-500'>case pening</span>
      </p>
    </div>
  );
};

export default CaseItem;
