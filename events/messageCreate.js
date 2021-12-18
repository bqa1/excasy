
const Discord = require("discord.js")
const fetch = require("node-fetch")
const db = require("quick.db")
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { Collection } = require("discord.js");
const moment = require('moment');
const Timeout = new Discord.Collection();
const confik = {
    owners: ["748479606457237554", "700231994444873748"]
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

  const ping = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setTitle(`hey! ${message.author.username}!`)
    .addField(`>>> ${emotes.slash_commands}・Prefix`, `\`\`\`${cprefix} || @${client.user.username}\`\`\``)
    .addField(`>>> ${emotes.connection_great}・Ping`, `\`\`\`${client.ws.ping}\`\`\``)

    if (message.content.match(Mention)) return message.reply({embeds: [ping]})


  if(message.channel.type === "DM") {
      message.reply("helo!")
  }

  const reklama = ["discord.gg/", "discord.com"]

  for (var i in reklama) {
      let dbreklama = await db.fetch(`reklama_${message.guild.id}`)

      if(dbreklama == "tak"){
          let blockedEmbed = new MessageEmbed()
              .setColor("#eb3434")
              .setAuthor("Antiinvite")
              .setDescription(`<@${message.author.id}> try to send invite!`)

          if (message.content.toLowerCase().includes(reklama[0].toLowerCase())) {
            if (message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) { return; }
            message.delete()
            return message.channel.send({ embeds: [blockedEmbed]})
  
          }
      }

      if(dbreklama == "nie") {

      }
      
      
    }
    const link = ["https://", "www."]

    for (var i in link) {
        let dblink = await db.fetch(`link_${message.guild.id}`)
  
        if(dblink == "tak"){
            let blockedEmbed = new MessageEmbed()
                .setColor("#eb3434")
                .setAuthor("AntiLink")
                .setDescription(`<@${message.author.id}> try to send links`)
  
            if (message.content.toLowerCase().includes(link[0].toLowerCase())) {
                if (message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) { return; }
              message.delete()
              return message.channel.send({ embeds: [blockedEmbed]})
    
            }
        }
  
        if(dblink == "nie") {
  
        }
        
        
      }


  if (!message.guild) return;

if(message.content === "excasy") {
  message.reply("hey!")
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
 
    
   
    
      try {
          if (command) command.run(client, message, args)
      }  catch (err) {
        console.log("błąd! " + err)
              }
             const interval = new setInterval(() => {
        
             const image = fetch('https://api.imgflip.com/get_memes', {
               method: 'GET'
         
        })
            const data =  db.fetch(`modlogs_${message.guild.id}`)
            if (!data) return
            const hannel = data.id
            if(!hannel) { return; }
        
              const embeds = new MessageEmbed()
              .setTitle("meme")
              .setImage(image)
              .setColor("#FFBF00")
              .setTimestamp()
          client.channels.cache.get(hannel).send({embeds: [embeds]})
        
             }, 2000)
          }
