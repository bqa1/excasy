const { MessageEmbed } = require('discord.js');
const { mem, cpu, os } = require('node-os-utils');
module.exports = {
    name: 'stats',
    aliases: ['botinfo', `statystyki`],
    description: 'Statystki bota!',
    run: async(client, message, args) => {

 

        const shardGuildCounts = await client.shard.fetchClientValues('guilds.cache.size')
        const totalGuildCount = shardGuildCounts.reduce((total, current) => total + current)
        const shardUserCounts = await client.shard.fetchClientValues('users.cache.size')
        const totalUserCount = shardUserCounts.reduce((total, current) => total + current)
        const shardChannelCounts = await client.shard.fetchClientValues('users.cache.size')
        const totalChannelCount = shardUserCounts.reduce((total, current) => total + current)

    
    const embed = new MessageEmbed()
      .setAuthor(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTitle(`Statystki bota ${client.user.username}`)
      .addField(`Ogólne`, `Ping \` ${Math.round(message.client.ws.ping)}ms \` \n Serwery \` ${totalGuildCount} \` \n Użytkownicy \` ${totalUserCount} \` \n Kanały \` ${totalChannelCount} \` \n Shardy \` ${client.shard ? `${client.shard.count}` : '0'} \``)
      .setFooter(`informacje o shardach dostępnie pod [p]shard`)
      .setTimestamp()
      .setColor('#2f3136')

    message.reply({embeds: [embed]})
    
    }
};