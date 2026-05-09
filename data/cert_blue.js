window.CERT_DATA = window.CERT_DATA || {};

// === CompTIA CySA+ CS0-003 ===
CERT_DATA.cysaplus = {
theory: [
{id:"d1",title:"Domain 1 — Security Operations (33%)",html:`
<h2>Domain 1 — Security Operations</h2>
<div class="lead">Cybersecurity Analyst+. Foco en SOC, threat intelligence, log analysis, monitoring. Sucesor natural de Sec+ en track defensivo.</div>
<h3>Threat intelligence sources</h3>
<p>OSINT, proprietary feeds, ISACs, dark web monitoring, government (CISA), vendor (MS Sec Intel), STIX/TAXII, MISP.</p>
<h3>Threat hunting</h3>
<p>Hipótesis-driven. Frameworks: <b>MITRE ATT&CK</b>, Cyber Kill Chain (Lockheed), Diamond Model.</p>
<h3>Log analysis</h3>
<p>SIEM correlación. Fuentes: firewall, IDS, endpoint, web, DNS, DHCP, email gateway. Eventos clave Windows: 4624 logon, 4625 fail, 4688 process, 4720 user create, 4672 special privileges.</p>
<h3>Email analysis</h3>
<p>Headers (Received, Return-Path), SPF/DKIM/DMARC, attachment sandboxing, URL reputation.</p>
<h3>Indicators</h3>
<p>IoC vs IoA. Network-based, host-based, file-based. Hashing (MD5/SHA), YARA rules.</p>
`},
{id:"d2",title:"Domain 2 — Vulnerability Management (30%)",html:`
<h2>Domain 2 — Vulnerability Management</h2>
<h3>Identificación</h3>
<p>Scanners: Nessus, Qualys, OpenVAS, Rapid7. Authenticated vs unauthenticated, agent-based vs network-based, internal vs external.</p>
<h3>Scoring</h3>
<p><b>CVSS v3.1/v4:</b> Base + Temporal + Environmental. <b>CVE</b> ID. <b>CWE</b> tipo de debilidad. <b>EPSS</b> probabilidad de explotación.</p>
<h3>Análisis</h3>
<p>Validación: confirmar TP/FP. Priorización: CVSS, exposición, criticidad del activo, exploit disponible.</p>
<h3>Software security</h3>
<p>SAST, DAST, IAST, SCA, fuzzing, dependency check.</p>
<h3>Asset inventory</h3>
<p>CMDB, asset criticality, sensitivity. Software inventory, EOL tracking.</p>
<h3>Mitigación</h3>
<p>Patching, segmentation, compensating controls, risk acceptance, exemption con plazo.</p>
`},
{id:"d3",title:"Domain 3 — Incident Response (20%)",html:`
<h2>Domain 3 — Incident Response & Management</h2>
<h3>Proceso (NIST 800-61)</h3>
<div class="flow">
<span class="step">Preparation</span><span class="arr">→</span>
<span class="step">Detection & Analysis</span><span class="arr">→</span>
<span class="step">Containment, Eradication, Recovery</span><span class="arr">→</span>
<span class="step">Post-incident</span>
</div>
<h3>Cyber Kill Chain</h3>
<p>Recon → Weaponization → Delivery → Exploitation → Installation → C2 → Actions on Objectives.</p>
<h3>Diamond Model</h3>
<p>Adversary, Capability, Infrastructure, Victim.</p>
<h3>Forensic analysis</h3>
<p>Order of volatility: registers/cache → RAM → temp → disk → backups. Chain of custody. Bit-for-bit images con write blocker.</p>
<h3>Memory forensics</h3>
<p>Volatility framework. Detectar fileless malware, procesos ocultos, conexiones C2.</p>
`},
{id:"d4",title:"Domain 4 — Reporting & Communication (17%)",html:`
<h2>Domain 4 — Reporting & Communication</h2>
<h3>Vulnerability reports</h3>
<p>Audiencia: técnico vs ejecutivo. KPIs: MTTR, vulnerabilities por severidad, parche compliance. Métricas SLA.</p>
<h3>Incident reports</h3>
<p>Executive summary, timeline, impact, root cause, lessons learned, action items.</p>
<h3>Stakeholder communication</h3>
<p>Internal: management, legal, HR, IT. External: customers, regulators, law enforcement, media. Notificación obligatoria GDPR (72h).</p>
<h3>Métricas SOC</h3>
<p>MTTD (Mean Time to Detect), MTTR (Mean Time to Respond), false positive rate, alerts per analyst.</p>
`}
],
questions: [
{d:1,q:"Framework que cataloga TTPs de adversarios reales:",opts:["NIST CSF","MITRE ATT&CK","ISO 27001","COBIT"],c:1,e:"MITRE ATT&CK es la matriz de Tactics, Techniques and Procedures observadas en ataques reales."},
{d:1,q:"STIX y TAXII son:",opts:["Antivirus","Lenguaje y protocolo para compartir threat intel","Frameworks de IR","Tipos de SIEM"],c:1,e:"STIX: lenguaje estructurado de threat intel. TAXII: transporte para feeds STIX."},
{d:1,q:"Event ID 4625 en Windows indica:",opts:["Login OK","Login fallido","Creación de usuario","Cambio de password"],c:1,e:"4624 OK, 4625 fail, 4688 proceso, 4720 user create."},
{d:2,q:"Diferencia entre escaneo authenticated vs unauthenticated:",opts:["Mismo resultado","Authenticated tiene credenciales y ve más vulnerabilidades reales","Unauthenticated es más profundo","Authenticated solo escanea web"],c:1,e:"Con credenciales el scanner accede al SO y ve parches faltantes, configuración real, mucho más completo."},
{d:2,q:"Métrica que indica probabilidad de explotación en próximos 30 días:",opts:["CVSS","EPSS","CVE","CWE"],c:1,e:"EPSS (Exploit Prediction Scoring System) predice probabilidad real de explotación. CVSS mide severidad teórica."},
{d:2,q:"Tipo de análisis que prueba la app en ejecución:",opts:["SAST","DAST","SCA","Code review"],c:1,e:"DAST (Dynamic) prueba la app corriendo. SAST analiza código fuente sin ejecutar."},
{d:3,q:"Tras detectar host comprometido, primera acción:",opts:["Apagar el servidor","Aislar de la red (containment)","Reinstalar el OS","Notificar a la prensa"],c:1,e:"Containment evita propagación. Apagar destruye evidencia volátil; reinstalar antes elimina pistas."},
{d:3,q:"Orden de volatilidad correcto:",opts:["Disco → RAM → CPU","CPU/registers → RAM → swap → disco → backups","Backups → disco → RAM","Random"],c:1,e:"Más volátil primero. Registros y caché desaparecen al perder energía; disco persiste."},
{d:3,q:"Fase Cyber Kill Chain donde el atacante envía el payload:",opts:["Recon","Weaponization","Delivery","C2"],c:2,e:"Delivery es el envío (email phishing, USB drop, drive-by). Weaponization es preparar el arma."},
{d:4,q:"Plazo notificación de brecha bajo GDPR:",opts:["24h","48h","72h","30 días"],c:2,e:"GDPR Art. 33: notificar a la autoridad supervisora en 72h salvo riesgo bajo."},
{d:4,q:"MTTR mide:",opts:["Tiempo medio entre fallos","Tiempo medio para detectar","Tiempo medio para responder/reparar","Coste anual"],c:2,e:"MTTR (Mean Time To Respond/Repair) — clave para SOC efectividad."},
{d:4,q:"Audiencia ejecutiva en un reporte de incidente quiere ver:",opts:["Hashes y IPs","Resumen impacto, coste, acciones, riesgo residual","Comandos PowerShell","YARA rules"],c:1,e:"Ejecutivos quieren impacto de negocio, decisiones requeridas, no detalles técnicos."}
],
flashcards: [
{d:1,q:"¿Qué es threat hunting?",a:"Búsqueda proactiva de amenazas asumiendo que ya estás comprometido. Hipótesis-driven, basado en TTPs e IoCs, sin esperar a alertas."},
{d:1,q:"¿Qué es la Cyber Kill Chain?",a:"Modelo de Lockheed Martin con 7 fases: Reconnaissance, Weaponization, Delivery, Exploitation, Installation, Command & Control, Actions on Objectives."},
{d:1,q:"¿Qué es el Diamond Model?",a:"Modelo de análisis de intrusiones con 4 vértices: Adversary, Capability, Infrastructure, Victim."},
{d:2,q:"¿Qué es CVSS y qué métricas tiene?",a:"Common Vulnerability Scoring System. Score 0-10. Métricas Base (intrínsecas), Temporal (cambian), Environmental (org-específicas)."},
{d:2,q:"¿Diferencia entre IoC e IoA?",a:"IoC (Indicator of Compromise): evidencia de que ya pasó (hash malware, IP C2). IoA (Indicator of Attack): comportamiento que indica ataque en curso."},
{d:3,q:"¿Qué framework de Volatility se usa para?",a:"Memory forensics. Analiza dumps de RAM para detectar procesos ocultos, conexiones, malware fileless, credenciales en memoria."},
{d:3,q:"¿Qué es chain of custody?",a:"Cadena de custodia: registro inalterable de quién manejó la evidencia, cuándo, cómo. Crítica para validez legal."},
{d:4,q:"¿Qué es MTTD vs MTTR?",a:"MTTD: Mean Time To Detect (cuánto tarda el SOC en darse cuenta). MTTR: Mean Time To Respond (cuánto tarda en contener/resolver)."},
{d:4,q:"¿Qué exige GDPR sobre notificación de brechas?",a:"Notificar a la autoridad supervisora en 72h. Si afecta a derechos del titular, también notificar a los afectados sin demora."}
]
};

// === CompTIA SecurityX (CASP+) CAS-005 ===
CERT_DATA.casp = {
theory: [
{id:"d1",title:"Domain 1 — Governance, Risk & Compliance",html:`
<h2>Domain 1 — Governance, Risk & Compliance</h2>
<div class="lead">SecurityX (antes CASP+) es nivel avanzado, performance-based. Para arquitectos y senior engineers con 10+ años exp.</div>
<h3>Risk management framework</h3>
<p>NIST RMF: Categorize → Select → Implement → Assess → Authorize → Monitor.</p>
<h3>Risk strategies</h3>
<p>Avoid, Transfer, Mitigate, Accept. Risk register, KRI, threshold, owner.</p>
<h3>Compliance frameworks</h3>
<p>NIST CSF, ISO 27001/27002, COBIT, COSO, GDPR, HIPAA, PCI DSS, SOX, FedRAMP, CMMC.</p>
<h3>Third-party risk</h3>
<p>Vendor assessment, SOC 2 Type II, supply chain, MSA, SLA, BPA, NDA.</p>
`},
{id:"d2",title:"Domain 2 — Security Architecture",html:`
<h2>Domain 2 — Security Architecture</h2>
<h3>Enterprise architecture</h3>
<p>Zero Trust (NIST 800-207), SASE, defense in depth, microsegmentation.</p>
<h3>Cloud architecture</h3>
<p>Multi-cloud, hybrid, edge computing, serverless, CSPM, CWPP, CASB, CNAPP.</p>
<h3>Data architecture</h3>
<p>Data lakes, data warehouses, encryption at rest/transit/use, tokenization, DLP.</p>
<h3>Identity architecture</h3>
<p>IAM, IGA (Identity Governance), PAM, federation (SAML/OIDC), passwordless (FIDO2).</p>
<h3>Resilience</h3>
<p>HA, DR, geo-redundancy, immutable backups, BC plan testing.</p>
`},
{id:"d3",title:"Domain 3 — Security Engineering",html:`
<h2>Domain 3 — Security Engineering</h2>
<h3>Cryptography avanzada</h3>
<p>PKI design, HSM, KMS, key rotation, post-quantum cryptography (Kyber, Dilithium), homomorphic encryption.</p>
<h3>Application security</h3>
<p>SDLC seguro, threat modeling (STRIDE, PASTA), SAST/DAST/IAST, SBOM, supply chain (SolarWinds, Log4j lecciones).</p>
<h3>Hardware security</h3>
<p>TPM, HSM, secure enclaves (SGX, TrustZone), Confidential Computing, hardware root of trust.</p>
<h3>Network security</h3>
<p>NGFW, IPS, WAF, NDR, SASE, ZTNA, microsegmentation.</p>
`},
{id:"d4",title:"Domain 4 — Security Operations",html:`
<h2>Domain 4 — Security Operations</h2>
<h3>SOC moderno</h3>
<p>SIEM + SOAR + EDR/XDR + UEBA + threat intel. Fusion centers.</p>
<h3>Threat hunting avanzado</h3>
<p>Hypothesis-driven hunts. PEAK framework. Diamond Model. ATT&CK navigator.</p>
<h3>IR avanzado</h3>
<p>Tabletop, red/purple team exercises, tabletop, business impact, regulatory notification.</p>
<h3>Forensics</h3>
<p>Memoria (Volatility), disco (Autopsy, EnCase), network (Wireshark, Zeek), cloud forensics (CloudTrail, VPC flow logs).</p>
`}
],
questions: [
{d:1,q:"NIST RMF tiene 6 pasos en orden:",opts:["Plan-Do-Check-Act","Categorize-Select-Implement-Assess-Authorize-Monitor","Identify-Protect-Detect-Respond-Recover","Discover-Inventory-Classify-Protect-Audit-Report"],c:1,e:"NIST Risk Management Framework: 6 pasos. Identify-Protect... es NIST CSF (otro)."},
{d:1,q:"SOC 2 Type II difiere de Type I en que:",opts:["Es más barato","Type II audita controles operando durante un periodo (6-12 meses); Type I solo en un momento","Type II es para hardware","Type I es internacional"],c:1,e:"Type I: snapshot. Type II: auditoría sobre tiempo, evidencia operativa real."},
{d:2,q:"CSPM significa:",opts:["Cloud Security Posture Management","Cloud Service Provider Manager","Compliance Standards Policy Module","Customer Service Privacy Mandate"],c:0,e:"CSPM detecta misconfiguraciones en cloud. Complementa CWPP (workload) y CASB (apps SaaS)."},
{d:2,q:"NIST SP 800-207 cubre:",opts:["Cryptography","Zero Trust Architecture","IR","Supply chain"],c:1,e:"NIST SP 800-207 es la guía formal de Zero Trust Architecture."},
{d:3,q:"STRIDE es framework de:",opts:["Cifrado","Threat modeling (Spoofing, Tampering, Repudiation, Info disclosure, DoS, Elevation)","Compliance","Routing"],c:1,e:"STRIDE de Microsoft, usado para identificar amenazas en arquitectura/diseño."},
{d:3,q:"Algoritmo seleccionado por NIST como estándar post-quantum (KEM):",opts:["RSA-4096","Kyber (ML-KEM)","SHA-512","AES-256"],c:1,e:"NIST PQC: Kyber para KEM, Dilithium para firmas. Resisten Shor's algorithm."},
{d:3,q:"SBOM es:",opts:["Software Build OS Manager","Software Bill of Materials — inventario de componentes y dependencias","Secure Boot Mode","Standard Backup Operations Method"],c:1,e:"SBOM lista todos los componentes (open-source, libs) para gestión de supply chain. Exigido por orden ejecutiva US."},
{d:4,q:"UEBA detecta:",opts:["Vulnerabilidades en código","Anomalías de comportamiento de usuarios/entidades para detectar cuentas comprometidas","Phishing","Tráfico cifrado"],c:1,e:"User and Entity Behavior Analytics detecta desviaciones del baseline de comportamiento."}
],
flashcards: [
{d:1,q:"¿Qué es NIST RMF y sus 6 pasos?",a:"Risk Management Framework: Categorize, Select, Implement, Assess, Authorize, Monitor. Aplica controles NIST 800-53 a sistemas federales."},
{d:1,q:"¿Diferencia NIST CSF vs RMF vs ISO 27001?",a:"CSF: marco voluntario con 6 funciones (Govern, Identify, Protect, Detect, Respond, Recover). RMF: proceso para certificar sistemas. ISO 27001: SGSI certificable internacional."},
{d:2,q:"¿Qué es CNAPP?",a:"Cloud-Native Application Protection Platform — combina CSPM + CWPP + CIEM + container security en una sola plataforma."},
{d:2,q:"¿Qué es ZTNA?",a:"Zero Trust Network Access. Acceso por aplicación basado en identidad y contexto, sin VPN tradicional ni red interna abierta."},
{d:3,q:"¿Qué hace un HSM y por qué se usa?",a:"Hardware Security Module: aparato dedicado FIPS 140 que genera, almacena y opera con claves criptográficas. Las claves nunca salen. Para PKI, banca, gobierno."},
{d:3,q:"¿Qué es threat modeling con STRIDE?",a:"Análisis sistemático de amenazas en diseño: Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege."},
{d:4,q:"¿Qué es purple teaming?",a:"Red team y blue team trabajando juntos en tiempo real. El red ataca y comparte TTPs; el blue mejora detecciones inmediatamente."}
]
};

// === GIAC GCIH ===
CERT_DATA.gcih = {
theory: [
{id:"d1",title:"Domain 1 — Incident Handling Process",html:`
<h2>GCIH — Incident Handler</h2>
<div class="lead">SANS GCIH cubre el proceso de IR completo y las técnicas comunes de atacantes que un handler debe reconocer.</div>
<h3>Proceso PICERL (SANS)</h3>
<div class="flow">
<span class="step">Preparation</span><span class="arr">→</span>
<span class="step">Identification</span><span class="arr">→</span>
<span class="step">Containment</span><span class="arr">→</span>
<span class="step">Eradication</span><span class="arr">→</span>
<span class="step">Recovery</span><span class="arr">→</span>
<span class="step">Lessons Learned</span>
</div>
<h3>Preparation</h3>
<p>Equipo (CSIRT), políticas, jump kit, comunicaciones out-of-band, war room.</p>
<h3>Containment</h3>
<p>Short-term (aislar host) vs long-term (parchear, segmentar). Sandboxing, rerouting.</p>
`},
{id:"d2",title:"Domain 2 — Recon & Initial Access",html:`
<h2>Reconnaissance & Initial Access</h2>
<h3>Recon</h3>
<p>OSINT (Shodan, Google dorks, LinkedIn), DNS enum (dig, nslookup, dnsrecon), subdomain enum (Sublist3r, Amass).</p>
<h3>Scanning</h3>
<p>Nmap (-sS SYN, -sV version, -sC scripts, -A aggressive), Masscan rápido, port states.</p>
<h3>Vulnerability scanning</h3>
<p>Nessus, OpenVAS. Authenticated mejor.</p>
<h3>Initial access</h3>
<p>Phishing, exploit servicios públicos, credenciales filtradas (HaveIBeenPwned), supply chain.</p>
`},
{id:"d3",title:"Domain 3 — Common Attacks",html:`
<h2>Common Attacks</h2>
<h3>Web</h3>
<p>SQLi, XSS, CSRF, SSRF, command injection, file upload, deserialization, LFI/RFI, IDOR.</p>
<h3>Network</h3>
<p>ARP spoofing, DNS poisoning, on-path, replay, password attacks (spray, brute, hash crack con Hashcat/JtR).</p>
<h3>Active Directory</h3>
<p>Kerberoasting, AS-REP roasting, Pass-the-Hash, Pass-the-Ticket, Golden/Silver Ticket, DCSync, BloodHound enum.</p>
<h3>Malware</h3>
<p>RATs, ransomware, fileless (PowerShell, WMI), bootkit, rootkit. C2 frameworks: Cobalt Strike, Metasploit, Sliver, Mythic.</p>
`},
{id:"d4",title:"Domain 4 — Defense & Recovery",html:`
<h2>Defense & Recovery</h2>
<h3>Detection</h3>
<p>SIEM correlation, EDR behavioral, IDS/IPS signatures, threat hunting con MITRE ATT&CK.</p>
<h3>Eradication</h3>
<p>Eliminar malware, parchear vuln, rotar credenciales comprometidas, rebuild si es necesario.</p>
<h3>Recovery</h3>
<p>Restore desde backup limpio, monitoreo aumentado post-recovery, validación de integridad.</p>
<h3>Lessons learned</h3>
<p>Post-mortem sin culpa, mejoras al runbook, métricas (MTTD, MTTR).</p>
`}
],
questions: [
{d:1,q:"Modelo PICERL de SANS tiene cuántas fases:",opts:["4","5","6","7"],c:2,e:"PICERL: Preparation, Identification, Containment, Eradication, Recovery, Lessons learned."},
{d:1,q:"Comunicaciones out-of-band durante un incidente sirven para:",opts:["Velocidad","Evitar que el atacante intercepte si comprometió la red corporativa","Cifrado","Compliance"],c:1,e:"Si el atacante está dentro, usar email/Teams corporativos lo alerta. Out-of-band = WhatsApp/Signal/teléfono."},
{d:2,q:"Flag Nmap para escaneo SYN sigiloso:",opts:["-sT","-sS","-sU","-sP"],c:1,e:"-sS SYN scan no completa el handshake (envía SYN, espera SYN-ACK, envía RST). Más sigiloso que -sT (full connect)."},
{d:2,q:"Herramienta para enumeración de subdominios:",opts:["Hashcat","Sublist3r / Amass","Hydra","Burp"],c:1,e:"Sublist3r y Amass enumeran subdominios usando OSINT y bruteforce."},
{d:3,q:"Kerberoasting ataca:",opts:["NTLM","Cuentas de servicio con SPN solicitando TGS y crackeando offline","DNS","Browser sessions"],c:1,e:"Pides TGS para SPN, recibes ticket cifrado con hash de la cuenta de servicio, lo crackeas offline (hashcat mode 13100)."},
{d:3,q:"Pass-the-Hash explota:",opts:["Bug en RSA","NTLM no requiere la contraseña en claro, solo el hash","SHA-1 collision","Bug en Kerberos"],c:1,e:"NTLM autentica con el hash; si lo robas, te autenticas como el usuario sin saber la contraseña."},
{d:3,q:"Cobalt Strike es:",opts:["IDS","C2 framework comercial muy usado por red teams (y abusado por crims)","Antivirus","Vulnerability scanner"],c:1,e:"CS es framework comercial de adversary emulation. Beacon es el implant. Ampliamente abusado por ransomware."},
{d:4,q:"Tras erradicar el malware, el SIGUIENTE paso típico:",opts:["Cerrar el caso","Recovery: restaurar y monitorear","Notificar prensa","Apagar SOC"],c:1,e:"Recovery: restaurar servicio desde estado limpio, monitorear aumentado, validar integridad."}
],
flashcards: [
{d:1,q:"¿Cuáles son las 6 fases PICERL de SANS?",a:"Preparation, Identification, Containment, Eradication, Recovery, Lessons learned."},
{d:1,q:"¿Por qué usar comunicaciones out-of-band durante IR?",a:"Si el atacante está dentro, podría leer email corporativo o Teams. Usar canal independiente (Signal, teléfono, WhatsApp personal) evita alertarlo."},
{d:2,q:"¿Qué hace Nmap con -sV?",a:"Service version detection. Identifica versiones de servicios escuchando en cada puerto."},
{d:2,q:"¿Qué es BloodHound?",a:"Herramienta que mapea relaciones en Active Directory (usuarios, grupos, ACLs, sesiones) y encuentra rutas de ataque al Domain Admin."},
{d:3,q:"¿Qué es Pass-the-Ticket?",a:"Robar un ticket Kerberos (TGT/TGS) de la memoria y reutilizarlo en otro host para autenticarte."},
{d:3,q:"¿Qué es DCSync?",a:"Ataque que abusa del protocolo de replicación de DC para extraer hashes de cualquier cuenta del dominio sin tocar el DC. Requiere permisos Replicating Directory Changes."},
{d:4,q:"¿Por qué hacer post-mortem sin culpa?",a:"Promueve transparencia y aprendizaje. Si la gente teme castigo, oculta info y se pierden las lecciones."}
]
};

// === GIAC GCIA ===
CERT_DATA.gcia = {
theory: [
{id:"d1",title:"Domain 1 — TCP/IP & Packet Analysis",html:`
<h2>GCIA — Intrusion Analyst</h2>
<div class="lead">Foco profundo en análisis de paquetes, IDS, detección de intrusiones a nivel de red. Domina TCP/IP a nivel de bits.</div>
<h3>Cabecera IPv4</h3>
<p>Version, IHL, TOS/DSCP, Total Length, ID, Flags (DF, MF), Fragment Offset, TTL, Protocol, Checksum, Source IP, Dest IP.</p>
<h3>Cabecera TCP</h3>
<p>Source/Dest Port, Seq Number, Ack Number, Data Offset, Flags (URG, ACK, PSH, RST, SYN, FIN), Window, Checksum.</p>
<h3>Three-way handshake y flags</h3>
<p>SYN → SYN-ACK → ACK. Cierre: FIN-ACK / RST. Detección de port scans por flags anómalos (XMAS, NULL, FIN scans).</p>
<h3>Wireshark / tcpdump</h3>
<p>Filtros tcpdump: <code>tcp port 443</code>, <code>host 1.1.1.1</code>, <code>net 10/8</code>. Filtros Wireshark display: <code>tcp.port==443</code>, <code>http.request.method=="POST"</code>.</p>
`},
{id:"d2",title:"Domain 2 — IDS/IPS",html:`
<h2>IDS/IPS</h2>
<h3>Snort / Suricata</h3>
<p>Reglas: <code>alert tcp any any -> any 80 (msg:"HTTP req"; sid:1000001;)</code>. Estructura: action, protocol, src/dst, options.</p>
<h3>Detection methods</h3>
<p>Signature-based, anomaly-based, behavioral, heuristic.</p>
<h3>Tuning</h3>
<p>Reducir false positives. Whitelisting de tráfico legítimo. Threshold/limit/seconds en reglas.</p>
<h3>Zeek (Bro)</h3>
<p>Network analysis framework. Genera logs estructurados (conn.log, http.log, dns.log, ssl.log, files.log).</p>
`},
{id:"d3",title:"Domain 3 — Common Attacks at Network Level",html:`
<h2>Network-level attacks</h2>
<h3>Reconnaissance</h3>
<p>Port scans (SYN, ACK, XMAS, NULL, FIN), OS fingerprinting, banner grabbing.</p>
<h3>Exploit</h3>
<p>Buffer overflow, shellcode patterns, NOP sleds.</p>
<h3>C2</h3>
<p>Beaconing patterns (jitter, intervals), DNS tunneling, ICMP tunneling, HTTPS C2.</p>
<h3>Data exfiltration</h3>
<p>Large outbound transfers, DNS exfil (subdomain encoding), unusual protocols.</p>
`},
{id:"d4",title:"Domain 4 — Application Protocols",html:`
<h2>Application protocols</h2>
<h3>HTTP/HTTPS</h3>
<p>Methods, status codes, headers (User-Agent, Referer, Cookie). TLS handshake, JA3/JA4 fingerprinting.</p>
<h3>DNS</h3>
<p>Query types (A, AAAA, MX, TXT, NS), recursion, DNS tunneling detection (entropy, length).</p>
<h3>SMB / Kerberos</h3>
<p>Lateral movement signals, WMI, PsExec.</p>
<h3>Email</h3>
<p>SMTP envelope vs body, headers análisis, SPF/DKIM/DMARC validation.</p>
`}
],
questions: [
{d:1,q:"En TCP, flag que indica reset de conexión:",opts:["SYN","ACK","RST","FIN"],c:2,e:"RST aborta inmediatamente. FIN cierra ordenadamente."},
{d:1,q:"Filtro tcpdump para tráfico HTTP:",opts:["tcp port 80","port http","tcp 80","udp port 80"],c:0,e:"tcpdump usa BPF: tcp port 80. También port 80 (sin tcp) para TCP+UDP."},
{d:1,q:"TTL en cabecera IP sirve para:",opts:["Tiempo en ms","Prevenir loops infinitos decrementando en cada hop","Cifrar el paquete","Verificar checksum"],c:1,e:"TTL se decrementa cada router. Llega a 0 → descartado y envía ICMP TTL exceeded."},
{d:2,q:"Estructura básica de una regla Snort:",opts:["action protocol src→dst (options)","msg src dst","alert all","src dst payload"],c:0,e:"alert/drop/pass tcp/udp/ip src_ip src_port -> dst_ip dst_port (msg:\"...\"; content:\"...\"; sid:N;)"},
{d:2,q:"Diferencia signature vs anomaly detection:",opts:["Signature usa firmas conocidas, anomaly detecta desviaciones del baseline","Son lo mismo","Anomaly solo en cloud","Signature es más caro"],c:0,e:"Signature: lo conocido. Anomaly: lo distinto. Anomaly puede catch zero-days pero genera más FPs."},
{d:3,q:"XMAS scan envía paquetes con flags:",opts:["SYN","FIN, PSH, URG","ACK","SYN+ACK"],c:1,e:"XMAS prende FIN, PSH, URG (y a veces más). Sistemas BSD/Linux responden RST si puerto cerrado."},
{d:3,q:"Beaconing es:",opts:["Anuncio AP","Comunicación periódica del implant a su C2","Tipo de IDS","Backup"],c:1,e:"Beaconing: el malware contacta al C2 cada X segundos. Detectable por regularidad temporal incluso sobre HTTPS."},
{d:4,q:"JA3 fingerprint identifica:",opts:["Cliente TLS por su 'Client Hello'","Versión del servidor","Navegador por user-agent","DNS server"],c:0,e:"JA3 hashea parámetros del Client Hello TLS. Permite identificar implants/malware por su huella TLS aunque cifrado."}
],
flashcards: [
{d:1,q:"¿Qué flags lleva el primer paquete del 3-way handshake?",a:"SYN. El servidor responde SYN-ACK. El cliente cierra con ACK. Tras esto la conexión está establecida."},
{d:1,q:"¿Para qué sirve el TTL en IP?",a:"Time To Live: se decrementa en cada hop. Cuando llega a 0, el router descarta el paquete y envía ICMP Time Exceeded. Previene loops infinitos."},
{d:2,q:"¿Qué hace Zeek (antes Bro)?",a:"Framework de análisis de red que genera logs estructurados de cada protocolo (conn, http, dns, ssl, files). Útil para hunting y forense."},
{d:2,q:"¿Cómo reducir falsos positivos en Snort?",a:"Whitelist tráfico legítimo, ajustar thresholds, usar suppression rules, refinar el contenido (content) y usar PCRE precisas."},
{d:3,q:"¿Cómo se detecta DNS tunneling?",a:"Entropía alta en subdominios, queries muy largas, volumen anormal a un dominio, registros TXT/NULL inusuales, frecuencia de queries."},
{d:4,q:"¿Qué es un JA3 hash?",a:"Huella del Client Hello TLS (versión, ciphers, extensiones). Identifica clientes específicos incluso sobre tráfico cifrado."}
]
};

// === GIAC GCFA ===
CERT_DATA.gcfa = {
theory: [
{id:"d1",title:"Domain 1 — Forensic Process",html:`
<h2>GCFA — Forensic Analyst</h2>
<div class="lead">Forense profundo: memoria, disco, timeline analysis. Para investigaciones formales con cadena de custodia.</div>
<h3>Proceso forense</h3>
<div class="flow">
<span class="step">Identificación</span><span class="arr">→</span>
<span class="step">Preservación</span><span class="arr">→</span>
<span class="step">Adquisición</span><span class="arr">→</span>
<span class="step">Análisis</span><span class="arr">→</span>
<span class="step">Reporting</span>
</div>
<h3>Adquisición</h3>
<p>Bit-for-bit image con write blocker. Tools: dd, dcfldd, FTK Imager, EnCase. Hash MD5+SHA256 antes y después.</p>
<h3>Order of volatility</h3>
<p>Registros/CPU caché → RAM → procesos/conexiones → archivos temp → disco → backups → logs remotos.</p>
<h3>Chain of custody</h3>
<p>Quién, qué, cuándo, dónde, por qué. Sellado, transporte, almacenamiento.</p>
`},
{id:"d2",title:"Domain 2 — Windows Artifacts",html:`
<h2>Windows artifacts</h2>
<h3>Registry</h3>
<p>Hives: SAM, SECURITY, SYSTEM, SOFTWARE, NTUSER.DAT. Run keys, AutoStart, USB history (USBSTOR), MRU lists, ShimCache, AmCache.</p>
<h3>Filesystem</h3>
<p>NTFS: $MFT, $LogFile, $UsnJrnl, $Boot. Timestamps MACB. Alternate Data Streams.</p>
<h3>Event Logs</h3>
<p>Security (logons), System (servicios), Application. Sysmon (ProcessCreate, NetworkConnect, FileCreate, etc.).</p>
<h3>Browser artifacts</h3>
<p>History, cookies, cache, downloads. SQLite databases (Chrome/Firefox).</p>
<h3>Prefetch / Superfetch</h3>
<p>%SystemRoot%/Prefetch — evidencia de ejecución de programas con timestamp.</p>
<h3>LNK / Jump Lists</h3>
<p>Recent files, archivos abiertos, dispositivos USB conectados.</p>
`},
{id:"d3",title:"Domain 3 — Memory Forensics",html:`
<h2>Memory forensics</h2>
<h3>Adquisición</h3>
<p>Tools: WinPmem, FTK Imager, Magnet RAM Capture, LiME (Linux). Captura RAM en orden de volatilidad.</p>
<h3>Volatility framework</h3>
<p>Plugins: pslist, psscan, pstree, dlllist, netscan, netstat, malfind, hollowfind, mimikatz, hashdump, cmdline, filescan.</p>
<h3>Detección malware</h3>
<p>Procesos huérfanos, parent-child anómalo, code injection, hollowing, hooking. Strings sospechosos en memoria.</p>
<h3>Credential extraction</h3>
<p>LSASS dump → mimikatz para hashes/Kerberos tickets/clear-text passwords.</p>
`},
{id:"d4",title:"Domain 4 — Timeline Analysis",html:`
<h2>Timeline analysis</h2>
<h3>Super timeline</h3>
<p>Combina timestamps de filesystem, eventos, registry, browser, prefetch, sysmon en una sola línea ordenada.</p>
<h3>Tools</h3>
<p>log2timeline (plaso), psort, Timeline Explorer, Eric Zimmerman tools (KAPE, RECmd).</p>
<h3>Análisis</h3>
<p>Reconstruir attacker activity: initial access → persistence → lateral movement → exfil. Identificar gaps y anomalías.</p>
`}
],
questions: [
{d:1,q:"Antes de capturar evidencia digital se debe:",opts:["Apagar el host","Documentar estado, hashear, usar write blocker","Reiniciar","Borrar logs"],c:1,e:"Documentar todo, calcular hash original, usar write blocker para evitar modificar evidencia."},
{d:1,q:"Order of volatility — más volátil primero:",opts:["Backups remotos","Disco","RAM","Registros CPU/caché"],c:3,e:"CPU registers/cache → RAM → swap → disco → backups."},
{d:2,q:"En NTFS, archivo principal con metadata de todos los archivos:",opts:["$Boot","$MFT","$LogFile","$Volume"],c:1,e:"Master File Table contiene una entrada por cada archivo/directorio con metadata, timestamps, ubicación de datos."},
{d:2,q:"Prefetch sirve para saber:",opts:["Backups","Programas ejecutados con timestamp","Conexiones de red","Logins"],c:1,e:"Windows crea archivo .pf por cada exe ejecutado con timestamp del primer y último arranque."},
{d:3,q:"Volatility plugin para listar procesos:",opts:["pslist","netscan","cmdline","filescan"],c:0,e:"pslist sigue la lista doblemente enlazada del kernel. psscan escanea memoria buscando estructuras EPROCESS huérfanas."},
{d:3,q:"Mimikatz extrae credenciales de:",opts:["Disco","Memoria de LSASS","Browser","Registry"],c:1,e:"LSASS (Local Security Authority) almacena credenciales en memoria. Mimikatz las extrae."},
{d:4,q:"log2timeline / plaso genera:",opts:["IDS rules","Super timeline combinando múltiples fuentes de timestamps","Network maps","User reports"],c:1,e:"plaso parsea decenas de artifacts y produce una timeline unificada para análisis cronológico."}
],
flashcards: [
{d:1,q:"¿Qué es un write blocker y por qué se usa?",a:"Hardware o software que permite leer un dispositivo evidencia sin posibilidad de escribir. Preserva la integridad probatoria del medio original."},
{d:1,q:"¿Qué hashes se calculan sobre evidencia?",a:"Típicamente MD5 + SHA256 (o SHA1+SHA256). Antes y después del análisis. Mismo hash = inalterada."},
{d:2,q:"¿Qué son los timestamps MACB en NTFS?",a:"Modified, Accessed, Changed (metadata change), Born (creation). Cada archivo tiene los 4 en $STANDARD_INFORMATION y en $FILE_NAME."},
{d:2,q:"¿Qué es un Alternate Data Stream (ADS) en NTFS?",a:"Stream secundario invisible adjunto a un archivo. Usado por atacantes para ocultar payloads. Listar: dir /R."},
{d:3,q:"¿Qué hace el plugin malfind de Volatility?",a:"Detecta regiones de memoria sospechosas: páginas con permisos PAGE_EXECUTE_READWRITE no asociadas a un módulo, signo de inyección de código."},
{d:4,q:"¿Qué es KAPE?",a:"Kroll Artifact Parser and Extractor (Eric Zimmerman). Recolecta y procesa artifacts forenses Windows muy rápido. Estándar de facto."}
]
};

// === Blue Team Level 1 ===
CERT_DATA.btl1 = {
theory: [
{id:"d1",title:"Phishing Analysis",html:`
<h2>BTL1 — Blue Team Level 1</h2>
<div class="lead">Cert 100% práctica de Security Blue Team. Examen de 24h con incidente real en lab. Foco SOC junior.</div>
<h3>Email headers</h3>
<p>Received chain (de abajo arriba), Return-Path, From, Reply-To. SPF, DKIM, DMARC alignment.</p>
<h3>URL analysis</h3>
<p>Defanging (hxxp[://]), URLscan.io, urlhaus, VirusTotal, Any.run sandbox.</p>
<h3>Attachment analysis</h3>
<p>Hash → VirusTotal, Hybrid Analysis. Static (file, exiftool, oletools para Office). Dynamic en sandbox aislado.</p>
<h3>Common phishing patterns</h3>
<p>Brand impersonation, urgency, credential harvesting (fake login), malicious macros, HTML smuggling, ISO/IMG attachments.</p>
`},
{id:"d2",title:"Threat Intel & OSINT",html:`
<h2>Threat Intel & OSINT</h2>
<h3>Pyramid of Pain</h3>
<p>Hash → IP → Domain → Network/Host artifacts → Tools → TTPs (más doloroso para atacante cambiar arriba).</p>
<h3>OSINT tools</h3>
<p>Shodan, Censys, theHarvester, Maltego, Google dorks, Wayback Machine, social media recon.</p>
<h3>Threat feeds</h3>
<p>AlienVault OTX, MISP, Abuse.ch (URLhaus, MalwareBazaar, Feodo), CISA, vendor blogs.</p>
<h3>YARA</h3>
<p>Reglas para identificar familias de malware por strings/bytes/regex.</p>
`},
{id:"d3",title:"SIEM & Log Analysis",html:`
<h2>SIEM & Log Analysis</h2>
<h3>Splunk básico</h3>
<p>SPL: <code>index=main sourcetype=wineventlog EventCode=4625 | stats count by user</code>. Time picker, fields, dashboards.</p>
<h3>ELK stack</h3>
<p>Elasticsearch + Logstash + Kibana. KQL queries.</p>
<h3>Log sources típicos</h3>
<p>Firewall, Windows Event Log, Sysmon, web server, EDR, DNS, proxy.</p>
<h3>Correlación</h3>
<p>Múltiples eventos pequeños = patrón. Ej: 4625 fallidos seguidos de 4624 = brute force exitoso.</p>
`},
{id:"d4",title:"Digital Forensics & IR",html:`
<h2>Forensics & IR</h2>
<h3>Triage</h3>
<p>Live response: artifacts críticos sin apagar (procesos, conexiones, logs recientes, autoruns).</p>
<h3>Tools</h3>
<p>KAPE, Velociraptor, GRR, FTK Imager, Autopsy, Volatility.</p>
<h3>IR mini-process</h3>
<p>Identificar → Contener → Erradicar → Recuperar → Documentar.</p>
<h3>Reporting</h3>
<p>Executive summary, timeline, IoCs, recomendaciones, lessons learned.</p>
`}
],
questions: [
{d:1,q:"Para analizar headers de email, se leen:",opts:["De arriba abajo","De abajo arriba (Received chain cronológica)","Solo el From","Aleatorio"],c:1,e:"Received headers se añaden al pasar por cada servidor; el más antiguo está abajo."},
{d:1,q:"Defanging hxxp[://] sirve para:",opts:["Hacer la URL más rápida","Evitar clic accidental al compartir IoCs maliciosos","Cifrar","Ocultar al filtro"],c:1,e:"Defang inutiliza la URL para que no se haga clickable en clientes/email/Slack al reportar IoCs."},
{d:2,q:"Pyramid of Pain: cambiar TTPs es para el atacante:",opts:["Trivial","Lo más doloroso de cambiar","Imposible","Igual que cambiar IPs"],c:1,e:"Hashes triviales de cambiar; TTPs (técnicas) requieren rediseñar herramientas y entrenamiento."},
{d:2,q:"YARA es:",opts:["IDS","Lenguaje de reglas para identificar malware por patrones","SIEM","C2"],c:1,e:"YARA permite escribir reglas de strings/bytes/condiciones para clasificar muestras."},
{d:3,q:"En Splunk, ver intentos de login fallidos por usuario:",opts:["index=* | tail","index=main EventCode=4625 | stats count by user","SELECT user FROM logs","grep 4625"],c:1,e:"SPL: filtras por código y agregas con stats."},
{d:3,q:"Correlación útil para detectar brute force exitoso:",opts:["Solo 4624","Solo 4625","Múltiples 4625 seguidos de 4624 desde misma IP","4720"],c:2,e:"Muchos fallos seguidos de éxito desde la misma fuente = posible brute force que coló."},
{d:4,q:"Triage en live response significa:",opts:["Apagar el host","Recolectar evidencia volátil sin apagar para no perderla","Hacer backup","Reinstalar"],c:1,e:"Captura RAM, procesos, conexiones y artifacts antes de cualquier acción que las pierda."}
],
flashcards: [
{d:1,q:"¿Qué es DKIM y cómo se verifica?",a:"Firma criptográfica del email con clave privada del dominio. El receptor recupera la pública del DNS (TXT) y verifica."},
{d:2,q:"¿Qué es la Pyramid of Pain?",a:"Modelo de David Bianco: del más fácil de cambiar para el atacante (hashes, IPs) al más difícil (TTPs). Detectar arriba causa más dolor."},
{d:3,q:"¿Qué es Sysmon y qué eventos genera?",a:"Sysinternals tool que registra eventos detallados: ProcessCreate (1), NetworkConnect (3), ImageLoad (7), FileCreate (11), RegistryEvent (12-14), DnsQuery (22)."},
{d:4,q:"¿Qué hace Velociraptor?",a:"Plataforma de IR/forensics endpoint-based. Permite hacer hunting y collection a escala con queries VQL."}
]
};

// === ISC2 SSCP ===
CERT_DATA.sscp = {
theory: [
{id:"d1",title:"Domain 1 — Security Concepts & Code of Ethics (11%)",html:`
<h2>SSCP — Systems Security Certified Practitioner</h2>
<div class="lead">ISC2 técnica para administradores con 1 año de experiencia. 7 dominios.</div>
<h3>Principios</h3>
<p>CIA, AAA, least privilege, separation of duties, need to know, defense in depth, fail secure.</p>
<h3>ISC2 Code of Ethics</h3>
<p>Proteger sociedad, actuar honorable/legal, dar servicio diligente, avanzar la profesión.</p>
<h3>Privacy</h3>
<p>PII, PHI, GDPR, HIPAA, data classification, retention, disposal.</p>
`},
{id:"d2",title:"Domain 2 — Access Controls (15%)",html:`
<h2>Access Controls</h2>
<h3>Authentication factors</h3>
<p>Algo que sabes, tienes, eres, somewhere you are, something you do. MFA combina factores DISTINTOS.</p>
<h3>Modelos</h3>
<p>MAC, DAC, RBAC, ABAC, Rule-based.</p>
<h3>Federation / SSO</h3>
<p>SAML, OAuth 2.0, OIDC, Kerberos.</p>
<h3>IAM lifecycle</h3>
<p>Provisioning → cambios → de-provisioning. Joiner-Mover-Leaver.</p>
`},
{id:"d3",title:"Domain 3 — Risk Identification (15%)",html:`
<h2>Risk Identification, Monitoring & Analysis</h2>
<h3>Risk concepts</h3>
<p>Threat × Vulnerability = Risk. Quantitative (SLE, ARO, ALE) vs qualitative.</p>
<h3>Monitoring</h3>
<p>SIEM, IDS/IPS, FIM, EDR, vulnerability scanning continuous.</p>
<h3>Logs</h3>
<p>Aggregation, correlation, alerting, retention.</p>
`},
{id:"d4",title:"Domain 4 — IR & Recovery (14%)",html:`
<h2>Incident Response & Recovery</h2>
<h3>Process</h3>
<p>Preparation, Detection & Analysis, Containment/Eradication/Recovery, Post-incident.</p>
<h3>BC/DR</h3>
<p>BIA, RTO, RPO, MTTR, MTBF. Backup strategies. Hot/warm/cold sites.</p>
<h3>Forensics</h3>
<p>Chain of custody, order of volatility, evidence handling.</p>
`},
{id:"d5",title:"Domain 5-7 — Crypto, Network, Systems/App Security",html:`
<h2>Cryptography (9%)</h2>
<p>Symmetric (AES, ChaCha20), Asymmetric (RSA, ECC), Hashing (SHA-2), Digital signatures, PKI, TLS, VPN.</p>
<h2>Network Security (16%)</h2>
<p>OSI/TCP-IP, segmentation, firewall types, IDS/IPS, NAC, VPN, wireless (WPA3), DNS security.</p>
<h2>Systems & Application Security (20%)</h2>
<p>Hardening, patching, malware defense, secure SDLC, application allow listing, sandboxing, web security (OWASP Top 10).</p>
`}
],
questions: [
{d:1,q:"Principio que limita el acceso al mínimo necesario:",opts:["Need to know","Least privilege","Defense in depth","Fail secure"],c:1,e:"Least privilege: mínimos permisos. Need to know es similar pero centrado en información concreta."},
{d:2,q:"Combinación que SÍ es MFA verdadera:",opts:["Password + PIN","Password + token TOTP","Password + respuesta secreta","PIN + frase secreta"],c:1,e:"Factores distintos: SABES (password) + TIENES (token). Las otras son todas algo que sabes."},
{d:3,q:"Si SLE = 5000€ y ARO = 0.5, ALE =",opts:["10000","2500","5500","250"],c:1,e:"ALE = SLE × ARO = 5000 × 0.5 = 2500€/año."},
{d:4,q:"RPO de 24h significa:",opts:["Restaurar en 24h","Aceptar perder hasta 24h de datos","Backup tarda 24h","SLA de 24h"],c:1,e:"RPO mide datos máximos perdibles."},
{d:5,q:"Algoritmo asimétrico moderno con claves cortas:",opts:["DES","AES","ECC","SHA"],c:2,e:"Elliptic Curve Cryptography ofrece seguridad equivalente a RSA con claves mucho más cortas."}
],
flashcards: [
{d:1,q:"¿Qué es separation of duties?",a:"Dividir tareas críticas entre múltiples personas para que ninguna pueda completar sola un proceso sensible. Reduce fraude."},
{d:2,q:"¿Diferencia entre identification, authentication y authorization?",a:"Identification: quién dices ser. Authentication: probar que eres. Authorization: qué puedes hacer."},
{d:3,q:"¿Qué hace un FIM y por qué es útil?",a:"File Integrity Monitoring detecta cambios no autorizados en archivos críticos del sistema. Indica posible compromiso."},
{d:4,q:"¿Qué es BIA?",a:"Business Impact Analysis: identifica funciones críticas, dependencias e impacto si caen. Da RTO/RPO."},
{d:5,q:"OWASP Top 10 actual incluye:",a:"Broken Access Control, Cryptographic Failures, Injection, Insecure Design, Security Misconfiguration, Vulnerable Components, ID/Auth Failures, Software/Data Integrity, Security Logging Failures, SSRF."}
]
};
