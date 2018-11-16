let socket = io()

socket.on('connection-request', () => {
    socket.emit('connection-response')
})

socket.on('broadcast-messsage', (msg) => {
})

$('#message-send-form').submit((event) => {
    event.preventDefault()
    socket.emit('send-message', $('#send-input').text())

    // TODO: Allow user to see their own message

    $('#send-input').text('')
})
