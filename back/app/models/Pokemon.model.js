import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database.js";



export class Pokemon extends Model {}

Pokemon.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: true,
    unique: true
  },
  hp: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  atk: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  def: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  atk_spe: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  def_spe: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  speed: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }

}, {
  sequelize,
  tableName: "pokemon",
  timestamps: false,
});

// TEST
//const pokemon = await Pokemon.findAll();
//console.log(pokemon[0].toJSON());