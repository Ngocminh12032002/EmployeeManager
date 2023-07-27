const { DataTypes } = require('sequelize')
const sequelize = require('../connection')
const Department = require('./Department');

const Employee = sequelize.define('employees', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
Employee.belongsTo(Department, { foreignKey: 'departmentId' });
Department.hasOne(Employee, { foreignKey: 'departmentId' });

module.exports = Employee;