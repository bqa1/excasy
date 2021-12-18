const Discord = require("discord.js");
module.exports = {
    name: "clear",
    aliases : ["wyczysc", "purge"],
    description: "clear chat",
    category: "mod",
    cooldown: 5,
    usage: "clear <ilość>",
    run: async(client, message, args) => {

     
        if (!message.member.permissions.has(Discord.Permissions.MANAGE_MESSAGES))  {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("You dont have /`MANAGE_MESSAGES/`permissions")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
          
        }
        if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES))  {
            const perm = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                .setDescription("I dont have \`MANAGE_MESSAGES\` permissions")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.channel.send({embeds: [perm] });

        }
        if (!args[0]) {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
                .setDescription("Give amount to clear")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm]});
        } else {
            if (Number.isNaN(+args[0])) {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
                .setDescription("Invaild amount")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
            } else {
            if ((args[0]) > 100) {
                const perm = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                    .setDescription("i can delete max 100 messages")
                    .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm]});
            } else {

                if ((args[0]) < 1) {
                    const perm = new Discord.MessageEmbed()
                    .setTitle("Something went wrong")
                    .setColor("#2f3136")
                        .setDescription("i cant delete 1 message")
                        .setFooter(message.author.tag, message.author.displayAvatarURL())
                    return message.reply({embeds: [perm]});
                } else {


                    message.channel.bulkDelete(args[0] - 1).then(res => {
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Succes")
                        .setColor("#2f3136")
                        .setDescription(`Deleted \`${res.size}/${args[0] - 1}\` messages`)
                        .setFooter(message.author.tag, message.author.displayAvatarURL())
                    return message.channel.send({embeds: [embed]})


                    }).catch(() => {
                        const perm = new Discord.MessageEmbed()
                        .setTitle("Something went wrong")
                        .setColor("#2f3136")
                            .setDescription("i cant delete messages")
                            .setFooter(message.author.tag, message.author.displayAvatarURL())
                        return message.channel.send({embeds: [perm]});

                    }) 
  
                        
                }
                }
            }
        }
    }
    }