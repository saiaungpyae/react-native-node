"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Walkin extends Model {
    static associate(models) {}
  }
  Walkin.init(
    {
      condoName: DataTypes.STRING,
      location: DataTypes.STRING,
      remark: DataTypes.STRING,
      blockNumber: {
        type: DataTypes.STRING,
        unique: true,
      },
      enterDate: DataTypes.DATE,
      exitDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Walkin",
    }
  );
  return Walkin;
};
