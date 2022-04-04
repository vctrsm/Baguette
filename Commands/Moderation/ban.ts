import { Message, MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: 'Bans a mentioned user.',

    slash: "both",
    testOnly: true,
    permissions: ["BAN_MEMBERS"],
  
    callback: async ({ interaction: msgInt, channel }) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('ban_yes')
            .setEmoji('🔨')
            .setLabel('Confirm')
            .setStyle('SUCCESS')
        )
        .addComponents(
            new MessageButton()
            .setCustomId('ban_no')
            .setEmoji('✖')
            .setLabel('Cancel')
            .setStyle('DANGER')

        )

        const linkRow = new MessageActionRow()
        
        await msgInt.reply({
            content: 'Are you sure you want to ban this user?',
            components: [row],
            ephemeral: true,
        })
    }
} as ICommand