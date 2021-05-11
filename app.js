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
//require('./config/passport');

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
app.use('/', indexRouter);
app.use('/u', usersRouter);
app.use('/c', cardsRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use('/login', authRouter);
app.use('/chat', chatRouter);

app.post('/file', upload.single('file'), (req, res, next)=>{
  const file = req.file;
  if(!file) return res.status(400).send({error: "Please include a file"});
  res.send({msg:"wow"})
});

module.exports = app;
