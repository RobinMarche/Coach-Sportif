const Sequelize = require('sequelize');

function getConnexion() {
    return new Sequelize("postgres://default:qyTt0YxZO7Sc@ep-wispy-waterfall-805358-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb", {
        dialect: process.env.DIALECT,
        define: {
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
        logging: false, // Annuler le console.log des requêtes SQL
    });
}


module.exports = getConnexion;
