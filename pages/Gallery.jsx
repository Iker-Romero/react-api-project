import React from "react";
import { useState } from "react";
import { Outlet } from "react-router";
import getCharacters from "../data/data";

const Gallery = () => {
  const [characters, setCharacters] = useState(getCharacters());

  return (
    <>
      <div>Gallery</div>
      <Outlet />
    </>
  );
};

export default Gallery;
