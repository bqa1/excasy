
const { MessageEmbed, Message, MessageAttachment } = require("discord.js");
const { Permissions } = require('discord.js');
  function errorEmbed(Message, text) {  
      const blad = new MessageEmbed()
      .setTitle("Something went wrong")
      .setColor("#2f3136")
      .setDescription(`${text}`)
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      Message.reply({embeds: blad})


  }
      module.exports =  {
          errorEmbed

}