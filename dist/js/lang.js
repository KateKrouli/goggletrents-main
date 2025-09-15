(() => {
  // src/js/lang.js
  var translations = {
    en: {
      header: {
        menuHome: "Trending",
        menuAbout: "News",
        menuContact: "About"
      },
      footer: {
        copyright: "All rights reserved."
      },
      main: {
        title: "Go OG \u2014 Follow the Trends",
        description: "A community-driven platform discovering and tracking sports content across MENA.",
        button: "Search Trends & News"
      },
      xbet: {
        title: "Strong Partnerships with a Strong Brand",
        description: "1xBet is a trusted sponsor and business partner of world-renowned clubs, athletes, and technology brands."
      },
      players: {
        title: "Top T\xFCrkiye players",
        digit1: "Player 1",
        digit2: "Player 2",
        digit3: "Player 3"
      },
      secondary: {
        button: "Bet Now"
      },
      infographics: {
        title: "Fast, Easy, Secure \u2014 we're ready for your win",
        item1: "Fast",
        item2: "Easy",
        item3: "Secure",
        desc1: "Create your bet slip in 3 clicks. Live odds update in milliseconds; pages open in < 1 sec.",
        desc2: "60+ payment methods, instant TL deposit/withdrawal. Find thousands of matches and markets in seconds with smart filters.",
        desc3: "Curacao licensed certified betting site. 256-bit SSL, independent audits and responsible gaming policy keep your data safe."
      },
      banners: {
        title: "Start winning now!"
      },
      telegram: {
        title: "Stay Connected \u2014 <span>Join Our Telegram</span>",
        description: "Get the hottest sports stories, trend alerts, and exclusive insights directly in our Telegram channel. Don\u2019t miss out on updates and surprises!",
        button: "Join Telegram"
      }
    },
    tr: {
      header: {
        menuHome: "Ana Sayfa",
        menuAbout: "Hakk\u0131m\u0131zda",
        menuContact: "\u0130leti\u015Fim"
      },
      footer: {
        copyright: "T\xFCm haklar\u0131 sakl\u0131d\u0131r."
      },
      main: {
        title: "Site engellendi, ama kuponun g\xFCvende",
        description: "\xC7al\u0131\u015Fan ba\u011Flant\u0131y\u0131 senin i\xE7in bulduk \u2014 \xFCstelik hesab\u0131na \xF6zel bir bonus haz\u0131rlad\u0131k.",
        button: "Bonusu Al"
      },
      xbet: {
        title: "G\xFC\xE7l\xFC Markayla G\xFC\xE7l\xFC Ortakl\u0131klar",
        description: "1xBet, d\xFCnya \xE7ap\u0131nda tan\u0131nan kul\xFCplerin, sporcular\u0131n ve teknoloji markalar\u0131n\u0131n g\xFCvenilir sponsoru ve i\u015F orta\u011F\u0131d\u0131r."
      },
      players: {
        title: "Top T\xFCrkiye oyuncular\u0131",
        digit1: "Oyuncu 1",
        digit2: "Oyuncu 2",
        digit3: "Oyuncu 3"
      },
      secondary: {
        button: "Bahis Yap"
      },
      infographics: {
        title: "H\u0131zl\u0131, Kolay, G\xFCvenli \u2014 kazanman\u0131z i\xE7in haz\u0131r\u0131z",
        item1: "H\u0131zl\u0131",
        item2: "Kolay",
        item3: "G\xFCvenli",
        desc1: "Bahis kuponunuzu 3 t\u0131kta olu\u015Fturun. Canl\u0131 oranlar milisaniyeler i\xE7inde g\xFCncellenir; sayfalar < 1 sn\u2019de a\xE7\u0131l\u0131r.",
        desc2: "60+ \xF6deme y\xF6ntemi, an\u0131nda TL yat\u0131rma / \xE7ekme. Binlerce ma\xE7 ve marketi ak\u0131ll\u0131 filtrelerle saniyeler i\xE7inde bulun.",
        desc3: "Cura\xE7ao lisansl\u0131 sertifikal\u0131 bahis sitesi. 256-bit SSL, ba\u011F\u0131ms\u0131z denetimler ve sorumlu oyun politikas\u0131yla verileriniz g\xFCvende."
      },
      banners: {
        title: "Kazanmaya \u015Eimdi Ba\u015Fla!"
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
    document.querySelectorAll('[data-i18n="players.title"]').forEach((el) => el.textContent = t.players.title);
    document.querySelectorAll('[data-i18n="players.digit1"]').forEach((el) => el.textContent = t.players.digit1);
    document.querySelectorAll('[data-i18n="players.digit2"]').forEach((el) => el.textContent = t.players.digit2);
    document.querySelectorAll('[data-i18n="players.digit3"]').forEach((el) => el.textContent = t.players.digit3);
    document.querySelectorAll('[data-i18n="secondary.button"]').forEach((el) => el.textContent = t.secondary.button);
    document.querySelectorAll('[data-i18n="header.title"]').forEach((el) => el.textContent = t.header.title);
    document.querySelectorAll('[data-i18n="header.menuHome"]').forEach((el) => el.textContent = t.header.menuHome);
    document.querySelectorAll('[data-i18n="header.menuAbout"]').forEach((el) => el.textContent = t.header.menuAbout);
    document.querySelectorAll('[data-i18n="header.menuContact"]').forEach((el) => el.textContent = t.header.menuContact);
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
    document.querySelectorAll('[data-i18n="infographics.title"]').forEach((el) => el.textContent = t.infographics.title);
    document.querySelectorAll('[data-i18n="infographics.item1"]').forEach((el) => el.textContent = t.infographics.item1);
    document.querySelectorAll('[data-i18n="infographics.item2"]').forEach((el) => el.textContent = t.infographics.item2);
    document.querySelectorAll('[data-i18n="infographics.item3"]').forEach((el) => el.textContent = t.infographics.item3);
    document.querySelectorAll('[data-i18n="infographics.desc1"]').forEach((el) => el.textContent = t.infographics.desc1);
    document.querySelectorAll('[data-i18n="infographics.desc2"]').forEach((el) => el.textContent = t.infographics.desc2);
    document.querySelectorAll('[data-i18n="infographics.desc3"]').forEach((el) => el.textContent = t.infographics.desc3);
    document.querySelectorAll('[data-i18n="banners.title"]').forEach((el) => el.textContent = t.banners.title);
    document.querySelectorAll('[data-i18n="xbet.title"]').forEach((el) => el.textContent = t.xbet.title);
    document.querySelectorAll('[data-i18n="xbet.description"]').forEach((el) => el.textContent = t.xbet.description);
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
