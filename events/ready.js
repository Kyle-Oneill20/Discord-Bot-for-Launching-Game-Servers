const { Events } = require('discord.js')


module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Let's freaking go Chat, I have logged in as ${client.user.tag}`)
    }

}
