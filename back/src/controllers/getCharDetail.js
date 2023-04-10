require("dotenv").config();
const { URL } = process.env;

const getCharDetail = (req, res) => {
  const { id } = req.params;

  fetch(`${URL}/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      const obj = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        status: data.status,
        location: data.location,
        species: data.species,
      };

      res.json(obj);
    })
    .catch((err) => res.status(500).json(err.message));
};

module.exports = getCharDetail;
