const { Client, ChatInputCommandInteraction, ApplicationCommandOptionType, EmbedBuilder } = require("discord.js")
const config = require("../../config")

module.exports = {
    name: "clear",
    description: "Efface des messages de salon ou d'utilisateur",
    userPerms: ["ManageMessages"],
    botPerms: ["ManageMessages"],
    options: [
        {
            name: "amount",
            description: "Select amount of message you want delete",
            type: ApplicationCommandOptionType.Integer,
            require: true
        },
        {
            name: "user",
            description: "Select the users",
            type: ApplicationCommandOptionType.User,
            require: false
        }
    ],
    category: "Moderation",
    /**
    * @param {Client} client
    * @param {ChatInputCommandInteraction} interaction
    */
    async execute(client, interaction) {
        let amount = interaction.options.getInteger("amount")
        let user = interaction.options.getUser("user")
        if(amount >= 100) return interaction.reply({content: `:warning: | Je ne peut pas supprimer plus de 100 messages !!`})
        if(amount <= 0) return interaction.reply(({content: `:warning: | Pourquoi supprimer un nombre de messages négatif !!!`})) 
        if (!user) {
            await interaction.channel.bulkDelete(amount).then((msg) => {
                interaction.reply({ content: `J\'ai supprimer ${msg.size}/${amount} messages`, ephemeral: true})
            })
        } else {
            let msg = await interaction.channel.messages.fetch({limit: amount})
            let data = [];
            msg.map((m) => m).forEach((m) => {
                if(m.author.id === user.id) data.push(m)
            });

            await interaction.channel.bulkDelete(data.length ? data.length : 1).then((msg) => {
                interaction.reply({ content: `J\'ai supprimer ${msg.size}/${amount} messages de ${user.tag} !`, ephemeral: true})
            })
        }
    }
}
