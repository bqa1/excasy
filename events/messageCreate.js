
const Discord = require("discord.js")
const fetch = require("node-fetch")
const db = require("quick.db")
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { Collection } = require("discord.js");
const moment = require('moment');
const Timeout = new Discord.Collection();
const confik = {
    owners: ["700231994444873748"]
}
const emotes = require("../emotes.json")
const { prefix: dPrefix } = require("../config");
const config = require("../config.js")
module.exports.run = async (client, message) => {
    global.modlogs = db.fetch(`modlogs_${message.guild.id}`)
    if (message.author.bot) return;
 
  const Mention = new RegExp(`^<@!?${client.user.id}>( |)$`, "g");

  let cprefix = db.get(`prefix_${message.guild.id}`)
  if(cprefix === null) cprefix = dPrefix;
  const mentionRegexPrefix = RegExp(`^<@!?${client.user.id}>`);
  const Prefix = message.content.match(mentionRegexPrefix) ? message.content.match(mentionRegexPrefix)[0] : cprefix

  const ping = new MessageEmbed()
  .setColor(`#2f3136`)
  .setAuthor('Ktoś mnie oznaczył?', `${message.author.displayAvatarURL({dynamic: true})}`)

  .addField(`${emotes.check}・Może troszkę o mnie?`, `
  > Jestem nowy, wielofunkcyjnym botem, który
  > posiada **${client.commands.size}** zaawansowanych komend!`)

  .addField(`${emotes.support}・Informacje:`,`
  > Mój prefix na tym serwerze: **${cprefix}**
  > Mój globalny prefix: **.**`)

  .addField(`${emotes.info}・Statystyki:`, `
  > Jestem na **${client.guilds.cache.size}** serwerach, na których jest łącznie **${client.users.cache.size} użytkowników!**
  `)

  .setTimestamp()
  .setFooter(
      message.member.displayName,
      message.author.displayAvatarURL({ dynamic: true })
  )

    if (message.content.match(Mention)) return message.reply({embeds: [ping]})


  
  if (!message.content.startsWith(Prefix)) return;
  if (!message.member)
    message.member = await message.guild.members.fetch(message);
    const args = message.content
    .slice(Prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  global.kommand = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (!command) {
const cmd = new Discord.MessageEmbed()
.setTitle(`${emotes.checkno}・__Wystąpił Błąd!__`)
.setColor('#c9001b')
.setDescription('Nie znaleziono komendy!')
.setFooter(`${message.author.tag}`, 
message.author.displayAvatarURL({ dynamic: true }))
.setTimestamp()
    return message.reply({ embeds: [cmd] });
  }
      if (command.ownerOnly) {
      if (!confik.owners.includes(message.author.id)) {
        return message.channel.send(`Wystąpił Błąd!`)
      }
    }

      try {
          if (command) command.run(client, message, args)
      }  catch (err) {
        console.log("błąd! " + err)
              }
      
          }
