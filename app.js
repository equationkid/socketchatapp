const express = require('express'),
        app = express(),
        io = require('socket.io'),
        bodyParser = require('body-parser'),
        server = require('http').Server(app)

app.use('/cdn', express.static)
app.use(bodyParser.urlencoded({
        extended: true
}))

app.get('/', (req, res) => {
        res.send('home')
})
app.get('/newroom', (req, res) => {
        res.send('newroom')
})
app.get('/rooms', (req, res) => {
        res.send('rooms')
})
// TODO: app.post
// TODO: io
