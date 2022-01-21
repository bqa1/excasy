const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "play",
  voiceChannel: true,
  description: "Play a song!",
  cooldown: 5,
  aliases: ["p"],
  run: async(client, message, args) => {
    const string = args.join(" ")
    if (!string) {
      const embed = new MessageEmbed()
      .setTitle("Something went wrong")
      .setColor("#2f3136")
      .setDescription ('Enter the song title!')
      .setFooter(
          message.member.displayName,
          message.author.displayAvatarURL({ dynamic: true })
        )
        return message.reply({embeds: [embed] })
    }
    client.distube.play(message.member.voice.channel, string, {
        member: message.member,
        textChannel: message.channel,
        message
    })
  }
}