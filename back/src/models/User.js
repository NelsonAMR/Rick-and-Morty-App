const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnection");
const Favorite = require("./Favorite");

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;

User.belongsToMany(Favorite, { through: "User_Favorite" });
Favorite.belongsToMany(User, { through: "User_Favorite" });
