const { MessageEmbed } = require('discord.js');
const { MessageAttachment } = require('discord.js');


module.exports = {
    name: 'invert',
    description: 'colors',
    run: async(client, message, args) => {
        const member = message.mentions.users.first() || message.author;
        const image = `https://api.popcat.xyz/invert?image=${member.displayAvatarURL({ format: "png", dynamic: true })}`;
        const attachment = new MessageAttachment(image, `invert.png`);
        const embed = new MessageEmbed()
        .setTitle("Succes!")
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