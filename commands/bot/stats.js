const osu = require("node-os-utils");
const os = require("os");
const config = require("../../config.js")
const { MessageActionRow, MessageButton } = require('discord.js');

const moment = require("moment")
module.exports = {
    name: "stats",
    aliases : ["botinfo", "s", "b"],
    description: "about bot",
    category: "bot",
    cooldown: 10,
    run: async(client, message, args) => {
      const { MessageEmbed } = require('discord.js');
      const { mem, cpu, os } = require('node-os-utils');
       
      
              const shardGuildCounts = await client.shard.fetchClientValues('guilds.cache.size')
              const totalGuildCount = shardGuildCounts.reduce((total, current) => total + current)
              const shardUserCounts = await client.shard.fetchClientValues('users.cache.size')
              const totalUserCount = shardUserCounts.reduce((total, current) => total + current)
              const shardChannelCounts = await client.shard.fetchClientValues('channels.cache.size')
              const totalChannelCount = shardUserCounts.reduce((total, current) => total + current)
      
          
          const embed = new MessageEmbed()
            .setAuthor(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
            .setTitle(`${client.user.username} Stats`)
            .addField(`>>> Ping`, ` \`\`\`${Math.round(message.client.ws.ping)}ms\`\`\``)
            .addField(`>>> Guilds`, `\`\`\`${totalGuildCount}\`\`\``)
            .addField(`>>> Users`, `\`\`\`${totalUserCount}\`\`\``)
            .addField(`>>> Channels`, `\`\`\`${totalChannelCount}\`\`\``)
            .addField(`>>> Shards`, `\`\`\`${client.shard ? `${client.shard.count}` : '0'} \`\`\``)
            .setFooter(`Info about shards: [p]shards`)
            .setTimestamp()
            .setColor('#2f3136')
      
          message.reply({embeds: [embed]})
          
          }
      };
