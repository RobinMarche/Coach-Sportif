// import pg from 'pg';

// const { Pool } = pg;

// const pool = new Pool({
//   connectionString: process.env.PG_URL + "?sslmode=require",
// })

const Sequelize = require('sequelize');

function getConnexion() {
    return new Sequelize(process.env.PG_URL + "?sslmode=require", {
        dialect: require('pg'),
        define: {
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
        logging: false, // Annuler le console.log des requêtes SQL
    });
}


module.exports = getConnexion;
