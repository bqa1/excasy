const osu = require("node-os-utils");
const os = require("os");
const config = require("../../config.js")
const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require("discord.js");
const moment = require("moment")
module.exports = {
    name: "stats",
    aliases : ["botinfo", "s", "b"],
    description: "about bot",
    category: "bot",
    cooldown: 5,
    run: async(client, message, args) => {
      const platforms = {
        win32: "Windows",
        linux: "Linux",
        android: "Android",
        sunos: "Sunos",
        openbsd: "OpenBSD",
        freebsd: "FreBSD",
        aix: "AIX",
        darwin: "Darwin"
    };
     
     
        const eksdi = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .addField("Servers", `\`\`\`${client.guilds.cache.size}\`\`\``, true)
        .addField("Users", `\`\`\`${client.users.cache.size} cache / ${client.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)} all\`\`\``)
        .addField("Channels", `\`\`\`${client.channels.cache.size}\`\`\``)
        .addField('Uptime', `\`\`\`${moment.duration(client.uptime).humanize()}\`\`\``, true)
  
        await message.reply({embeds: [eksdi]});
    

    
     
    
    }
}