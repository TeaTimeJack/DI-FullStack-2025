import React from 'react'
import { Link, NavLink } from "react-router";

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to={"/"}>Home</Link>|{" "}
        <Link to={"/about"}>About</Link>|{" "}
        <Link to={"/shop"}>Shop</Link>
      </nav>
    </header>
  )
}

export default Nav