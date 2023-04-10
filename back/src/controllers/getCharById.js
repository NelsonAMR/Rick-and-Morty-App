const { search } = require("../routes");

require("dotenv").config();
const { URL } = process.env;

const getCharById = (req, res) => {
  const { page, name } = req.query;

  fetch(`${URL}/?page=${page}&name=${name}`)
    .then((resp) => resp.json())
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(500).json(err.message));
};

module.exports = getCharById;
