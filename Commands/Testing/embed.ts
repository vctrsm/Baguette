import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Sends an embed',
    

    slash: "both",
    testOnly: true, 

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
          .setDescription("Hello world")

        return embed
    }
} as ICommand
