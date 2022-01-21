const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: "volume",
    description: "Skip a song!",
    aliases: ["v"],
  cooldown: 5,
  voiceChannel: true,
    run: async(client, message, args) => {
    
const queue = client.distube.getQueue(message)
if (!queue) {
    const embed = new MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
    .setDescription ('There is nothing in the queue right now!')
    .setFooter(
        message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      return message.reply({embeds: [embed] })
}
const volume = parseInt(args[0])
if (isNaN(volume)) {
    const embed = new MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
    .setDescription ('Invalid number!')
    .setFooter(
        message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      return message.reply({embeds: [embed] })
}
queue.setVolume(volume)
message.channel.send(` Volume set to \`${volume}\``)

    }
}