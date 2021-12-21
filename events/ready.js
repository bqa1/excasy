const mongoose = require("mongoose")
const { mongo } = require("../config.js")
module.exports.run = async (client) => {

    console.log(`[CLIENT] ${client.user.username} starting`);
     client.user.setActivity(`My prefix is .`, {type: "PLAYING"})

mongoose.connect(`${mongo}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("[DATABASE 2] Connected to database!"));

}