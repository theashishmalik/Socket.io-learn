
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const app = express()

const server = http.createServer(app)
const io = socketio(server)

app.use('/', express.static(
    __dirname + '/public'
))

io.on('connection', (socket) => {

    socket.on('send text', (data) => {
        console.log(data.message)

        io.emit('send text', data)
    })

})

server.listen(7890, () => {
    console.log('running on http://localhost:7890')
})
