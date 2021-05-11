const pool = require('./dbConn');

class cardController {
  async getList() {
    const r = await pool.query('select * from cards;');
    return r.rows;
  }
  async getAllFromUser(user) {
    const r = await pool.query(
      'select * from cards c, usercards uc where c.cardid=uc.cardid and uc.userid=$1',
      [user.userid]
    );
    return r.rows;
  }
  async createCard(card){
    const res = await pool.query('insert into cards values($1,$2,$3,$4,$5)', Object.values(card));
    if (res.err) return { error: res.err };
    return res.rows[0];
  }
  async updateCard(card){
    const q = await pool.query('update cards set title=$2, description=$3, img=$4, type=$5 where cardid=$1', Object.values(card));
    if (q.err) return { error: q.err };
    return q;
  }
  async deleteCard(cardid){
    const q2 = await pool.query('delete from usercards where cardid=$1', [cardid]);
    const q = await pool.query('delete from cards where cardid=$1', [cardid]);
    if (q.err) return { error: q.err };
    return q;
  }
  async grantToUser(cardid, userid) {
    const cc = await pool.query('insert into usercards values($1,$2)', [userid, cardid]);
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
