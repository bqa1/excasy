const Discord = require("discord.js");   
  

const { MessageEmbed } = module.require("discord.js");
const ms = require("ms");
const db = require("quick.db")
module.exports = {
  name: "unmute",
  aliases : [],
  category: "info",
  description: "unmute someone",
  run: async (client, message, args) => {

   if (!message.member.permissions.has(Discord.Permissions.MANAGE_MESSAGES))  {
       const perm = new Discord.MessageEmbed()
       .setTitle("Something went wrong")
       .setColor("#2f3136")
       .setDescription("You dont have /`MANAGE_MESSAGES/`permissions")
       .setFooter(message.author.tag, message.author.displayAvatarURL())
       return message.reply({embeds: [perm] });
     
   }


    const user = message.mentions.members.first();

    const data = await db.fetch(`muterole_${message.guild.id}`)
    if (!data) return
    const channel = data.id
    if(!channel) { return; }

    const role = channel
    if (!role) {
       const perm = new Discord.MessageEmbed()
       .setTitle("Something went wrong")
       .setColor("#2f3136")
       .setDescription("Please set a muterole using \`[p]Muterole set @role\`")
       .setFooter(message.author.tag, message.author.displayAvatarURL())
       return message.reply({embeds: [perm] });
    }
    if (!user) {
       const perm = new Discord.MessageEmbed()
       .setTitle("Something went wrong")
       .setColor("#2f3136")
       .setDescription("Mention someone!\nValid usage: \`[p]unmute @someone\`")
       .setFooter(message.author.tag, message.author.displayAvatarURL())
       return message.reply({embeds: [perm] });
    }
    if (user.id === message.author.id) {
       const perm = new Discord.MessageEmbed()
       .setTitle("Something went wrong")
       .setColor("#2f3136")
       .setDescription("You cannot unmute yourself")
       .setFooter(message.author.tag, message.author.displayAvatarURL())
       return message.reply({embeds: [perm] });
    }
    
   if(!user.bannable) {
     
       const perm = new Discord.MessageEmbed()
       .setTitle("Something went wrong")
       .setColor("#2f3136")
       .setDescription(`I cant unmute ${user}`)
       .setFooter(message.author.tag, message.author.displayAvatarURL())
       return message.reply({embeds: [perm] });
   } 

   if(!user.roles.cache.has(channel)) {
       const perm = new Discord.MessageEmbed()
       .setTitle("Something went wrong")
       .setColor("#2f3136")
       .setDescription(`${user} is already unmuted`)
       return message.reply({embeds: [perm] });
   }

   
  
    const mtembde = new MessageEmbed()
      .setColor("#2f3136")
      .setTitle("MOD SYSTEM | Unmute")
      .addField("Member:", `${user}`)
      .addField("Moderator:", `${message.author}`)
      .addField("Guild:", `\`${message.guild}\``)

    user.send({ embeds: [mtembde] }).catch(() => { "cannot send message to this user"})
    message.channel.send({ embeds: [mtembde] });
    user.roles.remove(role);

  },
};