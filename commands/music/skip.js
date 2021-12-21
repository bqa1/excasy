const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "skip",
  description: "Skip a song!",

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

    let queue = guildQueue.skip();
    if(!queue) {
return message.reply('I skipped a song!')
}
  }
}