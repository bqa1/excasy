const Discord = require("discord.js");
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
.setURL("https://discord.com/api/oauth2/authorize?client_id=757308157855793232&permissions=8&redirect_uri=https%3A%2F%2Fexcasy.pl%2F&response_type=code&scope=identify%20bot")
.setLabel('Invite bot')
.setStyle('LINK'),
        new MessageButton()
            .setURL("https://excasy.pl/")
            .setLabel('Site')
            .setStyle('LINK'),
            new MessageButton()
            .setURL("https://excasy.pl/support")
            .setLabel('Support server')
            .setStyle('LINK'),
    );


const inv = new Discord.MessageEmbed()
.setDescription("Click the button below to invite excasy")
.setColor("#2f3136")
return message.reply({embeds: [inv], components: [row]})

}
}