require("dotenv").config();
const { URL } = process.env;

const getCharById = (req, res) => {
  const { id } = req.params;

  fetch(`${URL}/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      const obj = {
        id: data.id,
        name: data.name,
        species: data.species,
        image: data.image,
        gender: data.gender,
        status: data.status,
        origin: data.origin.name,
      };

      res.json(obj);
    })
    .catch((err) => res.status(500).json(err.message));
};

module.exports = getCharById;
