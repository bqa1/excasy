const Discord = require("discord.js");
const moment = require("moment")
const emotes = require("../../emotes.json")
module.exports = {
    name: "server",
    aliases : ["serverinfo", "serwer", "server", "serwerinfo"],
    description: "show serwer info",
    category: "info",
    cooldown: 5,
     guildOnly: true,
    run: async(client, message, args) => {


   const serwer =  client.guilds.cache.get(args[0]) || client.guilds.cache.get("target") || message.guild; 
        const owner = await serwer.fetchOwner().catch(() => "Not found");
const textchannels = serwer.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size;
const voicechannels = serwer.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size;
const tier = serwer.premiumTier
.replace('NONE', 'Level 0')
.replace('TIER_1', 'Level 1')
.replace('TIER_2', 'Level 2')
.replace('TIER_3', 'Level 3')
const infoEmbed = new Discord.MessageEmbed()
.setColor("#2f3136")
.setThumbnail(serwer.iconURL())
.setAuthor(`${serwer.name}`)
.addField(`>>> ${emotes.like}・Owner:`, `\`\`\`${owner.user.username}#${owner.user.discriminator}\`\`\``)
.addField(`>>> ${emotes.guide}・ID:`, `\`\`\`ini\n ${serwer.id} \`\`\``)
.addField(`>>> ${emotes.members}・Mmbercount:`, `\`\`\`ini\n ${serwer.memberCount} \`\`\``)
.addField(`>>> ${emotes.bell}・Name`, `\`\`\`ini\n ${serwer.name} \`\`\``)
.addField(`>>> ${emotes.camera}・Roles`, `\`\`\`ini\n ${serwer.roles.cache.size} \`\`\``)
.addField(`>>> ${emotes.chat}・Channels`, `\`\`\`ini\n ${serwer.channels.cache.size} all \n→ ${textchannels} text [cache] \n→ ${voicechannels} voice [cache]\`\`\``)
.addField(`>>> ${emotes.rocket}・Emojis:`, `\`\`\`ini\n ${serwer.emojis.cache.size} \`\`\``)
.addField(`>>> ${emotes.boost}・Boosts`, `\`\`\`ini\n ${serwer.premiumSubscriptionCount} | ${tier} \`\`\``)
.addField(`>>> ${emotes.rocket}・Created`, `\`\`\`${moment(serwer.createdAt).format('LLLL')}\`\`\``)
.setFooter(message.author.tag, message.author.displayAvatarURL())
return message.reply({embeds: [infoEmbed]})
    }
}