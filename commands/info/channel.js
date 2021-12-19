const Discord = require("discord.js");
const moment = require("moment")
const emotes = require("../../emotes.json")
module.exports = {
    name: "channel",
    aliases : ["kanał", "channelinfo", "kanal"],
    description: 'channel info',
    category: "info",
     usage: "channel (kanał)",
    cooldown: 5,
     guildOnly: true,
    run: async(client, message, args) => {
 
        const hannel = message.mentions.channels.last() || message.guild.channels.cache.get("target") || message.channel;
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
const infoEmbed = new Discord.MessageEmbed()
.setColor("#2f3136")
.setAuthor(`${hannel.name}`)
.addField(`>>> ${emotes.compass}・Name`, `\`\`\`${hannel.name}\`\`\``)
.addField(`>>> ${emotes.plus}・ID`, `\`\`\`${hannel.id}\`\`\``)
.addField(`>>> ${emotes.shop}・Topic`, `\`\`\`${hannel.topic || "None"}\`\`\``)
.addField(`>>> ${emotes.text_channel}・Type`, `\`\`\`${type[hannel.type]}\`\`\``)
.addField(`>>> ${emotes.rocket}・Created`, `\`\`\`${moment(hannel.createdAt).format('LLLL')}\`\`\``)
.setFooter(message.author.tag, message.author.displayAvatarURL())
return message.reply({embeds: [infoEmbed]})
}
}