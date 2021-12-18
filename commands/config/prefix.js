
const db = require("quick.db")
const Discord = require("discord.js");
module.exports = {
    name: "prefix",
    aliases : ["prefix", 'setprefix'],
    description: "Set custom prefix",
    category: "mod",
    cooldown: 5,
    usage: "prefix (remove) <prefix>",
    run: async(client, message, args) => {
  
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR))  {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("You dont have permissions")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
          
        }
        const prefiks = args[0]
    if (!prefiks){
        const perm = new Discord.MessageEmbed()
        .setTitle("Something went wrong")
        .setColor("#2f3136")
        .setDescription("Give new prefix")
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.reply({embeds: [perm] });

    }
      if(prefiks === "remove") {
          db.delete(`prefix_${message.guild.id}`)
          const sukcess = new Discord.MessageEmbed()
          .setTitle("Succes!")
          .setColor("#2f3136")
          .setDescription(`Rmoved custom prefix`)
          .setFooter(message.author.tag, message.author.displayAvatarURL())
          return message.reply({embeds: [sukcess] });
      }
    db.set(`prefix_${message.guild.id}`, prefiks)
      const sukcess = new Discord.MessageEmbed()
      .setTitle("Succes!")
      .setColor("#2f3136")
      .setDescription(`Now prefix is ${prefiks}`)
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      return message.reply({embeds: [sukcess] });
 

    
  },
};