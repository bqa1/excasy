const Discord = require("discord.js");
module.exports = {
    name: "reset",
    aliases : ["nuke", "resetchannel"],
    description: "reset channel",
    category: "mod",
    cooldown: 5,
    usage: "clear <ilość>",
    run: async(client, message, args) => {

     
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_CHANNELS))  {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("You dont have \`MANAGE_CHANNELS\` permissions")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
          
        } else {
   message.channel.clone().then(m => m.send('Nuked!'))
   message.channel.delete()
        }


    }
}