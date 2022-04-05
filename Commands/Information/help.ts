import {
  Interaction,
  Message,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
} from "discord.js";
import { ICommand } from "@vctrsm/breadhandler";

const embeds: MessageEmbed[] = [];
const pages = {} as { [key: string]: number };

for (let a = 0; a < 4; ++a) {
  embeds.push(new MessageEmbed().setDescription(`Page ${a + 1}`));
}

const getRow = (id: string) => {
  const row = new MessageActionRow();

  row.addComponents(
    new MessageButton()
      .setCustomId("prev_embed")
      .setStyle("SECONDARY")
      .setEmoji("⏮")
      .setDisabled(pages[id] === 0)
  );
  row.addComponents(
    new MessageButton()
      .setCustomId("next_embed")
      .setStyle("SECONDARY")
      .setEmoji("⏭")
      .setDisabled(pages[id] === embeds.length - 1)
  );
  return row;
};

export default {
  category: "Information",
  description: "Sends help menu.",

  slash: "both",
  testOnly: true,

  callback: async ({ user, message, interaction, channel }) => {
    const id = user.id;
    pages[id] = pages[id] || 0;

    const embed = embeds[pages[id]];
    let reply: Message | undefined;
    let collector;

    const filter = (i: Interaction) => i.user.id === user.id;
    const time = 1000 * 60 * 5;

    if (message) {
      reply = await message.reply({
        embeds: [embed],
        components: [getRow(id)],
      });
      collector = reply.createMessageComponentCollector({ filter, time });
    } else {
      interaction.reply({
        ephemeral: true,
        embeds: [embed],
        components: [getRow(id)],
      });

      collector = channel.createMessageComponentCollector({ filter, time });
    }

    collector.on("collect", (btnInt) => {
      if (!btnInt) {
        return;
      }
    });
  },
} as ICommand;
