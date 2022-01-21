const MiscUtils = require('../../utils/misc');
const AsciiTable = require('ascii-table');
const { MessageEmbed } = require('discord.js');
const moment = require("moment")

module.exports = {
    name: 'shard',
    aliases: ['shards'],
    description: 'shards stats',
    run: async(client, msg, args) => {

      const table = new AsciiTable()
        .setHeading('ID', 'Guilds', 'Users', 'Ping', 'Uptime')
        .setAlign(0, AsciiTable.CENTER)
        .setAlign(1, AsciiTable.CENTER)
        .setAlign(2, AsciiTable.CENTER)
        .setAlign(3, AsciiTable.CENTER)
        .removeBorder()
      
      const guildCount = await client.shard.fetchClientValues('guilds.cache.size')
      const users = await client.shard.fetchClientValues('users.cache.size')
      const ping = await client.shard.fetchClientValues('ws.ping')

      guildCount.forEach((count, shardId) => {
        table.addRow(shardId, MiscUtils.formatNumber(count), MiscUtils.formatNumber(users[shardId]), `${MiscUtils.formatNumber(ping[shardId])}ms`, `${moment.duration(client.uptime).humanize()}`)
      })
const xd = new MessageEmbed()
.setTitle(`Shards system`)
.setColor('#2f3136')
.setDescription(`\`\`\`${table.toString()}\`\`\``)
.setFooter(`this guild work on shard #${msg.guild.shardId}`)
   msg.reply({embeds: [xd]})
    }
};