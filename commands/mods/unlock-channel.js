const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'unlock',
    aliases: ['unlc', "unlockchannel"],

    run: async(client, message, args) => {
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_CHANNELS))  {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription("You dont have \`MANAGE_CHANNELS\` permissions")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
          
        }
        if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.MANAGE_CHANNELS))  {
            const perm = new Discord.MessageEmbed()
                .setTitle("Something went wrong")
                .setColor("#2f3136")
                .setDescription("I dont have \`MANAGE_CHANNELS\` permissions")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.channel.send({embeds: [perm] });
        }
        let role = message.guild.roles.cache.find(r => r.name === '@everyone')
        if(!role) {
            return;
        }
        message.channel.permissionOverwrites.create(role, {
            SEND_MESSAGES: true,
            ADD_REACTIONS: true
        })
        const embed = new MessageEmbed()
        .setTitle("Succes")
        .setColor("#2f3136")
        .setDescription('Channel has been unlocked')
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        return message.channel.send({embeds: [embed] })
    }
}