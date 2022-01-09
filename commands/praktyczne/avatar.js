const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const emotes = require('../../emotes.json')

module.exports = {
    name: 'avatar',
    description: 'avatar użytkownika',
    usage: 'avatar [osoba]',
    run: async(client, message, args) => {
        let user = message.mentions.users.first() || message.author;
        const embed = new MessageEmbed()
        .setTitle(`🖼・Avatar: ${user.tag}`)
        .setColor('#2f3136')
        .setImage(user.avatarURL({ size: 2048, dynamic: true, format: "png" }))
        .setFooter(`${message.author.tag}`, 
        message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel('・Pobierz!')
            .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "png"}))
            .setEmoji('🎨')
            .setStyle('LINK')
        )
        message.reply({embeds: [embed], components: [row] })
    }
}