import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Header = () => {
  return (
    <div className='flex justify-end items-center bg-green-600 p font-bold'>
      <p className='mr-2 text-orange-400'>Have a question?</p>|
      <p className='mx-2'>Toll-Free number:070-CRIME-REPORT_XXX</p>|
      <MailOutlineIcon  className='mx-2'/>
      <p >icrime.ogunstate.gov.ng</p>
    </div>
  );
};

export default Header;
