const nws = require('../../models/news');
module.exports = {
    name: "setnews",
    ownerOnly: true,
    aliases : ["sn"],
    description: "-",
    category: "dev",
    usage: "brak",
    run: async(client, message, args) => {


        let news = args.join(' ').split('').join('') 
        if(!nws.news) return  await nws.create({ news: news, tag: '710465231779790849', time: new Date() }) + await nws.updateOne({ news: news, tag: '710465231779790849', time: new Date()}) +  message.channel.send(' Updated News!')
        await nws.updateOne({ news: news, tag: '710465231779790849', time: new Date() })
        message.channel.send(' Updated News!')


    }
}
