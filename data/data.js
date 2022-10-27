export const getCharacters = async () => {
  const characters = [];

  for (let i = 1; i <= 20; i++) {
    const rawData = await fetch(
      `https://rickandmortyapi.com/api/character/${i}`
    );
    const jsonData = await rawData.json();
    characters.push(jsonData);
  }

  return characters;
};

const getCharacter = async (id) => {
  const characters = await getCharacters();
  characters.find((character) => character.id === id);
}

export default getCharacter;
