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

class usersController {
  async createId() {
    const id = await pool.query('select max(userid) from users');
    return id.rows[0].max + 15;
  }

  async getAllUsers() {
    const users = await pool.query('select * from users');
    return users.rows;
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
  async editUser(id, data) {
    let a = 0;
    let params = [id];
    let qq = '';
    Object.keys(data).forEach((k) => {
      if (data[k] && data[k].length > 3) {
        a++;
        params.push(data[k]);
        qq += k + '=$' + (a + 1) + ', ';
      }
    });
    if (a == 0) return { error: 'no data recieved' };
    qq = qq.substring(0, qq.length - 2);
    const q = await pool.query(`update users set ${qq} where userid=$1`, params);
    if (q.err) return { error: q.err };
    return q;
  }
}

module.exports = usersController;
