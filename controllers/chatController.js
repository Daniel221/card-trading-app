const pool = require('./dbConn');

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
    let chatID = await pool.query(
      'select chatid from chats where (user1 = $1 and user2 = $2) or (user1 = $2 and user2 = $1)',
      [senderID, receiverID]
    );
    if (chatID.rows.length === 0) {
      chatID = await this.genChatID(senderID, receiverID);
      await pool.query('insert into chats (user1, user2, chatID) values ($1,$2,$3)', [
        senderID,
        receiverID,
        chatID,
      ]);
      return chatID;
    }
    return chatID.rows[0].chatid;
  }

  async saveMessage(senderID, receiverID, msg, date) {
    const msgid = await this.genMsgID();
    const chatid = await this.getChatID(senderID, receiverID);
    const result1 = await pool.query(
      'insert into messages (msgid, chatid, senddate, msg, senderid) values ($1, $2, $3, $4, $5) returning *',
      [msgid, chatid, date, msg, senderID]
    );

    if (result1.rows.length > 0) return {};
    return { error: 'problem adding message' };
  }

  async getChat(senderID, receiverID) {
    const chatid = await this.getChatID(senderID, receiverID);
    const messages = await pool.query(
      'select senddate, msg, senderid from messages where chatid = $1',
      [chatid]
    );

    return messages.rows;
  }
}

module.exports = chatController;
