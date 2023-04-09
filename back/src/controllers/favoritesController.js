const Favorite = require("../models/Favorite");
const User = require("../models/User");

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
    const { id, name, origin, status, image, species, gender, user } = req.body;

    if (!id || !name || !origin || !status || !image || !species || !gender) {
      throw Error("Faltan datos");
    }

    const [newFav] = await Favorite.findOrCreate({
      where: {
        id,
        name,
        origin,
        status,
        image,
        species,
        gender,
      },
    });

    const userFind = await User.findOne({ where: { user } });

    if (!userFind) {
      throw Error("El usuario no existe");
    }

    await userFind.addFavorite(newFav.id);

    res.status(200).json({ msg: "created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
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
