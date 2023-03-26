const getCharById = (res, ID) => {
  fetch(`https://rickandmortyapi.com/api/character/${ID}`)
    .then((resp) => resp.json())
    .then((data) => {
      const obj = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(obj));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(err.message);
    });
};

module.exports = getCharById;
