const Favorite = require("../models/Favorite");

const getFavs = async (req, res) => {
  try {
    const favs = await Favorite.findAll();

    res.status(200);
    res.json(favs);
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const createFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;

    if (!id || !name || !origin || !status || !image || !species || !gender) {
      throw Error("Faltan datos");
    }

    await Favorite.create({ id, name, origin, status, image, species, gender });

    res.status(200);
    res.json({ msg: "created" });
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    await Favorite.destroy({
      where: { id },
    });
    res.status(200);
    res.json({ msg: "deleted" });
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};

module.exports = {
  createFav,
  deleteFav,
  getFavs,
};
