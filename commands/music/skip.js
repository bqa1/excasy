const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "skip",
  description: "Skip a song!",
  aliases: ["s"],
cooldown: 5,
voiceChannel: true,
  run: async(client, message, args) => {
  
    const queue = client.distube.getQueue(message)
    if (!queue){
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
    try {
        const song = await queue.skip()
        message.channel.send(`Skipped! Now playing:\n${song.name}`)
    } catch (e) {
        message.channel.send(`${e}`)
    }
  }

}