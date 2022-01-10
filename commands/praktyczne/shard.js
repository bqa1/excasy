const MiscUtils = require('../../utils/misc');
const AsciiTable = require('ascii-table');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'shard',
    aliases: ['shards'],
    description: 'Informnacje o shardach',
    run: async(client, msg, args) => {

      const table = new AsciiTable()
        .setHeading('ID', 'Serwery', 'Użytkownicy', 'Ping', 'Uptime')
        .setAlign(0, AsciiTable.CENTER)
        .setAlign(1, AsciiTable.CENTER)
        .setAlign(2, AsciiTable.CENTER)
        .setAlign(3, AsciiTable.CENTER)
        .removeBorder()
      
      const guildCount = await client.shard.fetchClientValues('guilds.cache.size')
      const users = await client.shard.fetchClientValues('users.cache.size')
      const ping = await client.shard.fetchClientValues('ws.ping')

      guildCount.forEach((count, shardId) => {
        table.addRow(shardId, MiscUtils.formatNumber(count), MiscUtils.formatNumber(users[shardId]), `${MiscUtils.formatNumber(ping[shardId])}ms`)
      })
const xd = new MessageEmbed()
.setTitle(`System shardów`)
.setColor('#2f3136')
.setDescription(`\`\`\`${table.toString()}\`\`\``)
.setFooter(`Ten serwer dziala na shardzie o id #${msg.guild.shardId}`)
   msg.reply({embeds: [xd]})
    }
};