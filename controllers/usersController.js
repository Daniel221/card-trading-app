const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: `postgres`,
  password: `RjXENUh3Pq7ZR7SJ`,
  database: 'postgres',
  port: 5432,
});

pool.connect((err) => {
  if (err) console.error('DB conection error', err.stack);
  else console.log('DB conected');
});

class usersController {
  async createId() {
    const id = await pool.query('select max(userid) from users');
    return id.rows[0].max + 15;
  }

  async getUserById(id) {
    const user = await pool.query('select * from users where userid = $1', [id]);
    return user.rows[0];
  }

  async getUserByEmail(email) {
    const user = await pool.query('select * from users where email like $1', [email]);
    return user.rows[0];
  }
  async registerUser(name, lastName, username, password, email) {
    const id = await this.createId();
    console.log(id);
    const user = await pool.query(
      'insert into users (userid, name, lastName, username, password, email) values ($1,$2,$3,$4,$5,$6) returning *',
      [id, name, lastName, username, password, email]
    );
    return user.rows[0];
  }
}

module.exports = usersController;
