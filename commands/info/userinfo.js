const Discord = require("discord.js");
const moment = require("moment");
const emoji = require("../../emotes.json")

module.exports = {
name: "user",
aliases : ["ui", "whois", "ktotokurwa", "userinfo"],
description: "user info",
category: "info",
    cooldown: 5,
usage: "userinfo (użytkownik)",
run: async(client, message) => {


    const member = message.mentions.members.first() || client.users.cache.get(g => g.id.toLowerCase() === args[0]) || client.users.cache.get(g => g.username.toLowerCase() === args[0])|| message.member 
    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.user.username}`)
    .setColor("#2f3136")
    .addField(`>>> ${emoji.rocket}・Name:`, `\`\`\`ini\n ${member.user.username}#${member.user.discriminator} \`\`\``)
    .addField(`>>> ${emoji.sticker}・ID:`, `\`\`\`ini\n ${member.id} \`\`\``)
    .addField(`>>> ${emoji.image}・Avatar:`, `[Click!](${member.user.displayAvatarURL({ dynamic: true })})`,)
    .addField(`>>> ${emoji.certified_moderator}・Bot:`, `\`\`\`ini\n ${member.user.bot ? "Yes" : "No"} \`\`\``)
    .addField(`>>> ${emoji.star}・Highest role:`, ` ${member.roles.highest ? `<@&${member.roles.highest.id}>` : "None"} `)
    .addField(`>>> ${emoji.invite}・Joined:`, `\`\`\`ini\n ${moment(member.joinedAt).format('LLLL')} \`\`\``)
    .addField(`>>> ${emoji.lock}・Created:`, `\`\`\`ini\n ${moment(member.user.createdAt).format('LLLL')}\`\`\``)
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    message.reply({embeds: [embed]})
}}