window.CERT_DATA = window.CERT_DATA || {};

// === Network+ N10-009 ===
CERT_DATA.netplus = {
theory: [
{id:"d1",title:"Domain 1 — Networking Concepts (23%)",html:`
<h2>Domain 1 — Networking Concepts</h2>
<div class="lead">Modelo OSI/TCP-IP, dispositivos, topologías, tipos de red, protocolos básicos. Base de todo lo demás.</div>
<h3>Modelo OSI (7 capas)</h3>
<table>
<tr><th>Capa</th><th>Función</th><th>PDU</th><th>Ejemplos</th></tr>
<tr><td>7 Aplicación</td><td>Interacción usuario</td><td>Data</td><td>HTTP, DNS, SMTP</td></tr>
<tr><td>6 Presentación</td><td>Formato/cifrado</td><td>Data</td><td>TLS, JPEG</td></tr>
<tr><td>5 Sesión</td><td>Sesiones</td><td>Data</td><td>NetBIOS, RPC</td></tr>
<tr><td>4 Transporte</td><td>Entrega fiable</td><td>Segmento</td><td>TCP, UDP</td></tr>
<tr><td>3 Red</td><td>Routing/IPs</td><td>Paquete</td><td>IP, ICMP, OSPF</td></tr>
<tr><td>2 Enlace</td><td>MAC/frames</td><td>Frame</td><td>Ethernet, ARP</td></tr>
<tr><td>1 Físico</td><td>Cables/señales</td><td>Bits</td><td>RJ45, fibra</td></tr>
</table>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogía correo postal:</b> escribes carta (App), traduces idioma (Pres), abres conversación (Ses), divides en sobres (Trans), ruteas por código postal (Red), pones a camión (Enlace), camión rueda por carretera (Físico).</div></div>
<h3>TCP vs UDP</h3>
<div class="compare">
<div><h5>TCP</h5><p>Orientado a conexión. 3-way handshake (SYN, SYN-ACK, ACK). Fiable, ordenado, control de flujo. <b>Web, email, FTP.</b></p></div>
<div><h5>UDP</h5><p>Sin conexión. Sin garantía de entrega. Rápido, bajo overhead. <b>Streaming, VoIP, DNS, juegos.</b></p></div>
</div>
<h3>Direccionamiento IP</h3>
<ul>
<li><b>IPv4:</b> 32 bits, notación decimal (192.168.1.1). Clases A/B/C, CIDR (/24).</li>
<li><b>IPv6:</b> 128 bits, hexadecimal (2001:db8::1). Sin NAT necesario.</li>
<li><b>Privadas (RFC1918):</b> 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.</li>
<li><b>APIPA:</b> 169.254.x.x — autoconfig si DHCP falla.</li>
<li><b>Loopback:</b> 127.0.0.1 (IPv4), ::1 (IPv6).</li>
</ul>
<h3>Puertos comunes</h3>
<p>FTP 20/21 · SSH 22 · Telnet 23 · SMTP 25 · DNS 53 · DHCP 67/68 · TFTP 69 · HTTP 80 · POP3 110 · NTP 123 · IMAP 143 · SNMP 161 · LDAP 389 · HTTPS 443 · SMB 445 · LDAPS 636 · IMAPS 993 · POP3S 995 · SQL 1433/3306/5432 · RDP 3389</p>
`},
{id:"d2",title:"Domain 2 — Network Implementation (20%)",html:`
<h2>Domain 2 — Network Implementation</h2>
<h3>Dispositivos</h3>
<div class="kvs">
<span class="k">Hub</span><span class="v">Capa 1, broadcast a todos. Obsoleto.</span>
<span class="k">Switch</span><span class="v">Capa 2, MAC table, segmenta colisiones.</span>
<span class="k">Router</span><span class="v">Capa 3, conecta redes diferentes.</span>
<span class="k">Bridge</span><span class="v">Une 2 segmentos L2.</span>
<span class="k">AP</span><span class="v">Wireless access point.</span>
<span class="k">Firewall</span><span class="v">Filtra tráfico, L3-L7.</span>
<span class="k">Load balancer</span><span class="v">Distribuye carga.</span>
</div>
<h3>Cableado</h3>
<ul>
<li><b>Cat5e/6/6a/7/8</b> — par trenzado, distancias 100m típicas.</li>
<li><b>Fibra:</b> single-mode (largas distancias), multi-mode (corto).</li>
<li><b>Coaxial:</b> RG6 (cable TV/internet).</li>
<li><b>Conectores:</b> RJ45, LC, SC, ST.</li>
</ul>
<h3>Wireless</h3>
<table>
<tr><th>Estándar</th><th>Banda</th><th>Velocidad</th></tr>
<tr><td>802.11n</td><td>2.4/5 GHz</td><td>~600 Mbps</td></tr>
<tr><td>802.11ac (Wi-Fi 5)</td><td>5 GHz</td><td>~3.5 Gbps</td></tr>
<tr><td>802.11ax (Wi-Fi 6/6E)</td><td>2.4/5/6 GHz</td><td>~9.6 Gbps</td></tr>
<tr><td>802.11be (Wi-Fi 7)</td><td>2.4/5/6 GHz</td><td>~46 Gbps</td></tr>
</table>
<h3>VLAN</h3>
<p>Virtual LAN — segmenta L2 lógicamente. Trunk port (802.1Q) lleva varias VLANs.</p>
`},
{id:"d3",title:"Domain 3 — Network Operations (19%)",html:`
<h2>Domain 3 — Network Operations</h2>
<h3>Documentación</h3>
<p>Diagramas físicos/lógicos, baselines, runbooks, change management, asset inventory.</p>
<h3>Métricas y monitoreo</h3>
<ul>
<li><b>SNMP</b> — gestión de dispositivos. v3 cifrado.</li>
<li><b>NetFlow/sFlow/IPFIX</b> — metadata de flujos.</li>
<li><b>Syslog</b> — agregación de logs.</li>
<li><b>SIEM</b> — correlación.</li>
</ul>
<h3>Alta disponibilidad</h3>
<div class="kvs">
<span class="k">Redundancia</span><span class="v">Componentes duplicados.</span>
<span class="k">Failover</span><span class="v">Conmutación automática.</span>
<span class="k">FHRP</span><span class="v">First Hop Redundancy: HSRP, VRRP, GLBP.</span>
<span class="k">LACP</span><span class="v">Link Aggregation — bond varios enlaces.</span>
<span class="k">STP</span><span class="v">Spanning Tree — evita loops L2.</span>
</div>
<h3>DNS</h3>
<p>Records: <b>A</b> (IPv4), <b>AAAA</b> (IPv6), <b>CNAME</b> (alias), <b>MX</b> (mail), <b>NS</b> (name server), <b>PTR</b> (reverse), <b>SOA</b> (start of authority), <b>TXT</b> (SPF/DKIM).</p>
<h3>DHCP</h3>
<p>Proceso DORA: Discover → Offer → Request → Acknowledge. Lease, scope, reservation.</p>
`},
{id:"d4",title:"Domain 4 — Network Security (14%)",html:`
<h2>Domain 4 — Network Security</h2>
<h3>Conceptos básicos</h3>
<p>CIA, AAA, defense in depth, least privilege, zero trust.</p>
<h3>Ataques comunes</h3>
<div class="kvs">
<span class="k">DoS/DDoS</span><span class="v">Saturar servicio.</span>
<span class="k">On-path/MITM</span><span class="v">Interceptar comunicación.</span>
<span class="k">DNS poisoning</span><span class="v">Envenenar caché.</span>
<span class="k">ARP spoofing</span><span class="v">Suplantar MAC.</span>
<span class="k">VLAN hopping</span><span class="v">Saltar VLANs vía trunk mal configurado.</span>
<span class="k">Rogue AP / Evil twin</span><span class="v">AP malicioso.</span>
</div>
<h3>Hardening</h3>
<p>Cambiar default creds, deshabilitar puertos no usados, port security, BPDU guard, DHCP snooping, DAI, 802.1X, ACLs.</p>
<h3>Seguridad inalámbrica</h3>
<p>WPA3 > WPA2 > WPA > WEP. Enterprise (802.1X) vs Personal (PSK). EAP-TLS más seguro.</p>
`},
{id:"d5",title:"Domain 5 — Network Troubleshooting (24%)",html:`
<h2>Domain 5 — Network Troubleshooting</h2>
<h3>Metodología CompTIA</h3>
<div class="flow">
<span class="step">1. Identificar problema</span><span class="arr">→</span>
<span class="step">2. Establecer teoría</span><span class="arr">→</span>
<span class="step">3. Probar teoría</span><span class="arr">→</span>
<span class="step">4. Plan de acción</span><span class="arr">→</span>
<span class="step">5. Implementar</span><span class="arr">→</span>
<span class="step">6. Verificar</span><span class="arr">→</span>
<span class="step">7. Documentar</span>
</div>
<h3>Herramientas software</h3>
<div class="kvs">
<span class="k">ping</span><span class="v">Conectividad ICMP.</span>
<span class="k">traceroute / tracert</span><span class="v">Ruta saltos.</span>
<span class="k">nslookup / dig</span><span class="v">Consultas DNS.</span>
<span class="k">ipconfig / ifconfig / ip</span><span class="v">Config de interfaz.</span>
<span class="k">netstat / ss</span><span class="v">Conexiones activas, puertos.</span>
<span class="k">arp -a</span><span class="v">Tabla ARP.</span>
<span class="k">tcpdump / Wireshark</span><span class="v">Captura paquetes.</span>
<span class="k">nmap</span><span class="v">Escaneo de puertos.</span>
<span class="k">iperf</span><span class="v">Test ancho de banda.</span>
</div>
<h3>Hardware</h3>
<p>Cable tester, tone generator/probe, OTDR (fibra), loopback plug, multímetro.</p>
<h3>Problemas comunes</h3>
<ul>
<li><b>IP duplicada</b> — colisión, expulsa al recién llegado.</li>
<li><b>Wrong VLAN/subnet</b> — no conecta o no enruta.</li>
<li><b>MTU mismatch</b> — fragmentación, pérdida.</li>
<li><b>Broadcast storm</b> — STP mal configurado.</li>
<li><b>Crosstalk/EMI</b> — problemas físicos en cable.</li>
</ul>
`}
],
questions: [
{d:1,q:"En qué capa OSI opera un router?",opts:["Capa 2 (Enlace)","Capa 3 (Red)","Capa 4 (Transporte)","Capa 7 (Aplicación)"],c:1,e:"Routers operan en capa 3, toman decisiones de routing basadas en direcciones IP."},
{d:1,q:"Diferencia clave entre TCP y UDP:",opts:["TCP es más rápido","TCP es orientado a conexión y fiable, UDP es sin conexión y best-effort","TCP solo para web","UDP usa puertos, TCP no"],c:1,e:"TCP usa 3-way handshake, garantiza entrega y orden. UDP envía y olvida."},
{d:1,q:"Rango privado RFC1918 que NO existe:",opts:["10.0.0.0/8","172.16.0.0/12","192.168.0.0/16","200.0.0.0/8"],c:3,e:"Solo existen 10/8, 172.16/12, 192.168/16. 200.0.0.0 es público."},
{d:1,q:"Puerto por defecto de SSH:",opts:["21","22","23","25"],c:1,e:"SSH usa TCP 22. FTP 21, Telnet 23, SMTP 25."},
{d:1,q:"Qué dirección significa 'esta misma máquina' en IPv4?",opts:["0.0.0.0","127.0.0.1","255.255.255.255","169.254.0.1"],c:1,e:"127.0.0.1 es loopback. 169.254 es APIPA, 255.255.255.255 broadcast."},
{d:2,q:"Estándar wireless de banda 6 GHz:",opts:["802.11n","802.11ac","Wi-Fi 6E (802.11ax)","Wi-Fi 4"],c:2,e:"Wi-Fi 6E añade banda 6 GHz al estándar 802.11ax. Wi-Fi 7 (802.11be) también."},
{d:2,q:"Para llevar varias VLANs entre dos switches se usa un puerto:",opts:["Access","Trunk (802.1Q)","Hub","Loopback"],c:1,e:"Trunk port etiqueta frames con VLAN ID (802.1Q) para llevar múltiples VLANs."},
{d:2,q:"Cable categoría que soporta 10 Gbps a 100m:",opts:["Cat5","Cat5e","Cat6a","Cat3"],c:2,e:"Cat6a soporta 10GBASE-T a 100m. Cat6 solo a 55m. Cat5e máximo 1 Gbps."},
{d:3,q:"Proceso correcto DHCP en orden:",opts:["Discover, Request, Offer, ACK","Discover, Offer, Request, ACK (DORA)","Request, Offer, ACK, Discover","Offer, Discover, ACK, Request"],c:1,e:"DORA: Discover (cliente broadcast) → Offer (server) → Request (cliente acepta) → ACK."},
{d:3,q:"Record DNS para alias de un nombre a otro:",opts:["A","CNAME","MX","PTR"],c:1,e:"CNAME crea alias canónico. A apunta a IPv4, MX a mail server, PTR es reverse."},
{d:3,q:"Protocolo de redundancia de gateway de Cisco:",opts:["VRRP","HSRP","GLBP","Todos los anteriores son FHRP"],c:3,e:"HSRP (Cisco), VRRP (estándar IETF), GLBP (Cisco con load balancing) son todos FHRP."},
{d:4,q:"Atacante envía respuestas ARP no solicitadas para asociar su MAC con la IP del gateway. Ataque:",opts:["DNS poisoning","ARP spoofing","DHCP starvation","STP attack"],c:1,e:"ARP spoofing/poisoning permite MITM al engañar a hosts sobre la MAC del gateway."},
{d:4,q:"Función principal de DHCP snooping:",opts:["Acelerar DHCP","Bloquear servidores DHCP no autorizados (rogue)","Cifrar DHCP","Asignar IPs estáticas"],c:1,e:"DHCP snooping marca puertos como trusted/untrusted y bloquea ofertas DHCP en untrusted."},
{d:4,q:"Mejor método para asegurar Wi-Fi corporativo en 2026:",opts:["WEP","WPA-Personal","WPA3-Enterprise con EAP-TLS","Open con captive portal"],c:2,e:"WPA3-Enterprise con 802.1X y EAP-TLS es el estándar."},
{d:5,q:"Para ver la ruta de saltos a un destino se usa:",opts:["ping","traceroute / tracert","nslookup","arp"],c:1,e:"traceroute (Linux/Mac) o tracert (Windows) muestra los saltos hop-by-hop con TTL incremental."},
{d:5,q:"Comando para ver conexiones TCP activas y puertos en escucha:",opts:["arp -a","netstat / ss","ipconfig","ping"],c:1,e:"netstat (clásico) o ss (moderno Linux) muestran sockets, conexiones y puertos."},
{d:5,q:"Síntoma típico de MTU mismatch:",opts:["Conectividad rápida pero intermitente","Conexiones grandes fallan o son muy lentas, ping pequeño funciona","Sin enlace de capa 1","DNS no resuelve"],c:1,e:"Pings pequeños pasan; transferencias grandes fallan al fragmentar. Verificar con ping -f -l (Win) o -M do -s (Linux)."}
],
flashcards: [
{d:1,q:"¿Cuáles son las 7 capas del modelo OSI?",a:"Físico, Enlace, Red, Transporte, Sesión, Presentación, Aplicación. Mnemotecnia: Please Do Not Throw Sausage Pizza Away."},
{d:1,q:"¿Qué es el three-way handshake de TCP?",a:"SYN (cliente), SYN-ACK (servidor), ACK (cliente). Establece la conexión fiable."},
{d:1,q:"¿Cuáles son los rangos privados RFC1918?",a:"10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16."},
{d:1,q:"Puertos: HTTP, HTTPS, SSH, FTP, DNS",a:"HTTP 80, HTTPS 443, SSH 22, FTP 20/21, DNS 53."},
{d:2,q:"¿Qué es 802.1Q?",a:"Estándar de VLAN tagging — añade etiqueta de 4 bytes al frame Ethernet con el VLAN ID."},
{d:2,q:"¿Diferencia single-mode vs multi-mode fibra?",a:"Single-mode: núcleo fino, láser, largas distancias (km). Multi-mode: núcleo grueso, LED, distancias cortas (300m)."},
{d:2,q:"¿Qué bandas usan Wi-Fi 6 y Wi-Fi 6E?",a:"Wi-Fi 6: 2.4 y 5 GHz. Wi-Fi 6E añade 6 GHz."},
{d:3,q:"¿Qué es DORA en DHCP?",a:"Discover, Offer, Request, Acknowledge — el proceso de obtención de IP."},
{d:3,q:"¿Qué hace SNMP y qué versión es segura?",a:"Simple Network Management Protocol. v1/v2c en claro; v3 cifrado y autenticado."},
{d:3,q:"¿Qué hace STP?",a:"Spanning Tree Protocol previene loops de capa 2 desactivando enlaces redundantes hasta necesitarse."},
{d:4,q:"¿Qué es VLAN hopping y cómo se previene?",a:"Saltar entre VLANs vía trunk mal configurado o double-tagging. Prevenir: deshabilitar DTP, no usar VLAN nativa por defecto, asignar puertos access explícitamente."},
{d:4,q:"¿Qué hace 802.1X?",a:"Autenticación basada en puerto antes de admitir un dispositivo. Roles: suplicante, autenticador (switch), servidor RADIUS."},
{d:5,q:"Comando Windows para liberar y renovar IP DHCP:",a:"ipconfig /release seguido de ipconfig /renew."},
{d:5,q:"¿Qué herramienta para análisis profundo de paquetes?",a:"Wireshark (GUI) o tcpdump (CLI). Capturan y decodifican tráfico."}
]
};

// === ISC2 Certified in Cybersecurity (CC) ===
CERT_DATA.isc2cc = {
theory: [
{id:"d1",title:"Domain 1 — Security Principles (26%)",html:`
<h2>Domain 1 — Security Principles</h2>
<div class="lead">Cert gratuita de ISC2 para entrar en ciberseguridad. 5 dominios. 100 preguntas, 2h. Pasaje 700/1000.</div>
<h3>Triada CIA</h3>
<p>Confidencialidad, Integridad, Disponibilidad. <b>Authenticity</b> y <b>non-repudiation</b> a menudo añadidas.</p>
<h3>Gobernanza</h3>
<ul>
<li><b>Policy</b> — alto nivel.</li>
<li><b>Standard</b> — específico, obligatorio.</li>
<li><b>Procedure</b> — paso a paso.</li>
<li><b>Guideline</b> — recomendación.</li>
<li><b>Regulations</b> — leyes (GDPR, HIPAA).</li>
</ul>
<h3>Risk management</h3>
<p>Risk = Threat × Vulnerability. Tratamientos: <b>Avoid · Transfer · Mitigate · Accept</b>. Risk assessment cualitativo o cuantitativo.</p>
<h3>Ética ISC2</h3>
<p>Code of Ethics: proteger sociedad, actuar honorablemente, dar servicio diligente, avanzar la profesión.</p>
`},
{id:"d2",title:"Domain 2 — BC, DR & Incident Response (10%)",html:`
<h2>Domain 2 — BC, DR & Incident Response</h2>
<h3>Business Continuity (BC)</h3>
<p>Mantener operaciones críticas durante una interrupción. <b>BIA</b> identifica funciones críticas, RTO, RPO.</p>
<h3>Disaster Recovery (DR)</h3>
<p>Restaurar tras desastre. Sites: hot, warm, cold. Backups 3-2-1.</p>
<h3>Incident Response (IR)</h3>
<div class="flow">
<span class="step">Preparation</span><span class="arr">→</span>
<span class="step">Detection & Analysis</span><span class="arr">→</span>
<span class="step">Containment, Eradication, Recovery</span><span class="arr">→</span>
<span class="step">Post-incident</span>
</div>
<p>Componentes IR: equipo (CSIRT), plan, procedimientos, política de comunicación.</p>
`},
{id:"d3",title:"Domain 3 — Access Controls (22%)",html:`
<h2>Domain 3 — Access Controls</h2>
<h3>Conceptos</h3>
<ul>
<li><b>Subject</b> — quien pide acceso.</li>
<li><b>Object</b> — recurso solicitado.</li>
<li><b>Rule</b> — política aplicada.</li>
</ul>
<h3>Principios</h3>
<p><b>Least privilege</b>, <b>need-to-know</b>, <b>separation of duties</b>, <b>defense in depth</b>, <b>privileged accounts</b>.</p>
<h3>Modelos</h3>
<p>MAC (etiquetas, gobierno), DAC (dueño decide), RBAC (rol), ABAC (atributos), Rule-based.</p>
<h3>Seguridad física</h3>
<p>Vallas, cerraduras, mantraps, badges, CCTV, sensores. Defense in depth físico.</p>
<h3>Logical access</h3>
<p>Identificación, autenticación, autorización, accountability. MFA obligatorio en cuentas privilegiadas.</p>
`},
{id:"d4",title:"Domain 4 — Network Security (24%)",html:`
<h2>Domain 4 — Network Security</h2>
<h3>Tipos de redes</h3>
<p>LAN, WAN, MAN, PAN, WLAN. Topologías: bus, star, ring, mesh.</p>
<h3>Modelo OSI vs TCP/IP</h3>
<p>OSI 7 capas. TCP/IP 4 capas (Link, Internet, Transport, Application).</p>
<h3>Amenazas comunes</h3>
<p>Spoofing, on-path, DDoS, side-channel, malware (virus, worm, trojan, ransomware), social engineering.</p>
<h3>Defensas</h3>
<div class="kvs">
<span class="k">Firewall</span><span class="v">Filtrado de tráfico.</span>
<span class="k">IDS/IPS</span><span class="v">Detección/prevención de intrusiones.</span>
<span class="k">Antivirus/EDR</span><span class="v">Endpoint protection.</span>
<span class="k">Segmentation</span><span class="v">VLANs, subredes, microsegmentación.</span>
<span class="k">VPN</span><span class="v">Túneles cifrados.</span>
<span class="k">Zero Trust</span><span class="v">Never trust, always verify.</span>
</div>
<h3>Cloud básico</h3>
<p>Modelos: IaaS, PaaS, SaaS. Despliegue: public, private, hybrid, community. Responsabilidad compartida.</p>
`},
{id:"d5",title:"Domain 5 — Security Operations (18%)",html:`
<h2>Domain 5 — Security Operations</h2>
<h3>Manejo de datos</h3>
<p>Estados: at rest, in transit, in use. Clasificación: public, sensitive, private, confidential. Cifrado simétrico vs asimétrico, hashing.</p>
<h3>Logging y monitoreo</h3>
<p>Logs, audit trails, SIEM, alerting. <b>Ingress/egress monitoring</b>.</p>
<h3>Configuration management</h3>
<p>Baselines, hardening, patching, change management.</p>
<h3>Awareness training</h3>
<p>Concienciación regular para empleados. Phishing simulations.</p>
`}
],
questions: [
{d:1,q:"Triada CIA significa:",opts:["Confidentiality, Integrity, Availability","Control, Identity, Audit","Cryptography, IAM, Antivirus","Compliance, Insurance, Auditing"],c:0,e:"CIA es el modelo fundamental: confidencialidad, integridad, disponibilidad."},
{d:1,q:"Estrategia de tratamiento del riesgo: contratar seguro:",opts:["Mitigar","Transferir","Aceptar","Evitar"],c:1,e:"Transferir el riesgo a un tercero (seguro, outsourcing)."},
{d:1,q:"Documento de alto nivel aprobado por dirección:",opts:["Procedure","Standard","Policy","Guideline"],c:2,e:"Policy es alto nivel y aprobada por dirección. Standards y procedures son derivados."},
{d:2,q:"RTO de 4 horas significa:",opts:["Aceptamos perder 4h de datos","El servicio debe restaurarse en 4h","El backup tarda 4h","La auditoría es cada 4h"],c:1,e:"RTO mide el tiempo máximo aceptable para volver a estar operativo."},
{d:2,q:"Primera fase del IR según NIST:",opts:["Detección","Contención","Preparación","Erradicación"],c:2,e:"Preparación: políticas, herramientas, equipo, formación. Antes del incidente."},
{d:2,q:"BIA sirve para:",opts:["Cifrar datos","Identificar funciones críticas e impacto de su pérdida","Auditar firewalls","Hacer pentest"],c:1,e:"Business Impact Analysis identifica funciones críticas, dependencias e impacto. Da RTO/RPO."},
{d:3,q:"Modelo de control de acceso donde el dueño del recurso decide quién accede:",opts:["MAC","DAC","RBAC","ABAC"],c:1,e:"DAC (Discretionary Access Control). Permisos NTFS clásicos."},
{d:3,q:"Principio: dar el mínimo permiso necesario:",opts:["Need-to-know","Least privilege","Separation of duties","Defense in depth"],c:1,e:"Least privilege limita el daño si la cuenta se compromete."},
{d:3,q:"Vestíbulo con dos puertas para evitar tailgating:",opts:["Bollard","Mantrap","Turnstile","Badge"],c:1,e:"Mantrap (access control vestibule) deja pasar a una persona a la vez."},
{d:4,q:"Modelo de cloud donde el cliente solo gestiona apps y datos:",opts:["IaaS","PaaS","SaaS","On-prem"],c:1,e:"PaaS: el proveedor gestiona OS y runtime; el cliente sube y configura la app."},
{d:4,q:"Función principal de un firewall:",opts:["Cifrar datos","Filtrar tráfico de red según reglas","Hacer backup","Detectar malware en endpoints"],c:1,e:"Firewall filtra tráfico entrante/saliente según ACLs."},
{d:4,q:"Modelo Zero Trust se resume en:",opts:["Confiar en la red interna","Never trust, always verify","Solo confiar en VPN","No usar autenticación"],c:1,e:"Zero Trust: cada petición se verifica independientemente, sin perímetro confiable."},
{d:5,q:"Tres estados de los datos:",opts:["At rest, in transit, in use","Clear, encrypted, hashed","Public, private, secret","Local, remote, cloud"],c:0,e:"At rest (almacenado), in transit (red), in use (RAM/proceso)."},
{d:5,q:"Hashing se diferencia del cifrado en que:",opts:["Es más rápido","Es una función de una sola vía, no reversible","Solo funciona con texto","Necesita dos claves"],c:1,e:"Hash convierte input en digest fijo, no reversible. Cifrado es reversible con clave."},
{d:5,q:"Plataforma que correlaciona logs de toda la empresa:",opts:["DLP","SIEM","WAF","NAC"],c:1,e:"SIEM (Security Information and Event Management) agrega y correlaciona eventos."}
],
flashcards: [
{d:1,q:"¿Qué significan las siglas CIA en seguridad?",a:"Confidentiality, Integrity, Availability — los tres pilares fundamentales."},
{d:1,q:"¿Qué es la separación de funciones (separation of duties)?",a:"Dividir tareas críticas entre varias personas para que ninguna pueda completar sola un proceso sensible. Reduce fraude y errores."},
{d:1,q:"¿Cuáles son las cuatro estrategias de tratamiento de riesgo?",a:"Avoid (evitar), Transfer (transferir), Mitigate (mitigar), Accept (aceptar)."},
{d:2,q:"¿Cuáles son las fases del IR según NIST 800-61?",a:"1) Preparación, 2) Detección y análisis, 3) Contención, erradicación y recuperación, 4) Actividad post-incidente."},
{d:2,q:"¿Diferencia entre BCP y DRP?",a:"BCP (Business Continuity Plan): mantener operaciones durante interrupción. DRP (Disaster Recovery Plan): restaurar tras desastre."},
{d:2,q:"¿Qué es la regla 3-2-1 de backups?",a:"3 copias de los datos, en 2 medios diferentes, con 1 offsite."},
{d:3,q:"¿Diferencia entre MAC y DAC?",a:"MAC: el sistema asigna etiquetas, usuario no puede cambiar. DAC: el dueño del recurso decide quién accede."},
{d:3,q:"¿Qué es defense in depth?",a:"Defensa en capas múltiples. Si una falla, otras protegen. Ej: firewall + IDS + EDR + segmentación + MFA."},
{d:4,q:"¿Cuál es la principal diferencia entre IDS y IPS?",a:"IDS detecta y alerta (pasivo). IPS detecta y bloquea (in-line, activo)."},
{d:4,q:"¿Qué es responsabilidad compartida en cloud?",a:"Modelo donde proveedor y cliente comparten responsabilidades de seguridad. El proveedor cubre la infraestructura física; el cliente, en distinto grado, OS, app y datos según IaaS/PaaS/SaaS."},
{d:4,q:"¿Diferencia entre worm y virus?",a:"Worm se replica solo por red sin host. Virus necesita archivo anfitrión y acción del usuario."},
{d:5,q:"¿Qué hace el principio AAA?",a:"Authentication (¿quién eres?), Authorization (¿qué puedes hacer?), Accounting (¿qué hiciste?)."},
{d:5,q:"¿Qué es hardening?",a:"Reducir la superficie de ataque de un sistema: cerrar puertos no usados, eliminar software innecesario, aplicar parches, cambiar credenciales por defecto."},
{d:5,q:"¿Qué es el código de ética de ISC2?",a:"Cuatro cánones: proteger sociedad/bien común, actuar honorablemente, dar servicio diligente, avanzar la profesión."}
]
};

// === CompTIA A+ (220-1101 / 220-1102) ===
CERT_DATA.aplus = {
theory: [
{id:"d1",title:"Core 1 — Mobile Devices & Hardware",html:`
<h2>Core 1 — Mobile Devices & Hardware</h2>
<div class="lead">A+ es la cert de IT general más popular. Dos exámenes: 1101 (hardware/red) y 1102 (OS/seguridad/software).</div>
<h3>Hardware</h3>
<div class="kvs">
<span class="k">CPU</span><span class="v">Sockets (LGA Intel, AM4/AM5 AMD), cores, threads, cache.</span>
<span class="k">RAM</span><span class="v">DDR3, DDR4, DDR5. ECC para servidores.</span>
<span class="k">Storage</span><span class="v">HDD (SATA, magnético), SSD (SATA o NVMe M.2).</span>
<span class="k">PSU</span><span class="v">Vatios, eficiencia 80+ Bronze/Gold/Platinum.</span>
<span class="k">GPU</span><span class="v">Integrada o dedicada (PCIe x16).</span>
<span class="k">Motherboard</span><span class="v">Form factors: ATX, mATX, ITX.</span>
</div>
<h3>Periféricos</h3>
<p>USB-A/B/C, Thunderbolt, HDMI, DisplayPort, VGA, RJ45.</p>
<h3>Móviles</h3>
<p>iOS vs Android. Sync (iCloud, Google), MDM, biometría, NFC, GPS, accelerometer.</p>
`},
{id:"d2",title:"Core 1 — Networking",html:`
<h2>Core 1 — Networking</h2>
<h3>Cables y conectores</h3>
<p>Cat5e, Cat6, Cat6a, fibra (SC, LC, ST), coaxial. Crimping RJ45 T568A/B.</p>
<h3>Dispositivos</h3>
<p>Hub, switch, router, AP, modem, ONT, repeater.</p>
<h3>Direccionamiento</h3>
<p>IPv4, IPv6, DHCP, DNS, NAT, subnetting básico.</p>
<h3>Wireless</h3>
<p>Estándares 802.11 a/b/g/n/ac/ax/be. Bandas 2.4/5/6 GHz.</p>
`},
{id:"d3",title:"Core 2 — Operating Systems",html:`
<h2>Core 2 — Operating Systems</h2>
<h3>Windows</h3>
<p>Versiones: Pro, Enterprise, Education. Filesystems: NTFS, FAT32, exFAT. Tools: Task Manager, Event Viewer, Device Manager, regedit, gpedit.msc, services.msc.</p>
<h3>Línea de comandos Windows</h3>
<p>cmd, PowerShell. Comandos: dir, cd, mkdir, copy, xcopy, robocopy, ipconfig, ping, tracert, gpupdate, sfc /scannow, chkdsk.</p>
<h3>macOS / Linux básicos</h3>
<p>Estructura de archivos, Terminal, comandos básicos (ls, cd, sudo, apt/yum, chmod, chown).</p>
<h3>Mobile OS</h3>
<p>iOS, Android, Chrome OS. App stores, sandboxing, updates OTA.</p>
`},
{id:"d4",title:"Core 2 — Security",html:`
<h2>Core 2 — Security</h2>
<h3>Conceptos</h3>
<p>CIA, AAA, MFA, principle of least privilege, BYOD/MDM.</p>
<h3>Malware</h3>
<p>Virus, worm, trojan, ransomware, spyware, rootkit, keylogger. Removal: arrancar en safe mode, AV scan, restore point.</p>
<h3>Social engineering</h3>
<p>Phishing, vishing, smishing, shoulder surfing, tailgating, dumpster diving.</p>
<h3>Workstation security</h3>
<ul>
<li>Password policies, screensaver lock, BIOS/UEFI password, Secure Boot.</li>
<li>Disk encryption (BitLocker), file permissions (NTFS).</li>
<li>Patching, antivirus/EDR, host firewall.</li>
</ul>
<h3>Mobile security</h3>
<p>Screen lock, remote wipe, MDM, app permissions, evitar sideloading/jailbreak.</p>
`},
{id:"d5",title:"Core 2 — Software Troubleshooting & Procedures",html:`
<h2>Core 2 — Software Troubleshooting & Procedures</h2>
<h3>Metodología CompTIA</h3>
<div class="flow">
<span class="step">1. Identificar problema</span><span class="arr">→</span>
<span class="step">2. Teoría de causa</span><span class="arr">→</span>
<span class="step">3. Probar teoría</span><span class="arr">→</span>
<span class="step">4. Plan + implementar</span><span class="arr">→</span>
<span class="step">5. Verificar</span><span class="arr">→</span>
<span class="step">6. Documentar</span>
</div>
<h3>Problemas comunes Windows</h3>
<p>BSOD (revisar dump, drivers, RAM), boot lento (msconfig, autoruns), apps que crashean (event viewer, reinstalar), updates fallidos (sfc, DISM).</p>
<h3>Problemas móvil</h3>
<p>Batería se agota rápido, sobrecalentamiento, app crashes, conectividad. Reset settings vs factory reset.</p>
<h3>Procedimientos profesionales</h3>
<ul>
<li><b>Safety:</b> ESD straps, lifting techniques, fire safety.</li>
<li><b>Environmental:</b> humedad, temperatura, e-waste, MSDS.</li>
<li><b>Communication:</b> escucha activa, evitar jerga, documentar.</li>
<li><b>Privacy:</b> PII, prohibited content/activity.</li>
</ul>
`}
],
questions: [
{d:1,q:"Tipo de RAM más reciente en consumo (2024+):",opts:["DDR3","DDR4","DDR5","DDR2"],c:2,e:"DDR5 es el estándar actual en sistemas nuevos. DDR4 sigue común."},
{d:1,q:"Estándar M.2 para SSDs muy rápidos sobre PCIe:",opts:["SATA","NVMe","SCSI","IDE"],c:1,e:"NVMe usa PCIe directamente, mucho más rápido que SATA."},
{d:2,q:"Estándar para Cat6a permite 10 Gbps a:",opts:["10m","55m","100m","500m"],c:2,e:"Cat6a soporta 10GBASE-T a 100m. Cat6 estándar solo a 55m."},
{d:2,q:"Banda de Wi-Fi 6E nueva:",opts:["2.4 GHz","5 GHz","6 GHz","60 GHz"],c:2,e:"Wi-Fi 6E (802.11ax) añade banda 6 GHz. Wi-Fi 7 también la usa."},
{d:3,q:"Filesystem nativo de Windows con permisos ACL:",opts:["FAT32","exFAT","NTFS","ext4"],c:2,e:"NTFS soporta permisos, journaling, cifrado EFS. FAT32 sin permisos."},
{d:3,q:"Comando Windows para escanear y reparar archivos del sistema:",opts:["chkdsk","sfc /scannow","ipconfig","tasklist"],c:1,e:"sfc (System File Checker) verifica integridad de archivos del sistema."},
{d:4,q:"Tipo de malware que cifra archivos y exige rescate:",opts:["Virus","Spyware","Ransomware","Adware"],c:2,e:"Ransomware cifra y exige pago para descifrar."},
{d:4,q:"Para BitLocker se requiere idealmente:",opts:["GPU dedicada","TPM 1.2/2.0","SSD NVMe","DDR5"],c:1,e:"BitLocker usa TPM para almacenar la clave de cifrado y verificar integridad de arranque."},
{d:4,q:"Atacante mira por encima del hombro mientras tecleas password:",opts:["Phishing","Tailgating","Shoulder surfing","Dumpster diving"],c:2,e:"Shoulder surfing — observación visual directa."},
{d:5,q:"Primer paso de la metodología de troubleshooting CompTIA:",opts:["Probar la teoría","Identificar el problema","Documentar","Implementar solución"],c:1,e:"Identificar el problema (preguntar usuario, observar síntomas) es siempre el primer paso."},
{d:5,q:"BSOD recurrente con código MEMORY_MANAGEMENT sugiere:",opts:["Disco lleno","RAM defectuosa o driver defectuoso","Antivirus","Cable de red"],c:1,e:"Errores de memoria suelen indicar RAM defectuosa o driver mal escrito que corrompe memoria."},
{d:5,q:"Pulsera ESD se usa para:",opts:["Limpiar componentes","Evitar daño electrostático al manipular hardware","Medir voltaje","Aumentar refrigeración"],c:1,e:"ESD strap conecta el técnico a tierra para evitar descargas que dañan chips."}
],
flashcards: [
{d:1,q:"¿Diferencia entre HDD y SSD?",a:"HDD: discos magnéticos giratorios, mecánico, lento. SSD: chips flash, sin partes móviles, mucho más rápido y resistente a golpes."},
{d:1,q:"¿Qué es DDR5 vs DDR4?",a:"DDR5 es la generación actual de RAM: mayor velocidad (4800+ MT/s), menor voltaje (1.1V), canales duales por módulo. DDR4 sigue común."},
{d:2,q:"¿Diferencia T568A vs T568B?",a:"Dos esquemas de cableado RJ45 (orden de colores). Mismo cable funciona si ambos extremos usan el mismo. Mezclar = cable cruzado."},
{d:2,q:"¿Qué es PoE?",a:"Power over Ethernet — el cable Ethernet lleva datos Y alimentación a dispositivos como APs, cámaras IP, teléfonos VoIP."},
{d:3,q:"¿Diferencia entre Windows 11 Pro y Home?",a:"Pro añade BitLocker, Active Directory, Group Policy, Hyper-V, Remote Desktop host. Home no."},
{d:3,q:"Comandos Windows: ver IP, hacer ping, ver rutas",a:"ipconfig, ping, tracert."},
{d:4,q:"¿Qué es UEFI Secure Boot?",a:"Función UEFI que solo permite arrancar bootloaders firmados criptográficamente. Bloquea bootkits y malware de arranque."},
{d:4,q:"¿Qué hace el principio de least privilege?",a:"Da a cada usuario/proceso el mínimo permiso necesario. Si la cuenta se compromete, el daño es limitado."},
{d:5,q:"¿Cuáles son los pasos de la metodología de troubleshooting de CompTIA?",a:"1) Identificar problema, 2) Teoría de causa, 3) Probar teoría, 4) Plan de acción, 5) Implementar y verificar, 6) Documentar."},
{d:5,q:"¿Qué hace una restore point en Windows?",a:"Snapshot del estado del sistema (registro, archivos del sistema, apps instaladas) para revertir cambios sin afectar datos del usuario."}
]
};
