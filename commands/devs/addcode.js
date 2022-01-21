const Premium = require('../../models/GuildPremium.js');
const  Discord = require('discord.js');
const moment = require('moment');
const voucher_codes = require('voucher-code-generator');
const db = require('quick.db')
module.exports = {
    name: "premium",
    ownerOnly: true,
    aliases : ["addcode"],
    description: "-",
    ownerOnly: true,
    category: "dev",
    usage: "-",
    run: async(client, message, args) => {



if(!args[0]) {

  
const codePremium = voucher_codes.generate({
  pattern: "####-####-####",
    })


const code = codePremium.toString().toUpperCase();
const owner = await message.guild.fetchOwner().catch(() => "Not found");
const lvlup = new Discord.MessageEmbed()
.setTitle("Level UP!")
.setDescription(`**Congratulations!**\n\n**${message.guild.name}** Is now a premium guild! Thanks!\n\nNow you can use premium commands!`)
.setColor("#2f3136");
message.channel.send({embeds: [lvlup]})
db.set(`Premium_${message.guild.id}`, code)
const autor = new Discord.MessageEmbed()
.setTitle("Level UP!")
.setDescription(`\`Premium Subscription\`\n\nYou've recently redeemed a code in **${message.guild.name}** and here is your receipt:\n\n **Reciept ID:** ${code}\n`)
.setColor("#2f3136")
.setFooter("if you have problems with premium, contact with developer")
owner.send({embeds: [autor]})

  
}
if(args[0] === "delete") {
  const owner = await message.guild.fetchOwner().catch(() => "Not found");
const lvlup = new Discord.MessageEmbed()
.setTitle(`${emotes.poop} Level down`)
.setDescription(`Deleted premium for this guild`)
.setColor("#2f3136");
message.channel.send({embeds: [lvlup]})
db.delete(`Premium_${message.guild.id}`)
const autor = new Discord.MessageEmbed()
.setTitle(`${emotes.poop} Level down`)
.setDescription(`${message.guild.name} now is a non premium guild`)
.setColor("#2f3136")
owner.send({embeds: [autor]})
}
 
}

}

        