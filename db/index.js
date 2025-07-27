// backend/db/index.js
// backend/db/index.js

const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool(
  isProduction
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {
        user: 'postgres',
        host: 'localhost',
        database: 'task_tracker',
        password: 'cinderella', // Replace with your actual local password
        port: 5432,
      }
);

module.exports = pool;
