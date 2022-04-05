import { MessageEmbed } from "discord.js";
import { ICommand } from "@vctrsm/breadhandler";

export default {
  category: "Base code",
  description: "Sends an embed",

  slash: "both",
  testOnly: true,

  callback: ({ message, text }) => {
    const embed = new MessageEmbed().setDescription("Hello world");

    return embed;
  },
} as ICommand;
