const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "leave",
  description: "leave a channel!",

  run: async(client, message, args) => {
    if(!message.member.voice.channel) {
        const embed = new MessageEmbed()
        .setTitle("Something went wrong")
        .setColor("#2f3136")
        .setDescription ('Join a channel!')
        .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          )
          return message.reply({embeds: [embed] })
    }

    let guildQueue = client.player.getQueue(message.guild.id);

    let queue = guildQueue.stop();
    if(!queue) {
const embed2 = new MessageEmbed()
.setTitle("Succes!")
.setColor("#2f3136")
.setDescription ('I left the channel!')
.setFooter(
    message.member.displayName,
    message.author.displayAvatarURL({ dynamic: true })
  )
  return message.reply({embeds: [embed2] })
}
  }
}