const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const userDataFilePath = path.join(__dirname, 'user.json');

module.exports = {
	config: {
		name: "quiz",
		version: "2.1",
		author: "Kshitiz | ArYAN",
		usePrefix: true,
		role: 0,
		longDescription: {
			en: "Game to earn money and enchance your iq and compete with other players"
		},
		category: "fun",
		guide: {
			en: ".quiz list | top | category"
		}
	},

	onStart: async function ({ event, message, usersData, api, args }) {
		if (args.length === 2 && args[0] === "withdraw") {
			const amount = parseInt(args[1]);
			if (isNaN(amount) || amount <= 0) {
				return message.reply("Please provide a valid amount to withdraw.");
			}

			const userID = event.senderID;
			const userData = await getUserData(userID);
			if (!userData || userData.money < amount) {
				return message.reply("You don't have enough money to withdraw.");
			}

			userData.money -= amount;
			await saveUserData(userID, userData);

			return message.reply(`Successfully withdrew $${amount} from your quiz wallet.`);
		}

		if (args.length === 1 && args[0] === "list") {
			const categories = [
				"gk",
				"music",
				"videogame",
				"naturescience",
				"computerscience",
				"math",
				"mythology",
				"sports",
				"geography",
				"history",
				"politics",
				"art",
				"celebrety",
				"anime",
				"cartoon"
			];
			return message.reply(`👑 Categories:\n\nPlease add a category\nHere's the list of categories:\n==============\n${categories.join('\n')}\n==============\n\nExample usage: .quiz math\n.quiz top >> view the top players`);
		} else if (args.length === 1 && args[0] === "top") {
			const topUsers = await getTopUsers(usersData, api);
			if (topUsers.length === 0) {
				return message.reply("No top players available at the moment.");
			} else {
				const topUsersString = topUsers.map((user, index) => `
╭──────[ ${index + 1} ]──────╮
│ℹ️|Name
│➤ ${user.username}
│
│💰|Balance
│➤ ${user.money}
╰──────────────╯\n\n`).join("\n");
				return message.reply(`👑|Riches\n━━━━━━━━━━━━━━━\n\nTop 20 pro players:\n${topUsersString}`);
			}
		} else if (args.length === 1) {
			const category = args[0].toLowerCase();
			const quizData = await fetchQuiz(category);
			if (!quizData) {
				return message.reply("Failed to fetch quiz question. Please try again later.");
			}

			const { question, options } = quizData;
			const optionsString = options.map((opt, index) => `${String.fromCharCode(65 + index)}.${opt.answer}`).join("\n");

			const sentQuestion = await message.reply(`👑|Question\n━━━━━━━━━━━━━━━\nHere is your question\n\n➤ ${question}\n\n✅|Options\n━━━━━━━━━━━━━━━\n${optionsString}`);

			global.GoatBot.onReply.set(sentQuestion.messageID, {
				commandName: this.config.name,
				messageID: sentQuestion.messageID,
				correctAnswerLetter: quizData.correct_answer_letter
			});

			setTimeout(async () => {
				try {
					await message.unsend(sentQuestion.messageID);
				} catch (error) {
					console.error("Error while unsending question:", error);
				}
			}, 20000); 
		} else {
			const categories = [
				"gk",
				"music",
				"videogame",
				"naturescience",
				"computerscience",
				"math",
				"mythology",
				"sports",
				"geography",
				"history",
				"politics",
				"art",
				"celebrety",
				"anime",
				"cartoon"
			];
			return message.reply(`👑 Categories:\n\nPlease add a category\nHere's the list of categories:\n==============\n${categories.join('\n')}\n==============\n\nExample usage: \n.quiz math\n.quiz top >> view the top players\n.quiz withdraw`);
		}
	},

	onReply: async function ({ message, event, Reply, usersData }) {
		const userAnswer = event.body.trim();
		const correctAnswerLetter = Reply.correctAnswerLetter.toUpperCase();

		if (userAnswer === correctAnswerLetter) {
			const userID = event.senderID;
			await addCoins(userID, 10000);
			await message.reply(`✅|Correct Answer\n━━━━━━━━━━━━━━━\n\nCongratulations! Your answer ${correctAnswerLetter} is correct. You have received 10000 coins.`);
		} else {
			await message.reply(`⛔|Wrong Answer\n━━━━━━━━━━━━━━━\n\nOops! You provided the wrong answer\n\n✅|Correct Answer\n━━━━━━━━━━━━━━━\n\nCorrect answer is\n➤ ${correctAnswerLetter}`);
		}

		try {
			await message.unsend(event.messageID);
		} catch (error) {
			console.error("Error while unsending message:", error);
		}

		const { commandName, messageID } = Reply;
		if (commandName === this.config.name) {
			try {
				await message.unsend(messageID);
			} catch (error) {
				console.error("Error while unsending question:", error);
			}
		}
	}
};

async function fetchQuiz(category) {
	try {
		const response = await axios.get(`https://aryan-apis.onrender.com/api/quiz?category=${category}&apikey=aryan`);
		return response.data.quiz;
	} catch (error) {
		console.error("Error fetching quiz question:", error);
		return null;
	}
}

async function addCoins(userID, amount) {
	let userData = await getUserData(userID);
	if (!userData) {
		userData = { money: 0 };
	}
	userData.money += amount;
	await saveUserData(userID, userData);
}

async function getUserData(userID) {
	try {
		const data = await fs.readFile(userDataFilePath, 'utf8');
		const userData = JSON.parse(data);
		return userData[userID];
	} catch (error) {
		if (error.code === 'ENOENT') {
			await fs.writeFile(userDataFilePath, '{}');
			return null;
		} else {
			console.error("Error reading user data:", error);
			return null;
		}
	}
}

async function saveUserData(userID, data) {
	try {
		const userData = await getUserData(userID) || {};
		const newData = { ...userData, ...data };
		const allUserData = await getAllUserData();
		allUserData[userID] = newData;
		await fs.writeFile(userDataFilePath, JSON.stringify(allUserData, null, 2), 'utf8');
	} catch (error) {
		console.error("Error saving user data:", error);
	}
}

async function getAllUserData() {
	try {
		const data = await fs.readFile(userDataFilePath, 'utf8');
		return JSON.parse(data);
	} catch (error) {
		console.error("Error reading user data:", error);
		return {};
	}
}

async function getTopUsers(usersData, api) {
	const allUserData = await getAllUserData();
	const userIDs = Object.keys(allUserData);
	const topUsers = [];

	for (const userID of userIDs) {
		const userData = allUserData[userID];
		const username = usersData[userID]?.name || "Unknown";
		topUsers.push({ username, money: userData.money });
	}

	return topUsers.sort((a, b) => b.money - a.money).slice(0, 20);
}