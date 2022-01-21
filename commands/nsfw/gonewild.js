
const discord = require("discord.js")
const NSFW = require("nsfw-discord");
const nsfw = new NSFW();
module.exports = {
    name: "gonewild",
    aliases : [],
    description: "lennyface",
    category: "nsfw",
    usage: "brak",
    cooldown: 5,
    run: async(client, message, args) => {
        if(!message.channel.nsfw) {
            const perm = new discord.MessageEmbed()
            .setColor("#2f3136")
            .setTitle(`Something went wrong`)
            .setDescription("Command work only on nsfw channel")
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            return message.reply({embeds: [perm] });
        }
        const image = await nsfw.gonewild();
        const Bembed = new discord.MessageEmbed()
         .setImage(image)
         .setTitle("( ͡° ͜ʖ ͡°)")
         .setColor("#2f3136")
         .setFooter(message.author.tag, message.author.displayAvatarURL())
         return message.reply({embeds: [Bembed] });
    }
}