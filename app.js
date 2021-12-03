require('dotenv').config();

const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
const TelegramBot = require('node-telegram-bot-api');

const options = {
  polling: true,
};
const bot = new TelegramBot(TOKEN, options);

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, (msg, match) => {
  const resp = match[1];
  bot.sendMessage(msg.chat.id, resp);
});
