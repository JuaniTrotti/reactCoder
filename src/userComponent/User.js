import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

import { useLocation } from "react-router-dom";

const User = () => {
  const location = useLocation();

  if (location.pathname === "/user/LogIn") {
    return (
      <LogIn/>
    )
  } else {
    return (
      <SignUp/>
    )
  }
}

export default User