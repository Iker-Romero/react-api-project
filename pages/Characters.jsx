import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../data/data";

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
    <>
      <h1>Characters</h1>
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
              <Link to={`characters/${id}`}>
                <h2>{name}</h2>
                <img src={image} alt={`${name} image`} />
                <p>{id}</p>
                <p>Species: {species}</p>
                <p>Origin: {origin}</p>
              </Link>
            </figure>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
