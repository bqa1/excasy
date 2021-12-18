const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const moment = require("moment");

module.exports.run = async (client,  member) => {

    const dat = await db.fetch(`modlogs_${member.guild.id}`)
    if (!dat) return
    const cannel = dat.id
    if(!cannel) { return; }
  
    const newuser = new MessageEmbed()
    .setColor("#2f3136")
    .setTitle("LOGS | Member remove")
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
.setTitle(`${member.user.username} LEFT`)
.setDescription(`${member.user} (${member.id}) leave server ;c. Now we have ${member.guild.memberCount} members`)
.setColor("RED")
.setImage("https://media.discordapp.net/attachments/917145205516427306/921694329788063764/goodbye.png?width=1193&height=671")
client.channels.cache.get(channel).send({embeds: [welcome]})
}