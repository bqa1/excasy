const { Client, Message, MessageEmbed } = require("discord.js")
const { RepeatMode } = require('discord-music-player');

module.exports = {
  name: "loopon",
  description: "Loop a song!",

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

    let queue = guildQueue.setRepeatMode(RepeatMode.SONG);
    if(!queue) {
        return message.reply('Loop `ON`')
}
  }
}