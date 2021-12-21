const Discord = require("discord.js");   
  

const { MessageEmbed } = module.require("discord.js");
const ms = require("ms");
const db = require("quick.db")
module.exports = {
  name: "mute",
  aliases : ["supermute"],
  category: "info",
  description: "Returns latency and API ping",
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
       .setDescription("Mention someone!\nValid usage: \`[p]mute @someone read rules\`")
       .setFooter(message.author.tag, message.author.displayAvatarURL())
       return message.reply({embeds: [perm] });
    }
    if (user.id === message.author.id) {
       const perm = new Discord.MessageEmbed()
       .setTitle("Something went wrong")
       .setColor("#2f3136")
       .setDescription("Yoy cannot mute yourself")
       .setFooter(message.author.tag, message.author.displayAvatarURL())
       return message.reply({embeds: [perm] });
    }
    
   if(!user.bannable) {
     
       const perm = new Discord.MessageEmbed()
       .setTitle("Something went wrong")
       .setColor("#2f3136")
       .setDescription(`I cant mute ${user}`)
       .setFooter(message.author.tag, message.author.displayAvatarURL())
       return message.reply({embeds: [perm] });
   } 

   if(user.roles.cache.has(channel)) {
       const perm = new Discord.MessageEmbed()
       .setTitle("Something went wrong")
       .setColor("#2f3136")
       .setDescription(`${user} is already muted`)
       return message.reply({embeds: [perm] });
   }

   
    const reason = args.slice(1).join(" ");
    if (!reason) {
        const perm = new Discord.MessageEmbed()
        .setTitle("Something went wrong")
        .setColor("#2f3136")
            .setDescription("Provide an reason")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.reply({embeds: [perm]});
       
    }
    const mtembde = new MessageEmbed()
      .setColor("#2f3136")
      .setTitle("MOD SYSTEM | Mute")
      .addField("Member:", `${user}`)
      .addField("Reason", `\`${args.slice(1).join(" ")}\``)
      .addField("Moderator:", `${message.author}`)
      .addField("Guild", `${message.guild.name}`)
    user.send({ embeds: [mtembde] }).catch(() => { "cannot send message to this user"})
    message.channel.send({ embeds: [mtembde] });
    user.roles.add(role);

  },
};