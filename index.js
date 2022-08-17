const { Client, Partials, Collection} = require("discord.js")
const ms = require("ms")
const config = require("./config")
const { Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent } = Partials
const client = new Client({
    intents: 131071,
    partials: [Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent],
    allowedMentions: { parse: ["everyone", "roles", "users"]},
    rest: { timeout: ms("1m")}
})

client.commands = new Collection()
client.events = new Collection()

const Handlers = ["Events", "Commands"]

Handlers.forEach(handler => {
    require(`./Handlers/${handler}`)(client)
})

module.exports = client


client.login(config.token)