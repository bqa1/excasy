const Discord = require("discord.js");
const db = require("quick.db")
const config = require("../../config.js")
const emotes = require("../../emotes.json")
const readdirSync = require("fs")
const Command = require('../../structures/embeds');
const { MessageActionRow, MessageButton, MessageSelectMenu} = require('discord.js');
const { prefix: dPrefix } = require("../../config.js");

module.exports = {
    name: 'help',
    aliases: ['commands', `menu`],
    description: 'Show all commands',
    premium: true,
    cooldown: 2,
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
            .addField(`>>> ${emotes.certified_moderator}・Name`, `\`\`\`${Command.name}\`\`\``)
            .addField(`>>> ${emotes.rules}・alliases`, `\`\`\`${Command.aliases ? Command.aliases.join(", ") : "None"}\`\`\``)
            .addField(`>>> ${emotes.integration}・Desc`, `\`\`\`${Command.description || "None"}\`\`\``)
            .addField(`>>> ${emotes.compass}・Category`, `\`\`\`${Command.category|| "-"}\`\`\``)
        return message.reply({embeds: [embed]})
    } 
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = dPrefix;
        const helpemb = new Discord.MessageEmbed()
       .setColor("#2f3136")
        .setDescription(`[My prefix is ${prefix}](https://excasy.pl/)`)
        .addField(`>>> ${emotes.certified_moderator}・Mod`, "\n\`\`\` clear, clearm, ban, reset, tempmute, mute, unmute, unban, addrole, delrole, lock, unlock, backup \`\`\`")
       .addField(`>>> ${emotes.settings}・Conifg`, "\n\`\`\` prefix, antyinvite, antylink, modlog, welcome, ticket \`\`\`")
    .addField(`>>> ${emotes.like}・4fun`, "\n\`\`\` id, emojify, animesearch, reverse, iq, invert, sus, zalgo, meme, 8ball, discrim, fristmessage\`\`\`")
      .addField(`>>> ${emotes.sticker}・Bot`, "\n\`\`\` stats, help, invite, ping, shard \`\`\`")
       .addField(`>>> ${emotes.rules}・Info`, "\n\`\`\` server, user, channel, role \`\`\`")
       .addField(`>>> ${emotes.join}・Music`,`\n\`\`\` play, skip, volume, pause, loop \`\`\``)
        .setFooter(`Type ${prefix}help on nsfw channel, for nsfw commands`)
      if(message.channel.nsfw) {
           helpemb.addField(`>>> ${emotes.compass}・Nsfw`, "\`\`\` anal, ass, gif, pussy, hentai, boobs, solo, gonewild\ `\`\`")
         helpemb.setFooter(` `)
      }

       message.reply({embeds: [helpemb], components: [row]})


    }
}