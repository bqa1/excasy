const { Client, Message, MessageEmbed } = require("discord.js")
const { RepeatMode } = require('discord-music-player');

module.exports = {
  name: "loop",
  description: "Loop a song!",
  aliases: ["l"],
  voiceChannel: true,
  cooldown: 5,
  run: async(client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) {
      const embed = new MessageEmbed()
      .setTitle("Something went wrong")
      .setColor("#2f3136")
      .setDescription (' There is nothing playing!')
      .setFooter(
          message.member.displayName,
          message.author.displayAvatarURL({ dynamic: true })
        )
        return message.reply({embeds: [embed] })
    }
    let mode = null
    switch (args[0]) {
        case "off":
            mode = 0
            break
        case "song":
            mode = 1
            break
        case "queue":
            mode = 2
            break
    }
    if(!args[0]) {
      const embed = new MessageEmbed()
      .setTitle("Something went wrong")
      .setColor("#2f3136")
      .setDescription (`Select \`off/queue/song\``)
      .setFooter(
          message.member.displayName,
          message.author.displayAvatarURL({ dynamic: true })
        )
        return message.reply({embeds: [embed] })
    }
    mode = queue.setRepeatMode(mode)
    mode = mode ? (mode === 2 ? "Repeat queue" : "Repeat song") : "Off"
    message.channel.send(`Set repeat mode to \`${mode}\``)
  }
}