const Discord = require("discord.js");

module.exports = {
name: "ping",
aliases : ["pong"],
description: "check bot ping",
category: "bot",
    cooldown: 5,
usage: "brak",

run: async(client, message, args) => {
let ping2 = client.ws.ping;
let pog = new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setTitle("PONG!")
        .setDescription(`\nBOT: \`${ping2}ms\``)
        .setTimestamp()
message.reply({ embeds: [pog]})
}}