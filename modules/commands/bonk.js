module.exports.config = {
	name: "bonk",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "hinata",
	description: "blur",
	usePrefix: true,
	commandCategory: "Edit-img",
	usages: "...",
	cooldowns: 5,
	dependencies: {"fs-extra":"","knights-canvas" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) =>  { 
const fs = require('fs');
const knights global.nodemodule["knights-canvas"];
const request = global.nodemodule["node-superfetch"];
var id = Object.keys(event.mentions)[0] || event.senderID;
  var id1 = Object.keys(event.mentions)[1] || event.senderID;
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar1 = (await request.get(`https://graph.facebook.com/${id1}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
const image = await new knights.Bonk()
.setAvatar1(avatar)
.setAvatar2(avatar1)
Discord.MessageAttachment(img);
  var path_gay = __dirname + "/cache/kiss.png";
  fs.writeFileSync(path_gay, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_gay)}, event.threadID, () => fs.unlinkSync(path_gay), event.messageID);
  }