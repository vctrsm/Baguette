import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: 'Kicks a mentioned user.',

    permissions:['KICK_MEMBERS'],
    slash: 'both',
    testOnly: true,
} as ICommand
