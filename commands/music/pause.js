const { Client, Message, MessageEmbed } = require("discord.js")
module.exports = {
    name: "pause",
    voiceChannel: true,
    description: "Pause a song!",
    cooldown: 5,
    aliases: ["s", "stop"],
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
        if (queue.pause) {
            queue.resume()
                const embed = new MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                .setDescription ('Resumed the song for you :)')
                .setFooter(
                    message.member.displayName,
                    message.author.displayAvatarURL({ dynamic: true })
                  )
                  return message.reply({embeds: [embed] })
            queue.resume()
    
        }
        queue.pause()
        message.channel.send("Paused the song for you c;")

    }
}