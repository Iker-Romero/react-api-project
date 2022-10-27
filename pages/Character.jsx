import React from "react";

const Character = () => {
  return (
    <>
      <h1>{name}</h1>
      <img src={image} alt={`${name} image`} />
      <p>{id}</p>
      <p>Species: {species}</p>
      <p>Origin: {origin}</p>
    </>
  );
};

export default Character;
