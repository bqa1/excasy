const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'sus',
    description: 'suses sus amogus',

    run: async(client, message, args) => {
        const suses = [
            `⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
        ⬛⬛🟢🟢🟢🟢⬛⬛⬛⬜⬜⬜⬛⬛⬜⬛⬛⬜⬛⬛⬜⬜⬜⬛⬛
        ⬛🟢🟢🌐🌐🌐🌐⬛⬛⬜⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬛
        ⬛🟢🟢🌐🌐🌐🌐⬛⬛⬜⬜⬜⬛⬛⬜⬛⬛⬜⬛⬛⬜⬜⬜⬛⬛
        ⬛🟢🟢🟢🟢🟢⬛⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬛⬜⬛⬛
        ⬛⬛🟢🟢🟢🟢⬛⬛⬛⬜⬜⬜⬛⬛⬛⬜⬜⬛⬛⬛⬜⬜⬜⬛⬛
        ⬛⬛🟢🟢🟢🟢⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛`,

        `⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
        ⬛⬛🔴🔴🔴🔴⬛⬛⬛⬜⬜⬜⬛⬛⬜⬛⬛⬜⬛⬛⬜⬜⬜⬛⬛
        ⬛🔴🔴🌐🌐🌐🌐⬛⬛⬜⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬛
        ⬛🔴🔴🌐🌐🌐🌐⬛⬛⬜⬜⬜⬛⬛⬜⬛⬛⬜⬛⬛⬜⬜⬜⬛⬛
        ⬛🔴🔴🔴🔴🔴⬛⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬛⬜⬛⬛
        ⬛⬛🔴🔴🔴🔴⬛⬛⬛⬜⬜⬜⬛⬛⬛⬜⬜⬛⬛⬛⬜⬜⬜⬛⬛
        ⬛⬛🔴🔴🔴🔴⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛`,

        `⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
        ⬛⬛🔵🔵🔵🔵⬛⬛⬛⬜⬜⬜⬛⬛⬜⬛⬛⬜⬛⬛⬜⬜⬜⬛⬛
        ⬛🔵🔵🌐🌐🌐🌐⬛⬛⬜⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬛
        ⬛🔵🔵🌐🌐🌐🌐⬛⬛⬜⬜⬜⬛⬛⬜⬛⬛⬜⬛⬛⬜⬜⬜⬛⬛
        ⬛🔵🔵🔵🔵🔵⬛⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬛⬜⬛⬛
        ⬛⬛🔵🔵🔵🔵⬛⬛⬛⬜⬜⬜⬛⬛⬛⬜⬜⬛⬛⬛⬜⬜⬜⬛⬛
        ⬛⬛🔵🔵🔵🔵⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛`,
        
        `⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
        ⬛⬛🟣🟣🟣🟣⬛⬛⬛⬜⬜⬜⬛⬛⬜⬛⬛⬜⬛⬛⬜⬜⬜⬛⬛
        ⬛🟣🟣🌐🌐🌐🌐⬛⬛⬜⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬛
        ⬛🟣🟣🌐🌐🌐🌐⬛⬛⬜⬜⬜⬛⬛⬜⬛⬛⬜⬛⬛⬜⬜⬜⬛⬛
        ⬛🟣🟣🟣🟣🟣⬛⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬛⬜⬛⬛
        ⬛⬛🟣🟣🟣🟣⬛⬛⬛⬜⬜⬜⬛⬛⬛⬜⬜⬛⬛⬛⬜⬜⬜⬛⬛
        ⬛⬛🟣🟣🟣🟣⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛`
        ]
        const generator = suses[Math.floor(Math.random() * suses.length)]
        const embed = new MessageEmbed()
        .setTitle("Succes!")
        .setColor("#2f3136")
        .setDescription(`${generator}`)
        .setTimestamp()
        .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
        )
        message.channel.send({embeds: [embed] })
    }
}