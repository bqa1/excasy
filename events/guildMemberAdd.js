const db = require('quick.db')
const { MessageEmbed, Message } = require('discord.js')
const moment = require("moment");

module.exports.run = async (client,  member) => {

    const data = await db.fetch(`welcome_${member.guild.id}`)
    if (!data) return
    const channel = data.id
    if(!channel) { return; }
const welcome = new MessageEmbed()
.setTitle(`${member.user.username} JOINED!`)
.setDescription(`hello <@${member.id}>! thank you for join. now we have ${member.guild.memberCount} members`)
.setColor("GREEN")
.setImage("https://media.discordapp.net/attachments/917145205516427306/921694330081656882/welcomeexcasy.png?width=1193&height=671")

client.channels.cache.get(channel).send({embeds: [welcome]})


  const dmembed = new MessageEmbed()
  .setTitle("Hey!")
  .setDescription(`[Welcome to ${member.guild.name}!](https://excasy.pl/)`)
  .setColor("BLURPLE")
.setFooter("Powered by excasy")
  member.send({embeds: [dmembed]}).catch(() => { 
      return;
  })


    
    
  }