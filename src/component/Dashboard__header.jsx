import React from "react";
import Avatar from "@material-ui/core/Avatar";

const Dashboard__header = () => {
  return (
    <div className=' flex justify-end items-center p-4 bg-white '>
      <p className=' mr-2 sm:mr-4 sm:font-bold text-gray-700'>Tosin owoeye</p>
      <Avatar className=' mr-2 sm:mr-4'>TO</Avatar>
      <a
        href=''
        className='mr-2 sm:mr-4 p border rounded-lg border-orange-400 hover:bg-orange-500'
      >
        Logout
      </a>
    </div>
  );
};

export default Dashboard__header;
