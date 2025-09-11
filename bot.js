const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

// Вставь сюда токен своего бота от BotFather
const BOT_TOKEN = "7542870709:AAF_-2ZuZa1ChPWB6P83quA5sIN6xUqmORo";

// Вставь сюда свой ключ NewsAPI
const API_KEY = "9455fa9a233f46f290770aa1018c93e6";

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Кастомные новости
const customNews = [
  {
    title: "Это тестоая новость для проверки бота",
    description: "Это тестоая новость для проверки бота",
    url: "https://picsum.photos/seed/galatasaray1/600/400",
    imageUrl: "https://picsum.photos/seed/galatasaray1/600/400",
    publishedAt: new Date().toISOString()
  },
  {
    title: "Это еще одна тестоая новость для проверки бота",
    description: "Это еще одна тестоая новость для проверки бота",
    url: "https://picsum.photos/seed/galatasaray2/600/400",
    imageUrl: "https://picsum.photos/seed/galatasaray2/600/400",
    publishedAt: new Date().toISOString()
  }
];

// 📌 Функция получения новостей
async function getNews(topic = "Galatasaray") {
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(topic)}&language=tr&sortBy=publishedAt&apiKey=${API_KEY}`;
  const res = await axios.get(url);

  let articles = res.data.articles.map(article => ({
    title: article.title,
    description: article.description,
    url: article.url,
    imageUrl: article.urlToImage,
    publishedAt: article.publishedAt
  }));

  // Вставляем кастомные новости
  articles = [customNews[0], ...articles];
  if (articles.length >= 2) {
    articles.splice(2, 0, customNews[1]);
  } else {
    articles.push(customNews[1]);
  }

  return articles;
}

// Команда /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Привет! ⚡️ Я бот новостей.\nНапиши: `/news Galatasaray` или `/news Messi`",
    { parse_mode: "Markdown" }
  );
});

// Команда /news <запрос>
bot.onText(/\/news (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const query = match[1];

  try {
    const articles = await getNews(query);

    if (!articles.length) {
      bot.sendMessage(chatId, "Новостей не найдено 😢");
      return;
    }

    // Отправляем до 5 новостей
    for (let i = 0; i < Math.min(5, articles.length); i++) {
      const a = articles[i];
      await bot.sendPhoto(chatId, a.imageUrl || "https://picsum.photos/600/400", {
        caption: `*${a.title}*\n${a.description || ""}\n\n[Читать подробнее](${a.url})`,
        parse_mode: "Markdown"
      });
    }
  } catch (err) {
    console.error(err);
    bot.sendMessage(chatId, "Ошибка при загрузке новостей 😢");
  }
});
