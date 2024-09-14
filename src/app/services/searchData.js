const searchCharacter = async (input) => {
  setLoading(true);
  setError(null);
  try {
    const response = await axios.get(
      `https://swapi.dev/api/people/?search=${input}`
    );

    const character = response.data.results[0];
    const planet = await axios.get(character.homeworld);
    character.homeworld = planet.data.name;
    // A resolver mappeo de perronajes para no depender de contrato de api
    // const mappedCharacter = {
    //   name: character.name ?? "mierda",
    //   gender: character.gender.charAt(0).tuUpperCase(),
    //   height: character.height,
    //   weight: character.mass,
    //   hairColor: character.hair_color,
    //   homeWorld: character.homeworld,
    //   films: character.films,
    //   url: character.url,
    // };

    // const mappedCharacter = character?.map((el) => ({
    //   name: el.name,
    //   gender: el.gender.chartAt(0).tuUpperCase() + el.slice(1),
    //   height: el.height,
    //   weight: el.mass,
    //   hairColor: el.hair_color,
    //   homeWorld: el.homeworld,
    //   films: el.films,
    // }));

    addCharacter(character);
    setInput("");
  } catch (error) {
    setError("Character not found");
  } finally {
    setLoading(false);
  }
};

export default sear;
