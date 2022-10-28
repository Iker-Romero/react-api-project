export const getCharacterByID = async (id) => {
  const rawData = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  
  const jsonData = await rawData.json();

  return jsonData;
}

export const getCharacters = async () => {
  const characters = [];

  for (let i = 1; i <= 20; i++) {
    const character = await getCharacterByID(i);
    characters.push(character);
  }

  return characters;
};

const getCharacter = async (id) => {
  const characters = await getCharacters();
  characters.find((character) => character.id === id);
}

export default getCharacter;
