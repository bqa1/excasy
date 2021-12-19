const db = require('quick.db')
const { MessageEmbed, Message } = require('discord.js')
const moment = require("moment");
const fetch = require("node-fetch")
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
  
    const url = fetch(`https://api.popcat.xyz/welcomecard?background=https://cdn.discordapp.com/attachments/850808002545319957/859359637106065408/bg.png&text1=${member.user.username}&text2=Welcome+To+${member.guild.name}&text3=Now+we+have=${member.guild.memberCount}+members9&avatar=${member.user.displayAvatarURL({dynamic: true})}`)
    const data = await db.fetch(`welcome_${member.guild.id}`)
    if (!data) return
    const channel = data.id
    if(!channel) { return; }
const welcome = new MessageEmbed()
.setTitle(`${member.user.username} JOINED!`)
.setDescription(`hello <@${member.id}>! thank you for join. now we have ${member.guild.memberCount} members`)
.setColor("GREEN")
.setImage(url)
.setImage("https://images-ext-2.discordapp.net/external/fzbsEGLJJ6vHVItKHHNagvEd1RGXXS9QKZdjv_9Ihqc/%3Fwidth%3D1193%26height%3D671/https/media.discordapp.net/attachments/917145205516427306/921694330081656882/welcomeexcasy.png")
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