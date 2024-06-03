'use strict';
const {
  Model
} = require('sequelize');
// const { ne } = require('sequelize/types/lib/operators');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // static async beforeValidate(tree, options) {
    //   if (tree.height_ft !== null && tree.height_ft < 0) {
    //     throw new Error("Height of the tree cannot be less than 0");
    //   }
    //   if (tree.ground_circumference_ft !== null && tree.ground_circumference_ft < 0) {
    //     throw new Error("Circumference of the tree cannot be less than 0");
    //   }
    // }
  };
  Tree.init({
    tree: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    location: {
      type: DataTypes.STRING,
    },
    heightFt: {
      type: DataTypes.FLOAT,
      validate: {
        notLessThanZero(value) {
          if(value !== undefined && value < 0) {
            throw new Error("Height of the tree cannot be less than 0");
          }
        }
      }
    },
    groundCircumferenceFt: {
      type: DataTypes.FLOAT,
      validate: {
        notLessThanZero(value) {
          if(value !== undefined && value < 0) {
            throw new Error("Circumference of the tree cannot be less than 0");
          }
        }
      }
    },
    // createdAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    //   defaultValue: new Date()
    // },
    // updatedAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    //   defaultValue: new Date()
    // },
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};
