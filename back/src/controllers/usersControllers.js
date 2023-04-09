const { Op } = require("sequelize");
const User = require("../models/User");
const Favorite = require("../models/Favorite");

const createUser = async (req, res) => {
  const { user, email, password } = req.body;

  try {
    if (!user || !email || !password) {
      throw Error("Faltan datos");
    }

    await User.create({ user, email, password });

    res.status(200);
    res.json({ msg: "created" });
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const getFavsByUser = async (req, res) => {
  try {
    const { user } = req.params;
    const users = await User.findAll({
      include: {
        model: Favorite,
      },
    });

    const favorites = users.filter((dbUser) => dbUser.user === user);

    res.status(200);
    res.json(favorites);
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const { user, password } = req.query;

  try {
    if (!user || !password) {
      throw Error("Faltan datos");
    }

    const userFind = await User.findOne({
      where: { [Op.or]: [{ user }, { email: user }] },
    });

    if (!userFind) {
      throw Error("Usuario no Encontrado");
    }

    if (password != userFind.password) {
      throw Error("Contraseña incorrecta");
    }

    res.status(200);
    res.json(userFind);
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
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
  createUser,
  getUser,
  deleteUser,
  getFavsByUser,
};
