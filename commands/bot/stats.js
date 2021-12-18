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
      const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
        .setCustomId('stats')
        .setLabel('Stats')
        .setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('wer')
					.setLabel('version')
					.setStyle('PRIMARY'),
			);
      const xd = new Discord.MessageEmbed()
      .setTitle("select menu")
      .setColor("#2f3136")
      .setDescription("Press buttons below")

    message.reply({embeds: [xd], components: [row]})

    const filter = i =>  i.user.id === message.author.id
    const collector = message.channel.createMessageComponentCollector({ filter, time: 1500000 });

    collector.on('collect', async i => {
      if (i.customId === 'wer') {
        const eksdi = new Discord.MessageEmbed()
        .addField("library:", "\`\`\`Discord.js\`\`\`")
        .addField("library version", `\`\`\`${Discord.version}\`\`\``)
        .addField("Nodejs version", `\`\`\`${process.version}\`\`\``)
        .setColor("#2f3136")
        await i.update({embeds: [eksdi], components: [row]});
      }
      if (i.customId === 'stats') {
     
        const eksdi = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .addField("Servers", `\`\`\`${client.guilds.cache.size}\`\`\``, true)
        .addField("Users", `\`\`\`${client.users.cache.size} cache / ${client.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)} all\`\`\``)
        .addField("Channels", `\`\`\`${client.channels.cache.size}\`\`\``)
        .addField('Uptime', `\`\`\`${moment.duration(client.uptime).humanize()}\`\`\``, true)
  
        await i.update({embeds: [eksdi], components: [row]});
      }
      
    });

    
     
    
    }
}