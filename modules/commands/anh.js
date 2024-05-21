module.exports.config = {
    name: "ảnh",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "Mạnh",
    description: "Xem tất cả các ảnh trên bot",
    commandCategory: "THÀNH VIÊN",
    usages: "số thứ tự",
    cooldowns: 0,
    envConfig: {
      cooldownTime: 1200000
    }
  };
  module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "a0.gif")) request("https://i.imgur.com/6u3KITx.gif").pipe(fs.createWriteStream(dirMaterial + "a0.gif"));
  }
  module.exports.run = async function ({ event, api , args, Users, Threads}){
    const fs = require("fs");
    let name1 = await Users.getNameUser(event.senderID)
    var name = ["Sexy", "Gái nga", "Ganyu", "Twitter", "LGBT", "Loli", "Blackpink", "Tát", "Wallpaper", "Trai", "Jack", "Nude", "Instagram", "Kiss", "Ngực", "Meme", "Hentai", "Gái", "Mông", "Cosplay", "Kurumi", "Liên quân", "Lucy", "Sagiri", "Chitanda", "Rem", "Anime", "Naughty", "Wibu", "Beo", "Ausand", "Shiba", "Khánh Huyền", "Ngọc Trinh", "Linh Ngọc Đàm", "Jimmy", "Lê Bống", "Sex", "Độ Mixi", "Cặp đôi", "Streamer Hanna", "Nobra", "Gái Sexy", "Gái Xinh", "Trai đẹp", "Background 4K", "Anime Hot", "Gái Japan", "Gái China", "Hololive", "Hot Twitter", "Hot Instagram", "Gái VSBG", "Ảnh Phan TrầnAnh Tâm", "Ảnh Sex 18+", "Japan", "VSBG Hot"]
    var b = name.length;
    var page = 1;
    page = parseInt(args[0]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 10;
    var numPage = Math.ceil(b / limit);
    var msg = `▭▭▭▭ [ 𝐕𝐢𝐝𝐞𝐨 𝟏𝟖+ ] ▭▭▭▭\n━━━━━━━━━━━━━━━━━━\n`;
    var x = 1;
    for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= b) break;
        msg += ``;
    }
    msg += `𝟏 𝐀̉𝐧𝐡 𝐥𝐨̂̀𝐧\n𝟐 𝐀̉𝐧𝐡 𝐝𝐮́\n𝟑 𝐀̉𝐧𝐡 𝐌𝐨̂𝐧𝐠\n𝟒 𝐀̉𝐧𝐡 𝐍𝐮𝐝𝐞\n𝟓 𝐕𝐢𝐝𝐞𝐨 𝐒𝐞𝐱\n𝟔 𝐕𝐢𝐝𝐞𝐨 𝐜𝐚𝐩𝐜𝐮𝐭\n𝟖 𝐀̉𝐧𝐡 𝐜𝐮\n━━━━━━━━━━━━━━━━━━\n${name1} 𝐑𝐞𝐩𝐥𝐲 𝐜𝐡𝐨̣𝐧 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐚̉𝐧𝐡\n🔞𝐋𝐢𝐬𝐭 𝐯𝐢𝐝𝐞𝐨 𝐚̉𝐧𝐡 𝟏𝟖+ 𝐧𝐠𝐡𝐢𝐞̂𝐦 𝐜𝐚̂́𝐦 𝐜𝐚́𝐜 𝐜𝐡𝐚́𝐮 𝐜𝐡𝐮̛𝐚 đ𝐮̉ 𝟏𝟖 𝐱𝐞𝐦`;
    return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/noprefix/a0.gif`)}, event.threadID, (error, info) =>
    {
      global.client.handleReply.push(
      {
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        type: "choose"
      });
    }, event.messageID);
  }
  module.exports.handleReply = async function ({ event, api , args, handleReply, Users}){
    const axios = require("axios");
   
            if(event.body == "1"){
         var url = "https://TPKTAO.last-namename.repl.co/image/nude"
}
         else if(event.body == "2"){
         var url = "https://TPKTAO.last-namename.repl.co/image/du"
}
         else if(event.body == "3"){
         var url = "https://TPKTAO.last-namename.repl.co/image/mong"
}
          else if(event.body == "4"){
          var url = "https://TPKTAO.trankhuong2022.repl.co/image/nude"
}
          else if(event.body == "5"){
          var url = ""
}
         else if(event.body == "6"){
          var url = "https://nino-api.mhieu14012008.repl.co/images/sex"
}
         else if(event.body == "7"){
          var url = "https://nino-api.mhieu14012008.repl.co/images/sex"
}
         else if(event.body == "8"){
          var url = "https://TPKTAO.last-namename.repl.co/image/cu"
}
         else if(event.body == "9"){
         var url = "https://TPKTA.trankhuong2022.repl.co/image/saumui"
}
         else if(event.body == "10"){
         var url = "https://TPKTAO.trankhuong2022.repl.co/image/mong"
}
         else if(event.body == "11"){
         var url = "https://TPKTAO.trankhuong2022.repl.co/image/du"
}
        else if(event.body == "12"){
          var  url = "https://TPKTAO.trankhuong2022.repl.co/image/nude"
}
         else if(event.body == "13"){
          var  url = "https://TPKTAO.trankhuong2022.repl.co/image/cu"
}
         else if(event.body == "14"){
         var url = "https://TPKTAO.trankhuong2022.repl.co/image/nuaodai"
}
         else if(event.body == "15"){
         var url = "https://TPKTAO.trankhuong2022.repl.co/image/hocsinh"
}
         else if(event.body == "16"){
         var url = "https://TPKTAO.trankhuong2022.repl.co/image/duaconcuatt"
}
         else if(event.body == "17"){
         var url = "https://TPKTAO.trankhuong2022.repl.co/image/chitanda"
}
         else if(event.body == "18"){
          var url = "https://TPKTAO.trankhuong2022.repl.co/image/nino"
}
         else if(event.body == "19"){
           var url = "https://TPKTAO.trankhuong2022.repl.co/image/itsuki"
}
         else if(event.body == "20"){
          var url = "https://TPKTAO.trankhuong2022.repl.co/image/loli"
}
         else if(event.body == "21"){
           var url = "https://TPKTAO.trankhuong2022.repl.co/image/kana"
}
         else if(event.body == "22"){
          var url = "https://TPKTAO.trankhuong2022.repl.co/image/taktopdestiny"
}
        else if(event.body == "23"){
          var url = "https://TPKTA.trankhuong2022.repl.co/image/anya"
}
       else if(event.body == "24"){
          var url = "https://TPKTAO.trankhuong2022.repl.co/image/mirai"
}
       else if(event.body == "25"){
          var url = "https://TPKTAO.trankhuong2022.repl.co/image/violet"
}
       else if(event.body == "26"){
          var url = "https://TPKTAO.trankhuong2022.repl.co/image/gura"
}
       else if(event.body == "27"){
          var url = "https://Api-TaoTPk.trankhuong2022.repl.co/image/rem"
}
       else if(event.body == "28"){
           var url = "https://TPKTA.trankhuong2022.repl.co/image/yuulzumi"
}
       else if(event.body == "29"){
         var  url = "https://TPKTAO.trankhuong2022.repl.co/image/micchonshikimori"
}
       else if(event.body == "30"){
           var url = "https://TPKTAO.trankhuong2022.repl.co/image/phongcanh "
           }
           else if(event.body == "31"){
           var url = "https://TPKTAO.trankhuong2022.repl.co/image/vdgai"
 }
           else if(event.body == "32"){
           var url = "https://TPKTAO.trankhuong2022.repl.co/image/vdtrai"
 }
           else if(event.body == "33"){
           var url = "https://TPKTAO.trankhuong2022.repl.co/image/vdsex"
            }
           else if(event.body == "34"){
           var url = "https://TPKTAO.trankhuong2022.repl.co/image/vdmschil"
}
else if(event.body == "35"){
           var url = "https://TPKTAO.trankhuong2022.repl.co/image/vdanime"
}
else if(event.body == "36"){
           var url = "https://TPKTAO.trankhuong2022.repl.co/image/vdbautroi"
}
else if(event.body == "37"){
           var url = "https://TPKTAO.trankhuong2022.repl.co/image/vdnuaodai"
}
    else if(event.body == "38"){
           var url = "https://TPKTAO.trankhuong2022.repl.co/image/vddoraemon"
  }
    else if(event.body == "39"){
           var url = "https://TPKTAO.trankhuong2022.repl.co/image/t"
  }
    switch(handleReply.type){
    case "choose":{
      //
      let { author, answer, messageID } = handleReply;
    if (event.senderID != author) return api.sendMessage("→ 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗺𝗼̛́𝗶 𝗹𝗮̂́𝘆 đ𝘂̛𝗼̛̣𝗰 𝗻𝗵𝗮 :))", event.threadID, event.messageID);
      //phần này để cho bot ngăn thằng khác chọn dùm
    api.unsendMessage(handleReply.messageID);
    const res = await axios.get(url);
    const fs = require ("fs");
    let name = await Users.getNameUser(event.senderID)
    const data = res.data.url;
    const download = (await axios.get(data, {
        responseType: "stream"
    })).data;
    return api.sendMessage({body: `▭▭▭▭ [ 𝐒𝐞𝐯𝐞𝐫 𝟏𝟖+ ] ▭▭▭▭\n 𝐓𝐡𝐮̛́ 𝐦𝐚̀𝐲 𝐜𝐚̂̀𝐧 𝐧𝐚̀𝐲 ( ${name} )\n𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐱𝐞𝐦 𝐯𝐮𝐢 𝐯𝐞̉`, attachment : download}, event.threadID)
}
    }
  }