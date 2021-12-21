const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "play",
  description: "Play a song!",

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
   
    const query = args.join(" ")
    if(!query) {
        if(!message.member.voice.channel) {
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
    }

    let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' ')).catch(_ => {
            if(!guildQueue)
                queue.stop();
            });
   const sng = new MessageEmbed()
   .setTitle("Succes!")
.setColor("#2f3136")
.setDescription (`I playing: **${song}**`)
.setFooter(
    message.member.displayName,
    message.author.displayAvatarURL({ dynamic: true })
  )
  message.reply({embeds: [sng] })
  }
}