const Discord = require("discord.js");
const moment = require("moment");
const emoji = require("../../emotes.json")
const axios = require("axios")
const { token } = require("../../config.js")
moment.locale("EN");
module.exports = {
name: "user",
aliases : ["ui", "whois", "ktotokurwa", "userinfo"],
description: "user info",
category: "info",
    cooldown: 5,
usage: "userinfo (użytkownik)",
run: async(client, message) => {
    const permissions = {
        "ini": "None",
       "ADMINISTRATOR": "Administrator",
        "MANAGE_GUILD": "Manage Server",
        "MANAGE_ROLES": "Manage Roles",
        "MANAGE_CHANNELS": "Manage Channels",
        "KICK_MEMBERS": "Kick Members",
        "BAN_MEMBERS": "Ban Members",
        "MANAGE_NICKNAMES": "Manage Nicknames",
        "MANAGE_EMOJIS": "Manage Emojis",
        "MANAGE_WEBHOOKS": "Manage Webhooks",
        "MANAGE_MESSAGES": "Manage Messages",
        "MENTION_EVERYONE": "Mention Everyone"
    }

 


    let member = message.mentions.members.last() || message.member;
 
     
    if(!member) {

     try {

      member = await message.guild.members.fetch(args[0])

    } catch {

member = message.member;

    }
       
       

      }





    const mentionPermissions = member.permissions.toArray() === null ? "None" : member.permissions.toArray();
    const finalPermissions = [];
    for (const permission in permissions) {
        if (mentionPermissions.includes(permission)) finalPermissions.push(`${permissions[permission]}`);
        else;
    }
    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.user.username}`)
    .setColor("#2f3136")
    .addField(`>>> ${emoji.rocket}・Name:`, `\`\`\`ini\n ${member.user.username}#${member.user.discriminator} \`\`\``)
    .addField(`>>> ${emoji.sticker}・ID:`, `\`\`\`ini\n ${member.id} \`\`\``)
    .addField(`>>> ${emoji.image}・Avatar:`, `[png](${member.user.displayAvatarURL({format: 'png'})}) | [webp](${member.user.displayAvatarURL({dynamic: true})}) | [jpg](${member.user.displayAvatarURL({format: 'jpg'})})`)
    .addField(`>>> ${emoji.certified_moderator}・Bot:`, `\`\`\`ini\n ${member.user.bot ? "Yes" : "No"} \`\`\``)
    .addField(`>>> ${emoji.star}・Highest role:`, ` ${member.roles.highest ? `<@&${member.roles.highest.id}>` : "None"} `)
    .addField(`>>> ${emoji.search}・Perms`, `\`\`\`ini\n ${finalPermissions.join('\n') || "None"} \`\`\``)
    .addField(`>>> ${emoji.invite}・Joined:`, `\`\`\`ini\n ${moment(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')} \`\`\``)
    .addField(`>>> ${emoji.lock}・Created:`, `\`\`\`ini\n ${moment(member.user.createdAt).format('MMMM Do YYYY, h:mm:ss a')} \`\`\``)
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    message.reply({embeds: [embed]})
    
    axios.get(`https://discord.com/api/users/${member.id}`, {
        headers: {
          Authorization: `Bot ${token}`
        },
      })
      .then((res) => {
        const { banner, accent_color } = res.data;
  
          const extension = banner.startWith("a_" || ".gif" || ".png") 
          const url = `https://cdn.discordapp.com/banners/${member.id}/${banner}${extension}?size=2048`;
  
     
    if(banner) {
        embed.setImage(url)
    }
})
}}