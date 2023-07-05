const { Model, DataTypes } = require('sequelize');

const getConnexion = require('../db/sequelizeConnexion');

class User extends Model {}

User.init(
    {
        first_name: DataTypes.TEXT,
        last_name: DataTypes.TEXT,
        email: DataTypes.TEXT,
        phone_number: DataTypes.TEXT,
        message: DataTypes.TEXT
    },
    {
        sequelize: getConnexion(),

        tableName: 'user',
    }
);

module.exports = { User };