const usersController = require('../controllers/usersController');
const users = new usersController();
const router = require('express').Router();
const jwt = require('jsonwebtoken');
//const passport = require('passport');

router.get('/', (_, res) => {
    res.send({status: 200, message: 'Logged correctly'});
  });

router.post('/', async (req, res)=>{
    let userData = req.body;
    let foundUser = await users.getUserByEmail(userData.email);
    if(!foundUser){
        res.status(401).send('Email no encontrado')
    }else
    if(foundUser.password !== userData.password){
        res.status(401).send('Contraseña incorrecta')
    }
    let payload = { subject: foundUser.id};
    let token = jwt.sign(payload, 'secretKey');
    res.status(200).send({token});
});

/*router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

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