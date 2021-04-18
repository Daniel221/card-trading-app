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

class chatController {
  async genMsgID() {
    const maxID = await pool.query('select max(msgid) from messages');
    const id = (maxID.rows[0].max === null ? 200000 : maxID.rows[0].max) + 5;
    return id;
  }

  async genChatID() {
    const maxID = await pool.query('select max(chatid) from chats');
    const id = (maxID.rows[0].max === null ? 500000 : maxID.rows[0].max) + 5;

    return id;
  }

  async getChatID(senderID, receiverID) {
    let chatID = await pool.query('select chatid from chats where user1 = $1 and user2 = $2', [
      senderID,
      receiverID,
    ]);

    if (chatID.rows.length === 0) {
      chatID = await this.genChatID(senderID, receiverID);
      await pool.query('insert into chats (user1, user2, chatID) values ($1,$2,$3)', [
        senderID,
        receiverID,
        chatID,
      ]);
    }
    return chatID;
  }

  async saveMessage(senderID, receiverID, msg) {
    const msgid = await this.genMsgID();
    const chatid = await this.getChatID(senderID, receiverID);
    const result1 = await pool.query(
      'insert into messages (msgid, chatid, msg) values ($1, $2, $3) returning *',
      [msgid, chatid, msg]
    );

    const msgid2 = await this.genMsgID();
    const chatid2 = await this.getChatID(receiverID, senderID);
    const result2 = await pool.query(
      'insert into messages (msgid, chatid, msg) values ($1, $2, $3) returning *',
      [msgid2, chatid2, msg]
    );

    if (result1.rows[0] && result2.rows[0]) return {};
    return { error: 'problem adding message' };
  }

  async getChat(senderID, receiverID) {
    const chatid = await this.getChatID(senderID, receiverID);
    const messages = await pool.query('select senddate, msg from messages where chatid = $1', [
      chatid,
    ]);

    return messages.rows;
  }
}

module.exports = chatController;
