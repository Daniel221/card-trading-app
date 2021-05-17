const chatController = require('../controllers/chatController');
const chat = new chatController();
const router = require('express').Router();

/**
 * @swagger
 * /chat:
 *  get:
 *    summary: gets all the messages of the conversation
 *    tags:
 *      - chat
 *    parameters:
 *      - in: path
 *        required: true
 *        addresseeid: id of the contact list user
 *        schema:
 *          type: String
 *
 *
 *    responses:
 *        200:
 *          description: messages of the conversation
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: JSON
 *        400:
 *          description: could not grant
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: object
 *                items:
 *                  error: string
 * */
router.get('/', async (req, res) => {
  const { addresseeid, userid } = req.query;
  const conversation = await chat.getChat(userid, addresseeid);
  res.status(200).send(conversation);
});
/**
 * @swagger
 * /chat:
 *  post:
 *    summary: storages a message onto de database
 *    tags:
 *      - chat
 *    parameters:
 *      - in: path
 *        required: true
 *        addresseeid: id of the contact
 *        userid: id of the logued user
 *        msg: msg sended on the conversation
 *        date: when was the message sended
 *        schema:
 *          type: integer
 *          format: int32
 *    responses:
 *        200:
 *          description: granted
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: JSON
 *        400:
 *          description: could not grant
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: object
 *                items:
 *                  error: string
 * */
router.post('/', async (req, res) => {
  const { addresseeid, userid, msg, date } = req.body;
  await chat.saveMessage(userid, addresseeid, msg, date);
  res.status(200).send({ msg: 'ok' });
});

module.exports = router;
