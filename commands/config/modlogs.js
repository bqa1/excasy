const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')

module.exports = {
    name: "modlogs",
    aliases : ["modlog", "setlogs"],
    description: "Enable/Disable modlogs system",
    category: "mod",
    cooldown: 5,
    usage: "antyinvite <on/off>",
    run: async(client, message, args) => {
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_GUILD))  {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("You dont have permissions")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });

        }
        const select = args[0]
        if(!message.content.includes(select)) {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("select `on/off`!")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
        }
        if(select.toLowerCase() === "on") {
            const database = db.get(`modlogs_${message.guild.id}`)
            if(database) {
                const embed = new Discord.MessageEmbed()
                .setColor("#2f3136")
                .setTimestamp()
                .setTitle("Something went wrong")
                .setDescription("Logs has already enabled")
                return message.reply({embeds: [embed]})
            }
            const channel = message.mentions.channels.first();
            if (!channel) {
                const perm = new Discord.MessageEmbed()
                .setColor("#2f3136")
                .setTimestamp()
                .setTitle("Something went wrong")
                    .setDescription("Mention channel")
                    .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm]});

            }
           
            if (!channel.type === "GUILD_TEXT") {
                const perm = new Discord.MessageEmbed()
                .setColor("#2f3136")
                .setTimestamp()
                .setTitle("Something went wrong")
                    .setDescription("channel need to be GUILD_TEXT")
                    .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm]});
            }
            db.set(`modlogs_${message.guild.id}`, channel)
            const sukcess = new Discord.MessageEmbed()
                .setTitle("Succes!")
                .setColor("#2f3136")
                .setDescription(`Enabled modlogs`)
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [sukcess]});
        }
        if(select.toLowerCase() === "off") {
            const database = db.get(`modlogs_${message.guild.id}`)
            if(!database) {
                const embed = new Discord.MessageEmbed()
                .setColor("#2f3136")
                .setTimestamp()
                .setTitle("Something went wrong")
                .setDescription("logs has alredy disabled")
                return message.reply({embeds: [embed]})
            }
            db.delete(`modlogs_${message.guild.id}`)
            const sukcess = new Discord.MessageEmbed()
                .setTitle("Succes!")
                .setColor("#2f3136")
                .setDescription(`Disabled logs`)
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [sukcess]});
        }


    },
};