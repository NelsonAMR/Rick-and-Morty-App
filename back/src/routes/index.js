const express = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const {
  createUser,
  getUser,
  deleteUser,
} = require("../controllers/usersControllers");
const {
  deleteFav,
  createFav,
  getFavs,
} = require("../controllers/favoritesController");

const router = express.Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.get("/fav", getFavs);
router.post("/fav", createFav);
router.delete("/fav/:id", deleteFav);

router.get("/users", getUser);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
