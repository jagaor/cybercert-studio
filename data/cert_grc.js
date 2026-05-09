window.CERT_DATA = window.CERT_DATA || {};

// === ISC2 CISSP ===
CERT_DATA.cissp = {
theory: [
{id:"d1",title:"Domain 1 — Security & Risk Management (16%)",html:`
<h2>CISSP — Certified Information Systems Security Professional</h2>
<div class="lead">ISC2 gold standard. 8 dominios. CAT (computer-adaptive testing) 100-150 preguntas, 3h. Pasaje 700/1000. 5 años exp.</div>
<h3>Triada CIA y más</h3>
<p>Confidentiality, Integrity, Availability. Adicionales: Authenticity, Non-repudiation, Privacy, Safety.</p>
<h3>Governance</h3>
<p>Policies, standards, procedures, guidelines. Top-down approach. Alignment con business.</p>
<h3>Risk management</h3>
<p>Risk = Threat × Vulnerability × Impact. Treatment: Avoid, Transfer, Mitigate, Accept. Quantitative (SLE, ARO, ALE) vs qualitative.</p>
<h3>Compliance</h3>
<p>GDPR, HIPAA, PCI DSS, SOX, GLBA, FERPA, CCPA, FedRAMP. Industry frameworks: NIST CSF, ISO 27001/27002, COBIT, COSO.</p>
<h3>Ética</h3>
<p>ISC2 Code of Ethics: 4 cánones. (ISC)² Bylaws.</p>
<h3>BC/DR</h3>
<p>BIA, RTO, RPO, MTTR, MTBF. BCP, DRP, COOP.</p>
`},
{id:"d2",title:"Domain 2 — Asset Security (10%)",html:`
<h2>Asset Security</h2>
<h3>Data classification</h3>
<p>Government: Top Secret, Secret, Confidential, Sensitive, Unclassified. Commercial: Confidential, Private, Sensitive, Public.</p>
<h3>Roles</h3>
<p>Data Owner, Data Custodian, Data Steward, Data Subject, Controller, Processor (GDPR).</p>
<h3>Data lifecycle</h3>
<p>Create → Store → Use → Share → Archive → Destroy. Retention policies, legal hold.</p>
<h3>Data states</h3>
<p>At rest, in transit, in use. Apply encryption appropriately.</p>
<h3>Sanitization</h3>
<p>Clear (overwrite), Purge (degauss, crypto erase), Destroy (shred, incinerate).</p>
`},
{id:"d3",title:"Domain 3 — Security Architecture & Engineering (13%)",html:`
<h2>Security Architecture & Engineering</h2>
<h3>Modelos de seguridad</h3>
<p>Bell-LaPadula (confidentiality, no read up / no write down), Biba (integrity, no read down / no write up), Clark-Wilson (well-formed transactions), Brewer-Nash (Chinese Wall, no conflict of interest).</p>
<h3>Trust computing base (TCB)</h3>
<p>Reference monitor, security kernel.</p>
<h3>Cryptography</h3>
<p>Symmetric (AES, ChaCha20), Asymmetric (RSA, ECC), Hashing (SHA-2/3), Digital signatures, PKI, Cryptanalysis (frequency, brute, side-channel, birthday).</p>
<h3>Common Criteria (CC)</h3>
<p>Evaluation Assurance Levels EAL1-EAL7. Protection Profiles, Security Targets.</p>
<h3>Physical security</h3>
<p>CPTED (Crime Prevention Through Environmental Design). Layered defense.</p>
`},
{id:"d4",title:"Domain 4 — Communication & Network Security (13%)",html:`
<h2>Communication & Network Security</h2>
<h3>OSI / TCP-IP</h3>
<p>Repaso de capas. Common protocols and their security.</p>
<h3>Secure protocols</h3>
<p>HTTPS (TLS 1.2/1.3), SSH, SFTP/FTPS, SMTPS, IPsec (AH/ESP, transport/tunnel, IKE), DNSSEC, SNMPv3.</p>
<h3>Network architecture</h3>
<p>Segmentation, DMZ/screened subnet, NGFW, IDS/IPS, WAF, NAC, Zero Trust.</p>
<h3>Wireless</h3>
<p>WPA3, EAP-TLS. Cellular (4G/5G), Bluetooth, NFC. Common attacks.</p>
<h3>VoIP</h3>
<p>SIP, RTP, SRTP. Vishing, eavesdropping.</p>
`},
{id:"d5",title:"Domain 5 — IAM (13%)",html:`
<h2>IAM</h2>
<h3>Identification, Auth, Authorization, Accounting</h3>
<p>AAA principles. MFA factors. Biometrics: FAR, FRR, CER.</p>
<h3>Access control models</h3>
<p>DAC, MAC, RBAC, ABAC, Rule-based, Risk-based.</p>
<h3>Federation</h3>
<p>SAML, OAuth 2.0, OIDC, Kerberos, RADIUS, TACACS+.</p>
<h3>Identity lifecycle</h3>
<p>Joiner-Mover-Leaver. Provisioning, deprovisioning, recertification, segregation of duties.</p>
<h3>SSO and Federated Identity</h3>
<p>Pros: UX, central control. Cons: single point of compromise.</p>
`},
{id:"d6",title:"Domain 6 — Security Assessment & Testing (12%)",html:`
<h2>Security Assessment & Testing</h2>
<h3>Tipos de evaluación</h3>
<p>Vulnerability assessment, penetration test, red team, security audit, compliance audit.</p>
<h3>Penetration testing</h3>
<p>External, internal, blind/double-blind, targeted. Black/gray/white box. RoE imprescindible.</p>
<h3>Code review</h3>
<p>SAST, DAST, IAST, SCA, manual peer review.</p>
<h3>Log review</h3>
<p>SIEM correlation. Compliance reporting.</p>
<h3>Métricas</h3>
<p>KPI/KRI, MTTD, MTTR, false positive rate. Risk dashboards.</p>
`},
{id:"d7",title:"Domain 7 — Security Operations (13%)",html:`
<h2>Security Operations</h2>
<h3>IR (NIST 800-61)</h3>
<p>Preparation, Detection & Analysis, Containment/Eradication/Recovery, Post-incident.</p>
<h3>Forensics</h3>
<p>Chain of custody, order of volatility, evidence handling, e-discovery, legal hold.</p>
<h3>SOC operations</h3>
<p>SIEM, SOAR, EDR/XDR, threat hunting, threat intel feeds.</p>
<h3>BC/DR</h3>
<p>Hot/warm/cold sites. Backup strategies (3-2-1). Replication, snapshots, journaling. Testing: tabletop, walkthrough, simulation, parallel, full interruption.</p>
<h3>Personnel security</h3>
<p>Background checks, NDAs, separation of duties, mandatory vacations, job rotation, least privilege.</p>
`},
{id:"d8",title:"Domain 8 — Software Development Security (10%)",html:`
<h2>Software Development Security</h2>
<h3>SDLC</h3>
<p>Waterfall, Agile, DevOps, DevSecOps. Security in each phase: requirements, design, implementation, verification, release, response.</p>
<h3>Security in code</h3>
<p>Input validation, output encoding, authentication, authorization, session management, error handling, logging, secure config.</p>
<h3>Common vulnerabilities</h3>
<p>OWASP Top 10. CWE/SANS Top 25. Race conditions, buffer overflows, injection, broken auth, deserialization, SSRF.</p>
<h3>Security tools</h3>
<p>SAST, DAST, IAST, RASP, SCA, fuzzing.</p>
<h3>Maturity models</h3>
<p>BSIMM, OWASP SAMM, CMMI.</p>
`}
],
questions: [
{d:1,q:"Modelo de Bell-LaPadula se enfoca en:",opts:["Integridad","Confidencialidad (no read up, no write down)","Disponibilidad","Autenticación"],c:1,e:"Bell-LaPadula: confidencialidad. Reglas: simple security (no read up), star (no write down)."},
{d:1,q:"Si SLE = 8000 y ARO = 0.25, ALE =",opts:["32000","2000","8000","250"],c:1,e:"ALE = SLE × ARO = 8000 × 0.25 = 2000€/año."},
{d:2,q:"Sanitización segura para SSDs (no degauss):",opts:["Format","Cryptographic erase","Repaint","Reinstall"],c:1,e:"SSDs: cryptographic erase es ideal (borra clave de cifrado). Overwrite múltiple no garantiza por wear leveling."},
{d:3,q:"Modelo de Biba protege:",opts:["Confidencialidad","Integridad (no read down, no write up)","Disponibilidad","Privacidad"],c:1,e:"Biba: integridad. Reglas inversas a Bell-LaPadula: simple integrity (no read down), star integrity (no write up)."},
{d:3,q:"Common Criteria EAL más alto:",opts:["EAL3","EAL5","EAL7","EAL10"],c:2,e:"EAL1-EAL7. EAL7: formally verified design and tested. Muy raro en comercial."},
{d:4,q:"En IPsec, ESP en modo Tunnel:",opts:["Cifra solo header","Cifra todo el paquete IP original encapsulado","No cifra","Solo autentica"],c:1,e:"Tunnel mode: cifra el paquete entero y lo encapsula con nuevo header IP. Para gateway-to-gateway."},
{d:5,q:"Combinación que SÍ es MFA:",opts:["Password + PIN","Password + smart card","Password + secret question","PIN + secret question"],c:1,e:"Factores distintos: password (sabes) + smart card (tienes). Las otras combinan dos 'sabes'."},
{d:5,q:"Federación con tokens XML:",opts:["OAuth","SAML","Kerberos","RADIUS"],c:1,e:"SAML usa assertions XML. OAuth usa tokens (JWT comunes). Kerberos usa tickets binarios."},
{d:6,q:"Pentest sin info previa:",opts:["White box","Gray box","Black box (unknown environment)","Internal"],c:2,e:"Black box / unknown: simula atacante externo sin info previa."},
{d:7,q:"Fase IR donde se documenta lessons learned:",opts:["Preparation","Detection","Containment","Post-incident"],c:3,e:"Lessons learned se hace en post-incident para mejorar el programa."},
{d:7,q:"Site con HW listo pero datos algo desactualizados:",opts:["Hot","Warm","Cold","Mobile"],c:1,e:"Warm site: HW disponible, requiere actualizar datos y traer staff."},
{d:8,q:"OWASP A01:2021 Broken Access Control reemplazó a:",opts:["Injection","XSS","Broken Authentication anteriormente A02","Insecure Design"],c:2,e:"En OWASP 2021 BAC subió a #1. Antes Injection era #1 durante años."}
],
flashcards: [
{d:1,q:"¿Cuáles son los 4 cánones del código ético ISC2?",a:"1) Proteger sociedad/bien común, 2) Actuar honorable y legalmente, 3) Dar servicio diligente y competente, 4) Avanzar la profesión."},
{d:2,q:"¿Diferencia entre Data Owner, Custodian y Steward?",a:"Owner: responsable último (negocio). Custodian: implementa controles técnicos diarios (TI). Steward: gestiona calidad y uso de datos."},
{d:3,q:"¿Qué es el modelo Brewer-Nash?",a:"Chinese Wall. Previene conflictos de interés: si accedes a info de la empresa A, no puedes acceder a la competidora B. Dinámico según historial."},
{d:4,q:"¿Qué garantiza DNSSEC?",a:"Autenticidad e integridad de respuestas DNS via firmas criptográficas. NO confidencialidad."},
{d:5,q:"¿Diferencia entre identification, authentication, authorization, accountability?",a:"Identification: quién dices ser. Authentication: probar que eres. Authorization: qué puedes hacer. Accountability: registro de qué hiciste."},
{d:6,q:"¿Qué es un blind vs double-blind pentest?",a:"Blind: tester sin info previa, defenders saben. Double-blind: ni tester ni defenders saben — prueba real de detección y respuesta."},
{d:7,q:"¿Qué es e-discovery?",a:"Electronic discovery: identificación, preservación y producción de información electrónica para procesos legales. Sigue legal hold."},
{d:8,q:"¿Qué es BSIMM?",a:"Building Security In Maturity Model. Estudia prácticas reales de empresas. Mide madurez de programa de software security en 12 prácticas."}
]
};

// === ISACA CISM ===
CERT_DATA.cism = {
theory: [
{id:"d1",title:"Domain 1 — Information Security Governance (17%)",html:`
<h2>CISM — Certified Information Security Manager</h2>
<div class="lead">ISACA. 4 dominios. 150 preguntas, 4h. Foco managerial — para CISOs y heads of security. 5 años exp.</div>
<h3>Governance framework</h3>
<p>Alineación con business. Roles, board oversight, charters. Strategic alignment, value delivery, resource mgmt, performance measurement, risk mgmt.</p>
<h3>Strategy</h3>
<p>Vision, mission, objectives. Drivers: business, regulatory, risk. Roadmap multi-año.</p>
<h3>Reporting</h3>
<p>Métricas para C-level: risk posture, incidents, compliance, investments. KPIs y KRIs.</p>
`},
{id:"d2",title:"Domain 2 — Information Risk Management (20%)",html:`
<h2>Information Risk Management</h2>
<h3>Risk identification</h3>
<p>Threat modeling, vulnerability assessments, business impact analysis.</p>
<h3>Risk analysis</h3>
<p>Quantitative (SLE × ARO = ALE), qualitative (matrices). Inherent vs residual risk.</p>
<h3>Risk evaluation</h3>
<p>Compare contra risk appetite. Prioritize.</p>
<h3>Risk treatment</h3>
<p>Mitigate, transfer, avoid, accept. Document in risk register.</p>
<h3>Risk monitoring</h3>
<p>KRIs, threshold monitoring, periodic reassessment.</p>
`},
{id:"d3",title:"Domain 3 — Information Security Program (33%)",html:`
<h2>Security Program Development & Mgmt</h2>
<h3>Diseño</h3>
<p>Policies, standards, procedures. Roadmap. Budget, headcount, technology selection.</p>
<h3>Implementation</h3>
<p>Project mgmt. Vendor mgmt. Technology integration. Awareness training.</p>
<h3>Operations</h3>
<p>SOC, IR, vulnerability mgmt, IAM, data protection. Outsourcing decisions.</p>
<h3>Communication</h3>
<p>Stakeholder mgmt: board, execs, legal, audit, IT, business units, employees, customers, regulators.</p>
`},
{id:"d4",title:"Domain 4 — Incident Mgmt (30%)",html:`
<h2>Incident Management</h2>
<h3>IR plan</h3>
<p>Develop, test, maintain. Phases: preparation, identification, containment, eradication, recovery, lessons learned.</p>
<h3>Equipo IR</h3>
<p>CSIRT structure. Roles: lead, comms, legal, technical. On-call rotation.</p>
<h3>Comms during incident</h3>
<p>Internal: management, legal, HR, IT. External: customers, regulators, law enforcement, media. Plantillas pre-aprobadas.</p>
<h3>Post-incident</h3>
<p>Root cause, lessons learned, action items, métricas updated.</p>
`}
],
questions: [
{d:1,q:"Strategic alignment significa:",opts:["TI sigue al negocio","Alineación de seguridad con objetivos de negocio","Solo tecnología","Solo compliance"],c:1,e:"Security strategy debe alinearse con business strategy. La seguridad es enabler, no obstáculo."},
{d:1,q:"Métrica para reportar al board:",opts:["Logs/segundo","Riesgos top, status compliance, ROI seguridad","Memoria SIEM","Latencia"],c:1,e:"Board quiere risk posture, regulatory status, ROI, indicadores estratégicos. No detalles técnicos."},
{d:2,q:"Diferencia inherent vs residual risk:",opts:["Mismo","Inherent: sin controles. Residual: tras aplicar controles","Inherent es mayor siempre","Residual es teórico"],c:1,e:"Inherent risk: 'crudo'. Residual: lo que queda tras mitigaciones. Decisión: aceptar o seguir mitigando."},
{d:3,q:"Outsourcing de seguridad significa:",opts:["Transferir el riesgo completamente","Transferir tareas pero la responsabilidad final permanece interna","Eliminar SOC","Sin coste"],c:1,e:"Outsourcing transfiere ejecución pero NO accountability. La organización sigue responsable ante reguladores."},
{d:4,q:"Comunicación interna durante incidente debe priorizar:",opts:["Velocidad sobre todo","Hechos confirmados, acciones, contactos. Evitar especulación","Solo IT","Solo C-level"],c:1,e:"Comms claras, factuales, accionables. Especular causa pánico y desinformación. Stakeholders relevantes según fase."}
],
flashcards: [
{d:1,q:"¿Qué es value delivery en governance?",a:"Asegurar que las inversiones en seguridad producen valor demostrable al negocio (no solo gasto)."},
{d:2,q:"¿Qué es un Key Risk Indicator (KRI)?",a:"Métrica que avisa cuando un riesgo se acerca a su umbral. Permite respuesta temprana antes de materializarse."},
{d:3,q:"¿Qué cubre un security awareness program efectivo?",a:"Onboarding, anual, role-based, métricas (click rate, report rate), simulaciones, cultura. No solo videos."},
{d:4,q:"¿Cuándo se inicia el plan de comunicación externa en un incidente?",a:"Tras consultar legal/comms. Notificaciones obligatorias (GDPR 72h) en cuanto se confirme materialidad. Templates pre-aprobados ahorran tiempo."}
]
};

// === ISACA CISA ===
CERT_DATA.cisa = {
theory: [
{id:"d1",title:"Domain 1 — Information System Auditing Process (21%)",html:`
<h2>CISA — Certified Information Systems Auditor</h2>
<div class="lead">ISACA. 5 dominios. 150 preguntas, 4h. Para auditores IT. Muy demandada en Big4 y banca. 5 años exp.</div>
<h3>Audit standards</h3>
<p>ISACA IT Audit Standards, ITAF (IT Assurance Framework). IIA Standards. SSAE 18 (SOC reports).</p>
<h3>Audit lifecycle</h3>
<p>Planning → Risk assessment → Field work → Reporting → Follow-up.</p>
<h3>Risk-based audit</h3>
<p>Prioritize audits based on risk to org. Inherent + control + detection risk = audit risk.</p>
<h3>Sampling</h3>
<p>Statistical (random, stratified) vs non-statistical (judgmental, haphazard). Sample size, confidence, tolerable error.</p>
<h3>Evidence</h3>
<p>Sufficient, reliable, relevant, useful. Documentation: working papers.</p>
`},
{id:"d2",title:"Domain 2 — Governance & Mgmt of IT (17%)",html:`
<h2>Governance & Management of IT</h2>
<h3>IT governance frameworks</h3>
<p>COBIT 2019, ITIL 4, ISO 38500, ISO 27001.</p>
<h3>IT strategy</h3>
<p>Alignment con business. IT steering committee.</p>
<h3>Org structure</h3>
<p>Roles: CIO, CISO, CDO. Segregation of duties (development vs operations vs security).</p>
<h3>Policies</h3>
<p>Hierarchy: policy → standard → procedure → guideline.</p>
`},
{id:"d3",title:"Domain 3 — IS Acquisition, Dev & Implementation (12%)",html:`
<h2>IS Acquisition, Development & Implementation</h2>
<h3>Project mgmt</h3>
<p>SDLC: requirements, design, build, test, deploy, maintain. Methodologies: Waterfall, Agile, DevOps.</p>
<h3>Vendor selection</h3>
<p>RFI, RFP, RFQ. Evaluation criteria, due diligence.</p>
<h3>Testing</h3>
<p>Unit, integration, system, UAT, regression, performance, security.</p>
<h3>Deployment</h3>
<p>Cutover strategies: big bang, parallel, phased, pilot.</p>
`},
{id:"d4",title:"Domain 4 — IS Operations & Resilience (23%)",html:`
<h2>IS Operations & Business Resilience</h2>
<h3>Operations</h3>
<p>Service desk, change mgmt, incident mgmt, problem mgmt, capacity, performance.</p>
<h3>BC/DR</h3>
<p>BIA, RTO, RPO. BCP, DRP. Site types. Backup strategies. Testing.</p>
<h3>IR</h3>
<p>NIST 800-61 phases.</p>
`},
{id:"d5",title:"Domain 5 — Protection of IS Assets (27%)",html:`
<h2>Protection of Information Assets</h2>
<h3>IAM</h3>
<p>Provisioning, deprovisioning, recertification, segregation of duties, least privilege.</p>
<h3>Cryptography</h3>
<p>Symmetric, asymmetric, hashing, PKI, digital signatures, key mgmt.</p>
<h3>Network security</h3>
<p>Firewall, IDS/IPS, segmentation, VPN, secure protocols.</p>
<h3>Data protection</h3>
<p>Classification, encryption at rest/in transit/in use, DLP, backup, retention.</p>
<h3>Physical security</h3>
<p>Layered defense, environmental controls (HVAC, fire suppression).</p>
`}
],
questions: [
{d:1,q:"Audit risk se compone de:",opts:["Inherent + control + detection risk","Solo inherent","Solo financial","Solo operational"],c:0,e:"Audit risk = riesgo de que el auditor emita opinión incorrecta. Combina los 3."},
{d:1,q:"Sampling estadístico vs no estadístico:",opts:["Mismo","Estadístico permite proyectar resultados con confianza estadística","No estadístico es más preciso","Estadístico es ilegal"],c:1,e:"Statistical sampling permite extrapolar a la población con nivel de confianza definido."},
{d:2,q:"Framework de gobernanza IT más usado:",opts:["NIST CSF","COBIT","COSO","ISO 9001"],c:1,e:"COBIT 2019 es el framework de governance/management de IT más adoptado por auditores."},
{d:3,q:"Cutover strategy con menor riesgo:",opts:["Big bang","Parallel (sistemas viejo y nuevo a la vez)","Cold","Pilot"],c:1,e:"Parallel: ambos sistemas funcionan, comparas resultados, cambias cuando confías. Más caro pero más seguro."},
{d:4,q:"Si BIA da RTO=1h y RPO=15min, necesitas:",opts:["Backup mensual","Replicación continua o cuasi (15 min) y failover muy rápido (1h)","Cold site","Sin backups"],c:1,e:"RTO 1h exige hot/warm site con failover rápido. RPO 15min exige replicación al menos cada 15 minutos."},
{d:5,q:"Recertificación de accesos previene:",opts:["Backup fail","Privilege creep — usuarios acumulando permisos al cambiar de rol","DDoS","Phishing"],c:1,e:"Periodic access review obliga a justificar cada acceso y revocar lo innecesario."}
],
flashcards: [
{d:1,q:"¿Qué son working papers en auditoría?",a:"Documentación detallada del trabajo del auditor: qué se probó, cómo, qué se encontró, qué se concluye. Soporte de la opinión."},
{d:2,q:"¿Qué es separation of duties en IT?",a:"Dividir tareas críticas entre personas. Ej: desarrollador no despliega a producción; quien aprueba pagos no los ejecuta."},
{d:3,q:"¿Diferencia RFI, RFP, RFQ?",a:"RFI: Request for Information (info general del mercado). RFP: Proposal (solución propuesta). RFQ: Quotation (precio para algo definido)."},
{d:4,q:"¿Diferencia incident mgmt vs problem mgmt (ITIL)?",a:"Incident: restaurar servicio rápido (síntoma). Problem: encontrar causa raíz para prevenir recurrencia."},
{d:5,q:"¿Qué es DLP en sus tres modalidades?",a:"Data Loss Prevention en endpoint (cliente local), network (perímetro), cloud (CASB). Inspecciona contenido contra políticas."}
]
};

// === ISACA CRISC ===
CERT_DATA.crisc = {
theory: [
{id:"d1",title:"Domain 1 — Governance (26%)",html:`
<h2>CRISC — Certified in Risk and Information Systems Control</h2>
<div class="lead">ISACA. Foco en gestión de riesgo IT. 4 dominios. 150 preguntas, 4h.</div>
<h3>Risk governance</h3>
<p>Organizational structure, roles (board, ERM, business owners). Three lines of defense: 1) operational mgmt, 2) risk/compliance functions, 3) internal audit.</p>
<h3>Strategy</h3>
<p>Risk appetite, risk tolerance, risk capacity. Aligned con business strategy.</p>
<h3>Policies & standards</h3>
<p>Risk mgmt policy, risk register, escalation procedures.</p>
`},
{id:"d2",title:"Domain 2 — IT Risk Assessment (20%)",html:`
<h2>IT Risk Assessment</h2>
<h3>Identification</h3>
<p>Threat modeling, asset inventory, vulnerability scanning, scenario analysis.</p>
<h3>Analysis</h3>
<p>Quantitative (SLE, ARO, ALE), qualitative (heat maps), semi-quantitative.</p>
<h3>Evaluation</h3>
<p>Compare a risk appetite. Prioritize.</p>
<h3>Documentation</h3>
<p>Risk register: ID, descripción, owner, KRI, threshold, treatment, status, due date.</p>
`},
{id:"d3",title:"Domain 3 — Risk Response & Reporting (32%)",html:`
<h2>Risk Response & Reporting</h2>
<h3>Treatment</h3>
<p>Avoid, transfer, mitigate, accept. Cost-benefit analysis.</p>
<h3>Control selection</h3>
<p>Preventive, detective, corrective. Technical, administrative, physical. NIST 800-53 catalog.</p>
<h3>Implementation</h3>
<p>Project mgmt, change management, training.</p>
<h3>Reporting</h3>
<p>Risk dashboards, executive reports, trends. Audience-appropriate.</p>
`},
{id:"d4",title:"Domain 4 — Information Tech & Security (22%)",html:`
<h2>IT & Security Knowledge</h2>
<h3>IT components</h3>
<p>Hardware, networks, OS, databases, applications, cloud.</p>
<h3>Security domains</h3>
<p>IAM, cryptography, network security, app security, data protection, IR, BC/DR.</p>
<h3>Emerging tech</h3>
<p>AI/ML, IoT, blockchain, quantum, edge computing — riesgos asociados.</p>
`}
],
questions: [
{d:1,q:"Three lines of defense:",opts:["IT, security, audit","Operational mgmt, risk/compliance functions, internal audit","Pentest, vuln scan, SIEM","Antivirus, firewall, IDS"],c:1,e:"3LoD: business owns risk, risk function oversees, audit provides independent assurance."},
{d:2,q:"Risk register debe incluir:",opts:["Solo descripción","Risk + owner + KRI + threshold + treatment + status","Solo presupuesto","Solo tecnologías"],c:1,e:"Risk register completo permite tracking, escalation, priorización y reporting."},
{d:3,q:"Cost-benefit: el control vale la pena si:",opts:["Es caro","El coste anual del control < ALE reducido + valor protegido","Reduce 100%","Es nuevo"],c:1,e:"Si gastas 500€/año en control que reduce ALE en 2000€/año, ahorras 1500€."},
{d:4,q:"AI/ML introduce riesgo de:",opts:["Mejora todo","Bias, model poisoning, adversarial inputs, opacity, data leakage en training","Sin riesgo","Solo coste"],c:1,e:"Riesgos AI: training data poisoning, prompt injection, hallucinations, IP leakage, sesgo, decisiones no explicables."}
],
flashcards: [
{d:1,q:"¿Diferencia risk appetite, tolerance, capacity?",a:"Capacity: máximo absoluto que la org puede soportar. Appetite: cuánto está dispuesta a tomar (estratégico). Tolerance: variación aceptable respecto al appetite (operacional)."},
{d:2,q:"¿Qué es semi-quantitative risk analysis?",a:"Mezcla cualitativo y cuantitativo: usa rangos numéricos (1-5) en categorías cualitativas. Más estructurado que solo high/med/low."},
{d:3,q:"¿Qué es residual risk y por qué importa?",a:"Riesgo restante tras aplicar controles. Importante decidir: aceptar formalmente o aplicar controles adicionales."},
{d:4,q:"¿Qué riesgo principal tiene IoT?",a:"Default credentials, falta de parches, gestión a escala, exposición innecesaria, telemetría que filtra info, integración con OT crítico."}
]
};

// === ISO 27001 Lead Implementer ===
CERT_DATA.iso27001li = {
theory: [
{id:"d1",title:"Domain 1 — ISO 27001 Fundamentals",html:`
<h2>ISO 27001 Lead Implementer (PECB/BSI)</h2>
<div class="lead">Formación de 5 días + examen. Implementador líder de SGSI según ISO/IEC 27001:2022.</div>
<h3>ISO 27001:2022</h3>
<p>Estándar internacional para Sistema de Gestión de Seguridad de la Información (SGSI / ISMS). Certificable. Última versión publicada Oct 2022.</p>
<h3>Estructura</h3>
<p>Cláusulas 4-10 (requisitos del SGSI) + Annex A (93 controles en 4 temas: Organizational, People, Physical, Technological).</p>
<h3>PDCA cycle</h3>
<p>Plan-Do-Check-Act. Mejora continua del SGSI.</p>
<h3>Familia ISO 27000</h3>
<p>27000 (vocabulario), 27001 (requisitos), 27002 (controles guía), 27005 (risk mgmt), 27017 (cloud), 27018 (PII en cloud), 27701 (privacy).</p>
`},
{id:"d2",title:"Domain 2 — ISMS Implementation",html:`
<h2>ISMS Implementation</h2>
<h3>Pasos clave</h3>
<div class="flow">
<span class="step">1. Context</span><span class="arr">→</span>
<span class="step">2. Leadership</span><span class="arr">→</span>
<span class="step">3. Planning</span><span class="arr">→</span>
<span class="step">4. Support</span><span class="arr">→</span>
<span class="step">5. Operation</span><span class="arr">→</span>
<span class="step">6. Eval</span><span class="arr">→</span>
<span class="step">7. Improvement</span>
</div>
<h3>Cláusula 4 — Context</h3>
<p>Internal/external issues, interested parties, scope del SGSI.</p>
<h3>Cláusula 5 — Leadership</h3>
<p>Top management commitment, info sec policy, roles y responsabilidades.</p>
<h3>Cláusula 6 — Planning</h3>
<p>Risk assessment, risk treatment, info sec objectives, Statement of Applicability (SoA).</p>
<h3>Cláusulas 7-10</h3>
<p>Recursos, awareness, comunicación. Operación del SGSI. Evaluación (audits internos, mgmt review). Mejora (NCs, acciones correctivas).</p>
`},
{id:"d3",title:"Domain 3 — Annex A Controls (93 controles)",html:`
<h2>Annex A — Controls</h2>
<h3>4 temas (2022)</h3>
<div class="kvs">
<span class="k">A.5 Organizational</span><span class="v">37 controles. Policies, roles, threat intel, supplier mgmt.</span>
<span class="k">A.6 People</span><span class="v">8 controles. Screening, terms, awareness.</span>
<span class="k">A.7 Physical</span><span class="v">14 controles. Perimetros, equipment, secure areas.</span>
<span class="k">A.8 Technological</span><span class="v">34 controles. Endpoints, AAA, encryption, app sec, network sec.</span>
</div>
<h3>Controles nuevos en 2022</h3>
<p>11 nuevos: threat intelligence, info sec for cloud, ICT readiness for BC, physical security monitoring, config mgmt, info deletion, data masking, DLP, monitoring activities, web filtering, secure coding.</p>
<h3>Statement of Applicability (SoA)</h3>
<p>Documento clave: lista cada control de Annex A, marca si aplica/excluye, justifica.</p>
`},
{id:"d4",title:"Domain 4 — Certification & Audit",html:`
<h2>Certification & Audit</h2>
<h3>Stage 1 audit</h3>
<p>Documentation review. Confirma readiness para Stage 2.</p>
<h3>Stage 2 audit</h3>
<p>On-site, evidencia de implementación efectiva.</p>
<h3>Surveillance audits</h3>
<p>Anuales durante 3 años. Mantienen certificación.</p>
<h3>Recertification</h3>
<p>Cada 3 años — full audit.</p>
<h3>Common findings</h3>
<p>Risk treatment plan incompleto, evidencia insuficiente de awareness, gaps en supplier security, SoA desactualizada.</p>
`}
],
questions: [
{d:1,q:"ISO 27001 cubre:",opts:["Solo cifrado","Sistema de Gestión de Seguridad de la Información (SGSI/ISMS) certificable","Solo cloud","Solo banca"],c:1,e:"ISO 27001 es el estándar para implementar y certificar un ISMS completo."},
{d:1,q:"Diferencia ISO 27001 vs 27002:",opts:["Mismo","27001 requisitos certificables; 27002 guía detallada de implementación de controles","27001 solo cloud","27002 antiguo"],c:1,e:"27001: qué (requisitos auditables). 27002: cómo (guía sobre los controles del Annex A)."},
{d:2,q:"Statement of Applicability (SoA) sirve para:",opts:["Cifrado","Documentar qué controles aplica/excluye y justificación","Backup","Network design"],c:1,e:"SoA es entregable obligatorio. Liste controles Annex A, su aplicabilidad y justificación de inclusión/exclusión."},
{d:3,q:"Annex A 2022 organiza controles en cuántos temas:",opts:["14","4 (Organizational, People, Physical, Technological)","2","8"],c:1,e:"2022 reorganizó de 14 dominios (2013) a 4 temas. Total controles: 93 (vs 114 en 2013)."},
{d:4,q:"Frecuencia de surveillance audits tras certificación:",opts:["Solo al inicio","Anual durante el ciclo de 3 años","Cada 5 años","Solo al recertificar"],c:1,e:"Surveillance audits anuales en años 1 y 2. Recertification full en año 3."}
],
flashcards: [
{d:1,q:"¿Qué es PDCA en ISO?",a:"Plan-Do-Check-Act. Ciclo de mejora continua. Plan: planificar SGSI. Do: implementar. Check: monitorizar y auditar. Act: mejorar."},
{d:2,q:"¿Qué documenta la cláusula 4 (Context) de ISO 27001?",a:"Internal/external issues que afectan al SGSI, partes interesadas y sus requisitos, scope del SGSI (qué cubre, exclusiones)."},
{d:3,q:"Nombra 5 controles nuevos de Annex A 2022.",a:"Threat intelligence (5.7), Info sec para cloud (5.23), Data masking (8.11), DLP (8.12), Web filtering (8.23). Otros: ICT readiness, secure coding, config mgmt..."},
{d:4,q:"¿Qué es una nonconformity en auditoría ISO?",a:"Major NC: incumplimiento sistemático de un requisito (puede impedir certificación). Minor NC: incumplimiento aislado. Observation: oportunidad de mejora."}
]
};

// === ISO 27001 Lead Auditor ===
CERT_DATA.iso27001la = {
theory: [
{id:"d1",title:"Domain 1 — Audit Principles & ISO 19011",html:`
<h2>ISO 27001 Lead Auditor</h2>
<div class="lead">Formación de 5 días. Auditor líder externo o de tercera parte para certificar SGSI.</div>
<h3>ISO 19011</h3>
<p>Guía para audit de management systems. Principios: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based, risk-based.</p>
<h3>Tipos de auditoría</h3>
<p>1st party (interna), 2nd party (cliente al proveedor), 3rd party (certification body).</p>
<h3>Audit programme management</h3>
<p>Establishing, implementing, monitoring, reviewing, improving.</p>
`},
{id:"d2",title:"Domain 2 — Conducting an Audit",html:`
<h2>Conducting an Audit</h2>
<h3>Pasos</h3>
<div class="flow">
<span class="step">Initiating</span><span class="arr">→</span>
<span class="step">Planning</span><span class="arr">→</span>
<span class="step">Conducting</span><span class="arr">→</span>
<span class="step">Reporting</span><span class="arr">→</span>
<span class="step">Follow-up</span>
</div>
<h3>Audit techniques</h3>
<p>Document review, interview, observation, sampling, analysis. Triangulation de evidencia.</p>
<h3>Opening meeting</h3>
<p>Confirma scope, criteria, methods, timeline, comms, contactos, plan.</p>
<h3>Closing meeting</h3>
<p>Presenta findings, NCs, observations. Acordar follow-up.</p>
`},
{id:"d3",title:"Domain 3 — Findings & Reporting",html:`
<h2>Findings & Reporting</h2>
<h3>Tipos de findings</h3>
<div class="kvs">
<span class="k">Major NC</span><span class="v">Incumplimiento sistemático de un requisito; bloquea certificación.</span>
<span class="k">Minor NC</span><span class="v">Incumplimiento aislado; debe corregirse pero no bloquea.</span>
<span class="k">Observation / OFI</span><span class="v">Opportunity for improvement. No requisito incumplido.</span>
<span class="k">Strength</span><span class="v">Práctica notable que excede requisito.</span>
</div>
<h3>Audit report</h3>
<p>Executive summary, scope, findings con evidencia, conclusión, recomendación.</p>
<h3>Evidencia</h3>
<p>Sufficient, reliable, relevant, useful. Documentar fuente.</p>
`},
{id:"d4",title:"Domain 4 — Auditor Competencies & Ethics",html:`
<h2>Auditor Competencies & Ethics</h2>
<h3>Competencias</h3>
<p>Conocimiento ISO 27001/27002, audit techniques, business knowledge, communication, judgment.</p>
<h3>Behaviors</h3>
<p>Ethical, open-minded, diplomatic, observant, perceptive, versatile, tenacious, decisive, self-reliant, collaborative.</p>
<h3>Conflicts of interest</h3>
<p>No auditar lo que has implementado o consultado en últimos 2 años. Independencia mandatoria en 3rd party.</p>
`}
],
questions: [
{d:1,q:"ISO 19011 es:",opts:["Estándar de cifrado","Guía para audit de management systems","SGSI","Cloud security"],c:1,e:"ISO 19011: guía universal para auditoría de cualquier management system (no solo seguridad)."},
{d:1,q:"Audit de 3rd party significa:",opts:["Interna","Por cliente al proveedor","Por certification body independiente","Auditoría de TI"],c:2,e:"3rd party: organismo de certificación independiente. Único que puede emitir cert ISO."},
{d:2,q:"Triangulación en auditoría:",opts:["Tres auditores","Verificar evidencia desde múltiples fuentes (doc + interview + observación)","Tres días","Tres regiones"],c:1,e:"Triangular fortalece la evidencia: si tres fuentes coinciden, el hallazgo es robusto."},
{d:3,q:"Major NC bloquea certificación porque:",opts:["Es estético","Indica fallo sistemático en un requisito de la norma","Es opcional","Es legal"],c:1,e:"Major NC = incumplimiento sistemático o ausencia total de un requisito. Debe resolverse antes de certificar."},
{d:4,q:"Auditor que implementó el SGSI hace 1 año:",opts:["Puede auditarlo","Conflicto de interés — no debe auditarlo en años recientes","Mejor que externo","Es obligatorio"],c:1,e:"Independencia: no auditar lo que has consultado/implementado recientemente. Típicamente 2 años de cooling-off."}
],
flashcards: [
{d:1,q:"¿Cuáles son los principios de auditoría según ISO 19011?",a:"Integrity, fair presentation, due professional care, confidentiality, independence, evidence-based approach, risk-based approach."},
{d:2,q:"¿Qué se acuerda en la opening meeting?",a:"Scope, criteria (estándar), métodos, timeline, equipo, comms, confidentiality, gestión de findings y plan de cierre."},
{d:3,q:"¿Qué hace robusta la evidencia de auditoría?",a:"Sufficient (cantidad), reliable (fuente confiable), relevant (al criterio), useful (al hallazgo). Triangulación entre documentación, interview y observación."},
{d:4,q:"¿Por qué los auditores deben ser tenacious?",a:"Persistentes en buscar evidencia. No conformarse con respuestas evasivas. Buscar hasta confirmar o refutar el hallazgo."}
]
};
