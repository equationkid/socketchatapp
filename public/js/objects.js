
/**
 * All the possiblilities for type in the Status class
 */
const STATUSTYPE = {
    CONNECT: 0,
    DISCONNECT: 1,
    TYPING: 2,
    NEUTRAL: 3
}

/**
 * Stores the data for one user in the chatroom
 */
class User {

    /**
     * Makes a new User with name specified
     * @param {String} name The user's name
     */
    constructor(name) {
        this.name = name
        this.messages = new Array()
        this.status = STATUSTYPE.NEUTRAL
    }

    /**
     * Adds a message to this user's sent messages
     * @param {Message} msg The message to add
     */
    addMessage(msg) {
        this.messages.push(new Message(
            msg, Date.now(), this
        ))
    }

    /**
     * Messages is read-only
     */
    get messages() {
        return null
    }

    // TODO: Make change in status fire important events
    set status(value) {
        this.status = value
    }

}

/**
 * Stores data for a message in the chat
 */
class Message {

    /**
     * Creates a new message, and defaults time to Date.now
     * @param {String} content The message's content
     * @param {User} user The user who sent the message
     */
    constructor(content, user) {
        this(content, Date.now(), user)
    }

    /**
     * Time should be read-only
     */
    set time(value) {
        return null
    }

    /**
     * Content should be read-only
     */
    set content(value) {
        return null
    }

}
