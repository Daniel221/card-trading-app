/**
 * Module dependencies.
 */

const app = require('../app');
const debug = require('debug')('adopt-me:server');
const http = require('http');
const ChatController = require('../controllers/chatController');
const chat = new ChatController();

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origins: ['http://locahost:4200'],
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('login', ({ name, room }) => {
    const user = { name, room, id: socket.id };
    console.log(user);
    socket.join(user.room);
  });

  socket.on('disconnect', ({ room }) => {
    console.log('user disconected');
    socket.leave(room);
  });

  socket.on('logout', ({ room }) => {
    socket.leave(room);
  });

  socket.on('send_message', async (message) => {
    const { addresseeid, userid, msg, date } = message;
    console.log('message send' + ` ${addresseeid}_${userid}`);
    socket.to(`${addresseeid}_${userid}`).emit('message', {
      msg,
      addresseeid,
      userid,
      date,
    });
  });
});
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      // eslint-disable-next-line no-process-exit
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      // eslint-disable-next-line no-process-exit
      process.exit(1);
    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
