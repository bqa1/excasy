const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
    name: 'fristmessage',
    aliases: ['fm', `fmsg`],
    description: 'Get the first message in  a channel ',
    cooldown: 2,
    run: async(client, message, args) => {
    

const fetchMessages = await message.channel.messages.fetch({
    after: 1,
    limit: 1,
  });
  const msg = fetchMessages.first();

  const embed = new MessageEmbed()

    .setDescription(`Click [here](${msg.url}) to jump to the first message!`)
    .setColor("#2f3136")

  message.channel.send({ embeds: [embed] });

}
  }