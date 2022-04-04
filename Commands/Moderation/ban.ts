import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: 'Bans a mentioned user.',

    permissions:['BAN_MEMBERS'],
    slash: 'both',
    testOnly: true,
} as ICommand
