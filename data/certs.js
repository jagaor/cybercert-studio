window.CERTS = [
// === FOUNDATIONAL ===
{id:"secplus", name:"Security+", code:"SY0-701", vendor:"CompTIA", track:"foundational", level:"Foundational", hours:"~90h", color:"#7c5cff",
 desc:"Certificación de entrada al mundo cibersec. Cubre amenazas, arquitectura, operaciones, gobernanza. Estándar de facto para roles junior SOC/IT.",
 status:"ready"},
{id:"netplus", name:"Network+", code:"N10-009", vendor:"CompTIA", track:"foundational", level:"Foundational", hours:"~80h", color:"#22d3ee",
 desc:"Fundamentos de redes: TCP/IP, routing, switching, wireless, troubleshooting. Pre-requisito mental para Sec+.", status:"ready"},
{id:"isc2cc", name:"Certified in Cybersecurity (CC)", code:"CC", vendor:"ISC2", track:"foundational", level:"Entry", hours:"~40h", color:"#f59e0b",
 desc:"Cert gratuita de entrada de ISC2. Cinco dominios básicos. Buen primer paso si nunca has tocado seguridad.", status:"ready"},
{id:"aplus", name:"A+", code:"220-1101/1102", vendor:"CompTIA", track:"foundational", level:"Entry", hours:"~80h", color:"#34d399",
 desc:"Hardware, SO, troubleshooting de IT general. Útil si vienes de cero absoluto.", status:"ready"},

// === BLUE TEAM / DEFENSIVE ===
{id:"cysaplus", name:"CySA+", code:"CS0-003", vendor:"CompTIA", track:"blue", level:"Intermediate", hours:"~120h", color:"#3b82f6",
 desc:"Cybersecurity Analyst. Enfoque SOC: análisis de amenazas, gestión de vulnerabilidades, IR, threat hunting. Paso natural tras Sec+.", status:"ready"},
{id:"casp", name:"SecurityX (CASP+)", code:"CAS-005", vendor:"CompTIA", track:"blue", level:"Advanced", hours:"~150h", color:"#8b5cf6",
 desc:"Antes CASP+. Nivel avanzado: arquitectura de seguridad empresarial, gobernanza, riesgo. Para arquitectos.", status:"ready"},
{id:"gcih", name:"GCIH", code:"GCIH", vendor:"GIAC/SANS", track:"blue", level:"Intermediate", hours:"~120h", color:"#ef4444",
 desc:"GIAC Certified Incident Handler. Manejo de incidentes en profundidad. Reconocida en sector financiero/gov.", status:"ready"},
{id:"gcia", name:"GCIA", code:"GCIA", vendor:"GIAC/SANS", track:"blue", level:"Intermediate", hours:"~120h", color:"#dc2626",
 desc:"GIAC Certified Intrusion Analyst. Análisis de tráfico, IDS, packet analysis con Wireshark/tcpdump.", status:"ready"},
{id:"gcfa", name:"GCFA", code:"GCFA", vendor:"GIAC/SANS", track:"blue", level:"Advanced", hours:"~150h", color:"#b91c1c",
 desc:"GIAC Certified Forensic Analyst. Forense profundo: memoria, disco, timeline analysis.", status:"ready"},
{id:"btl1", name:"Blue Team Level 1", code:"BTL1", vendor:"Security Blue Team", track:"blue", level:"Intermediate", hours:"~100h", color:"#0ea5e9",
 desc:"Práctico 100% hands-on: phishing analysis, OSINT, IR, threat intel, SIEM. Examen 24h en lab real.", status:"ready"},
{id:"sscp", name:"SSCP", code:"SSCP", vendor:"ISC2", track:"blue", level:"Intermediate", hours:"~100h", color:"#0891b2",
 desc:"Systems Security Certified Practitioner. ISC2 técnica para administradores con 1 año experiencia.", status:"ready"},
{id:"sc200", name:"SC-200 Security Operations Analyst", code:"SC-200", vendor:"Microsoft", track:"blue", level:"Intermediate", hours:"~100h", color:"#00a4ef",
 desc:"Microsoft Security Operations Analyst. Defender XDR, Microsoft Sentinel (SIEM/SOAR), Defender for Cloud, KQL, threat hunting e IR en el ecosistema Microsoft.", status:"ready"},

// === RED TEAM / OFFENSIVE ===
{id:"pentest", name:"PenTest+", code:"PT0-003", vendor:"CompTIA", track:"red", level:"Intermediate", hours:"~120h", color:"#dc2626",
 desc:"Pentesting end-to-end: planning, recon, exploitation, reporting. Más amplio que OSCP, menos profundo.", status:"ready"},
{id:"oscp", name:"OSCP", code:"OSCP", vendor:"OffSec", track:"red", level:"Advanced", hours:"~300h+", color:"#f97316",
 desc:"Offensive Security Certified Professional. La cert ofensiva más respetada. Examen 24h hackeando lab. 'Try Harder'.", status:"ready"},
{id:"ejpt", name:"eJPT", code:"eJPTv2", vendor:"INE/eLearnSecurity", track:"red", level:"Entry", hours:"~80h", color:"#fb923c",
 desc:"eLearnSecurity Junior Penetration Tester. Buena entrada práctica al pentesting antes de OSCP.", status:"ready"},
{id:"ceh", name:"CEH", code:"CEH v13", vendor:"EC-Council", track:"red", level:"Intermediate", hours:"~100h", color:"#ea580c",
 desc:"Certified Ethical Hacker. Muy demandada por HR aunque criticada técnicamente. Reconocida por DoD.", status:"ready"},
{id:"osep", name:"OSEP", code:"OSEP", vendor:"OffSec", track:"red", level:"Advanced", hours:"~250h+", color:"#c2410c",
 desc:"Offensive Security Experienced Penetration Tester. Bypass AV/EDR, AD attacks. Continuación de OSCP.", status:"ready"},
{id:"oswe", name:"OSWE", code:"OSWE", vendor:"OffSec", track:"red", level:"Advanced", hours:"~250h+", color:"#9a3412",
 desc:"Offensive Security Web Expert. Especialización en web app pentesting con análisis de código fuente.", status:"ready"},
{id:"crto", name:"CRTO", code:"CRTO", vendor:"Zero-Point Security", track:"red", level:"Advanced", hours:"~150h", color:"#7c2d12",
 desc:"Certified Red Team Operator. Cobalt Strike, evasion, AD attacks. Muy práctica.", status:"ready"},

// === CLOUD SECURITY ===
{id:"awssec", name:"AWS Security – Specialty", code:"SCS-C02", vendor:"AWS", track:"cloud", level:"Advanced", hours:"~150h", color:"#ff9900",
 desc:"Especialización en seguridad AWS: IAM, KMS, GuardDuty, encryption, incident response en cloud.", status:"ready"},
{id:"az500", name:"Azure Security Engineer", code:"AZ-500", vendor:"Microsoft", track:"cloud", level:"Intermediate", hours:"~120h", color:"#0078d4",
 desc:"Azure Security Engineer Associate. Identity, network, compute, data security en Azure.", status:"ready"},
{id:"gcpsec", name:"GCP Security Engineer", code:"PCSE", vendor:"Google Cloud", track:"cloud", level:"Intermediate", hours:"~120h", color:"#4285f4",
 desc:"Professional Cloud Security Engineer. Identity, data, infra security en GCP.", status:"ready"},
{id:"ccsp", name:"CCSP", code:"CCSP", vendor:"ISC2", track:"cloud", level:"Advanced", hours:"~150h", color:"#06b6d4",
 desc:"Certified Cloud Security Professional. Vendor-neutral. 5 años exp recomendados. Premium para arquitectos cloud.", status:"ready"},

// === GRC / MANAGEMENT ===
{id:"cissp", name:"CISSP", code:"CISSP", vendor:"ISC2", track:"grc", level:"Expert", hours:"~250h+", color:"#1e40af",
 desc:"Gold standard de gestión. 8 dominios. 5 años exp. Para CISO/arquitectos/managers. Muy valorada.", status:"ready"},
{id:"cism", name:"CISM", code:"CISM", vendor:"ISACA", track:"grc", level:"Expert", hours:"~200h", color:"#1e3a8a",
 desc:"Certified Information Security Manager. Foco en gestión y gobernanza. Alternativa a CISSP más managerial.", status:"ready"},
{id:"cisa", name:"CISA", code:"CISA", vendor:"ISACA", track:"grc", level:"Advanced", hours:"~200h", color:"#1e293b",
 desc:"Certified Information Systems Auditor. Para auditores IT. Muy demandada en Big4 y banca.", status:"ready"},
{id:"crisc", name:"CRISC", code:"CRISC", vendor:"ISACA", track:"grc", level:"Advanced", hours:"~150h", color:"#0f172a",
 desc:"Certified in Risk and Information Systems Control. Gestión de riesgo IT.", status:"ready"},
{id:"iso27001li", name:"ISO 27001 Lead Implementer", code:"ISO27001-LI", vendor:"PECB/BSI", track:"grc", level:"Intermediate", hours:"~80h", color:"#475569",
 desc:"Implementador líder de SGSI según ISO 27001. Necesario en consultoras de cumplimiento.", status:"ready"},
{id:"iso27001la", name:"ISO 27001 Lead Auditor", code:"ISO27001-LA", vendor:"PECB/BSI", track:"grc", level:"Intermediate", hours:"~80h", color:"#334155",
 desc:"Auditor líder de SGSI. Para auditores externos certificadores.", status:"ready"},

// === NETWORK SECURITY ===
{id:"ccnasec", name:"CCNA", code:"200-301", vendor:"Cisco", track:"network", level:"Foundational", hours:"~150h", color:"#1ba0d7",
 desc:"Cisco Certified Network Associate. Networking fundamental Cisco. Base para certs Cisco superiores.", status:"ready"},
{id:"ccnp", name:"CCNP Security", code:"350-701", vendor:"Cisco", track:"network", level:"Advanced", hours:"~250h", color:"#0c80b8",
 desc:"Cisco Certified Network Professional Security. Avanzada en seguridad de red Cisco.", status:"ready"},
{id:"jncissec", name:"JNCIS-SEC", code:"JN0-335", vendor:"Juniper", track:"network", level:"Intermediate", hours:"~120h", color:"#84b818",
 desc:"Juniper Networks Certified Specialist Security. Seguridad en plataformas Juniper.", status:"ready"},

// === OPOSICIONES (España) ===
{id:"taic1", name:"TAI — Técnico Auxiliar de Informática del Estado", code:"TAI C1", vendor:"Estado / AGE", track:"oposiciones", level:"C1", hours:"~600h", color:"#c8102e",
 desc:"Oposición al Cuerpo de Técnicos Auxiliares de Informática de la Administración General del Estado (grupo C1). Hardware, SO, redes, BBDD, programación, ofimática, seguridad y normativa española (ENS, LOPDGDD, Ley 39/2015, 40/2015).", status:"ready"}
];

window.TRACKS = [
{id:"foundational", name:"Foundational", icon:"◉", desc:"Punto de entrada. Sin requisitos previos. Para empezar."},
{id:"blue", name:"Blue Team / Defensa", icon:"🛡", desc:"SOC, IR, threat hunting, forense, monitoring."},
{id:"red", name:"Red Team / Ofensiva", icon:"⚔", desc:"Pentesting, ethical hacking, exploitation, evasion."},
{id:"cloud", name:"Cloud Security", icon:"☁", desc:"AWS, Azure, GCP. Seguridad en entornos cloud."},
{id:"grc", name:"GRC / Gestión", icon:"⚖", desc:"Governance, riesgo, cumplimiento, auditoría, management."},
{id:"network", name:"Network Security", icon:"⇄", desc:"Cisco, Juniper. Seguridad de infraestructura de red."},
{id:"oposiciones", name:"Oposiciones (España)", icon:"🏛", desc:"Cuerpos TIC de la Administración Pública española. Temario oficial + normativa."}
];
