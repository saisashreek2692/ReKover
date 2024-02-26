import React from 'react'
import { Link } from "react-router-dom";

const Headerform = () => {
  return (
    <>
      <div className="header__Buttons--Flex">
        <Link
          to="/login"
          className="header__Buttons--Btn-Login whitespace-no-wrap"
        >
          Sign in
        </Link>
        <Link
          to="/register"
          className="header__Buttons--Btn-Register whitespace-no-wrap"
        >
          Sign up
        </Link>
      </div>
    </>
  )
}

export default Headerform