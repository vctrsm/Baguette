import { Client, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Information',
    description: 'Sends a help message.',
    
    slash: "both",
    testOnly: true, 

    callback: ({ message, text }) => {
        const helpEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Baguette help')
        .setDescription('Help menu! Use buttons to navigate.')
        .addFields([{
            name: 'Page 1',
            value: 'Moderation 🛠',
            inline: true
        }, {
            name: 'Page 2',
            value: 'Economy 💸',
            inline: true
        }])

        .setTimestamp()
        .setFooter({ text: 'Made by vctrsm_'});
    
        return helpEmbed
    }
} as ICommand
