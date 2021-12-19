const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, channel) => {

    const data = await db.fetch(`modlogs_${channel.guild.id}`)
    if (!data) return
    const hannel = data.id
    if(!hannel) { return; }
    let type = {
        GUILD_TEXT: "Text",
        GUILD_VOICE: "Voice",
        GUILD_CATEGORY: "Category",
        GUILD_NEWS: "Announcements",
        GUILD_STORE: "Shop",
        GUILD_NEWS_THREAD: "News thread",
        GUILD_PUBLIC_THREAD: "Public thread",
        GUILD_PRIVATE_THREAD: "Private thread",
        GUILD_STAGE_VOICE: "Events"
    };
const welcome = new MessageEmbed()
.setTitle("LOGs | channel created")
.addField("Name", `\`${channel.name}\``)
.addField('ID', `\`${channel.id}\``)
.addField("Type", `\`${type[channel.type]}\``)
.setColor("#2f3136")
.setTimestamp()

client.channels.cache.get(hannel).send({embeds: [welcome]})
}