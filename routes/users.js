const usersController = require('../controllers/usersController');
const users = new usersController();
const router = require('express').Router();
//const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
  const allUsers = await users.getAllUsers();
  res.status(200).send(allUsers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await users.getUserById(id);

  res.status(200).send(user);
});

/**
 * @swagger
 * /u:
 *  post:
 *    summary: Post/Register a new user on the DB
 *    responses:
 *      200:
 *        description: user successfully added to DB
 *        contents:
 *          application/JSON:
 *            schema:
 *              type: object
 *              items:
 *                name: string
 *                lastName: string
 *                username: string
 *                email: string
 *                password: string
 */
router.post('/', async (req, res) => {
  const { name, lastName, username, email, password } = req.body;
  console.log(email);
  const user = await users.getUserByEmail(email);

  if (user === undefined) {
    const user = await users.registerUser(name, lastName, username, password, email);
    let payload = { subject: foundUser.id};
    let token = jwt.sign(payload, 'secretKey')
    res.status(200).send({ user: user });
  } else
    res.status(400).send({ error: 'user already exists' });
});

/**
 *  @swagger
 *  /u/{id}:
 *    put:
 *      summary: update an existing user's data
 *      parameters:
 *        - in: path
 *          required: true
 *          name: user's id
 *          description: an existing user's id
 *          schema:
 *            type: integer
 *            format: int32
 *      responses:
 *        200:
 *          description: user edited
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: object
 *                items:
 *                  name: string
 *                  lastName: string
 *                  username: string
 *                  password: string
 *        400:
 *          description: could not edit user
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: object
 *                items:
 *                  error: string
 */
router.put('/:id', async (req, res) => {
  const { name, lastName, username, password, img } = req.body;
  const u = await users.editUser(req.params.id, { name, lastName, username, password, img });
  if (u.error) res.status(400).send({ error: u.error });
  else res.status(200).send({ name, lastName, username, password });
});

/**
 * @swagger
 * /u:
 *  get:
 *    summary: get all users from the database
 *    responses:
 *        200:
 *          description: an array of users as JSON objects
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  items:
 *                    name: string
 *                    lastName: string
 *                    username: string
 *                    password: string
 *                    img: string
 *        400:
 *          description: could not get user list
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: object
 *                items:
 *                  error: string
 */
router.get('/', async (req, res) => {
  const data = await users.getList();
  console.log(data);
  if (data.error) res.status(400).send({ error: data.error });
  else res.status(200).send(data);
});

module.exports = router;
