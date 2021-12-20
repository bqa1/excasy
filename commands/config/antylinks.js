const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')

module.exports = {
    name: "antylink",
    aliases : ["antylinki"],
    description: "Enable/Disable antylink system",
    category: "mod",
    cooldown: 5,
    usage: "antyinvite <on/off>",
    run: async(client, message, args) => {
  
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR))  {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("You dont have permissions")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
          
        }
        if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES))  {
            const perm = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                .setDescription("I dont have \`manage messages\` permissions")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.channel.send({embeds: [perm] });

        }
        let select = args[0];
        if(!message.content.includes(select)) {   
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("select `on/off`!")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
        
        }
     
            if(select.toLowerCase() == "on"){
                const database = db.get(`link_${message.guild.id}`)
                if(database) {
                    const embed = new Discord.MessageEmbed()
                    .setColor("#2f3136")
                    .setTimestamp()
                    .setTitle("Something went wrong")
                    .setDescription("antylink has already enabled")
                    return message.reply({embeds: [embed]})
                }
                db.set(`link_${message.guild.id}`, "tak")
                const embed = new Discord.MessageEmbed()
                    .setColor("#2f3136")
                    .setTimestamp()
                    .setTitle("Succes")
                    .setDescription("Enabled antylink")
                    return message.reply({embeds: [embed]})
                
            }
            
            if(select.toLowerCase() == "off"){
                const database = db.get(`link_${message.guild.id}`)
                if(!database) {
                    const embed = new Discord.MessageEmbed()
                    .setColor("#2f3136")
                    .setTimestamp()
                    .setTitle("Something went wrong")
                    .setDescription("antylink has already disabled")
                    return message.reply({embeds: [embed]})
                }
                db.set(`reklama_${message.guild.id}`, "nie")
                 const embed = new Discord.MessageEmbed()
                .setColor("#2f3136")
                .setTimestamp()
                .setTitle("Succes")
                .setDescription("Disabled antylink")
                return message.reply({embeds: [embed]})
        
            }
         
        
    }

    }
    
