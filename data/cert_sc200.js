window.CERT_DATA = window.CERT_DATA || {};

// === Microsoft SC-200 — Security Operations Analyst ===
CERT_DATA.sc200 = {
theory: [
{id:"d0",title:"Introducción a SC-200",html:`
<h2>SC-200 — Microsoft Security Operations Analyst</h2>
<div class="lead">Certificación de rol que valida la capacidad de reducir riesgo organizacional remediando amenazas activas con el stack de seguridad de Microsoft: <b>Defender XDR</b>, <b>Microsoft Sentinel</b> (SIEM/SOAR) y <b>Defender for Cloud</b>. Examen de ~40-60 preguntas, 100 min, pasaje 700/1000.</div>

<h3>¿Qué hace un Security Operations Analyst?</h3>
<p>Es el rol de analista SOC en empresas que viven en el ecosistema Microsoft (Azure + Microsoft 365). Investiga incidentes, hace hunting, configura detecciones, responde a amenazas y reduce el tiempo de exposición.</p>

<div class="callout analogy"><span class="ico">◐</span><div><b>Analogía:</b> si Microsoft 365 + Azure es una ciudad, el SecOps Analyst es el centro de mando de la policía: recibe alarmas de cada barrio (Defender for Endpoint, Office, Identity, Cloud Apps), las correlaciona en un mapa único (Sentinel) y despacha unidades a contener el problema.</div></div>

<h3>Los productos que entran en el examen</h3>
<table>
<tr><th>Producto</th><th>Qué protege</th></tr>
<tr><td><b>Microsoft Defender XDR</b></td><td>Paraguas que unifica los Defender. Antes "Microsoft 365 Defender".</td></tr>
<tr><td><b>Defender for Endpoint (MDE)</b></td><td>EDR para endpoints (Windows, Mac, Linux, móvil).</td></tr>
<tr><td><b>Defender for Office 365 (MDO)</b></td><td>Email y colaboración (phishing, malware en adjuntos/links).</td></tr>
<tr><td><b>Defender for Identity (MDI)</b></td><td>Detección de amenazas en Active Directory on-prem.</td></tr>
<tr><td><b>Defender for Cloud Apps (MDCA)</b></td><td>CASB — visibilidad y control de apps SaaS.</td></tr>
<tr><td><b>Microsoft Defender for Cloud (MDC)</b></td><td>CSPM + CWP para recursos Azure, AWS, GCP, on-prem.</td></tr>
<tr><td><b>Microsoft Sentinel</b></td><td>SIEM + SOAR nativo de la nube. Recoge, correla, alerta, automatiza.</td></tr>
<tr><td><b>Microsoft Entra ID</b></td><td>Identidad (antes Azure AD). Identity Protection, Conditional Access.</td></tr>
</table>

<h3>Dominios del examen (skills measured)</h3>
<ol>
<li><b>Gestionar el entorno de operaciones de seguridad</b> (~20-25%) — configurar Defender XDR, gestión de activos, settings.</li>
<li><b>Configurar protecciones y detecciones</b> (~15-20%) — Defender for Cloud, reglas, políticas.</li>
<li><b>Gestionar la respuesta a incidentes</b> (~25-30%) — investigar y responder en Defender XDR, Defender for Cloud, Sentinel.</li>
<li><b>Gestionar amenazas con threat hunting</b> (~25-30%) — KQL, analytics rules, watchlists, notebooks.</li>
</ol>

<div class="callout exam"><span class="ico">★</span><div><b>KQL es el corazón del examen.</b> Si dominas Kusto Query Language y entiendes cómo fluyen los datos (conectores → tablas → analytics rules → incidentes), apruebas. Practica queries hasta que sean automáticas.</div></div>
`},

{id:"d1",title:"Dominio 1 — Microsoft Defender XDR",html:`
<h2>Dominio 1 — Microsoft Defender XDR</h2>
<div class="lead">Defender XDR (Extended Detection and Response) unifica señales de endpoints, email, identidades y apps cloud en un único portal (security.microsoft.com) con incidentes correlacionados automáticamente.</div>

<h3>1.1 ¿Qué es XDR y por qué importa?</h3>
<p><b>EDR</b> mira solo endpoints. <b>XDR</b> correla múltiples dominios: si un phishing (MDO) entrega malware a un endpoint (MDE) que roba credenciales (MDI) y accede a SharePoint (MDCA), XDR une todo en <b>un solo incidente</b> con su timeline completa.</p>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogía:</b> EDR es una cámara en la puerta de tu casa. XDR es el sistema que une la cámara de la puerta, el sensor de la ventana, el GPS del coche y la alarma de la caja fuerte — y te dice "es el mismo ladrón, esta es su ruta completa".</div></div>

<h3>1.2 Defender for Endpoint (MDE)</h3>
<h4>Onboarding</h4>
<p>Métodos según OS: Group Policy, Intune (MDM), Configuration Manager (SCCM), script local, VDI. Genera un paquete de onboarding por tenant.</p>
<h4>Niveles de respuesta automatizada (Automated Investigation & Response - AIR)</h4>
<div class="kvs">
<span class="k">No automated response</span><span class="v">Solo alerta.</span>
<span class="k">Semi (require approval)</span><span class="v">Investiga y propone remediación; un analista aprueba.</span>
<span class="k">Full</span><span class="v">Remedia automáticamente sin intervención.</span>
</div>
<h4>Acciones de respuesta sobre un dispositivo</h4>
<div class="kvs">
<span class="k">Isolate device</span><span class="v">Aísla de red (full o selective: deja conexión con el portal).</span>
<span class="k">Run AV scan</span><span class="v">Escaneo bajo demanda.</span>
<span class="k">Restrict app execution</span><span class="v">Solo binarios firmados por Microsoft pueden correr.</span>
<span class="k">Collect investigation package</span><span class="v">Recolecta artefactos forenses.</span>
<span class="k">Live Response</span><span class="v">Shell remoto para investigación y remediación interactiva.</span>
</div>
<h4>ASR — Attack Surface Reduction</h4>
<p>Reglas que bloquean comportamientos abusados por malware: bloquear que Office cree procesos hijos, bloquear ejecución de scripts ofuscados, bloquear robo de credenciales de LSASS, bloquear ejecutables de email. Modos: Audit, Block, Warn.</p>
<h4>Vulnerability Management (Defender TVM)</h4>
<p>Inventario de software, CVEs, recomendaciones de seguridad priorizadas por exposición real, Exposure Score y Microsoft Secure Score for Devices.</p>

<h3>1.3 Defender for Office 365 (MDO)</h3>
<div class="kvs">
<span class="k">Safe Attachments</span><span class="v">Detona adjuntos en sandbox antes de entregarlos.</span>
<span class="k">Safe Links</span><span class="v">Reescribe URLs y las verifica en tiempo de clic (time-of-click).</span>
<span class="k">Anti-phishing</span><span class="v">Protección de suplantación (impersonation) de usuarios y dominios, spoof intelligence, mailbox intelligence.</span>
<span class="k">Threat Explorer</span><span class="v">Buscar y cazar emails maliciosos en todo el tenant.</span>
<span class="k">Attack Simulation Training</span><span class="v">Campañas de phishing simulado + formación a los que pican.</span>
<span class="k">Quarantine</span><span class="v">Mensajes retenidos; el admin/usuario los revisa o libera.</span>
</div>
<p><b>ZAP (Zero-hour Auto Purge):</b> retira retroactivamente emails que resultan maliciosos DESPUÉS de entregados (ya en el buzón).</p>

<h3>1.4 Defender for Identity (MDI)</h3>
<p>Sensor instalado en los Domain Controllers que detecta ataques contra Active Directory on-prem.</p>
<div class="kvs">
<span class="k">Reconnaissance</span><span class="v">Enumeración de cuentas, LDAP recon, DNS recon.</span>
<span class="k">Compromised credentials</span><span class="v">Brute force, password spray, Kerberos.</span>
<span class="k">Lateral movement</span><span class="v">Pass-the-Hash, Pass-the-Ticket, Overpass-the-Hash.</span>
<span class="k">Domain dominance</span><span class="v">Golden Ticket, DCSync, DCShadow, Skeleton Key.</span>
</div>

<h3>1.5 Defender for Cloud Apps (MDCA)</h3>
<p>CASB (Cloud Access Security Broker). Descubre Shadow IT, aplica políticas a apps SaaS, detecta comportamiento anómalo.</p>
<div class="kvs">
<span class="k">Cloud Discovery</span><span class="v">Analiza logs de firewall/proxy para ver qué apps usan los empleados.</span>
<span class="k">App Governance</span><span class="v">Controla apps OAuth conectadas a M365.</span>
<span class="k">Conditional Access App Control</span><span class="v">Proxy reverso que controla sesiones en tiempo real (bloquear descarga, etc.).</span>
<span class="k">Anomaly detection</span><span class="v">Impossible travel, actividad masiva de descarga, ransomware.</span>
</div>

<h3>1.6 Portal unificado y correlación de incidentes</h3>
<p>En <code>security.microsoft.com</code> Defender XDR agrupa alertas relacionadas en <b>incidentes</b>. Cada incidente tiene: alertas, dispositivos, usuarios, buzones, apps afectadas + un <b>attack story</b> (grafo visual).</p>
<h4>Estados y clasificación de incidentes</h4>
<div class="kvs">
<span class="k">Status</span><span class="v">Active, In progress, Resolved.</span>
<span class="k">Classification</span><span class="v">True positive, Informational expected activity, False positive.</span>
<span class="k">Determination</span><span class="v">Sub-categoría: malware, phishing, multistage attack, etc.</span>
</div>
`},

{id:"d2",title:"Dominio 2 — Defender for Cloud",html:`
<h2>Dominio 2 — Microsoft Defender for Cloud (MDC)</h2>
<div class="lead">MDC protege workloads multi-cloud e híbridos. Combina <b>CSPM</b> (gestión de la postura: configuración) y <b>CWP</b> (protección de la carga de trabajo: amenazas en runtime).</div>

<h3>2.1 CSPM vs CWP</h3>
<div class="compare">
<div><h5>CSPM (Cloud Security Posture Management)</h5><p>Evalúa la configuración contra mejores prácticas. Detecta misconfiguraciones (storage público, sin MFA, puertos abiertos). Da <b>Secure Score</b> y recomendaciones.</p></div>
<div><h5>CWP (Cloud Workload Protection)</h5><p>Detecta amenazas en runtime: planes Defender por tipo de recurso (Servers, Storage, SQL, Containers, Key Vault, App Service, etc.).</p></div>
</div>

<h3>2.2 Secure Score</h3>
<p>Porcentaje (0-100%) que mide cuántas recomendaciones de seguridad has implementado. Las recomendaciones se agrupan en <b>security controls</b>, cada uno con puntos. Subir el Secure Score = reducir riesgo de forma medible.</p>

<h3>2.3 Planes Defender (CWP)</h3>
<div class="kvs">
<span class="k">Defender for Servers</span><span class="v">EDR (integra MDE), JIT VM access, FIM, vulnerability assessment.</span>
<span class="k">Defender for Storage</span><span class="v">Detecta malware uploads, acceso anómalo a blobs, exfil.</span>
<span class="k">Defender for SQL</span><span class="v">SQLi, acceso anómalo, brute force.</span>
<span class="k">Defender for Containers</span><span class="v">Hardening de K8s, image scanning, runtime threats.</span>
<span class="k">Defender for Key Vault</span><span class="v">Acceso inusual a secretos/claves.</span>
<span class="k">Defender for App Service</span><span class="v">Webshells, ataques a apps.</span>
<span class="k">Defender CSPM (plan)</span><span class="v">Attack path analysis, agentless scanning, cloud security graph.</span>
</div>

<h3>2.4 Regulatory Compliance</h3>
<p>Mapea tu entorno contra estándares: NIST, PCI DSS, ISO 27001, Microsoft Cloud Security Benchmark (MCSB), CIS. Muestra controles cumplidos/incumplidos para auditorías.</p>

<h3>2.5 Recomendaciones y remediación</h3>
<p>Cada recomendación tiene severidad, recursos afectados, pasos de remediación y a menudo <b>Quick Fix</b> (un clic) o <b>Logic App</b> de automatización (workflow automation). Las recomendaciones nutren el Secure Score.</p>

<h3>2.6 Integración con Sentinel y Defender XDR</h3>
<p>Las alertas de MDC se pueden conectar a Microsoft Sentinel (conector) y a Defender XDR. Esto unifica las amenazas cloud con las de endpoint/identity en un solo incidente.</p>

<div class="callout tip"><span class="ico">▲</span><div><b>Para el examen:</b> distingue claramente CSPM (postura/config, preventivo) de CWP (amenazas runtime, detectivo). Y recuerda: <b>Secure Score</b> es de Defender for Cloud (recursos), mientras que <b>Microsoft Secure Score</b> (a secas) es de Defender XDR (identidades, apps, dispositivos M365).</div></div>
`},

{id:"d3",title:"Dominio 3 — Microsoft Sentinel: arquitectura",html:`
<h2>Dominio 3 — Microsoft Sentinel (SIEM/SOAR)</h2>
<div class="lead">Sentinel es el SIEM + SOAR nativo de la nube de Microsoft, construido sobre Azure Monitor Log Analytics. Recoge datos de todo (Microsoft y terceros), los correla con analytics rules, genera incidentes y los automatiza con playbooks.</div>

<h3>3.1 Arquitectura</h3>
<div class="flow">
<span class="step">Data connectors</span><span class="arr">→</span>
<span class="step">Log Analytics Workspace (tablas)</span><span class="arr">→</span>
<span class="step">Analytics rules</span><span class="arr">→</span>
<span class="step">Incidents</span><span class="arr">→</span>
<span class="step">Playbooks (SOAR)</span>
</div>
<p>Sentinel <b>vive sobre un Log Analytics Workspace (LAW)</b>. Toda la ingesta va a tablas dentro del workspace. KQL consulta esas tablas.</p>

<h3>3.2 Data connectors</h3>
<p>Más de 100 conectores nativos. Tipos:</p>
<div class="kvs">
<span class="k">Service-to-service</span><span class="v">Nativo (Defender XDR, Entra ID, Azure Activity, Office 365). Un clic.</span>
<span class="k">API-based</span><span class="v">Apps que exponen API (muchos SaaS).</span>
<span class="k">Agent-based (CEF/Syslog)</span><span class="v">Dispositivos on-prem (firewalls) vía Linux forwarder con AMA (Azure Monitor Agent).</span>
<span class="k">Codeless Connector Platform</span><span class="v">Crear conectores sin código.</span>
</div>

<h3>3.3 Tablas comunes en Log Analytics</h3>
<table>
<tr><th>Tabla</th><th>Contenido</th></tr>
<tr><td>SecurityEvent</td><td>Windows Event Logs (4624, 4625, etc.) vía agente.</td></tr>
<tr><td>SigninLogs</td><td>Inicios de sesión de Entra ID.</td></tr>
<tr><td>AuditLogs</td><td>Cambios administrativos en Entra ID.</td></tr>
<tr><td>AzureActivity</td><td>Operaciones a nivel de suscripción Azure.</td></tr>
<tr><td>DeviceProcessEvents</td><td>Procesos en endpoints (MDE).</td></tr>
<tr><td>DeviceNetworkEvents</td><td>Conexiones de red (MDE).</td></tr>
<tr><td>EmailEvents</td><td>Flujo de correo (MDO).</td></tr>
<tr><td>CommonSecurityLog</td><td>CEF de dispositivos de red.</td></tr>
<tr><td>Syslog</td><td>Logs syslog de Linux/red.</td></tr>
<tr><td>SecurityAlert</td><td>Alertas de los Defenders y otras fuentes.</td></tr>
<tr><td>SecurityIncident</td><td>Incidentes de Sentinel.</td></tr>
</table>

<h3>3.4 Analytics rules (las que crean incidentes)</h3>
<div class="kvs">
<span class="k">Scheduled</span><span class="v">Query KQL que corre en intervalos. La más usada y personalizable.</span>
<span class="k">Microsoft Security</span><span class="v">Crea incidentes Sentinel desde alertas de los Defenders.</span>
<span class="k">Fusion</span><span class="v">ML que correla señales de bajo nivel en incidentes de alta fidelidad multistage.</span>
<span class="k">Anomaly</span><span class="v">Modelos ML de comportamiento (UEBA).</span>
<span class="k">NRT (Near-Real-Time)</span><span class="v">Corre cada minuto para detección casi inmediata.</span>
<span class="k">Threat Intelligence</span><span class="v">Cruza logs con IoCs de feeds TI.</span>
</div>
<h4>Componentes de una scheduled rule</h4>
<ul>
<li><b>Query KQL</b> + frecuencia + lookback period.</li>
<li><b>Entity mapping</b> — mapear campos a entidades (Account, Host, IP, URL) para enriquecer.</li>
<li><b>Alert threshold</b> — cuántos resultados disparan.</li>
<li><b>Event grouping</b> — un incidente por todos los resultados, o uno por cada.</li>
<li><b>Incident settings</b> — agrupar alertas relacionadas en un incidente.</li>
<li><b>Automated response</b> — playbook a ejecutar.</li>
<li><b>MITRE ATT&CK mapping</b> — tácticas y técnicas.</li>
</ul>

<h3>3.5 SOAR — Playbooks y automation</h3>
<div class="kvs">
<span class="k">Playbook</span><span class="v">Una Azure Logic App con conectores. Ejecuta acciones: aislar dispositivo, deshabilitar usuario, abrir ticket, postear en Teams.</span>
<span class="k">Automation rule</span><span class="v">Lógica que dispara playbooks o cambia incidentes (asignar, cerrar, etiquetar) según condiciones.</span>
<span class="k">Trigger</span><span class="v">When an incident is created/updated, o When an alert is created.</span>
</div>

<h3>3.6 Workbooks, Watchlists, Notebooks</h3>
<div class="kvs">
<span class="k">Workbooks</span><span class="v">Dashboards interactivos (visualización de datos del workspace).</span>
<span class="k">Watchlists</span><span class="v">Listas de referencia (VIPs, IPs corp, terminated employees) que se cruzan en queries.</span>
<span class="k">Notebooks</span><span class="v">Jupyter notebooks (Python) para hunting avanzado y data science.</span>
<span class="k">UEBA</span><span class="v">User and Entity Behavior Analytics: baseline de comportamiento, detección de anomalías.</span>
</div>

<h3>3.7 Content hub y Solutions</h3>
<p>El <b>Content Hub</b> ofrece "solutions" empaquetadas (conector + analytics rules + workbooks + playbooks + hunting queries) por producto/escenario, instalables en bloque.</p>
`},

{id:"d4",title:"Dominio 4 — KQL (Kusto Query Language)",html:`
<h2>Dominio 4 — KQL: Kusto Query Language</h2>
<div class="lead">KQL es el lenguaje que consulta los datos en Log Analytics, Sentinel, Defender XDR Advanced Hunting y Azure Data Explorer. Es la habilidad más examinada en SC-200. Lee de izquierda a derecha, encadenando con el pipe <code>|</code>.</div>

<h3>4.1 Estructura básica</h3>
<pre><code>TableName
| where Campo == "valor"
| project Campo1, Campo2
| sort by TimeGenerated desc
| take 10</code></pre>
<p>Siempre empieza por la <b>tabla</b>, luego cada <code>|</code> aplica un operador en secuencia.</p>

<h3>4.2 Operadores de filtrado</h3>
<div class="kvs">
<span class="k">where</span><span class="v">Filtra filas. <code>| where ResultType == "50126"</code></span>
<span class="k">==, !=, &lt;, &gt;</span><span class="v">Comparación. == es case-sensitive; =~ insensible.</span>
<span class="k">contains / has</span><span class="v">contains: substring (lento). has: palabra completa indexada (rápido, preferir).</span>
<span class="k">startswith / endswith</span><span class="v">Prefijo/sufijo.</span>
<span class="k">in / !in</span><span class="v"><code>| where Account in ("admin","root")</code></span>
<span class="k">between</span><span class="v"><code>| where TimeGenerated between (ago(7d) .. now())</code></span>
<span class="k">matches regex</span><span class="v">Coincidencia con expresión regular.</span>
</div>

<h3>4.3 Selección y forma</h3>
<div class="kvs">
<span class="k">project</span><span class="v">Selecciona columnas (como SELECT).</span>
<span class="k">project-away</span><span class="v">Quita columnas.</span>
<span class="k">extend</span><span class="v">Crea columna calculada nueva.</span>
<span class="k">distinct</span><span class="v">Valores únicos.</span>
<span class="k">take / limit</span><span class="v">N filas (sin orden garantizado).</span>
<span class="k">top N by Campo</span><span class="v">N filas ordenadas.</span>
<span class="k">sort by / order by</span><span class="v">Ordena (asc/desc).</span>
</div>

<h3>4.4 Agregación: summarize</h3>
<p>El operador estrella. Agrupa y agrega.</p>
<pre><code>SigninLogs
| where ResultType != 0
| summarize FailedAttempts = count() by UserPrincipalName, IPAddress
| where FailedAttempts > 10
| sort by FailedAttempts desc</code></pre>
<div class="kvs">
<span class="k">count()</span><span class="v">Número de filas.</span>
<span class="k">dcount(Campo)</span><span class="v">Conteo de valores distintos.</span>
<span class="k">sum() / avg() / min() / max()</span><span class="v">Agregaciones numéricas.</span>
<span class="k">make_list() / make_set()</span><span class="v">Junta valores en un array.</span>
<span class="k">arg_max(t,*) / arg_min</span><span class="v">Fila con el valor máx/mín de t.</span>
<span class="k">by</span><span class="v">Agrupa por una o más columnas.</span>
<span class="k">bin(TimeGenerated, 1h)</span><span class="v">Agrupa por ventanas de tiempo.</span>
</div>

<h3>4.5 Tiempo</h3>
<div class="kvs">
<span class="k">ago(7d)</span><span class="v">Hace 7 días. Unidades: d, h, m, s.</span>
<span class="k">now()</span><span class="v">Ahora.</span>
<span class="k">TimeGenerated</span><span class="v">Columna estándar de timestamp.</span>
<span class="k">startofday() / startofweek()</span><span class="v">Trunca al inicio.</span>
</div>

<h3>4.6 Visualización inline</h3>
<pre><code>SecurityEvent
| where TimeGenerated > ago(24h)
| summarize count() by bin(TimeGenerated, 1h)
| render timechart</code></pre>
<p><code>render</code>: timechart, barchart, columnchart, piechart.</p>

<h3>4.7 Joins y enriquecimiento</h3>
<pre><code>DeviceLogonEvents
| where ActionType == "LogonSuccess"
| join kind=inner (
    DeviceProcessEvents
    | where FileName == "powershell.exe"
) on DeviceId</code></pre>
<div class="kvs">
<span class="k">join kind=inner</span><span class="v">Solo coincidencias en ambas tablas.</span>
<span class="k">join kind=leftouter</span><span class="v">Todas de la izquierda + match.</span>
<span class="k">union</span><span class="v">Combina filas de varias tablas.</span>
<span class="k">lookup</span><span class="v">Enriquece desde una watchlist/tabla pequeña.</span>
<span class="k">externaldata</span><span class="v">Lee datos externos (CSV de IoCs).</span>
</div>

<h3>4.8 Watchlists en KQL</h3>
<pre><code>_GetWatchlist('VIPUsers')
| project SearchKey
// luego cruzar:
SigninLogs
| where UserPrincipalName in ((_GetWatchlist('VIPUsers') | project SearchKey))</code></pre>

<h3>4.9 Queries de ejemplo (estilo examen)</h3>
<h4>Password spray (muchos users, mismas pocas pass, una IP)</h4>
<pre><code>SigninLogs
| where ResultType == "50126"   // invalid credentials
| summarize Targets = dcount(UserPrincipalName) by IPAddress, bin(TimeGenerated, 1h)
| where Targets > 20</code></pre>

<h4>Proceso hijo sospechoso de Office</h4>
<pre><code>DeviceProcessEvents
| where InitiatingProcessFileName in ("winword.exe","excel.exe","outlook.exe")
| where FileName in ("powershell.exe","cmd.exe","wscript.exe","mshta.exe")
| project TimeGenerated, DeviceName, InitiatingProcessFileName, FileName, ProcessCommandLine</code></pre>

<h4>Descarga masiva en SharePoint/OneDrive</h4>
<pre><code>CloudAppEvents
| where ActionType == "FileDownloaded"
| summarize Downloads = count() by AccountDisplayName, bin(TimeGenerated, 1h)
| where Downloads > 100</code></pre>

<div class="callout exam"><span class="ico">★</span><div><b>Truco de examen:</b> <code>has</code> es más rápido que <code>contains</code> porque usa el índice de términos. Usa <code>has</code> siempre que busques una palabra completa. <code>contains</code> solo para substrings parciales.</div></div>
`},

{id:"d5",title:"Dominio 5 — Threat Hunting & Respuesta",html:`
<h2>Dominio 5 — Threat Hunting e Incident Response</h2>
<div class="lead">Hunting es búsqueda proactiva de amenazas que evadieron las detecciones. IR es responder a lo detectado. SC-200 examina ambos en Defender XDR y Sentinel.</div>

<h3>5.1 Advanced Hunting en Defender XDR</h3>
<p>Interfaz KQL sobre datos crudos de los Defenders (NO requiere Sentinel). Tablas con prefijo Device*, Email*, Identity*, Cloud*, Alert*.</p>
<table>
<tr><th>Tabla</th><th>Contenido</th></tr>
<tr><td>DeviceProcessEvents</td><td>Creación de procesos.</td></tr>
<tr><td>DeviceNetworkEvents</td><td>Conexiones de red.</td></tr>
<tr><td>DeviceFileEvents</td><td>Creación/modificación de archivos.</td></tr>
<tr><td>DeviceRegistryEvents</td><td>Cambios en registry.</td></tr>
<tr><td>DeviceLogonEvents</td><td>Logons en endpoints.</td></tr>
<tr><td>EmailEvents / EmailAttachmentInfo / EmailUrlInfo</td><td>Email (MDO).</td></tr>
<tr><td>IdentityLogonEvents / IdentityQueryEvents</td><td>Identidad (MDI).</td></tr>
<tr><td>CloudAppEvents</td><td>Actividad en apps cloud (MDCA).</td></tr>
<tr><td>AlertEvidence / AlertInfo</td><td>Alertas y su evidencia.</td></tr>
</table>

<h3>5.2 Custom detections</h3>
<p>Una query de Advanced Hunting se puede convertir en <b>custom detection rule</b>: corre en schedule, genera alertas e incidentes, y puede ejecutar acciones de respuesta automáticas (aislar dispositivo, ejecutar AV scan).</p>

<h3>5.3 Hunting en Sentinel</h3>
<div class="kvs">
<span class="k">Hunting queries</span><span class="v">Biblioteca de queries (muchas mapeadas a MITRE ATT&CK) que ejecutas bajo demanda.</span>
<span class="k">Bookmarks</span><span class="v">Guardas resultados interesantes para investigar luego o adjuntar a un incidente.</span>
<span class="k">Livestream</span><span class="v">Ejecuta una query en tiempo real para ver eventos según llegan.</span>
<span class="k">Notebooks</span><span class="v">Jupyter + Python (MSTICPy) para hunting avanzado.</span>
</div>

<h3>5.4 Proceso de investigación de un incidente</h3>
<div class="flow">
<span class="step">Triage</span><span class="arr">→</span>
<span class="step">Scope (entidades)</span><span class="arr">→</span>
<span class="step">Attack story / timeline</span><span class="arr">→</span>
<span class="step">Contener</span><span class="arr">→</span>
<span class="step">Erradicar</span><span class="arr">→</span>
<span class="step">Recuperar</span><span class="arr">→</span>
<span class="step">Cerrar + lessons</span>
</div>
<ol>
<li><b>Triage:</b> ¿real o FP? severidad, alcance inicial.</li>
<li><b>Investigar:</b> revisar todas las alertas del incidente, el grafo, entidades (usuarios, hosts, IPs).</li>
<li><b>Profundizar:</b> Advanced Hunting para pivotar (¿qué más tocó ese host/usuario?).</li>
<li><b>Contener:</b> aislar dispositivo, deshabilitar/forzar reset de usuario, bloquear IoCs.</li>
<li><b>Remediar:</b> AIR, eliminar persistencia, parchear.</li>
<li><b>Cerrar:</b> clasificar (TP/FP/Informational), determination, notas.</li>
</ol>

<h3>5.5 Acciones de respuesta sobre entidades</h3>
<div class="kvs">
<span class="k">Sobre dispositivo</span><span class="v">Isolate, AV scan, restrict app execution, collect package, live response.</span>
<span class="k">Sobre usuario</span><span class="v">Mark as compromised, disable, force sign-out, require password reset (Entra ID).</span>
<span class="k">Sobre email</span><span class="v">Soft delete, hard delete, move to junk, ZAP.</span>
<span class="k">Sobre archivo</span><span class="v">Block (add indicator), quarantine, stop and quarantine.</span>
<span class="k">Sobre IP/URL/dominio</span><span class="v">Crear indicador (allow/block) en MDE.</span>
</div>

<h3>5.6 Threat Intelligence en Sentinel</h3>
<p>Sentinel ingiere IoCs vía conector TI (TAXII, MISP, Microsoft Defender Threat Intelligence). Los IoCs viven en la tabla <code>ThreatIntelligenceIndicator</code> y las reglas TI los cruzan con tus logs.</p>

<h3>5.7 Notebooks y MSTICPy</h3>
<p>Para hunting que excede SQL/KQL: análisis estadístico, geo-IP, descomposición de tiempo, ML. MSTICPy es la librería Python de Microsoft para SecOps.</p>

<div class="callout analogy"><span class="ico">◐</span><div><b>Analogía hunting vs detección:</b> una analytics rule es una trampa para ratones colocada donde sabes que pasan. Hunting es coger la linterna y buscar al ratón por toda la casa siguiendo migas — encuentras los que esquivaron las trampas.</div></div>
`}
],

questions: [
{d:0,q:"¿Qué tres pilares de producto cubre principalmente SC-200?",opts:["Word, Excel, Teams","Defender XDR, Microsoft Sentinel, Defender for Cloud","Azure VMs, Storage, SQL","Intune, Autopilot, Endpoint Manager"],c:1,e:"SC-200 valida operaciones de seguridad con Defender XDR, Microsoft Sentinel (SIEM/SOAR) y Defender for Cloud."},
{d:1,q:"¿Qué hace Defender XDR que un EDR tradicional NO hace?",opts:["Solo escanea endpoints","Correla señales de endpoint, email, identidad y cloud apps en un incidente único","Solo cifra discos","Reemplaza al firewall"],c:1,e:"XDR (Extended Detection and Response) correla múltiples dominios en una sola attack story; EDR solo ve endpoints."},
{d:1,q:"Acción de MDE que aísla un dispositivo pero mantiene su conexión con el portal de Defender:",opts:["Full isolation","Selective isolation","Restrict app execution","Run AV scan"],c:1,e:"Selective isolation corta la red pero deja la comunicación con el servicio Defender para seguir gestionándolo."},
{d:1,q:"¿Qué hace ZAP (Zero-hour Auto Purge) en Defender for Office 365?",opts:["Bloquea adjuntos antes de entregar","Retira retroactivamente emails maliciosos ya entregados al buzón","Cifra el correo","Crea reglas de firewall"],c:1,e:"ZAP elimina retroactivamente mensajes que resultan maliciosos DESPUÉS de haber sido entregados."},
{d:1,q:"¿Qué detecta Defender for Identity (MDI)?",opts:["Malware en endpoints","Ataques contra Active Directory on-prem (PtH, Golden Ticket, DCSync)","Phishing en email","Misconfiguraciones cloud"],c:1,e:"MDI instala un sensor en los DCs y detecta recon, lateral movement y domain dominance en AD."},
{d:1,q:"¿Qué son las reglas ASR en MDE?",opts:["Reglas de routing","Attack Surface Reduction: bloquean comportamientos abusados por malware","Reglas DNS","Reglas de backup"],c:1,e:"ASR bloquea técnicas comunes (Office creando procesos hijos, robo de LSASS, scripts ofuscados). Modos audit/block/warn."},
{d:2,q:"¿Diferencia entre CSPM y CWP en Defender for Cloud?",opts:["Son lo mismo","CSPM evalúa configuración/postura; CWP detecta amenazas en runtime","CSPM es para AWS, CWP para Azure","CWP es gratis, CSPM de pago"],c:1,e:"CSPM = postura (config, Secure Score, recomendaciones). CWP = protección en runtime con planes Defender por recurso."},
{d:2,q:"¿Qué mide el Secure Score de Defender for Cloud?",opts:["Velocidad de red","Porcentaje de recomendaciones de seguridad implementadas","Coste mensual","Uptime"],c:1,e:"Secure Score 0-100% refleja cuántas recomendaciones (agrupadas en security controls) has aplicado."},
{d:2,q:"Plan Defender que aporta JIT VM access y FIM:",opts:["Defender for Storage","Defender for Servers","Defender for SQL","Defender for Key Vault"],c:1,e:"Defender for Servers integra MDE, Just-in-Time VM access, File Integrity Monitoring y vulnerability assessment."},
{d:3,q:"Microsoft Sentinel está construido sobre:",opts:["SQL Server","Un Log Analytics Workspace (Azure Monitor)","Active Directory","SharePoint"],c:1,e:"Sentinel vive sobre un Log Analytics Workspace. Toda la ingesta va a tablas KQL del workspace."},
{d:3,q:"¿Qué tipo de analytics rule usa ML para correlar señales de bajo nivel en incidentes multistage?",opts:["Scheduled","Fusion","NRT","Microsoft Security"],c:1,e:"Fusion usa machine learning para combinar señales dispares en incidentes de alta fidelidad multistage."},
{d:3,q:"¿Qué es un playbook en Sentinel?",opts:["Un dashboard","Una Azure Logic App que automatiza acciones de respuesta (SOAR)","Una tabla de logs","Una watchlist"],c:1,e:"Un playbook es una Logic App con conectores que ejecuta respuestas: aislar, deshabilitar usuario, abrir ticket, notificar."},
{d:3,q:"Conector recomendado para traer logs de un firewall on-prem a Sentinel:",opts:["Service-to-service nativo","CEF/Syslog vía Linux forwarder con AMA","SharePoint","RDP"],c:1,e:"Dispositivos on-prem (firewalls) envían CEF/Syslog a un forwarder Linux con Azure Monitor Agent que reenvía a Sentinel."},
{d:3,q:"¿Para qué sirve una Watchlist en Sentinel?",opts:["Bloquear IPs","Lista de referencia (VIPs, IPs corp) que se cruza en queries de detección/hunting","Cifrar logs","Hacer backup"],c:1,e:"Watchlists son datos de referencia importados que enriquecen y filtran queries (ej: usuarios VIP, empleados dados de baja)."},
{d:4,q:"En KQL, ¿qué operador es más eficiente para buscar una palabra completa?",opts:["contains","has","matches","like"],c:1,e:"has usa el índice de términos (rápido). contains hace substring scan (lento). Preferir has para palabras completas."},
{d:4,q:"En KQL, ¿qué operador agrupa y agrega datos?",opts:["project","where","summarize","sort"],c:2,e:"summarize agrupa por columnas (by) y aplica agregaciones (count, dcount, sum, avg, make_list...)."},
{d:4,q:"¿Qué hace 'bin(TimeGenerated, 1h)' en KQL?",opts:["Borra datos","Agrupa eventos en ventanas de 1 hora","Ordena por tiempo","Filtra la última hora"],c:1,e:"bin() trunca timestamps a intervalos (buckets). Esencial para series temporales y detección de picos por hora."},
{d:4,q:"KQL: para seleccionar solo ciertas columnas se usa:",opts:["take","project","distinct","render"],c:1,e:"project selecciona/renombra columnas, equivalente a SELECT. project-away quita columnas."},
{d:4,q:"¿Qué columna estándar de timestamp tienen las tablas de Log Analytics?",opts:["Timestamp","TimeGenerated","EventTime","CreatedAt"],c:1,e:"TimeGenerated es la columna estándar de tiempo en Azure Monitor / Sentinel."},
{d:5,q:"Advanced Hunting en Defender XDR requiere tener Microsoft Sentinel desplegado:",opts:["Verdadero","Falso — funciona sobre los datos de los Defenders sin Sentinel","Solo con licencia E5","Solo en AWS"],c:1,e:"Advanced Hunting es nativo de Defender XDR (security.microsoft.com) sobre tablas Device*/Email*/Identity*, sin necesidad de Sentinel."},
{d:5,q:"Una query de Advanced Hunting que quieres que genere alertas en schedule se convierte en:",opts:["Watchlist","Custom detection rule","Workbook","Playbook"],c:1,e:"Custom detection rules ejecutan una query en schedule, generan alertas/incidentes y pueden disparar acciones de respuesta."},
{d:5,q:"Acción de respuesta sobre una cuenta de usuario comprometida en Entra ID:",opts:["Reiniciar el router","Force sign-out + require password reset + disable","Cifrar el disco","Borrar el buzón"],c:1,e:"Sobre usuario: marcar como comprometido, deshabilitar, forzar cierre de sesión, exigir reset de contraseña."},
{d:5,q:"En Sentinel, ¿qué guardas para marcar resultados de hunting interesantes?",opts:["Bookmarks","Playbooks","Connectors","Workbooks"],c:0,e:"Los bookmarks guardan resultados de hunting para investigar después o adjuntarlos a un incidente."},
{d:5,q:"Tabla de Advanced Hunting con la creación de procesos en endpoints:",opts:["DeviceNetworkEvents","DeviceProcessEvents","EmailEvents","SigninLogs"],c:1,e:"DeviceProcessEvents registra creación de procesos con línea de comando, proceso padre, hashes, etc."}
],

flashcards: [
{d:0,q:"¿Qué valida la certificación SC-200?",a:"Capacidad de un Security Operations Analyst para detectar, investigar y responder amenazas usando Microsoft Defender XDR, Microsoft Sentinel y Defender for Cloud."},
{d:0,q:"¿Qué cuatro Defenders forman Microsoft Defender XDR?",a:"Defender for Endpoint (MDE), Defender for Office 365 (MDO), Defender for Identity (MDI) y Defender for Cloud Apps (MDCA)."},
{d:1,q:"¿Qué diferencia XDR de EDR?",a:"EDR solo ve endpoints. XDR correla endpoint + email + identidad + cloud apps en un único incidente con su attack story completa."},
{d:1,q:"¿Qué hacen Safe Attachments y Safe Links en MDO?",a:"Safe Attachments detona adjuntos en sandbox antes de entregar. Safe Links reescribe URLs y las verifica en el momento del clic (time-of-click)."},
{d:1,q:"¿Qué son las reglas ASR?",a:"Attack Surface Reduction: reglas que bloquean comportamientos típicos de malware (Office creando procesos hijo, robo de LSASS, scripts ofuscados, ejecutables de email). Modos: audit, block, warn."},
{d:1,q:"¿Qué ataques de AD detecta Defender for Identity?",a:"Recon (enum cuentas, LDAP/DNS), credenciales comprometidas (brute force, spray), lateral movement (PtH, PtT) y domain dominance (Golden Ticket, DCSync, DCShadow, Skeleton Key)."},
{d:2,q:"¿Diferencia entre CSPM y CWP en Defender for Cloud?",a:"CSPM (Cloud Security Posture Management): evalúa configuración, da Secure Score y recomendaciones. CWP (Cloud Workload Protection): detecta amenazas en runtime con planes Defender por recurso."},
{d:2,q:"¿Qué planes Defender for Cloud recuerdas?",a:"Servers, Storage, SQL, Containers, Key Vault, App Service, Resource Manager, DNS, APIs, y el plan Defender CSPM (attack path analysis, agentless scanning)."},
{d:3,q:"¿Sobre qué se construye Microsoft Sentinel?",a:"Sobre un Log Analytics Workspace (Azure Monitor). Los conectores ingieren datos a tablas, KQL las consulta, las analytics rules generan incidentes."},
{d:3,q:"¿Qué tipos de analytics rules hay en Sentinel?",a:"Scheduled (KQL), Microsoft Security (de alertas Defender), Fusion (ML multistage), Anomaly (ML/UEBA), NRT (near-real-time) y Threat Intelligence."},
{d:3,q:"¿Diferencia entre playbook y automation rule en Sentinel?",a:"Playbook = Azure Logic App que ejecuta acciones (SOAR). Automation rule = lógica que dispara playbooks o modifica incidentes (asignar, cerrar, etiquetar) según condiciones."},
{d:3,q:"¿Qué es UEBA en Sentinel?",a:"User and Entity Behavior Analytics: construye un baseline de comportamiento de usuarios/entidades y detecta anomalías que delatan cuentas comprometidas o insiders."},
{d:4,q:"¿Cuál es la estructura básica de una query KQL?",a:"TableName | where (filtro) | summarize/project | sort by | take. Se lee de izquierda a derecha encadenando operadores con el pipe |."},
{d:4,q:"En KQL, ¿cuándo usar 'has' vs 'contains'?",a:"has busca palabras completas usando el índice (rápido). contains busca substrings (lento, full scan). Preferir has salvo que necesites substring parcial."},
{d:4,q:"¿Qué hace summarize en KQL? Da un ejemplo.",a:"Agrupa y agrega. Ej: SigninLogs | where ResultType!=0 | summarize Fails=count() by UserPrincipalName, IPAddress | where Fails>10"},
{d:4,q:"¿Cómo se filtra por tiempo en KQL las últimas 24h?",a:"| where TimeGenerated > ago(24h). Unidades: d (días), h (horas), m (minutos), s (segundos). now() es el instante actual."},
{d:5,q:"¿Advanced Hunting necesita Sentinel?",a:"No. Advanced Hunting es nativo de Defender XDR sobre las tablas Device*/Email*/Identity*/Cloud*. Sentinel es opcional (SIEM por encima)."},
{d:5,q:"¿Cómo se convierte una query de hunting en detección automática?",a:"Guardándola como Custom Detection Rule (Defender XDR) o Scheduled Analytics Rule (Sentinel): corre en schedule, genera alertas/incidentes y puede ejecutar respuestas."},
{d:5,q:"Acciones de respuesta sobre un dispositivo en MDE:",a:"Isolate (full/selective), Run AV scan, Restrict app execution, Collect investigation package, Live Response (shell remoto)."},
{d:5,q:"¿Qué es un bookmark en hunting de Sentinel?",a:"Guarda resultados interesantes de una query de hunting para investigarlos después o adjuntarlos a un incidente."}
]
};
