const Discord = require("discord.js");
const fetch = require("node-fetch")
const config = require("../../config.js")
module.exports = {
  name: "app",
  category: "4fun",
  aliases : ["anime"],
description: "Get info about an anime",
run: async (client, message, args) => {
  

    const res = await fetch(`https://canary.discord.com/api/v9/applications/870401551619981322`, {
        method: "GET",
        headers: {
          'Authorization': `Bot ${config.token}`,
          'content-type': 'application/json',
        },
      }).then(res => res.json())
     console.log(`${res}`)

      

      
}
    


        
}