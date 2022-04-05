import { ICommand } from "@vctrsm/breadhandler";

export default {
  category: "Moderation",
  description: "Times out a mentioned user.",

  permissions: ["MODERATE_MEMBERS"],
  ephemeral: true,

  slash: "both",
  testOnly: true,
} as ICommand;
