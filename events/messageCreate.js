
const Discord = require("discord.js")
const fetch = require("node-fetch")
const db = require("quick.db")
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { Collection } = require("discord.js");
const moment = require('moment');
const cooldowns = new Map()
const Timeout = new Discord.Collection();
const confik = {
    owners: ["918865542746632254", "748479606457237554"]
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
  .setAuthor('Someone tagged me?', `${client.user.displayAvatarURL()}`)
  .setDescription(`\`${client.user.username}\` - This is the new Discord Bot, that
  will add new features to your server!
  `)
  .addField(`> ${emotes.slash_commands}・Prefix`, `\`\`\`${cprefix} || @${client.user.username}\`\`\``)
  .addField(`> ${emotes.connection_great}・Ping`, `\`\`\`${client.ws.ping}\`\`\``)

  .setImage("https://media.discordapp.net/attachments/921805865714090004/922404379884159036/excasybaner2.png?width=324&height=182")
  .setImage('https://cdn.discordapp.com/attachments/917145205516427306/922223945543999508/excasybaner.png')

  .setTimestamp()
  .setFooter(
      message.member.displayName,
      message.author.displayAvatarURL({ dynamic: true })
  )

    if (message.content.match(Mention)) return message.reply({embeds: [ping]})



  
  const reklama = ["discord.gg/", "discord.com"]

  for (var i in reklama) {
      let dbreklama = await db.fetch(`reklama_${message.guild.id}`)

      if(dbreklama == "tak"){
          let blockedEmbed = new MessageEmbed()
              .setColor("#eb3434")
              .setAuthor("Antiinvite")
              .setDescription(`<@${message.author.id}> try to send invite!`)

              const warn = new MessageEmbed()
              .setColor("#2f3136")
              .setTitle("MOD SYSTEM | WARN")
              .addField("Moderator", "excasy")
              .addField("Reason:", "Automod | antyinvite")

          if (message.content.toLowerCase().includes(reklama[0].toLowerCase())) {

           if (message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) { return; }
            message.author.send({embeds: [warn]}).catch(() => {
              message.channel.send("Cannot send message to this user")
          })
          db.add(`warnings_${message.guild.id}_${message.author.id}`, 1)
          db.add(`waringreason_${message.guild.id}_${message.author.id}_Antyinvite`, 1)
            message.delete()
            return message.channel.send({ embeds: [blockedEmbed]})
  
          }
      }

      if(dbreklama == "nie") {

      }
      
      
    }
    const link = ["www.", "https://", "http://"]
    for (var i in link) {
        let dblink = await db.fetch(`link_${message.guild.id}`)
  
        if(dblink == "tak"){
            let blockedEmbed = new MessageEmbed()
                .setColor("#eb3434")
                .setAuthor("AntiLink")
                .setDescription(`<@${message.author.id}> try to send links`)
                const warn = new MessageEmbed()
                .setColor("#2f3136")
                .setTitle("MOD SYSTEM | WARN")
                .addField("Moderator", "excasy")
                .addField("Reason:", "Automod | antylink")
  
            if (message.content.toLowerCase().includes(link[0].toLowerCase())) {
  
        //      if (message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) { return; }
              message.author.send({embeds: [warn]}).catch(() => {
                message.channel.send("Cannot send message to this user")
            })
            db.add(`warnings_${message.guild.id}_${message.author.id}`, 1)
            db.add(`waringreason_${message.guild.id}_${message.author.id}_Antylink`, 1)
              message.delete()
              return message.channel.send({ embeds: [blockedEmbed]})
    
            }
        }
  
        if(dblink == "nie") {
  
        }
        
        
      }


      




if(message.content.toLowerCase() === "excasy") {
  message.reply("Hey!")
}
if(message.content.toLowerCase().includes === `asked`) {
  message.reply("im asked")
}
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
    .setColor("#2f3136")
    .setTitle(`Something went wrong`)
    .setDescription("Command not found")
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    return message.channel.send({ embeds: [cmd] });
  }
  const premium = db.get(`Premium_${message.guild.id}`)
  if(command.Premium) {
    if(!premium) {
      const ownerk = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle(`Something went wrong`)
      .setDescription("Sorry but this guild need premium to ran this command")
      .setFooter(message.author.tag, message.author.displayAvatarURL())

  return message.channel.send({embeds: [ownerk]});
    }

  }
  
  if (command.voiceChannel && !message.member.voice.channel) {
    const ownerk = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle(`Something went wrong`)
    .setDescription("You must be in a voice channel!")
    .setFooter(message.author.tag, message.author.displayAvatarURL())

return message.channel.send({embeds: [ownerk]});
}

 const gban = db.get(`gban_s_${message.author.id}`)

    if(gban === "tak") {
        const gbanp = db.get(`gban_p_${message.author.id}`)
        const ownerk = new Discord.MessageEmbed()
            .setColor("#2f3136")
            .setTitle(`Something went wrong...`)
            .setDescription(`GLOBALBAN!`)
            .addField(`>>> ${emotes.lock}・REASON:`, `\`\`\`${gbanp}\`\`\``)
            .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.channel.send({embeds: [ownerk]});
    }
    const momsgEmbed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle(`Something went wrong...`)
    .setDescription(" need atleast `SEND_MESSAGES`, `EMBED_LINKS` permissions to execute any command in this server!")

const upEmbed = new Discord.MessageEmbed()
.setColor("#2f3136")
.setTitle(`Something went wrong...`)
    .setDescription(`You need \`${command.UserPerms || []}\` permission(s) to execute this command!`)

const bpEmbed = new Discord.MessageEmbed()
.setColor("#2f3136")
.setTitle(`Something went wrong...`)
    .setDescription(`I need \`${command.BotPerms || []}\` permission(s) to execute this command!`)
    
    if (!message.guild.me.permissions.has(["SEND_MESSAGES", "EMBED_LINKS", "VIEW_CHANNEL"])) return ;




    if (!message.member.permissions.has(command.UserPerms || [])) return message.author.reply({ embeds: [upEmbed] })

    if (!message.guild.me.permissions.has(command.BotPerms || [])) return message.reply({ embeds: [bpEmbed] })
  
   
    if (command.ownerOnly) {
      if (!confik.owners.includes(message.author.id)) {
          const ownerk = new Discord.MessageEmbed()
              .setColor("#2f3136")
              .setTitle(`Something went wrong`)
              .setDescription("Only devs can use this command")
              .setFooter(message.author.tag, message.author.displayAvatarURL())

          return message.channel.send({embeds: [ownerk]});
      }
    }
    if (command) {

      if (!cooldowns.has(command.name)) {

          cooldowns.set(command.name, new Discord.Collection())

      }

      const currentTime = Date.now()
      const timeStamps = cooldowns.get(command.name)
      const cooldownAmount = (command.cooldown) * 1000

      if (timeStamps.has(message.author.id)) {

          const expTime = timeStamps.get(message.author.id) + cooldownAmount

          if (currentTime < expTime) {

              const timeLeft = (expTime - currentTime) / 1000

              const tmotEmbed = new Discord.MessageEmbed()
              .setColor("#2f3136")
              .setTitle(`Something went wrong`)
                  .setDescription(`Please wait \`${timeLeft.toFixed(1)}\` more seconds before using \`${command.name}\` again!`)

              return message.reply({ embeds: [tmotEmbed] })

          }

      }

      timeStamps.set(message.author.id, currentTime)

      setTimeout(() => {
          timeStamps.delete(message.author.id)
      }, cooldownAmount)
    }



      try {
          if (command) command.run(client, message, args)
      }  catch (err) {
        console.log("błąd! " + err)
              }
      
            }
