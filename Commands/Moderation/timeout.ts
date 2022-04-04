import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: 'Times out a mentioned user.',

    permissions:['ADMINISTRATOR'],
    ephemeral: true,

    slash: 'both',
    testOnly: true,
} as ICommand
