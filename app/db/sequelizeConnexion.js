const Sequelize = require('sequelize');


function getConnexion() {
    return new Sequelize(process.env.PG_URL, {
        dialect: postgres,
        define: {
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
        logging: false, // Annuler le console.log des requêtes SQL
    });
}


module.exports = getConnexion;
