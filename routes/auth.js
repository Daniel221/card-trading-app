const usersController = require('../controllers/usersController');
const users = new usersController();
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const axios = require('axios').default;

/**
 * @swagger
 * /login:
 *  get:
 *    summary: logs in a google socialUser
 *    responses:
 *        200:
 *          description: resulting token
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: object
 */
router.get('/', async (req, res) => {
  const { token } = req.query;
  if (token == null) {
    if (!req.usuario) return res.send();
    let payload = { userid: req.usuario.userid, checkin: req.usuario.checkin };
    let tk = jwt.sign(payload, 'secretKey');
    res.status(200).send({ token: tk });
  } else return res.status(200).send(jwt.decode(token));
});

/**
 * @swagger
 * /login:
 *  post:
 *    summary: logs in a non-google user
 *    parameters:
 *      - in: body
 *        required: true
 *        name: user
 *        description: the user to log in
 *        schema:
 *          type: object
 *    responses:
 *        200:
 *          description: deleted
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: string
 *        401:
 *          description: credentials error
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: object
 *                items:
 *                  error: string
 */
router.post('/', async (req, res) => {
  let userData = req.body;
  //let foundUser = await users.getUserByEmail(userData.email);
  let foundUser = await users.getByCredentials(userData.email);
  if (!foundUser) {
    return res.status(401).send('Email no encontrado');
  } else if (foundUser.password !== userData.password) {
    return res.status(401).send('Contraseña incorrecta');
  }
  let payload = { userid: foundUser.userid, checkin: foundUser.checkin };
  let tk = jwt.sign(payload, 'secretKey');
  res.status(200).send({ token: tk });
});

module.exports = router;
