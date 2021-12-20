
const Discord = require("discord.js");
const Permissions = require("discord.js")

module.exports = {
    name: "unban",
    aliases : ["ub"],
    description: "unban someone",
    category: "mod",
    run: async(client, message, args) => {
    
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS))  {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("You dont have \`BAN_MEMBERS\` permissions")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
        
    }
    
    if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS))  {
        const perm = new Discord.MessageEmbed()
        .setTitle("Something went wrong")
        .setColor("#2f3136")
        .setDescription("I dont have \`BAN_MEMBERS\` permissions")
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.reply({embeds: [perm] });
    
    }
        const target = args[0]
        const bannedMembers = await message.guild.bans.fetch()
        if(!target) { 
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("Provide an ID")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
        }

        if(!bannedMembers.has(target)) { 
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("Couldn't find that member in the ban list!")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
        }
  
          message.guild.members.unban(target)
        const sukces = new Discord.MessageEmbed()
            .setTitle("MOD SYSTEM | Unban")
            .setColor("#2f3136")
            .addField("Moderator", `${message.author}`)
            .addField("Unbanned", `<@${target}>`)
            .addField("Guild", `${message.guild.name}`)
            .setFooter(message.author.tag, message.author.displayAvatarURL())
           target.send({embeds: [sukces]})
            message.reply({embeds: [sukces]})
         
    }
    
    

}