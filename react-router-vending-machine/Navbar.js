import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/Pepsi">
        Pepsi
      </NavLink>
      <NavLink exact to="/Cheescake">
        Cheescake
      </NavLink>
      <NavLink exact to="/Oranges">
        Oranges
      </NavLink>
    </nav>
);
}

export default Navbar;