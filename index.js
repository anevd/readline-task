const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const topics = ["1 - Harry Potter", "2 - Space", "3 - Sport"];

const harryPotterQuestions = {
	"Кто из Уизли погибает во время финальной битвы за Хогвартс?": "Фред Уизли",
	"Как называется семейный дом Уизли?": "Нора",
	"Сколько игроков в команде по квиддичу?": "7",
	"Какое второе имя у Гермионы?": "Джин",
	"Со скольких лет начинается обучение в школе Хогвартс?": "11",
};

const spaceQuestions = {
	"Какая планета ближайшая к Солнцу?": "Меркурий",
	"Сколько планет нашей Солнечной системы состоят из газа": "4",
	"Какая планета в нашей Солнечной системе самая плотная и имеет только один спутник?": "Земля",
	"Какая самая яркая планета на ночном небе?": "Венера",
	"Фобос и Деймос являются спутниками какой планеты?": "Марс",
};

const sportQuestions = {
	"Сколько колец на олимпийском флаге?": "5",
	"Какая страна считается родиной хоккея с шайбой?": "Канада",
	"Столица 22-х зимних Олимпийских игр 2014 года?": "Сочи",
	"В честь какого бога в Древней Греции проводились Олимпийские игры?": "Зевс",
	"В какой игре пользуются самым тяжёлым мячом?": "Баскетбол",
};

function askQuestion(question) {
	return new Promise((resolve, reject) => {
		rl.question(`${question}\n-> `, (answer) => {
			resolve(answer);
		});
	});
}

async function chooseTopic() {
	const userTopic = await askQuestion(`Выберите тему (напишите номер):\n${topics[0]}\n${topics[1]}\n${topics[2]}\n`);
	if (userTopic === "1") {
		await startQuiz(harryPotterQuestions);
	}
	if (userTopic === "2") {
		await startQuiz(spaceQuestions);
	}
	if (userTopic === "3") {
		await startQuiz(sportQuestions);
	}
	rl.close();
}

async function startQuiz(questions) {
	let points = 0;
	for (let [question, answer] of Object.entries(questions)) {
		const userAnswer = await askQuestion(question);
		if (userAnswer.toLowerCase() === answer.toLowerCase()) {
			points += 10;
			console.log("Ваш ответ верный! Вы получаете 10 баллов");
		} else {
			console.log("Ваш ответ неверный!");
		}
	}
	console.log(`Тест завершен. Ваш результат - ${points}/50 баллов`);
}

chooseTopic();
