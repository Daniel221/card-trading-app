const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const lessMiddleware = require('less-middleware');
const logger = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

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

app.use('/', indexRouter);
app.use('/u', usersRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

module.exports = app;
