
const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
    console.log(socket.id)
})


app.use('/', express.static(path.join(__dirname, 'public')))

server.listen(45464, () => {
    console.log('running on http://localhost:45464')
})