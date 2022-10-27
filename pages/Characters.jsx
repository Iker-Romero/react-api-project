import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import getCharacter, { getCharacters } from "../data/data";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const data = async () => {
      const data = await getCharacters();

      setCharacters(data);
    };

    data();
  });

  return (
    <div className="characters-div">
      {characters.map((character) => {
        const {
          id,
          name,
          species,
          origin: { name: origin },
          image,
        } = character;
        console.log(character);

        return (
          <figure key={id}>
            <p>{id}</p>
            <figcaption>{name}</figcaption>
            <img src={image} alt={`${name} image`} />
            <p>Species: {species}</p>
            <p>Origin: {origin}</p>
          </figure>
        );
      })}
    </div>
  );
};

export default Characters;
