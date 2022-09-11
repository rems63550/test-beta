const { EmbedBuilder } = require("discord.js")
const config = require("../../config")
const moment = require("moment");

module.exports = {
    name: "guildMemberAdd",

    async execute(member) {
        let MemberRole = member.guild.roles.cache.get(config.MemberRoleID)
        member.roles.add(MemberRole);

        let WelcomeEmbed = new EmbedBuilder()
        .setTitle(member.guild.name)
        .setDescription(`Welcome <@${member.user.id}> to the **${member.guild.name}**`)
        .addFields (
            {name: ":book: Information", value: `<#${config.InformationID}>`, inline: true},
            {name: ":stars: GetRoles", value: `<#${config.RolesID}>`, inline: true},
            {name: ":gift: Giveaways", value: `<#${config.GiveawayID}>`, inline: true}
        )
        .setColor("Green")
        .setFooter({ text: config.name, iconURL: config.logo })
        .setTimestamp()

        member.guild.channels.cache.get(config.WelcomeID).send({embeds:[WelcomeEmbed],})

    }
}