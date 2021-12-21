const fetch = require("node-fetch")
const Discord = require("discord.js")
const { MessageAttachment } = require('discord.js');
module.exports = {
    name: "zalgo",
    aliases : [],
    description: "make zalgo text",
    category: "4fun",
    cooldown: 5,
    usage: "zalgo <text>",
    run: async(client, message, args) => {
  const text = args.join(" ")
  if(!text) {
    const perm = new Discord.MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
        .setDescription("Provide an text")
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    return message.reply({embeds: [perm] });
  }
        const res = await fetch(`https://api.leoapi.xyz/text/zalgo?text=${text}`).then(res => res.json())
        const dc = new Discord.MessageEmbed()
        .setTitle("Zalgo text!")
        .setDescription(`\`\`\`${res.zalgo}\`\`\``)
        .setColor("#2f3136")
        message.reply({embeds: [dc]})
    }
}