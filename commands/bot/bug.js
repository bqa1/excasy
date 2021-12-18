const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "bugreport",
    aliases : ["bug", "cośsiezjebauo"],
    description: "send a bugs to developers",
    category: "bot",
    usage: "bugreport <błąd>",
    cooldown: 5,
    run: async(client, message, args) => {
        const argz = args[0]
        if(!argz) {
            const embed = new MessageEmbed()
                .setTitle("Something went wrong...")
                .setDescription("Give a reason")
                .setColor("#2f3136")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
            message.reply({embeds: [embed]})

        } else {
        const embed2 = new MessageEmbed()
        .setTitle("Warring!")
        .setDescription("If you send fake bug, you will get globalbanned! type \`Yes\` for send (15 second)")
        .setColor("#2f3136")
        .setFooter(message.author.tag, message.author.displayAvatarURL())
    message.reply({embeds: [embed2]})


        const filter = m => { m.content.includes('Yes')}
        const collector = message.channel.createMessageCollector({ filter, time: 15000 });
        collector.on('collect', m => {
                const embed2 = new MessageEmbed()
                .setTitle("Succes!")
                .setDescription("Thank you")
                .setColor("#2f3136")
                .setFooter(message.author.tag, message.author.displayAvatarURL())
           message.channel.send({embeds: [embed2]}) 
       
        });
        
    }
}
}