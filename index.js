const { Client, Partials, role, Collection, InteractionType, GuildMember } = require("discord.js")
const ms = require("ms")
const { MemberRoleID } = require("./config")
const config = require("./config")
const interactionCreate = require("./Events/Interaction/interactionCreate")
const { Channel, Message, Reaction, ThreadMember, User, GuildScheduledEvent } = Partials
const client = new Client({
    intents: 131071,
    partials: [Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent],
    allowedMentions: { parse: ["everyone", "roles", "users"]},
    rest: { timeout: ms("1m")}
})

client.on("interactionCreate", async(interaction, member) => {
    if(!interaction.type === InteractionType.MessageComponent) return;
    if(interaction.customId === "Validation") {
        await member.role.add("1011323294475108383")
        await interaction.reply({content: "tu as validé le réglement les portes te sont ouverte", ephemeral: true})
    
    if(!interaction.type === InteractionType.MessageComponent) return;    
    if(interaction.customId === "Refus") {
        await interaction.reply({content: " tu n'as pas accepter le réglement tu n'as donc pas ta place parmis nous", ephemeral: true})
    }
    }
})

client.commands = new Collection()
client.events = new Collection()

const Handlers = ["Events", "Commands"]

Handlers.forEach(handler => {
    require(`./Handlers/${handler}`)(client)
})

module.exports = client


client.login(config.token)
