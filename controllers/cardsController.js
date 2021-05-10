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

  async getAllCards() {
    return (await pool.query('select * from cards')).rows;
  }

  async updateCard(cardid, title, description, img, type) {
    const changes = await pool.query(
      'update cards set title = $1, description = $2, img = $3, type = $4 where cardid = $5 returning *',
      [title, description, img, type, cardid]
    );

    if (changes.rows.length > 0) return { ok: 'Card updated' };
    return { error: 'card not updated' };
  }

  async addCard(title, description, img, type) {
    const cardid = await this.generateCardId();
    const changes = await pool.query(
      'insert into cards (cardid, title, description, img, type) values ($1, $2, $3, $4, $5) returning *',
      [cardid, title, description, img, type]
    );

    if (changes.rows.length > 0) return { ok: 'Card added' };
    return { error: 'card not added' };
  }

  async generateCardId() {
    return (await pool.query('select max(cardid) from cards')).rows[0].max + 1;
  }

  async deleteCard(cardid) {
    await pool.query('delete from usercards where cardid = $1', cardid);
    await pool.query('delete from cards where cardid = $1', cardid);
  }
}

module.exports = cardController;
