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
        user: 'task_tracker_7aw4_user',
        host: 'dpg-d23hovumcj7s739dtvd0-a',
        database: 'task_tracker_7aw4',
        password: 'TcMHvq4KM37Z1QyikcRskN2knwc02qp8', // Replace with your actual local password
        port: 5432,
      }
);

module.exports = pool;
