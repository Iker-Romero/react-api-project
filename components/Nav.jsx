import { NavLink } from "react-router-dom";
import React from "react";

export const Nav = () => {
  return (
    <nav>
      <NavLink to="">Home</NavLink>
      <NavLink to="characters">Characters</NavLink>
    </nav>
  );
};
