'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tree: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      location: {
        type: Sequelize.STRING
      },
      heightFt: {
        type: Sequelize.FLOAT,
        // allowNull: false
        defaultValue: 0
      },
      groundCircumferenceFt: {
        type: Sequelize.FLOAT,
        // allowNull: false
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trees');
  }
};
