(function () {
  "use strict";

  var translations = {
    es: {
      "nav.home": "Inicio",
      "nav.about": "Acerca de",
      "nav.research": "Proyectos",
      "nav.team": "Equipo",
      "nav.contact": "Contacto",

      "hero.eyebrow": "Optimización aplicada a la industria",
      "hero.title": "Ingeniería de Sistemas de <span>Procesos y Logística</span>",
      "hero.tagline": "Optimizamos la cadena de producción y la logística mediante ciencia, datos y mejora continua.",
      "hero.cta_research": "Ver proyectos",
      "hero.cta_team": "Conocer el equipo",
      "hero.cta_demos": "Ver demos",

      "about.label": "Quiénes somos",
      "about.title": "Un grupo de investigación en optimización de procesos y logística",
      "about.lead": "El Grupo de Ingeniería de Sistemas de Procesos & Logística del IPQA (CONICET — Universidad Nacional de Córdoba) investiga y transfiere métodos de optimización matemática para mejorar sistemas productivos y logísticos.",
      "about.p1": "Aplicamos programación matemática, simulación y analítica de datos a la planificación de la producción, la gestión de depósitos, la carga y distribución y el diseño de cadenas de suministro bajo incertidumbre.",
      "about.p2": "Combinamos investigación de excelencia con implementación real: llevamos las herramientas a la operación, las validamos con datos de planta y publicamos los resultados en revistas científicas internacionales.",
      "about.stat_years": "Años de trayectoria",
      "about.stat_projects": "Proyectos y consultorías",
      "about.stat_members": "Investigadores y colaboradores",
      "about.stat_satisfaction": "Cliente satisfecho",

      "research.label": "Proyectos",
      "research.title": "Problemas reales, resueltos con optimización",
      "research.subtitle": "De la teoría a la implementación en planta, con datos reales.",
      "research.one_t": "Scheduling y planificación de producción",
      "research.one_d": "Optimización matemática para agendas semanales ejecutables: inicios, fines, secuencias, precedencias y órdenes tardías, asignando mano de obra compartida a los equipos. Considera prioridades, disponibilidad e inactividad de equipos. Integrada en plataforma web con datos de planta e IoT, KPIs y monitoreo del desempeño.",
      "research.two_t": "Transporte, carga y descarga",
      "research.two_d": "La planificación asumía camiones y pallets idénticos, pero la flota tercerizada es heterogénea: el depósito rearmaba el 40% de las cargas en playa, con riesgo de multas por peso por eje. El modelo —programación disyuntiva generalizada— diseña la carga desde la flota disponible ese día, asignando cada pallet a camión y posición con peso, largo, estabilidad y carga por eje. Plan diario en 76 s en vez de 2 h, listo para ejecutar: se carga tal cual llega, sin rearmar y sin camión parado en muelle.",
      "research.three_t": "Cadena de suministro bajo incertidumbre",
      "research.three_d": "Con 50 tipos de motor y criticidad distinta, el stock se replicaba cliente por cliente o cada falla esperaba días un repuesto de planta central; ignorar la incertidumbre dejaba 50% de probabilidad de incumplir. El modelo agrega demanda por zona, concentra el stock de seguridad en 2 depósitos con reparación y calcula el inventario mínimo por motor, ubicación y año según el servicio prometido —la demanda se dedujo del historial de fallas, sin pronóstico previo. Menos inventario total con igual servicio + taller de respaldo ante fallas críticas.",
      "research.four_t": "Explicabilidad en modelos de optimización",
      "research.four_d": "Los planes óptimos se usan poco cuando nadie puede explicar por qué convienen: qué restricción manda, qué pasa si cambia un dato. Desarrollamos métodos que hacen interpretables los resultados —restricciones activas y análisis de sensibilidad— aplicados a nuestros modelos de scheduling, carga y supply chain. Resultados que operación entiende, confía y adopta.",

      "demos.label": "Demos",
      "demos.title": "Así se ven las herramientas en acción",
      "demos.subtitle": "Visualizaciones reales de los modelos corriendo sobre datos de planta.",
      "demos.one_caption": "Simulador de depósito — ocupación hora a hora y alertas de quiebre.",
      "demos.two_caption": "Optimizador de carga de camiones — plan por eje y ocupación de bodega.",
      "demos.full": "Ver demo completa (3 min)",

      "team.label": "Equipo humano",
      "team.title": "Las personas detrás de la optimización",
      "team.subtitle": "Un equipo interdisciplinario de ingenieros, investigadores y estudiantes comprometidos con la excelencia.",
      "team.role1": "Dra. Ing. · Investigadora CONICET · Líder del grupo",
      "team.bio1": "Doctora en Ingeniería e Investigadora Independiente del CONICET en el IPQA (UNC). Con más de 15 años de experiencia en optimización matemática e investigación operativa aplicada a producción y logística, lidera el grupo y la transferencia de modelos de decisión a la industria.",
      "team.role2": "PhD · Investigador senior",
      "team.bio2": "Investigador senior con amplia experiencia en el modelado y la resolución de modelos de optimización matemática, aplicados a cadenas de suministro, logística, planificación de la producción y diseño de redes. Lidera el desarrollo de modelos y su implementación en la industria.",
      "team.role3": "Licenciada en Matemática · Candidata a PhD",
      "team.bio3": "Licenciada en Matemática y candidata a PhD, con experiencia en el modelado matemático y la simulación de sistemas productivos y logísticos. Aplica optimización y análisis de datos para evaluar escenarios y apoyar la toma de decisiones.",
      "team.role4": "Licenciado en Ciencias de la Computación · Candidato a PhD",
      "team.bio4": "Licenciado en Ciencias de la Computación y candidato a PhD. Desarrolla herramientas computacionales, modelos de optimización y análisis de datos aplicados a problemas de producción y logística.",
      "team.role5": "Estudiante de Ciencias de la Computación · Tesis de licenciatura en curso",
      "team.bio5": "Estudiante de Ciencias de la Computación. Actualmente desarrolla su tesis de licenciatura sobre explicabilidad de los resultados de modelos de optimización.",

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
      "contact.error": "No se pudo enviar. Intentá de nuevo o escribinos a ispylogistica@gmail.com.",
      "modal.sent_title": "¡Mensaje enviado!",
      "modal.sent_text": "Gracias por escribirnos. Tu correo se envió correctamente y te responderemos a la brevedad.",
      "modal.error_title": "No se pudo enviar",
      "modal.error_text": "Hubo un problema al enviar el mensaje. Revisá tu conexión e intentá de nuevo, o escribinos directamente.",
      "modal.close": "Entendido",
      "modal.err_network": "No se pudo conectar con el servidor de correo. Si estás probando en local, verificá que el worker esté corriendo (wrangler dev).",
      "modal.err_config": "El servidor no tiene las credenciales configuradas. En local, revisá worker/.dev.vars (RESEND_API_KEY y DEST_EMAIL).",
      "modal.err_send": "El servicio de correo rechazó el envío.",
      "modal.err_input": "Revisá los datos del formulario e intentá de nuevo.",
      "modal.err_origin": "El servidor no permite el origen de esta página.",
      "modal.err_notfound": "El formulario apunta a una URL incorrecta del servidor (falta /api/send).",

      "footer.tag": "Ingeniería de Sistemas de Procesos y Logística",
      "footer.rights": "Todos los derechos reservados."
    },

    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.research": "Projects",
      "nav.team": "Team",
      "nav.contact": "Contact",

      "hero.eyebrow": "Optimization applied to industry",
      "hero.title": "Process Systems and <span>Logistics Engineering</span>",
      "hero.tagline": "We optimize production chains and logistics through science, data, and continuous improvement.",
      "hero.cta_research": "View projects",
      "hero.cta_team": "Meet the team",
      "hero.cta_demos": "See demos",

      "about.label": "Who we are",
      "about.title": "A research group in process and logistics optimization",
      "about.lead": "The Process Systems & Logistics Engineering Group at IPQA (CONICET — National University of Córdoba) researches and transfers mathematical optimization methods to improve production and logistics systems.",
      "about.p1": "We apply mathematical programming, simulation, and data analytics to production planning, warehouse management, loading and distribution, and supply chain design under uncertainty.",
      "about.p2": "We combine research excellence with real implementation: we bring the tools into the operation, validate them with plant data, and publish the results in international scientific journals.",
      "about.stat_years": "Years of experience",
      "about.stat_projects": "Projects and consultancies",
      "about.stat_members": "Researchers and collaborators",
      "about.stat_satisfaction": "Satisfied client",

      "research.label": "Projects",
      "research.title": "Real problems, solved with optimization",
      "research.subtitle": "From theory to plant implementation, with real data.",
      "research.one_t": "Production planning and scheduling",
      "research.one_d": "Mathematical optimization for executable weekly schedules: start/finish times, sequencing, precedence and late orders, assigning shared workforce to equipment. Considers priorities, equipment availability and downtime. Integrated into a web platform with plant/IoT data, KPIs and production monitoring.",
      "research.two_t": "Transportation, loading and unloading",
      "research.two_d": "Planning assumed identical trucks and pallets, but the outsourced fleet is heterogeneous: the warehouse reworked 40% of loads on the floor, risking axle-weight fines. The model —generalized disjunctive programming— designs each load from the fleet actually available that day, assigning every pallet to a truck and position under weight, length, stability and axle-load constraints. Daily plan in 76 s instead of 2 h, ready to execute: loaded as planned, no rework, no truck held at the dock.",
      "research.three_t": "Supply chain under uncertainty",
      "research.three_d": "With 50 motor types of varying criticality, stock was duplicated customer by customer, or each failure waited days for a spare from the central plant; ignoring uncertainty meant a 50% chance of missing the order. The model pools demand by zone, consolidates safety stock in 2 repair-capable depots, and computes minimum inventory per motor, location and year for the promised service —demand inferred from failure history, with no prior forecast. Less total inventory at the same service level + backup shop for critical failures.",
      "research.four_t": "Explainability in optimization models",
      "research.four_d": "Optimal plans go unused when no one can explain why they win: which constraint binds, what happens if data changes. We develop methods that make results interpretable —binding constraints and sensitivity analysis— applied to our scheduling, loading and supply-chain models. Results operations understands, trusts and adopts.",

      "demos.label": "Demos",
      "demos.title": "See the tools in action",
      "demos.subtitle": "Real visualizations of the models running on plant data.",
      "demos.one_caption": "Warehouse simulator — hour-by-hour occupancy and stockout alerts.",
      "demos.two_caption": "Truck loading optimizer — axle plan and hold occupancy.",
      "demos.full": "Watch full demo (3 min)",

      "team.label": "Human team",
      "team.title": "The people behind optimization",
      "team.subtitle": "An interdisciplinary team of engineers, researchers, and students committed to excellence.",
      "team.role1": "PhD · CONICET researcher · Group leader",
      "team.bio1": "PhD in Engineering and CONICET Independent Researcher at IPQA (UNC). With over 15 years of experience in mathematical optimization and operations research applied to production and logistics, she leads the group and the transfer of decision models to industry.",
      "team.role2": "PhD · Senior researcher",
      "team.bio2": "Senior researcher with extensive experience in the modeling and solving of mathematical optimization models, applied to supply chains, logistics, production planning, and network design. Leads model development and its implementation in industry.",
      "team.role3": "B.Sc. in Mathematics · PhD candidate",
      "team.bio3": "B.Sc. in Mathematics and PhD candidate, with experience in the mathematical modeling and simulation of production and logistics systems. Applies optimization and data analytics to evaluate scenarios and support decision-making.",
      "team.role4": "B.Sc. in Computer Science · PhD candidate",
      "team.bio4": "Holds a B.Sc. in Computer Science and is a PhD candidate, building computational tools, optimization models, and data analytics applied to production and logistics problems.",
      "team.role5": "Computer Science student · Bachelor's thesis in progress",
      "team.bio5": "Computer Science student currently working on his bachelor's thesis on explainability of optimization model results.",

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
      "contact.sending": "Sending…",
      "contact.sent": "Message sent! We'll get back to you shortly.",
      "contact.error": "Couldn't send. Please try again or email us at ispylogistica@gmail.com.",
      "modal.sent_title": "Message sent!",
      "modal.sent_text": "Thanks for reaching out. Your email was sent successfully and we'll get back to you shortly.",
      "modal.error_title": "Couldn't send your message",
      "modal.error_text": "Something went wrong while sending. Check your connection and try again, or email us directly.",
      "modal.close": "Got it",
      "modal.err_network": "Couldn't reach the mail server. If you're testing locally, make sure the worker is running (wrangler dev).",
      "modal.err_config": "The server has no credentials configured. Locally, check worker/.dev.vars (RESEND_API_KEY and DEST_EMAIL).",
      "modal.err_send": "The mail service rejected the message.",
      "modal.err_input": "Please review the form fields and try again.",
      "modal.err_origin": "The server doesn't allow this page's origin.",
      "modal.err_notfound": "The form is pointing to a wrong server URL (missing /api/send).",

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

  /* ---------- Demos: reproducir al entrar en pantalla ---------- */

  var demoVideos = document.querySelectorAll(".video-item video");
  if (demoVideos.length) {
    demoVideos.forEach(function (video) {
      video.muted = true;
    });

    if ("IntersectionObserver" in window) {
      var videoObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var video = entry.target;
          if (entry.isIntersecting) {
            var playing = video.play();
            if (playing && playing.catch) playing.catch(function () {});
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.5 });
      demoVideos.forEach(function (video) {
        videoObserver.observe(video);
      });
    } else {
      demoVideos.forEach(function (video) {
        var playing = video.play();
        if (playing && playing.catch) playing.catch(function () {});
      });
    }
  }

  /* ---------- Aviso modal (envío de correo) ---------- */

  var modal = document.getElementById("form-modal");
  var modalTitle = document.getElementById("modal-title");
  var modalText = document.getElementById("modal-text");

  function t(key) {
    var dict = translations[currentLang] || translations.es;
    return dict[key] || key;
  }

  function openModal(state, message) {
    if (!modal) return;
    var ok = state === "ok";
    modalTitle.textContent = t(ok ? "modal.sent_title" : "modal.error_title");
    modalText.textContent = message || t(ok ? "modal.sent_text" : "modal.error_text");
    modal.classList.toggle("modal-error", !ok);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    var okBtn = modal.querySelector(".modal-ok");
    if (okBtn) okBtn.focus();
  }

  function describeError(data, status) {
    var code = data && data.error;
    if (code === "server_misconfigured") return t("modal.err_config");
    if (code === "invalid_input") return t("modal.err_input");
    if (code === "forbidden") return t("modal.err_origin");
    if (code === "not_found") return t("modal.err_notfound");
    if (code === "smtp_failed") {
      return t("modal.err_send") + (data.detail ? " (" + data.detail + ")" : "");
    }
    return t("modal.error_text") + (status ? " [" + status + "]" : "");
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  if (modal) {
    modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });
  }

  /* ---------- Contact form -> Worker SMTP/Resend ---------- */

  var isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  var WORKER_URL = isLocal
    ? "http://localhost:8787/api/send" /* wrangler dev: worker local en puerto 8787 */
    : "https://ispl-smtp.ispl.workers.dev/api/send";

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
      if (submit) submit.disabled = true;
      showStatus(statusEl, "contact.sending", "sending");
      if (submit) submit.textContent = t("contact.sending");

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
          return res
            .json()
            .catch(function () {
              return {};
            })
            .then(function (data) {
              return { ok: res.ok, status: res.status, data: data };
            });
        })
        .then(function (result) {
          if (result.ok && result.data.ok) {
            showStatus(statusEl, "contact.sent", "ok");
            form.reset();
            openModal("ok");
          } else {
            console.error("[ISPL] Error del worker:", result.status, result.data);
            showStatus(statusEl, "contact.error", "error");
            openModal("error", describeError(result.data, result.status));
          }
          if (submit) submit.textContent = originalSubmit;
        })
        .catch(function (err) {
          console.error("[ISPL] No se pudo conectar con el worker:", err);
          showStatus(statusEl, "contact.error", "error");
          openModal("error", t("modal.err_network"));
          if (submit) submit.textContent = originalSubmit;
        })
        .finally(function () {
          if (submit) submit.disabled = false;
        });
    });
  }

  function showStatus(el, key, state) {
    el.textContent = t(key);
    el.className = "form-status " + state;
  }
})();