const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')

module.exports = {
    name: "muterole",
    aliases : ["rolemute"],
    description: "Set/delete muterole",
    category: "mod",
    cooldown: 5,
    usage: "antyinvite <on/off>",
    run: async(client, message, args) => {
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_GUILD))  {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("You dont have \`MANAGE_GUILD\` permissions")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });

        }
        const select = args[0]
        if(!message.content.includes(select)) {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("select `set/delete`!")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
        }
        if(select.toLowerCase() === "set") {
            const database = db.get(`muterole_${message.guild.id}`)
            if(database) {
                const embed = new Discord.MessageEmbed()
                .setColor("#2f3136")
                .setTimestamp()
                .setTitle("Something went wrong")
                .setDescription("Muteroled has been saved")
                return message.reply({embeds: [embed]})
            }
            const channel = message.mentions.roles.first();
            if (!channel) {
                const perm = new Discord.MessageEmbed()
                .setColor("#2f3136")
                .setTimestamp()
                .setTitle("Something went wrong")
                    .setDescription("Mention role")
                    .setFooter(message.author.tag, message.author.displayAvatarURL())
                return message.reply({embeds: [perm]});

            }
          
            db.set(`muterole_${message.guild.id}`, channel)
            const sukcess = new Discord.MessageEmbed()
                .setTitle("Succes!")
                .setColor("#2f3136")
                .setDescription(`Now muterole is ${channel} `)
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [sukcess]});
        }
        if(select.toLowerCase() === "delete") {
            const database = db.get(`muterole_${message.guild.id}`)
            if(!database) {
                const embed = new Discord.MessageEmbed()
                .setColor("#2f3136")
                .setTimestamp()
                .setTitle("Something went wrong")
                .setDescription("Muterole has alredy deleted")
                return message.reply({embeds: [embed]})
            }
            db.delete(`modlogs_${message.guild.id}`)
            const sukcess = new Discord.MessageEmbed()
                .setTitle("Succes!")
                .setColor("#2f3136")
                .setDescription(`Deleted muterole`)
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [sukcess]});
        }


    },
};