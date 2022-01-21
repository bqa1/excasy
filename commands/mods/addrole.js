const Discord = require("discord.js");
const moment = require("moment")
const emotes = require("../../emotes.json")
moment.locale("PL");
module.exports = {
    name: "addrole",
    aliases : ["dodajrole", 'giverole'],
    description: "Give someone a special role ",
    category: "mod",
     usage: "addrole <rola> <użytkownik>",
    cooldown: 5,
     guildOnly: true,
    run: async(client, message, args) => {
let role =  message.guild.roles.cache.find(role => role.name.toLowerCase() === args[0]) || message.mentions.roles.last() || message.guild.roles.cache.get("target")
let member = message.mentions.members.last();
if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES))  {
    const perm = new Discord.MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
    .setDescription(`You dont have \`MANAGE_ROLES\` permission`)
    return message.reply({embeds: [perm] });
    
}

if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES))  {
    const perm = new Discord.MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
    .setDescription(`I dont have \`MANAGE_ROLES\` permission`)
    return message.reply({embeds: [perm] });
}
if(!role) {
    const perm = new Discord.MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
    .setDescription(`Mention role`)
    return message.reply({embeds: [perm] });
}
if(!member) {
    const perm = new Discord.MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
    .setDescription(`Mention someone`)
    return message.reply({embeds: [perm] });
}
if(!member.bannable) {
    const perm = new Discord.MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
    .setDescription(`i cant add role to ${member}`)
    return message.reply({embeds: [perm] });
} 

if(role.position > message.guild.members.resolve(client.user).roles.highest.position) {
    const perm = new Discord.MessageEmbed()
    .setTitle("Something went wrong")
    .setColor("#2f3136")
    .setDescription(`I cant add this role`)
    return message.reply({embeds: [perm] });
}
   member.roles.add(role).catch(() => { message.reply("Something went wrong")})
   const perm = new Discord.MessageEmbed()
   .setTitle(`Success`)
   .setColor("#2f3136")
   .setDescription(`Added ${role} to ${member}`)
   return message.reply({embeds: [perm] });
 

    }}