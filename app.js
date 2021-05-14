const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const lessMiddleware = require('less-middleware');
const logger = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
//var passport = require('passport');
require('dotenv').config();
const multer=require('multer');
const axios = require('axios').default;
//require('./config/passport');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios').default;
const usersController = require('./controllers/usersController');
const users = new usersController();

const authRouter = require('./routes/auth');
const cardsRouter = require('./routes/cards');
const chatRouter = require('./routes/chat');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'card-trading api',
      version: '1.0.0',
      description: 'an api for being able to have a full api for card trading with users and chat',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, 'uploads');
  },
  filename: (req, file, cb)=>{
    cb(null, file.originalname);
  }
});
const upload = multer({storage});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors({origin: "*"}));
app.use(morgan('tiny'));

/*app.use((req, res, next) => {
  if (req.header('Authorization')) {
    req.token = req.header('Authorization').replace('Bearer ', '');
    console.log("en algun momento fue valido");
    return next();
  }
  res.status(401).send('401 unauthorized');
});*/

app.use(async (req, res, next) => {
  try {
    //console.log("AAAAAAAAAAAAA esta usando el primer md");
    if (!req.header('Authorization')){
      //console.log("AAAAAAAAAAAAA paso prueba1");
      next(); 
    } else{
      //console.log("AAAAAAAAAAAAA esta haciendo algo de headers");
      req.token = req.header('Authorization').replace('Bearer ', '');
      const response = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${req.token}`);
      const user = await users.getUserByEmail(response.data.email);
      //console.log(user);
      //console.log(user);
      //console.log(response.data);
      if (!!user) { // (!!user === Boolean(user)) = true
        req.usuario = user;
        return next();
      }
      else{
        let u = response.data;
        let ru = await users.registerUser(u.given_name, u.family_name, u.name, u.password, u.email);
        req.usuario = ru;
        return next();
      }
    }
    
  } catch (err) {
    return res.send(err);
  }
});

app.use('/', indexRouter);
app.use('/u', usersRouter);
app.use('/c', cardsRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use('/login', authRouter);
app.use('/chat', chatRouter);

app.get('/api', async (req,res)=>{
  const { hundos } = req.query || 0;
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${hundos*100}`).then(result=>{
    return Promise.all(
      result.data.results.map(p => new Promise( (re,rej) => axios.get(p.url).then(re).catch(rej)) )
    );
  }).then(results => results.map(r => ({ id: r.data.id, name: r.data.name[0].toUpperCase() + r.data.name.substring(1), img: r.data.sprites.front_default, types: r.data.types }))
  ).then(pokimons=>res.status(200).send(pokimons)).catch(res.status(400).send);
})

app.post('/file', upload.single('file'), (req, res, next)=>{
  const file = req.file;
  if(!file) return res.status(400).send({error: "Please include a file"});
  res.send({msg:"wow"})
});

module.exports = app;
