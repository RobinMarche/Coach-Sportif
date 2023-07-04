const { Model, DataTypes } = require('sequelize');

const getConnexion = require('../db/sequelizeConnexion');

class Programme extends Model {}

Programme.init(
    {
        name: DataTypes.TEXT,
        description: DataTypes.TEXT,
        photo: DataTypes.TEXT
    },
    {
        sequelize: getConnexion(),

        tableName: 'programme',
    }
);

module.exports = { Programme };