const Discord = require("discord.js");
module.exports = {
    name: "clearm",
    aliases : ["clearmember"],
    description: "delete someone messages",
    category: "mod",
    cooldown: 5,
    usage: "clear <ilość>",
    run: async(client, message, args) => {
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES))  {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("You dont have \`MANAGE_MESSAGES\` permissions")
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

        let member = message.mentions.members.first()
        let amount = args[1]
        if(!member) { 
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("Mention user")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.channel.send({embeds: [perm] });
        }
            if(!amount) { 
                const perm = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                    .setDescription("Provide an amount")
                    .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm]});
            }
        

            if (Number.isNaN(+args[1])) {
                const perm = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                    .setDescription("Invaild amount")
                    .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm] });
                }

        if(amount > 100) {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
                .setDescription("i can delete max 100 messages")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm]});
        }
        let AllMessages = await message.channel.messages.fetch()
        let FilteredMessages = await AllMessages.filter(x => x.author.id === member.id)
        if(!FilteredMessages) { 
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
                .setDescription("")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.channel.send({embeds: [perm]});
        }
        let deletedMessages = 0
        FilteredMessages.forEach(msg => {
            if(deletedMessages >= amount) return
            msg.delete()
            deletedMessages++
        })
            const embed = new Discord.MessageEmbed()
            .setTitle("Succes")
            .setColor("#2f3136")
            .setDescription(`Deleted ${member.user} ${amount} messages`)
            .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.channel.send({embeds: [embed]}).catch(() => {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
                .setDescription("i cant delete messages")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.channel.send({embeds: [perm]});
        })
    }}