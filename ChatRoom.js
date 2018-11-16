class ChatRoom {
    constructor(name, ioConnection) {
        this.name = new String(name)
        this.ioConnection = ioConnection
        this.users = []
    }
}
