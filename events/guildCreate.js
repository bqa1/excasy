const Discord = require("discord.js");

module.exports.run = async (client, guild) => {


    const owner = await guild.fetchOwner().catch(() => "Not found");

    const newguild = new Discord.MessageEmbed()
 .setTitle("NEW GUILD!")
 .setThumbnail(guild.iconURL())
.setColor("#2f3136")
.addField("Name", `${guild.name}`)
.addField("ID", `${guild.id}`)
.addField("owner", `${owner}`)
.addField("Membercount", `${guild.memberCount}`)

client.channels.cache.get("921805910375030794").send({embeds: [newguild]})




}