const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const moment = require("moment");
module.exports.run = async (client, message, oldMessage, newMessage) => {

    const data = await db.fetch(`modlogs_${message.guild.id}`)
    if (!data) return
    const channel = data.id
    if(!channel) { return; }
    if (!message.author || message.author.bot ) {
        return;
    }
    const embeds = new MessageEmbed()
        .setTitle("LOGS | EDIT MESSAGE")
        .addField("Channel", `\`${message.channel}\``)
        .addField('Link', `[click!](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`)
        .addField('New message', `\`${oldMessage || "-"}\``)
        .addField('Old message', `\`${message.content || "-"}\``)
        .addField("Author", `\`${message.author.username} (${message.author.id})\``)
        .addField("ID", `\`${message.id}\``)
        .setColor("#2f3136")
        .setTimestamp()
    client.channels.cache.get(channel).send({embeds: [embeds]})



}
