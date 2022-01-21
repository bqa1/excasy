const PROTOCOL_REGEX = /^[a-zA-Z]+:\/\//
const PATH_REGEX = /(\/(.+)?)/g
const Discord = require("discord.js");
const fetch = require("node-fetch")

module.exports = {
    name: "discrim",
    aliases : ["disc", "discriminator"],
    description: "find users with discriminator you provide",
    category: "4fun",
    cooldown: 5,
    usage: "discriminator <discriminator>",
    run: async(client, message, args) => {


        if (!args[0]) {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
                .setDescription("Provide an discriminator")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
          }

          if(isNaN(args[0])) {
            const perm = new Discord.MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
                .setDescription("Invaild discriminator")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
          }
   
          let members = client.users.cache.filter(user => user.discriminator === args[0]).map(user => user.tag);
          let total = members.length;
          members = members.length > 0 ? members.slice(0, 10).join('\n') : `None`;
              


          const perm = new Discord.MessageEmbed()
          .setColor("#2f3136")
          .setTitle("Discriminator search")
          .setDescription(`Found \`${total}\` users [this shard cache] with discriminator \`${args[0] || message.author.discriminator}\``)
          .addField(`Users`, `\`\`\`${total > 10 ? `${members} / ${total - 10} ` : members}\`\`\``)
          await message.reply({embeds: [perm]})
     

    }
}