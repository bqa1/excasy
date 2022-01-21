const Discord = require("discord.js");

module.exports.run = async (client, guild) => {



    const newguild = new Discord.MessageEmbed()
 .setTitle("DELETED GUILD!")
 .setThumbnail(guild.iconURL())
.setColor("#2f3136")
.addField("Name", `${guild.name}`)
.addField("ID", `${guild.id}`)
.addField("Membercount", `${guild.memberCount}`)

client.channels.cache.get("933427664386158604").send({embeds: [newguild]})


}