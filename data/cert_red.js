window.CERT_DATA = window.CERT_DATA || {};

// === CompTIA PenTest+ PT0-003 ===
CERT_DATA.pentest = {
theory: [
{id:"d1",title:"Domain 1 — Engagement Management (17%)",html:`
<h2>PenTest+ PT0-003</h2>
<div class="lead">Pentest end-to-end. 5 dominios. Más amplio que OSCP, menos profundo en exploits.</div>
<h3>Pre-engagement</h3>
<p><b>Rules of Engagement (RoE):</b> alcance, ventana, contactos, qué está fuera de alcance. <b>SOW</b>, <b>MSA</b>, <b>NDA</b>. Authorization en escrito antes de tocar nada.</p>
<h3>Tipos</h3>
<p>External, internal, web app, wireless, physical, social engineering, red team. Black/gray/white box (known/partially/unknown).</p>
<h3>Compliance</h3>
<p>PCI DSS pentest anual. HIPAA risk analysis. SOX, GDPR.</p>
`},
{id:"d2",title:"Domain 2 — Reconnaissance & Enumeration (21%)",html:`
<h2>Recon & Enumeration</h2>
<h3>OSINT pasivo</h3>
<p>Shodan, Censys, theHarvester, Maltego, Google dorks, Hunter.io (emails), LinkedIn, dominios (whois, dnsenum), subdominios (Sublist3r, Amass, crt.sh).</p>
<h3>Activo</h3>
<p>Nmap (-sS, -sV, -sC, -A, -p-, -oA), Masscan rápido, banner grabbing.</p>
<h3>Vulnerability scanning</h3>
<p>Nessus, OpenVAS, Nexpose, Nikto (web), WPScan (WordPress).</p>
<h3>Service enum</h3>
<p>SMB: enum4linux, smbclient, smbmap. SNMP: snmpwalk, onesixtyone. LDAP: ldapsearch. DNS: dnsrecon, fierce.</p>
`},
{id:"d3",title:"Domain 3 — Attacks & Exploits (35%)",html:`
<h2>Attacks & Exploits</h2>
<h3>Network attacks</h3>
<p>ARP spoofing (Ettercap, arpspoof), DNS poisoning (Responder), relay (NTLM, ntlmrelayx), brute force (Hydra, Medusa).</p>
<h3>Web app attacks</h3>
<p>OWASP Top 10. SQLi (sqlmap), XSS, CSRF, SSRF, SSTI, IDOR, path traversal, file upload, command injection, deserialization. Tools: Burp Suite, ZAP, ffuf, gobuster, dirb.</p>
<h3>Wireless</h3>
<p>WPA2 handshake capture (aircrack-ng, hcxdumptool) + crack (hashcat). WPS attacks (Reaver). Evil twin (airbase-ng).</p>
<h3>Cloud attacks</h3>
<p>S3 buckets públicos, IAM permisivo, credenciales en repos (gitleaks, truffleHog), SSRF a metadata (169.254.169.254).</p>
<h3>Active Directory</h3>
<p>Enum (BloodHound, ldapsearch, PowerView). Kerberoasting, AS-REP roasting, Pass-the-Hash, Pass-the-Ticket, DCSync, unconstrained delegation.</p>
<h3>Post-exploitation</h3>
<p>Privilege escalation (Linux: linpeas; Windows: winpeas, PowerUp, Seatbelt). Persistence, lateral movement, exfil.</p>
`},
{id:"d4",title:"Domain 4 — Reporting (16%)",html:`
<h2>Reporting & Communication</h2>
<h3>Estructura del informe</h3>
<p>Executive summary, scope, methodology, findings (con CVSS), evidencia (screenshots), remediation, appendix.</p>
<h3>Comunicación</h3>
<p>Findings críticos: notificación inmediata. Daily briefings durante engagement.</p>
<h3>Remediation</h3>
<p>Recomendaciones priorizadas, esfuerzo estimado, compensating controls.</p>
`},
{id:"d5",title:"Domain 5 — Tools & Code Analysis (11%)",html:`
<h2>Tools & Code Analysis</h2>
<h3>Categorías de tools</h3>
<p>Recon (nmap, masscan), web (Burp, ZAP), exploitation (Metasploit, sqlmap), cred (Hydra, Hashcat, John), AD (BloodHound, mimikatz, impacket), wireless (aircrack-ng), cloud (Pacu, ScoutSuite).</p>
<h3>Scripting</h3>
<p>Bash, PowerShell, Python para automatización. Reading code in Ruby (Metasploit), Perl, PHP.</p>
<h3>Análisis básico de código</h3>
<p>Identificar SQLi, XSS, hardcoded creds, weak crypto en snippets.</p>
`}
],
questions: [
{d:1,q:"Documento OBLIGATORIO antes de empezar un pentest:",opts:["MSA","Rules of Engagement (RoE) firmadas","Antivirus desactivado","CV"],c:1,e:"RoE firmadas + autorización escrita son legalmente imprescindibles. Sin ellas el pentest es ilegal."},
{d:2,q:"Para enumerar shares SMB en un host Windows:",opts:["nslookup","smbclient -L \\\\target","ping","tracert"],c:1,e:"smbclient -L lista shares. enum4linux y smbmap también funcionan."},
{d:2,q:"Nmap aggressive scan con scripts y versión:",opts:["-sP","-sV","-A","-oN"],c:2,e:"-A = -sV + -sC + -O + traceroute (aggressive)."},
{d:3,q:"Tool especializada en SQL injection automatizada:",opts:["sqlmap","Burp Repeater","Hydra","Hashcat"],c:0,e:"sqlmap detecta y explota SQLi automatizadamente. Soporta MySQL, MSSQL, Oracle, PostgreSQL, etc."},
{d:3,q:"Para enumerar AD desde Linux usando PowerView equivalente:",opts:["BloodHound + bloodhound-python","WireShark","Burp","Hashcat"],c:0,e:"bloodhound-python (ingestor) recolecta AD info desde Linux y la sube a la GUI BloodHound."},
{d:3,q:"Captura el handshake WPA2 con:",opts:["airodump-ng","hashcat","john","Wireshark"],c:0,e:"airodump-ng captura paquetes wifi incluyendo el 4-way handshake. Luego se cracka con hashcat (mode 22000)."},
{d:3,q:"Endpoint cloud metadata AWS para SSRF:",opts:["10.0.0.1","169.254.169.254","127.0.0.1","8.8.8.8"],c:1,e:"169.254.169.254 es el IMDS de AWS. SSRF puede leer credenciales IAM temporales si IMDSv1 está habilitado."},
{d:4,q:"Sección del informe que va dirigida a no-técnicos:",opts:["Methodology","Executive summary","Findings detail","Tools used"],c:1,e:"Executive summary: impacto de negocio, riesgo, recomendaciones de alto nivel para C-level."},
{d:5,q:"Framework de explotación más usado:",opts:["Metasploit","Wireshark","Nessus","Splunk"],c:0,e:"Metasploit Framework: módulos de exploit, payload, post. Standard de facto."}
],
flashcards: [
{d:1,q:"¿Qué incluye una RoE bien hecha?",a:"Alcance (IPs, dominios), ventana de tiempo, contactos de emergencia 24/7, técnicas permitidas/prohibidas, qué está fuera de alcance, plan de comunicación."},
{d:2,q:"¿Qué hace crt.sh y por qué es útil?",a:"Repositorio de Certificate Transparency. Buscar un dominio devuelve todos los certs emitidos, incluidos subdominios — recon pasivo gratis."},
{d:3,q:"¿Qué es Kerberoasting?",a:"Solicitas TGS para SPNs de cuentas de servicio. Recibes ticket cifrado con hash de la cuenta de servicio. Crackeas offline (hashcat -m 13100)."},
{d:3,q:"¿Qué es ntlmrelayx?",a:"Tool de impacket que captura autenticación NTLM y la relaya a otro target (SMB, LDAP, HTTP). Permite ejecutar comandos sin crackear el hash."},
{d:4,q:"¿Diferencia entre finding crítico y high?",a:"Crítico: exploit fácil + impacto severo (RCE no autenticado). High: impacto severo pero requiere alguna condición (auth, interacción)."}
]
};

// === OSCP (OffSec) ===
CERT_DATA.oscp = {
theory: [
{id:"d1",title:"Domain 1 — Enumeration & Foothold",html:`
<h2>OSCP — OffSec Certified Professional</h2>
<div class="lead">La cert ofensiva más respetada. Examen 24h: pivot a 3 hosts AD + 3 standalone. 'Try Harder'. Reporte 24h adicional.</div>
<h3>Enumeration mantra</h3>
<p>"Enumeration is the key". Si no encuentras vector, enumera más a fondo.</p>
<h3>Network enum</h3>
<p>Nmap full TCP (-p-), UDP top-100 (-sU --top-ports 100), version (-sV), default scripts (-sC). Salida persistente (-oA).</p>
<h3>Service enum por protocolo</h3>
<p><b>SMB (139/445):</b> enum4linux-ng, smbmap, smbclient, crackmapexec.<br>
<b>FTP (21):</b> anonymous login, banner.<br>
<b>SSH (22):</b> banner version, key auth check.<br>
<b>HTTP/S (80/443):</b> ffuf/gobuster/feroxbuster, nikto, whatweb, source code.<br>
<b>SNMP (161/UDP):</b> snmpwalk, onesixtyone.<br>
<b>RDP (3389):</b> rdesktop, xfreerdp.<br>
<b>WinRM (5985/5986):</b> evil-winrm.<br>
<b>SQL (1433/3306/5432):</b> sqsh, mssqlclient.py, mysql client.</p>
`},
{id:"d2",title:"Domain 2 — Web Attacks",html:`
<h2>Web Application Attacks</h2>
<h3>Recon web</h3>
<p>Directory busting (ffuf -u target/FUZZ -w wordlist), virtual hosts (-H "Host: FUZZ.target"), parámetros (Arjun).</p>
<h3>Vulnerabilidades core OSCP</h3>
<ul>
<li><b>SQLi</b> — manual y sqlmap.</li>
<li><b>LFI/RFI</b> — leer archivos sensibles, log poisoning, PHP wrappers.</li>
<li><b>File upload</b> — bypass extensión, MIME, magic bytes. Upload webshell.</li>
<li><b>Command injection</b> — separadores ;, |, &&, $(), backticks.</li>
<li><b>SSTI</b> — Jinja2, Twig, Smarty.</li>
<li><b>XXE</b> — XML External Entity.</li>
<li><b>Deserialization</b> — PHP, Python pickle, Java.</li>
</ul>
<h3>Webshells</h3>
<p>Simple PHP: <code>&lt;?php system($_GET["c"]); ?&gt;</code>. Reverse shells: bash, nc, php, python, perl, powershell.</p>
`},
{id:"d3",title:"Domain 3 — Privilege Escalation",html:`
<h2>Privilege Escalation</h2>
<h3>Linux PrivEsc</h3>
<div class="kvs">
<span class="k">SUID/SGID</span><span class="v">find / -perm -4000 2>/dev/null. GTFOBins.</span>
<span class="k">Sudo</span><span class="v">sudo -l. Misconfigurations explotables.</span>
<span class="k">Kernel exploits</span><span class="v">uname -a. Dirty COW, Dirty Pipe.</span>
<span class="k">Cron jobs</span><span class="v">/etc/crontab, scripts world-writable.</span>
<span class="k">PATH hijacking</span><span class="v">Programa SUID llama binario sin ruta absoluta.</span>
<span class="k">Capabilities</span><span class="v">getcap -r / 2>/dev/null.</span>
<span class="k">Tools</span><span class="v">linpeas.sh, LinEnum.sh, linux-exploit-suggester.</span>
</div>
<h3>Windows PrivEsc</h3>
<div class="kvs">
<span class="k">Service misconfig</span><span class="v">Unquoted service path, weak permissions.</span>
<span class="k">AlwaysInstallElevated</span><span class="v">Registry permite MSI como SYSTEM.</span>
<span class="k">Token impersonation</span><span class="v">SeImpersonate → JuicyPotato/PrintSpoofer/RoguePotato.</span>
<span class="k">Stored creds</span><span class="v">cmdkey /list, Unattend.xml, regedit AutoLogon.</span>
<span class="k">DLL hijacking</span><span class="v">App carga DLL sin path; coloca tu DLL primero en PATH.</span>
<span class="k">Tools</span><span class="v">winpeas.exe, PowerUp.ps1, Seatbelt, Watson.</span>
</div>
`},
{id:"d4",title:"Domain 4 — Active Directory",html:`
<h2>Active Directory Attacks</h2>
<h3>Enumeration</h3>
<p>BloodHound (SharpHound recolección), PowerView, ldapsearch, GetUserSPNs, GetNPUsers (impacket).</p>
<h3>Initial creds → first access</h3>
<p>Password spray (kerbrute, crackmapexec), AS-REP roasting (cuentas con DONT_REQ_PREAUTH).</p>
<h3>Post-foothold</h3>
<div class="kvs">
<span class="k">Kerberoasting</span><span class="v">GetUserSPNs.py → hashcat 13100.</span>
<span class="k">Pass-the-Hash</span><span class="v">crackmapexec smb -H hash.</span>
<span class="k">Pass-the-Ticket</span><span class="v">Robar ticket .ccache, exportar KRB5CCNAME.</span>
<span class="k">DCSync</span><span class="v">secretsdump.py -just-dc. Necesita Replicating Directory Changes.</span>
<span class="k">Golden Ticket</span><span class="v">Falsificar TGT con krbtgt hash.</span>
<span class="k">Unconstrained delegation</span><span class="v">Capturar TGTs en host comprometido.</span>
<span class="k">Constrained delegation</span><span class="v">S4U2Self + S4U2Proxy.</span>
</div>
<h3>Lateral movement</h3>
<p>WinRM (evil-winrm), SMB (psexec.py, smbexec.py, wmiexec.py), RDP, SSH (en redes mixtas).</p>
`},
{id:"d5",title:"Domain 5 — Buffer Overflow & Pivoting",html:`
<h2>Buffer Overflow básico (legacy en OSCP nuevo, pero útil)</h2>
<h3>Pasos clásicos x86 stack BOF</h3>
<div class="flow">
<span class="step">Fuzzing</span><span class="arr">→</span>
<span class="step">Crash offset (pattern_create/offset)</span><span class="arr">→</span>
<span class="step">EIP control</span><span class="arr">→</span>
<span class="step">Bad chars</span><span class="arr">→</span>
<span class="step">Find JMP ESP</span><span class="arr">→</span>
<span class="step">Shellcode</span>
</div>
<h3>Pivoting</h3>
<p>SSH dynamic forwarding (-D 1080) + proxychains. Chisel, ligolo-ng, sshuttle. Port forwarding local/remote/dynamic.</p>
<h3>Túneles</h3>
<p>Cuando un host interno no está accesible directo, pivotamos a través de host comprometido.</p>
`}
],
questions: [
{d:1,q:"Para escanear todos los puertos TCP con Nmap:",opts:["nmap target","nmap -p- target","nmap -sP target","nmap -sn target"],c:1,e:"-p- escanea los 65535 puertos TCP. Por defecto Nmap solo cubre top 1000."},
{d:1,q:"Para enumeración SMB autenticada con creds:",opts:["nslookup","crackmapexec smb target -u user -p pass","ping","traceroute"],c:1,e:"crackmapexec (cme) es navaja suiza para SMB/WinRM/SSH/MSSQL/LDAP. Soporta auth, comandos, dump, etc."},
{d:2,q:"Para enumerar directorios web con wordlist:",opts:["nmap","ffuf -u http://target/FUZZ -w wordlist","sqlmap","Wireshark"],c:1,e:"ffuf es rápido, soporta filters por status, size, words. Alternativas: gobuster, feroxbuster."},
{d:2,q:"Webshell PHP minimalista para RCE vía GET:",opts:["echo 'hi'","<?php system($_GET[\"c\"]); ?>","SELECT *","print('hello')"],c:1,e:"Subes con .php upload o vía LFI+log poisoning. Llamas con ?c=id."},
{d:3,q:"En Linux para encontrar binarios SUID:",opts:["find / -perm -4000 2>/dev/null","ls -la /bin","whoami","id"],c:0,e:"-perm -4000 busca SUID bit. Cruzar con GTFOBins para ver si alguno permite escalar."},
{d:3,q:"En Windows, privilegio que permite SeImpersonate→SYSTEM:",opts:["SeBackupPrivilege","SeImpersonatePrivilege con potato exploits (JuicyPotato, PrintSpoofer)","SeShutdownPrivilege","SeAuditPrivilege"],c:1,e:"SeImpersonate (típico en cuentas de servicio IIS, MSSQL) explotable con potato variants."},
{d:4,q:"AS-REP roasting solo funciona si:",opts:["El usuario es admin","La cuenta tiene 'Do not require Kerberos preauthentication' habilitado","Hay sin firewall","DC está apagado"],c:1,e:"Sin preauth, el DC envía AS-REP cifrado con hash del usuario sin pedir nada. Crackeas offline (hashcat 18200)."},
{d:4,q:"Golden Ticket requiere:",opts:["Hash NTLM de un user","Hash krbtgt del dominio","RDP","WinRM"],c:1,e:"Golden Ticket falsifica TGT firmado con hash de la cuenta krbtgt. Acceso completo, persistencia."},
{d:5,q:"Para pivotar tráfico TCP a través de un host SSH comprometido:",opts:["ssh -D 1080 user@host (dynamic) + proxychains","ping -t","nmap","Wireshark"],c:0,e:"ssh -D abre SOCKS proxy local. proxychains envía tools a través de él. Alternativa moderna: ligolo-ng, chisel."}
],
flashcards: [
{d:1,q:"¿Cuál es el mantra OSCP?",a:"Try Harder. Y enumeration is the key. Si no encuentras vector, enumera más a fondo: más puertos, más servicios, más wordlists, más recon."},
{d:1,q:"¿Para qué sirve crackmapexec (cme/nxc)?",a:"Multi-protocol swiss army knife: SMB/WinRM/SSH/MSSQL/LDAP/RDP. Auth, ejecución de comandos, dump, spray, LSA secrets, password policy."},
{d:2,q:"¿Qué es LFI y cómo se puede escalar a RCE?",a:"Local File Inclusion permite leer archivos del servidor. Escala a RCE con log poisoning (inyectar PHP en User-Agent y cargar /var/log/apache2/access.log) o PHP wrappers (php://input, data://)."},
{d:3,q:"¿Qué hace linpeas?",a:"Script bash que automatiza enumeración para privesc Linux: SUID, sudo, capabilities, kernel, cron, paths, creds en archivos, etc. Resultado coloreado por riesgo."},
{d:3,q:"¿Qué es DLL hijacking en Windows privesc?",a:"Una app carga una DLL sin ruta absoluta y la búsqueda recae en directorios writeables. Pones tu DLL maliciosa con el mismo nombre antes en PATH."},
{d:4,q:"¿Diferencia entre Pass-the-Hash y Pass-the-Ticket?",a:"PtH: usas el hash NTLM del user para autenticarte (NTLM auth no requiere password en claro). PtT: robas un ticket Kerberos (TGT/TGS) ya emitido y lo reutilizas."},
{d:4,q:"¿Qué es BloodHound y qué muestra?",a:"Herramienta gráfica que mapea relaciones AD: usuarios, grupos, ACLs, sesiones. Encuentra rutas de ataque al Domain Admin con queries Cypher."},
{d:5,q:"¿Cómo pivotar con SSH dynamic forwarding?",a:"ssh -D 1080 user@pivot abre proxy SOCKS5 local en 1080. Configura proxychains.conf con socks5 127.0.0.1 1080 y usa proxychains nmap target."}
]
};

// === eJPT ===
CERT_DATA.ejpt = {
theory: [
{id:"d1",title:"Domain 1 — Assessment Methodologies",html:`
<h2>eJPT — eLearnSecurity Junior Penetration Tester</h2>
<div class="lead">Examen 100% práctico. Lab con acceso 48h. ~35 preguntas multi-choice basadas en lo que encuentres. Buena puerta de entrada antes de OSCP.</div>
<h3>Information gathering</h3>
<p>Pasivo (whois, OSINT) → Activo (nmap, banner grabbing) → enum específico por servicio.</p>
<h3>Footprinting & scanning</h3>
<p>Discovery: ping sweep (-sn), arp-scan, netdiscover. Port scan: -sS, -sV, -sC, -p-.</p>
<h3>Vulnerability assessment</h3>
<p>Nessus, OpenVAS. Manual: revisar versiones, exploit-db, searchsploit.</p>
`},
{id:"d2",title:"Domain 2 — Host & Network Auditing",html:`
<h2>Host & Network Auditing</h2>
<h3>Enumeración Windows</h3>
<p>SMB shares (smbclient -L), null sessions (rpcclient -U "" target), enum4linux-ng.</p>
<h3>Enumeración Linux</h3>
<p>SSH banners, NFS shares (showmount -e), rpcinfo.</p>
<h3>Cracking</h3>
<p>Hashcat (-m mode), John (auto-detect), wordlists (rockyou.txt).</p>
`},
{id:"d3",title:"Domain 3 — Network Pentest",html:`
<h2>Network Penetration Testing</h2>
<h3>Metasploit básico</h3>
<p><code>msfconsole</code>. <code>search</code>, <code>use</code>, <code>show options</code>, <code>set</code>, <code>run/exploit</code>. Payloads: meterpreter (reverse_tcp, reverse_https). Post modules.</p>
<h3>Routing y pivoting</h3>
<p><code>route add</code> en meterpreter, <code>autoroute</code>, <code>portfwd</code>. SSH tunneling.</p>
<h3>Common exploits eJPT</h3>
<p>EternalBlue (MS17-010), SMB null sessions, weak passwords (Hydra), SQLi en web apps.</p>
`},
{id:"d4",title:"Domain 4 — Web App Pentest",html:`
<h2>Web App Pentest</h2>
<h3>Burp Suite básico</h3>
<p>Proxy → Intercept → Repeater → Intruder (sniper, cluster bomb).</p>
<h3>OWASP Top 10 esenciales para eJPT</h3>
<p>SQLi (sqlmap), XSS, IDOR, broken auth, file upload.</p>
<h3>Wordpress / CMS</h3>
<p>WPScan: <code>wpscan --url target --enumerate u,vp</code>.</p>
`}
],
questions: [
{d:1,q:"Comando Nmap para descubrir hosts vivos en /24:",opts:["nmap -sn 10.0.0.0/24","nmap -sS","nmap -p-","nmap -sV"],c:0,e:"-sn (no port scan) hace ping sweep. Alternativa: arp-scan -l, netdiscover."},
{d:2,q:"Para enumerar shares SMB sin credenciales (null session):",opts:["smbclient -N -L //target","ssh user@target","ftp target","ping"],c:0,e:"-N login sin password (null session). En sistemas viejos puede listar shares."},
{d:3,q:"Exploit famoso de SMB MS17-010:",opts:["EternalBlue","Heartbleed","Shellshock","Spectre"],c:0,e:"EternalBlue afecta SMBv1 en Windows sin parchear. Devastador en redes internas legacy."},
{d:3,q:"En Metasploit, ver opciones del módulo:",opts:["show","show options","help","info"],c:1,e:"show options muestra LHOST, RHOSTS, LPORT, etc. set para configurar."},
{d:4,q:"Burp Suite tab para reenviar y modificar requests:",opts:["Proxy","Repeater","Intruder","Decoder"],c:1,e:"Repeater: enviar y modificar requests individuales. Intruder: fuzz/brute. Proxy: interceptar."},
{d:4,q:"Para enumerar usuarios y plugins WordPress:",opts:["nikto","wpscan --url X --enumerate u,vp","sqlmap","hydra"],c:1,e:"WPScan especializado en WP: usuarios, themes, plugins, vulnerabilidades."}
],
flashcards: [
{d:1,q:"¿Diferencia entre footprinting pasivo y activo?",a:"Pasivo: sin tocar el target (whois, Shodan, Google). Activo: interactuar (nmap, banner grabbing) — deja huella."},
{d:2,q:"¿Qué es una null session SMB?",a:"Conexión SMB sin credenciales. En Windows antiguos permitía enumerar usuarios, grupos, shares. Modernos lo bloquean por defecto."},
{d:3,q:"¿Qué es un meterpreter session?",a:"Payload avanzado de Metasploit. Comandos: sysinfo, getuid, ps, migrate, hashdump, screenshot, keyscan, portfwd, route."},
{d:3,q:"¿Cómo se busca un exploit local con searchsploit?",a:"searchsploit <keyword>. Ej: searchsploit smb 4.7. Da rutas a exploits en /usr/share/exploitdb/."},
{d:4,q:"¿Cómo se hace un brute force HTTP con Hydra?",a:"hydra -l user -P wordlist target http-post-form '/login:user=^USER^&pass=^PASS^:F=incorrect'."}
]
};

// === CEH v13 ===
CERT_DATA.ceh = {
theory: [
{id:"d1",title:"Domain 1 — Foundations & Recon",html:`
<h2>CEH v13 — Certified Ethical Hacker</h2>
<div class="lead">EC-Council. 20 módulos cubiertos. 125 preguntas, 4h. Reconocida por DoD 8570/8140. Ahora con AI integrada (CEH AI).</div>
<h3>Hacker types</h3>
<p>White hat (ético), black hat (criminal), gray hat (zona gris), script kiddie, hacktivist, state-sponsored, suicide hacker.</p>
<h3>Phases of an attack</h3>
<div class="flow">
<span class="step">1. Reconnaissance</span><span class="arr">→</span>
<span class="step">2. Scanning</span><span class="arr">→</span>
<span class="step">3. Gaining Access</span><span class="arr">→</span>
<span class="step">4. Maintaining Access</span><span class="arr">→</span>
<span class="step">5. Clearing Tracks</span>
</div>
<h3>Footprinting</h3>
<p>Whois, DNS (nslookup, dig), Google hacking dorks, Shodan, SpiderFoot, Maltego, OSINT framework.</p>
`},
{id:"d2",title:"Domain 2 — Scanning & Enumeration",html:`
<h2>Scanning & Enumeration</h2>
<h3>Nmap scan types</h3>
<p>-sS (SYN), -sT (Connect), -sU (UDP), -sX (XMAS), -sN (Null), -sF (FIN), -sA (ACK).</p>
<h3>OS fingerprinting</h3>
<p>Active (-O en Nmap) vs passive (p0f).</p>
<h3>Enumeration por servicio</h3>
<p>SNMP (snmpwalk), SMB/NetBIOS, LDAP, NTP, SMTP, DNS zone transfer (dig axfr).</p>
`},
{id:"d3",title:"Domain 3 — System Hacking & Malware",html:`
<h2>System Hacking & Malware</h2>
<h3>Cracking</h3>
<p>Online: Hydra, Medusa. Offline: Hashcat, John. Rainbow tables (legacy si no hay salt).</p>
<h3>Privilege escalation</h3>
<p>Vertical (user→admin) vs horizontal (user A → user B).</p>
<h3>Steganography</h3>
<p>Stegano: ocultar info en imagen/audio. Tools: OpenStego, Steghide.</p>
<h3>Malware</h3>
<p>Virus, worm, trojan, ransomware, RAT, fileless, rootkit, keylogger, logic bomb. APT.</p>
<h3>Sniffing</h3>
<p>Wireshark, tcpdump. ARP poisoning con Ettercap. MAC flooding.</p>
`},
{id:"d4",title:"Domain 4 — Web, Wireless, Mobile, Cloud, IoT",html:`
<h2>Specialized Hacking</h2>
<h3>Web</h3>
<p>OWASP Top 10. SQLi, XSS, CSRF, IDOR, SSRF, file upload, deserialization. Burp, sqlmap, OWASP ZAP.</p>
<h3>Wireless</h3>
<p>WEP/WPA/WPA2/WPA3. Aircrack-ng suite. Evil twin, deauth, KRACK, PMKID attack.</p>
<h3>Mobile</h3>
<p>Android: APK reverse (jadx, apktool), MobSF. iOS: jailbreak limitations. OWASP Mobile Top 10.</p>
<h3>Cloud</h3>
<p>Misconfigurations (S3 público), IAM permisivo, SSRF a IMDS, container escapes.</p>
<h3>IoT / OT</h3>
<p>Default creds, firmware analysis (binwalk), shodan IoT hunting, Modbus/DNP3 (industrial).</p>
<h3>Cryptography</h3>
<p>Symmetric (AES), asymmetric (RSA, ECC), hashing, PKI, attacks (birthday, brute force).</p>
`}
],
questions: [
{d:1,q:"Phase de ataque tras gaining access:",opts:["Recon","Scanning","Maintaining access","Clearing tracks"],c:2,e:"Orden CEH: Recon → Scanning → Gaining → Maintaining → Clearing tracks."},
{d:1,q:"Hacker que actúa por causa política:",opts:["Script kiddie","Hacktivist","State-sponsored","White hat"],c:1,e:"Hacktivist: motivación ideológica. Anonymous típico ejemplo."},
{d:2,q:"DNS zone transfer test con dig:",opts:["dig target","dig axfr @ns target","nslookup","ping"],c:1,e:"AXFR pide transferencia completa de la zona. Si misconfigurado, revela todos los records."},
{d:2,q:"XMAS scan en Nmap:",opts:["-sS","-sT","-sX","-sN"],c:2,e:"-sX prende FIN, PSH, URG. -sN no flags. Ambos esperan RST si puerto cerrado en sistemas BSD/Linux."},
{d:3,q:"Tipo de cracking que NO necesita conexión al servicio:",opts:["Online (Hydra)","Offline (Hashcat con hash robado)","Brute force web","Default password"],c:1,e:"Offline: tienes el hash; pruebas a tu velocidad sin alertar."},
{d:3,q:"PMKID attack contra WPA2 permite:",opts:["Crear AP","Capturar handshake sin esperar a un cliente conectarse","Cifrar","DoS"],c:1,e:"PMKID está en el primer paquete EAPOL. Capturable instantáneamente con hcxdumptool. hashcat -m 22000."},
{d:4,q:"Endpoint AWS metadata:",opts:["10.0.0.1","127.0.0.1","169.254.169.254","8.8.8.8"],c:2,e:"169.254.169.254 IMDS. SSRF puede leer credenciales temporales si IMDSv1."},
{d:4,q:"Algoritmo asimétrico común para firmas digitales:",opts:["AES","RSA","SHA","DES"],c:1,e:"RSA y ECDSA son los más usados para firmas. AES es simétrico. SHA es hash."}
],
flashcards: [
{d:1,q:"¿Qué es Google hacking / Google dorks?",a:"Usar operadores de búsqueda avanzados de Google (site:, inurl:, filetype:, intitle:) para encontrar info expuesta sin querer."},
{d:2,q:"¿Diferencia entre fingerprinting activo y pasivo?",a:"Activo: envías paquetes y analizas respuestas (Nmap -O). Pasivo: solo escuchas tráfico que pasa (p0f) — sin huella."},
{d:3,q:"¿Qué es ARP poisoning y para qué se usa?",a:"Enviar respuestas ARP no solicitadas para asociar tu MAC con la IP del gateway. Permite MITM en LAN."},
{d:4,q:"¿Qué es OWASP Mobile Top 10?",a:"Lista de los 10 riesgos más críticos en apps móviles: weak server-side controls, insecure data storage, insecure communication, insecure authentication, etc."}
]
};

// === OSEP ===
CERT_DATA.osep = {
theory: [
{id:"d1",title:"Domain 1 — AV/EDR Evasion",html:`
<h2>OSEP — OffSec Experienced Penetration Tester</h2>
<div class="lead">Continuación natural de OSCP. Foco en bypass de defensas modernas y AD avanzado. Examen 48h.</div>
<h3>AV evasion básica</h3>
<p>Custom shellcode (msfvenom + encoders limitado). Donut shellcode generation. Indirect syscalls.</p>
<h3>EDR evasion</h3>
<p>Direct syscalls (Hell's Gate, Halo's Gate). API unhooking. Patch ETW (Event Tracing for Windows). AMSI bypass (PowerShell).</p>
<h3>Process injection</h3>
<p>VirtualAllocEx + WriteProcessMemory + CreateRemoteThread. Process hollowing. APC injection. Thread hijacking.</p>
<h3>Living off the land (LOLBins)</h3>
<p>certutil, regsvr32, mshta, rundll32, wmic. lolbas-project.github.io.</p>
`},
{id:"d2",title:"Domain 2 — Initial Access & Phishing",html:`
<h2>Initial Access</h2>
<h3>Phishing payloads</h3>
<p>HTA, LNK, ISO/IMG (bypass MOTW), HTML smuggling, container files (ZIP-in-ISO).</p>
<h3>Office macros</h3>
<p>VBA macros. Bypass Mark-of-the-Web. AMSI bypass para PowerShell embebido.</p>
<h3>Browser exploits</h3>
<p>NTLM relay vía coercion (PetitPotam, PrinterBug, ShadowCoerce).</p>
`},
{id:"d3",title:"Domain 3 — Active Directory Attacks",html:`
<h2>Active Directory Attacks (Advanced)</h2>
<h3>Enumeration con OPSEC</h3>
<p>BloodHound con stealth options. SOAPHound. Avoid noisy LDAP queries.</p>
<h3>Coercion</h3>
<p>PetitPotam (MS-EFSR), PrinterBug (MS-RPRN), DFSCoerce. Combinar con NTLM relay a ADCS para ESC8.</p>
<h3>Active Directory Certificate Services (ADCS)</h3>
<p>ESC1-ESC11 vulnerabilidades. Certipy enum y exploit. ESC1: vulnerable template + SAN abusable.</p>
<h3>Trust attacks</h3>
<p>Inter-forest trusts. SID History. ExtraSids attack.</p>
<h3>Constrained / Resource-Based Constrained Delegation</h3>
<p>S4U2Self + S4U2Proxy. RBCD: si controlas msDS-AllowedToActOnBehalfOfOtherIdentity.</p>
`},
{id:"d4",title:"Domain 4 — Lateral Movement & Persistence",html:`
<h2>Lateral Movement & Persistence</h2>
<h3>Lateral movement OPSEC</h3>
<p>WMI sin PsExec, DCOM (MMC20.Application), WinRM, SMB con SCM, SSH. Avoid LSASS dump si EDR mira.</p>
<h3>Persistence</h3>
<p>Scheduled tasks, services, registry Run keys, WMI event subscriptions, COM hijacking, DLL sideloading, Golden/Silver tickets.</p>
<h3>C2 frameworks</h3>
<p>Cobalt Strike, Sliver, Mythic, Havoc, Metasploit. Beacons sleep + jitter. Malleable C2 profiles.</p>
`}
],
questions: [
{d:1,q:"Direct syscalls evaden EDRs porque:",opts:["Cifran","Saltan los hooks de userland en ntdll.dll","Son más rápidos","Usan UDP"],c:1,e:"EDRs hookean APIs en userland (ntdll.dll). Direct syscalls van directo al kernel saltándolos."},
{d:1,q:"AMSI bypass en PowerShell sirve para:",opts:["Evadir el escaneo de scripts antes de ejecutar","Acelerar PowerShell","Cifrar la sesión","Bypass GPO"],c:0,e:"AMSI (Antimalware Scan Interface) escanea contenido antes de ejecutar. Bypass común: parchear AmsiScanBuffer en memoria."},
{d:2,q:"HTML smuggling consiste en:",opts:["Cifrar HTTP","Construir el archivo malicioso en JavaScript en el navegador para evadir filtros perimetrales","Sniffer HTTP","NAT bypass"],c:1,e:"El payload se ensambla cliente-side desde Base64 en JS. Bypassea proxies que solo ven HTML inocente."},
{d:3,q:"PetitPotam abusa de:",opts:["LDAP","MS-EFSR para coaccionar autenticación NTLM del DC","DNS","RDP"],c:1,e:"PetitPotam fuerza al DC a autenticarse via NTLM al atacante. Combinado con relay a ADCS HTTP es DC takeover."},
{d:3,q:"ESC1 en ADCS:",opts:["Template permite ENROLLEE_SUPPLIES_SUBJECT y autenticación cliente","RDP","Bug en LDAP","Bug Kerberos"],c:0,e:"ESC1: template con autenticación cliente + SAN suministrable por el solicitante = pides cert para Domain Admin."},
{d:4,q:"Persistence stealth via WMI:",opts:["Scheduled task","WMI Event Subscription","Run key","CRON"],c:1,e:"WMI Event Subscriptions ejecutan código en respuesta a eventos. Persistente y menos visible que tareas/services."}
],
flashcards: [
{d:1,q:"¿Qué es Hell's Gate?",a:"Técnica para resolver dinámicamente los Syscall Service Numbers (SSN) leyendo ntdll.dll en memoria, sin importar APIs hookeadas. Permite direct syscalls."},
{d:2,q:"¿Qué es MOTW y cómo se bypassea?",a:"Mark-of-the-Web: flag NTFS en archivos de internet que activa Protected View en Office. Bypass: ISO/IMG (no propagan MOTW al contenido), 7z con flag, container abuse."},
{d:3,q:"¿Qué hace Certipy contra ADCS?",a:"Certipy enumera y explota vulnerabilidades ADCS (ESC1-ESC11). Solicita certs, usa S4U2Self, dumps NTDS via ESC9/ESC10."},
{d:4,q:"¿Qué es un malleable C2 profile en Cobalt Strike?",a:"Archivo que define cómo el beacon habla con el C2: User-Agent, headers, URIs, sleep, jitter, JA3. Permite imitar tráfico legítimo."}
]
};

// === OSWE ===
CERT_DATA.oswe = {
theory: [
{id:"d1",title:"Domain 1 — White-Box Web Audit Methodology",html:`
<h2>OSWE — OffSec Web Expert</h2>
<div class="lead">Specialización web app pentest con código fuente. 48h examen, encontrar bugs auth bypass + RCE en apps reales.</div>
<h3>White-box approach</h3>
<p>Código fuente disponible. Foco en lógica de la aplicación, no en escáneres automáticos.</p>
<h3>Methodology</h3>
<div class="flow">
<span class="step">Map la app</span><span class="arr">→</span>
<span class="step">Identify entry points</span><span class="arr">→</span>
<span class="step">Trace data flow</span><span class="arr">→</span>
<span class="step">Identify sinks peligrosos</span><span class="arr">→</span>
<span class="step">PoC</span>
</div>
<h3>Lenguajes cubiertos</h3>
<p>PHP, Python (Django/Flask), Node.js (JavaScript/TypeScript), Java, .NET, Ruby on Rails.</p>
`},
{id:"d2",title:"Domain 2 — Authentication Bypass",html:`
<h2>Authentication Bypass</h2>
<h3>Common bugs</h3>
<ul>
<li><b>Type juggling</b> (PHP): == vs ===, "0e123" == "0e456".</li>
<li><b>SQL injection en login</b>: clásico ' OR 1=1.</li>
<li><b>Password reset flaws</b>: token predictable, account takeover via email change.</li>
<li><b>JWT vulnerabilities</b>: alg=none, weak secret, kid injection.</li>
<li><b>OAuth misconfigurations</b>: redirect_uri abuse, state CSRF.</li>
<li><b>Race conditions</b>: TOCTOU en checks de unique.</li>
</ul>
`},
{id:"d3",title:"Domain 3 — RCE Vectors",html:`
<h2>RCE in Web Applications</h2>
<h3>Code injection</h3>
<p>eval(), system(), exec(), passthru(), backticks. Template engines (SSTI: Jinja2, Twig, Smarty, Velocity).</p>
<h3>Deserialization</h3>
<p>PHP unserialize() (gadget chains, PHPGGC), Python pickle, Java (ysoserial), .NET (ysoserial.net), Node.js (node-serialize).</p>
<h3>File upload</h3>
<p>Bypass extension filters, MIME, magic bytes. Nginx alias misconfig, .htaccess upload, .phtml/.php5/.phar.</p>
<h3>SQLi to RCE</h3>
<p>MSSQL xp_cmdshell, MySQL INTO OUTFILE, PostgreSQL COPY ... PROGRAM, Oracle DBMS_SCHEDULER.</p>
<h3>SSRF to RCE</h3>
<p>Internal services (Redis, Elasticsearch sin auth), gopher://, IMDS cloud.</p>
`},
{id:"d4",title:"Domain 4 — Source Code Audit Patterns",html:`
<h2>Source Code Audit Patterns</h2>
<h3>Patrones a buscar</h3>
<ul>
<li>User input → sink directo sin sanitización.</li>
<li>Custom auth/session lógica.</li>
<li>Cryptographic primitives mal usados (ECB, IV reutilizado, Math.random()).</li>
<li>Hardcoded secrets, API keys, credenciales.</li>
<li>Unsafe deserialization.</li>
<li>Command construction con concatenación.</li>
<li>Path construction sin canonicalization.</li>
</ul>
<h3>Tools</h3>
<p>VS Code + grep + ripgrep. Semgrep para reglas estáticas custom. Burp para test runtime.</p>
`}
],
questions: [
{d:1,q:"OSWE focus principal:",opts:["Pentest red de Windows","Web app pentest con análisis de código fuente","Mobile","Cloud"],c:1,e:"OSWE = OffSec Web Expert. White-box con source code review."},
{d:2,q:"PHP type juggling: '0e1' == '0e2' devuelve:",opts:["false","true (ambos se interpretan como 0×10^1 = 0)","error","null"],c:1,e:"PHP loose comparison interpreta '0eXXX' como notación científica = 0. Bypass auth si comparas hashes con ==."},
{d:2,q:"JWT vuln 'alg=none':",opts:["Token caducado","Servidor acepta JWT sin firma cuando alg=none","Cifrado débil","Brute force"],c:1,e:"Implementaciones que aceptan alg:none verifican la firma como válida sin comprobarla. Generas tu JWT como admin."},
{d:3,q:"SSTI en Jinja2 ejecuta:",opts:["{{7*7}} → 49 = vulnerable","SQL","DNS","Brute force"],c:0,e:"Si {{7*7}} renderiza 49, hay SSTI. Escala a RCE con {{config.__class__...}} o {{request.application...}}."},
{d:3,q:"PHP unserialize() con clase Vulnerable y __destruct() peligroso:",opts:["Innocuo","RCE potencial via gadget chain","Solo XSS","SQL injection"],c:1,e:"Magic methods (__wakeup, __destruct, __toString) ejecutan al deserializar. Cadenas de gadgets logran RCE. PHPGGC genera payloads."},
{d:4,q:"En auditoría de código, prioridad MÁS alta de revisión:",opts:["Comentarios","Logging","User input → sink (DB, OS, eval)","Variables globales"],c:2,e:"Sigue el flujo de datos: input no confiable → operación peligrosa = bug potencial."}
],
flashcards: [
{d:2,q:"¿Qué es type juggling en PHP?",a:"PHP convierte tipos automáticamente con ==. '1abc'==1 es true, '0e1'=='0e2' es true. Usar siempre === (strict)."},
{d:3,q:"¿Qué es SSTI?",a:"Server-Side Template Injection. Inyectar sintaxis del template engine (Jinja2, Twig, Velocity) que se evalúa server-side. Lleva a RCE."},
{d:3,q:"¿Qué hace PHPGGC?",a:"Generador de payloads para PHP unserialize. Tiene cadenas de gadgets pre-construidas para frameworks comunes (Laravel, Symfony, etc.)."},
{d:4,q:"¿Qué patrones buscar en source code review?",a:"Sinks peligrosos (eval, system, deserialize, query con concatenación), input no validado, crypto custom, secrets hardcoded, lógica de auth custom."}
]
};

// === CRTO ===
CERT_DATA.crto = {
theory: [
{id:"d1",title:"Domain 1 — Red Team Concepts",html:`
<h2>CRTO — Certified Red Team Operator</h2>
<div class="lead">Zero-Point Security. Foco en ops red team realistas con Cobalt Strike. 48h examen práctico.</div>
<h3>Red team vs pentest</h3>
<p>Pentest: amplio, find bugs. Red team: dirigido, simular adversario específico, alcance completo, OPSEC, sigilo.</p>
<h3>Attack lifecycle</h3>
<div class="flow">
<span class="step">Recon</span><span class="arr">→</span>
<span class="step">Initial Access</span><span class="arr">→</span>
<span class="step">Foothold</span><span class="arr">→</span>
<span class="step">Privesc</span><span class="arr">→</span>
<span class="step">Lateral</span><span class="arr">→</span>
<span class="step">Persistence</span><span class="arr">→</span>
<span class="step">Action on Objectives</span>
</div>
<h3>OPSEC</h3>
<p>Minimal footprint, evitar IoCs ruidosos, malleable C2, sleep + jitter, encrypted comms, infrastructure separation.</p>
`},
{id:"d2",title:"Domain 2 — Cobalt Strike Operations",html:`
<h2>Cobalt Strike Operations</h2>
<h3>Componentes</h3>
<p>Team Server (servidor), client (operador), Beacon (implant). Listeners (HTTP, HTTPS, DNS, SMB pipe, TCP).</p>
<h3>Beacons</h3>
<p>Sleep + jitter para asincronía. Comandos: shell, run, powershell-import, mimikatz, hashdump, screenshot, keylog, portscan, jump, link, unlink.</p>
<h3>Malleable C2</h3>
<p>Profile customiza tráfico HTTP/S del beacon: User-Agent, URIs, headers, response. Imita Amazon, Office365, Github.</p>
<h3>Infrastructure</h3>
<p>Redirectors (Apache mod_rewrite, nginx, Cloudfront), domain fronting (legacy), C2 separados por fase.</p>
`},
{id:"d3",title:"Domain 3 — AD Attacks via Cobalt Strike",html:`
<h2>AD Attacks</h2>
<h3>Recon AD</h3>
<p>BloodHound vía cypheroth, beacon execute. SharpHound execute-assembly. PowerView via powerpick.</p>
<h3>Cred theft OPSEC</h3>
<p>Avoid mimikatz directo. Usar BOFs (Beacon Object Files) como nanodump (en lugar de procdump). LSASS dump silent.</p>
<h3>Lateral movement</h3>
<p>jump psexec/winrm/wmi/dcom. Pass-the-Hash con Beacon make_token. Pass-the-Ticket con kerberos_ticket_use.</p>
<h3>Privilege escalation AD</h3>
<p>Kerberoast, AS-REP roast, ESC1-ESC11 ADCS, Resource-Based Constrained Delegation, Shadow Credentials (msDS-KeyCredentialLink).</p>
`},
{id:"d4",title:"Domain 4 — Evasion & Persistence",html:`
<h2>Evasion & Persistence</h2>
<h3>EDR evasion</h3>
<p>Custom artifact kit, custom resource kit (PSExec service). UDRL para custom reflective loader. ETW patching, AMSI bypass.</p>
<h3>BOFs (Beacon Object Files)</h3>
<p>Pequeños binarios C compilados que se cargan en memoria del Beacon. Sustituyen tools fork&run con menos huella.</p>
<h3>Persistence</h3>
<p>Scheduled tasks, services, WMI subscriptions, COM hijacking, Skeleton Key, Golden Ticket, Silver Ticket, DSRM password.</p>
`}
],
questions: [
{d:1,q:"Diferencia clave red team vs pentest:",opts:["Red team usa solo herramientas comerciales","Red team simula un adversario específico con OPSEC y sigilo","Pentest no genera reporte","Son lo mismo"],c:1,e:"Red team: dirigido, sigilo, simular APT específico, valor estratégico. Pentest: amplio find bugs."},
{d:2,q:"En Cobalt Strike, comando para ejecutar BOF:",opts:["execute-assembly","inline-execute (con BOF cargado)","powershell","shell"],c:1,e:"BOFs se cargan inline en memoria del beacon, sin spawn de proceso (mucho más sigiloso que execute-assembly)."},
{d:2,q:"Sleep y jitter en CS sirven para:",opts:["Velocidad","Hacer comunicaciones del beacon menos detectables y predecibles","Cifrar mejor","Aumentar throughput"],c:1,e:"Sleep largo + jitter aleatorio rompe patrones de beaconing. SOCs detectan beacons por regularidad temporal."},
{d:3,q:"Para credenciales sin tocar mimikatz/procdump:",opts:["Reiniciar","BOFs como nanodump que dumpean LSASS de forma silent","Antivirus","Wireshark"],c:1,e:"nanodump usa MiniDumpWriteDump indirecto y operaciones poco vigiladas. Bypass de muchos EDRs."},
{d:4,q:"Skeleton Key permite:",opts:["Borrar cuentas","Patchear LSASS para que cualquier usuario se autentique con un master password adicional","DDoS","Cifrar disco"],c:1,e:"Skeleton Key (mimikatz) inyecta un master password en LSASS. Cualquier user autentica con su pass o el master. Persistencia."}
],
flashcards: [
{d:1,q:"¿Qué es OPSEC en red team?",a:"Operations Security. Minimizar artefactos detectables: malleable C2, sleep+jitter, evitar tools ruidosas, infraestructura separada, no reutilizar IoCs."},
{d:2,q:"¿Qué hace un redirector en infraestructura C2?",a:"Servidor intermedio (Apache/nginx/Cloudfront) entre el target y el team server. Hide el C2 real, soporta domain fronting, fácil de quemar y rotar."},
{d:3,q:"¿Qué son las Shadow Credentials?",a:"Ataque que escribe en msDS-KeyCredentialLink de un user objetivo (si tienes write). Permite obtener un cert para él vía PKINIT y autenticarte como él."},
{d:4,q:"¿Qué es un BOF?",a:"Beacon Object File. Pequeño binario C compilado para Cobalt Strike que se ejecuta en proceso del beacon (sin fork). Mucho menos detectable que tools fork&run."}
]
};
