const { MessageEmbed } = require("discord.js")


module.exports = {
name: '8ball',
run: async(client, message, args) => {
  const answers = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes - definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
  ];
    const question = args.join(" ") 
    if(!question) {
            const err = new MessageEmbed()
            .setTitle("Something went wrong")
            .setColor("#2f3136")
            .setDescription ('Ask a question')
            .setFooter(
                message.member.displayName,
                message.author.displayAvatarURL({ dynamic: true })
              )
            return message.channel.send({embeds: [err]})
            }    
            const generate = answers[Math.floor(Math.random() * answers.length)];
        const embed = new MessageEmbed()
        .setTitle('Succes')
        .setColor('#2f3136')
        .addField('**Question:**', `\`${question}\``)
        .addField('**Answer:**', `\`${generate}\``)
        .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          )
        return message.channel.send({embeds: [embed] })
    }
}