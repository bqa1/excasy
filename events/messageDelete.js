const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const moment = require("moment");

module.exports.run = async (client, message) => {

    if (message?.partial) await message.fetch().catch(() => null);

    const data = await db.fetch(`modlogs_${message.guild.id}`)
    if (!data) return
    const channel = data.id
    if(!channel) { return; }
    if (!message.author || message.author.bot) {
        return;
    }
    const embeds = new MessageEmbed()
        .setTitle("LOGS | Deleted message")
        .addField("Channel", `\`#${message.channel.name}\``)
        .addField('Message', `\`${message.content || "-"}\``)
        .addField("Author", `\`${message.author.username} (${message.author.id})\``)
        .addField("ID", `\`${message.id}\``)
        .setColor("#2f3136")
        .setTimestamp()
    client.channels.cache.get(channel).send({embeds: [embeds]})


;

}



