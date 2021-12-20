const Discord = require("discord.js");
const moment = require("moment")
const emotes = require("../../emotes.json")
module.exports = {
    name: "role",
    aliases : ["rola", "roleinfo", "roles"],
    description: "role info",
    category: "info",
     usage: "role <rola>",
    cooldown: 5,
     guildOnly: true,
    run: async(client, message, args) => {
let role = message.guild.roles.cache.get(args[0]) || message.mentions.roles.last() || message.guild.roles.cache.get("target") 
if(!role){
    const perm = new Discord.MessageEmbed()
    .setTitle("Something went wrong...")
    .setColor("#2f3136")
    .setDescription(`Mention roleor give ID!`)
    return message.reply({embeds: [perm] });
}  
const men = {
    true: 'Yes',
    false: "No"
}
    
        const infoEmbed = new Discord.MessageEmbed()
        .setColor("#2f3136")
        .setAuthor(`${role.name}`)
        .addField(`>>> ${emotes.compass}・Name`, `\`\`\`${role.name}\`\`\``)
        .addField(`>>> ${emotes.plus}・ID`, `\`\`\`${role.id}\`\`\``)
        .addField(`>>> ${emotes.shop}・Mentionable?`, `\`\`\`${men[role.mentionable]}\`\`\``)
        .addField(`>>> ${emotes.text_channel}・Position`, `\`\`\`${role.rawPosition}\`\`\``)
        .addField(`>>> ${emotes.cross}・Color`, `\`\`\`${role.hexColor}\`\`\``)
        .addField(`>>> ${emotes.line}・Users with this role`, `\`\`\`${role.members.size}\`\`\``)
        .addField(`>>> ${emotes.rocket}・Created`, `\`\`\`${moment(role.createdAt).format('LLLL')}\`\`\``)
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.reply({embeds: [infoEmbed]})    

    }}