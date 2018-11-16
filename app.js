const express = require('express'),
        app = express(),
        io = require('socket.io'),
        bodyParser = require('body-parser'),
        server = require('http').Server(app)

server.listen(80, () => {
        console.log('Server is running...')
})

app.use('/cdn', express.static)
app.use(bodyParser.urlencoded({
        extended: true
}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
        res.render('home')
})
app.get('/newroom', (req, res) => {
        res.render('newroom')
})
app.get('/rooms', (req, res) => {
        res.render('rooms')
})
// TODO: app.post
// TODO: io
