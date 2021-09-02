'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Reaction.belongsTo(models.Post, {
        foreignKey: {
          allowNull: false
        }
      })
      models.Reaction.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  Reaction.init({
    idPOSTS: DataTypes.INTEGER,
    idUSERS: DataTypes.INTEGER,
    reaction: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reaction',
  });
  return Reaction;
};