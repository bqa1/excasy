const { MessageEmbed } = require('discord.js');
const { MessageAttachment } = require('discord.js');
const emotes = require('../../emotes.json')


module.exports = {
    name: 'drip',
    run: async(client, message, args) => {
        const member = message.mentions.users.first() || message.author;
        const image = `https://api.popcat.xyz/drip?image=${member.displayAvatarURL({ format: "png", dynamic: true })}`;
        const attachment = new MessageAttachment(image, `invert.png`);
        const embed = new MessageEmbed()
        .setTitle(`💎・Drip!`)
        .setColor("#2f3136")
          .setImage('attachment://invert.png')
          .setTimestamp()
          .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
          )
        message.channel.send({ 
        embeds: [embed],
        files: [attachment]
         })
    }
}