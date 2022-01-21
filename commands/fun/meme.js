const Discord = module.require("discord.js");

module.exports = {
  name: "meme",
  aliases : ["mem"],
  description: "Send a random meme",
  botPerms: ["ATTTACH_FILES"],
  run: async (client, message, args) => {
    const mum = Math.floor(Math.random() * (500 - 1) + 1);
    message.channel.send({
      files: [
        {
          attachment: `https://ctk-api.herokuapp.com/meme/${mum}`,
          name: "meme.jpg",
        },
      ],
    });
  },
};