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
        btn: "Search",
        close: "Cancel"
      },
      header: {
        menuHome: "Trending",
        menuAbout: "News",
        menuContact: "About"
      },
      trends: {
        title: "Top trends across MENA",
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
        btn: "Ara",
        close: "\u0130ptal"
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
      document.querySelectorAll('[data-i18n="search.close"]').forEach((el) => el.textContent = t.search.close);
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
    document.querySelectorAll('[data-i18n="news.viewAll"]').forEach((el) => el.textContent = t.news.viewAll);
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

  // src/js/news.js
  var topNewsSwiper = null;
  async function loadTopTurkeyNews() {
    const res = await fetch("/news?q=Turkey");
    const articles = await res.json();
    const container = document.getElementById("top-news-list");
    if (!container)
      return;
    container.innerHTML = "";
    articles.forEach((article) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `
      <div class="top-news__item">
        <div class="top-news__summary">
          <div class="top-news__country"><img src="images/icon-turkey.webp"> Turkey</div>
          <div class="top-news__date">${article.publishedAt ? new Date(article.publishedAt).toLocaleString() : ""}</div>
        </div>
        <div class="top-news__title"><a href="${article.url}" target="_blank">${article.title}</a></div>
      </div>
    `;
      container.appendChild(slide);
    });
    if (topNewsSwiper) {
      topNewsSwiper.destroy(true, true);
    }
    topNewsSwiper = new Swiper(".top-news__slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesToScroll: 1,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      breakpoints: {
        0: {
          spaceBetween: 6
        },
        768: {
          spaceBetween: 20
        }
      }
    });
  }
  var lastArticles = [];
  async function loadPopularAll() {
    const res = await fetch("/popular/all");
    const data = await res.json();
    const customItems = {
      turkey: {
        text: "Al Ahly",
        url: "https://galatasaray.org/"
      },
      azerbaijan: {
        text: "Al Ahly",
        url: "https://qarabagh.com/"
      },
      lebanon: {
        text: "Al Ahly",
        url: "https://www.lebanon.com/"
      }
    };
    function insertCustomRandomly(arr, customLi) {
      const pos = Math.floor(Math.random() * (arr.length + 1));
      arr.splice(pos, 0, customLi);
      return arr;
    }
    const turkeyUl = document.querySelector(".top-trends__list:nth-child(1) ul");
    if (turkeyUl) {
      turkeyUl.innerHTML = "";
      const lis = data.turkey.map((q) => {
        const li = document.createElement("li");
        li.className = "top-trends__item";
        li.textContent = q;
        li.addEventListener("click", () => loadNews2(q));
        return li;
      });
      const customLi = document.createElement("li");
      customLi.className = "top-trends__item top-trends__item--custom";
      customLi.innerHTML = `<a href="${customItems.turkey.url}" target="_blank">${customItems.turkey.text}</a>`;
      insertCustomRandomly(lis, customLi).forEach((li) => turkeyUl.appendChild(li));
    }
    const azUl = document.querySelector(".top-trends__list:nth-child(2) ul");
    if (azUl) {
      azUl.innerHTML = "";
      const lis = data.azerbaijan.map((q) => {
        const li = document.createElement("li");
        li.className = "top-trends__item";
        li.textContent = q;
        li.addEventListener("click", () => loadNews2(q));
        return li;
      });
      const customLi = document.createElement("li");
      customLi.className = "top-trends__item top-trends__item--custom";
      customLi.innerHTML = `<a href="${customItems.azerbaijan.url}" target="_blank">${customItems.azerbaijan.text}</a>`;
      insertCustomRandomly(lis, customLi).forEach((li) => azUl.appendChild(li));
    }
    const lebUl = document.querySelector(".top-trends__list:nth-child(3) ul");
    if (lebUl) {
      lebUl.innerHTML = "";
      const lis = data.lebanon.map((q) => {
        const li = document.createElement("li");
        li.className = "top-trends__item";
        li.textContent = q;
        li.addEventListener("click", () => loadNews2(q));
        return li;
      });
      const customLi = document.createElement("li");
      customLi.className = "top-trends__item top-trends__item--custom";
      customLi.innerHTML = `<a href="${customItems.lebanon.url}" target="_blank">${customItems.lebanon.text}</a>`;
      insertCustomRandomly(lis, customLi).forEach((li) => lebUl.appendChild(li));
    }
  }
  async function loadNews2(topic) {
    window.loadNews = loadNews2;
    const res = await fetch(`/news?q=${encodeURIComponent(topic)}`);
    const articles = await res.json();
    articles.forEach((a) => {
      if (typeof a.likes === "undefined")
        a.likes = Math.floor(Math.random() * 1e3);
      if (typeof a.views === "undefined")
        a.views = Math.floor(Math.random() * 5e3);
    });
    lastArticles = articles;
    renderNews(articles);
  }
  function renderNews(articles) {
    const containers = document.querySelectorAll(".news__list");
    containers.forEach((container) => {
      container.innerHTML = "";
      if (!articles.length) {
        container.innerHTML = "<p>\u041D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E</p>";
        return;
      }
      articles.forEach((article) => {
        const item = document.createElement("div");
        const isCustom = article.title === "\u0413\u0430\u043B\u0430\u0446\u0430\u0441\u0430\u0440\u0430\u0439 \u0432\u044B\u0438\u0433\u0440\u0430\u043B \u0432\u0430\u0436\u043D\u044B\u0439 \u043C\u0430\u0442\u0447!" || article.title === "\u0418\u043D\u0442\u0435\u0440\u0432\u044C\u044E \u0441 \u0442\u0440\u0435\u043D\u0435\u0440\u043E\u043C \u0413\u0430\u043B\u0430\u0446\u0430\u0441\u0430\u0440\u0430\u044F";
        item.className = "news-item" + (isCustom ? " news-item--custom" : "");
        item.innerHTML = `
        ${article.imageUrl ? `<div class="news-item__image" style="background-image:url(${article.imageUrl})"></div>` : ""}
        <div class="news-item__content">
        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
        <p>${article.description || ""}</p>
        <small>${new Date(article.publishedAt).toLocaleString()}</small>
        </div>
        <div class="news-item__summary">\u{1F44D} \u041B\u0430\u0439\u043A\u0438: ${article.likes ?? 0} | \u{1F441}\uFE0F \u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u044B: ${article.views ?? 0}</div>
      `;
        container.appendChild(item);
      });
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach((input) => {
      let btn = null;
      const form = input.closest(".search-form");
      if (form) {
        btn = form.querySelector(".search-btn, .search-button");
      }
      if (!btn) {
        btn = input.parentElement.querySelector(".search-btn, .search-button");
      }
      if (btn) {
        btn.addEventListener("click", () => {
          const query = input.value.trim();
          if (query)
            loadNews2(query);
        });
      }
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const query = input.value.trim();
          if (query)
            loadNews2(query);
        }
      });
    });
    document.querySelectorAll(".news-index__sort, .sort").forEach((sortBlock) => {
      const list = sortBlock.closest(".search-page, .news-index, .news-block, .main-width");
      let newsList = null;
      if (list) {
        newsList = list.querySelector(".news__list");
      }
      function setActiveSort(btnId) {
        sortBlock.querySelectorAll(".sort__btn").forEach((btn2) => {
          btn2.classList.remove("active");
        });
        const btn = sortBlock.querySelector(`#${btnId}`);
        if (btn)
          btn.classList.add("active");
      }
      const defaultBtn = sortBlock.querySelector("#sort-default");
      if (defaultBtn) {
        defaultBtn.addEventListener("click", () => {
          if (newsList)
            renderNews(lastArticles);
          setActiveSort("sort-default");
        });
      }
      const dateBtn = sortBlock.querySelector("#sort-date");
      if (dateBtn) {
        dateBtn.addEventListener("click", () => {
          const sorted = [...lastArticles].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
          if (newsList)
            renderNews(sorted);
          setActiveSort("sort-date");
        });
      }
      const likesBtn = sortBlock.querySelector("#sort-likes");
      if (likesBtn) {
        likesBtn.addEventListener("click", () => {
          const sorted = [...lastArticles].sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0));
          if (newsList)
            renderNews(sorted);
          setActiveSort("sort-likes");
        });
      }
      const viewsBtn = sortBlock.querySelector("#sort-views");
      if (viewsBtn) {
        viewsBtn.addEventListener("click", () => {
          const sorted = [...lastArticles].sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
          if (newsList)
            renderNews(sorted);
          setActiveSort("sort-views");
        });
      }
    });
    loadPopularAll();
    loadNews2("Galatasaray");
    loadTopTurkeyNews();
    document.querySelectorAll(".top-trends__list ul").forEach((ul) => {
      ul.addEventListener("click", function(e) {
        const li = e.target.closest("li");
        if (!li)
          return;
        const h2 = document.querySelector(".news-index__title h2");
        if (h2 && li.textContent.trim()) {
          h2.textContent = li.textContent.trim();
        }
      });
    });
  });

  // src/js/main.js
  document.addEventListener("DOMContentLoaded", function() {
    const mobileBtn = document.querySelector(".header__mobile-btn");
    const nav = document.querySelector(".header__nav");
    const header = document.querySelector("header");
    const openBtns = document.querySelectorAll(".search-btn");
    if (mobileBtn && nav && header) {
      mobileBtn.addEventListener("click", function() {
        mobileBtn.classList.toggle("close");
        nav.classList.toggle("open");
        header.classList.toggle("nav-open");
      });
    }
    openBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        mobileBtn.classList.remove("close");
        nav.classList.remove("open");
        header.classList.remove("nav-open");
      });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".header__logo");
    logo?.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".main-block")?.classList.remove("hidden");
      document.querySelector(".top-trends")?.classList.remove("hidden");
      document.querySelector(".telegram")?.classList.remove("hidden");
      document.querySelector(".search-page")?.classList.add("hidden");
      document.querySelector(".index-page")?.classList.remove("hidden");
      const newsH22 = document.querySelector(".news__h2");
      if (newsH22)
        newsH22.textContent = "Sports news";
    });
    const mainInput = document.querySelector(".main-block__input");
    const newsH2 = document.querySelector(".news__h2");
    if (mainInput && newsH2) {
      mainInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const query = mainInput.value.trim();
          if (query) {
            newsH2.textContent = query;
            document.querySelector(".main-block")?.classList.add("hidden");
            document.querySelector(".top-trends")?.classList.add("hidden");
            document.querySelector(".telegram")?.classList.add("hidden");
          }
        }
      });
    }
    document.querySelectorAll(".top-trends__list ul").forEach((ul) => {
      ul.addEventListener("click", function(e) {
        const li = e.target.closest("li");
        if (!li)
          return;
        if (newsH2 && li.textContent.trim()) {
          newsH2.textContent = li.textContent.trim();
          document.querySelector(".main-block")?.classList.add("hidden");
          document.querySelector(".top-trends")?.classList.add("hidden");
          document.querySelector(".telegram")?.classList.add("hidden");
        }
      });
    });
    document.querySelectorAll(".search-popup").forEach((popup) => {
      const openBtns = document.querySelectorAll(".search-btn");
      const closeBtns = popup.querySelectorAll(".search-popup__close");
      const container = popup.querySelector(".search-popup__container");
      openBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          popup.classList.add("open");
        });
      });
      closeBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          popup.classList.remove("open");
        });
      });
      if (container) {
        popup.addEventListener("click", (e) => {
          if (!container.contains(e.target)) {
            popup.classList.remove("open");
          }
        });
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const allNewsBtn = document.querySelector(".all-news-btn");
    const newsList = document.querySelector(".news__list--index");
    allNewsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (newsList) {
        newsList.querySelectorAll(".news-item").forEach((item, index) => {
          if (index >= 16) {
            item.style.display = "flex";
          }
        });
        allNewsBtn.style.display = "none";
      }
    });
  });
  async function showRandomTrendsInPopup() {
    try {
      const res = await fetch("/popular/all");
      const data = await res.json();
      const allTrends = [...data.turkey || [], ...data.azerbaijan || [], ...data.lebanon || []];
      const randomTrends = [];
      const used = /* @__PURE__ */ new Set();
      while (randomTrends.length < 3 && allTrends.length) {
        const idx = Math.floor(Math.random() * allTrends.length);
        if (!used.has(allTrends[idx])) {
          randomTrends.push(allTrends[idx]);
          used.add(allTrends[idx]);
        }
      }
      const ul = document.querySelector("#search-requests ul");
      if (ul) {
        ul.innerHTML = "";
        randomTrends.forEach((trend) => {
          const li = document.createElement("li");
          const span = document.createElement("span");
          span.textContent = trend;
          li.appendChild(span);
          ul.appendChild(li);
        });
      }
    } catch (e) {
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".search-popup");
    const indexPage = document.querySelector(".index-page");
    const searchPage = document.querySelector(".search-page");
    const newsH2 = document.querySelector(".news__h2");
    if (popup) {
      let updateBtnState = function() {
        if (btn && input) {
          btn.disabled = !input.value.trim();
        }
      };
      showRandomTrendsInPopup();
      const ul = popup.querySelector("#search-requests ul");
      const input = popup.querySelector("#search-popup-input");
      const btn = popup.querySelector(".search-popup__btn");
      if (ul) {
        ul.addEventListener("click", function(e) {
          const li = e.target.closest("li");
          if (li && input) {
            input.value = li.textContent.trim();
            updateBtnState();
            if (newsH2)
              newsH2.textContent = li.textContent.trim();
          }
        });
      }
      if (input) {
        let handleSearchPopup = function() {
          const query = input.value.trim();
          if (query) {
            loadNews(query);
            popup.classList.remove("open");
            if (indexPage) {
              indexPage.classList.add("hidden");
            }
            if (searchPage) {
              searchPage.classList.remove("hidden");
            }
            if (newsH2)
              newsH2.textContent = query;
            document.querySelector(".main-block")?.classList.add("hidden");
            document.querySelector(".top-trends")?.classList.add("hidden");
            document.querySelector(".telegram")?.classList.add("hidden");
          }
        };
        input.addEventListener("input", updateBtnState);
        updateBtnState();
        btn.addEventListener("click", handleSearchPopup);
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            handleSearchPopup();
          }
        });
      }
    }
  });
})();
