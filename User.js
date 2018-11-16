class User {
    /**
     * 
     * @param {String} userName The username of this User instance
     * @param {T} userConnection The User's connection instance
     */
    constructor (userName, userConnection) {
        this.userName = userName
        this.userConnection = userConnection
        this.messages = new Array()
        this.status = {
            typing: false,
            lastRead: 0
        }
    }

    /**
     * Sets the User's current status
     */
    set status(statusObject) {
        if (!(statusObject instanceof Object)) {
            throw new TypeError('User.status must be type Object')
        }
        
        for (let item in statusObject) {
            console.log(item)
        }
    }
}
