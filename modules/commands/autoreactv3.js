const fs = require("fs");
module.exports.config = {
        name: "autoreactv3",
  version: "1.0.0",
        hasPermssion: 0,
        credits: "Minami Tatsuo",
        description: "\u0041\u0075\u0074\u006f \u0072\u0065\u0061\u0063\u0074\u0069\u006f\u006e \u006d\u0061\u0064\u0065 \u0062\u0079 \u004d\u0069\u006e\u0061\u006d\u0069 \u0054\u0061\u0074\u0073\u0075\u006f",
        usePrefix: true,
        commandCategory: "no prefix",
        usages: "noprefix",
    cooldowns: 0,
};
 
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body.toLowerCase();
  if (this.config.credits != '\u004d\u0069\u006e\u0061\u006d\u0069 \u0054\u0061\u0074\u0073\u0075\u006f') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » \u0043\u0072\u0065\u0064\u0069\u0074\u0073 \u0068\u0061\u0073 \u0062\u0065\u0065\u006e \u0063\u0068\u0061\u006e\u0067\u0065\u0064\u0021 \u0053\u0074\u006f\u0070 \u004e\u006f\u0077\u0021'+ global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] \u0053\u0054\u004f\u0050 \u0043\u0048\u0041\u004e\u0047\u0049\u004e\u0047 \u0043\u0052\u0045\u0044\u0049\u0054\g \u0049\u0044\u0049\u004f\u0054 ' , event.threadID, event.messageID);
      }
  if (haha.includes("lol") || haha.includes("lmao") || haha.includes("haha") || haha.includes("xd") || haha.includes("puta") || haha.includes("gagu") || haha.includes("tanga") || haha.includes("tanginamo") || haha.includes("hayup") || haha.includes("bobo") || haha.includes("iyot") || haha.includes("eut") || haha.includes("kantot") || haha.includes("gago")){
                 return api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("aray") || haha.includes("hays") || haha.includes("sakit") || haha.includes("ouch") || haha.includes("hurt") || haha.includes("please") || haha.includes("😢") || haha.includes("😔") || haha.includes("🥺") || haha.includes("sad")){
      return  api.setMessageReaction("😢", event.messageID, (err) => {}, true);
}
  if (haha.includes("wow") || haha.includes("luh") || haha.includes("sheesh") || haha.includes("damn") || haha.includes("yes") || haha.includes("weh") || haha.includes("loh") || haha.includes("hala") || haha.includes("lah") || haha.includes("what") || haha.includes("omg")){
    return api.setMessageReaction("😮", event.messageID, (err) => {}, true)
        }
  if (haha.includes("spam") || haha.includes("spammer")){
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    api.sendMessage("wag spam log fblat", event.threadID,event.messageID);
  }
 /* if (haha.includes("bot") || haha.includes("robot")){
    api.sendMessage("I'm here", event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: 377954575923640}, event.threadID);
      }, 100)
    }, event.messageID)
} */
  if (haha.includes("kiss") || haha.includes("kiss")){
    api.sendMessage("kiss ko pekpek mo hehe", event.threadID, event.messageID)
  }
  if (haha.includes("ano?") || haha.includes("ano")){
    api.sendMessage("anonas", event.threadID, event.messageID)
  }
  if (haha.includes("naneto") || haha.includes("nugagawen")){
    api.sendMessage("tangina malay ko sayo", event.threadID, event.messageID)
 }
    if (haha.includes("command") || haha.includes("command not found")){
    api.sendMessage("bat may ibang bot kayo di paba ako sapat?", event.threadID, event.messageID)
 }
    if (haha.includes("iyot") || haha.includes("eut")){
    api.sendMessage("tanginamo bisakol", event.threadID, event.messageID)
 }
      if (haha.includes("tite") || haha.includes("etits")){
    api.sendMessage("anong etits tangina neto -1 ka salangit", event.threadID, event.messageID)
 }
    if (haha.includes("pepe") || haha.includes("puke")){
    api.sendMessage("langsa ng bibig mo parang puke mo", event.threadID, event.messageID)
      }
    if (haha.includes("puta") || haha.includes("pota")){
    api.sendMessage("potapepe", event.threadID, event.messageID)
  }
  if (haha.includes("bai") || haha.includes("bai na bai")){
    api.sendMessage("guard, may bisakol dito", event.threadID, event.messageID)
  }
if (haha.includes("to the moon") || haha.includes("moon")){
    api.sendMessage("roadtrip", event.threadID, event.messageID)
}
    if (haha.includes("sakit") || haha.includes("😭")){
    api.sendMessage("lika rito higa ka sa abs ko comfort kita", event.threadID, event.messageID)
}
    if (haha.includes("ganda ko") || haha.includes("pogi ko")){
    api.sendMessage("sana all, ikaw na", event.threadID, event.messageID)
}
  if (haha.includes("umay") || haha.includes("umayed")){
    api.sendMessage("umayed talaga pag wala kang tatay", event.threadID, event.messageID)
}
    if (haha.includes("missu") || haha.includes("i miss her")){
    api.sendMessage("tigas naman ng mukha mo", event.threadID, event.messageID)
}
      if (haha.includes("niggas") || haha.includes("nigga")){
    api.sendMessage("nanay mo nigga", event.threadID, event.messageID)
}
      if (haha.includes("bakit") || haha.includes("baket")){
    api.sendMessage("pwet mo may rocket🚀🚀🚀", event.threadID, event.messageID)
}
    if (haha.includes("naknam") || haha.includes("crush")){
    api.sendMessage("edi wow lugaw", event.threadID, event.messageID)
}
if (haha.includes("kick") || haha.includes("remove")){
    api.sendMessage("ikaw nalang kaya ikick tutal wala ka namang dulot", event.threadID, event.messageID)
}
  if (haha.includes("grabe") || haha.includes("totoo")){
    api.sendMessage("tagos hanggang hapunan", event.threadID, event.messageID)
}
  if (haha.includes("loveu") || haha.includes("ilove you")){
    api.sendMessage("loveumore, ra iyot na", event.threadID, event.messageID)
}
      if (haha.includes("ako nalang") || haha.includes("kala ko ako lang")){
    api.sendMessage("wala ka bang magulang na nag mamahal sa’yo", event.threadID, event.messageID)
}
    if (haha.includes("bold") || haha.includes("porn")){
    api.sendMessage("anong bold tanginamo manyakol", event.threadID, event.messageID)
}
  if (haha.includes("tanginamo") || haha.includes("tangina")){
    api.sendMessage("tanginamo rin kaya ka iniwan ng tatay mo e", event.threadID, event.messageID)
      }
if (haha.includes("sino") || haha.includes("onis")){
    api.sendMessage("sinondot", event.threadID, event.messageID)
      }
if (haha.includes("roadtrip") || haha.includes("road")){
    api.sendMessage("broom broom", event.threadID, event.messageID)
}
  if (haha.includes("skr") || haha.includes("skkr")){
    api.sendMessage("zoom zoom", event.threadID, event.messageID)
      }
if (haha.includes("zoom") || haha.includes("zoom zoom")){
    api.sendMessage("sa fake, no room", event.threadID, event.messageID)
      }
if (haha.includes("iyel") || haha.includes("iyel")){
    api.sendMessage("haha ghinost ni gab😹😹🫵🏻", event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: 1959396170995607}, event.threadID);
      }, 100)
    }, event.messageID)
      }
}
        module.exports.run = function({ api, event, client, __GLOBAL }) {
                                                                                                                                                                                                 }