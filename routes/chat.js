const chatController = require('../controllers/chatController');
const chat = new chatController();
const router = require('express').Router();

router.post('/', async (req, res) => {
  const { addresseeid, userid, msg, date } = req.body;
  await chat.saveMessage(userid, addresseeid, msg, date);
  res.status(200).send({msg:'ok'});
});

router.get('/', async (req, res) => {
  const { addresseeid, userid } = req.query;
  const conversation = await chat.getChat(userid, addresseeid);
  res.status(200).send(conversation);
});

module.exports = router;
