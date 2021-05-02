const usersController = require('../controllers/usersController');
const users = new usersController();
const router = require('express').Router();
const jwt = require('jsonwebtoken');

/*function verifyToken(req, res, next){
  if(!req.headers.authorization){
    return res.status(401).send('Unauthorized request');
  }
  let token = req.headers.authorization.split(' ')[1];
  if(!token) return res.status(401).send('Unauthorized request');
  let payload = jwt.verify(token, 'secretKey');
  if(!payload) return res.status(401).send('Unauthorized request');
  req.id = payload.subject;
  next();
}*/

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
    let payload = { userid: user.id };
    let token = jwt.sign(payload, 'secretKey');
    res.status(200).send({ user: user, token: token});
  } else res.status(400).send({ error: 'user already exists' });
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
  const { id } = req.params;
  const { name, lastName, username, password, img, profiletext, checkin } = req.body;
  let token=undefined;
  if(checkin){
    token=jwt.sign({userid:id,checkin:checkin},'secretKey');
  }else{
    token=jwt.sign({userid:id},'secretKey');
  }
  const u = await users.editUser(req.params.id, { name, lastName, username, password, img, profiletext, checkin });
  if (u.error) res.status(400).send({ error: u.error });
  else res.status(200).send({ token: token });
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

/**
 * @swagger
 * /u/contacts:
 *  get:
 *    summary: get all contacts from an user
 *    parameters:
 *      - in: path
 *        required: true
 *        name: user's id
 *        description: an existing user's id
 *        schema:
 *          type: integer
 *          format: int32
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
 *                    profiletext: string
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
 router.get('/contacts/:id', async (req, res) => {
  const { id } = req.params;
  if(!id) return res.status(400).send({ error: "no id" });
  const { otherId } = req.query;
  if(otherId){
    const dato=await users.areFrens(id, otherId);
    return res.status(200).send(dato)
  }
  const data = await users.getContactsFrom(id);
  if (data.error) res.status(400).send({ error: data.error });
  else res.status(200).send(data);
});

/**
 * @swagger
 * /u/contacts:
 *  post:
 *    summary: add a contact to an user
 *    parameters:
 *      - in: path
 *        required: true
 *        name: the id of the user to add as contact
 *        description: an existing user's id
 *        schema:
 *          type: integer
 *          format: int32
 *    responses:
 *        200:
 *          description: added to contacts list
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: string
 *        400:
 *          description: could not add contact
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: object
 *                items:
 *                  error: string
 */
 router.post('/contacts/:oid', async (req, res) => {
  const { oid } = req.params;
  const { id } = req.body;
  if(!id||!oid) return res.status(400).send({ error: "no id" });
  const data = await users.addContact(oid, id);
  if (data.error) res.status(400).send({ error: data.error });
  else res.status(200).send({msg:'success'});
});

/**
 * @swagger
 * /u/contacts:
 *  delete:
 *    summary: remove a contact to an user
 *    parameters:
 *      - in: path
 *        required: true
 *        name: the id of the user to remove from contacts
 *        description: an existing user's id
 *        schema:
 *          type: integer
 *          format: int32
 *    responses:
 *        200:
 *          description: removed from contacts list
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: string
 *        400:
 *          description: could not remove contact
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: object
 *                items:
 *                  error: string
 */
 router.delete('/contacts', async (req, res) => {
  const { oid } = req.query;
  const { id } = req.query;
  if(!id||!oid) return res.status(400).send({ error: "no id" });
  const data = await users.removeContact(oid, id);
  if (data.error) res.status(400).send({ error: data.error });
  else res.status(200).send({msg:'success'});
});

/**
 * @swagger
 * /u/trades:
 *  get:
 *    summary: get all trades of an user
 *    parameters:
 *      - in: path
 *        required: true
 *        name: user's id
 *        description: an existing user's id
 *        schema:
 *          type: integer
 *          format: int32
 *    responses:
 *        200:
 *          description: an array of trades as JSON objects
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  items:
 *                    card1: object
 *                    card2: object
 *                    user1: object
 *                    user2: object
 *                    quantity1: integer
 *                    quantity2: integer
 *                    date: integer
 *        400:
 *          description: could not get
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: object
 *                items:
 *                  error: string
 */
 router.get('/trades/:id', async (req, res) => {
  const { id } = req.params;
  if(!id) return res.status(400).send({ error: "no id" });
  const data = await users.getTradesForUser(id);
  if (data.error) res.status(400).send({ error: data.error });
  else res.status(200).send(data);
});

/**
 * @swagger
 * /u/trades:
 *  post:
 *    summary: accepts or declines a trade
 *    responses:
 *        200:
 *          description: processed trade
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: string
 *        400:
 *          description: could not process trade
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: object
 *                items:
 *                  error: string
 */
router.post('/trades',async (req,res)=>{
  const { u1,u2,c1,c2,date,mode }=req.body;
  let data;
  if(mode==0) data=await users.addTrade(u1,u2,c1,c2,date);
  else if(mode==1) data=await users.acceptTrade(u1,u2,c1,c2,date);
  else data=await users.declineTrade(u1,u2,c1,c2,date);
  if (data.error) res.status(400).send({ error: data.error });
  else res.status(200).send(data);
});

module.exports = router;
