const pool = require('./dbConn');

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
  async getByCredentials(email, username){
    const user = await pool.query('select * from users where email = $1 or username = $1', [email]);
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
      if (data[k] && data[k].length > 0) {
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
  async deleteUser(userid){
    let q = await pool.query(`delete from chats where user1 = $1 or user2 = $1;`, [userid]);
    q = await pool.query(`delete from contactlist where userfriend = $1 or userid =$1;`, [userid]);
    q = await pool.query(`delete from trades where user1 = $1 or user2 = $1;`, [userid]);
    q = await pool.query(`delete from usercards where userid = $1;`, [userid]);
    q = await pool.query(`delete from users where userid = $1`, [userid]);
    if(q.err) return { error: q.err };
    return q;
  }

  async addContact(userid1, userid2) {
    const alreadyFrens = await pool.query(
      `select * from contactlist where userid=$1 and userfriend=$2`,
      [userid1, userid2]
    );
    if (alreadyFrens.rows[0] != undefined) return { error: 'Already friends' };
    const q = await pool.query(`insert into contactlist values ($1,$2), ($2,$1);`, [
      userid1,
      userid2,
    ]);
    if (q.err) return { error: q.err };
    return q;
  }

  async getContactsFrom(userid) {
    const q = await pool.query(
      `select u2.* from users u, users u2, contactlist c where u.userid=$1 and c.userid=u.userid and u2.userid=c.userfriend;`,
      [userid]
    );
    if (q.err) return { error: q.err };
    return q.rows;
  }

  async removeContact(userid1, userid2) {
    const q = await pool.query(
      `delete from contactlist where (userid=$1 and userfriend=$2) or (userid=$2 and userfriend=$1);`,
      [userid1, userid2]
    );
    if (q.err) return { error: q.err };
    return q;
  }

  async areFrens(userid1, userid2) {
    const q = await pool.query(`select * from contactlist where userid=$2 and userfriend=$1;`, [
      userid1,
      userid2,
    ]);
    return q.rows;
  }

  async addTrade(uid1, uid2, c1, c2, date) {
    const q = await pool.query(`insert into trades values ($1,$2,$3,$4,$5)`, [
      uid1,
      uid2,
      c1,
      c2,
      date,
    ]);
    if (q.err) return { error: q.err };
    return q;
  }

  async getTradesForUser(uid) {
    const q = await pool.query(
      `select u1.username, u1.userid, to_json(c1) card1, to_json(c2) card2, t."date" from users u1, users u2, cards c1, cards c2, trades t where t.user1=u1.userid and t.user2=u2.userid and t.card1=c1.cardid and t.card2=c2.cardid and t.user2=$1;`,
      [uid]
    );
    if (q.err) return { error: q.err };
    return q.rows;
  }

  async acceptTrade(uid1, uid2, c1, c2, date) {
    const t1 = await pool.query(
      `with cte as (select id from usercards where cardid = $1 and userid = $2 limit 1) update usercards u set userid = $3 from cte where u.id = cte.id returning u.id;`,
      [c1, uid1, uid2]
    );
    let t2;
    if (t1.rows.length > 0)
      t2 = await pool.query(
        `with cte as (select id from usercards where cardid = $1 and userid = $2 limit 1) update usercards u set userid = $3 from cte where u.id = cte.id returning u.id;`,
        [c2, uid2, uid1]
      );
    const d = await pool.query(
      `delete from trades where user1=$1 and user2=$2 and card1=$3 and card2=$4 and date=$5;`,
      [uid1, uid2, c1, c2, date]
    );
    if (t1.rows.length < 1 || t2.rows.length < 1) return { error: 'A card is no longer available' };
    if (t1.err || t2.err || d.err) return { error: t1.err || t2.err || d.err };
    return { msg: 'success' };
  }

  async declineTrade(uid1, uid2, c1, c2, date) {
    const d = await pool.query(
      `delete from trades where user1=$1 and user2=$2 and card1=$3 and card2=$4 and date=$5;`,
      [uid1, uid2, c1, c2, date]
    );
    if (d.err) return { error: d.err };
    return { msg: 'success' };
  }
}

module.exports = usersController;
