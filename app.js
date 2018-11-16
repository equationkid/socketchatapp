const express = require('express'),
        app = express(),
        server = require('http').Server(app),
        io = require('socket.io')(server),
        bodyParser = require('body-parser')

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
app.post('/newroom', (req, res) => {
        res.render('/newroom')
})
app.get('/rooms', (req, res) => {
        res.render('rooms')
})

// TODO: app.post
io.on('connection', () => {
        console.log('Someone connected')
})
