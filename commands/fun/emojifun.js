const discord = require('discord.js')

const fetch = require("node-fetch")

 const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {

    name: "findemoji",

    aliases: ["finde", "fe"],

    description: "Steals Emoji from Other Servers to ur Server.",

    authorPermission: ["MANAGE_EMOJIS"],

 

    run: async (client, message, args) => {

      

let emojis = await fetch("https://emoji.gg/api/").then(res => res.json());

     const q = args.join(" ").toLowerCase().trim().split(" ").join("_");

     let matches = emojis.filter(s => s.title == q || s.title.includes(q));

     

     let noResult = new discord.MessageEmbed()
     .setTitle("Something went wrong")
     .setColor("#2f3136")
     .setDescription(`No result found for ${args.join(" ")}`)

     if (!matches.length) return message.reply({embeds:[noResult]})

     let page = 0;

     let embed = new discord.MessageEmbed()

     .setTitle(matches[page].title)

     .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
     .setColor("#2f3136")

     .setImage(matches[page].image)

     .setFooter(`Emoji ${page + 1}/${matches.length}`);

     let row = new MessageActionRow()

			.addComponents(

				new MessageButton()

					.setCustomId('previous')

					.setLabel('Previous')

					.setEmoji('◀️')

					.setStyle('PRIMARY'),

				new MessageButton()

					.setCustomId('next')

					.setLabel('Next')

					.setEmoji('▶️')

					.setStyle('PRIMARY'),

				new MessageButton()

					.setCustomId('add')

					.setLabel('Add')

					.setEmoji('✅')

					.setStyle('SUCCESS'),

				new MessageButton()

					.setCustomId('cancel')

					.setLabel('Cancel')

					.setEmoji('❌')

					.setStyle('DANGER'),

			);

     const msg = await message.reply({embeds:[embed],components: [row]});

     //emojis = ["◀️", "▶️", "✅", "❌"]

     const filter = (button) => button.user.id === message.author.id && button.message.id === msg.id && button.isButton();

 

     let collector = msg.createMessageComponentCollector({time: 120000,filter: filter})

     collector.on('collect', async (b) => {

		switch(b.customId) {

			case "previous":

			page--;

		if(!matches[page]) {

          page++;

        } else {

        	let newembed = new discord.MessageEmbed()

     .setTitle(matches[page].title)

     .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
     .setColor("#2f3136")

     .setImage(matches[page].image)

     .setFooter(`Emoji ${page + 1}/${matches.length}`);

     msg.edit({embeds:[newembed],components: [row]});

           }

           break;

         case "next":

           page++;

     if(!matches[page]) page--;

     else msg.edit({embeds:[new discord.MessageEmbed()

     .setTitle(matches[page].title)

     .setURL("https://discordemoji.com/emoji/" + matches[page].slug)

     .setColor("#2f3136")

     .setImage(matches[page].image)

     .setFooter(`Emoji ${page + 1}/${matches.length}`)],components:[row]})

           break;

         case "add":

           collector.stop()

           const res = matches[page];

        let created;

        message.channel.sendTyping()

        try { 

        created = await message.guild.emojis.create(res.image, res.title);

        const unable = new discord.MessageEmbed()
        .setColor("#2f3136")
        .setTitle("Success!")
        .setDescription(`Successfully added ${created}!`)
        message.channel.send({embeds: unable});

       } catch(error) {

      console.log(error) //message.channel.stopTyping();

      const unable = new discord.MessageEmbed()
      .setColor("#2f3136")
      .setTitle("Something went wrong")
      .setDescription(`Unable to add ${res.title}`)
      message.channel.send({embeds: unable});

       }

           break;

         case "cancel":

           collector.stop()

           b.channel.send("Cancelled Command.")

           break;

     }

     });

    }

}