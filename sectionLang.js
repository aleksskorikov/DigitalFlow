
const langObj = {
  UA: {
    packages: {
      title: "Формат участі",
      subtitle: "Діджиталізація, яка масштабує результат",
      list: [
        "<span>Playbook</span> з перевірених методологій масштабування",
        "Повний доступ до <span>бази навчальних курсів</span> та технічних гайдів",
        "<span>Готові сценарії</span> та <span>воркфлоу</span> для автоматизації процесів",
        "<span>Прямі ефіри</span> з розборами та <span>повний архів записів</span> сесій",
        "<span>Участь</span> та <span>Backstage-розбори</span> Growth Levers проєктів",
        "<span>Професійний чат</span> для нетворкінгу та обміну досвідом",
        "<span>Оперативна підтримка</span> та <span>зворотний зв’язок</span> від модераторів"
      ],
      btnPrice: "Членський внесок: $10",
      btnAction: "Стати учасником",
      sectionText: "Долучайся до манімейкінгової екосистеми спільноти"
    }
  },
  EN: {
    packages: {
      title: "Participation Format",
      subtitle: "Digitalization that scales results",
      list: [
        "<span>Playbook</span> of proven scaling methodologies",
        "Full access to <span>training courses library</span> and technical guides",
        "<span>Ready-made scenarios</span> and <span>workflows</span> for process automation",
        "<span>Live sessions</span> with analyses and <span>full archive recordings</span>",
        "<span>Participation</span> and <span>Backstage breakdowns</span> of Growth Levers projects",
        "<span>Professional chat</span> for networking and experience sharing",
        "<span>Operational support</span> and <span>feedback</span> from moderators"
      ],
      btnPrice: "Membership fee: $10",
      btnAction: "Join Now",
      sectionText: "Join the money-making community ecosystem"
    }
  }
};

const careersTexts = {
  UA: {
    title: "Наші",
    subtitle: "пріоритети",
    paragraphs: {
      one: "Value Growth Systems трансформує ваш досвід і перевірені гіпотези в вимірювану Business Value, перетворюючи операційні процеси в масштабовані системи зростання.",
      two: "Архітектура Activity-Based Abstraction агрегує завдання в цілісні стратегічні блоки, трансформуючи операційну діяльність у прозору модель процесу для прийняття рішень щодо масштабування."
    },
    btns: {
      one: "VGS",
      two: "ABA"
    },
    sliders: [
      {
        title: "Toolbox Skills",
        subtitle: "Бібліотека практичних курсів",
        text: "Покрокові матеріали з освоєння інструментів та компетенцій для ефективної роботи в digital."
      },
      {
        title: "Backstage Pass",
        subtitle: "Колекція профільних зустрічей",
        text: "Прямі ефіри та виступи запрошених експертів із аналізом трендів та відповідями на питання учасників."
      },
      {
        title: "Blueprint Lab",
        subtitle: "Каталог реалізованих проєктів",
        text: "Розгляд стратегій, реальних інструментів і готових моделей, які можна адаптувати та впровадити у свою практику."
      }
  
    ]
  },
  EN: {
    title: "Our",
    subtitle: "Priorities",
    paragraphs: {
      one: "Value Growth Systems transforms your experience and proven hypotheses into measurable Business Value, turning operational processes into scalable growth systems.",
      two: "Activity-Based Abstraction architecture aggregates tasks into coherent strategic blocks, transforming operational activities into a transparent process model for scaling decisions."
    },
    btns: {
      one: "VGS",
      two: "ABA"
    },
    sliders: [
      {
        title: "Toolbox Skills",
        subtitle: "Practical courses library",
        text: "Step-by-step materials to master the tools and skills necessary for professional work in digital."
      },
      {
        title: "Backstage Pass",
        subtitle: "Collection of profile meetings",
        text: "Live sessions and presentations of invited experts with trend analysis and participant Q&A."
      },
      {
        title: "Blueprint Lab",
        subtitle: "Catalog of implemented projects",
        text: "Analysis of strategies, real tools, and ready-made models that can be adapted and implemented in your practice."
      }

    ]
  }
};


function updatePackagesLang(language) {
  const obj = langObj[language]?.packages;
  if (!obj) return;

  const section = document.querySelector(".section__packages");
  if (!section) return;

  section.querySelector(".section-title").innerHTML = obj.title;
  section.querySelector(".section-subtitle").innerHTML = obj.subtitle;

  const list = section.querySelector(".section-list");
  list.innerHTML = "";
  obj.list.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-item";
    li.innerHTML = item;
    list.appendChild(li);
  });

  section.querySelector(".btn-price").innerHTML = obj.btnPrice;
  section.querySelector(".btn").innerHTML = obj.btnAction;
  section.querySelector(".section-text").innerHTML = obj.sectionText;
}

function updateCareersLang(lang) {

  const obj = careersTexts[lang];
  if (!obj) return;

  const h2 = document.getElementById("careers__h2");
  const span = document.getElementById("careers__span");
  if (h2) h2.textContent = obj.title;
  if (span) span.textContent = obj.subtitle;

  const paraOne = document.querySelector(".careers__text-one");
  const paraTwo = document.querySelector(".careers__text-two");
  if (paraOne) paraOne.textContent = obj.paragraphs.one;
  if (paraTwo) paraTwo.textContent = obj.paragraphs.two;

  const btnOne = document.querySelector('.careers__btn[data-target="one"]');
  const btnTwo = document.querySelector('.careers__btn[data-target="two"]');
  if (btnOne) btnOne.textContent = obj.btns.one;
  if (btnTwo) btnTwo.textContent = obj.btns.two;

  const sliders = document.querySelectorAll(".carousel__item .slider-text-block");
  sliders.forEach((slider, i) => {
    if (!obj.sliders[i]) return;
    const title = slider.querySelector(".text-block-title");
    const subtitle = slider.querySelector(".text-block-subtitle");
    const text = slider.querySelector(".text-block-text");
    if (title) title.textContent = obj.sliders[i].title;
    if (subtitle) subtitle.textContent = obj.sliders[i].subtitle;
    if (text) text.textContent = obj.sliders[i].text;
  });

//   console.log("[Careers] Секция обновлена", obj);
}


document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "ua";
  updatePackagesLang(savedLang);
});

document.addEventListener('languageChanged', e => {
  updatePackagesLang(e.detail);
});


document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("language") || "ua";
//   console.log("[Careers] Загружен язык из localStorage:", language);
  updateCareersLang(language);

  document.addEventListener("languageChanged", e => {
    const newLang = e.detail || language;
    updateCareersLang(newLang);
  });
});
