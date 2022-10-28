import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacterByID } from "../data/data";

const Character = () => {
  const [character, setCharacter] = useState({});
  const params = useParams();
  const { id } = params;

  useNavigate(`/heroes/${id}`);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacterByID(id);

      setCharacter(data);

      /* const {
        name,
        species,
        origin,
        image,
      } = character; */
    }

    fetchData();
  }, []);

  if (character !== undefined) {
    console.log(character)
    return (
      <div>
        <h1>{character.name}</h1>
        <img src={character.image} />
        <p>#{id}</p>
        <p>Species: {character.species}</p>
        {/* <p>Origin: {character.origin.url}</p> */}
      </div>
    );
  } else {
    return <p>Character not found...</p>
  }
};

export default Character;
