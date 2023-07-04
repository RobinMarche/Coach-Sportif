import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

const Sequelize = require('sequelize');

function getConnexion() {
<<<<<<< HEAD
    return new Sequelize(pool, {
=======
    return new Sequelize("postgres://default:qyTt0YxZO7Sc@ep-wispy-waterfall-805358-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb", {
>>>>>>> 78c12ff9fa2822bca042f314df1ba3ef9229f906
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
