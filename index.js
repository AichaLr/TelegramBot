// Dependencies
const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const port = 80;
const url = "https://api.telegram.org/bot";
const apiToken = "5797875324:AAEKAMVIVpEs_sIgUJAf7h6Fyp2ssKV3P9o";
// Configurations
app.use(bodyParser.json());
// Endpoints
app.post("/", (req, res) => {
  const chatId = req.body.message.chat.id;
  const sentMessage = req.body.message.text;
  console.log(sentMessage);
  const bot_welcome =
    " Welcome to coolAvatar bot, the bot is using the service from http://avatars.adorable.io/ to generate cool looking avatars based on the name you enter so please enter a name and the bot will reply with an avatar for your name.";
  var text;
  // Regex for hello
  //if (sentMessage.match(/hello/)) {
  if (sentMessage === "hello") {
    console.log("it beeen hello");
    text = "hello back 👋";
  } else if (sentMessage === "/start") {
    text = bot_welcome;
  }
  axios
    .post(`${url}${apiToken}/sendMessage`, {
      chat_id: chatId,
      text: text,
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.send(error);
    });

  // if no hello present, just respond with 200
  // res.status(200).send({});
});
// Listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
