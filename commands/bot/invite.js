const Discord = require("discord.js");
const emotes = require("../../emotes.json")
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
name: "invite",
aliases : ["zapros", "zaproś", "linki"],
description: "invite excasy!",
category: "bot",
usage: "brak",
    cooldown: 5,
run: async(client, message, args) => {

    const row = new MessageActionRow()
    .addComponents(
new MessageButton()
.setURL("https://excasy.pl/invite")
.setLabel(' | Invite bot')
.setStyle('LINK')
.setEmoji(`${emotes.bot}`),
        new MessageButton()
            .setURL("https://excasy.pl/")
            .setLabel(' | Website')
            .setStyle('LINK')
            .setEmoji(`${emotes.website}`),
            new MessageButton()
            .setURL("https://excasy.pl/support")
            .setLabel(' | Support server')
            .setStyle('LINK')
            .setEmoji(`${emotes.server}`),
    );


const inv = new Discord.MessageEmbed()
.setDescription("Click the button below to invite excasy")
.setColor("#2f3136")
return message.reply({embeds: [inv], components: [row]})

}
}