const db = require('quick.db')
const { MessageEmbed, Message } = require('discord.js')
const moment = require("moment");

module.exports.run = async (client,  member) => {

    const dat = await db.fetch(`modlogs_${member.guild.id}`)
    if (!dat) return
    const cannel = dat.id
    if(!cannel) { return; }
    

    const newuser = new MessageEmbed()
    .setColor("#2f3136")
    .setTitle("LOGS | Member add")
    .addField("Nametag", `\`${member.user.username}#${member.user.discriminator}\``)
    .addField("ID", `\`${member.id}\``)
    .addField("Created" , `\`${moment(member.user.createdAt).format('LLLL')}\``)
    .addField("Bot", `\`${member.user.bot ? "Yes" : "No"}\``)
  
    client.channels.cache.get(cannel).send({embeds: [newuser]})
  

    const data = await db.fetch(`welcome_${member.guild.id}`)
    if (!data) return
    const channel = data.id
    if(!channel) { return; }
const welcome = new MessageEmbed()
.setTitle(` ${member.user.username} joined the server!`)
.setColor(`#2f3136`)
.setImage('https://cdn.discordapp.com/attachments/917145205516427306/921694330081656882/welcomeexcasy.png')
.setDescription(`Welcome to **${member.guild.name}**
> you are our **${member.guild.memberCount} member.**`)
.setFooter(
    member.displayName,
    member.user.displayAvatarURL({ dynamic: true })
)
.setTimestamp()
client.channels.cache.get(channel).send({embeds: [welcome] })


  const dmembed = new MessageEmbed()
  .setTitle("Hey!")
  .setDescription(`[Welcome to ${member.guild.name}!](https://excasy.pl/)`)
  .setColor("BLURPLE")
.setFooter("Powered by excasy")
  member.send({embeds: [dmembed]}).catch(() => { 
      return;

 
})


  }


    
  