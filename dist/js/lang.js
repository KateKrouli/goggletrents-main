(() => {
  // src/js/lang.js
  var translations = {
    en: {
      sort: {
        "sort-defaul": "Rising",
        "sort-likes": "Hot",
        "sort-date": "New"
      },
      search: {
        title: "Trending",
        placeholderMain: "Search trends and news...",
        placeholder: "Search...",
        trending: "Dashboard",
        btn: "Search"
      },
      header: {
        menuHome: "Trending",
        menuAbout: "News",
        menuContact: "About"
      },
      trends: {
        title: "Top Trends",
        description: "Real-time tracking of the hottest sports topics across "
      },
      news: {
        title: "Sports news",
        viewAll: "View all posts"
      },
      footer: {
        copyright: "All rights reserved."
      },
      main: {
        title: "Go OG \u2014 Follow the Trends",
        description: "A community-driven platform discovering and tracking sports content across MENA.",
        button: "Search Trends & News"
      },
      telegram: {
        title: "Stay Connected \u2014 <span>Join Our Telegram</span>",
        description: "Get the hottest sports stories, trend alerts, and exclusive insights directly in our Telegram channel. Don\u2019t miss out on updates and surprises!",
        button: "Join Telegram"
      }
    },
    tr: {
      sort: {
        "sort-defaul": "Y\xFCkselen",
        "sort-likes": "Pop\xFCler",
        "sort-date": "Yeni"
      },
      search: {
        title: "Trendler",
        placeholderMain: "Trendleri ve haberleri ara...",
        placeholder: "Ara...",
        trending: "Panel",
        btn: "Ara"
      },
      header: {
        menuHome: "Ana Sayfa",
        menuAbout: "Hakk\u0131m\u0131zda",
        menuContact: "\u0130leti\u015Fim"
      },
      trends: {
        title: "En Pop\xFCler Trendler",
        description: "D\xFCnya genelinde en pop\xFCler spor konular\u0131n\u0131n ger\xE7ek zamanl\u0131 takibi"
      },
      news: {
        title: "Spor haberleri",
        viewAll: "T\xFCm g\xF6nderileri g\xF6r\xFCnt\xFCle"
      },
      footer: {
        copyright: "T\xFCm haklar\u0131 sakl\u0131d\u0131r."
      },
      main: {
        title: "Go OG \u2014 Trendleri Takip Et",
        description: "MENA genelinde spor i\xE7eriklerini ke\u015Ffeden ve takip eden topluluk odakl\u0131 bir platform.",
        button: "Bonusu Al"
      },
      telegram: {
        title: "Ba\u011Flant\u0131da Kal\u0131n \u2014 <span>Telegram'a Kat\u0131l\u0131n</span>",
        description: "En s\u0131cak spor hikayeleri, trend uyar\u0131lar\u0131 ve \xF6zel analizler do\u011Frudan Telegram kanal\u0131m\u0131zda. S\xFCrprizleri ve g\xFCncellemeleri ka\xE7\u0131rmay\u0131n!",
        button: "Telegram'a Kat\u0131l"
      }
    }
  };
  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
    setDirection(lang);
  }
  function setDirection(lang) {
    document.documentElement.dir = "ltr";
    document.body.style.textAlign = "";
  }
  function getLanguage() {
    return localStorage.getItem("lang") || "en";
  }
  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t)
      return;
    if (t.search) {
      document.querySelectorAll('[data-i18n="search.title"]').forEach((el) => el.textContent = t.search.title);
      document.querySelectorAll('[data-i18n-placeholder="search.placeholder"]').forEach((el) => el.placeholder = t.search.placeholder);
      document.querySelectorAll('[data-i18n-placeholder="search.placeholderMain"]').forEach((el) => el.placeholder = t.search.placeholderMain);
      document.querySelectorAll('[data-i18n="search.trending"]').forEach((el) => el.textContent = t.search.trending);
      document.querySelectorAll('[data-i18n="search.btn"]').forEach((el) => el.textContent = t.search.btn);
    }
    if (t.sort) {
      document.querySelectorAll('[data-i18n="sort.sort-defaul"]').forEach((el) => el.textContent = t.sort["sort-defaul"]);
      document.querySelectorAll('[data-i18n="sort.sort-likes"]').forEach((el) => el.textContent = t.sort["sort-likes"]);
      document.querySelectorAll('[data-i18n="sort.sort-date"]').forEach((el) => el.textContent = t.sort["sort-date"]);
    }
    document.querySelectorAll('[data-i18n="header.title"]').forEach((el) => el.textContent = t.header.title);
    document.querySelectorAll('[data-i18n="header.menuHome"]').forEach((el) => el.textContent = t.header.menuHome);
    document.querySelectorAll('[data-i18n="header.menuAbout"]').forEach((el) => el.textContent = t.header.menuAbout);
    document.querySelectorAll('[data-i18n="header.menuContact"]').forEach((el) => el.textContent = t.header.menuContact);
    document.querySelectorAll('[data-i18n="trends.title"]').forEach((el) => el.textContent = t.trends.title);
    document.querySelectorAll('[data-i18n="trends.description"]').forEach((el) => el.textContent = t.trends.description);
    document.querySelectorAll('[data-i18n="footer.copyright"]').forEach((el) => el.textContent = t.footer.copyright);
    document.querySelectorAll('[data-i18n="main.title"]').forEach((el) => {
      if (typeof t.main.title === "object" && t.main.title.html) {
        el.innerHTML = t.main.title.html;
      } else {
        el.textContent = t.main.title;
      }
    });
    document.querySelectorAll('[data-i18n="main.description"]').forEach((el) => el.textContent = t.main.description);
    document.querySelectorAll('[data-i18n="main.button"]').forEach((el) => el.textContent = t.main.button);
    document.querySelectorAll('[data-i18n="news.title"]').forEach((el) => el.textContent = t.news.title);
    document.querySelectorAll('[data-i18n="telegram.title"]').forEach((el) => el.innerHTML = t.telegram.title);
    document.querySelectorAll('[data-i18n="telegram.description"]').forEach((el) => el.textContent = t.telegram.description);
    document.querySelectorAll('[data-i18n="telegram.button"]').forEach((el) => el.textContent = t.telegram.button);
  }
  document.addEventListener("DOMContentLoaded", function() {
    const lang = getLanguage();
    applyTranslations(lang);
    setDirection(lang);
  });
  window.setLanguage = setLanguage;
})();
