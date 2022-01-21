const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')

module.exports = {
    name: "welcome",
    aliases : ["powitania", 'setwelcome'],
    description: "setup custom welcome",
    category: "mod",
    cooldown: 5,
    usage: "welcome <on/off/message>",
    run: async(client, message, args) => {
const replace = member
.replace(/{user}/g, `${member.user}`)
.replace(/{user_tag}/g, `${member.user.tag}`)
.replace(/{user_name}/g, `${member.user.username}`)
.replace(/{user_ID}/g, `${member.user.id}`)
.replace(/{guild_name}/g, `${member.guild.name}`)
.replace(/{guild_ID}/g, `${member.guild.id}`)
.replace(/{memberCount}/g, `${member.guild.memberCount}`)
.replace(/{size}/g, `${member.guild.memberCount}`)
.replace(/{guild}/g, `${member.guild.name}`)
.replace(/{member_createdAtAgo}/g, `${moment(message.author.createdTimestamp).fromNow()}`)
.replace(/{member_createdAt}/g, `${moment(message.author.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`)

        if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_GUILD))  {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
                .setDescription("You need \`MANAGE_SERVER\` permission")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });

        }

   const select = args[0]
     if(!message.content.includes(select)) {
         const perm = new Discord.MessageEmbed()
         .setTitle("Something went wrong")
         .setColor("#2f3136")
            .setDescription("Enabled/disable custom welcome using \`on/off\`")
             .setFooter(message.author.tag, message.author.displayAvatarURL())
         return message.reply({embeds: [perm] });
     }
  
     if(select === "on") {
         const channel = message.mentions.channels.first();
         if(!channel) {
             const perm = new Discord.MessageEmbed()
             .setTitle("Something went wrong")
             .setColor("#2f3136")
                 .setDescription("Mention a channel")
                 .setFooter(message.author.tag, message.author.displayAvatarURL())
             return message.reply({embeds: [perm] });
         }
     if(channel.type === "GUILD_VOICE") {
        const database = db.get(`welcome_${message.guild.id}`)
        if(database) {
            const embed = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
        .setColor("#2f3136")
            .setDescription("Custom welcome has already enabled")
            return message.reply({embeds: [embed]})
        }
         const perm = new Discord.MessageEmbed()
         .setTitle("Something went wrong")
         .setColor("#2f3136")
             .setDescription("Channel need to be \`GUILD_TEXT\`")
             .setFooter(message.author.tag, message.author.displayAvatarURL())
         return message.reply({embeds: [perm] });
     }
         db.set(`welcome_${message.guild.id}`, channel);
         const succes = new Discord.MessageEmbed()
             .setTitle("Succes")
             .setDescription(`We send info if someone join into serwer`)
             .setColor("#2f3136")
         message.reply({embeds: [succes]})
     }
     if(select === "off") {
        const database = db.get(`welcome_${message.guild.id}`)
        if(!database) {
            const embed = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("Custom welcome has already disabled")
            return message.reply({embeds: [embed]})

        }
        db.delete(`welcome_${message.guild.id}`)
        const succes = new Discord.MessageEmbed()
        .setTitle("Succes")
        .setDescription(`Disabled custom welcome`)
        .setColor("#2f3136")
    message.reply({embeds: [succes]})
     }
    }





    }