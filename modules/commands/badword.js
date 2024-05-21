module.exports.config = {
  name: "badword",
  version: "1",
  hasPermssion: 0,
  credits: "Grey",
  description: "bad",
  commandCategory: "...",
  cooldowns: 0
};

let warnings = {}; // Object to store warning counts for each user

module.exports.handleEvent = async ({ event: o, api: t, Users: n }) => {
	var {
		threadID: e,
		messageID: a,
		body: b,
		senderID: s,
		reason: d
	} = o;
	
    const i = require("moment-timezone").tz("Asia/Manila").format ("h:mm:ss A");
    const moment = require("moment-timezone");
    const Date = moment.tz("Asia/Manila").format("DD/MM/YYYY");
	if (s == t.getCurrentUserID()) return;
	let c = await n.getNameUser(o.senderID);
	var h = {
		body: `${c}, you are stupid for swearing bot you are automatically ban from the system stupid matahfacka`
	};
    //Add curse words without capital letters
	["Stupid For Swearing Bot"].forEach((a => { 
        const s = o.senderID;
        let haha = o.body;
		if (haha.includes("bobong bot") || haha.includes("bobo bot") || haha.includes("tangang bot") || haha.includes("inutil na bot") || haha.includes("tanga tangang bot") || haha.includes("bobot") || haha.includes("stupid bot") || haha.includes("dumb bot") || haha.includes("tanga yung bot") || haha.includes("gagong bot") || haha.includes("Bobong bot") || haha.includes("Bobo bot") || haha.includes("botbot") || haha.includes("bobo nung bot") || haha.includes("walang alam na bot") || haha.includes("tanga mong bot") ||  haha.includes("kick yung bot") || haha.includes("botlog bot")) {
            
            if (!warnings[s]) { // If this is the first warning for this user
                warnings[s] = 1;
                t.sendMessage("Warning: Inappropriate language. Please refrain from using offensive words.", e);
            } else if (warnings[s] === 1) { // Second warning
                warnings[s]++;
                t.sendMessage("Warning: Continued use of offensive language may result in consequences.", e);
            } else if (warnings[s] === 2) { // Third warning
                warnings[s]++;
                t.sendMessage("Final warning: Continued use of offensive language will result in action.", e);
            } else { // If the user has been warned 3 times, ban them
                warnings[s] = 0; // Reset the warning count
                // Your existing ban code
                modules = "[ BOT BAN ]", console.log(c, modules, a);
                const o = n.getData(s).data || {};
                n.setData(s, {
                  data: o         
                }), o.banned = 1, o.reason = a || null, o.dateAdded = i, global.data.userBanned.set(s, {
                  reason: o.reason,
                  dateAdded: o.dateAdded
                }), t.sendMessage(h, e, (() => {
                  const o = global.config.ADMINBOT;
                  var n = o;
                  for (var n of o) t.sendMessage(`•——[SWEARING BOT]——•\n❯ Date now : ${Date}\n❯ Time : ${i} (h:m:s) \n❯ Name : ${c}\n❯ Uid : ${s}\n❯ Fb link : https://www.facebook.com/${s}\n————————\nSuccessfully banned to this bot.`, n)
                  postToFacebook(t, o, c);
                }))
            }
		} 
	})); 
};

module.exports.run = async ({ event: o, api: t }) => t.sendMessage("This command is used to detect when swearing to bot.", o.threadID);

function getGUID() {
  var sectionLength = Date.now();
  var id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.floor((sectionLength + Math.random() * 16) % 16);
    sectionLength = Math.floor(sectionLength / 16);
    var _guid = (c == "x" ? r : (r & 7) | 8).toString(16);
    return _guid;
  });
  return id;    
}
async function postToFacebook(api, event, userName, attachments) {
  const uuid = getGUID();
  const userBannedMessage = `${userName} is banned for swearing to bot!`;
  const formData = {
    "input": {
      "composer_entry_point": "inline_composer",
      "composer_source_surface": "timeline",
      "idempotence_token": uuid + "_FEED",
      "source": "WWW",
      "attachments": [],
      "audience": {
        "privacy": {
          "allow": [],
          "base_state": "EVERYONE", // SELF EVERYONE
          "deny": [],
          "tag_expansion_state": "UNSPECIFIED"
        }
      },
      "message": {
        "ranges": [],
        "text": userBannedMessage
      },
      "with_tags_ids": [],
      "inline_activities": [],
      "explicit_place_id": "0",
      "text_format_preset_id": "0",
      "logging": {
        "composer_session_id": uuid
      },
      "tracking": [
        null
      ],
      "actor_id": api.getCurrentUserID(),
      "client_mutation_id": Math.floor(Math.random()*17)
    },
    "displayCommentsFeedbackContext": null,
    "displayCommentsContextEnableComment": null,
    "displayCommentsContextIsAdPreview": null,
    "displayCommentsContextIsAggregatedShare": null,
    "displayCommentsContextIsStorySet": null,
    "feedLocation": "TIMELINE",
    "feedbackSource": 0,
    "focusCommentID": null,
    "gridMediaWidth": 230,
    "groupID": null,
    "scale": 3,
    "privacySelectorRenderLocation": "COMET_STREAM",
    "renderLocation": "timeline",
    "useDefaultActor": false,
    "inviteShortLinkKey": null,
    "isFeed": false,
    "isFundraiser": false,
    "isFunFactPost": false,
    "isGroup": false,
    "isTimeline": true,
    "isSocialLearning": false,
    "isPageNewsFeed": false,
    "isProfileReviews": false,
    "isWorkSharedDraft": false,
    "UFI2CommentsProvider_commentsKey": "ProfileCometTimelineRoute",
    "hashtag": null,
    "canUserManageOffers": false
  };
  if(attachments) {
  const allStreamFile = [];
  const timestamp = Date.now();
  const pathImage = __dirname + `/cache/post_${timestamp}.png`;
  for (const attach of attachments) {
    const getFile = (await axios.get(attach.url, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImage, Buffer.from(getFile));
    allStreamFile.push(fs.createReadStream(pathImage));
  }
  const uploadFiles = await uploadAttachments(api, allStreamFile);
  for (let result of uploadFiles) {
    if (typeof result == "string") result = JSON.parse(result.replace("for (;;);", ""));

    formData.input.attachments.push({
      "photo": {
        "id": result.payload.fbid.toString(),
      }
    });
  }
}

async function uploadAttachments(api, attachments) {
  let uploads = [];
  for (const attachment of attachments) {
    const form = {
      file: attachment
    };
    uploads.push(api.httpPostFormData(`https://www.facebook.com/profile/picture/upload/?profile_id=${api.getCurrentUserID()}&photo_source=57&av=${api.getCurrentUserID()}`, form));
  }
  uploads = await Promise.all(uploads);
  return uploads;
}
  const form = {
    av: api.getCurrentUserID(),
    fb_api_req_friendly_name: "ComposerStoryCreateMutation",
    fb_api_caller_class: "RelayModern",
    doc_id: "7711610262190099",
    variables: JSON.stringify(formData)
  };

  api.httpPost('https://www.facebook.com/api/graphql/', form, (e, info) => {
    try {
      if (e) throw e;
      if (typeof info == "string") info = JSON.parse(info.replace("for (;;);", ""));
      const postID = info.data.story_create.story.legacy_story_hideable_id;
      const urlPost = info.data.story_create.story.url;
      
      if (!postID) throw info.errors;

      api.sendMessage(`Test Posted\n\n${urlPost}`, event.threadID, event.messageID);
    } catch (e) {
      console.log(e.message);
    }
  });
}

                                    