const getCharDetail = (res, ID) => {
  fetch(`https://rickandmortyapi.com/api/character/${ID}`)
    .then((resp) => resp.json())
    .then((data) => {
      const obj = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        status: data.status,
        origin: data.origin,
        species: data.species,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(obj));
    });
};

module.exports = getCharDetail;
