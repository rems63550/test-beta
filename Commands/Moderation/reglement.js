const {Client, ChatInputCommandInteraction, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, channelLink, Component } = require("discord.js")
const config = require("../../config")

module.exports = {
    name: "reglement",
    description: "réglement du serveur.",
    userPerms: ["Administrator"],
    botPerms: ["Administrator"],
    category: "Moderation",
    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(client, interaction, message) {
        const REGLEMENT = new EmbedBuilder()
                    .setColor('#0099ff')
                    .setTitle(`**Réglement du serveur **Poudlard 2032**  !**`)
                    .setDescription(`Bienvenue parmis nous,\n\n Afin de visualiser les divers salons, merci de lire et validé le règlement.`)
                    .addFields(
                        { name: '**REGLE N° 1 :**', value: `Le respect et la rigueur sont  obligatoires`},
                        { name: '**REGLE N° 2 :**', value: `Les propos racistes, homophobes ou discriminations qui auraient pour but d'insulter ou blesser quelqu'un,\n entraineront un ban définitif de ce serveur.`},
                        { name: '**REGLE N° 3 :**', value: `Les publicités et spams sont interdits, pour tout partenariat il vous faudra ouvrir un ticket pour ainsi\n en parler avec l'administration.`},
                        { name: '**REGLE N° 4 :**', value: `Toute forme de harcèlement entrainera un ban définitif.`},
                        { name: '**REGLE N° 5 :**', value: `Toutes identifications inutiles sont interdites, nous prendrons des sanctions en fonction du caractère\n répétitif de cette infraction.`},
                        { name: '**REGLE N° 6 :**', value: `Tout contenu à caractère violent (sang , cadavre ...) ou sexuel est interdit  , il peut y'avoir des mineurs dans ce serveur.`},
                    )
                    .addFields({ name: '**REGLE N° 7 :**', value: `Si une personne est en désaccord avec vous ne la forcez pas. `})
                    
                    .setTimestamp()
                    .setFooter({ text: config.name, iconURL: config.logo })

                var row = new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Success)
                        .setCustomId('Validation')
                        .setEmoji('✅')
                        .setLabel('Je valide')                       
                ).addComponents(
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Danger)
                        .setCustomId('Refus')
                        .setEmoji('❌')
                        .setLabel('Non merci')       
                );
                interaction.reply({
                    embeds: [REGLEMENT],
                    components: [row]

    })
}
                
}

                
    
