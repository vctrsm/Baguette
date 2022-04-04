import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: 'Times out a mentioned user.',

    permissions:['ADMINISTRATOR'],

    slash: 'both',
    testOnly: true,
} as ICommand
