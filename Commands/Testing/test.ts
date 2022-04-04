import { ButtonInteraction, Collection, Message, MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Testing',

    slash: true,
    testOnly: true,

    callback: async ({ interaction: msgInt, channel }) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('yes')
            .setEmoji('🔨')
            .setLabel('Confirm')
            .setStyle('SUCCESS')
        )
        .addComponents(
            new MessageButton()
            .setCustomId('no')
            .setLabel('Cancel')
            .setStyle('DANGER')

        )
        
        await msgInt.reply({
            content: 'Are you sure?',
            components: [row],
            ephemeral:true,
        })

        const collector = channel.createMessageComponentCollector({
            max: 1,
            time: 1000 * 10
        })

        collector.on('collect', (i: ButtonInteraction) => {
            i.reply({
                content: 'You clicked a button',
                ephemeral: true
            })
        })

        collector.on('end', async (collection) => {
            collection.forEach((click) => {
                console.log(click.user.id, click.customId)
            })

            if (collection.first()?.customId === 'yes') {
                
            }
        })
    },
} as ICommand