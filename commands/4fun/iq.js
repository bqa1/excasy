const { messageEmbed, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'iq',
    description: 'iq test',
    run: async(client, message, args) => {
        const user = message.mentions.users.first() || message.author;
        if(!user) {
            const embed1 = new MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription ('Mention someone!\nVaild usage: \`[p]iq @someone\`')
            .setFooter(
                message.member.displayName,
                message.author.displayAvatarURL({ dynamic: true })
              )
            .setTimestamp()
            return message.channel.send({ embeds: [embed1] })
        }
        let rate = Math.floor(Math.random() * (200 - 1 + 1) + 1);
        
        const embed = new MessageEmbed()
        .setTitle("Succes!")
        .setColor("#2f3136")
        .setDescription(`IQ \`${user.tag}\` totals: \`${rate}\``)
        .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()
        message.channel.send({embeds: [embed] })
    }
}