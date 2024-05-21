module.exports.config = {

        name: "amag",

        version: "1.0.0",

        hasPermssion: 0,

        credits: "tq.info",//Ai viết mdl quên mẹ rồi nên t thay thành tên t !! Tất cả video dược up bởi tq.info

        description: "RanDom Video Gái",
        usePrefix: true,

        commandCategory: "no prefix",

        usages: "Gái",

        cooldowns: 0,

        denpendencies: {

                "fs-extra": "",

                "request": ""

                

  }

};

module.exports.handleEvent = async ({ api, event, Threads }) => {

  if (event.body.indexOf("amag")==0 ||

event.body.indexOf("lc")==0 )

//Thay (tên gọi)theo sở thích

//[ Lưu ý !! Không được để trống ( Tên gọi )

//Hoặc có thể xoá bớt [event.body.indexOf(")==0 ]

{

    const axios = global.nodemodule["axios"];

const request = global.nodemodule["request"];

const fs = global.nodemodule["fs-extra"];

    var link = [ "https://i.imgur.com/r7XqYyv.gif",

"https://i.imgur.com/r7XqYyv.gif",
           ];

     var callback = () => api.sendMessage({body:``,attachment:fs.createReadStream(__dirname + "/cache/1.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.gif"), event.messageID);  

      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.gif")).on("close",() => callback());

}

                                                                                                         }

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {


   };