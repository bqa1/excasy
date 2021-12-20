const Discord = require("discord.js");
const discord = require("discord.js");
const { inspect } = require("util");
const db = require('quick.db')
const config = require("../../config.js")
const bydgoszcz = "jebać bydgoszcz"
const vao = "syf totalny"
module.exports = {
    name: "eval",
    ownerOnly: true,
    aliases : ["e"],
    description: "-",
    category: "dev",
    usage: "brak",
    run: async(client, message, args) => {
      
        let query = args.join(" ") || null;
        let hrDiff;
        let evaled;
        try {
            let hrStart = process.hrtime();
            evaled = eval(query);
            hrDiff = process.hrtime(hrStart);
        } catch (err) {
            if (query?.length > 1012) query = query?.substring(0, 1010) + "...";
            const embedniegut = new Discord.MessageEmbed()
                .setTitle(`ERROR`)
                .addField("Input:", `\`\`\`js\n${query}\n\`\`\``)
                .addField("Output:", `\`\`\`js\n${err.message}\n\`\`\``)
                .setColor("#4E5D94");
            return message.reply({embeds: [embedniegut]});
        }
       
        if(message.content.includes("token")) {
            message.reply("sex")
            
        } else {
        let inspected = inspect(evaled, { depth: 0 });
        if (query?.length > 1012) query = query?.substring(0, 1010) + "...";
        if (inspected.toString().length > 1012) inspected = inspected.toString().substring(0, 1010) + "...";
        const embedgut = new Discord.MessageEmbed()
        .setTitle("BONK")
            .addField("Input:", `\`\`\`js\n${query}\n\`\`\``)
            .addField("Output:", `\`\`\`js\n${inspected}\n\`\`\``)
            .addField("Type:", `\`\`\`yaml\n${typeof(evaled)}\n\`\`\``)
            .setColor("#4E5D94");
            return message.reply({embeds: [embedgut]});
    
        }}
    }
