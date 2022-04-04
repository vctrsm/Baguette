import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Information',
    description: 'Sends a help message.',
    
    slash: "both",
    testOnly: true, 

    callback: ({ message, text }) => {
        const helpEmbed = new MessageEmbed()
          .setDescription("Hello world")

        return helpEmbed
    }
} as ICommand
