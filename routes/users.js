const usersController = require('../controllers/usersController');
const users = new usersController();
const router = require('express').Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await users.getUserById(id);

  res.status(200).send(user);
});

/**
 * @swagger
 * /u:
 *  post:
 *    summary: Post a new user on the DB
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
 *                email: string
 */
router.post('/', async (req, res) => {
  const { name, lastName, username, email, password } = req.body;
  console.log(email);
  const user = await users.getUserByEmail(email);

  if (user === undefined) {
    const user = await users.registerUser(name, lastName, username, password, email);
    res.status(200).send({ user: user });
  } else {
    res.status(400).send({ error: 'user already exists' });
  }
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
router.put('/:id',async (req,res)=>{
  const {name, lastName, username, password}=req.body;
  const u=await users.editUser(req.params.id,{name, lastName, username, password});
  if(u.error) res.status(400).send({error:u.error});
  else res.status(200).send({name, lastName, username, password});
});

module.exports = router;
