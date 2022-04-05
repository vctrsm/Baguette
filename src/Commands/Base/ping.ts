import { ICommand } from "@vctrsm/breadhandler";

export default {
  category: "Base code.",
  description: "Replies with pong.",

  slash: "both",
  testOnly: true,

  callback: ({ message, interaction }) => {
    return "Pong";
  },
} as ICommand;
