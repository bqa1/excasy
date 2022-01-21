const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')
module.exports = {
    name: 'ticket',
    aliases: ['tp'],
    category: "mod",
    cooldown: 5,
    description: 'Make a tickets!',
    usage: "ticket-panel <contents>",
    run: async (client, message, args) => {
        if (!message.member.permissions.has(Discord.Permissions.ADMINISTRATOR))  {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription('You dont have \`ADMINISTRATOR\` permissions')
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
        const msgcontent = args.join(' ');
        const msgsplit = msgcontent.split(' - ');
        const description = msgsplit[0]
        if (!description) {
            const embed = new MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription('Provide an description')
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.channel.send({embeds: [embed] })
            }
        const embed = new MessageEmbed()
            .setColor('#2f3136')
            .setTimestamp()
            .setFooter(`${message.guild.name}`)
            .setDescription(`${description}`)
            .setTitle('Create ticket 📝')
            


        const bt = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('tic')
                .setLabel('Create ticket 📝')
                .setStyle('DANGER'),
            );

        return message.channel.send({
            embeds: [embed],
            components: [bt]
        });
    }
}