import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database.js";



export class Team extends Model {}

Team.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  }

}, {
  sequelize,
  tableName: "team",
  timestamps: false,
});

// TEST
//const pokemon = await Pokemon.findAll();
//console.log(pokemon[0].toJSON());