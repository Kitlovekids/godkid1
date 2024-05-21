module.exports.config = {
  name: "harry",
  version: "1.0.",
  hasPermssion: 0,
  credits: `jameslim`,
  description: "harry potter",
  commandCategory: "logo",
  usages: "text",
  cooldowns: 2,
};
module.exports.run = async function ({ api, event, args, Users }) {
let { messageID, senderID, threadID } = event;
  const axios = require("axios");
  const request = require("request");
  const fs = require("fs-extra");
  let textie = args.join(" ");
  if (!textie) {api.sendMessage(`󰥻 Please put text to proceed\nex: ${global.config.PREFIX}harry james`, event.threadID, event.messageID);
            return;
  }
  api.sendMessage("Please wait...", event.threadID, event.messageID);
  let pathie = __dirname + `/cache/harrypota.png`;
  let missu = (
      await axios.get(`https://chards-bot-api.richardretadao1.repl.co/api/photooxy/harry-potter?text=${textie}`, {
          responseType: "arraybuffer",
      })
).data;
fs.writeFileSync(pathie, Buffer.from(missu, "utf-8"));
return api.sendMessage({
    body: "[HARRY POTTER] Logo created:",
    attachment: fs.createReadStream(pathie) }, threadID, () => fs.unlinkSync(pathie), messageID);

};