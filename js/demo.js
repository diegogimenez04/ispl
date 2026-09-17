(function () {
  "use strict";

  var translations = {
    es: {
      "demo.back": "← Volver a las demos",
      "demo.label": "Demos",
      "demo.title": "Así se ve la herramienta en acción",
      "demo.subtitle": "Visualizaciones reales de los modelos corriendo sobre datos de planta.",
      "demo.sim_title": "Simulador de depósito",
      "demo.sim_desc": "Simula el depósito hora a hora y anticipa el faltante de espacio y los quiebres de stock. En el caso de una embotelladora detectó, siete horas antes, que el plan pedía 24 pallets y solo había 15.",
      "demo.carga_title": "Optimizador de carga de camiones",
      "demo.carga_desc": "Diseña la carga ajustada a la flota disponible, respetando peso, largo, estabilidad y carga por eje. El plan diario pasó de 2 horas a 76 segundos, con 99,1% de ocupación promedio.",
      "footer.tag": "Ingeniería de Sistemas de Procesos y Logística",
      "footer.rights": "Todos los derechos reservados."
    },
    en: {
      "demo.back": "← Back to demos",
      "demo.label": "Demos",
      "demo.title": "See the tool in action",
      "demo.subtitle": "Real visualizations of the models running on plant data.",
      "demo.sim_title": "Warehouse simulator",
      "demo.sim_desc": "Simulates the warehouse hour by hour and anticipates space shortages and stockouts. In a bottler's case, it detected seven hours ahead that the plan called for 24 pallets and only 15 were available.",
      "demo.carga_title": "Truck loading optimizer",
      "demo.carga_desc": "Designs the load to fit the available fleet, respecting weight, length, stability, and axle load. Daily planning went from 2 hours to 76 seconds, with 99.1% average occupancy.",
      "footer.tag": "Process Systems and Logistics Engineering",
      "footer.rights": "All rights reserved."
    }
  };

  var STORAGE_KEY = "ispl-lang";
  var currentLang = localStorage.getItem(STORAGE_KEY) || "es";

  function applyLang(lang) {
    var dict = translations[lang] || translations.es;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    document.title = (lang === "en" ? "Demos" : "Demos") + " — ISPL";

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  applyLang(currentLang);

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
