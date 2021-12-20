 const Discord = require("discord.js");   
  

 const { MessageEmbed } = module.require("discord.js");
 const ms = require("ms");
 const db = require("quick.db")
 module.exports = {
   name: "tempmute",
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
        .setDescription("Mention someone!\nValid usage: \`[p]tempmute @someone 10m read rules\`")
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.reply({embeds: [perm] });
     }
     if (user.id === message.author.id) {
        const perm = new Discord.MessageEmbed()
        .setTitle("Something went wrong")
        .setColor("#2f3136")
        .setDescription("You cannot mute yourself")
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

     const time = args[1];
     if (!time) {
        const perm = new Discord.MessageEmbed()
        .setTitle("Something went wrong")
        .setColor("#2f3136")
        .setDescription("Provide an time (minutes np 10)")
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.reply({embeds: [perm] });
     }
     if (Number.isNaN(+time)) {
        const perm = new Discord.MessageEmbed()
        .setTitle("Something went wrong")
        .setColor("#2f3136")
            .setDescription("Invaild time")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.reply({embeds: [perm] });
        } 
     const reason = args.slice(2).join(" ");
     if (!reason) {
        if (!reason) {
            reason = `Not provied- ${message.author.username}#${message.author.discriminator}`;
        } else {
            reason = `${reason} - ${message.author.username}#${message.author.discriminator}`
        }
     }
     const mtembde = new MessageEmbed()
       .setColor("#2f3136")
       .setTitle("MOD SYSTEM | Tempmute")
       .addField("Member:", `${user}`)
       .addField("Reason", `\`${reason}\``)
       .addField("Moderator:", `${message.author}`)
       .addField("Time:", `\`${time} minutes\`` );
     user.send({ embeds: [mtembde] }).catch(() => { "cannot send message to this user"})
     message.channel.send({ embeds: [mtembde] });
     user.roles.add(role);
     setTimeout(function () {
    
    const mtembdex = new MessageEmbed()
      .setColor("#2f3136")
      .setTitle("MOD SYSTEM | Unmute")
      .addField("Member:", `${user}`)
      .addField("Reason", `\`Automatic unmute\``)
      .addField("Moderator:", `MOD SYSTEM`)

       user.roles.remove(role);
       user.send({embeds: [mtembdex]}).catch(() => { return;})
     }, ms(`${time}m`));
   },
 };