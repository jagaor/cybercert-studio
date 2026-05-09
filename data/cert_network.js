window.CERT_DATA = window.CERT_DATA || {};

// === Cisco CCNA 200-301 ===
CERT_DATA.ccnasec = {
theory: [
{id:"d1",title:"Domain 1 — Network Fundamentals (20%)",html:`
<h2>CCNA 200-301</h2>
<div class="lead">Cisco entry-level. 120 min, ~100 preguntas. Cubre routing, switching, security, automation. Base obligada para CCNP.</div>
<h3>Componentes</h3>
<p>Router, switch L2/L3, AP, controller, endpoint, firewall, IPS.</p>
<h3>Topologías</h3>
<p>Star, mesh, hybrid. Two/three-tier (access, distribution, core), spine-leaf en datacenter.</p>
<h3>Cabling</h3>
<p>Cat5e/6/6a, fibra (single/multi-mode, SC/LC/ST), conectores. Straight-through vs crossover (auto-MDIX en switches modernos).</p>
<h3>IPv4 / IPv6</h3>
<p>Subnetting con VLSM. CIDR. Private RFC1918. APIPA. Loopback. IPv6: 128 bits, link-local (fe80::/10), global unicast, multicast (ff00::/8), no broadcast. SLAAC, EUI-64.</p>
<h3>Wireless</h3>
<p>802.11 a/b/g/n/ac/ax. 2.4/5/6 GHz. SSID, BSSID, ESSID. Channels: non-overlapping en 2.4 (1, 6, 11).</p>
`},
{id:"d2",title:"Domain 2 — Network Access (20%)",html:`
<h2>Network Access</h2>
<h3>VLAN</h3>
<p>Access port (1 VLAN), Trunk port (varias, 802.1Q tag). Native VLAN (untagged en trunk). VLAN 1 default — evitar.</p>
<h3>VTP</h3>
<p>VLAN Trunking Protocol. Modes: server, client, transparent, off. Cisco-only.</p>
<h3>STP</h3>
<p>Spanning Tree previene loops L2. Root bridge (lowest priority). Port states: blocking, listening, learning, forwarding. RSTP convergencia más rápida. PortFast en access.</p>
<h3>EtherChannel</h3>
<p>Link aggregation. Protocolos: LACP (estándar), PAgP (Cisco). Static (on).</p>
<h3>Wireless</h3>
<p>Autonomous APs vs lightweight (con WLC). CAPWAP tunnel. SSIDs a VLANs.</p>
`},
{id:"d3",title:"Domain 3 — IP Connectivity (25%)",html:`
<h2>IP Connectivity</h2>
<h3>Routing concepts</h3>
<p>Routing table: longest prefix match. Administrative distance (preferencia entre fuentes): Connected 0, Static 1, eBGP 20, OSPF 110, IS-IS 115, RIP 120, iBGP 200.</p>
<h3>Static routing</h3>
<p>ip route prefix mask next-hop [distance]. Default route 0.0.0.0/0.</p>
<h3>OSPF</h3>
<p>Single area: cost based en bandwidth. Hello/Dead timers. DR/BDR election en multi-access. Areas (0 backbone). LSA types.</p>
<h3>FHRP</h3>
<p>HSRP (Cisco), VRRP (estándar IETF), GLBP (load balance). Virtual IP/MAC. Tracking de uplink.</p>
`},
{id:"d4",title:"Domain 4 — IP Services (10%)",html:`
<h2>IP Services</h2>
<h3>NAT</h3>
<p>Static NAT (1:1), Dynamic NAT, PAT (overload — muchos a una IP con puertos). Inside vs outside.</p>
<h3>NTP</h3>
<p>Sincronización tiempo. Stratums. Importante para logs y crypto.</p>
<h3>DHCP</h3>
<p>DORA. Pool, exclusiones, lease. ip helper-address en interface para forward.</p>
<h3>QoS</h3>
<p>Marking (DSCP), classification, queueing (LLQ para voz), shaping/policing.</p>
<h3>SSH</h3>
<p>Reemplaza Telnet. crypto key generate rsa, ip ssh version 2, line vty transport input ssh.</p>
`},
{id:"d5",title:"Domain 5 — Security Fundamentals (15%)",html:`
<h2>Security Fundamentals</h2>
<h3>Concepts</h3>
<p>CIA, AAA, defense in depth, threats (DoS, MITM, social engineering).</p>
<h3>Device security</h3>
<p>Strong passwords, enable secret, line console password, banner. Disable unused services. SSH only. SNMPv3. NTP.</p>
<h3>Port security</h3>
<p>Limita MACs por puerto. Violation: protect, restrict, shutdown. Sticky MAC.</p>
<h3>DHCP snooping, DAI, IPSG</h3>
<p>Trusted vs untrusted ports. Bind table. Previene rogue DHCP, ARP spoofing.</p>
<h3>ACLs</h3>
<p>Standard (1-99): src IP solo. Extended (100-199): src/dst IP, protocol, ports. Aplicar inbound/outbound. Implicit deny al final.</p>
<h3>Wireless security</h3>
<p>WPA2/WPA3. PSK vs Enterprise (802.1X). 802.1X con RADIUS.</p>
`},
{id:"d6",title:"Domain 6 — Automation & Programmability (10%)",html:`
<h2>Automation & Programmability</h2>
<h3>SDN</h3>
<p>Control plane separado del data plane. Cisco DNA Center. SDA (Software-Defined Access).</p>
<h3>APIs</h3>
<p>REST APIs. CRUD: GET, POST, PUT, DELETE. JSON, XML.</p>
<h3>Configuration mgmt</h3>
<p>Ansible (agentless, push, YAML), Puppet (agent, pull, Ruby), Chef (agent, pull, Ruby).</p>
<h3>JSON básico</h3>
<p>Estructura clave-valor. Arrays. Aprende a leer responses de APIs Cisco.</p>
`}
],
questions: [
{d:1,q:"Bandas de Wi-Fi 6E:",opts:["Solo 2.4","Solo 5","2.4, 5 y 6 GHz","Solo 60"],c:2,e:"Wi-Fi 6E (802.11ax) añade 6 GHz a las bandas tradicionales."},
{d:1,q:"IPv6 link-local prefix:",opts:["fc00::/7","fe80::/10","ff00::/8","2000::/3"],c:1,e:"fe80::/10 link-local. fc00::/7 unique local. ff00::/8 multicast. 2000::/3 global unicast."},
{d:2,q:"Para llevar varias VLANs entre dos switches:",opts:["Access port","Trunk port (802.1Q)","Hub","Loopback"],c:1,e:"Trunk port etiqueta frames con VLAN ID. dot1q es el estándar."},
{d:2,q:"Evitar broadcast storm en L2:",opts:["NAT","STP","DHCP","ACL"],c:1,e:"Spanning Tree Protocol bloquea enlaces redundantes hasta hacer falta. Previene loops y broadcast storms."},
{d:3,q:"Administrative Distance de OSPF:",opts:["1","20","110","120"],c:2,e:"Connected 0, Static 1, eBGP 20, OSPF 110, IS-IS 115, RIP 120, iBGP 200."},
{d:3,q:"FHRP estándar IETF:",opts:["HSRP","VRRP","GLBP","PAgP"],c:1,e:"VRRP es estándar IETF. HSRP y GLBP son Cisco propietarios."},
{d:4,q:"PAT (NAT overload) traduce:",opts:["1:1","Muchas IPs internas a UNA pública usando puertos","Solo IPv6","Sin puertos"],c:1,e:"PAT/NAT overload: cientos de IPs internas comparten una pública diferenciándose por puerto source."},
{d:5,q:"ACL standard 10 filtra:",opts:["Source IP solo","Source y dest IP","Puerto y protocolo","Solo MAC"],c:0,e:"Standard ACL (1-99 y 1300-1999): solo source IP. Extended (100-199 y 2000-2699): src+dst+proto+puertos."},
{d:5,q:"Port security violation 'shutdown':",opts:["Permite tráfico","Pone puerto en err-disabled si se viola","Solo loguea","Cifra"],c:1,e:"shutdown (default): err-disabled, requiere intervención. restrict: drop+log+counter. protect: solo drop."},
{d:6,q:"Método HTTP REST para crear recurso:",opts:["GET","POST","PUT","DELETE"],c:1,e:"POST: create. GET: read. PUT: update/replace. PATCH: partial update. DELETE: delete."}
],
flashcards: [
{d:1,q:"¿Cuáles son los rangos privados RFC1918?",a:"10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16."},
{d:2,q:"¿Qué es PortFast y dónde se aplica?",a:"Salta los estados listening/learning de STP, va directo a forwarding. Aplicar SOLO en access ports a end-hosts (PCs, no a otros switches)."},
{d:3,q:"¿Qué es Administrative Distance en routing?",a:"Confiabilidad relativa de fuentes de routing. Si dos protocolos ofrecen ruta al mismo destino, gana el de menor AD. OSPF 110, EIGRP 90, RIP 120."},
{d:4,q:"¿Qué hace ip helper-address?",a:"Convierte broadcasts DHCP en unicasts hacia el servidor DHCP, permitiendo que clientes en otra subred obtengan IP."},
{d:5,q:"¿Qué hace Dynamic ARP Inspection (DAI)?",a:"Verifica respuestas ARP contra la tabla de DHCP snooping. Drop ARP malicioso. Previene ARP spoofing en LAN."},
{d:6,q:"¿Qué es Cisco DNA Center?",a:"Plataforma de gestión SDN para campus: orchestration, automation, analytics, assurance. Define políticas, despliega via APIs."}
]
};

// === Cisco CCNP Security 350-701 SCOR ===
CERT_DATA.ccnp = {
theory: [
{id:"d1",title:"Domain 1 — Security Concepts (25%)",html:`
<h2>CCNP Security SCOR 350-701</h2>
<div class="lead">Core exam para CCNP Security. 120 min. Pre-requisito para concentration exams (SNCF, SISE, SESA, SAUI, SVPN).</div>
<h3>Threat landscape</h3>
<p>Common attacks: phishing, ransomware, DDoS, MITM, credential theft, supply chain.</p>
<h3>Crypto fundamentals</h3>
<p>Symmetric (AES, 3DES), asymmetric (RSA, ECC), hashing (SHA), HMAC, PKI.</p>
<h3>VPN basics</h3>
<p>IPsec (IKEv1/v2, ESP, AH, transport/tunnel), SSL/TLS VPN, GRE, DMVPN, FlexVPN, GETVPN.</p>
<h3>Posture assessment</h3>
<p>Cisco ISE postures endpoint compliance antes de admitir.</p>
`},
{id:"d2",title:"Domain 2 — Network Security (20%)",html:`
<h2>Network Security</h2>
<h3>Cisco ASA</h3>
<p>Firewall stateful clásico. Security levels (inside 100, outside 0). Object-groups, ACLs, NAT.</p>
<h3>Cisco FTD (Firepower Threat Defense)</h3>
<p>NGFW + IPS unificado. FMC para gestión. Snort 3 como engine.</p>
<h3>NAT</h3>
<p>Manual vs Auto. Twice NAT. Identity NAT.</p>
<h3>Layer 2 security</h3>
<p>Port security, DHCP snooping, DAI, IPSG, BPDU guard, root guard, storm control, private VLANs.</p>
<h3>Network telemetry</h3>
<p>NetFlow v9, IPFIX, Stealthwatch (Secure Network Analytics).</p>
`},
{id:"d3",title:"Domain 3 — Securing the Cloud (15%)",html:`
<h2>Securing the Cloud</h2>
<h3>Cloud models</h3>
<p>IaaS, PaaS, SaaS. Public/private/hybrid/community. Shared responsibility.</p>
<h3>Cisco solutions</h3>
<p>Cisco Umbrella (DNS-layer + SWG + CASB). Cloudlock (CASB). Stealthwatch Cloud. Tetration (workload protection).</p>
<h3>Container security</h3>
<p>Image scanning, runtime protection, K8s RBAC, network policies, secrets mgmt.</p>
`},
{id:"d4",title:"Domain 4 — Content Security (10%)",html:`
<h2>Content Security</h2>
<h3>Email — Cisco Secure Email Gateway (ESA)</h3>
<p>Anti-spam, AV, DLP, encryption, advanced phishing protection. SPF/DKIM/DMARC enforcement.</p>
<h3>Web — Cisco Secure Web Appliance (WSA)</h3>
<p>Proxy: URL filtering, malware scanning, SSL decryption, CASB integration.</p>
<h3>Cisco Umbrella</h3>
<p>DNS-layer security, secure web gateway, CASB, FWaaS. Cloud-delivered SASE.</p>
`},
{id:"d5",title:"Domain 5 — Endpoint Protection (15%)",html:`
<h2>Endpoint Protection</h2>
<h3>Cisco Secure Endpoint (AMP for Endpoints)</h3>
<p>EDR. Cloud-delivered. File reputation, sandboxing (Threat Grid), retrospection.</p>
<h3>Posture compliance</h3>
<p>ISE posture: AV updated, patches, encryption, custom checks. Quarantine non-compliant.</p>
<h3>Threat detection</h3>
<p>Behavioral analytics, indicators of compromise.</p>
`},
{id:"d6",title:"Domain 6 — Secure Network Access & Visibility (15%)",html:`
<h2>Secure Network Access, Visibility, Enforcement</h2>
<h3>Cisco ISE (Identity Services Engine)</h3>
<p>NAC, RADIUS, TACACS+, posture, profiling, BYOD onboarding, guest. SGT (Security Group Tags) para microsegmentación.</p>
<h3>802.1X</h3>
<p>Suplicante (cliente), authenticator (switch/AP), authentication server (ISE/RADIUS). EAP-TLS preferred.</p>
<h3>TrustSec / SGT</h3>
<p>Tags asignados por identidad/contexto. Policy enforcement basado en tags, no IPs. SGACLs.</p>
<h3>Cisco Stealthwatch</h3>
<p>Network detection con NetFlow + ML. Detecta lateral movement, exfil, C2 patterns.</p>
`}
],
questions: [
{d:1,q:"IKEv2 mejora vs IKEv1 en:",opts:["Más lento","Menos mensajes, NAT-T nativo, EAP, mejor mobility","No soporta IPv6","Sin cifrado"],c:1,e:"IKEv2: 4 mensajes (vs 9 main mode v1), NAT-T nativo, EAP integrado, MOBIKE, más eficiente."},
{d:1,q:"Modo IPsec para gateway-to-gateway:",opts:["Transport","Tunnel","AH","Bypass"],c:1,e:"Tunnel mode: cifra y encapsula paquete IP completo. Para site-to-site VPN entre routers."},
{d:2,q:"Default security level del interface 'inside' en ASA:",opts:["0","50","100","255"],c:2,e:"Inside = 100 (most trusted). Outside = 0. DMZ típicamente 50. Tráfico high→low permitido por defecto, low→high requiere ACL."},
{d:2,q:"BPDU Guard en interfaces access:",opts:["Permite BPDUs","Pone interface err-disabled si recibe BPDU (rogue switch)","Cifra BPDUs","Habilita STP"],c:1,e:"Interfaces access NO deben recibir BPDUs (no son switches). Si las reciben = topología cambió o atacante. Shutdown."},
{d:3,q:"Cisco Umbrella opera principalmente en capa:",opts:["Capa 2","Capa 3","Capa 7 (DNS-layer security)","Capa 1"],c:2,e:"Umbrella bloquea resoluciones DNS a dominios maliciosos antes de que se establezca conexión."},
{d:4,q:"Cisco ESA es:",opts:["Email Security Appliance — gateway de email seguro","ASA","Endpoint","SWG"],c:0,e:"ESA: anti-spam, AV, DLP, advanced phishing. Antes IronPort."},
{d:5,q:"AMP for Endpoints retrospection significa:",opts:["Backup","Re-evaluar archivos pasados con threat intel actualizada y avisar si ahora son malos","DLP","Backup"],c:1,e:"Retrospection: AMP guarda telemetría. Si un hash que aceptaste hace días resulta malicioso, te avisa con timeline completa."},
{d:6,q:"SGT en TrustSec:",opts:["Static Group Tag","Security Group Tag — etiqueta basada en identidad para policy enforcement","SNMP Group Tag","Subnet Gateway Tag"],c:1,e:"SGT abstrae IP/subnet. Policies entre tags (ej. Engineers ↔ Servers) en lugar de IPs."}
],
flashcards: [
{d:1,q:"¿Diferencia DMVPN vs FlexVPN?",a:"DMVPN (Dynamic Multipoint VPN): hub-and-spoke con spoke-to-spoke dynamic via NHRP, IKEv1/v2. FlexVPN: framework unificado IKEv2 que soporta site-to-site, hub-spoke, remote access en una config consistente."},
{d:2,q:"¿Para qué sirve Stealthwatch?",a:"Network Detection and Response. Analiza NetFlow + ML para detectar lateral movement, beaconing, exfil. Cisco Secure Network Analytics."},
{d:3,q:"¿Qué es Cisco Umbrella SIG?",a:"Secure Internet Gateway: SASE de Cisco. DNS-layer security + Secure Web Gateway + CASB + FWaaS + L3/L4 firewall + Remote Browser Isolation."},
{d:4,q:"¿Qué hace TLS decryption en WSA?",a:"Termina TLS, inspecciona contenido (malware, DLP), re-cifra hacia el destino. Requiere CA propia en clientes."},
{d:5,q:"¿Qué es Threat Grid?",a:"Sandboxing cloud de Cisco. Ejecuta archivos sospechosos en VMs aisladas y devuelve análisis de comportamiento + IoCs."},
{d:6,q:"¿Qué hace Cisco ISE en BYOD onboarding?",a:"Provisioning automático: detección de dispositivo, instalación de cert, asignación a VLAN BYOD, policies según postura/usuario."}
]
};

// === Juniper JNCIS-SEC ===
CERT_DATA.jncissec = {
theory: [
{id:"d1",title:"Domain 1 — SRX Architecture & Zones",html:`
<h2>JNCIS-SEC (JN0-335)</h2>
<div class="lead">Juniper Networks Certified Specialist Security. Centrado en SRX Series y Junos.</div>
<h3>SRX Series</h3>
<p>Firewalls de Juniper. Branch (SRX300/320/340/345) y datacenter (SRX1500/4100/4200/5000). vSRX virtual.</p>
<h3>Security zones</h3>
<p>Logical groupings de interfaces. Inter-zone traffic requiere policy. Built-in: junos-host (control plane).</p>
<h3>Routing instances</h3>
<p>Multi-tenant. Default 'inet.0' tabla principal.</p>
<h3>Junos config</h3>
<p>Modo configure. commit, commit confirmed (rollback automático), rollback, compare. Rescue config.</p>
`},
{id:"d2",title:"Domain 2 — Security Policies",html:`
<h2>Security Policies</h2>
<h3>Estructura</h3>
<p>From-zone X to-zone Y match: source-address, dest-address, application. then: permit, deny, reject, log, count.</p>
<h3>Application identification</h3>
<p>App-ID dinámico. Junos puede identificar apps en cualquier puerto.</p>
<h3>Address book</h3>
<p>Global o por zone. Reusable.</p>
<h3>Schedulers</h3>
<p>Policies por horario.</p>
<h3>Unified policies</h3>
<p>Combinan L4 (zones, IPs, ports) con L7 (apps, URL category, user) en una sola regla.</p>
`},
{id:"d3",title:"Domain 3 — NAT",html:`
<h2>NAT</h2>
<h3>Source NAT</h3>
<p>Translate source. Tipos: interface, pool, off. PAT con port translation.</p>
<h3>Destination NAT</h3>
<p>Inbound. Port forwarding a servers internos.</p>
<h3>Static NAT</h3>
<p>Bidireccional 1:1.</p>
<h3>Order de procesamiento</h3>
<p>1) Static NAT, 2) Destination NAT, 3) Routing, 4) Source NAT, 5) Policy lookup.</p>
`},
{id:"d4",title:"Domain 4 — IPsec VPN & Advanced Threat Protection",html:`
<h2>IPsec VPN</h2>
<h3>Site-to-site</h3>
<p>IKE Phase 1 (proposal, gateway, ike-policy) → IKE Phase 2 (proposal, ipsec-policy, vpn). Route-based vs policy-based.</p>
<h3>Remote access</h3>
<p>SSL VPN con Pulse Secure (legacy).</p>
<h3>Auto VPN / AutoVPN</h3>
<p>Hub-and-spoke dinámico tipo DMVPN.</p>
<h3>SkyATP / ATP Cloud</h3>
<p>Sandboxing cloud de Juniper. Integración con SRX para bloquear amenazas detectadas.</p>
<h3>UTM</h3>
<p>AV, anti-spam, web filtering, content filtering integrados en SRX.</p>
`}
],
questions: [
{d:1,q:"En Junos, comando para activar cambios:",opts:["save","commit","apply","run"],c:1,e:"commit aplica candidate config a active. commit confirmed pide confirmación o rollback automático tras X min."},
{d:2,q:"Estructura policy from-zone trust to-zone untrust:",opts:["match + then","SRC + DST + ACTION","Sin estructura","JSON"],c:0,e:"match {source-address...; destination-address...; application...;} then {permit/deny; log;}"},
{d:3,q:"En SRX, orden NAT:",opts:["Source → Destination","Static → Destination → Routing → Source → Policy","Random","Solo source"],c:1,e:"Static primero, luego Destination NAT, routing decide salida, luego Source NAT, finalmente policy lookup."},
{d:4,q:"IKE Phase 1 establece:",opts:["IPsec SA para datos","ISAKMP/IKE SA para proteger negociación posterior","Solo crypto","Túnel TCP"],c:1,e:"Phase 1: canal seguro entre peers. Phase 2: SAs IPsec para tráfico real (ESP)."}
],
flashcards: [
{d:1,q:"¿Qué hace 'commit confirmed' en Junos?",a:"Aplica config y arranca timer (10 min default). Si no haces 'commit' final dentro de ese tiempo, rollback automático. Salvavidas para configs remotas peligrosas."},
{d:2,q:"¿Diferencia route-based vs policy-based VPN en SRX?",a:"Route-based: tunel st0 con SAs; routing decide qué entra. Más flexible (multi-prefix, dynamic routing). Policy-based: SAs ligadas a policy específica."},
{d:3,q:"¿Qué tipos de Source NAT hay en SRX?",a:"Interface NAT (usa IP de egress), Pool NAT (rango definido), Persistent NAT, Off (sin NAT)."},
{d:4,q:"¿Qué es ATP Cloud (antes SkyATP)?",a:"Servicio cloud de Juniper para sandboxing de archivos sospechosos. SRX envía files, recibe veredicto e IoCs, y bloquea automáticamente conexiones a C2 detectados."}
]
};
