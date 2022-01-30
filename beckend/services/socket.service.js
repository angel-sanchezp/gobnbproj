const asyncLocalStorage = require('./als.service');
const logger = require('./logger.service');

var gIo = null
var gMsgs = []

function connectSockets(http, session) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*',
        }
    })
    gIo.on('connection', socket => {
        console.log('New socket', socket.id, session)
        socket.on('disconnect', socket => {
            console.log('Someone disconnected')
        })
        socket.on('confirm order', order => {
            console.log(' confirm order in sockets beckend', order)
            socket.to(order.buyerId).emit('confirm order', order)


        })
        socket.on('new order', order => {
            console.log('order in sockets beckend', order)
            // emits to all sockets:
            // gIo.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            // gIo.to(socket.myTopic).emit('new order', order)
            // emitToUser('new order', order , order.hostId)
            socket.to(order.hostId).emit('new order', order)
        })
        socket.on('user-watch', userId => {
            socket.join('watching:' + userId)
        })
        socket.on('set-user-socket', userId => {
            logger.debug(`Setting (${socket.id}) socket.userId = ${userId}`)
            console.log('from set user socket', userId);
            socket.userId = userId
            socket.join(userId)
        })
        socket.on('unset-user-socket', () => {
            delete socket.userId
        })
        socket.on('typing', room => {
            // console.log('typing',data);
            socket.broadcast.to(room).emit('typing msg', ` is typing...`);
            // excludedSocket.broadcast.to(room).emit(type, data)


        });

    })
}

function emitTo({ type, data, label }) {
    if (label) gIo.to('watching:' + label).emit(type, data)
    else gIo.emit(type, data)
}

async function emitToUser(type, data, userId) {
    logger.debug('Emiting to user socket: ' + userId)
    const socket = await _getUserSocket(userId)
    if (socket) socket.emit(type, data)
    else {
        console.log('User socket not found');
        _printSockets();
    }
}

// Send to all sockets BUT not the current socket 
async function broadcast({ type, data, room = null, userId }) {
    console.log('BROADCASTING', JSON.stringify(arguments));
    const excludedSocket = await _getUserSocket(userId)
    if (!excludedSocket) {
        // logger.debug('Shouldnt happen, socket not found')
        // _printSockets();
        return;
    }
    logger.debug('broadcast to all but user: ', userId)
    if (room) {
        excludedSocket.broadcast.to(room).emit(type, data)
    } else {
        excludedSocket.broadcast.emit(type, data)
    }
}

async function _getUserSocket(userId) {
    const sockets = await _getAllSockets();
    const socket = sockets.find(s => s.userId == userId)
    return socket;
}
async function _getAllSockets() {
    // return all Socket instances
    const sockets = await gIo.fetchSockets();
    console.log('all sockets',sockets)
    return sockets;
}
// function _getAllSockets() {
//     const socketIds = Object.keys(gIo.sockets.sockets)
//     const sockets = socketIds.map(socketId => gIo.sockets.sockets[socketId])
//     return sockets;
// }

async function _printSockets() {
    const sockets = await _getAllSockets()
    console.log(`Sockets: (count: ${sockets.length}):`)
    sockets.forEach(_printSocket)
}
function _printSocket(socket) {
    console.log(`Socket - socketId: ${socket.id} userId: ${socket.userId}`)
}

module.exports = {
    connectSockets,
    emitTo,
    emitToUser,
    broadcast,
}