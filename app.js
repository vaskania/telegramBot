require('dotenv').config();

const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(TOKEN, {
  polling: true,
});

const links = `<a href="https://github.com/vaskania">Github</a>
<a href="https://www.linkedin.com/in/vasili-nikabadze-614b00139/">LinkedIn</a>
<a href="https://git.foxminded.com.ua/foxstudent100710">GitLab</a>`;

bot.on('message', (msg) => {
  const text = msg.text.toLocaleLowerCase().trim();
  const chatId = msg.chat.id;

  if (text === '/start' || text === '/help') {
    return bot.sendMessage(
      chatId,
      `Hello ${msg.chat.username}, for more information about me please send /about or /links message.`,
      {
        reply_markup: {
          keyboard: [['/about', '/links']],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      },
    );
  }

  if (text === '/about') {
    return bot.sendMessage(chatId, 'My name is Vaskania');
  }

  if (text === '/links') {
    return bot.sendMessage(chatId, links, { parse_mode: 'HTML' });
  }

  return bot.sendMessage(chatId, 'Please send available commands', {
    reply_markup: {
      keyboard: [['/about', '/links']],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
