
const Guild = require('../../models/guild');
const Premium = require('../../models/GuildPremium');
const moment = require("moment");
const config = require('../../config.js');
const Discord = require('discord.js');
let uniqid = require('uniqid');
const { db } = require('../../models/guild');
module.exports = {
    name: "redeem",
    aliases : ["user"],
    description: "Redeem a Premium code!",
    category: "other",
    usage: "brak",
    cooldown: 5,
    ownerOnly: true,
    run: async(client, message, args) => {

     const guildDB = await Guild.findOne({
        guildId: message.guild.id
      });
      
   let code = args[0]


    if(!code) {
        const dajkod = new Discord.MessageEmbed()
        .setTitle("Something went wrong")
        .setColor("#2f3136")
            .setDescription("Please Specify a code to redeem")
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        message.reply({embeds: [dajkod]})
    }
    const alreadypremium = db.get(`Premium_${message.guild.id}`)
   if(alreadypremium) {
        const dajkod = new Discord.MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
        .setDescription("The current guild is already premium")
     .setFooter(message.author.tag, message.author.displayAvatarURL())
     message.reply({embeds: [dajkod]})
  
    }

    const premium = db.get(`PremiumCode`, code)

    if(premium){
 db.delete(`PremiumCode`)
 db.set(`Premium_${message.guild.id}`)


    try {
        const autor = new Discord.MessageEmbed()
        .setTitle("Level UP!")
        .setDescription(`\`Premium Subscription\`\n\nYou've recently redeemed a code in **${message.guild.name}** and here is your receipt:\n\n **Reciept ID:** ${ID}\n**Redeem Date:** ${DDate}\n**Guild Name:** ${message.guild.name}\n**Guild ID:** ${message.guild.id}`)
        .setColor("#2f3136")
await message.author.send({embeds: [autor]})

    } catch (err){
console.log(err)
 message.reply("Something went wrong! ")
     
      return;
    }
   
const lvlup = new Discord.MessageEmbed()
.setTitle("Level UP!")
.setDescription(`**Congratulations!**\n\n**${message.guild.name}** Is now a premium guild! Thanks!\n\n**your receipt has been sent via dms**\n\n**Expires At:** ${expires}`)
.setColor("#2f3136");
message.channel.send({embeds: [lvlup]})

const embedPremium = new Discord.MessageEmbed()
      .setDescription(`**Premium Subscription**\n\n**${message.author.tag}** Redeemed a code in **${message.guild.name}**\n\n **Reciept ID:** ${ID}\n**Redeem Date:** ${DDate}\n**Guild Name:** ${message.guild.name}\n**Guild ID:** ${message.guild.id}\n**Redeemer Tag:** ${message.author.tag}\n**Redeemer ID:** ${message.author.id}\n\n**Expires At:** ${expires}`)
      .setColor("#2f3136")

    } 
    if(!premium) {
        const cos = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setDescription(`I could not the following Code`)
        return message.reply({embeds: [cos]})
    }
    }
};