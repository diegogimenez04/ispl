(function () {
  "use strict";

  var translations = {
    es: {
      "nav.home": "Inicio",
      "nav.about": "Acerca de",
      "nav.services": "Servicios",
      "nav.team": "Equipo",
      "nav.contact": "Contacto",

      "hero.eyebrow": "Grupo de investigación",
      "hero.title": "Ingeniería de Sistemas de <span>Procesos y Logística</span>",
      "hero.tagline": "Optimizamos la cadena de producción y la logística mediante ciencia, datos y mejora continua.",
      "hero.cta_services": "Ver servicios",
      "hero.cta_team": "Conocer el equipo",

      "about.label": "Quiénes somos",
      "about.title": "Un grupo enfocado en la eficiencia de la cadena de valor",
      "about.lead": "Nuestro grupo de investigación aborda la optimización integral de los sistemas de producción y logística, conectando la teoría con soluciones aplicables a la industria.",
      "about.p1": "Combinamos modelado matemático, simulación, análisis de datos y metodologías Lean para identificar oportunidades de mejora y reducir costos, tiempos y desperdicios a lo largo de toda la cadena de suministro.",
      "about.p2": "Trabajamos junto a empresas, universidades y entidades gubernamentales para transferir conocimiento y generar un impacto real en la competitividad de los procesos productivos.",
      "about.stat_years": "Años de trayectoria",
      "about.stat_projects": "Proyectos y consultorías",
      "about.stat_members": "Investigadores y colaboradores",
      "about.stat_satisfaction": "Cliente satisfecho",

      "services.label": "Servicios",
      "services.title": "Lo que ofrecemos",
      "services.subtitle": "Soluciones orientadas a resultados a lo largo de toda la cadena de producción y logística.",
      "services.one_t": "Optimización de procesos",
      "services.one_d": "Identificamos cuellos de botella y rediseñamos procesos para maximizar el rendimiento y minimizar el desperdicio.",
      "services.two_t": "Planificación de la producción",
      "services.two_d": "Programación y balanceo de líneas para alinear la oferta con la demanda real del mercado.",
      "services.three_t": "Cadena de suministro",
      "services.three_d": "Diseño y gestión de cadenas de suministro eficientes, resilientes y orientadas al cliente.",
      "services.four_t": "Lean y mejora continua",
      "services.four_d": "Implementación de metodologías Lean, Kaizen y sistemas de gestión visual para una mejora sostenida.",
      "services.five_t": "Simulación y modelado",
      "services.five_d": "Modelos de simulación para anticipar el comportamiento de los sistemas y evaluar escenarios antes de invertir.",
      "services.six_t": "Análisis de datos",
      "services.six_d": "KPIs y analítica avanzada para tomar decisiones basadas en evidencia.",

      "team.label": "Equipo humano",
      "team.title": "Las personas detrás de la optimización",
      "team.subtitle": "Un equipo interdisciplinario de ingenieros, investigadores y estudiantes comprometidos con la excelencia.",
      "team.role1": "PhD · Coordinadora del grupo",
      "team.bio1": "Doctora e investigadora con más de 15 años de experiencia en optimización matemática e investigación operativa aplicada a sistemas de producción y logística. Referente en la dirección de equipos y en la transferencia de modelos de decisión a la industria.",
      "team.role2": "PhD · Investigador senior",
      "team.bio2": "Investigador senior especializado en cadenas de suministro, logística y planificación de la producción.",
      "team.role3": "Licenciada en Matemática · Candidata a PhD",
      "team.bio3": "Licenciada en Matemática y candidata a PhD. Combina modelado matemático y simulación de procesos industriales para la toma de decisiones.",
      "team.role4": "Licenciado en Ciencias de la Computación · Candidato a PhD",
      "team.bio4": "Licenciado en Ciencias de la Computación y candidato a PhD. Desarrolla herramientas digitales y análisis de datos para la mejora continua y la implementación Lean en planta.",

      "contact.label": "Contacto",
      "contact.title": "¿Trabajamos juntos?",
      "contact.subtitle": "Si buscas mejorar la eficiencia de tus procesos productivos o logísticos, escríbenos.",
      "contact.email_label": "Correo:",
      "contact.phone_label": "Teléfono:",
      "contact.location_label": "Ubicación:",
      "contact.name": "Nombre",
      "contact.name_ph": "Tu nombre",
      "contact.email": "Correo electrónico",
      "contact.email_ph": "tu@correo.com",
      "contact.message": "Mensaje",
      "contact.message_ph": "Cuéntanos sobre tu proyecto...",
      "contact.submit": "Enviar mensaje",
      "contact.sending": "Enviando…",
      "contact.sent": "¡Mensaje enviado! Te responderemos a la brevedad.",
      "contact.error": "No se pudo enviar. Intentá de nuevo o escribinos a contacto@ispl.org.",

      "footer.tag": "Ingeniería de Sistemas de Procesos y Logística",
      "footer.rights": "Todos los derechos reservados."
    },

    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.team": "Team",
      "nav.contact": "Contact",

      "hero.eyebrow": "Research group",
      "hero.title": "Process Systems and <span>Logistics Engineering</span>",
      "hero.tagline": "We optimize production chains and logistics through science, data, and continuous improvement.",
      "hero.cta_services": "View services",
      "hero.cta_team": "Meet the team",

      "about.label": "Who we are",
      "about.title": "A group focused on value chain efficiency",
      "about.lead": "Our research group tackles the end-to-end optimization of production and logistics systems, connecting theory with solutions applicable to industry.",
      "about.p1": "We combine mathematical modeling, simulation, data analytics, and Lean methodologies to identify improvement opportunities and reduce costs, lead times, and waste across the entire supply chain.",
      "about.p2": "We work alongside companies, universities, and government entities to transfer knowledge and drive real impact on the competitiveness of production processes.",
      "about.stat_years": "Years of experience",
      "about.stat_projects": "Projects and consultancies",
      "about.stat_members": "Researchers and collaborators",
      "about.stat_satisfaction": "Satisfied client",

      "services.label": "Services",
      "services.title": "What we offer",
      "services.subtitle": "Result-driven solutions across the entire production and logistics chain.",
      "services.one_t": "Process optimization",
      "services.one_d": "We identify bottlenecks and redesign processes to maximize throughput and minimize waste.",
      "services.two_t": "Production planning",
      "services.two_d": "Scheduling and line balancing to align supply with real market demand.",
      "services.three_t": "Supply chain",
      "services.three_d": "Design and management of efficient, resilient, customer-oriented supply chains.",
      "services.four_t": "Lean and continuous improvement",
      "services.four_d": "Implementation of Lean, Kaizen, and visual management systems for sustained improvement.",
      "services.five_t": "Simulation and modeling",
      "services.five_d": "Simulation models to anticipate system behavior and evaluate scenarios before investing.",
      "services.six_t": "Data analytics",
      "services.six_d": "KPIs and advanced analytics.",

      "team.label": "Human team",
      "team.title": "The people behind optimization",
      "team.subtitle": "An interdisciplinary team of engineers, researchers, and students committed to excellence.",
      "team.role1": "PhD · Group coordinator",
      "team.bio1": "PhD researcher with over 15 years of experience in mathematical optimization and operations research applied to production and logistics systems. A leading figure in team leadership and in transferring decision models to industry.",
      "team.role2": "PhD · Senior researcher",
      "team.bio2": "Senior researcher specialized in supply chains, logistics, and production planning.",
      "team.role3": "B.Sc. in Mathematics · PhD candidate",
      "team.bio3": "Holds a B.Sc. in Mathematics and is a PhD candidate, combining mathematical modeling and simulation of industrial processes for decision-making.",
      "team.role4": "B.Sc. in Computer Science · PhD candidate",
      "team.bio4": "Holds a B.Sc. in Computer Science and is a PhD candidate, building digital tools and data analytics for continuous improvement and Lean implementation on the shop floor.",

      "contact.label": "Contact",
      "contact.title": "Shall we work together?",
      "contact.subtitle": "If you want to improve the efficiency of your production or logistics processes, get in touch.",
      "contact.email_label": "Email:",
      "contact.phone_label": "Phone:",
      "contact.location_label": "Location:",
      "contact.name": "Name",
      "contact.name_ph": "Your name",
      "contact.email": "Email address",
      "contact.email_ph": "you@email.com",
      "contact.message": "Message",
      "contact.message_ph": "Tell us about your project...",
      "contact.submit": "Send message",

      "footer.tag": "Process Systems and Logistics Engineering",
      "footer.rights": "All rights reserved."
    }
  };

  var STORAGE_KEY = "ispl-lang";
  var prefersEn = (navigator.language || "en").toLowerCase().startsWith("en");
  var currentLang = localStorage.getItem(STORAGE_KEY) || (prefersEn ? "en" : "es");

  function applyLang(lang) {
    var dict = translations[lang] || translations.es;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    var titleKey = lang === "en" ? "en" : "es";
    document.title = titleKey === "en"
      ? "ISPL — Process Systems and Logistics Engineering"
      : "ISPL — Ingeniería de Sistemas de Procesos y Logística";

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

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

  /* ---------- Header scroll state ---------- */

  var header = document.getElementById("site-header");
  function onScrollHeader() {
    header.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- Mobile nav ---------- */

  var navToggle = document.getElementById("nav-toggle");
  var navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", function () {
    var open = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Active nav link on scroll ---------- */

  if ("IntersectionObserver" in window) {
    var sections = document.querySelectorAll("main section[id]");
    var navLinks = document.querySelectorAll(".nav-menu a[href^='#']");

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
          });
        }
      });
    }, { rootMargin: "-50% 0px -45% 0px" });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ---------- Reveal on scroll ---------- */

  var revealables = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealables.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealables.forEach(function (el) {
      el.classList.add("revealed");
    });
  }

  /* ---------- Footer year ---------- */

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Contact form -> Worker SMTP ---------- */

  var isLocal = location.origin && location.origin.indexOf("localhost") !== -1;
  var WORKER_URL = isLocal
    ? "http://localhost:8787" /* wrangler dev: worker local en puerto 8787 */
    : "https://ispl-smtp.ispl.workers.dev";

  var form = document.querySelector(".contact-form");
  if (form) {
    var submit = form.querySelector('button[type="submit"]');
    var originalSubmit = submit ? submit.textContent : "";
    var statusEl = document.createElement("p");
    statusEl.className = "form-status";
    statusEl.setAttribute("role", "status");
    statusEl.setAttribute("aria-live", "polite");
    if (submit) {
      submit.parentNode.insertBefore(statusEl, submit.nextSibling);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (submit) submit.disabled = true     ;
      var action = currentLang === "en" ? "contact.sending" : "contact.sending";
      var sendingKey = t(action);
      var statusKey = "contact.sending";
      showStatus(statusEl, statusKey, "sending");
      if (submit) submit.textContent = sendingKey;

      var payload = {
        name: form.querySelector("#nombre").value,
        email: form.querySelector("#correo").value,
        message: form.querySelector("#mensaje").value,
      };

      fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { ok: res.ok, data: data };
          });
        })
        .then(function (result) {
          if (result.ok && result.data.ok) {
            showStatus(statusEl, "contact.sent", "ok");
            form.reset();
            if (submit) submit.textContent = originalSubmit;
          } else {
            showStatus(statusEl, "contact.error", "error");
            if (submit) submit.textContent = originalSubmit;
          }
        })
        .catch(function () {
          showStatus(statusEl, "contact.error", "error");
          if (submit) submit.textContent = originalSubmit;
        })
        .finally(function () {
          if (submit) submit.disabled = false;
        });
    });
  }

  function showStatus(el, key, state) {
    var dict = translations[currentLang] || translations.es;
    el.textContent = dict[key] || key;
    el.className = "form-status " + state;
  }
})();