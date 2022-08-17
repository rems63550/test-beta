const {Client } = require("discord.js")
const ms = require("ms")

module.exports = {
    name: "ready",

    /**
     * @param {Client} client
     **/
    async execute(client) {
        console.log("Bot OP !!!!")

        client.user.setActivity({
            name: "avec testbeta",
            type: 5
        })
    }
}