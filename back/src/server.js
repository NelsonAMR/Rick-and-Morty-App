const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const router = require("./routes/index");
const sequelize = require("./dbConnection");

require("dotenv").config();
require("./models/User");
require("./models/Favorite");

const server = express();
const { PORT } = process.env;

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use("/rickandmorty", router);

async function main() {
  try {
    await sequelize.sync({ force: false });
    server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (error) {
    console.error({ error: error.message });
  }
}

main();
