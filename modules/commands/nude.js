module.exports.config = {
  name: "nude",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nnl", //thÃ­ch thay cre ko bá»‘ m Ä‘Ã£ bá»‘ thÃ­ cho dÃ¹ng rá»“i bá»›t bá»›t láº¡i nha con chÃ³
  description: "Random nude",
  commandCategory: "hÃ¬nh áº£nh",
  usages: "nsfw",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

const request = require('request');
const fs = require("fs");

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const threadID = event.threadID;

  const imageUrls = await Promise.all(Array.from({ length: 6 }, async () => {
    const res = await axios.get('https://quoc-vong-1.hehehehe001.repl.co/api/gai.php');
    return res.data.data;
    
  }));

  const attachments = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));

  const res = await axios.get(`https://api.apibot.repl.co/thinh`);
  var thinh = res.data.data;
  api.sendMessage({
    body: `ðŸŒ¸ ===ã€Ž ð—œð— ð—”ð—šð—˜ ð—¡ð˜‚ð—±ð—² ã€===ðŸŒ¸
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
[ðŸŽŠ] â†’ ð—§ð—µð—¶Ìð—»ð—µ : ${thinh}
[ðŸ–¤] â†’ ð—”Ì‰ð—»ð—µ ð—±ð˜‚Ì ð—°ð˜‚Ì‰ð—® ð—¯ð—®Ì£ð—» ð—¯ð—²Ì‚ð—» ð—±ð˜‚Ì›ð—¼Ì›Ìð—¶
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
âš ï¸ ð—”Ì‰ð—»ð—µ ð˜€ð—²Ìƒ ð—¿ð—® ð—»ð—´ð—®Ì‚Ìƒð˜‚ ð—»ð—µð—¶ð—²Ì‚ð—» ð˜ð˜‚Ì›Ì€ ðŸ­ => ðŸ² ð—®Ì‰ð—»ð—µ`,
    attachment: attachments
  }, threadID);
};