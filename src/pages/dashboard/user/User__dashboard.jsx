import React, { useState } from "react";
import { Breadcrumbs } from "@material-ui/core/";
//import Link from "@material-ui/core/Link";
import Header from "../../../component/Dashboard__header";
import { Link } from "react-router-dom";

import RecentUpload from "./Recent__cases";
import UploadCase from "./Upload__case";

import CaseItem from "./CaseItem";
import { Alert } from "@material-ui/lab";

const User__dashboard = () => {
  const [page, setpage] = useState(1);
  
  const showCase = () => {};

  const displayCase = () => {
    return Array(10)
      .fill("")
      .map((a) => {
        return (
          <Link to='/dashboard/police' className='cursor-pointer'>
            <CaseItem caseType={"police brutality"} numberOfCases={20} />
          </Link>
        );
      });
  };

  return (
    <div className=' flex flex-col justify-center items-center  w-full '>
      <div className='w-full mb-2 '></div>
      <div className=' max-w-6xl w-full p-4'>
        {/*  <Breadcrumbs aria-label='breadcrumb'>
          <Link
            color={page === 1 ? "primary" : "inherit"}
            onClick={() => setpage(1)}
            className='cursor-pointer'
          >
            Recent cases
          </Link>
          <Link
            color={page === 2 ? "primary" : "inherit"}
            onClick={() => setpage(2)}
            className='cursor-pointer'
          >
            Upload case
          </Link>
          <Link
            color={page === 3 ? "primary" : "inherit"}
            className='cursor-pointer'
            onClick={() => setpage(3)}
          >
            Profile
          </Link>
        </Breadcrumbs> */}

        <div className='grid-3'>{displayCase()}</div>
      </div>
    </div>
  );
};

export default User__dashboard;
