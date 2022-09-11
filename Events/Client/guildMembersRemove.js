const { EmbedBuilder } = require("discord.js")
const config = require("../../config")
const moment = require("moment");

module.exports = {
    name: "guildMemberRemove",

    async execute(member) {
        let RemoveEmbed = new EmbedBuilder()
        .setTitle(member.guild.name)
        .setDescription(`<@${member.user.id}> Nous a quitté`)
        .setColor("Green")
        .setFooter({ text: config.name, iconURL: config.logo })
        .setTimestamp()

        member.guild.channels.cache.get(config.RemoveID).send({embeds:[RemoveEmbed],})

    }
}