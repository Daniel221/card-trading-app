const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect((err) => {
  if (err) console.error('DB conection error', err.stack);
  else console.log('DB conected');
});

module.exports = pool;
