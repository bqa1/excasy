const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const moment = require("moment");

module.exports.run = async (client, oldChannel, newChannel) => {

    const data = await db.fetch(`modlogs_${oldChannel.guild.id}`)
    if (!data) return
    const hannel = data.id
    if(!hannel) { return; }
const nsfw = {
    "true": 'Yes',
    "false": 'No',
}
    const welcome = new MessageEmbed()
    .setTitle("LOGS | Channel update")
    .addField("Name before", `\`${oldChannel.name}\``)
    .addField("Name after", `\`${newChannel.name}\``)
    .addField('Topic before', `\`${oldChannel.topic || "None"}\``)
    .addField('Topic after', `\`${newChannel.topic || "None"}\``)
    .addField('NSFW before', `\`${nsfw[oldChannel.nsfw]}\``)
    .addField('NSFW after', `\`${nsfw[newChannel.nsfw]}\``)
     .setColor("#2f3136")
    .setTimestamp()
    
    client.channels.cache.get(hannel).send({embeds: [welcome]})

}