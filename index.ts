import DiscordJS, { Intents } from "discord.js";
import BreadHandler from "@vctrsm/breadhandler";
import path from "path";
import mongoose from "mongoose";
import "dotenv/config";

const client = new DiscordJS.Client({
  intents: [98303],
});

client.on("ready", async () => {
  console.log("Baguette is baked and ready to go! Delicious!");

  new BreadHandler(client, {
    commandsDir: path.join(__dirname, "Commands"),
    typeScript: true,
    testServers: ["960247766343385088"],
    botOwners: ["767429982732681238"],
    mongoUri: process.env.MONGO_URI,
    dbOptions: {
      keepAlive: true,
    },
  }).setDefaultPrefix(".");
});

client.login(process.env.TOKEN);
