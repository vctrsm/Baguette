import DiscordJS from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [98303]
})

client.on('ready', () => {
    console.log('Baguette is baked and ready to go! Delicious!')
})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong'
        })
    }
})

client.login(process.env.TOKEN)