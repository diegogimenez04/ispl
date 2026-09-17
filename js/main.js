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
      "about.title": "Un grupo de investigación en optimización de procesos y logística",
      "about.lead": "El Grupo de Ingeniería de Sistemas de Procesos & Logística del IPQA (CONICET — Universidad Nacional de Córdoba) investiga y transfiere métodos de optimización matemática para mejorar sistemas productivos y logísticos.",
      "about.p1": "Aplicamos programación matemática, simulación y analítica de datos a la planificación de la producción, la gestión de depósitos, la carga y distribución y el diseño de cadenas de suministro bajo incertidumbre.",
      "about.p2": "Combinamos investigación de excelencia con implementación real: llevamos las herramientas a la operación, las validamos con datos de planta y publicamos los resultados en revistas científicas internacionales.",
      "about.stat_years": "Años de trayectoria",
      "about.stat_projects": "Proyectos y consultorías",
      "about.stat_members": "Investigadores y colaboradores",
      "about.stat_satisfaction": "Cliente satisfecho",

      "services.label": "Servicios",
      "services.title": "Lo que ofrecemos",
      "services.subtitle": "Soluciones orientadas a resultados a lo largo de toda la cadena de producción y logística.",
      "services.one_t": "Modelado y optimización matemática",
      "services.one_d": "Formulamos y resolvemos modelos de programación matemática (MILP, programación disyuntiva) para decidir sobre producción, carga y distribución.",
      "services.two_t": "Simulación de operaciones",
      "services.two_d": "Simulamos la operación hora a hora en depósitos y despachos para anticipar faltantes de espacio, quiebres de stock y cuellos de botella.",
      "services.three_t": "Optimización de carga y transporte",
      "services.three_d": "Diseñamos la carga en flotas heterogéneas respetando peso, largo, estabilidad y carga por eje, para maximizar la ocupación sin retoques en playa.",
      "services.four_t": "Cadena de suministro bajo incertidumbre",
      "services.four_d": "Definimos dónde ubicar stock y talleres y cuánto inventario por producto y ubicación, con consolidación (risk pooling) y niveles de servicio.",
      "services.five_t": "Planificación de producción y logística",
      "services.five_d": "Integramos producción, depósitos y despachos en un plan factible y evaluamos escenarios cambiando una sola fecha.",
      "services.six_t": "Integración y analítica de datos",
      "services.six_d": "Integramos y normalizamos datos de múltiples sistemas para convertirlos en insumos del modelo y en decisiones basadas en evidencia.",

      "cases.label": "Casos",
      "cases.title": "Problemas reales, resueltos con optimización",
      "cases.subtitle": "Desarrollos aplicados con datos reales de planta, presentados en HackIA · Demo Day 2026.",
      "cases.one_t": "Simulador de depósito",
      "cases.one_d": "Caso: embotelladora de bebidas. En un turno el plan pedía despachar 24 pallets de un producto a las 16:00 y en las estibas había 15: el simulador lo detectó siete horas antes y propuso despachar los 15 disponibles y avisar por la diferencia.",
      "cases.two_t": "Optimizador de carga de camiones",
      "cases.two_d": "Caso: embotelladora con flota tercerizada (camiones de 28 a 31,5 t y 14 a 15,5 m). El plan diario pasó de 2 horas a 76 segundos, las recargas en el piso de playa de 40% a 0 y la ocupación llegó al 99,1% con los ejes siempre en límite.",
      "cases.three_t": "Supply chain con demanda incierta",
      "cases.three_d": "Caso: fábrica de motores eléctricos. Red real de 7 plantas y 27 clientes con 50 tipos de motor: el stock de seguridad se concentró en 2 puntos (en lugar de uno por cliente) y se sumó un taller de reparación para cubrir fallas críticas.",

      "demos.label": "Demos",
      "demos.title": "Así se ve la herramienta en acción",
      "demos.subtitle": "Visualizaciones reales de los modelos corriendo sobre datos de planta.",
      "demos.one_caption": "Simulador de depósito — ocupación hora a hora y alertas de quiebre.",
      "demos.two_caption": "Optimizador de carga de camiones — plan por eje y ocupación de bodega.",

      "team.label": "Equipo humano",
      "team.title": "Las personas detrás de la optimización",
      "team.subtitle": "Un equipo interdisciplinario de ingenieros, investigadores y estudiantes comprometidos con la excelencia.",
      "team.role1": "Dra. Ing. · Investigadora CONICET · Líder del grupo",
      "team.bio1": "Doctora en Ingeniería e Investigadora Independiente del CONICET en el IPQA (UNC). Con más de 15 años de experiencia en optimización matemática e investigación operativa aplicada a producción y logística, lidera el grupo y la transferencia de modelos de decisión a la industria.",
      "team.role2": "PhD · Investigador senior",
      "team.bio2": "Investigador senior especializado en el modelado y la resolución de modelos de optimización, cadenas de suministro, logística y planificación de la producción.",
      "team.role3": "Licenciada en Matemática · Candidata a PhD",
      "team.bio3": "Licenciada en Matemática y candidata a PhD. Combina modelado matemático y simulación de procesos industriales para la toma de decisiones.",
      "team.role4": "Licenciado en Ciencias de la Computación · Candidato a PhD",
      "team.bio4": "Licenciado en Ciencias de la Computación y candidato a PhD. Desarrolla herramientas computacionales, modelos de optimización y análisis de datos aplicados a problemas de producción y logística.",

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
      "nav.services": "Services",
      "nav.team": "Team",
      "nav.contact": "Contact",

      "hero.eyebrow": "Research group",
      "hero.title": "Process Systems and <span>Logistics Engineering</span>",
      "hero.tagline": "We optimize production chains and logistics through science, data, and continuous improvement.",
      "hero.cta_services": "View services",
      "hero.cta_team": "Meet the team",

      "about.label": "Who we are",
      "about.title": "A research group in process and logistics optimization",
      "about.lead": "The Process Systems & Logistics Engineering Group at IPQA (CONICET — National University of Córdoba) researches and transfers mathematical optimization methods to improve production and logistics systems.",
      "about.p1": "We apply mathematical programming, simulation, and data analytics to production planning, warehouse management, loading and distribution, and supply chain design under uncertainty.",
      "about.p2": "We combine research excellence with real implementation: we bring the tools into the operation, validate them with plant data, and publish the results in international scientific journals.",
      "about.stat_years": "Years of experience",
      "about.stat_projects": "Projects and consultancies",
      "about.stat_members": "Researchers and collaborators",
      "about.stat_satisfaction": "Satisfied client",

      "services.label": "Services",
      "services.title": "What we offer",
      "services.subtitle": "Result-driven solutions across the entire production and logistics chain.",
      "services.one_t": "Modeling and mathematical optimization",
      "services.one_d": "We formulate and solve mathematical programming models (MILP, disjunctive programming) to decide on production, loading, and distribution.",
      "services.two_t": "Operations simulation",
      "services.two_d": "We simulate operations hour by hour in warehouses and dispatch to anticipate space shortages, stockouts, and bottlenecks.",
      "services.three_t": "Loading and transportation optimization",
      "services.three_d": "We design loads for heterogeneous fleets respecting weight, length, stability, and axle load, to maximize occupancy with no yard rework.",
      "services.four_t": "Supply chain under uncertainty",
      "services.four_d": "We define where to place stock and workshops and how much inventory per product and location, using consolidation (risk pooling) and service levels.",
      "services.five_t": "Production and logistics planning",
      "services.five_d": "We integrate production, warehouses, and dispatch into a feasible plan and evaluate scenarios by changing a single date.",
      "services.six_t": "Data integration and analytics",
      "services.six_d": "We integrate and normalize data from multiple systems to turn it into model inputs and evidence-based decisions.",

      "cases.label": "Cases",
      "cases.title": "Real problems, solved with optimization",
      "cases.subtitle": "Applied developments with real plant data, presented at HackIA · Demo Day 2026.",
      "cases.one_t": "Warehouse simulator",
      "cases.one_d": "Case: beverage bottler. In one shift the plan called for dispatching 24 pallets of a product at 16:00 and only 15 were on the racks: the simulator detected it seven hours ahead and proposed dispatching the 15 available and flagging the difference.",
      "cases.two_t": "Truck loading optimizer",
      "cases.two_d": "Case: bottler with a third-party fleet (trucks from 28 to 31.5 t and 14 to 15.5 m). Daily planning went from 2 hours to 76 seconds, yard rework from 40% to 0, and occupancy reached 99.1% with axles always within limits.",
      "cases.three_t": "Supply chain under uncertain demand",
      "cases.three_d": "Case: electric motor factory. Real network of 7 plants and 27 customers with 50 motor types: safety stock was concentrated at 2 points (instead of one per customer) and a repair workshop was added to cover critical failures.",

      "demos.label": "Demos",
      "demos.title": "See the tool in action",
      "demos.subtitle": "Real visualizations of the models running on plant data.",
      "demos.one_caption": "Warehouse simulator — hour-by-hour occupancy and stockout alerts.",
      "demos.two_caption": "Truck loading optimizer — axle plan and hold occupancy.",

      "team.label": "Human team",
      "team.title": "The people behind optimization",
      "team.subtitle": "An interdisciplinary team of engineers, researchers, and students committed to excellence.",
      "team.role1": "PhD · CONICET researcher · Group leader",
      "team.bio1": "PhD in Engineering and CONICET Independent Researcher at IPQA (UNC). With over 15 years of experience in mathematical optimization and operations research applied to production and logistics, she leads the group and the transfer of decision models to industry.",
      "team.role2": "PhD · Senior researcher",
      "team.bio2": "Senior researcher specialized in the modeling and solving of optimization models, supply chains, logistics, and production planning.",
      "team.role3": "B.Sc. in Mathematics · PhD candidate",
      "team.bio3": "Holds a B.Sc. in Mathematics and is a PhD candidate, combining mathematical modeling and simulation of industrial processes for decision-making.",
      "team.role4": "B.Sc. in Computer Science · PhD candidate",
      "team.bio4": "Holds a B.Sc. in Computer Science and is a PhD candidate, building computational tools, optimization models, and data analytics applied to production and logistics problems.",

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