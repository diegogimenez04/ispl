(function () {
  "use strict";

  var translations = {
    es: {
      "nav.home": "Inicio",
      "nav.about": "Acerca de",
      "nav.investigation": "Investigación",
      "nav.industry": "Industria",
      "nav.courses": "Cursos",
      "nav.team": "Equipo",
      "nav.contact": "Contacto",

      "hero.eyebrow": "Optimización aplicada a la industria",
      "hero.title": "Ingeniería de Sistemas de <span>Procesos y Logística</span>",
      "hero.tagline": "Desarrollamos modelos matemáticos, herramientas digitales y soluciones basadas en datos e inteligencia artificial para mejorar las decisiones en producción y logística.",
      "hero.cta_projects": "Conocer nuestros proyectos",
      "hero.cta_demos": "Explorar demos",
      "hero.visual_label": "Grupo de investigación",
      "hero.visual_title": "ISP&L",
      "hero.visual_alt": "Logotipo de ISP&L con símbolos de almacén, transporte e industria",

      "carousel.label": "Secciones del portafolio",
      "carousel.controls": "Controles del portafolio",
      "carousel.choose_section": "Elegir sección",
      "carousel.previous": "Anterior",
      "carousel.next": "Siguiente",
      "carousel.pause_action": "Pausar reproducción automática",
      "carousel.play_action": "Reanudar reproducción automática",

      "about.label": "Quiénes somos",
      "about.title": "Investigación aplicada a problemas reales",
      "about.summary": "Desarrollamos métodos y herramientas para mejorar sistemas productivos y logísticos mediante investigación, modelado matemático y análisis de datos.",
      "about.lead": "Convertimos necesidades de negocio en herramientas inteligentes para tomar mejores decisiones.",
      "about.p1": "Somos el Grupo de Ingeniería de Sistemas de Procesos & Logística del IPQA (CONICET — Universidad Nacional de Córdoba). Entendemos y sistematizamos las necesidades de cada organización para desarrollar modelos matemáticos que representen sus procesos y permitan evaluar alternativas.",
      "about.p2": "Aplicamos inteligencia artificial para mejorar las predicciones, la eficiencia computacional y la interpretabilidad. Creamos soluciones a medida con herramientas open source, ejecutables localmente o en la nube, para reducir la dependencia de licencias costosas.",
      "about.stat_members": "Investigadores y colaboradores",
      "cap.optimization": "Optimización",
      "cap.optimization_desc": "Modelos matemáticos para tomar mejores decisiones.",
      "cap.data": "Datos e inteligencia artificial",
      "cap.data_desc": "Análisis y herramientas digitales para apoyar decisiones.",
      "cap.process": "Procesos industriales",
      "cap.process_desc": "Planificación y mejora de sistemas productivos.",
      "cap.logistics": "Logística",
      "cap.logistics_desc": "Planificación del transporte y uso de recursos.",

      "research.label": "Investigación",
      "research.title": "Líneas de Investigación",
      "research.subtitle": "Investigamos optimización de cadenas de suministro, logística, planes de cosecha y scheduling, además de la explicabilidad de modelos.",
      "research.supply_chain": "Cadena de suministro",
      "research.supply_chain_description": "Modelamos decisiones de abastecimiento, inventario y diseño de redes para evaluar alternativas bajo incertidumbre y niveles de servicio.",
      "research.logistics": "Logística",
      "research.logistics_description": "Desarrollo de herramientas computacionales basadas en programación matemática para optimizar procesos logísticos sustentables. Integra la planificación táctica y operativa del transporte de larga distancia, el dimensionamiento de flota, el ruteo y el armado de cargas, evaluando objetivos económicos y ambientales mediante Análisis de Ciclo de Vida, con herramientas integrables a los sistemas de las empresas.",
      "research.harvest": "Planes de cosecha",
      "research.harvest_description": "Optimización multiobjetivo de la planificación forestal para decidir tratamientos silvícolas, superficies de cosecha y flujos de madera, equilibrando el valor presente neto y el secuestro neto de CO₂. La formulación disyuntiva se transforma en un modelo MILP y se valida con datos de una empresa forestal de Misiones, Argentina, para analizar las compensaciones entre producción maderera y captura de carbono.",
      "research.scheduling": "Scheduling",
      "research.scheduling_description": "Desarrollo de herramientas inteligentes de soporte a la decisión para programar plantas batch multipropósito de la industria de procesos. Integra modelos surrogate basados en aprendizaje automático, optimización matemática y optimización inversa para generar programas de producción de alta calidad en menos tiempo, mejorar la escalabilidad de modelos MILP y recuperar criterios expertos desde datos históricos. La investigación contempla restricciones industriales reales y la integración de los métodos en un prototipo para su validación en entornos productivos.",
      "industry.label": "Industria",
      "industry.title": "Proyectos con la Industria",
      "industry.subtitle": "El equipo ha colaborado con distintas empresas en proyectos de supply chain, logística y producción.",
      "industry.family_supply": "Supply Chain y Logística",
      "industry.family_production": "Producción",
      "industry.project_redesign": "Rediseño y planificación de cadenas de suministro",
      "industry.project_truck": "Optimización de la carga de camiones palletizada",
      "industry.project_warehouse": "Simulación y generación de alertas en depósitos",
      "industry.project_inventory": "Optimización de inventarios y stock de seguridad",
      "industry.project_routing": "Planificación del transporte de cargas y ruteo",
      "industry.project_scheduling": "Programación de la producción",
      "industry.project_scrap": "Optimización del proceso y minimización de scrap",
      "industry.production_project_1": "Proyecto 01",
      "industry.production_project_2": "Proyecto 02",
      "industry.production_project_3": "Proyecto 03",
      "industry.project_details_coming_soon": "Los detalles de este proyecto se agregarán próximamente.",
      "industry.detail_redesign": "Analizamos la estructura de la cadena y sus decisiones de abastecimiento para diseñar alternativas de planificación que coordinen la red, el inventario y el nivel de servicio. El trabajo se apoya en modelos matemáticos ajustados al problema de cada organización.",
      "industry.detail_truck": "Desarrollamos un optimizador que asigna pallets a camiones y posiciones según la flota disponible, considerando peso, dimensiones, estabilidad y carga por eje. En el caso documentado, el plan diario pasó de dos horas de planificación manual a 76 segundos y dejó de requerir rearmado de cargas en playa.",
      "industry.detail_warehouse": "Un simulador proyecta la ocupación del depósito hora a hora y anticipa quiebres de stock o falta de espacio para que el equipo pueda actuar antes de que afecten la operación.",
      "industry.detail_inventory": "Modelamos la demanda incierta de repuestos por zona y nivel de criticidad para decidir dónde ubicar el stock de seguridad y cuánto mantener. El modelo busca el inventario mínimo compatible con los tiempos de respuesta acordados.",
      "industry.detail_routing": "Desarrollamos herramientas de planificación táctica y operativa para transporte de larga distancia, dimensionamiento de flota y ruteo, considerando objetivos económicos y ambientales y su integración con los sistemas de la empresa.",
      "industry.detail_scheduling": "Formulamos modelos de optimización para generar agendas semanales ejecutables, con secuencias, precedencias, prioridades y disponibilidad de equipos. La herramienta se integra en una plataforma web con datos de planta e IoT para monitorear el desempeño.",
      "industry.detail_scrap": "Abordamos la optimización de procesos productivos para identificar decisiones operativas que reduzcan el scrap, respetando las restricciones propias del proceso y sus objetivos de producción.",
      "industry.case1": "Caso 01",
      "industry.case2": "Caso 02",
      "industry.case3": "Caso 03",
      "courses.label": "Formación",
      "courses.title": "Cursos",
      "courses.subtitle": "Capacitación en optimización matemática e inteligencia artificial aplicada a operaciones y supply chain.",
      "research.one_t": "Scheduling y planificación de producción",
      "research.one_d": "Optimización matemática para agendas semanales ejecutables: inicios, fines, secuencias, precedencias y órdenes tardías, asignando mano de obra compartida a los equipos. Considera prioridades, disponibilidad e inactividad de equipos. Integrada en plataforma web con datos de planta e IoT, KPIs y monitoreo del desempeño.",
      "research.two_t": "Transporte, carga y descarga",
      "research.two_d": "La planificación asumía camiones y pallets idénticos, pero la flota tercerizada es heterogénea: el depósito rearmaba el 40% de las cargas en playa, con riesgo de multas por peso por eje. El modelo —programación disyuntiva generalizada— diseña la carga desde la flota disponible ese día, asignando cada pallet a camión y posición con peso, largo, estabilidad y carga por eje. Plan diario en 76 s en vez de 2 h, listo para ejecutar: se carga tal cual llega, sin rearmar y sin camión parado en muelle.",
      "research.three_t": "Cadena de suministro bajo incertidumbre",
      "research.three_d": "Con 50 tipos de motor y criticidad distinta, el stock se replicaba cliente por cliente o cada falla esperaba días un repuesto de planta central; ignorar la incertidumbre dejaba 50% de probabilidad de incumplir. El modelo agrega demanda por zona, concentra el stock de seguridad en 2 depósitos con reparación y calcula el inventario mínimo por motor, ubicación y año según el servicio prometido —la demanda se dedujo del historial de fallas, sin pronóstico previo. Menos inventario total con igual servicio + taller de respaldo ante fallas críticas.",
      "research.four_t": "Explicabilidad en modelos de optimización",
      "research.four_d": "Los planes óptimos se usan poco cuando nadie puede explicar por qué convienen: qué restricción manda, qué pasa si cambia un dato. Desarrollamos métodos que hacen interpretables los resultados —restricciones activas y análisis de sensibilidad— aplicados a nuestros modelos de scheduling, carga y supply chain. Resultados que operación entiende, confía y adopta.",
      "course.title": "Optimización asistida por inteligencia artificial para la gestión de operaciones y supply chain",
      "course.description": "Curso virtual de formación continua organizado por el IPQA. Enseña a formular y resolver problemas reales de operaciones y supply chain con optimización matemática y flujos de trabajo asistidos por IA, incluyendo modelos lineales y enteros, Python, solvers y casos prácticos.",
      "course.instructors": "Dictado por Juan Ignacio Ramello, María Analía Rodríguez, Frank Cecilio Piedra Jimenez y Noelia Alasino.",
      "course.link": "Ver curso",

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
      "team.role6": "Dr. en Ingeniería Química · Ciencia de datos y optimización",
      "team.bio6": "Doctor en Ingeniería Química y científico de datos. Desarrolla soluciones de analítica, aprendizaje automático y optimización matemática para problemas de negocio, con experiencia en logística, banca, salud y consumo masivo.",
      "team.role7": "Dra. en Ingeniería Química · Profesora e investigadora",
      "team.bio7": "Doctora en Ingeniería Química e Ingeniera Química, es profesora titular e investigadora en la UNC. Su trabajo aborda el modelado y la optimización de procesos, el tratamiento de aguas residuales y la gestión de cadenas de suministro y residuos.",

      "contact.label": "Contacto",
      "contact.title": "Construyamos una colaboración",
      "contact.subtitle": "Colaboramos con grupos de investigación, universidades, organismos públicos y empresas en iniciativas de investigación, transferencia tecnológica y formación. Si tienes una propuesta o consulta, conversemos.",
      "contact.email_label": "Correo:",
      "contact.phone_label": "Teléfono:",
      "contact.location_label": "Ubicación:",
      "contact.name": "Nombre",
      "contact.name_ph": "Tu nombre",
      "contact.email": "Correo electrónico",
      "contact.email_ph": "tu@correo.com",
      "contact.message": "Mensaje",
      "contact.message_ph": "Cuéntanos sobre una propuesta, colaboración o consulta...",
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
      "nav.investigation": "Research",
      "nav.industry": "Industry",
      "nav.courses": "Courses",
      "nav.team": "Team",
      "nav.contact": "Contact",

      "hero.eyebrow": "Optimization applied to industry",
      "hero.title": "Process Systems and <span>Logistics Engineering</span>",
      "hero.tagline": "We develop mathematical models, digital tools, and data and AI solutions to improve production and logistics decisions.",
      "hero.cta_projects": "Explore our projects",
      "hero.cta_demos": "Explore demos",
      "hero.visual_label": "Research group",
      "hero.visual_title": "ISP&L",
      "hero.visual_alt": "ISP&L logo with warehouse, transportation, and industry symbols",

      "carousel.label": "Portfolio sections",
      "carousel.controls": "Portfolio controls",
      "carousel.choose_section": "Choose a section",
      "carousel.previous": "Previous",
      "carousel.next": "Next",
      "carousel.pause_action": "Pause automatic slide rotation",
      "carousel.play_action": "Resume automatic slide rotation",

      "about.label": "Who we are",
      "about.title": "Research applied to real problems",
      "about.summary": "We develop methods and tools to improve production and logistics systems through research, mathematical modeling, and data analysis.",
      "about.lead": "We turn business needs into intelligent tools for better decision-making.",
      "about.p1": "We are the Process Systems & Logistics Engineering Group at IPQA (CONICET — National University of Córdoba). We understand and structure each organization’s needs, then build mathematical models that represent its processes and help evaluate alternatives.",
      "about.p2": "We apply artificial intelligence to improve predictions, computational efficiency, and interpretability. We create tailored solutions with open-source tools that can run locally or in the cloud, reducing reliance on costly licenses.",
      "about.stat_members": "Researchers and collaborators",
      "cap.optimization": "Optimization",
      "cap.optimization_desc": "Mathematical models for better decisions.",
      "cap.data": "Data and artificial intelligence",
      "cap.data_desc": "Analysis and digital tools to support decisions.",
      "cap.process": "Industrial processes",
      "cap.process_desc": "Planning and improvement of production systems.",
      "cap.logistics": "Logistics",
      "cap.logistics_desc": "Transportation planning and resource use.",

      "research.label": "Research",
      "research.title": "Research Lines",
      "research.subtitle": "Our research covers supply chain optimization, logistics, harvest planning, scheduling, and model explainability.",
      "research.supply_chain": "Supply chain",
      "research.supply_chain_description": "We model sourcing, inventory, and network design decisions to evaluate alternatives under uncertainty and service level requirements.",
      "research.supply_chain_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "research.logistics": "Logistics",
      "research.logistics_description": "Developing mathematical-programming tools for sustainable logistics optimization. Integrates tactical and operational long-haul transport planning, fleet sizing, routing, and truck loading, balancing economic and environmental objectives using Life Cycle Assessment, with tools designed for integration into company systems.",
      "research.harvest": "Harvest planning",
      "research.harvest_description": "Multi-objective forest planning to select silvicultural treatments, harvest areas, and timber flows while balancing net present value and net CO₂ sequestration. The disjunctive formulation is reformulated as a MILP and validated with data from a forestry company in Misiones, Argentina, to analyze trade-offs between timber production and carbon capture.",
      "research.scheduling": "Scheduling",
      "research.scheduling_description": "Developing intelligent decision-support tools for scheduling multipurpose batch plants in the process industries. The work combines machine-learning surrogate models, mathematical optimization, and inverse optimization to generate high-quality production schedules faster, improve the scalability of MILP models, and infer expert decision criteria from historical data. It addresses real industrial constraints and integrates the methods into a prototype for validation in production settings.",
      "industry.label": "Industry",
      "industry.title": "Industry Projects",
      "industry.subtitle": "The team has collaborated with companies on supply chain, logistics, and production projects.",
      "industry.family_supply": "Supply Chain & Logistics",
      "industry.family_production": "Production",
      "industry.project_redesign": "Supply chain redesign and planning",
      "industry.project_truck": "Palletized truck loading optimization",
      "industry.project_warehouse": "Warehouse simulation and alerts",
      "industry.project_inventory": "Inventory and safety stock optimization",
      "industry.project_routing": "Freight transportation planning and routing",
      "industry.project_scheduling": "Production scheduling",
      "industry.project_scrap": "Process optimization and scrap minimization",
      "industry.production_project_1": "Project 01",
      "industry.production_project_2": "Project 02",
      "industry.production_project_3": "Project 03",
      "industry.project_details_coming_soon": "Details for this project will be added soon.",
      "industry.detail_redesign": "We analyze the supply chain structure and sourcing decisions to develop planning alternatives that coordinate the network, inventory, and service levels. The work uses mathematical models tailored to each organization's problem.",
      "industry.detail_truck": "We developed an optimizer that assigns pallets to trucks and positions based on the available fleet, accounting for weight, dimensions, stability, and axle loads. In the documented case, daily planning went from two hours of manual work to 76 seconds, and loads no longer needed to be rebuilt in the yard.",
      "industry.detail_warehouse": "A simulator projects warehouse occupancy hour by hour and anticipates stockouts or space shortages, giving the team time to act before they affect operations.",
      "industry.detail_inventory": "We modeled uncertain spare-parts demand by zone and criticality to determine where to place safety stock and how much to hold. The model seeks the minimum inventory compatible with the agreed response times.",
      "industry.detail_routing": "We developed tactical and operational planning tools for long-haul transportation, fleet sizing, and routing, considering economic and environmental objectives and integration with company systems.",
      "industry.detail_scheduling": "We formulated optimization models to generate executable weekly schedules, accounting for sequencing, precedence, priorities, and equipment availability. The tool is integrated into a web platform with plant and IoT data for performance monitoring.",
      "industry.detail_scrap": "We address production process optimization to identify operational decisions that can reduce scrap while respecting process constraints and production objectives.",
      "industry.case1": "Case 01",
      "industry.case2": "Case 02",
      "industry.case3": "Case 03",
      "courses.label": "Training",
      "courses.title": "Courses",
      "courses.subtitle": "Training in mathematical optimization and artificial intelligence for operations and supply chain.",
      "research.one_t": "Production planning and scheduling",
      "research.one_d": "Mathematical optimization for executable weekly schedules: start/finish times, sequencing, precedence and late orders, assigning shared workforce to equipment. Considers priorities, equipment availability and downtime. Integrated into a web platform with plant/IoT data, KPIs and production monitoring.",
      "research.two_t": "Transportation, loading and unloading",
      "research.two_d": "Planning assumed identical trucks and pallets, but the outsourced fleet is heterogeneous: the warehouse reworked 40% of loads on the floor, risking axle-weight fines. The model —generalized disjunctive programming— designs each load from the fleet actually available that day, assigning every pallet to a truck and position under weight, length, stability and axle-load constraints. Daily plan in 76 s instead of 2 h, ready to execute: loaded as planned, no rework, no truck held at the dock.",
      "research.three_t": "Supply chain under uncertainty",
      "research.three_d": "With 50 motor types of varying criticality, stock was duplicated customer by customer, or each failure waited days for a spare from the central plant; ignoring uncertainty meant a 50% chance of missing the order. The model pools demand by zone, consolidates safety stock in 2 repair-capable depots, and computes minimum inventory per motor, location and year for the promised service —demand inferred from failure history, with no prior forecast. Less total inventory at the same service level + backup shop for critical failures.",
      "research.four_t": "Explainability in optimization models",
      "research.four_d": "Optimal plans go unused when no one can explain why they win: which constraint binds, what happens if data changes. We develop methods that make results interpretable —binding constraints and sensitivity analysis— applied to our scheduling, loading and supply-chain models. Results operations understands, trusts and adopts.",
      "course.title": "AI-assisted optimization for operations and supply chain management",
      "course.description": "Virtual continuing education course organized by IPQA. It teaches participants to formulate and solve real operations and supply chain problems with mathematical optimization and AI-assisted workflows, including linear and integer models, Python, solvers, and practical cases.",
      "course.instructors": "Taught by Juan Ignacio Ramello, María Analía Rodríguez, Frank Cecilio Piedra Jimenez, and Noelia Alasino.",
      "course.link": "View course",

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
      "team.role6": "PhD in Chemical Engineering · Data science and optimization",
      "team.bio6": "PhD in Chemical Engineering and data scientist. He develops analytics, machine learning, and mathematical optimization solutions for business problems, with experience in logistics, banking, healthcare, and consumer goods.",
      "team.role7": "PhD in Chemical Engineering · Professor and researcher",
      "team.bio7": "PhD and BSc in Chemical Engineering, she is a full professor and researcher at UNC. Her work focuses on process modeling and optimization, wastewater treatment, and supply chain and waste management.",

      "contact.label": "Contact",
      "contact.title": "Let's build a collaboration",
      "contact.subtitle": "We collaborate with research groups, universities, public institutions, and companies on research, technology transfer, and training initiatives. If you have an idea or question, let's talk.",
      "contact.email_label": "Email:",
      "contact.phone_label": "Phone:",
      "contact.location_label": "Location:",
      "contact.name": "Name",
      "contact.name_ph": "Your name",
      "contact.email": "Email address",
      "contact.email_ph": "you@email.com",
      "contact.message": "Message",
      "contact.message_ph": "Tell us about a proposal, collaboration, or question...",
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
    currentLang = lang;
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

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key]) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key]) {
        el.setAttribute("aria-label", dict[key]);
      }
    });

    document.querySelectorAll("[data-portfolio-dot]").forEach(function (dot) {
      var slide = document.getElementById(dot.getAttribute("data-slide-target"));
      var heading = slide && slide.querySelector(".section-title");
      if (heading) dot.setAttribute("aria-label", heading.textContent.trim());
    });

    document.querySelectorAll("[data-portfolio-toggle-label]").forEach(function (label) {
      var key = label.getAttribute("data-i18n");
      if (dict[key]) {
        label.textContent = dict[key];
        label.closest("button").setAttribute("aria-label", dict[key]);
      }
    });

    var titleKey = lang === "en" ? "en" : "es";
    document.title = titleKey === "en"
      ? "ISP&L — Process Systems and Logistics Engineering"
      : "ISP&L — Ingeniería de Sistemas de Procesos y Logística";

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

  /* ---------- Portfolio carousel ---------- */

  var portfolioTrack = document.querySelector("[data-portfolio-track]");
  if (portfolioTrack) {
    var portfolioSlides = Array.from(portfolioTrack.querySelectorAll(".portfolio-slide"));
    var expandableCards = Array.from(document.querySelectorAll('details[name="portfolio-cards"]'));
    var portfolioPrev = document.querySelector("[data-portfolio-prev]");
    var portfolioNext = document.querySelector("[data-portfolio-next]");
    var portfolioToggle = document.querySelector("[data-portfolio-toggle]");
    var portfolioDots = document.querySelector("[data-portfolio-dots]");
    var portfolioCarousel = portfolioTrack.closest(".portfolio-carousel");
    var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var autoplayEnabled = !prefersReducedMotion;
    var pointerInsideCarousel = false;
    var focusInsideCarousel = false;
    var dotButtons = [];

    expandableCards.forEach(function (card) {
      card.addEventListener("toggle", function () {
        if (!card.open) return;
        expandableCards.forEach(function (otherCard) {
          if (otherCard !== card) otherCard.open = false;
        });
      });
    });

    if (portfolioDots) {
      portfolioSlides.forEach(function (slide, index) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "portfolio-carousel-dot";
        dot.setAttribute("data-portfolio-dot", "");
        dot.setAttribute("data-slide-target", slide.id);
        dot.setAttribute("aria-label", slide.querySelector(".section-title").textContent.trim());
        dot.addEventListener("click", function () { goToPortfolioSlide(index); });
        portfolioDots.appendChild(dot);
        dotButtons.push(dot);
      });
    }

    function currentPortfolioSlide() {
      return Math.max(0, Math.min(portfolioSlides.length - 1, Math.round(portfolioTrack.scrollLeft / portfolioTrack.clientWidth)));
    }

    function updatePortfolioControls() {
      var current = currentPortfolioSlide();
      dotButtons.forEach(function (dot, index) {
        dot.setAttribute("aria-current", index === current ? "true" : "false");
      });
    }

    function goToPortfolioSlide(index) {
      var target = (index + portfolioSlides.length) % portfolioSlides.length;
      var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      portfolioTrack.scrollTo({ left: target * portfolioTrack.clientWidth, behavior: reduceMotion ? "auto" : "smooth" });
    }

    function updatePortfolioToggle() {
      if (!portfolioToggle) return;
      portfolioToggle.setAttribute("aria-pressed", autoplayEnabled ? "true" : "false");
      var labelKey = autoplayEnabled ? "carousel.pause_action" : "carousel.play_action";
      var label = portfolioToggle.querySelector("[data-portfolio-toggle-label]");
      if (label) {
        label.setAttribute("data-i18n", labelKey);
        label.textContent = translations[currentLang] && translations[currentLang][labelKey]
          ? translations[currentLang][labelKey]
          : translations.es[labelKey];
        portfolioToggle.setAttribute("aria-label", label.textContent);
      }
    }

    if (portfolioPrev) portfolioPrev.addEventListener("click", function () {
      goToPortfolioSlide(currentPortfolioSlide() - 1);
    });
    if (portfolioNext) portfolioNext.addEventListener("click", function () {
      goToPortfolioSlide(currentPortfolioSlide() + 1);
    });
    if (portfolioToggle) portfolioToggle.addEventListener("click", function () {
      autoplayEnabled = !autoplayEnabled;
      updatePortfolioToggle();
    });
    if (portfolioCarousel) {
      portfolioCarousel.addEventListener("pointerenter", function () { pointerInsideCarousel = true; });
      portfolioCarousel.addEventListener("pointerleave", function () { pointerInsideCarousel = false; });
      portfolioCarousel.addEventListener("focusin", function () { focusInsideCarousel = true; });
      portfolioCarousel.addEventListener("focusout", function (event) {
        focusInsideCarousel = portfolioCarousel.contains(event.relatedTarget);
      });
    }
    portfolioTrack.addEventListener("scroll", updatePortfolioControls, { passive: true });
    window.addEventListener("resize", updatePortfolioControls);
    portfolioTrack.addEventListener("keydown", function (event) {
      if (event.target !== portfolioTrack) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPortfolioSlide(currentPortfolioSlide() - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToPortfolioSlide(currentPortfolioSlide() + 1);
      }
    });
    if (portfolioSlides.length > 1) {
      window.setInterval(function () {
        if (!autoplayEnabled || pointerInsideCarousel || focusInsideCarousel || document.hidden) return;
        goToPortfolioSlide(currentPortfolioSlide() + 1);
      }, 7000);
    }
    var initialPortfolioIndex = portfolioSlides.findIndex(function (slide) {
      return "#" + slide.id === window.location.hash;
    });
    if (initialPortfolioIndex > 0) portfolioTrack.scrollLeft = initialPortfolioIndex * portfolioTrack.clientWidth;
    updatePortfolioToggle();
    updatePortfolioControls();
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
