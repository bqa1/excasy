const fetch = require("node-fetch")
const Discord = require("discord.js")
const { MessageAttachment } = require('discord.js');
module.exports = {
    name: "emojify",
    aliases : ["emoji"],
    description: "send message using emoji",
    category: "4fun",
    cooldown: 5,
    usage: "emojify <text>",
    run: async(client, message, args) => {
  const text = args.join(" ")
  if(!text) {
    const perm = new Discord.MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
        .setDescription("Provide an text")
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    return message.reply({embeds: [perm] });
  }  const res = await fetch(`https://api.leoapi.xyz/text/emojify?text=${text}`).then(res => res.json())
        message.reply(res.emojified).catch(() => {
            message.reply("Something went wrong")
        })
    }
}