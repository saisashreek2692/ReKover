import React from 'react'
import { Link } from "react-router-dom"

const Headernav = () => {
  return (
    <>
      <nav className="header__NavBox">
        <Link
          to="/"
          className="header__NavBox--Anchor"
        >
          Home
        </Link>
        <Link
          to="/"
          className="header__NavBox--Anchor"
        >
          Features
        </Link>
        <Link
          to="/"
          className="header__NavBox--Anchor"
        >
          Pricing
        </Link>
        <Link
          to="/"
          className="header__NavBox--Anchor"
        >
          Team
        </Link>
        <Link
          to="/"
          className="header__NavBox--Anchor"
        >
          Blog
        </Link>
      </nav>
    </>
  )
}

export default Headernav