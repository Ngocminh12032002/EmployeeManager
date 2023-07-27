const { DataTypes } = require('sequelize')
const sequelize = require('../connection')

const Department = sequelize.define('departments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = Department;