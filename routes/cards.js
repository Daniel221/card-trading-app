const router=require('express').Router();
const { route } = require('.');
const cardsCont=require('../controllers/cardsController')
const cards=new cardsCont();

/**
 * @swagger
 * /u:
 *  get:
 *    summary: get all cards from the database or a specific user
 *    responses:
 *      200:
 *        description: an array of cards as JSON objects
 *        contents:
 *          application/JSON:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                items:
 *                  title: string
 *                  cardid: number
 *                  description: string
 *                  type: number
 *                  image: string
 *      400:
 *        description: error happened
 *        contents:
 *          application/JSON:
 *            schema:
 *              type: object
 *              items:
 *                error: string
 */
router.get('/',async (req,res)=>{
    const {user}=req.query;
    if(user){
        const cartas=await cards.getAllFromUser({userid:user});
        if(cartas.error)res.status(400).send({error:cartas.error});
        else res.status(200).send(cartas);
        return;
    }
    const data=await cards.getList();
    if(data.error)res.status(400).send({error:data.error});
    else res.status(200).send(data);
});

router.get('/:id',async (req,res)=>{
    const {id}=req.params;
    const card=await cards.getCard(id);
    res.status(200).send(card);
});

/**
 * @swagger
 * /u/contacts:
 *  post:
 *    summary: grant a random card to an user
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
 *          description: granted
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: string
 *        400:
 *          description: could not grant
 *          contents:
 *            application/JSON:
 *              schema:
 *                type: object
 *                items:
 *                  error: string
 */
router.post('/:userid',async (req,res)=>{
    const { userid } = req.params;
    const { cardid } = req.body;
    if(userid==null||cardid==null)return res.status(400).send({error:"Not enough data"});
    const data=await cards.grantToUser(cardid,userid);
    res.status(200).send({data:data});
});

module.exports=router;
