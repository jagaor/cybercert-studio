// Expanded BTL1 (Blue Team Level 1) content — overrides the entry in cert_blue.js
window.CERT_DATA = window.CERT_DATA || {};
CERT_DATA.btl1 = {
theory: [
{id:"d0",title:"Introducción a BTL1",html:`
<h2>Blue Team Level 1 (BTL1) — Security Blue Team</h2>
<div class="lead">Certificación 100% práctica orientada a analistas SOC junior. Sin múltiple choice: el examen son 24 horas con acceso a un laboratorio real donde investigas un incidente y respondes 20 preguntas basadas en lo que descubras. Pasaje: 70% (14/20).</div>

<h3>¿Qué hace única a BTL1?</h3>
<div class="callout info"><span class="ico">ⓘ</span><div>La mayoría de certs son teóricas — memorizas y respondes. BTL1 es <b>hands-on completo</b>: te dan un escenario, accedes a herramientas reales (Wireshark, Splunk, Volatility, sandbox de phishing) e investigas como un analista SOC en un día real.</div></div>

<h3>Estructura del curso</h3>
<table>
<tr><th>Módulo</th><th>Horas aprox</th><th>Foco</th></tr>
<tr><td>Security Fundamentals</td><td>~10h</td><td>CIA, defense in depth, AAA, tipos de ataques.</td></tr>
<tr><td>Phishing Analysis</td><td>~15h</td><td>Análisis de cabeceras, URLs, adjuntos, sandboxing.</td></tr>
<tr><td>Threat Intelligence</td><td>~15h</td><td>OSINT, pyramid of pain, MITRE ATT&CK, IoCs, YARA.</td></tr>
<tr><td>Digital Forensics</td><td>~20h</td><td>Windows artifacts, Linux, memoria con Volatility, FTK Imager.</td></tr>
<tr><td>SIEM</td><td>~15h</td><td>Splunk SPL, dashboards, correlación, alertas.</td></tr>
<tr><td>Incident Response</td><td>~20h</td><td>PICERL, MITRE ATT&CK, ransomware, web attacks, lateral movement.</td></tr>
</table>

<h3>Recursos del examen</h3>
<p>Acceso 24h. Reset del lab disponible. Notas permitidas. Sin proctoring obstructivo. Reporte de incidente NO requerido (a diferencia de OSCP). Resultados al instante al enviar.</p>

<h3>Skills medidos</h3>
<ul>
<li>Identificar phishing y extraer IoCs</li>
<li>Buscar IoCs en threat intel</li>
<li>Analizar tráfico de red en Wireshark</li>
<li>Hacer queries SPL en Splunk</li>
<li>Adquirir y analizar memoria con Volatility</li>
<li>Identificar persistencia, escalada, lateral movement</li>
<li>Mapear actividades a tácticas MITRE ATT&CK</li>
</ul>

<div class="callout analogy"><span class="ico">◐</span><div><b>Analogía:</b> imagina un detective de policía científica recién contratado. No memoriza códigos penales — investiga una escena del crimen con lupa, polvo dactilográfico y muestras. BTL1 es eso para analistas SOC.</div></div>
`},

{id:"d1",title:"Módulo 1 — Security Fundamentals",html:`
<h2>Módulo 1 — Security Fundamentals</h2>
<div class="lead">Base conceptual. Aunque parece básica, BTL1 te pide aplicar estos conceptos en el examen al clasificar incidentes y proponer mitigaciones.</div>

<h3>1.1 Triada CIA</h3>
<div class="minicards">
<div class="minicard"><div class="h">Confidentiality</div><p>Sólo autorizados ven los datos. <b>Cómo:</b> cifrado (AES, TLS), control de acceso (ACLs, MFA), clasificación de datos, DLP.</p></div>
<div class="minicard"><div class="h">Integrity</div><p>Datos no alterados sin permiso. <b>Cómo:</b> hashing (SHA-256), firmas digitales, FIM, control de versiones, journaling.</p></div>
<div class="minicard"><div class="h">Availability</div><p>Sistemas accesibles cuando se necesitan. <b>Cómo:</b> redundancia, clustering, backups, anti-DDoS, capacity planning, geo-redundancia.</p></div>
</div>
<div class="callout warn"><span class="ico">⚠</span><div>Los tres elementos a veces se contradicen. Cifrar mucho (C) puede romper la disponibilidad (A) si la clave se pierde. Replicar agresivamente (A) puede romper la integridad (I) si hay inconsistencias.</div></div>

<h3>1.2 Modelo AAA</h3>
<table>
<tr><th>Elemento</th><th>Pregunta</th><th>Mecanismo</th><th>Ejemplo</th></tr>
<tr><td>Authentication</td><td>¿Quién eres?</td><td>Password, MFA, certificado, biometría</td><td>Login en VPN con MFA</td></tr>
<tr><td>Authorization</td><td>¿Qué puedes hacer?</td><td>RBAC, ACLs, ABAC</td><td>Permiso de leer share \\\\fileserver\\HR</td></tr>
<tr><td>Accounting (auditing)</td><td>¿Qué hiciste?</td><td>Logs, audit trail, SIEM</td><td>Event ID 4624 + 4663 (file access)</td></tr>
</table>

<h3>1.3 Defense in Depth (defensa en profundidad)</h3>
<p>Estrategia de poner capas múltiples. Si una falla, otra protege. <b>Origen militar:</b> castillos con foso, muralla, torres, guarniciones, reducto.</p>
<div class="flow">
<span class="step">Físico</span><span class="arr">→</span>
<span class="step">Perímetro red</span><span class="arr">→</span>
<span class="step">Red interna</span><span class="arr">→</span>
<span class="step">Endpoint</span><span class="arr">→</span>
<span class="step">Aplicación</span><span class="arr">→</span>
<span class="step">Datos</span>
</div>
<div class="kvs">
<span class="k">Físico</span><span class="v">Vallas, CCTV, mantraps, guardias, biometría en data center.</span>
<span class="k">Perímetro red</span><span class="v">Firewall, IPS, web proxy, email gateway, anti-DDoS.</span>
<span class="k">Red interna</span><span class="v">Segmentación VLAN, microsegmentación, NAC, 802.1X, monitoring.</span>
<span class="k">Endpoint</span><span class="v">EDR, host firewall, AV, allow listing, DLP de endpoint.</span>
<span class="k">Aplicación</span><span class="v">WAF, validación input, SAST/DAST, parches, hardening.</span>
<span class="k">Datos</span><span class="v">Cifrado en reposo y en tránsito, masking, tokenización, DRM, classification.</span>
<span class="k">Identidad</span><span class="v">MFA, PAM, SSO con políticas Conditional Access, just-in-time.</span>
</div>

<h3>1.4 Modelos de control de acceso</h3>
<div class="compare">
<div><h5>MAC (Mandatory)</h5><p>El sistema asigna etiquetas (Top Secret, Secret, Confidential). El usuario NO puede cambiar permisos. Usado en gobierno, militar. Ejemplo: SELinux, AppArmor.</p></div>
<div><h5>DAC (Discretionary)</h5><p>El dueño del recurso decide quién accede. Permisos NTFS clásicos, chmod en Linux. Más flexible pero propenso a errores humanos.</p></div>
</div>
<div class="compare">
<div><h5>RBAC (Role-Based)</h5><p>Permisos asignados a roles, roles asignados a usuarios. Ej: rol "Contable" tiene acceso a /finanzas. Active Directory groups.</p></div>
<div><h5>ABAC (Attribute-Based)</h5><p>Decisiones basadas en atributos (departamento, hora, geo, dispositivo, riesgo). Dinámico. Zero Trust lo usa intensivamente.</p></div>
</div>

<h3>1.5 Tipos de ataques que BTL1 espera que reconozcas</h3>
<table>
<tr><th>Ataque</th><th>Descripción rápida</th><th>Indicador típico</th></tr>
<tr><td>Phishing</td><td>Email con anzuelo (link/adjunto)</td><td>Click de URL sospechosa en proxy logs</td></tr>
<tr><td>Spear phishing</td><td>Phishing dirigido</td><td>Email personalizado al CEO/CFO</td></tr>
<tr><td>Brute force</td><td>Probar muchas contraseñas</td><td>Múltiples 4625 desde una IP</td></tr>
<tr><td>Password spray</td><td>Pocas pass × muchos users</td><td>Múltiples 4625 a varias cuentas, pocas tentativas por cuenta</td></tr>
<tr><td>SQL injection</td><td>Inyectar SQL en input</td><td>WAF logs con patrones (' OR '1'='1)</td></tr>
<tr><td>XSS</td><td>JavaScript inyectado</td><td>HTTP logs con <script>, payload base64</td></tr>
<tr><td>DDoS</td><td>Saturar servicio</td><td>Tráfico volumétrico, CDN/Cloudflare alerts</td></tr>
<tr><td>MITM / on-path</td><td>Interceptar comunicación</td><td>ARP spoofing, certs sospechosos</td></tr>
<tr><td>Ransomware</td><td>Cifrar archivos, pedir rescate</td><td>Cambios masivos de extensión, nota de rescate, .locked</td></tr>
<tr><td>Cryptominer</td><td>Minar cripto con CPU víctima</td><td>CPU 100% sostenido sin causa, conexión a pools</td></tr>
<tr><td>Lateral movement</td><td>Saltar entre hosts internos</td><td>Authentication anómala (4624 type 3), RDP/SMB raro</td></tr>
<tr><td>Data exfiltration</td><td>Robar datos</td><td>Outbound DNS/HTTPS volumétrico inusual</td></tr>
</table>

<h3>1.6 Cyber Kill Chain (Lockheed Martin)</h3>
<div class="flow">
<span class="step">1. Recon</span><span class="arr">→</span>
<span class="step">2. Weaponization</span><span class="arr">→</span>
<span class="step">3. Delivery</span><span class="arr">→</span>
<span class="step">4. Exploitation</span><span class="arr">→</span>
<span class="step">5. Installation</span><span class="arr">→</span>
<span class="step">6. C2</span><span class="arr">→</span>
<span class="step">7. Actions on Objectives</span>
</div>
<div class="kvs">
<span class="k">Recon</span><span class="v">Investigar la víctima (LinkedIn, Shodan, whois).</span>
<span class="k">Weaponization</span><span class="v">Crear el payload (e.g. .docm con macro maliciosa).</span>
<span class="k">Delivery</span><span class="v">Enviar (email, USB drop, watering hole).</span>
<span class="k">Exploitation</span><span class="v">Ejecutar el código en la víctima (macro corre, exploit dispara).</span>
<span class="k">Installation</span><span class="v">Persistencia: scheduled task, run key, service.</span>
<span class="k">Command & Control (C2)</span><span class="v">Implant llama a servidor del atacante.</span>
<span class="k">Actions on Objectives</span><span class="v">Lo que viniste a hacer: exfil, ransomware, sabotaje.</span>
</div>
<div class="callout exam"><span class="ico">★</span><div><b>BTL1 exige:</b> mapear lo que ves en logs a una fase de la Kill Chain. Si encuentras un .docm en email = Delivery. Si ves PowerShell child de WINWORD.EXE = Exploitation.</div></div>

<h3>1.7 MITRE ATT&CK Framework</h3>
<p>Matriz de tácticas (objetivos del atacante) y técnicas (cómo los logra). Estándar de facto para hunting y mapeo de detecciones.</p>
<h4>Tácticas principales (orden típico):</h4>
<table>
<tr><th>Táctica</th><th>Objetivo</th><th>Ejemplos de técnicas</th></tr>
<tr><td>Reconnaissance (TA0043)</td><td>Información previa</td><td>Active Scanning, OSINT (T1595, T1589)</td></tr>
<tr><td>Resource Development</td><td>Preparar herramientas</td><td>Adquirir infra, comprometer cuentas</td></tr>
<tr><td>Initial Access (TA0001)</td><td>Entrar</td><td>Phishing (T1566), Exploit Public-Facing App (T1190)</td></tr>
<tr><td>Execution (TA0002)</td><td>Ejecutar código</td><td>PowerShell (T1059.001), WMI, scheduled task</td></tr>
<tr><td>Persistence (TA0003)</td><td>Permanecer</td><td>Run keys (T1547.001), services, scheduled tasks</td></tr>
<tr><td>Privilege Escalation</td><td>Subir privilegios</td><td>Token impersonation, UAC bypass, sudo abuse</td></tr>
<tr><td>Defense Evasion</td><td>Evitar detección</td><td>Obfuscation, fileless, AMSI bypass, log clear</td></tr>
<tr><td>Credential Access</td><td>Robar creds</td><td>LSASS dump (T1003.001), Kerberoasting (T1558.003)</td></tr>
<tr><td>Discovery</td><td>Mapear entorno</td><td>net user, AdFind, SharpHound</td></tr>
<tr><td>Lateral Movement</td><td>Saltar hosts</td><td>PsExec, RDP, WMI, WinRM</td></tr>
<tr><td>Collection</td><td>Reunir datos</td><td>Screenshots, keylogger, archive files</td></tr>
<tr><td>Command and Control</td><td>Comunicar fuera</td><td>HTTPS, DNS tunneling, domain fronting</td></tr>
<tr><td>Exfiltration</td><td>Sacar datos</td><td>Over C2, alt protocols, web services</td></tr>
<tr><td>Impact</td><td>Daño final</td><td>Ransomware (T1486), defacement, data destruction</td></tr>
</table>

<h3>1.8 SOC (Security Operations Center)</h3>
<p>Centro 24/7 que monitoriza, detecta y responde a incidentes.</p>
<h4>Tiers</h4>
<div class="kvs">
<span class="k">Tier 1 (analyst)</span><span class="v">Triaje de alertas. Identifica falsos positivos. Escala lo real. Foco en velocidad.</span>
<span class="k">Tier 2 (analyst senior)</span><span class="v">Investiga incidentes confirmados. Hace hunting básico. Coordina respuesta inicial.</span>
<span class="k">Tier 3 (engineer/threat hunter)</span><span class="v">Reverse engineering, threat hunting, IR avanzado, mejora detecciones.</span>
<span class="k">SOC Manager</span><span class="v">Gestiona el equipo, comms con stakeholders, métricas.</span>
</div>
<h4>Métricas clave</h4>
<div class="kvs">
<span class="k">MTTD</span><span class="v">Mean Time To Detect: cuánto tarda el SOC en darse cuenta del incidente.</span>
<span class="k">MTTR</span><span class="v">Mean Time To Respond/Resolve: cuánto tarda en contener y resolver.</span>
<span class="k">Dwell time</span><span class="v">Tiempo total que el atacante estuvo sin ser detectado.</span>
<span class="k">False positive rate</span><span class="v">% de alertas que no son amenazas reales.</span>
</div>
`},

{id:"d2",title:"Módulo 2 — Phishing Analysis",html:`
<h2>Módulo 2 — Phishing Analysis</h2>
<div class="lead">El módulo más práctico para analista SOC. Analizar emails es el caso de uso más frecuente en un SOC real (>40% de las alertas en muchas empresas son phishing reports de usuarios).</div>

<h3>2.1 Anatomía de un correo electrónico</h3>
<h4>Headers — se leen de abajo arriba</h4>
<p>Los servidores SMTP añaden un <code>Received:</code> en la parte superior cada vez que el mensaje pasa por ellos. Por tanto el <b>más antiguo está al final</b>.</p>

<h4>Headers críticos a inspeccionar:</h4>
<div class="kvs">
<span class="k">From</span><span class="v">Lo que ves en tu cliente. Trivialmente falsificable.</span>
<span class="k">Return-Path / Envelope-From</span><span class="v">El "MAIL FROM" SMTP real. Si difiere de From, sospechoso.</span>
<span class="k">Reply-To</span><span class="v">A dónde se manda la respuesta. Atacantes ponen una distinta para captar respuestas.</span>
<span class="k">Received</span><span class="v">Cadena de servidores. Verifica IPs vs el dominio supuesto.</span>
<span class="k">Authentication-Results</span><span class="v">Resultado SPF, DKIM, DMARC del receptor. Critical: spf=pass/fail.</span>
<span class="k">Message-ID</span><span class="v">ID único. Format inusual revela origen.</span>
<span class="k">X-Originating-IP</span><span class="v">IP del cliente que envió (no todos los servers lo añaden).</span>
<span class="k">User-Agent / X-Mailer</span><span class="v">Cliente usado para componer.</span>
</div>

<h3>2.2 SPF, DKIM, DMARC en detalle</h3>

<h4>SPF (Sender Policy Framework)</h4>
<p>Registro TXT en DNS que lista IPs autorizadas a enviar correo del dominio.</p>
<p><b>Ejemplo:</b> <code>v=spf1 ip4:203.0.113.0/24 include:_spf.google.com -all</code></p>
<div class="kvs">
<span class="k">v=spf1</span><span class="v">Versión.</span>
<span class="k">ip4:/ip6:</span><span class="v">IPs autorizadas.</span>
<span class="k">include:</span><span class="v">Importa otro registro SPF (p.ej. Google Workspace).</span>
<span class="k">a / mx</span><span class="v">Autoriza la IP del A record o MX del dominio.</span>
<span class="k">-all</span><span class="v">Fail (rechazar lo demás). Hard fail.</span>
<span class="k">~all</span><span class="v">Soft fail (aceptar pero marcar). Más laxo.</span>
<span class="k">?all</span><span class="v">Neutral (sin política).</span>
</div>

<h4>DKIM (DomainKeys Identified Mail)</h4>
<p>El servidor saliente firma cabeceras y body con clave privada. La pública se publica en DNS como TXT en <code>selector._domainkey.dominio.tld</code>. Receptor verifica.</p>
<p><b>Verificación:</b> en headers verás <code>DKIM-Signature: v=1; a=rsa-sha256; d=dominio.com; s=selector;</code>... seguido del hash firmado.</p>

<h4>DMARC</h4>
<p>Política sobre qué hacer cuando SPF/DKIM fallan o no alinean.</p>
<p><b>Ejemplo TXT en _dmarc.dominio.com:</b> <code>v=DMARC1; p=reject; rua=mailto:reports@dominio.com; pct=100; sp=reject; aspf=s; adkim=s;</code></p>
<div class="kvs">
<span class="k">p=none</span><span class="v">Solo reporta, no toma acción.</span>
<span class="k">p=quarantine</span><span class="v">Va a spam.</span>
<span class="k">p=reject</span><span class="v">Rechaza el correo.</span>
<span class="k">rua=</span><span class="v">Email destino de aggregate reports (XML diarios).</span>
<span class="k">ruf=</span><span class="v">Forensic reports (raros, sensibles).</span>
<span class="k">aspf / adkim</span><span class="v">s=strict, r=relaxed (alignment).</span>
</div>
<div class="callout exam"><span class="ico">★</span><div>En BTL1 te darán emails reales. Si <code>Authentication-Results</code> muestra <code>spf=fail dkim=fail dmarc=fail</code>, es claro indicador. Pero ojo: un email legítimo puede fallar SPF si se reenvía vía lista.</div></div>

<h3>2.3 Análisis de URLs</h3>
<h4>Defanging</h4>
<p>Cuando compartes IoCs (en email, Slack, ticket), nunca dejes URLs clickables. Convierte:</p>
<ul>
<li><code>http://malicioso.com</code> → <code>hxxp[://]malicioso[.]com</code></li>
<li><code>1.2.3.4</code> → <code>1[.]2[.]3[.]4</code></li>
</ul>

<h4>Herramientas de análisis</h4>
<div class="kvs">
<span class="k">URLscan.io</span><span class="v">Sandbox que abre la URL y captura screenshot, redirects, IoCs.</span>
<span class="k">VirusTotal</span><span class="v">Hashes contra 70+ AVs, detonación de URLs, pasive DNS.</span>
<span class="k">Any.Run</span><span class="v">Sandbox interactivo con timeline visual.</span>
<span class="k">PhishTank</span><span class="v">Base de datos colaborativa de phishing conocido.</span>
<span class="k">URLhaus (abuse.ch)</span><span class="v">URLs distribuyendo malware.</span>
<span class="k">CyberChef</span><span class="v">Navaja suiza: decodificar Base64, URLs, hex.</span>
</div>

<h4>Indicadores en URLs</h4>
<ul>
<li><b>Dominios lookalike:</b> microsft.com, paypa1.com, googIe.com (i mayúscula)</li>
<li><b>IDN homograph:</b> caracteres cirílicos que parecen latinos (рaypal.com con р cirílica)</li>
<li><b>Subdominios engañosos:</b> microsoft.com.malicious.tld (Microsoft está en subdomain, no en TLD)</li>
<li><b>URL shorteners:</b> bit.ly, t.co — siempre expandir antes</li>
<li><b>IP en lugar de dominio:</b> <code>http://203.0.113.42/login</code> — siempre sospechoso</li>
<li><b>Codificación:</b> %2F, %3F, %40 para ocultar la URL real</li>
<li><b>HTTPS en sí no garantiza nada</b> — atacantes usan Let's Encrypt gratis</li>
</ul>

<h3>2.4 Análisis de adjuntos</h3>
<h4>Tipos peligrosos</h4>
<table>
<tr><th>Extensión</th><th>Riesgo</th><th>Por qué</th></tr>
<tr><td>.exe .scr .com .bat .cmd</td><td>Ejecutable directo</td><td>Bloquear en gateway</td></tr>
<tr><td>.docm .xlsm .pptm</td><td>Office con macros</td><td>VBA = código arbitrario</td></tr>
<tr><td>.doc .xls (Office 97-2003)</td><td>Legado con macros</td><td>Pueden tener VBA oculto</td></tr>
<tr><td>.iso .img .vhd</td><td>Container disk</td><td>Bypass de Mark-of-the-Web</td></tr>
<tr><td>.lnk</td><td>Shortcut Windows</td><td>Ejecuta cualquier comando</td></tr>
<tr><td>.hta</td><td>HTML Application</td><td>Corre como exe via mshta</td></tr>
<tr><td>.js .vbs .ps1</td><td>Scripts</td><td>Ejecución directa</td></tr>
<tr><td>.zip .rar .7z (cifrado)</td><td>Evita AV</td><td>Password en el body del email</td></tr>
<tr><td>.pdf</td><td>Variable</td><td>JavaScript embebido, links, exploits</td></tr>
<tr><td>.svg .html</td><td>HTML smuggling</td><td>Reconstruye binario en cliente</td></tr>
</table>

<h4>Análisis estático seguro</h4>
<div class="kvs">
<span class="k">file [archivo]</span><span class="v">Linux: identifica tipo real (magic bytes).</span>
<span class="k">exiftool</span><span class="v">Metadata de PDFs, imágenes, Office.</span>
<span class="k">oletools (oledump.py, olevba)</span><span class="v">Extraer y analizar macros de Office.</span>
<span class="k">pdfid / pdf-parser</span><span class="v">Analizar streams y objetos en PDFs.</span>
<span class="k">strings</span><span class="v">Extraer cadenas legibles del binario.</span>
<span class="k">PEStudio</span><span class="v">Analiza ejecutables Windows (PE) sin ejecutar.</span>
<span class="k">CyberChef</span><span class="v">Decodificar payloads ofuscados (Base64, hex, char codes).</span>
</div>

<h4>Análisis dinámico (sandboxing)</h4>
<p><b>NUNCA</b> abras un adjunto sospechoso en tu equipo o en una VM con red corporativa. Usa:</p>
<ul>
<li><b>Any.Run</b> — interactivo, ves cada acción del malware</li>
<li><b>Joe Sandbox</b> — análisis profundo, reportes detallados</li>
<li><b>Hybrid Analysis</b> — gratis y rápido</li>
<li><b>Cuckoo Sandbox</b> — open source, self-hosted</li>
<li><b>VMware/VirtualBox aislada</b> — solo si sabes lo que haces</li>
</ul>

<h3>2.5 Patrones de phishing comunes</h3>
<div class="minicards">
<div class="minicard"><div class="h">Credential harvester</div><p>Fake login (Microsoft, Google, banco). Pixel-perfect. Password va al atacante. Mira el dominio real.</p></div>
<div class="minicard"><div class="h">BEC (Business Email Compromise)</div><p>Suplantar al CEO o proveedor. Texto plano sin payload, solo pide transferencia urgente o cambio de cuenta bancaria.</p></div>
<div class="minicard"><div class="h">Macro phishing</div><p>Adjunto .docm pide habilitar contenido. Macro descarga payload (Emotet, Qakbot).</p></div>
<div class="minicard"><div class="h">HTML smuggling</div><p>Email/web con .html que reconstruye binario en cliente via JavaScript+Base64. Bypass de proxy.</p></div>
<div class="minicard"><div class="h">ISO/IMG bypass</div><p>Adjunto .iso contiene .lnk + DLL oculto. Bypass de Mark-of-the-Web cuando se monta.</p></div>
<div class="minicard"><div class="h">QR phishing (quishing)</div><p>QR code en imagen (no inspeccionable por gateways). Apunta a credential harvester en móvil.</p></div>
<div class="minicard"><div class="h">Conversation hijacking</div><p>Atacante comprometió un buzón legítimo. Responde en hilos reales con payload — alta confianza.</p></div>
<div class="minicard"><div class="h">Callback phishing</div><p>Email pide llamar a un número (factura falsa). En llamada, ingeniería social.</p></div>
</div>

<h3>2.6 Reporting de phishing</h3>
<h4>Estructura de informe</h4>
<ol>
<li><b>Resumen ejecutivo:</b> qué pasó, alcance, gravedad.</li>
<li><b>Email metadata:</b> from, subject, fecha, recipients afectados.</li>
<li><b>Análisis de headers:</b> SPF/DKIM/DMARC, IP origen, cadena Received.</li>
<li><b>URLs/dominios:</b> defanged, hashes, reputación (VT, URLscan).</li>
<li><b>Adjuntos:</b> hash MD5/SHA256, tipo, comportamiento observado.</li>
<li><b>IoCs:</b> dominios, IPs, hashes, emails, mutexes.</li>
<li><b>TTPs:</b> mapeo a MITRE ATT&CK (T1566.001 Spearphishing Attachment, etc.).</li>
<li><b>Acciones tomadas:</b> bloqueo en gateway, cuarentena, comms a usuarios afectados.</li>
<li><b>Recomendaciones:</b> mejoras DMARC, training, EDR rules.</li>
</ol>

<h4>Acciones de respuesta típicas</h4>
<div class="kvs">
<span class="k">Bloquear remitente</span><span class="v">En email gateway (Proofpoint, Mimecast, M365 Defender).</span>
<span class="k">Bloquear dominio/URL</span><span class="v">Web proxy + DNS sinkhole (Umbrella, Quad9).</span>
<span class="k">Bloquear hash</span><span class="v">EDR (CrowdStrike, SentinelOne, Defender).</span>
<span class="k">Notificar afectados</span><span class="v">Email con instrucciones, no clic en nada del original.</span>
<span class="k">Verificar exposición</span><span class="v">¿Quién hizo clic? ¿Quién entregó credenciales? Force password reset.</span>
<span class="k">Hunt retroactivo</span><span class="v">Buscar IoCs en SIEM en los últimos 30/60/90 días.</span>
<span class="k">Lecciones aprendidas</span><span class="v">Mejorar reglas, training, tabletop.</span>
</div>
`},

{id:"d3",title:"Módulo 3 — Threat Intelligence",html:`
<h2>Módulo 3 — Threat Intelligence</h2>
<div class="lead">Threat intel es información sobre amenazas que permite tomar mejores decisiones. BTL1 cubre fuentes, frameworks de análisis (Pyramid of Pain, Diamond Model, Kill Chain), y herramientas como YARA.</div>

<h3>3.1 Tipos de threat intelligence</h3>
<div class="kvs">
<span class="k">Strategic</span><span class="v">Alto nivel para C-suite. Tendencias del sector, riesgos geopolíticos, decisiones de inversión.</span>
<span class="k">Tactical</span><span class="v">TTPs de adversarios. Para SOC manager y threat hunters.</span>
<span class="k">Operational</span><span class="v">Detalles de campañas específicas: quién ataca, cómo, qué quiere.</span>
<span class="k">Technical</span><span class="v">IoCs concretos: IPs, hashes, dominios. Para tier 1/2 SOC y herramientas automatizadas.</span>
</div>

<h3>3.2 Pyramid of Pain (David Bianco, 2013)</h3>
<p>Modelo que clasifica IoCs según lo doloroso que es para el atacante cambiarlos.</p>
<table>
<tr><th>Nivel</th><th>Indicator</th><th>Dificultad para el atacante</th></tr>
<tr><td>↑ Top</td><td><b>TTPs</b></td><td>★★★★★ Doloroso (rediseñar herramientas, retraining)</td></tr>
<tr><td></td><td><b>Tools</b></td><td>★★★★ Difícil (rescribir malware)</td></tr>
<tr><td></td><td><b>Network/Host artifacts</b></td><td>★★★ Molesto (cambiar mutex, registry keys, User-Agent)</td></tr>
<tr><td></td><td><b>Domain names</b></td><td>★★ Fácil (registrar otro)</td></tr>
<tr><td></td><td><b>IP addresses</b></td><td>★ Trivial (cambiar VPS)</td></tr>
<tr><td>↓ Bottom</td><td><b>Hash values</b></td><td>Trivial (recompilar binario)</td></tr>
</table>
<div class="callout exam"><span class="ico">★</span><div><b>Mensaje clave:</b> bloquear hashes es útil pero efímero. Detectar TTPs (e.g. "PowerShell child de WINWORD.EXE") es duradero porque el atacante tendría que cambiar su metodología completa.</div></div>

<h3>3.3 Diamond Model of Intrusion Analysis</h3>
<p>Cuatro vértices conectados:</p>
<div class="minicards">
<div class="minicard"><div class="h">Adversary</div><p>Quién ataca (APT29, FIN7, individuo).</p></div>
<div class="minicard"><div class="h">Capability</div><p>Qué usa (malware, exploits, TTPs).</p></div>
<div class="minicard"><div class="h">Infrastructure</div><p>Desde dónde (C2 servers, VPS, dominios).</p></div>
<div class="minicard"><div class="h">Victim</div><p>Quién recibe (industria, geografía, individuo).</p></div>
</div>
<p>Pivotear entre vértices encuentra patrones: si tenemos hash de malware (Capability) podemos buscar otros victims, otros C2, atribuir a grupo.</p>

<h3>3.4 Cyber Kill Chain — uso defensivo</h3>
<p>Para cada fase, hay defensas posibles. Mata la cadena en cualquier eslabón = ataque fallido.</p>
<table>
<tr><th>Fase</th><th>Defensa</th></tr>
<tr><td>Recon</td><td>Reducir info pública, monitorear OSINT propia, decoy info</td></tr>
<tr><td>Weaponization</td><td>Difícil de prevenir (off-target)</td></tr>
<tr><td>Delivery</td><td>Email gateway, web proxy, USB control, awareness training</td></tr>
<tr><td>Exploitation</td><td>Patching, EDR, app allowlist, exploit mitigations (DEP, ASLR)</td></tr>
<tr><td>Installation</td><td>EDR behavioral detection, FIM, app allowlist</td></tr>
<tr><td>C2</td><td>Egress filtering, DNS sinkhole, proxy con cat, IDS</td></tr>
<tr><td>Actions on Objectives</td><td>DLP, segmentación, EDR, monitoring privileged accounts</td></tr>
</table>

<h3>3.5 Fuentes de Threat Intelligence</h3>
<h4>OSINT (gratis)</h4>
<div class="kvs">
<span class="k">Abuse.ch</span><span class="v">URLhaus (URLs maliciosas), MalwareBazaar (samples), Feodo Tracker (botnets), ThreatFox (IoCs).</span>
<span class="k">AlienVault OTX</span><span class="v">Plataforma colaborativa con "pulses" de campañas.</span>
<span class="k">VirusTotal</span><span class="v">Hashes, URLs, dominios. Versión gratuita limitada.</span>
<span class="k">MITRE ATT&CK</span><span class="v">attack.mitre.org — la biblia de TTPs.</span>
<span class="k">CISA Alerts</span><span class="v">us-cert.cisa.gov — alertas oficiales US gov.</span>
<span class="k">SANS Internet Storm Center</span><span class="v">isc.sans.edu — análisis diario.</span>
<span class="k">Krebs on Security</span><span class="v">Blog periodístico de Brian Krebs.</span>
<span class="k">Threat actor blogs</span><span class="v">Mandiant, CrowdStrike, Microsoft, ESET, Trend Micro.</span>
<span class="k">Shodan</span><span class="v">Buscador de dispositivos en internet — recon defensivo.</span>
</div>

<h4>Comercial</h4>
<p>Recorded Future, Mandiant Advantage, CrowdStrike Falcon X, Anomali, Flashpoint, Intel 471. Caro pero curado y de calidad.</p>

<h4>Sharing communities</h4>
<p>ISACs (Information Sharing and Analysis Centers) por sector: FS-ISAC (financiero), H-ISAC (salud), MS-ISAC (gobierno local).</p>

<h3>3.6 Formatos de intercambio: STIX y TAXII</h3>
<div class="kvs">
<span class="k">STIX (Structured Threat Information eXpression)</span><span class="v">Lenguaje JSON/XML para describir amenazas estructuradamente: indicators, malware, threat actors, campaigns, intrusion sets, TTPs.</span>
<span class="k">TAXII (Trusted Automated eXchange of Indicator Information)</span><span class="v">Protocolo HTTP/HTTPS sobre el que se transporta STIX. Pub/sub model.</span>
<span class="k">MISP</span><span class="v">Plataforma open-source para gestionar y compartir threat intel. Soporta STIX import/export.</span>
</div>

<h3>3.7 YARA — reglas para identificar malware</h3>
<p>Lenguaje que permite escribir reglas con strings y condiciones para detectar familias de malware.</p>
<p><b>Ejemplo:</b></p>
<pre><code>rule Suspicious_PowerShell_Empire {
  meta:
    description = "Detects Empire PS payload"
    author = "SOC"
    date = "2024-01-15"
  strings:
    $s1 = "System.Net.WebClient" ascii
    $s2 = "DownloadString" ascii
    $s3 = "FromBase64String" ascii
    $s4 = "IEX" ascii nocase
  condition:
    all of them
}</code></pre>
<div class="kvs">
<span class="k">strings:</span><span class="v">Patrones a buscar (ASCII, wide, hex, regex).</span>
<span class="k">condition:</span><span class="v">Lógica: all of them, any, count, filesize, etc.</span>
<span class="k">meta:</span><span class="v">Metadata informativa (no afecta el match).</span>
<span class="k">Modificadores</span><span class="v">nocase, wide (UTF-16), ascii, fullword, base64.</span>
</div>
<div class="kvs">
<span class="k">yara reglas.yar /muestras/</span><span class="v">Ejecutar reglas contra archivos.</span>
<span class="k">yara -r</span><span class="v">Recursivo.</span>
<span class="k">yara -p N</span><span class="v">N threads.</span>
<span class="k">yarac</span><span class="v">Compilar reglas para reuso rápido.</span>
</div>

<h3>3.8 OSINT práctico</h3>
<h4>Investigar un dominio</h4>
<ol>
<li><code>whois dominio.com</code> — registrante, fechas, NS.</li>
<li><code>dig dominio.com A / MX / TXT / NS</code> — DNS records.</li>
<li><b>crt.sh</b> — certificados emitidos (Certificate Transparency). Encuentra subdomains.</li>
<li><b>SecurityTrails / DNSdumpster</b> — historial DNS, subdomains.</li>
<li><b>URLscan.io</b> — historial de capturas de la URL.</li>
<li><b>Wayback Machine</b> — versiones históricas del sitio.</li>
<li><b>VirusTotal Passive DNS</b> — qué IPs ha resuelto.</li>
</ol>

<h4>Investigar una IP</h4>
<ol>
<li><b>AbuseIPDB</b> — reputación, reportes de abuso.</li>
<li><b>Shodan</b> — qué puertos/servicios expone.</li>
<li><b>Censys</b> — similar a Shodan, datasets distintos.</li>
<li><b>VirusTotal IP report</b> — pasive DNS, comunicaciones.</li>
<li><b>GreyNoise</b> — ¿es un scanner conocido o targeted?</li>
<li><code>nmap -sV -A</code> — confirmación activa (solo si autorizado).</li>
</ol>

<h4>Investigar un hash</h4>
<ol>
<li><b>VirusTotal</b> — detection rate, behavior, comments.</li>
<li><b>Hybrid Analysis</b> — sandbox report.</li>
<li><b>MalwareBazaar (abuse.ch)</b> — descarga sample si está disponible.</li>
<li><b>Joe Sandbox</b> — análisis profundo.</li>
<li><b>Intezer Analyze</b> — code reuse, atribución.</li>
</ol>

<h4>Investigar una persona/empresa</h4>
<p>Para casos de social engineering: LinkedIn, Twitter/X, Facebook, GitHub, Pastebin, breach databases (HaveIBeenPwned). <b>Importante:</b> sólo OSINT pasivo en investigación defensiva. No contactar.</p>
`},

{id:"d4",title:"Módulo 4 — Digital Forensics",html:`
<h2>Módulo 4 — Digital Forensics</h2>
<div class="lead">Recolectar, preservar y analizar evidencia digital de forma forensicamente sólida. BTL1 enfoca artefactos Windows comunes y análisis de memoria con Volatility.</div>

<h3>4.1 Principios forenses</h3>
<div class="kvs">
<span class="k">Integridad</span><span class="v">La evidencia no se altera. Hashing antes/después, write blockers.</span>
<span class="k">Chain of custody</span><span class="v">Registro inmutable de quién maneja la evidencia, cuándo, dónde.</span>
<span class="k">Repetibilidad</span><span class="v">Cualquier otro forense con las mismas herramientas debe llegar al mismo resultado.</span>
<span class="k">Documentación</span><span class="v">Cada paso, cada comando, cada hallazgo se registra.</span>
<span class="k">Order of volatility</span><span class="v">Captura primero lo más volátil.</span>
</div>

<h3>4.2 Order of Volatility (RFC 3227)</h3>
<div class="flow">
<span class="step">1. Registers, cache CPU</span><span class="arr">→</span>
<span class="step">2. Routing table, ARP, processes, kernel modules, memoria</span><span class="arr">→</span>
<span class="step">3. Temp files</span><span class="arr">→</span>
<span class="step">4. Disco</span><span class="arr">→</span>
<span class="step">5. Logs remotos</span><span class="arr">→</span>
<span class="step">6. Backups / archive</span>
</div>
<div class="callout warn"><span class="ico">⚠</span><div>Si apagas un servidor comprometido antes de capturar RAM, pierdes credenciales en memoria, procesos en ejecución, conexiones C2 activas, malware fileless. Apagar es destructivo.</div></div>

<h3>4.3 Adquisición de evidencia</h3>
<h4>Disco</h4>
<div class="kvs">
<span class="k">dd / dcfldd</span><span class="v">Linux. dd if=/dev/sda of=image.dd bs=4M conv=noerror,sync. dcfldd añade hashing al vuelo.</span>
<span class="k">FTK Imager</span><span class="v">GUI gratuita de AccessData. Estándar de la industria. Crea E01 (Expert Witness Format).</span>
<span class="k">Guymager</span><span class="v">Linux GUI, multi-thread, soporta E01, AFF, dd.</span>
<span class="k">Write blocker</span><span class="v">Hardware (Tableau, Wiebetech) o software para prevenir cualquier escritura al medio.</span>
</div>
<p><b>Formatos:</b></p>
<div class="kvs">
<span class="k">DD / RAW</span><span class="v">Imagen bit-a-bit. Tamaño = disco. No comprimido.</span>
<span class="k">E01 (EnCase)</span><span class="v">Comprimido, con metadata, hashing integrado, splittable. Estándar legal.</span>
<span class="k">AFF / AFF4</span><span class="v">Open standard, similar a E01.</span>
</div>

<h4>Memoria RAM</h4>
<div class="kvs">
<span class="k">FTK Imager (Windows)</span><span class="v">"Capture Memory" — fácil para incident response.</span>
<span class="k">DumpIt</span><span class="v">Tool Comae, simple .exe, dump completo a archivo.</span>
<span class="k">Magnet RAM Capture</span><span class="v">Gratuita de Magnet Forensics.</span>
<span class="k">WinPmem</span><span class="v">Open source de Volexity.</span>
<span class="k">LiME (Linux)</span><span class="v">Loadable Kernel Module para dump de RAM en Linux.</span>
<span class="k">AVML</span><span class="v">Linux memory acquisition de Microsoft.</span>
</div>

<h3>4.4 Artefactos Windows clave</h3>
<h4>Registry hives</h4>
<div class="kvs">
<span class="k">SAM</span><span class="v">C:\\Windows\\System32\\config\\SAM. Hashes locales de usuarios.</span>
<span class="k">SECURITY</span><span class="v">Policies, secrets LSA.</span>
<span class="k">SYSTEM</span><span class="v">Servicios, drivers, USB devices, network adapters.</span>
<span class="k">SOFTWARE</span><span class="v">Software instalado, configuración.</span>
<span class="k">NTUSER.DAT</span><span class="v">Por usuario: HKEY_CURRENT_USER. Recently used files, run history.</span>
<span class="k">UsrClass.dat</span><span class="v">Shellbags (carpetas abiertas).</span>
</div>

<h4>Run keys (persistencia común)</h4>
<ul>
<li><code>HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run</code></li>
<li><code>HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\RunOnce</code></li>
<li><code>HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run</code></li>
<li><code>HKLM\\Software\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon\\Userinit / Shell</code></li>
</ul>

<h4>Artefactos de ejecución</h4>
<div class="kvs">
<span class="k">Prefetch</span><span class="v">C:\\Windows\\Prefetch\\*.pf. Cada exe ejecutado crea un .pf con timestamps de primera y última ejecución, conteo, archivos cargados.</span>
<span class="k">ShimCache (AppCompatCache)</span><span class="v">HKLM\\System\\CurrentControlSet\\Control\\Session Manager\\AppCompatCache. Lista de ejecutables (timestamp, no siempre prueba de ejecución).</span>
<span class="k">AmCache</span><span class="v">C:\\Windows\\AppCompat\\Programs\\Amcache.hve. Software instalado, ejecutado, con hashes SHA1.</span>
<span class="k">UserAssist</span><span class="v">HKCU. Programas ejecutados desde Explorer (rot13 cifrado).</span>
<span class="k">RecentDocs / OpenSavePidlMRU</span><span class="v">Archivos recientes.</span>
<span class="k">JumpLists</span><span class="v">%AppData%\\Microsoft\\Windows\\Recent\\AutomaticDestinations. Archivos abiertos por app.</span>
<span class="k">LNK files</span><span class="v">Shortcuts crean LNK con ruta original, timestamps.</span>
<span class="k">SRUM</span><span class="v">System Resource Usage Monitor. Uso de red/CPU/disco por aplicación por hora.</span>
</div>

<h4>Event Logs (.evtx)</h4>
<p>Ubicación: <code>C:\\Windows\\System32\\winevt\\Logs\\</code></p>
<table>
<tr><th>Event ID</th><th>Log</th><th>Descripción</th></tr>
<tr><td>4624</td><td>Security</td><td>Logon exitoso</td></tr>
<tr><td>4625</td><td>Security</td><td>Logon fallido</td></tr>
<tr><td>4634/4647</td><td>Security</td><td>Logoff</td></tr>
<tr><td>4648</td><td>Security</td><td>Logon usando credenciales explícitas (runas)</td></tr>
<tr><td>4672</td><td>Security</td><td>Privileges especiales asignados al logon</td></tr>
<tr><td>4688</td><td>Security</td><td>Process creation (CommandLine si está habilitado)</td></tr>
<tr><td>4689</td><td>Security</td><td>Process termination</td></tr>
<tr><td>4697</td><td>Security</td><td>Servicio instalado</td></tr>
<tr><td>4698</td><td>Security</td><td>Scheduled task creado</td></tr>
<tr><td>4720</td><td>Security</td><td>Cuenta de usuario creada</td></tr>
<tr><td>4732/4756</td><td>Security</td><td>Member added a grupo local/global</td></tr>
<tr><td>5140/5145</td><td>Security</td><td>Network share access</td></tr>
<tr><td>4663</td><td>Security</td><td>Object access (audit habilitado)</td></tr>
<tr><td>4104</td><td>PowerShell/Operational</td><td>PowerShell script block logging</td></tr>
<tr><td>4103</td><td>PowerShell/Operational</td><td>Module logging</td></tr>
<tr><td>7045</td><td>System</td><td>Servicio instalado</td></tr>
<tr><td>1</td><td>Sysmon</td><td>Process creation con hash, parent, cmdline</td></tr>
<tr><td>3</td><td>Sysmon</td><td>Network connection</td></tr>
<tr><td>7</td><td>Sysmon</td><td>Image loaded (DLL)</td></tr>
<tr><td>11</td><td>Sysmon</td><td>File created</td></tr>
<tr><td>22</td><td>Sysmon</td><td>DNS query</td></tr>
</table>

<h4>Logon types (4624)</h4>
<table>
<tr><th>Type</th><th>Descripción</th></tr>
<tr><td>2</td><td>Interactive (teclado físico)</td></tr>
<tr><td>3</td><td>Network (SMB, IIS, etc.) — pivot común</td></tr>
<tr><td>4</td><td>Batch (scheduled tasks)</td></tr>
<tr><td>5</td><td>Service</td></tr>
<tr><td>7</td><td>Unlock</td></tr>
<tr><td>8</td><td>NetworkCleartext (no se debe ver)</td></tr>
<tr><td>9</td><td>NewCredentials (runas /netonly)</td></tr>
<tr><td>10</td><td>RemoteInteractive (RDP)</td></tr>
<tr><td>11</td><td>CachedInteractive (cached creds, offline)</td></tr>
</table>

<h4>Otros</h4>
<div class="kvs">
<span class="k">$MFT</span><span class="v">Master File Table de NTFS. Una entry por archivo, con timestamps SI ($STANDARD_INFORMATION) y FN ($FILE_NAME) — comparar puede detectar timestomping.</span>
<span class="k">$LogFile / $UsnJrnl</span><span class="v">Cambios recientes al filesystem.</span>
<span class="k">$Recycle.Bin</span><span class="v">Archivos eliminados.</span>
<span class="k">Volume Shadow Copies</span><span class="v">Snapshots automáticos del sistema (Previous Versions). Ricos en artefactos históricos.</span>
<span class="k">Browser artifacts</span><span class="v">Chrome: %LocalAppData%\\Google\\Chrome\\User Data\\Default\\ (History, Cookies, Downloads — SQLite). Firefox: places.sqlite.</span>
<span class="k">Hosts file</span><span class="v">C:\\Windows\\System32\\drivers\\etc\\hosts. Modificado por malware para hijack DNS.</span>
</div>

<h3>4.5 Memory Forensics con Volatility</h3>
<p>Framework de Python para análisis de dumps de RAM. <b>Volatility 3</b> (Python 3) es el actual; Volatility 2 sigue común.</p>

<h4>Identificar el perfil (Volatility 2)</h4>
<pre><code>vol.py -f memory.dmp imageinfo</code></pre>
<p>En Volatility 3 no se necesita — autodetecta. Pero requiere symbol files (ISFs).</p>

<h4>Plugins esenciales</h4>
<div class="kvs">
<span class="k">pslist / pstree</span><span class="v">Procesos siguiendo la lista del kernel. pstree muestra jerarquía padre-hijo.</span>
<span class="k">psscan</span><span class="v">Escanea memoria buscando estructuras EPROCESS. Encuentra procesos ocultos por rootkits.</span>
<span class="k">cmdline</span><span class="v">Argumentos de línea de comando de cada proceso.</span>
<span class="k">dlllist</span><span class="v">DLLs cargadas por proceso. DLLs sospechosas en %Temp% o paths raros.</span>
<span class="k">handles</span><span class="v">Handles abiertos por proceso (archivos, registry keys, mutexes).</span>
<span class="k">netscan / netstat</span><span class="v">Conexiones de red abiertas y sus procesos.</span>
<span class="k">malfind</span><span class="v">Detecta regiones de memoria sospechosas (PAGE_EXECUTE_READWRITE sin módulo asociado — signo de inyección).</span>
<span class="k">hollowfind</span><span class="v">Detecta process hollowing.</span>
<span class="k">svcscan</span><span class="v">Servicios Windows.</span>
<span class="k">filescan</span><span class="v">Archivos en memoria. Útil para extraer artefactos.</span>
<span class="k">dumpfiles</span><span class="v">Volcar un archivo específico desde memoria.</span>
<span class="k">procdump / procexedump</span><span class="v">Volcar proceso ejecutable.</span>
<span class="k">memdump</span><span class="v">Volcar memoria entera del proceso (para strings o YARA).</span>
<span class="k">hashdump / lsadump</span><span class="v">Extraer hashes y secretos LSA.</span>
<span class="k">mimikatz</span><span class="v">Plugin community para credenciales en claro de LSASS.</span>
<span class="k">timeliner</span><span class="v">Crear timeline de eventos.</span>
<span class="k">yarascan</span><span class="v">Aplicar reglas YARA sobre la memoria.</span>
</div>

<h4>Flujo de investigación típico</h4>
<ol>
<li><code>pslist / pstree</code> — vista general. Buscar parent-child raros (PowerShell hijo de Word, cmd hijo de outlook).</li>
<li><code>cmdline</code> — examinar argumentos de procesos sospechosos.</li>
<li><code>netscan</code> — conexiones outbound, IPs raras.</li>
<li><code>malfind</code> — buscar inyección.</li>
<li><code>dlllist [PID]</code> — DLLs del proceso sospechoso.</li>
<li><code>memdump -p [PID] -D out/</code> — volcar memoria.</li>
<li><code>strings out/*.dmp</code> — buscar URLs, IPs, comandos.</li>
<li><code>procdump -p [PID]</code> — ejecutable para análisis estático posterior.</li>
</ol>

<h3>4.6 Linux forensics</h3>
<h4>Artefactos clave</h4>
<div class="kvs">
<span class="k">/var/log/auth.log o /var/log/secure</span><span class="v">Logins, sudo, ssh.</span>
<span class="k">/var/log/syslog o /var/log/messages</span><span class="v">Eventos del sistema.</span>
<span class="k">~/.bash_history</span><span class="v">Comandos del usuario.</span>
<span class="k">/etc/passwd, /etc/shadow</span><span class="v">Cuentas y hashes.</span>
<span class="k">/etc/crontab, /etc/cron.*</span><span class="v">Tareas programadas.</span>
<span class="k">/etc/systemd/system, /etc/init.d</span><span class="v">Servicios — persistencia común.</span>
<span class="k">/tmp, /var/tmp, /dev/shm</span><span class="v">Localizaciones favoritas de malware.</span>
<span class="k">~/.ssh/authorized_keys</span><span class="v">Backdoors via SSH key adicional.</span>
<span class="k">last, lastlog, w, who</span><span class="v">Login history.</span>
</div>

<h4>Comandos forenses</h4>
<pre><code># Procesos
ps auxf
top
lsof -p [PID]
lsof -i  # conexiones de red

# Conexiones
netstat -tnp  # o ss -tnp
iptables -L -n -v

# Archivos modificados últimas 24h
find / -mtime -1 -type f 2>/dev/null

# SUID binaries (privesc check)
find / -perm -4000 2>/dev/null

# Hashes
sha256sum sospechoso.bin
md5sum sospechoso.bin

# Strings
strings -a binario.bin | less</code></pre>
`},

{id:"d5",title:"Módulo 5 — SIEM (Splunk)",html:`
<h2>Módulo 5 — SIEM con Splunk</h2>
<div class="lead">SIEM agrega y correlaciona logs. Splunk es el más popular y BTL1 te examina con SPL (Search Processing Language). Aprende los comandos de búsqueda.</div>

<h3>5.1 Conceptos SIEM</h3>
<div class="kvs">
<span class="k">Log aggregation</span><span class="v">Recolectar logs de muchas fuentes en un solo lugar.</span>
<span class="k">Parsing / normalization</span><span class="v">Convertir formatos distintos a un schema común (CIM en Splunk).</span>
<span class="k">Correlation</span><span class="v">Combinar eventos de fuentes distintas para detectar patrones.</span>
<span class="k">Alerting</span><span class="v">Disparar notificación cuando se cumple una regla.</span>
<span class="k">Dashboards</span><span class="v">Visualización para monitoreo continuo.</span>
<span class="k">Retention</span><span class="v">Cuánto tiempo se guardan los logs (legal, forense, coste).</span>
<span class="k">Tier de SIEM</span><span class="v">Splunk, Microsoft Sentinel, IBM QRadar, Elastic Security, Wazuh, Chronicle, Sumo Logic.</span>
</div>

<h3>5.2 Estructura Splunk</h3>
<div class="kvs">
<span class="k">Forwarder</span><span class="v">Agente que envía logs a indexer (Universal o Heavy).</span>
<span class="k">Indexer</span><span class="v">Almacena y indexa los datos.</span>
<span class="k">Search head</span><span class="v">Interfaz donde escribes queries SPL.</span>
<span class="k">Index</span><span class="v">"Tabla" lógica. Por defecto: main. Custom: wineventlog, firewall, etc.</span>
<span class="k">Source</span><span class="v">Archivo o fuente original (e.g. WinEventLog:Security).</span>
<span class="k">Sourcetype</span><span class="v">Schema/parsing aplicado (e.g. XmlWinEventLog).</span>
<span class="k">Host</span><span class="v">Equipo origen.</span>
</div>

<h3>5.3 SPL — Comandos básicos</h3>
<p>Estructura: <code>busqueda inicial | comando | comando | ...</code></p>

<h4>Filtrado</h4>
<pre><code>index=wineventlog EventCode=4625
index=wineventlog sourcetype=WinEventLog:Security EventCode=4625 user!=*$
index=firewall src_ip=10.0.0.5 dest_port=443</code></pre>

<h4>Operadores</h4>
<div class="kvs">
<span class="k">AND OR NOT</span><span class="v">Lógicos (AND es implícito).</span>
<span class="k">=, !=</span><span class="v">Igual / no igual.</span>
<span class="k">&lt;, &gt;, &lt;=, &gt;=</span><span class="v">Comparación.</span>
<span class="k">IN(a, b, c)</span><span class="v">Pertenencia.</span>
<span class="k">*</span><span class="v">Wildcard.</span>
</div>

<h4>Stats / aggregation</h4>
<pre><code>... | stats count by user
... | stats count, dc(src_ip) as unique_ips by user
... | stats sum(bytes) as total_bytes by dest_ip | sort -total_bytes
... | top 10 user
... | rare src_ip</code></pre>

<h4>Time</h4>
<pre><code>... earliest=-24h latest=now
... | bin _time span=1h | stats count by _time
... | timechart count by src_ip</code></pre>

<h4>Tablas y formato</h4>
<pre><code>... | table _time, user, src_ip, action
... | fields _time user src_ip
... | rename src_ip as source, dest_ip as destination
... | eval risk_score = count * 10
... | sort -count
... | head 20</code></pre>

<h4>Lookup y join</h4>
<pre><code>... | lookup threat_iocs.csv ip OUTPUT threat_type
... | join user [search index=hr | fields user, department]</code></pre>

<h4>Transactions</h4>
<pre><code>index=web | transaction src_ip maxspan=10m | where eventcount > 100</code></pre>

<h3>5.4 Casos de uso comunes</h3>

<h4>Detección de brute force</h4>
<pre><code>index=wineventlog EventCode=4625
| stats count by user, src_ip
| where count > 10
| sort -count</code></pre>

<h4>Brute force exitoso (4625 seguido de 4624)</h4>
<pre><code>index=wineventlog (EventCode=4625 OR EventCode=4624)
| transaction user maxspan=5m
| where eventcount > 5 AND match(EventCode, "4624")</code></pre>

<h4>Logon types raros</h4>
<pre><code>index=wineventlog EventCode=4624 Logon_Type=10
| stats count by user, src_ip
| sort -count</code></pre>

<h4>Detección PowerShell sospechoso</h4>
<pre><code>index=wineventlog EventCode=4104
| search ScriptBlockText="*DownloadString*" OR ScriptBlockText="*IEX*" OR ScriptBlockText="*FromBase64String*"
| table _time, Host, User, ScriptBlockText</code></pre>

<h4>Outbound a IP en threat intel</h4>
<pre><code>index=firewall action=allowed dest_ip!=10.0.0.0/8
| lookup malicious_ips.csv ip as dest_ip OUTPUT category
| where isnotnull(category)
| stats count by src_ip, dest_ip, category</code></pre>

<h4>Lateral movement (4624 type 3 desde host inusual)</h4>
<pre><code>index=wineventlog EventCode=4624 Logon_Type=3
| stats values(src_ip) as sources, count by user
| where mvcount(sources) > 5</code></pre>

<h3>5.5 Dashboards</h3>
<p>Splunk permite construir dashboards XML o vía Dashboard Studio (más moderno). Componentes:</p>
<ul>
<li><b>Single value</b> — contador grande.</li>
<li><b>Chart</b> — bar, line, pie.</li>
<li><b>Table</b> — datos tabulares.</li>
<li><b>Map</b> — geo.</li>
<li><b>Filter inputs</b> — dropdowns, time pickers.</li>
</ul>

<h3>5.6 Alerts</h3>
<p>Splunk alerts: ejecutas una búsqueda en schedule, si devuelve resultados (o cumple umbral), dispara acción.</p>
<h4>Acciones típicas</h4>
<ul>
<li>Email a SOC distribution list</li>
<li>Webhook a ticketing (Jira, ServiceNow)</li>
<li>Webhook a Slack/Teams</li>
<li>Script personalizado (auto-quarantine)</li>
<li>Generate notable event (Enterprise Security)</li>
</ul>

<h4>Best practices</h4>
<ul>
<li><b>Tune para reducir falsos positivos.</b> Demasiados → fatiga del analista.</li>
<li><b>Defina criterios de severidad</b> claros (P1-P4).</li>
<li><b>Documenta cada alerta:</b> qué detecta, qué hacer, owner.</li>
<li><b>Runbook por alerta.</b> "Si esta alerta dispara, sigue estos pasos".</li>
<li><b>Review mensual</b> de alertas: ¿siguen siendo útiles?</li>
</ul>
`},

{id:"d6",title:"Módulo 6 — Incident Response",html:`
<h2>Módulo 6 — Incident Response</h2>
<div class="lead">El módulo culminante. Aplicas todo lo anterior a un incidente real durante el examen. SANS define PICERL; aprende cada fase y qué herramientas usar en cada una.</div>

<h3>6.1 Proceso PICERL (SANS)</h3>
<div class="flow">
<span class="step">1. Preparation</span><span class="arr">→</span>
<span class="step">2. Identification</span><span class="arr">→</span>
<span class="step">3. Containment</span><span class="arr">→</span>
<span class="step">4. Eradication</span><span class="arr">→</span>
<span class="step">5. Recovery</span><span class="arr">→</span>
<span class="step">6. Lessons learned</span>
</div>
<p>Variante NIST 800-61 combina C-E-R en una fase. Resultado equivalente.</p>

<h3>6.2 Preparation</h3>
<p>Lo que haces ANTES del incidente. La fase más importante: cuanto mejor preparado, menor daño.</p>
<h4>Elementos clave</h4>
<ul>
<li><b>Plan IR escrito y aprobado.</b> Políticas, procedimientos, contactos.</li>
<li><b>CSIRT</b> formado: lead, técnicos, legal, comms, RR.HH.</li>
<li><b>Comms out-of-band:</b> Signal, WhatsApp personal, teléfono fuera del corporativo.</li>
<li><b>Jump kit:</b> portátil dedicado, USBs con tools (FTK Imager, Volatility, Wireshark), discos limpios.</li>
<li><b>Runbooks por tipo de incidente:</b> ransomware, phishing, DDoS, lateral movement.</li>
<li><b>Logs centralizados</b> y retención adecuada.</li>
<li><b>Backups testeados</b> y offsite.</li>
<li><b>Relaciones con vendors</b> (EDR, MSSP, abogados, forenses).</li>
<li><b>Tabletop exercises</b> mínimo trimestrales.</li>
<li><b>Train a todo el equipo:</b> phishing simulations, awareness.</li>
</ul>

<h3>6.3 Identification</h3>
<p>Detectar que hay un incidente y caracterizarlo.</p>
<h4>Triggers</h4>
<ul>
<li>Alerta del SIEM</li>
<li>Alerta del EDR</li>
<li>Reporte de usuario (phishing button, "mi PC va raro")</li>
<li>Notificación externa (CERT, vendor, cliente)</li>
<li>IDS/IPS</li>
<li>Anomaly detection (UEBA)</li>
</ul>

<h4>Triage inicial</h4>
<ol>
<li>¿Qué pasa exactamente? (síntomas, alerta concreta)</li>
<li>¿Qué hosts/usuarios afectados? (alcance inicial)</li>
<li>¿Cuándo empezó? (dwell time)</li>
<li>¿Cuál es el impacto potencial? (criticidad activo, datos)</li>
<li>¿Es real o falso positivo?</li>
<li>Clasificación de severidad (P1-P4)</li>
</ol>

<h4>Severidad típica</h4>
<table>
<tr><th>Nivel</th><th>Descripción</th><th>SLA respuesta</th></tr>
<tr><td>P1 (Crítico)</td><td>Ransomware activo, exfil masivo, sistema crítico caído</td><td>Inmediato, 24/7</td></tr>
<tr><td>P2 (Alto)</td><td>Host comprometido confirmado, lateral movement</td><td>1-4h</td></tr>
<tr><td>P3 (Medio)</td><td>Phishing exitoso aislado, malware en endpoint contenido</td><td>4-24h</td></tr>
<tr><td>P4 (Bajo)</td><td>Phishing fallido, intentos bloqueados</td><td>Próximo día hábil</td></tr>
</table>

<h3>6.4 Containment</h3>
<p>Cortar la propagación. <b>Crítico:</b> equilibrar contención vs preservación de evidencia.</p>

<h4>Containment a corto plazo</h4>
<ul>
<li><b>Network isolation:</b> EDR isolate, change VLAN a quarantine, switchport disable.</li>
<li><b>Disable cuenta comprometida</b> en AD.</li>
<li><b>Block IoCs:</b> en firewall (IPs/dominios), en email gateway, en proxy.</li>
<li><b>Force password reset</b> para cuentas afectadas.</li>
<li><b>Reglas IPS/EDR emergencia</b> contra signature del malware.</li>
</ul>

<h4>Containment a largo plazo</h4>
<ul>
<li>Parchear vulnerabilidad explotada.</li>
<li>Segmentación adicional.</li>
<li>Hardening de servicios.</li>
<li>Whitelisting de aplicaciones.</li>
</ul>

<div class="callout warn"><span class="ico">⚠</span><div>NO apagues el equipo si puedes evitarlo — pierdes memoria. Mejor: aislar de red (EDR) y dejar encendido. Antes de re-imagen, captura RAM + disco.</div></div>

<h3>6.5 Eradication</h3>
<p>Eliminar la presencia del atacante.</p>
<ul>
<li>Eliminar malware (EDR clean, o re-imagen).</li>
<li>Cerrar persistencia: scheduled tasks, services, registry run keys, WMI subscriptions, COM hijacks, DLL sideloading.</li>
<li>Rotar todas las credenciales potencialmente comprometidas.</li>
<li>Revisar y rotar cuentas privilegiadas y service accounts.</li>
<li>Revisar membership de grupos sensibles (Domain Admins, Enterprise Admins).</li>
<li>Si AD comprometido: golden ticket attack mitigation — doble reset de krbtgt.</li>
<li>Cerrar vulnerabilidad explotada (parche, config, código).</li>
</ul>

<h3>6.6 Recovery</h3>
<ul>
<li>Restaurar servicios desde backups limpios verificados.</li>
<li>Validar integridad de sistemas restaurados.</li>
<li>Monitoring aumentado durante días/semanas post-recovery.</li>
<li>Vuelta gradual a producción.</li>
<li>Comunicación a usuarios afectados.</li>
<li>Notificación regulatoria si aplica (GDPR 72h, etc.).</li>
</ul>

<h3>6.7 Lessons Learned</h3>
<p>Reunión post-incidente. <b>Sin culpas</b> (blameless post-mortem) — promueve transparencia.</p>
<h4>Estructura</h4>
<ol>
<li><b>Timeline reconstrucción:</b> qué pasó, cuándo, quién hizo qué.</li>
<li><b>Root cause analysis:</b> 5 Whys, fishbone.</li>
<li><b>Qué funcionó.</b></li>
<li><b>Qué no funcionó.</b></li>
<li><b>Action items</b> con owner y deadline.</li>
<li><b>Actualizar runbooks, detecciones, training.</b></li>
</ol>

<h3>6.8 Casos de uso típicos en BTL1</h3>

<h4>Ransomware</h4>
<div class="kvs">
<span class="k">Síntomas</span><span class="v">Archivos con extensión nueva (.locked, .encrypted, .[id].nombre). Nota de rescate (HOW_TO_DECRYPT.txt). Performance lento. Outbound a Tor/C2.</span>
<span class="k">Containment</span><span class="v">Aislar hosts afectados, deshabilitar SMB shares, cortar acceso a backups.</span>
<span class="k">Investigation</span><span class="v">Identificar paciente cero. Vector inicial (phishing? exploit? RDP brute?). Cuánto cifró. Hay exfil?</span>
<span class="k">Decryption</span><span class="v">Comprobar nomoreransom.org. NO pagar sin decisión exec + legal.</span>
<span class="k">Recovery</span><span class="v">Restore desde backups inmutables. Re-imagen de los hosts comprometidos.</span>
</div>

<h4>Lateral Movement</h4>
<div class="kvs">
<span class="k">Síntomas</span><span class="v">4624 type 3 desde host inusual. PsExec, WMI, WinRM, RDP outbound entre internal hosts.</span>
<span class="k">Detection</span><span class="v">Sysmon ID 1 con cmdline sospechoso. NetFlow east-west. Sigma rules.</span>
<span class="k">Containment</span><span class="v">Aislar todos los hosts en la cadena. Rotar credenciales privilegiadas.</span>
</div>

<h4>Data Exfiltration</h4>
<div class="kvs">
<span class="k">Síntomas</span><span class="v">Outbound HTTPS/DNS volumétrico anómalo. Archivos comprimidos masivos. RAR/ZIP con flags raros (.r00, .r01).</span>
<span class="k">Detection</span><span class="v">DLP, NetFlow analytics, beacon detection.</span>
<span class="k">Containment</span><span class="v">Bloquear C2 endpoints, aislar hosts, capturar pcap para análisis.</span>
</div>

<h4>Web Attack</h4>
<div class="kvs">
<span class="k">Síntomas</span><span class="v">WAF blocks, 500s, payloads en URLs (SQLi, XSS). Webshells (.aspx/.jsp/.php nuevos en webroot).</span>
<span class="k">Detection</span><span class="v">WAF logs, web server access logs, FIM en webroot.</span>
<span class="k">Containment</span><span class="v">Bloquear IP origen, retirar webshell, parchear vulnerabilidad.</span>
</div>

<h3>6.9 Comunicación durante un incidente</h3>
<h4>Stakeholders y qué saben</h4>
<div class="kvs">
<span class="k">SOC team</span><span class="v">Detalles técnicos completos, IoCs, runbook actual.</span>
<span class="k">CSIRT lead</span><span class="v">Status update cada N horas, decisiones críticas pendientes.</span>
<span class="k">CISO / Management</span><span class="v">Impacto al negocio, decisiones requeridas, recursos.</span>
<span class="k">Legal</span><span class="v">Implicaciones regulatorias, evidencia preserved.</span>
<span class="k">PR / Comms</span><span class="v">Si hay riesgo reputacional. Mensajes externos.</span>
<span class="k">Users afectados</span><span class="v">Qué hacer, qué no hacer, cuándo contactar IT.</span>
<span class="k">Customers</span><span class="v">Solo cuando confirmado y con guía legal/comms.</span>
<span class="k">Regulators</span><span class="v">GDPR 72h, sector-specific.</span>
<span class="k">Law enforcement</span><span class="v">Bajo guía legal. FBI/CISA/CNI/INCIBE-CERT.</span>
</div>

<h4>Templates pre-aprobados</h4>
<p>Tener templates de comms (email a usuarios, statement a prensa, notif a clientes) acelera respuesta y reduce errores en momento de crisis.</p>

<h3>6.10 Métricas post-incidente</h3>
<div class="kvs">
<span class="k">Dwell time</span><span class="v">Tiempo desde compromise inicial hasta detección.</span>
<span class="k">MTTD</span><span class="v">Mean time to detect.</span>
<span class="k">MTTR</span><span class="v">Mean time to respond/resolve.</span>
<span class="k">Coste estimado</span><span class="v">Recursos, downtime, multas, recovery.</span>
<span class="k">Lecciones aprendidas implementadas</span><span class="v">Cuántas action items completadas.</span>
</div>
`}
],

questions: [
{d:1,q:"Triada CIA significa:",opts:["Cifrado, Integridad, Autenticación","Confidentiality, Integrity, Availability","Control, Identidad, Auditoría","Compliance, Insurance, Auditing"],c:1,e:"CIA es el modelo fundamental de seguridad de la información."},
{d:1,q:"Defense in depth se basa en:",opts:["Una sola capa muy fuerte","Múltiples capas defensivas; si una falla, otra protege","Solo firewall","Solo cifrado"],c:1,e:"Múltiples capas redundantes. Si una capa cae, otras siguen protegiendo."},
{d:1,q:"Tipo de logon Windows que indica RDP:",opts:["Type 2","Type 3","Type 10","Type 5"],c:2,e:"Type 10 = RemoteInteractive (RDP). Type 2 = Interactive físico. Type 3 = Network (SMB). Type 5 = Service."},
{d:1,q:"En la Kill Chain, después de Delivery viene:",opts:["Reconnaissance","Exploitation","Actions on Objectives","C2"],c:1,e:"Orden: Recon → Weapon → Delivery → Exploitation → Install → C2 → Actions on Objectives."},
{d:1,q:"En MITRE ATT&CK, T1566 corresponde a:",opts:["Lateral Movement","Phishing","Persistence","Defense Evasion"],c:1,e:"T1566 es Phishing (con sub-técnicas: .001 Spearphishing Attachment, .002 Link, .003 Service)."},
{d:1,q:"MTTD mide:",opts:["Tiempo medio de respuesta","Tiempo medio para detectar el incidente","Coste medio","Backups"],c:1,e:"Mean Time To Detect: cuánto tarda el SOC en darse cuenta del incidente."},

{d:2,q:"Los headers Received en email se leen:",opts:["De arriba abajo","De abajo arriba (el más antiguo está al final)","Aleatoriamente","Solo el primero"],c:1,e:"Cada servidor SMTP añade un Received arriba. Cronológicamente, el más antiguo está abajo."},
{d:2,q:"SPF '-all' significa:",opts:["Soft fail","Hard fail — rechazar lo que no coincida","Neutral","Aceptar todo"],c:1,e:"-all hard fail (reject). ~all soft fail (mark). ?all neutral. +all aceptar (no usar)."},
{d:2,q:"Política DMARC p=reject:",opts:["Solo reporta","Va a spam","Rechaza si SPF/DKIM fallan alineados","No hace nada"],c:2,e:"p=reject es la política más estricta. p=quarantine va a spam. p=none solo reporta."},
{d:2,q:"Defang correcto de http://malo.com:",opts:["http://malo.com","hxxp[://]malo[.]com","HTTP://MALO.COM","https://malo.com"],c:1,e:"Defanging evita que el link sea clickable. Reemplaza http→hxxp y . →[.]"},
{d:2,q:"Adjunto .docm es peligroso porque:",opts:["Es muy grande","Soporta macros VBA","Solo Office moderno lo abre","Es de imagen"],c:1,e:"docm = Word con macros habilitadas. VBA permite ejecución arbitraria."},
{d:2,q:"Bypass de Mark-of-the-Web típicamente usa:",opts:["ZIP estándar","ISO/IMG montable","Texto plano","HTML simple"],c:1,e:"Archivos ISO/IMG/VHD se montan y los archivos dentro no heredan MOTW, evitando Protected View."},
{d:2,q:"HTML smuggling consiste en:",opts:["Cifrado HTTP","Construir el binario malicioso en cliente con JS+Base64","Sniff HTTP","Brute force"],c:1,e:"El gateway ve HTML inocente. El JS dentro reconstruye el binario en el navegador del usuario."},

{d:3,q:"En la Pyramid of Pain, cambiar TTPs para el atacante es:",opts:["Trivial","Lo más doloroso (rediseñar herramientas y entrenamiento)","Imposible","Igual que cambiar IPs"],c:1,e:"TTPs cambian lentamente y son la huella más profunda del adversario. Detectar TTPs = defensa duradera."},
{d:3,q:"Diamond Model tiene cuántos vértices:",opts:["3","4 (Adversary, Capability, Infrastructure, Victim)","5","7"],c:1,e:"4 vértices conectados. Pivotear entre ellos permite analizar intrusiones."},
{d:3,q:"STIX y TAXII son:",opts:["Antivirus","Lenguaje (STIX) y protocolo de transporte (TAXII) para threat intel","Frameworks IR","Tipos de SIEM"],c:1,e:"STIX: lenguaje estructurado de threat intel. TAXII: pub/sub HTTP para intercambiar STIX."},
{d:3,q:"YARA sirve para:",opts:["Network IDS","Detectar familias de malware por patrones (strings, hex, condiciones)","SIEM","Backup"],c:1,e:"YARA permite escribir reglas con strings/bytes/condiciones para clasificar muestras."},
{d:3,q:"Modificador YARA para coincidencia case-insensitive:",opts:["nocase","ignorecase","ascii","wide"],c:0,e:"nocase ignora mayúsculas/minúsculas. ascii fuerza ASCII. wide fuerza UTF-16."},
{d:3,q:"abuse.ch URLhaus contiene:",opts:["Hashes","URLs distribuyendo malware","Phishing pages","Wallpapers"],c:1,e:"URLhaus de abuse.ch lista URLs activas distribuyendo malware. Feed gratis con API."},
{d:3,q:"Para investigar subdominios de un dominio se usa:",opts:["whois","crt.sh (Certificate Transparency)","ping","tracert"],c:1,e:"crt.sh busca en logs CT todos los certs emitidos para un dominio. Revela subdominios sin scanning activo."},
{d:3,q:"Shodan se usa para:",opts:["Phishing","Buscar dispositivos y servicios expuestos en internet","Cifrar archivos","SIEM"],c:1,e:"Shodan indexa internet: cámaras IP, ICS, servidores expuestos, banners. Recon defensivo y ofensivo."},

{d:4,q:"Orden de volatilidad — más volátil primero:",opts:["Backups","Disco","RAM","Registros CPU/caché"],c:3,e:"CPU registers/cache → RAM → swap → archivos temp → disco → backups → logs remotos."},
{d:4,q:"Write blocker se usa para:",opts:["Cifrar","Permitir leer un disco evidencia sin posibilidad de escribir","Borrar","Comprimir"],c:1,e:"Preserva la integridad probatoria del medio original. Hardware o software."},
{d:4,q:"Tras adquirir una imagen forense, lo PRIMERO:",opts:["Imprimirla","Calcular su hash (MD5+SHA256) y comparar con el original","Eliminarla","Comprimirla"],c:1,e:"Hashes antes y después demuestran que la copia es idéntica e inalterada."},
{d:4,q:"Event ID 4625 indica:",opts:["Login OK","Login fallido","Process creation","Logoff"],c:1,e:"4624 OK, 4625 fail, 4688 process create, 4634 logoff."},
{d:4,q:"Prefetch (.pf) en Windows revela:",opts:["Backups","Programas ejecutados con timestamps de primera y última ejecución","Logins","Conexiones"],c:1,e:"Cada exe ejecutado crea/actualiza un .pf en C:\\Windows\\Prefetch con timestamps."},
{d:4,q:"En Volatility, plugin para detectar inyección de código:",opts:["pslist","netscan","malfind","filescan"],c:2,e:"malfind busca regiones con permisos PAGE_EXECUTE_READWRITE sin módulo asociado — signo de inyección."},
{d:4,q:"En Volatility, plugin que escanea memoria buscando procesos ocultos:",opts:["pslist","psscan","cmdline","handles"],c:1,e:"pslist sigue la lista del kernel (puede ser manipulada). psscan escanea memoria por estructuras EPROCESS, encontrando procesos ocultos."},
{d:4,q:"Run key persistencia común en Windows:",opts:["HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run","C:\\Users","C:\\ProgramData","%TEMP%"],c:0,e:"HKLM y HKCU \\...\\CurrentVersion\\Run ejecutan al login. Persistencia clásica."},
{d:4,q:"Logon Type 3 indica:",opts:["Físico","Network (SMB, RPC)","RDP","Service"],c:1,e:"Type 3 = Network. Indica acceso remoto via SMB, RPC, IIS. Pivot común."},

{d:5,q:"SPL para contar 4625 por usuario:",opts:["SELECT count","index=wineventlog EventCode=4625 | stats count by user","grep 4625","count(4625)"],c:1,e:"SPL: filtra y agrega con stats count by."},
{d:5,q:"En SPL, comando para series temporales:",opts:["stats","timechart","table","top"],c:1,e:"timechart visualiza valores en el tiempo. stats agrega sin tiempo."},
{d:5,q:"Para detectar brute force exitoso correlando 4625 + 4624:",opts:["search 4624","transaction con maxspan","sort","head"],c:1,e:"transaction agrupa eventos relacionados. maxspan limita ventana temporal."},
{d:5,q:"Para enriquecer logs con datos externos en Splunk:",opts:["stats","lookup","table","sort"],c:1,e:"lookup combina con archivos CSV (threat intel feeds, asset inventory)."},
{d:5,q:"Alerta SIEM con muchos falsos positivos requiere:",opts:["Borrarla","Tuning para reducir FPs","Ignorarla","Más usuarios"],c:1,e:"Demasiados FPs causan fatiga del analista. Refinar criterios, agregar exclusiones legítimas."},

{d:6,q:"Fases PICERL:",opts:["Plan, Do, Check, Act","Preparation, Identification, Containment, Eradication, Recovery, Lessons learned","Detect, React","Fast, Slow"],c:1,e:"SANS PICERL: 6 fases. NIST equivalente combina C-E-R."},
{d:6,q:"Tras detectar host comprometido, PRIMERA acción:",opts:["Apagarlo","Aislarlo de la red preservando memoria","Reinstalarlo","Informar prensa"],c:1,e:"Aislar previene propagación. Apagar destruye memoria volátil. Reinstalar antes de investigar destruye evidencia."},
{d:6,q:"Comunicación durante un incidente debe usar:",opts:["Solo email corporativo","Canal out-of-band si se sospecha del compromiso del correo","Twitter","Megafonía"],c:1,e:"Si el atacante puede leer el correo corporativo, alerta tu respuesta. Out-of-band (Signal, WhatsApp personal, teléfono)."},
{d:6,q:"GDPR exige notificación de brecha en:",opts:["24h","48h","72h","30 días"],c:2,e:"Art. 33 GDPR: notificar a la autoridad supervisora en 72h salvo bajo riesgo."},
{d:6,q:"Post-mortem efectivo debe ser:",opts:["Con culpables identificados","Sin culpas (blameless) para fomentar transparencia","Solo para el CEO","Secreto"],c:1,e:"Blameless post-mortem: foco en sistema y procesos, no en personas. Promueve transparencia y aprendizaje."},
{d:6,q:"Si encuentras webshell .aspx nuevo en webroot, primera acción:",opts:["Editarlo para ver qué hace","Aislar el servidor + capturar evidencia + preservar el archivo","Borrarlo","Reiniciar"],c:1,e:"Aislar y preservar evidencia. Investigar cómo llegó (parche, validación) antes de borrar y restaurar."},
{d:6,q:"En ransomware, NO se debe:",opts:["Aislar hosts","Pagar sin decisión exec + legal y verificación","Restaurar de backup","Investigar paciente cero"],c:1,e:"Pagar es decisión estratégica con implicaciones legales (sanctions OFAC). Solo tras exec+legal. Y no garantiza decrypt."}
],

flashcards: [
{d:1,q:"¿Qué garantiza la triada CIA y con qué mecanismos?",a:"Confidentiality (cifrado, ACLs), Integrity (hashing, firmas, FIM), Availability (redundancia, backups, anti-DDoS)."},
{d:1,q:"¿Qué es defense in depth?",a:"Múltiples capas de seguridad. Si una falla, otras protegen. Capas: físico, perímetro, red interna, endpoint, app, datos, identidad."},
{d:1,q:"Logon types Windows 2, 3, 10:",a:"2=Interactive (físico), 3=Network (SMB/RPC, lateral movement típico), 10=RemoteInteractive (RDP)."},
{d:1,q:"¿Qué describe MITRE ATT&CK?",a:"Matriz de tácticas (objetivos del atacante) y técnicas (cómo los logra) observadas en ataques reales. Estándar para detección y hunting."},
{d:1,q:"¿Cyber Kill Chain en orden?",a:"Recon → Weaponization → Delivery → Exploitation → Installation → C2 → Actions on Objectives."},

{d:2,q:"¿Cómo se leen los headers Received de un email?",a:"De abajo arriba. Cada servidor SMTP añade Received en la parte superior, así que el más antiguo está al final."},
{d:2,q:"¿Qué hacen SPF, DKIM y DMARC?",a:"SPF: lista IPs autorizadas. DKIM: firma criptográfica del email. DMARC: política si SPF/DKIM fallan (none/quarantine/reject) + reporting."},
{d:2,q:"¿Cómo se defang una URL?",a:"http→hxxp y . →[.] para evitar clic accidental al compartir IoCs. Ej: hxxps[://]malicioso[.]com[/]login"},
{d:2,q:"¿Por qué los ISO bypassean Mark-of-the-Web?",a:"Los archivos extraídos de un ISO/IMG/VHD montado no heredan el atributo MOTW. Bypass de Protected View y SmartScreen."},
{d:2,q:"¿Qué hace oletools (olevba) en análisis de phishing?",a:"Extrae y analiza macros VBA de documentos Office. Identifica IoCs (URLs, IPs, comandos) sin ejecutar."},

{d:3,q:"¿Qué es la Pyramid of Pain?",a:"Modelo de David Bianco. Niveles de IoCs ordenados por dolor para el atacante: Hashes (trivial) → IPs → Domains → Network/Host artifacts → Tools → TTPs (lo más doloroso)."},
{d:3,q:"¿Qué cubre el Diamond Model?",a:"4 vértices: Adversary, Capability, Infrastructure, Victim. Pivotear entre ellos durante análisis de intrusiones."},
{d:3,q:"¿Qué hace una regla YARA básica?",a:"Define strings y una condition. Si los strings se encuentran en el archivo cumpliendo la condition, hit. Ej: rule X { strings: $s1=\"malware\" condition: $s1 }"},
{d:3,q:"¿Diferencia STIX y TAXII?",a:"STIX: lenguaje estructurado (JSON/XML) para describir amenazas. TAXII: protocolo HTTP pub/sub para intercambiar feeds STIX entre organizaciones."},
{d:3,q:"¿Qué información extrae crt.sh sobre un dominio?",a:"Lista todos los certificados TLS emitidos vía Certificate Transparency logs. Revela subdominios sin escaneo activo."},

{d:4,q:"¿Cuál es el orden de volatilidad?",a:"CPU registers/cache → RAM → process state/network → temp files → disco → swap → backups → logs remotos."},
{d:4,q:"¿Qué hace dcfldd que dd no hace?",a:"dcfldd añade hashing on-the-fly mientras imaging, plus barra de progreso y verificación. Útil en forense."},
{d:4,q:"¿Qué guarda el Prefetch de Windows?",a:"Por cada exe ejecutado, .pf con timestamps de primera y última ejecución, run count, archivos cargados durante el arranque del programa."},
{d:4,q:"¿Para qué sirve el plugin Volatility 'malfind'?",a:"Detecta regiones de memoria PAGE_EXECUTE_READWRITE sin módulo asociado — indicador clásico de inyección de código."},
{d:4,q:"¿Diferencia pslist vs psscan en Volatility?",a:"pslist sigue la lista doblemente enlazada del kernel (DKOM puede ocultarse). psscan escanea memoria buscando estructuras EPROCESS — encuentra procesos ocultos."},
{d:4,q:"3 ubicaciones típicas de persistencia en Linux:",a:"/etc/crontab y cron.*, /etc/systemd/system/*.service, ~/.ssh/authorized_keys (clave nueva = backdoor)."},

{d:5,q:"SPL para top 10 source IPs:",a:"index=firewall | top 10 src_ip — o equivalente: ... | stats count by src_ip | sort -count | head 10"},
{d:5,q:"¿Qué hace 'transaction' en SPL?",a:"Agrupa eventos relacionados por uno o más campos comunes con maxspan/maxpause. Útil para correlar 4625 + 4624 mismo user."},
{d:5,q:"¿Cómo enriquecer con threat intel en Splunk?",a:"... | lookup feeds.csv ip as src_ip OUTPUT category | where isnotnull(category) — combinas con archivo CSV de IoCs."},
{d:5,q:"¿Qué problema causan demasiados falsos positivos?",a:"Fatiga del analista. Alertas reales se pierden entre ruido. Tuning es crítico: refinar criterios, excluir comportamiento legítimo, ajustar umbrales."},

{d:6,q:"¿Por qué la fase Preparation es la más importante en IR?",a:"Cuanto mejor preparado (runbooks, contactos, jump kit, tabletop, backups testeados), menor el daño cuando llegue el incidente real."},
{d:6,q:"¿Por qué usar comms out-of-band en un incidente serio?",a:"Si el atacante comprometió el correo corporativo o Teams, leer tu plan de respuesta le da ventaja. Signal/teléfono personal evitan alertarlo."},
{d:6,q:"En ransomware activo, primera acción tras detectar:",a:"Aislar inmediatamente los hosts cifrando (EDR isolate). Cortar acceso a SMB shares y backups online. Capturar memoria de paciente cero."},
{d:6,q:"¿Qué es dwell time?",a:"Tiempo desde el compromiso inicial hasta la detección. Métrica crítica del SOC. Industria media histórica: ~200 días; objetivo moderno: <24h."},
{d:6,q:"¿Qué es un blameless post-mortem?",a:"Reunión de lessons learned sin asignar culpas individuales. Foco en sistemas y procesos. Promueve transparencia y mejora; lo contrario fomenta encubrir."}
]
};
