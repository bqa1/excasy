const Discord = require("discord.js");
const db = require("quick.db")
const config = require("../../config.js")
const emotes = require("../../emotes.json")
const { MessageActionRow, MessageButton, MessageSelectMenu} = require('discord.js');
const { prefix: dPrefix } = require("../../config.js");
module.exports = {
name: "help",
    cooldown: 5,
aliases : ["pomoc", "h", "p"],
description: "show all commands",
category: "bot",
usage: "help (komenda)",
run: async(client, message, args) => {

    const fs = require('fs')
 const fun = fs.readdirSync(`./commands/4fun`)
 const bot = fs.readdirSync(`./commands/bot`).filter(file => file.endsWith(".js"));
 const config = fs.readdirSync(`./commands/config`).filter(file => file.endsWith(".js"));
 const info = fs.readdirSync(`./commands/info`).filter(file => file.endsWith(".js"));
 const mod  = fs.readdirSync(`./commands/mods`).filter(file => file.endsWith(".js"));


    if (args[0]) {
        const Command = client.commands.get(args[0]) || client.commands.find(x => x.aliases && x.aliases.includes(args[0]));


        if (!Command) {
            const dajcmd = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setDescription("Command not found")
                .setColor("#2f3136")
            message.reply({embeds: [dajcmd]})
        }
        const embed = new Discord.MessageEmbed()
            .setColor("#2f3136")
            .addField("Name", `\`${Command.name}\``)
            .addField("alliases", `\`${Command.aliases ? Command.aliases.join(", ") : "Brak"}\``)
            .addField("Desc", `\`${Command.description}\``)
            .addField("Category", `\`${Command.category}\``)
        return message.reply({embeds: [embed]})
    } else {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = dPrefix;
        const helpemb = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setDescription(`[My prefix is ${prefix}](https://excasy.pl/commands)`)
        .addField(`>>> ${emotes.certified_moderator}・Mod`, "\n\`\`\` clear, clearm, reset \`\`\`")
        .addField(`>>> ${emotes.settings}・Conifg`, "\n\`\`\` prefix, antyinvite, antylink, modlog, welcome \`\`\`")
        .addField(`>>> ${emotes.like}・4fun`, "\n\`\`\` id, emojify \`\`\`")
        .addField(`>>> ${emotes.sticker}・Bot`, "\n\`\`\` stats, help, invite, ping \`\`\`")
        .addField(`>>> ${emotes.rules}・Info`, "\n\`\`\` serwer, user, channel, role \`\`\`")

        .setFooter(`Type ${prefix}help on nsfw channel, for nsfw commands`)
        if(message.channel.nsfw) {
            helpemb.addField(`>>> ${emotes.compass}・Nsfw`, "\`\`\`anal, ass, gif, pussy, hentai, boobs, solo, gonewild\`\`\`")
            helpemb.setFooter(` `)
        }

        message.reply({embeds: [helpemb]})


    }
}}