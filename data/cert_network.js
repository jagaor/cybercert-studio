window.CERT_DATA = window.CERT_DATA || {};

// === Cisco CCNA 200-301 ===
CERT_DATA.ccnasec = {
theory: [
{id:"d0",title:"Introducción a CCNA",html:`
<h2>CCNA 200-301 — Cisco Certified Network Associate</h2>
<div class="lead">La certificación de networking más reconocida del mundo. Examen único de ~120 min y ~100 preguntas (test, drag-and-drop y simulaciones de configuración). Cubre redes de extremo a extremo: fundamentos, acceso, conectividad IP, servicios, seguridad y automatización.</div>

<h3>¿Por qué CCNA?</h3>
<p>Es la base de toda la pista Cisco (CCNP, CCIE) y un estándar de facto para roles de administrador de redes, NOC y soporte. Aunque no es "de seguridad", la seguridad de red moderna se construye sobre estos fundamentos.</p>

<h3>Dominios del examen</h3>
<table>
<tr><th>Dominio</th><th>Peso</th></tr>
<tr><td>1. Network Fundamentals</td><td>20%</td></tr>
<tr><td>2. Network Access (VLANs, switching, wireless)</td><td>20%</td></tr>
<tr><td>3. IP Connectivity (routing)</td><td>25%</td></tr>
<tr><td>4. IP Services (NAT, NTP, DHCP, QoS)</td><td>10%</td></tr>
<tr><td>5. Security Fundamentals</td><td>15%</td></tr>
<tr><td>6. Automation & Programmability</td><td>10%</td></tr>
</table>
<div class="callout tip"><span class="ico">▲</span><div><b>Práctica obligatoria:</b> usa Packet Tracer o GNS3. CCNA tiene simulaciones donde configuras dispositivos reales. La teoría sin práctica no aprueba.</div></div>
`},
{id:"d1",title:"Dominio 1 — Network Fundamentals",html:`
<h2>Dominio 1 — Network Fundamentals</h2>

<h3>1.1 Modelos de capas: OSI y TCP/IP</h3>
<table>
<tr><th>OSI</th><th>Función</th><th>PDU</th><th>Ejemplos</th></tr>
<tr><td>7 Aplicación</td><td>Servicios al usuario</td><td>Data</td><td>HTTP, DNS, FTP</td></tr>
<tr><td>6 Presentación</td><td>Formato, cifrado</td><td>Data</td><td>TLS, JPEG</td></tr>
<tr><td>5 Sesión</td><td>Diálogos</td><td>Data</td><td>RPC, NetBIOS</td></tr>
<tr><td>4 Transporte</td><td>Entrega extremo a extremo</td><td>Segmento</td><td>TCP, UDP</td></tr>
<tr><td>3 Red</td><td>Routing por IP</td><td>Paquete</td><td>IP, ICMP, OSPF</td></tr>
<tr><td>2 Enlace</td><td>Tramas, MAC</td><td>Frame</td><td>Ethernet, ARP</td></tr>
<tr><td>1 Física</td><td>Bits, señales</td><td>Bits</td><td>RJ45, fibra</td></tr>
</table>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogía postal:</b> escribes la carta (Aplicación), la metes en sobre con dirección (Transporte/Red), el cartero la lleva por la ruta (Enlace) y el camión rueda por la carretera (Física).</div></div>

<h3>1.2 TCP vs UDP</h3>
<div class="compare">
<div><h5>TCP</h5><p>Orientado a conexión. Three-way handshake (SYN → SYN-ACK → ACK). Fiable, ordenado, control de flujo y congestión. Web, email, SSH, transferencia.</p></div>
<div><h5>UDP</h5><p>Sin conexión, sin garantías. Bajo overhead, rápido. DNS, DHCP, VoIP, streaming, juegos, TFTP.</p></div>
</div>

<h3>1.3 Componentes de red</h3>
<div class="kvs">
<span class="k">Router</span><span class="v">Capa 3. Conecta redes distintas, enruta por IP.</span>
<span class="k">Switch L2/L3</span><span class="v">Conmuta por MAC (L2); L3 además enruta entre VLANs.</span>
<span class="k">AP / WLC</span><span class="v">Punto de acceso Wi-Fi / controlador inalámbrico.</span>
<span class="k">Firewall</span><span class="v">Filtra tráfico (ASA, Firepower).</span>
<span class="k">Endpoints</span><span class="v">PCs, servidores, teléfonos IP, IoT.</span>
</div>
<h4>Topologías de campus</h4>
<p>Modelo de 2 capas (collapsed core: access + core) o 3 capas (access, distribution, core). En datacenter: spine-leaf.</p>

<h3>1.4 Cableado</h3>
<div class="kvs">
<span class="k">Cat5e/6/6a</span><span class="v">Par trenzado de cobre. Cat6a soporta 10 Gbps a 100 m.</span>
<span class="k">Fibra single-mode</span><span class="v">Núcleo fino, láser, largas distancias (km).</span>
<span class="k">Fibra multi-mode</span><span class="v">Núcleo grueso, LED, distancias cortas (~300-550 m).</span>
<span class="k">Straight vs crossover</span><span class="v">Auto-MDIX en switches modernos elimina la diferencia.</span>
</div>

<h3>1.5 Direccionamiento IPv4 e IPv6</h3>
<div class="kvs">
<span class="k">IPv4</span><span class="v">32 bits. Notación decimal punteada. CIDR /24 = máscara 255.255.255.0.</span>
<span class="k">Privadas RFC1918</span><span class="v">10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.</span>
<span class="k">Especiales</span><span class="v">127.0.0.1 loopback, 169.254.x.x APIPA, 0.0.0.0.</span>
<span class="k">Subnetting</span><span class="v">Pedir prestados bits de host crea subredes. Hosts útiles = 2^(bits host) - 2.</span>
<span class="k">IPv6</span><span class="v">128 bits, hexadecimal. fe80::/10 link-local, fc00::/7 unique local, 2000::/3 global unicast, ff00::/8 multicast. Sin broadcast.</span>
<span class="k">IPv6 autoconfig</span><span class="v">SLAAC, EUI-64. NDP reemplaza a ARP.</span>
</div>
<div class="callout example"><span class="ico">▶</span><div><b>Subnetting rápido:</b> /26 = 255.255.255.192 = bloques de 64. Subredes: .0, .64, .128, .192. Cada una con 62 hosts útiles (64-2).</div></div>

<h3>1.6 Wireless</h3>
<p>Estándares 802.11: a/b/g/n/ac (Wi-Fi 5)/ax (Wi-Fi 6/6E)/be (Wi-Fi 7). Bandas 2.4 GHz (mayor alcance, más interferencia), 5 GHz, 6 GHz. Canales sin solape en 2.4: 1, 6, 11. SSID = nombre de red, BSSID = MAC del AP.</p>
`},
{id:"d2",title:"Dominio 2 — Network Access (Switching)",html:`
<h2>Dominio 2 — Network Access</h2>

<h3>2.1 Conmutación L2</h3>
<p>El switch aprende MAC de origen y construye la <b>tabla CAM/MAC</b>. Reenvía por destino: unicast conocido al puerto, desconocido/broadcast a todos (flood).</p>

<h3>2.2 VLANs</h3>
<div class="kvs">
<span class="k">VLAN</span><span class="v">Dominio de broadcast lógico. Segmenta la red en el mismo switch.</span>
<span class="k">Access port</span><span class="v">Pertenece a UNA VLAN. Conecta endpoints.</span>
<span class="k">Trunk port (802.1Q)</span><span class="v">Lleva varias VLANs etiquetando frames. Conecta switches/routers.</span>
<span class="k">Native VLAN</span><span class="v">Tráfico sin etiqueta en un trunk (default VLAN 1 — cambiar por seguridad).</span>
<span class="k">Voice VLAN</span><span class="v">VLAN separada para teléfonos IP.</span>
<span class="k">Inter-VLAN routing</span><span class="v">Router-on-a-stick (subinterfaces) o switch L3 (SVI).</span>
</div>

<h3>2.3 STP — Spanning Tree Protocol</h3>
<p>Previene bucles de capa 2 desactivando enlaces redundantes hasta que se necesitan.</p>
<div class="kvs">
<span class="k">Root bridge</span><span class="v">Switch con menor bridge ID (prioridad + MAC). Centro del árbol.</span>
<span class="k">Estados</span><span class="v">Blocking → Listening → Learning → Forwarding (STP clásico).</span>
<span class="k">RSTP (802.1w)</span><span class="v">Convergencia mucho más rápida que STP.</span>
<span class="k">PortFast</span><span class="v">Salta a forwarding en puertos de acceso (a endpoints, NO a switches).</span>
<span class="k">BPDU Guard</span><span class="v">Apaga el puerto si recibe BPDU (protege PortFast de switches rogue).</span>
</div>

<h3>2.4 EtherChannel</h3>
<p>Agrupa varios enlaces físicos en uno lógico (más ancho de banda + redundancia). Protocolos: <b>LACP</b> (estándar 802.3ad), <b>PAgP</b> (Cisco), o estático (on).</p>

<h3>2.5 Wireless: arquitectura</h3>
<div class="kvs">
<span class="k">APs autónomos</span><span class="v">Cada AP se gestiona solo.</span>
<span class="k">APs lightweight + WLC</span><span class="v">Gestión centralizada vía CAPWAP tunnel hacia el Wireless LAN Controller.</span>
<span class="k">Modos AP</span><span class="v">Local, FlexConnect, Monitor, Sniffer, Rogue detector.</span>
</div>
`},
{id:"d3",title:"Dominio 3 — IP Connectivity (Routing)",html:`
<h2>Dominio 3 — IP Connectivity</h2>

<h3>3.1 Tabla de routing y decisiones</h3>
<p>El router elige la ruta por <b>longest prefix match</b> (la más específica gana). Si empata el prefijo, decide la <b>Administrative Distance</b> (preferencia entre fuentes); si también empata, la métrica del protocolo.</p>
<table>
<tr><th>Fuente</th><th>AD</th></tr>
<tr><td>Connected</td><td>0</td></tr>
<tr><td>Static</td><td>1</td></tr>
<tr><td>eBGP</td><td>20</td></tr>
<tr><td>EIGRP</td><td>90</td></tr>
<tr><td>OSPF</td><td>110</td></tr>
<tr><td>RIP</td><td>120</td></tr>
<tr><td>iBGP</td><td>200</td></tr>
</table>

<h3>3.2 Routing estático</h3>
<pre><code>ip route 192.168.2.0 255.255.255.0 10.0.0.2
ip route 0.0.0.0 0.0.0.0 10.0.0.1   ! ruta por defecto</code></pre>
<p>Floating static: AD mayor como backup de una ruta dinámica.</p>

<h3>3.3 OSPF (Open Shortest Path First)</h3>
<div class="kvs">
<span class="k">Tipo</span><span class="v">Link-state. Cada router conoce la topología completa de su área.</span>
<span class="k">Métrica</span><span class="v">Coste, inversamente proporcional al ancho de banda.</span>
<span class="k">Áreas</span><span class="v">Jerárquico. Área 0 = backbone. Reduce LSAs y tamaño de tabla.</span>
<span class="k">Adyacencias</span><span class="v">Hello packets. Timers Hello/Dead deben coincidir.</span>
<span class="k">DR/BDR</span><span class="v">En redes multiacceso se elige Designated/Backup DR para reducir adyacencias.</span>
</div>
<pre><code>router ospf 1
 network 10.0.0.0 0.0.0.255 area 0</code></pre>

<h3>3.4 FHRP — redundancia de gateway</h3>
<div class="kvs">
<span class="k">HSRP</span><span class="v">Cisco. Virtual IP/MAC compartida. Active/Standby.</span>
<span class="k">VRRP</span><span class="v">Estándar IETF, equivalente a HSRP.</span>
<span class="k">GLBP</span><span class="v">Cisco, además balancea carga entre gateways.</span>
</div>
<p>Permiten que los hosts tengan un gateway virtual que sobrevive al fallo de un router.</p>
`},
{id:"d4",title:"Dominio 4 — IP Services",html:`
<h2>Dominio 4 — IP Services</h2>

<h3>4.1 NAT (Network Address Translation)</h3>
<div class="kvs">
<span class="k">Static NAT</span><span class="v">1:1 fijo (servidor interno accesible desde fuera).</span>
<span class="k">Dynamic NAT</span><span class="v">Pool de públicas asignadas dinámicamente.</span>
<span class="k">PAT (overload)</span><span class="v">Muchas IPs internas → 1 pública, diferenciadas por puerto. Lo más común.</span>
<span class="k">Inside vs outside</span><span class="v">Local (real interno) vs global (visto desde internet).</span>
</div>

<h3>4.2 DHCP</h3>
<p>Asigna IP, máscara, gateway y DNS automáticamente. Proceso <b>DORA</b>: Discover (broadcast del cliente) → Offer (servidor) → Request (cliente acepta) → Acknowledge. Para cruzar subredes: <code>ip helper-address</code> reenvía el broadcast al servidor.</p>

<h3>4.3 NTP</h3>
<p>Sincroniza relojes. Crítico para logs correlados y certificados. Jerarquía de stratums (stratum 0 = fuente de referencia atómica/GPS).</p>

<h3>4.4 QoS (Quality of Service)</h3>
<div class="kvs">
<span class="k">Clasificación y marcado</span><span class="v">DSCP en cabecera IP. EF (Expedited Forwarding) para voz.</span>
<span class="k">Encolado</span><span class="v">LLQ (Low Latency Queuing) prioriza voz/vídeo.</span>
<span class="k">Shaping vs policing</span><span class="v">Shaping retrasa (buffer); policing descarta el exceso.</span>
</div>

<h3>4.5 Gestión y acceso seguro</h3>
<p>Reemplaza Telnet por <b>SSH</b>: <code>crypto key generate rsa</code>, <code>ip ssh version 2</code>, <code>line vty 0 4 / transport input ssh</code>. Usa SNMPv3 (cifrado), Syslog para logs, NTP para tiempo.</p>
`},
{id:"d5",title:"Dominio 5 — Security Fundamentals",html:`
<h2>Dominio 5 — Security Fundamentals</h2>

<h3>5.1 Conceptos</h3>
<p>Triada CIA, AAA, defensa en profundidad, least privilege. Amenazas: DoS/DDoS, MITM, spoofing, phishing, reconocimiento.</p>

<h3>5.2 Hardening de dispositivos</h3>
<ul>
<li>Contraseñas fuertes: <code>enable secret</code> (hash), no <code>enable password</code> (débil).</li>
<li>Cifrar contraseñas: <code>service password-encryption</code>.</li>
<li>SSH en lugar de Telnet. Deshabilitar servicios no usados.</li>
<li>Banners legales de advertencia (MOTD).</li>
<li>Login con timeout y bloqueo tras N intentos.</li>
</ul>

<h3>5.3 Port Security</h3>
<pre><code>switchport port-security
switchport port-security maximum 2
switchport port-security mac-address sticky
switchport port-security violation shutdown</code></pre>
<div class="kvs">
<span class="k">protect</span><span class="v">Descarta tráfico de MAC no autorizadas, sin log.</span>
<span class="k">restrict</span><span class="v">Descarta + log + incrementa contador.</span>
<span class="k">shutdown</span><span class="v">(default) pone el puerto en err-disabled.</span>
</div>

<h3>5.4 Mitigación de ataques de capa 2</h3>
<div class="kvs">
<span class="k">DHCP Snooping</span><span class="v">Marca puertos trusted/untrusted; bloquea servidores DHCP rogue.</span>
<span class="k">Dynamic ARP Inspection (DAI)</span><span class="v">Valida ARP contra la tabla DHCP snooping. Frena ARP spoofing.</span>
<span class="k">IP Source Guard</span><span class="v">Solo permite tráfico con IP/MAC válidas según binding.</span>
<span class="k">BPDU Guard / Root Guard</span><span class="v">Protegen la topología STP.</span>
</div>

<h3>5.5 ACLs (Access Control Lists)</h3>
<div class="kvs">
<span class="k">Standard (1-99)</span><span class="v">Filtran solo por IP de origen. Aplicar cerca del destino.</span>
<span class="k">Extended (100-199)</span><span class="v">Filtran por origen, destino, protocolo y puerto. Aplicar cerca del origen.</span>
<span class="k">Implicit deny</span><span class="v">Toda ACL termina con un deny implícito.</span>
</div>

<h3>5.6 Seguridad inalámbrica y 802.1X</h3>
<p>WPA3 &gt; WPA2 &gt; WPA &gt; WEP (roto). Personal (PSK) vs Enterprise (802.1X con servidor RADIUS). 802.1X: suplicante ↔ autenticador (switch/AP) ↔ servidor de autenticación.</p>
`},
{id:"d6",title:"Dominio 6 — Automation & Programmability",html:`
<h2>Dominio 6 — Automation & Programmability</h2>

<h3>6.1 SDN (Software-Defined Networking)</h3>
<p>Separa el <b>control plane</b> (decisiones de routing) del <b>data plane</b> (reenvío). Un controlador centralizado programa los dispositivos. Cisco SD-Access, DNA Center.</p>

<h3>6.2 APIs REST</h3>
<div class="kvs">
<span class="k">Métodos</span><span class="v">GET (leer), POST (crear), PUT (reemplazar), PATCH (modificar), DELETE (borrar).</span>
<span class="k">Formatos</span><span class="v">JSON (clave-valor), XML, YAML.</span>
<span class="k">Códigos HTTP</span><span class="v">200 OK, 201 creado, 401 no autenticado, 404 no encontrado, 500 error servidor.</span>
</div>

<h3>6.3 Herramientas de gestión de configuración</h3>
<table>
<tr><th>Tool</th><th>Modelo</th><th>Lenguaje</th></tr>
<tr><td>Ansible</td><td>Agentless, push</td><td>YAML (playbooks)</td></tr>
<tr><td>Puppet</td><td>Agent, pull</td><td>Ruby DSL</td></tr>
<tr><td>Chef</td><td>Agent, pull</td><td>Ruby</td></tr>
<tr><td>Terraform</td><td>Declarativo, IaC</td><td>HCL</td></tr>
</table>

<h3>6.4 JSON básico</h3>
<pre><code>{
  "interface": "GigabitEthernet0/1",
  "enabled": true,
  "ip": { "address": "10.0.0.1", "mask": "255.255.255.0" }
}</code></pre>
<p>Aprende a leer objetos {}, arrays [], strings, números y booleanos. Cae en el examen.</p>
`}
],
questions: [
{d:1,q:"¿En qué capa OSI opera un router?",opts:["Capa 2","Capa 3 (Red)","Capa 4","Capa 7"],c:1,e:"El router opera en capa 3, enrutando paquetes por dirección IP."},
{d:1,q:"Banda que añade Wi-Fi 6E:",opts:["Solo 2.4","Solo 5","6 GHz","60 GHz"],c:2,e:"Wi-Fi 6E (802.11ax) añade la banda de 6 GHz a 2.4 y 5."},
{d:1,q:"Prefijo link-local en IPv6:",opts:["fc00::/7","fe80::/10","2000::/3","ff00::/8"],c:1,e:"fe80::/10 es link-local. fc00::/7 unique local, 2000::/3 global unicast, ff00::/8 multicast."},
{d:1,q:"Una subred /26 tiene cuántos hosts útiles:",opts:["30","62","126","254"],c:1,e:"/26 = 6 bits de host = 2^6-2 = 62 hosts útiles."},
{d:2,q:"Para llevar varias VLANs entre dos switches se usa:",opts:["Access port","Trunk port (802.1Q)","Loopback","Hub"],c:1,e:"Un trunk etiqueta los frames con el VLAN ID (802.1Q) para transportar varias VLANs."},
{d:2,q:"BPDU Guard sirve para:",opts:["Acelerar STP","Apagar un puerto de acceso si recibe BPDU (switch rogue)","Cifrar BPDUs","Habilitar trunk"],c:1,e:"Los puertos de acceso no deben recibir BPDUs; BPDU Guard los pone en err-disabled si las reciben."},
{d:2,q:"Protocolo estándar de EtherChannel:",opts:["PAgP","LACP","HSRP","VTP"],c:1,e:"LACP (802.3ad) es el estándar. PAgP es propietario de Cisco."},
{d:3,q:"Administrative Distance de OSPF:",opts:["1","90","110","120"],c:2,e:"Connected 0, Static 1, EIGRP 90, OSPF 110, RIP 120, iBGP 200."},
{d:3,q:"El router elige la ruta por:",opts:["La métrica más alta","Longest prefix match (la más específica)","Orden alfabético","Aleatorio"],c:1,e:"Primero longest prefix match; si empata, menor AD; si empata, menor métrica."},
{d:3,q:"FHRP estándar (no propietario Cisco):",opts:["HSRP","GLBP","VRRP","PAgP"],c:2,e:"VRRP es el estándar IETF. HSRP y GLBP son de Cisco."},
{d:4,q:"PAT (NAT overload) hace:",opts:["1:1 estático","Muchas IPs privadas a una pública usando puertos","Solo IPv6","Routing"],c:1,e:"PAT multiplexa muchas IPs internas en una pública diferenciándolas por puerto de origen."},
{d:4,q:"Proceso DORA pertenece a:",opts:["DNS","DHCP","NTP","ARP"],c:1,e:"DHCP: Discover, Offer, Request, Acknowledge."},
{d:5,q:"Comando que almacena la contraseña de enable con hash:",opts:["enable password","enable secret","service password","line vty"],c:1,e:"enable secret usa hash; enable password es texto débil reversible."},
{d:5,q:"ACL estándar filtra por:",opts:["Solo IP de origen","Origen y destino","Puerto y protocolo","MAC"],c:0,e:"Standard (1-99) solo IP origen. Extended (100-199) añade destino, protocolo y puerto."},
{d:5,q:"Dynamic ARP Inspection previene:",opts:["DHCP rogue","ARP spoofing validando contra la tabla DHCP snooping","Loops STP","DDoS"],c:1,e:"DAI valida los paquetes ARP contra los bindings de DHCP snooping, frenando el envenenamiento ARP."},
{d:6,q:"Método HTTP REST para crear un recurso:",opts:["GET","POST","DELETE","PATCH"],c:1,e:"POST crea. GET lee, PUT reemplaza, PATCH modifica parcialmente, DELETE borra."},
{d:6,q:"Ansible es:",opts:["Agent-based, pull","Agentless, push, usa YAML","Solo para Windows","Un hipervisor"],c:1,e:"Ansible es agentless (SSH), modelo push, playbooks en YAML."}
],
flashcards: [
{d:1,q:"¿Cuáles son los rangos privados RFC1918?",a:"10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16."},
{d:1,q:"¿Diferencia entre TCP y UDP?",a:"TCP: orientado a conexión, fiable, con handshake y control de flujo (web, SSH). UDP: sin conexión, rápido, sin garantías (DNS, VoIP, streaming)."},
{d:1,q:"¿Cómo se calculan los hosts útiles de una subred?",a:"2^(bits de host) - 2 (se restan red y broadcast). Ej: /26 → 2^6-2 = 62."},
{d:2,q:"¿Qué hace PortFast y dónde se aplica?",a:"Salta los estados de STP y pasa el puerto a forwarding inmediatamente. SOLO en puertos de acceso a endpoints, nunca hacia otros switches."},
{d:2,q:"¿Qué es el root bridge en STP?",a:"El switch con el menor bridge ID (prioridad + MAC). Es la raíz del árbol; todos los caminos se calculan hacia él."},
{d:3,q:"¿Qué es la Administrative Distance?",a:"La confiabilidad de una fuente de routing. Si dos protocolos ofrecen ruta al mismo destino, gana el de menor AD (Connected 0, Static 1, OSPF 110, RIP 120)."},
{d:3,q:"¿Qué tipo de protocolo es OSPF y qué métrica usa?",a:"Link-state. Usa coste basado en ancho de banda. Jerárquico por áreas (área 0 backbone). Elige DR/BDR en redes multiacceso."},
{d:4,q:"¿Qué hace 'ip helper-address'?",a:"Convierte el broadcast DHCP en unicast hacia un servidor DHCP de otra subred, permitiendo DHCP entre redes."},
{d:5,q:"¿Qué hace Port Security con violation 'shutdown'?",a:"Pone el puerto en err-disabled cuando detecta una MAC no autorizada. Requiere reactivación manual (o errdisable recovery)."},
{d:5,q:"¿Qué previene DHCP Snooping?",a:"Servidores DHCP rogue: marca puertos trusted/untrusted y descarta ofertas DHCP en los untrusted."},
{d:6,q:"¿Qué separa la arquitectura SDN?",a:"El control plane (inteligencia/decisiones) del data plane (reenvío). Un controlador central programa los dispositivos vía API."}
]
};

// === Cisco CCNP Security SCOR 350-701 ===
CERT_DATA.ccnp = {
theory: [
{id:"d0",title:"Introducción a CCNP Security",html:`
<h2>CCNP Security — SCOR 350-701</h2>
<div class="lead">SCOR (Security Core) es el examen núcleo del CCNP Security y también cualifica para el CCIE Security. Tras aprobarlo, eliges un examen de concentración (firewall SNCF, ISE SISE, email SESA, etc.) para completar el CCNP.</div>
<h3>Dominios del examen</h3>
<table>
<tr><th>Dominio</th><th>Peso</th></tr>
<tr><td>1. Security Concepts</td><td>25%</td></tr>
<tr><td>2. Network Security</td><td>20%</td></tr>
<tr><td>3. Securing the Cloud</td><td>15%</td></tr>
<tr><td>4. Content Security</td><td>15%</td></tr>
<tr><td>5. Endpoint Protection & Detection</td><td>15%</td></tr>
<tr><td>6. Secure Network Access, Visibility & Enforcement</td><td>10%</td></tr>
</table>
`},
{id:"d1",title:"Dominio 1 — Security Concepts",html:`
<h2>Dominio 1 — Security Concepts</h2>
<h3>1.1 Panorama de amenazas</h3>
<p>Ataques comunes: phishing, ransomware, DoS/DDoS, MITM/on-path, robo de credenciales, supply chain, SQLi, XSS. Vectores: email, web, endpoints, redes, cloud.</p>
<h3>1.2 Fundamentos de criptografía</h3>
<div class="kvs">
<span class="k">Simétrico</span><span class="v">AES, 3DES (legacy). Una clave compartida, rápido.</span>
<span class="k">Asimétrico</span><span class="v">RSA, ECC. Par pública/privada. Intercambio de claves y firmas.</span>
<span class="k">Hashing</span><span class="v">SHA-2, integridad. HMAC añade autenticación con clave.</span>
<span class="k">PKI</span><span class="v">CA, certificados X.509, CRL/OCSP.</span>
</div>
<h3>1.3 VPN</h3>
<div class="kvs">
<span class="k">IPsec</span><span class="v">AH (integridad) y ESP (cifrado+integridad). IKEv1/IKEv2 negocia claves. Transport vs Tunnel mode.</span>
<span class="k">Site-to-site</span><span class="v">Gateway a gateway.</span>
<span class="k">Remote access</span><span class="v">AnyConnect (SSL/TLS o IPsec/IKEv2).</span>
<span class="k">DMVPN</span><span class="v">Hub-and-spoke dinámico con spoke-to-spoke (NHRP).</span>
<span class="k">FlexVPN</span><span class="v">Framework unificado sobre IKEv2.</span>
<span class="k">GETVPN</span><span class="v">Cifrado en redes MPLS privadas sin túneles punto a punto.</span>
</div>
`},
{id:"d2",title:"Dominio 2 — Network Security",html:`
<h2>Dominio 2 — Network Security</h2>
<h3>2.1 Cisco ASA</h3>
<p>Firewall stateful clásico. <b>Security levels</b>: inside 100 (confiable), outside 0 (no confiable), DMZ ~50. Tráfico de nivel alto a bajo se permite por defecto; de bajo a alto requiere ACL. Object-groups, NAT.</p>
<h3>2.2 Cisco Firepower (FTD)</h3>
<p>NGFW + IPS unificado, gestionado por <b>FMC</b>. Motor de inspección <b>Snort</b>. Application Visibility and Control (AVC), URL filtering, AMP integrado, intrusion policies.</p>
<h3>2.3 Seguridad de capa 2</h3>
<p>Port security, DHCP snooping, Dynamic ARP Inspection, IP Source Guard, BPDU Guard, Root Guard, Storm Control, Private VLANs.</p>
<h3>2.4 Telemetría de red</h3>
<div class="kvs">
<span class="k">NetFlow / IPFIX</span><span class="v">Metadata de flujos para análisis.</span>
<span class="k">Stealthwatch</span><span class="v">Detección con NetFlow + ML: lateral movement, exfil, C2.</span>
<span class="k">ETA</span><span class="v">Encrypted Traffic Analytics: detecta malware en tráfico cifrado sin descifrarlo.</span>
</div>
`},
{id:"d3",title:"Dominio 3 — Securing the Cloud",html:`
<h2>Dominio 3 — Securing the Cloud</h2>
<h3>3.1 Modelos cloud</h3>
<p>IaaS, PaaS, SaaS. Despliegue público/privado/híbrido/comunitario. Responsabilidad compartida.</p>
<h3>3.2 Soluciones Cisco para cloud</h3>
<div class="kvs">
<span class="k">Cisco Umbrella</span><span class="v">DNS-layer security + Secure Web Gateway + CASB + FWaaS. SASE cloud.</span>
<span class="k">Cloudlock</span><span class="v">CASB para apps SaaS (M365, Google, Salesforce).</span>
<span class="k">Secure Workload (Tetration)</span><span class="v">Microsegmentación y protección de workloads.</span>
<span class="k">Stealthwatch Cloud</span><span class="v">Visibilidad y detección en entornos cloud.</span>
</div>
<h3>3.3 Contenedores y DevSecOps</h3>
<p>Escaneo de imágenes, RBAC en Kubernetes, network policies, gestión de secretos, CI/CD seguro.</p>
`},
{id:"d4",title:"Dominio 4 — Content Security",html:`
<h2>Dominio 4 — Content Security</h2>
<h3>4.1 Email — Cisco Secure Email (ESA)</h3>
<p>Anti-spam, antivirus, anti-phishing, DLP, cifrado. Verificación SPF/DKIM/DMARC. Graymail management.</p>
<h3>4.2 Web — Cisco Secure Web Appliance (WSA)</h3>
<p>Proxy: URL filtering, escaneo de malware, descifrado TLS, control de aplicaciones, integración con CASB.</p>
<h3>4.3 Umbrella (DNS-layer)</h3>
<p>Bloquea resoluciones a dominios maliciosos antes de establecer conexión. Primera línea de defensa, también para usuarios remotos.</p>
`},
{id:"d5",title:"Dominio 5 — Endpoint Protection",html:`
<h2>Dominio 5 — Endpoint Protection & Detection</h2>
<h3>5.1 Cisco Secure Endpoint (AMP for Endpoints)</h3>
<div class="kvs">
<span class="k">File reputation</span><span class="v">Hash contra la nube de inteligencia (Talos).</span>
<span class="k">Sandboxing</span><span class="v">Threat Grid detona archivos sospechosos.</span>
<span class="k">Retrospection</span><span class="v">Si un archivo aceptado resulta malicioso después, alerta con timeline.</span>
<span class="k">EDR</span><span class="v">Detección y respuesta en el endpoint.</span>
</div>
<h3>5.2 Posture y cumplimiento</h3>
<p>Cisco ISE evalúa la postura del endpoint (AV actualizado, parches, cifrado) antes de admitirlo. Si no cumple → cuarentena/remediación.</p>
<h3>5.3 EPP vs EDR</h3>
<p>EPP previene (AV, firewall, device control). EDR detecta y responde a lo que evade la prevención. XDR correla múltiples telemetrías.</p>
`},
{id:"d6",title:"Dominio 6 — Secure Network Access",html:`
<h2>Dominio 6 — Secure Network Access, Visibility & Enforcement</h2>
<h3>6.1 Cisco ISE</h3>
<p>Plataforma de control de acceso: NAC, RADIUS, TACACS+, profiling, posture, BYOD onboarding, guest access.</p>
<h3>6.2 802.1X</h3>
<div class="flow">
<span class="step">Suplicante (cliente)</span><span class="arr">↔</span>
<span class="step">Autenticador (switch/AP)</span><span class="arr">↔</span>
<span class="step">Servidor (ISE/RADIUS)</span>
</div>
<p>Usa EAP. EAP-TLS (certificados mutuos) es el más seguro.</p>
<h3>6.3 TrustSec y SGT</h3>
<p><b>Security Group Tags (SGT)</b> abstraen IP/subred. Las políticas se definen entre grupos (ej. "Empleados ↔ Servidores") con SGACLs, no entre IPs. Simplifica la microsegmentación.</p>
<h3>6.4 TACACS+ vs RADIUS</h3>
<div class="compare">
<div><h5>RADIUS</h5><p>UDP 1812/1813. Cifra solo la contraseña. Combina autenticación y autorización. Para acceso de red (802.1X, VPN).</p></div>
<div><h5>TACACS+</h5><p>TCP 49. Cifra todo el payload. Separa AAA. Ideal para administración de dispositivos (command authorization).</p></div>
</div>
`}
],
questions: [
{d:1,q:"Ventaja de IKEv2 sobre IKEv1:",opts:["Más mensajes","Menos mensajes, NAT-T y EAP nativos, mejor movilidad","No soporta IPv6","Sin cifrado"],c:1,e:"IKEv2 negocia con menos mensajes, soporta NAT traversal y EAP de forma nativa y MOBIKE."},
{d:1,q:"En IPsec, el protocolo que cifra Y autentica:",opts:["AH","ESP","IKE","GRE"],c:1,e:"ESP cifra+autentica. AH solo autentica/integridad sin cifrar."},
{d:2,q:"Security level por defecto del interface 'inside' en ASA:",opts:["0","50","100","255"],c:2,e:"Inside = 100 (más confiable). Outside = 0. DMZ típicamente 50."},
{d:2,q:"Motor de inspección de Cisco Firepower (FTD):",opts:["Suricata","Snort","Zeek","Bro"],c:1,e:"Firepower usa Snort como motor de detección de intrusiones."},
{d:2,q:"Stealthwatch detecta amenazas usando:",opts:["Solo firmas","NetFlow + machine learning (comportamiento)","Antivirus","DNS"],c:1,e:"Secure Network Analytics analiza NetFlow con ML para detectar lateral movement, exfil y C2."},
{d:3,q:"Cisco Umbrella opera principalmente en:",opts:["Capa 2","Capa de DNS (L7)","Capa física","Capa de enlace"],c:1,e:"Umbrella bloquea resoluciones DNS a dominios maliciosos antes de la conexión."},
{d:4,q:"Cisco ESA protege:",opts:["Endpoints","El correo electrónico (email gateway)","La web","El disco"],c:1,e:"Email Security Appliance: anti-spam, AV, anti-phishing, DLP para correo."},
{d:5,q:"La retrospection de AMP for Endpoints:",opts:["Hace backup","Re-evalúa archivos pasados con inteligencia nueva y alerta si ahora son maliciosos","Cifra discos","Bloquea USB"],c:1,e:"Si un archivo que pasó como limpio resulta malicioso después, AMP avisa con la cadena de eventos completa."},
{d:6,q:"En TrustSec, un SGT es:",opts:["Una VLAN","Una etiqueta de grupo de seguridad basada en identidad para aplicar políticas","Un puerto","Una IP estática"],c:1,e:"Security Group Tag abstrae IP/subred; las SGACLs aplican políticas entre grupos."},
{d:6,q:"Para administración de dispositivos con autorización de comandos es preferible:",opts:["RADIUS","TACACS+","SNMP","HTTP"],c:1,e:"TACACS+ separa AAA y permite autorización granular de comandos."}
],
flashcards: [
{d:1,q:"¿Diferencia entre AH y ESP en IPsec?",a:"AH: solo integridad/autenticación, no cifra. ESP: cifrado + integridad + autenticación. ESP es el habitual."},
{d:1,q:"¿Qué es DMVPN?",a:"Dynamic Multipoint VPN. Hub-and-spoke con túneles spoke-to-spoke dinámicos vía NHRP. Escala mejor que site-to-site punto a punto."},
{d:2,q:"¿Cómo funcionan los security levels en un ASA?",a:"Cada interfaz tiene nivel 0-100. Tráfico de mayor a menor se permite por defecto; de menor a mayor requiere ACL. Inside=100, outside=0."},
{d:2,q:"¿Qué es Encrypted Traffic Analytics (ETA)?",a:"Detecta malware en tráfico cifrado sin descifrarlo, analizando metadatos del flujo (tamaño/secuencia de paquetes, características TLS)."},
{d:3,q:"¿Qué es Cisco Umbrella?",a:"Plataforma SASE cloud: DNS-layer security, Secure Web Gateway, CASB y FWaaS. Bloquea dominios maliciosos a nivel DNS."},
{d:5,q:"¿Diferencia EPP vs EDR?",a:"EPP previene (AV, firewall, device control). EDR detecta y responde a amenazas que evaden la prevención, con visibilidad e investigación."},
{d:6,q:"¿Qué hace Cisco ISE?",a:"Control de acceso a red: NAC, RADIUS/TACACS+, profiling, posture, BYOD y guest. Asigna SGTs para microsegmentación TrustSec."},
{d:6,q:"¿Diferencia entre RADIUS y TACACS+?",a:"RADIUS: UDP, cifra solo password, combina auth+autorización (acceso de red). TACACS+: TCP, cifra todo, separa AAA (administración con command authorization)."}
]
};

// === Juniper JNCIS-SEC JN0-335 ===
CERT_DATA.jncissec = {
theory: [
{id:"d0",title:"Introducción a JNCIS-SEC",html:`
<h2>JNCIS-SEC (JN0-335) — Juniper Specialist Security</h2>
<div class="lead">Certificación de nivel especialista de Juniper, centrada en los firewalls de la serie <b>SRX</b> y el sistema operativo <b>Junos</b>. Valida zonas, políticas, NAT, VPN IPsec y protección avanzada contra amenazas.</div>
<h3>Temario aproximado</h3>
<p>SRX/Junos fundamentos, security zones y screen options, security policies, NAT (source/destination/static), IPsec VPN, Unified Threat Management (UTM), ATP Cloud, application security (AppSecure).</p>
`},
{id:"d1",title:"SRX, Junos y Zonas",html:`
<h2>SRX, Junos y Security Zones</h2>
<h3>1.1 Plataforma SRX</h3>
<p>Firewalls de Juniper. Branch (SRX300-series) y datacenter (SRX1500/4000/5000). <b>vSRX</b> es la versión virtual. Corren <b>Junos OS</b> (basado en FreeBSD), con separación de control plane (Routing Engine) y data plane (Packet Forwarding Engine).</p>
<h3>1.2 Junos CLI</h3>
<div class="kvs">
<span class="k">Modos</span><span class="v">Operational (monitoreo) y Configuration (configure).</span>
<span class="k">commit</span><span class="v">Aplica la candidate config a la active.</span>
<span class="k">commit confirmed</span><span class="v">Aplica con timer; si no confirmas, rollback automático.</span>
<span class="k">rollback</span><span class="v">Vuelve a una configuración anterior (hasta 50 versiones).</span>
<span class="k">show | compare</span><span class="v">Diferencia entre candidate y active.</span>
</div>
<h3>1.3 Security Zones</h3>
<p>Agrupaciones lógicas de interfaces (trust, untrust, dmz). El tráfico <b>entre zonas</b> requiere una security policy. <b>Screen options</b> protegen cada zona de ataques (SYN flood, port scan, IP spoofing).</p>
`},
{id:"d2",title:"Security Policies y NAT",html:`
<h2>Security Policies y NAT</h2>
<h3>2.1 Security policies</h3>
<p>Definen qué tráfico se permite entre zonas. Estructura: from-zone → to-zone → match (source, destination, application) → then (permit/deny/reject, log). Unified policies combinan capa 4 con capa 7 (aplicación, URL, usuario).</p>
<h3>2.2 NAT en SRX</h3>
<div class="kvs">
<span class="k">Source NAT</span><span class="v">Traduce origen (salida a internet). Interface, pool o off.</span>
<span class="k">Destination NAT</span><span class="v">Traduce destino (port forwarding a servidores internos).</span>
<span class="k">Static NAT</span><span class="v">Mapeo bidireccional 1:1.</span>
</div>
<p><b>Orden:</b> Static NAT → Destination NAT → routing → Source NAT → policy lookup.</p>
`},
{id:"d3",title:"IPsec VPN y ATP",html:`
<h2>IPsec VPN y Advanced Threat Protection</h2>
<h3>3.1 IPsec VPN</h3>
<div class="kvs">
<span class="k">IKE Phase 1</span><span class="v">Establece el canal seguro (ISAKMP SA): proposal, gateway, ike-policy.</span>
<span class="k">IKE Phase 2</span><span class="v">Crea las SAs IPsec para el tráfico real: proposal, ipsec-policy, vpn.</span>
<span class="k">Route-based</span><span class="v">Usa interfaz túnel st0; el routing decide qué entra. Flexible.</span>
<span class="k">Policy-based</span><span class="v">SAs ligadas a una policy concreta.</span>
</div>
<h3>3.2 UTM (Unified Threat Management)</h3>
<p>Funciones integradas en el SRX: antivirus, anti-spam, web filtering, content filtering.</p>
<h3>3.3 ATP Cloud (antes Sky ATP)</h3>
<p>Servicio cloud de Juniper para sandboxing de archivos sospechosos. El SRX envía muestras, recibe veredicto e IoCs, y bloquea automáticamente conexiones a C2 detectados.</p>
<h3>3.4 AppSecure</h3>
<p>Suite de seguridad de aplicaciones: AppID (identifica apps en cualquier puerto), AppFW (firewall por aplicación), AppQoS, AppTrack (visibilidad).</p>
`}
],
questions: [
{d:1,q:"En Junos, ¿qué hace 'commit confirmed'?",opts:["Guarda sin aplicar","Aplica con timer y hace rollback automático si no confirmas","Borra la config","Reinicia"],c:1,e:"Aplica la configuración pero revierte automáticamente tras X minutos si no ejecutas un 'commit' final."},
{d:1,q:"El tráfico entre dos security zones en un SRX:",opts:["Se permite por defecto","Requiere una security policy explícita","Está siempre bloqueado","Solo necesita NAT"],c:1,e:"Por defecto el tráfico inter-zona se deniega; necesita una policy from-zone to-zone que lo permita."},
{d:2,q:"Orden de procesamiento NAT en SRX:",opts:["Source primero","Static → Destination → routing → Source → policy","Aleatorio","Solo source"],c:1,e:"Static NAT, luego Destination NAT, routing, Source NAT y finalmente policy lookup."},
{d:2,q:"Acción de policy que notifica al origen con RST/ICMP:",opts:["permit","deny","reject","log"],c:2,e:"reject rechaza activamente notificando al origen; deny descarta silenciosamente."},
{d:3,q:"IKE Phase 1 establece:",opts:["Las SAs IPsec del tráfico","El canal seguro (ISAKMP SA) para negociar el resto","El túnel TCP","El routing"],c:1,e:"Phase 1 crea el canal seguro entre peers; Phase 2 crea las SAs IPsec para los datos."},
{d:3,q:"ATP Cloud de Juniper proporciona:",opts:["Routing","Sandboxing cloud de archivos con bloqueo automático de C2","DHCP","NAT"],c:1,e:"ATP Cloud detona muestras en sandbox, devuelve veredicto e IoCs y el SRX bloquea las conexiones maliciosas."}
],
flashcards: [
{d:1,q:"¿Qué ventaja da 'commit confirmed' en Junos?",a:"Aplica la config y arranca un timer; si no confirmas con otro commit, revierte automáticamente. Evita quedarte fuera tras un cambio remoto erróneo."},
{d:1,q:"¿Qué son las security zones en un SRX?",a:"Agrupaciones lógicas de interfaces (trust, untrust, dmz). El tráfico entre zonas requiere una security policy; las screen options protegen cada zona."},
{d:2,q:"¿Cuál es el orden de NAT en SRX?",a:"Static NAT → Destination NAT → decisión de routing → Source NAT → policy lookup."},
{d:2,q:"¿Diferencia VPN route-based vs policy-based en SRX?",a:"Route-based: interfaz túnel st0, el routing decide qué entra (flexible, soporta routing dinámico). Policy-based: las SAs van ligadas a una policy concreta."},
{d:3,q:"¿Qué es AppSecure en Junos?",a:"Suite de seguridad de aplicaciones: AppID (identifica apps en cualquier puerto), AppFW (firewall por app), AppQoS y AppTrack (visibilidad)."}
]
};
