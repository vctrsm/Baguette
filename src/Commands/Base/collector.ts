import { ICommand } from "@vctrsm/breadhandler";
import { Message } from "discord.js";

export default {
  category: "Base code",
  description: "Collector",

  callback: ({ message, channel }) => {
    message.reply("Enter your username.");

    const filter = (m: Message) => {
      return m.author.id === message.author.id;
    };

    const collector = channel.createMessageCollector({
      filter,
      max: 2,
      time: 1000 * 20,
    });

    collector.on("collect", (message) => {
      console.log(`I just collected: ${message.content}`);
    });

    collector.on("end", (collected) => {
      if (collected.size === 0) {
        console.log(
          "A user just ran a collector, but I could not collect anything!"
        );
        message.reply("You did not provide your username!");
        return;
      }

      let text = "Collected:\n\n";

      collected.forEach((message) => {
        text += `${message.content}\n`;
      });

      message.reply(text);
    });
  },
} as ICommand;
