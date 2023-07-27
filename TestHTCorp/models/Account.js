const { DataTypes } = require('sequelize')
const sequelize = require('../connection');
const Employee = require('./Employee');

const Account = sequelize.define('accounts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    loginBy: {
        type: DataTypes.STRING,
        allowNull: true
    },
    employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Account.belongsTo(Employee, { foreignKey: 'employeeId' });
Employee.hasOne(Account, { foreignKey: 'employeeId' });


module.exports = Account;