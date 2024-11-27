const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const botResponses = {
  greetings: ["Hi there!", "Hello!", "Hey! How can I assist you?"],
  love: ["I love you too... as a chatbot!", "Aw, that's sweet!","saak mucho lo"],
  goodbye: ["Goodbye! Take care!", "Bye! See you soon!"],
  thanks: ["You're welcome!", "Happy to help!"],
  night: ["Good night! Sweet dreams!", "Nighty night!"],
  morning: ["Good morning! Have a great day!", "Rise and shine!"],
  ok:["okayyy","hmm anything else"],
  movies: {
    kannada: ["KGF", "Kirik Party", "Lucia"],
    english: ["Inception", "Titanic", "Avengers"],
    hindi: ["3 Idiots", "Dangal", "Lagaan"]
  },
  sports: {
    cricket: ["watch the IPL AUCTION 2025 in jio cinema for free","RCB having top players this time","BGT bang"],
    Football: ["Sunil Chhetri helps Bengaluru FC Stage Comeback win Over MOhammedan SC"],
    Kabaddi: ["U Mumba take on Telugu Titans in March 82 of PKL "]
  },
  tv: ["Breaking Bad", "FRIENDS", "Sherlock"],
  games: ["Minecraft", "Call of Duty", "Valorant"],
  musics: {
    kannada: ["maayavi", "Hithalaka karibyada maava", "cheap cheap"],
    english: ["star boy", "unstopable", "shape of you"],
    hindi: ["tum hi ho", "bhekayali", "kesariya"]
  },
  jokes: ["why always engineering students always calm? because they've already survived stress analyis ", "Why was the math book sad? It had too many problems!"]
};

function addChatMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className = sender;
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}

function handleResponse(input) {
  const userMessage = input.toLowerCase();
  let botReply = "I'm not sure how to respond to that.";

  if (["hi", "hello", "hey"].includes(userMessage)) {
    botReply = botResponses.greetings[Math.floor(Math.random() * botResponses.greetings.length)];
  } else if (userMessage === "i love you") {
    botReply = botResponses.love[Math.floor(Math.random() * botResponses.love.length)];
  } else if (["bye", "goodbye"].includes(userMessage)) {
    botReply = botResponses.goodbye[Math.floor(Math.random() * botResponses.goodbye.length)];
  } else if (["thanks", "thank you"].includes(userMessage)) {
    botReply = botResponses.thanks[Math.floor(Math.random() * botResponses.thanks.length)];
  } else if (userMessage.includes("good night")) {
    botReply = botResponses.night[Math.floor(Math.random() * botResponses.night.length)];
  } else if (userMessage.includes("good morning")) {
    botReply = botResponses.morning[Math.floor(Math.random() * botResponses.morning.length)];
  } else if (userMessage.includes("ok")) {
    botReply = botResponses.ok[Math.floor(Math.random() * botResponses.ok.length)];
  } else if (userMessage.includes("movie")) {
    botReply = "Which language? (Kannada, English, Hindi)";
  } else if (["kannada", "english", "hindi"].includes(userMessage)) {
    botReply = botResponses.movies[userMessage].join(", ");
} else if (userMessage.includes("music")) {
    botReply = "Which language? (Kannada, English, Hindi)";
  } else if (["kannada", "english", "hindi"].includes(userMessage)) {
    botReply = botResponses.musics[userMessage].join(", ");
  }else if (userMessage.includes("sports")) {
    botReply = "Which sports? (cricket, football, kabaddi)";
  } else if (["cricket", "football", "kabaddi"].includes(userMessage)) {
        botReply = botResponses.sports[userMessage].join(", ");
  } else if (userMessage.includes("tv")) {
    botReply = botResponses.tv.join(", ");
  } else if (userMessage.includes("game")) {
    botReply = botResponses.games.join(", ");
  } else if (userMessage.includes("joke")) {
    botReply = botResponses.jokes[Math.floor(Math.random() * botResponses.jokes.length)];
  }

  addChatMessage(botReply, "bot");
}

sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addChatMessage(userMessage, "user");
    handleResponse(userMessage);
    userInput.value = "";
  }
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});
