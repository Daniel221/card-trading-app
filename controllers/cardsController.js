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

class cardController {
  async getList() {
    const r = await pool.query('select * from cards;');
    return r.rows;
  }
  async getAllFromUser(user) {
    const r = await pool.query('select * from usercards where userid=$1', [user.userid]);
    return r.rows;
  }
  async grantToUser(cardid, user) {
    const cc = await pool.query('insert into usercards values($1,$2,$3)', [user.userid, cardid, 1]);
    return cc.rows[0];
  }
  async trade(cardid1, userid1, cardid2, userid2) {
    const t1 = await pool.query(
      'update usercards set userid=$1 where userid=$2 and cardid=$3 limit 1',
      [userid1, userid2, cardid2]
    );
    const t2 = await pool.query(
      'update usercards set userid=$1 where userid=$2 and cardid=$3 limit 1',
      [userid2, userid1, cardid1]
    );
    return t1.err || t2.err ? false : true;
  }
  async getCard(cardid) {
    const card = await pool.query('select * from cards where cardid=$1', [cardid]);
    return card.rows[0];
  }
}

module.exports = cardController;
