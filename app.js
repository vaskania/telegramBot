const TelegramBot = require('node-telegram-bot-api');

const token = '5026637253:AAEI5tlJjTuk7f0ZugyQJnWl14VbmTnarek';

const bot = new TelegramBot(token, { polling: true });

// eslint-disable-next-line no-console
console.log(bot);
