const usersController = require('../controllers/usersController');
const users = new usersController();
const router = require('express').Router();
const jwt = require('jsonwebtoken');
//const passport = require('passport');

router.post('/', async (req, res)=>{
    let userData = req.body;
    let foundUser = await users.getUserByEmail(userData.email);
    if(!foundUser){
        return res.status(401).send('Email no encontrado')
    }else
    if(foundUser.password !== userData.password){
        return res.status(401).send('Contraseña incorrecta')
    }
    let payload = { userid: foundUser.userid, checkin: foundUser.checkin};
    let token = jwt.sign(payload, 'secretKey');
    res.status(200).send({token});
});

router.get('/',async (req,res)=>{
    const {token}=req.query;
    if(token)
        res.status(200).send(jwt.decode(token))
    else
        res.status(400).send({userid:-1});
});

/*router.get('/login', (_, res)=>{
});

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get(
    '/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(req, res){
        console.log(req.user);
        res.redirect('/profile');
    }
);

router.get('/google/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
});*/

module.exports = router;