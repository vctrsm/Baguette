import { GuildMember } from "discord.js";
import { ICommand } from "@vctrsm/breadhandler";

export default {
  category: "Moderation",
  description: "Bans a mentioned user.",

  permissions: ["BAN_MEMBERS"],

  slash: "both",
  testOnly: true,

  guildOnly: true,

  ephemeral: true,

  minArgs: 2,
  expectedArgs: "<user> <reason>",
  expectedArgsTypes: ["USER", "STRING"],

  callback: ({ message, interaction, args }) => {
    const target = message
      ? message.mentions.members?.first()
      : (interaction.options.getMember("user") as GuildMember);
    if (!target) {
      return "✖ Please mention a user to ban!";
    }

    if (!target.kickable) {
      return {
        custom: true,
        content: "✖ I cannot ban that user!",
      };
    }

    args.shift();
    const reason = args.join(" ");

    target.ban({
      reason,
      days: 7,
    });

    return "✅ User successfully banned!";
  },
} as ICommand;
