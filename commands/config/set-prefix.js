const emotes = require('../../emotes.json')
const db = require("quick.db")
const Discord = require("discord.js");
module.exports = {
    name: "set-prefix",
    description: "ustaw prefix",
    category: "config",
    run: async(client, message, args) => {
        if (!message.member.permissions.has("ADMINISTRATOR"))  {
            const embed3 = new MessageEmbed()
            .setTitle(`${emotes.checkno}・__Wystąpił Błąd!__`)
            .setColor('#c9001b')
            .setDescription('Nie posiadasz permisji!')
            .addField('**Potrzebne Permisje:**', '> `ADMINISTRATOR`')
            .setFooter(`${message.author.tag}`, 
            message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            return message.reply({embeds: [embed3]})
        }
        const prefiks = args[0]
    if (!prefiks){
        const perm = new Discord.MessageEmbed()
        .setTitle(`${emotes.checkno}・__Wystąpił Błąd!__`)
        .setColor('#c9001b')
        .setDescription('Podaj nowy prefix!')
            .setFooter(`${message.author.tag}`, 
            message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        return message.reply({embeds: [perm] });

    }
      if(prefiks === "remove") {
          db.delete(`prefix_${message.guild.id}`)
          const sukcess = new Discord.MessageEmbed()
          .setColor('#2f3136')
          .setTitle(`${emotes.checkyes}・__Sukces!__`)
          .setDescription(`Usunięto niestandardowy prefix!`)
          .setFooter(`${message.author.tag}`, 
          message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          return message.reply({embeds: [sukcess] });
      }
    db.set(`prefix_${message.guild.id}`, prefiks)
      const sukcess = new Discord.MessageEmbed()
      .setColor('#2f3136')
      .setTitle(`${emotes.checkyes}・__Sukces!__`)
      .setDescription(`Ustawiono prefix na: **${prefiks}**`)
      .setFooter(`${message.author.tag}`, 
      message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      return message.reply({embeds: [sukcess] });
  },
};