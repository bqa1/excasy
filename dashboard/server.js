const {
    Nuxt,
    Builder
} = require('nuxt')
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const config = require("./nuxt.config.js") // NUXT CONFIG FILE
const port =  8481 //PORT
const host = "localhost" //HOST
const nuxt = new Nuxt(config)
app.use(nuxt.render)
if (config.dev) {
    new Builder(nuxt).build()
}
server.listen(port, () => {
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
})
