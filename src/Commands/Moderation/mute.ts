import { User } from "discord.js";
import { ICommand } from "@vctrsm/breadhandler";
import punishmentSchema from "../../Models/punishment-schema";

export default {
  category: "Moderation",
  description: "Mutes a mentioned user.",

  requireRoles: true,

  minArgs: 3,
  expectedArgs: "<user> <duration> <reason>",
  expectedArgsTypes: ["USER", "STRING", "STRING"],

  slash: "both",
  testOnly: true,

  callback: async ({
    args,
    member: staff,
    guild,
    client,
    message,
    interaction,
  }) => {
    if (!guild) {
      return "You can only use this in a server!";
    }

    let userId = args.shift()!; // This removes the tagged user from the array
    const duration = args.shift()!;
    const reason = args.join(" ");
    let user: User | undefined;
  },
} as ICommand;
