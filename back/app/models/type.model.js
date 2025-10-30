import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database.js";



export class Type extends Model {}

Type.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  color: {
    type: DataTypes.STRING(7),
    allowNull: true,
  }

}, {
  sequelize,
  tableName: "type",
  timestamps: false,
});

// TEST
//const pokemon = await Pokemon.findAll();
//console.log(pokemon[0].toJSON());