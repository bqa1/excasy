const express = require("express");
const app = express()
const fs = require("fs")
const client = require("./shard.js")
const config = require('./config.js');
const Discord = require('discord.js');
const Statcord = require("statcord.js");
app.enable("trust proxy")
app.use(express.static(__dirname + "/website"))


app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url} ${res.statusCode}`)
    next()
    })
    app.get("/", async (res, req) => {
      
      res.sendFile("./website/index.html", { root: __dirname})
    })

    
    app.listen( 3030 , () => console.log("[WEB] Port: 3030") )

