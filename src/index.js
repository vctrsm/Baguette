const DJS = require("discord.js");
const BreadHandler = require("@vctrsm/breadhandler");
const path = require("path");
const config = require("./Config/config.json");

const client = new DJS.Client({
  intents: [98303],
});

client.on("ready", async () => {
  console.log("Baguette is baked and ready to go! Delicious!");

  new BreadHandler(client, {
    commandsDir: path.join(__dirname, "Commands"),
    featuresDir: path.join(__dirname, "Features"),
    testServers: ["960247766343385088"],
    botOwners: ["767429982732681238"],
    mongoUri: config.mongoUri,
    dbOptions: {
      keepAlive: true,
    },
  }).setDefaultPrefix(".");
});

client.login(config.token);
