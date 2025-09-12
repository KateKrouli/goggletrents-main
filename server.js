const express = require("express");
const axios = require("axios");
const googleTrends = require('google-trends-api');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = "9455fa9a233f46f290770aa1018c93e6"; // вставьте ваш ключ

app.use(express.static("dist")); // Добавь эту строку

// Кастомные новости
const customNews = [
  {
    title: "Галацасарай выиграл важный матч!",
    description: "Вчера Галацасарай победил в турецкой лиге со счетом 3:1.",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Fatih_Terim.jpg",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/10/Galatasaray_Logo.png",
    publishedAt: new Date().toISOString()
  },
  {
    title: "Интервью с тренером Галацасарая",
    description: "Главный тренер поделился планами на сезон.",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Fatih_Terim.jpg",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Fatih_Terim.jpg",
    publishedAt: new Date().toISOString()
  }
];


// Популярные запросы (статично)
app.get("/popular", async (req, res) => {
  try {
    const geo = req.query.geo || 'TR';
    const results = await googleTrends.dailyTrends({ geo });

    // Выводим ответ от Google Trends в консоль
    console.log("Google Trends response:", results);

    // Проверяем, что ответ похож на JSON
    if (!results.trim().startsWith('{')) throw new Error("Google Trends returned non-JSON");

    const data = JSON.parse(results);
    const queries = data.default.trendingSearchesDays[0].trendingSearches.map(item => item.title.query);
    res.json(queries);
  } catch (err) {
    console.error("Google Trends error:", err.message);
    res.json([
      "Galatasaray",
      "Fenerbahce",
      "UEFA",
      "Champions League",
      "Messi",
      "Ronaldo",
      "Bitcoin",
      "Ethereum"
    ]);
  }
});

// Новости по теме
app.get("/news", async (req, res) => {
  try {
    const topic = req.query.q || "Türkiye spor";
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(topic)}&apiKey=${API_KEY}`;
    const response = await axios.get(url);

    let articles = response.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      imageUrl: article.urlToImage,
      publishedAt: article.publishedAt
    }));

    // Вставляем кастомные новости на первую и третью позиции
    articles = [customNews[0], ...articles];
    if (articles.length >= 2) {
      articles.splice(2, 0, customNews[1]);
    } else {
      articles.push(customNews[1]);
    }

    res.json(articles);
  } catch (err) {
    console.error(err);
    // Возвращаем только кастомные новости при ошибке
    res.json(customNews);
  }
});

// Новый маршрут для всех популярных запросов
app.get("/popular/all", (req, res) => {
  res.json({
    turkey: [
      "UEFA",
      "Champions League",
      "Beşiktaş",
      "Trabzonspor"
    ],
    azerbaijan: [
      "Baku",
      "Qarabag FK",
      "Azerbaijan Grand Prix",
      "Nar Mobile"
    ],
    lebanon: [
      "Beirut",
      "Lebanon news",
      "Lebanese cuisine",
      "Rafic Hariri"
    ]
  });
});

app.listen(PORT, () => console.log(`🚀 Сервер запущен: http://localhost:${PORT}`));
