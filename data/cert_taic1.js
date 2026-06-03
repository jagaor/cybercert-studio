window.CERT_DATA = window.CERT_DATA || {};

// === TAI — Técnico Auxiliar de Informática del Estado (C1) ===
CERT_DATA.taic1 = {
theory: [
{id:"d0",title:"Introducción a la oposición TAI",html:`
<h2>TAI — Técnico Auxiliar de Informática de la AGE (Grupo C1)</h2>
<div class="lead">Oposición al Cuerpo de Técnicos Auxiliares de Informática de la Administración General del Estado. Acceso por grupo C1 (requiere Bachillerato/Técnico FP). Salida: puestos de soporte, microinformática, administración de sistemas y aplicaciones en ministerios y organismos públicos.</div>

<h3>Estructura del proceso selectivo</h3>
<p>Varía según convocatoria (turno libre, promoción interna), pero típicamente:</p>
<table>
<tr><th>Ejercicio</th><th>Formato</th><th>Contenido</th></tr>
<tr><td><b>Primer ejercicio</b></td><td>Test (~100 preguntas + reserva)</td><td>Todo el temario: bloque general (normativa) + bloque específico (informática).</td></tr>
<tr><td><b>Segundo ejercicio</b></td><td>Supuesto práctico</td><td>Caso práctico de informática y/o ofimática (a veces con ordenador).</td></tr>
</table>
<p>Penalización por errores habitual en el test (las mal restan una fracción de las bien). Sistema de concurso-oposición en promoción interna (se valoran méritos).</p>

<h3>Bloques del temario oficial</h3>
<div class="minicards">
<div class="minicard"><div class="h">Bloque I — Organización del Estado y normativa</div><p>Constitución, organización de la AGE, procedimiento administrativo, transparencia, igualdad, protección de datos, ENS, ENI.</p></div>
<div class="minicard"><div class="h">Bloque II — Tecnología básica</div><p>Hardware, arquitectura de computadores, periféricos, sistemas operativos.</p></div>
<div class="minicard"><div class="h">Bloque III — Desarrollo de sistemas</div><p>Programación, bases de datos, ingeniería del software, estructuras de datos.</p></div>
<div class="minicard"><div class="h">Bloque IV — Sistemas y comunicaciones</div><p>Redes, internet, administración de sistemas, seguridad, cloud.</p></div>
<div class="minicard"><div class="h">Ofimática y Admón. electrónica</div><p>Procesador de textos, hojas de cálculo, correo, firma electrónica, sede electrónica.</p></div>
</div>

<div class="callout tip"><span class="ico">▲</span><div><b>Estrategia:</b> el bloque de <b>normativa</b> (Bloque I) suele decidir la oposición porque mucha gente domina lo técnico pero descuida las leyes. Memoriza artículos clave, plazos y números de ley. La parte técnica de TAI es más asequible que la de TIC (A2) o Sistemas (A1).</div></div>

<div class="callout warn"><span class="ico">⚠</span><div>Las leyes se actualizan. Verifica siempre la <b>convocatoria vigente</b> en el BOE y el temario oficial publicado por el INAP/Función Pública. Este material es apoyo de estudio, no sustituye la fuente oficial.</div></div>
`},

{id:"d1",title:"Bloque I — Organización del Estado y normativa",html:`
<h2>Bloque I — Organización del Estado, Procedimiento y Normativa</h2>
<div class="lead">El bloque que marca la diferencia. Constitución, organización administrativa, procedimiento, transparencia, igualdad, protección de datos y los Esquemas Nacionales (ENS, ENI).</div>

<h3>1.1 La Constitución Española de 1978</h3>
<div class="kvs">
<span class="k">Estructura</span><span class="v">Preámbulo + 169 artículos + disposiciones. Título Preliminar + 10 Títulos.</span>
<span class="k">Título I</span><span class="v">Derechos y deberes fundamentales (arts. 10-55). Los derechos fundamentales (arts. 15-29) tienen protección reforzada (recurso de amparo).</span>
<span class="k">Título II</span><span class="v">La Corona.</span>
<span class="k">Título III</span><span class="v">Las Cortes Generales (Congreso + Senado, bicameral).</span>
<span class="k">Título IV</span><span class="v">El Gobierno y la Administración.</span>
<span class="k">Título VI</span><span class="v">El Poder Judicial.</span>
<span class="k">Título VIII</span><span class="v">Organización territorial del Estado (CCAA, provincias, municipios).</span>
</div>
<p><b>Valores superiores (art. 1):</b> libertad, justicia, igualdad y pluralismo político. España = Estado social y democrático de Derecho. Forma política: Monarquía parlamentaria.</p>
<p><b>Reforma constitucional:</b> Título X. Procedimiento agravado para Título Preliminar, derechos fundamentales y Corona.</p>

<h3>1.2 Organización de la AGE — Ley 40/2015 (Régimen Jurídico del Sector Público)</h3>
<div class="kvs">
<span class="k">Principios de actuación</span><span class="v">Eficacia, jerarquía, descentralización, desconcentración, coordinación, eficiencia, servicio a los ciudadanos.</span>
<span class="k">Órganos superiores</span><span class="v">Ministros y Secretarios de Estado.</span>
<span class="k">Órganos directivos</span><span class="v">Subsecretarios, Secretarios Generales, Directores Generales, Subdirectores Generales.</span>
<span class="k">AGE periférica</span><span class="v">Delegados y Subdelegados del Gobierno.</span>
<span class="k">Sector público institucional</span><span class="v">Organismos autónomos, entidades públicas empresariales, agencias.</span>
</div>
<p>La Ley 40/2015 también regula el <b>funcionamiento electrónico del sector público</b>: sede electrónica, portal de internet, sistemas de identificación, actuación administrativa automatizada, intercambio de datos.</p>

<h3>1.3 Procedimiento administrativo — Ley 39/2015 (Procedimiento Administrativo Común)</h3>
<div class="kvs">
<span class="k">Interesados</span><span class="v">Quien promueve, los que tengan derechos afectados, etc. (art. 4).</span>
<span class="k">Derechos del ciudadano (art. 13)</span><span class="v">Comunicarse electrónicamente, no aportar documentos ya en poder de la Admón., etc.</span>
<span class="k">Obligados a relacionarse electrónicamente (art. 14)</span><span class="v">Personas jurídicas, entidades sin personalidad, profesionales colegiados, empleados públicos.</span>
<span class="k">Fases del procedimiento</span><span class="v">Iniciación (de oficio o a instancia de parte), Ordenación, Instrucción (alegaciones, prueba, informes, audiencia), Finalización (resolución, desistimiento, renuncia, caducidad).</span>
<span class="k">Plazos</span><span class="v">Si no se fija, 3 meses para resolver. Cómputo en días hábiles (sábados NO son hábiles desde 2015). Silencio administrativo: positivo (general en solicitudes) o negativo (según ley).</span>
<span class="k">Recursos administrativos</span><span class="v">Alzada (ante superior jerárquico, 1 mes), Potestativo de reposición (ante el mismo órgano, 1 mes), Extraordinario de revisión.</span>
<span class="k">Notificaciones</span><span class="v">Preferentemente electrónicas. Se entienden rechazadas si no se accede en 10 días naturales.</span>
</div>

<h3>1.4 Transparencia — Ley 19/2013</h3>
<p>Ley de Transparencia, Acceso a la Información Pública y Buen Gobierno. Tres pilares:</p>
<ul>
<li><b>Publicidad activa:</b> la Admón. publica proactivamente info institucional, organizativa, económica.</li>
<li><b>Derecho de acceso:</b> ciudadanos pueden solicitar información pública (con límites: seguridad, datos personales, etc.).</li>
<li><b>Buen gobierno:</b> principios éticos para altos cargos. Consejo de Transparencia y Buen Gobierno (CTBG).</li>
</ul>

<h3>1.5 Igualdad efectiva</h3>
<p><b>Ley Orgánica 3/2007</b> para la igualdad efectiva de mujeres y hombres. Principios: igualdad de trato, no discriminación por sexo, transversalidad, acciones positivas, lenguaje no sexista, planes de igualdad en las empresas y AAPP.</p>

<h3>1.6 Protección de datos — RGPD + LOPDGDD</h3>
<p><b>RGPD (Reglamento UE 2016/679)</b> + <b>LOPDGDD (Ley Orgánica 3/2018)</b>.</p>
<div class="kvs">
<span class="k">Principios (art. 5 RGPD)</span><span class="v">Licitud/lealtad/transparencia, limitación de fin, minimización, exactitud, limitación del plazo de conservación, integridad y confidencialidad, responsabilidad proactiva (accountability).</span>
<span class="k">Bases de licitud (art. 6)</span><span class="v">Consentimiento, contrato, obligación legal, interés vital, interés público, interés legítimo.</span>
<span class="k">Derechos del interesado</span><span class="v">Acceso, Rectificación, Supresión (derecho al olvido), Oposición, Limitación, Portabilidad, no ser objeto de decisiones automatizadas. Mnemotecnia ARSOLP.</span>
<span class="k">Roles</span><span class="v">Responsable del tratamiento (decide), Encargado (procesa por cuenta del responsable), DPD/DPO (Delegado de Protección de Datos, obligatorio en sector público).</span>
<span class="k">Brechas</span><span class="v">Notificar a la AEPD en 72h; a los afectados si alto riesgo.</span>
<span class="k">Autoridad de control</span><span class="v">AEPD (Agencia Española de Protección de Datos).</span>
<span class="k">EIPD</span><span class="v">Evaluación de Impacto en Protección de Datos: obligatoria si hay alto riesgo.</span>
</div>

<h3>1.7 Esquema Nacional de Seguridad (ENS) — RD 311/2022</h3>
<p>Establece la política de seguridad para el uso de medios electrónicos en las AAPP. Es de obligado cumplimiento.</p>
<div class="kvs">
<span class="k">Dimensiones de seguridad</span><span class="v">Disponibilidad, Integridad, Confidencialidad, Autenticidad, Trazabilidad (DICAT).</span>
<span class="k">Niveles</span><span class="v">BAJO, MEDIO, ALTO. Se asigna a cada dimensión según el impacto de un incidente.</span>
<span class="k">Categoría del sistema</span><span class="v">La mayor de los niveles de sus dimensiones.</span>
<span class="k">Tipos de medidas</span><span class="v">Marco organizativo (org), Marco operacional (op), Medidas de protección (mp).</span>
<span class="k">Principios básicos</span><span class="v">Seguridad integral, gestión de riesgos, prevención-detección-respuesta, líneas de defensa, reevaluación periódica, función diferenciada.</span>
</div>
<p>Relacionado: <b>CCN-STIC</b> (guías del Centro Criptológico Nacional), <b>CCN-CERT</b> (capacidad de respuesta a incidentes del sector público).</p>

<h3>1.8 Esquema Nacional de Interoperabilidad (ENI) — RD 4/2010</h3>
<p>Criterios para que los sistemas de las AAPP puedan interoperar (intercambiar datos y servicios). Dimensiones: organizativa, semántica y técnica. Relacionado: estándares abiertos, documento/expediente electrónico, política de firma, digitalización.</p>

<h3>1.9 Administración electrónica — conceptos clave</h3>
<div class="kvs">
<span class="k">Sede electrónica</span><span class="v">Dirección electrónica titularidad de la Admón. para relaciones con ciudadanos.</span>
<span class="k">Registro electrónico</span><span class="v">Recepción y remisión de documentos. Registro Electrónico General de la AGE.</span>
<span class="k">Identificación vs Firma</span><span class="v">Identificación: acreditar quién eres. Firma: manifestar voluntad/consentimiento.</span>
<span class="k">Sistemas</span><span class="v">Cl@ve (identificación), certificado electrónico (FNMT, DNIe), Cl@ve PIN, Cl@ve Permanente.</span>
<span class="k">Cl@ve</span><span class="v">Plataforma común de identificación y firma para las AAPP.</span>
</div>
`},

{id:"d2",title:"Bloque II — Hardware y arquitectura",html:`
<h2>Bloque II — Tecnología Básica: Hardware y Arquitectura</h2>
<div class="lead">Fundamentos de cómo funciona un ordenador por dentro: CPU, memoria, almacenamiento, buses, periféricos y representación de la información.</div>

<h3>2.1 Arquitectura von Neumann</h3>
<p>Modelo base de los ordenadores actuales. Componentes:</p>
<div class="kvs">
<span class="k">CPU (UCP)</span><span class="v">Unidad de Control (UC) + Unidad Aritmético-Lógica (ALU) + registros.</span>
<span class="k">Memoria principal</span><span class="v">Almacena datos e instrucciones (la clave de von Neumann: programa almacenado).</span>
<span class="k">Unidades de E/S</span><span class="v">Entrada/Salida (teclado, pantalla, disco).</span>
<span class="k">Buses</span><span class="v">Datos, direcciones y control conectan los componentes.</span>
</div>
<p><b>Ciclo de instrucción:</b> Fetch (búsqueda) → Decode (decodificación) → Execute (ejecución) → Store. Gobernado por el reloj (clock) en GHz.</p>

<h3>2.2 La CPU</h3>
<div class="kvs">
<span class="k">Núcleos (cores)</span><span class="v">Unidades de procesamiento independientes. Multi-core = paralelismo real.</span>
<span class="k">Hilos (threads)</span><span class="v">Hyper-Threading/SMT: 2 hilos por core.</span>
<span class="k">Caché</span><span class="v">Memoria ultrarrápida cerca del core: L1 (más rápida, más pequeña), L2, L3 (compartida).</span>
<span class="k">Frecuencia</span><span class="v">GHz = ciclos/segundo. Turbo Boost sube frecuencia bajo demanda.</span>
<span class="k">ISA</span><span class="v">Arquitectura del conjunto de instrucciones: x86-64 (Intel/AMD), ARM (móviles, Apple Silicon), RISC-V.</span>
<span class="k">CISC vs RISC</span><span class="v">CISC: instrucciones complejas (x86). RISC: instrucciones simples y rápidas (ARM).</span>
</div>

<h3>2.3 Memoria</h3>
<h4>Jerarquía de memoria (más rápida y cara arriba)</h4>
<div class="flow">
<span class="step">Registros</span><span class="arr">→</span>
<span class="step">Caché L1/L2/L3</span><span class="arr">→</span>
<span class="step">RAM</span><span class="arr">→</span>
<span class="step">SSD/Disco</span><span class="arr">→</span>
<span class="step">Cinta/backup</span>
</div>
<div class="kvs">
<span class="k">RAM</span><span class="v">Memoria principal, volátil. DRAM (refresco) vs SRAM (caché, sin refresco). DDR4/DDR5.</span>
<span class="k">ROM</span><span class="v">Solo lectura, no volátil. Firmware. Variantes: PROM, EPROM, EEPROM, Flash.</span>
<span class="k">Memoria virtual</span><span class="v">El SO usa disco (swap/paginación) como extensión de la RAM.</span>
<span class="k">Volátil vs no volátil</span><span class="v">Volátil pierde datos al apagar (RAM). No volátil los mantiene (ROM, SSD, HDD).</span>
</div>

<h3>2.4 Almacenamiento</h3>
<table>
<tr><th>Tipo</th><th>Tecnología</th><th>Notas</th></tr>
<tr><td>HDD</td><td>Discos magnéticos giratorios</td><td>Lento, barato, mecánico. RPM (5400/7200).</td></tr>
<tr><td>SSD SATA</td><td>Flash NAND</td><td>~550 MB/s. Sin partes móviles.</td></tr>
<tr><td>SSD NVMe (M.2)</td><td>Flash sobre PCIe</td><td>Mucho más rápido (GB/s).</td></tr>
<tr><td>RAID</td><td>Conjunto de discos</td><td>RAID 0 (stripe, velocidad), 1 (espejo, redundancia), 5 (paridad), 6 (doble paridad), 10 (espejo+stripe).</td></tr>
</table>

<h3>2.5 Placa base, buses y firmware</h3>
<div class="kvs">
<span class="k">Placa base</span><span class="v">Conecta todos los componentes. Chipset, zócalo CPU, ranuras RAM, PCIe.</span>
<span class="k">BIOS</span><span class="v">Firmware clásico de arranque (legacy, MBR).</span>
<span class="k">UEFI</span><span class="v">Firmware moderno. Soporta Secure Boot, GPT, discos &gt;2TB, arranque rápido.</span>
<span class="k">Buses</span><span class="v">PCIe (tarjetas), SATA/NVMe (disco), USB (periféricos), Thunderbolt.</span>
</div>

<h3>2.6 Representación de la información</h3>
<div class="kvs">
<span class="k">Bit / Byte</span><span class="v">1 bit = 0/1. 1 byte = 8 bits.</span>
<span class="k">Sistemas numéricos</span><span class="v">Binario (base 2), octal (8), decimal (10), hexadecimal (16). Hex usa 0-9 y A-F.</span>
<span class="k">Múltiplos</span><span class="v">KB/MB/GB/TB (decimal, 10^3) vs KiB/MiB/GiB (binario, 2^10=1024).</span>
<span class="k">Codificación de caracteres</span><span class="v">ASCII (7 bits), ISO-8859-1 (Latin-1), Unicode/UTF-8 (variable, universal).</span>
<span class="k">Representación numérica</span><span class="v">Complemento a 2 (enteros con signo), coma flotante IEEE 754 (decimales).</span>
</div>
<div class="callout example"><span class="ico">▶</span><div><b>Conversión rápida:</b> binario 1010 = 8+0+2+0 = <b>10</b> decimal = <b>A</b> hex. Cada 4 bits = 1 dígito hexadecimal.</div></div>
`},

{id:"d3",title:"Bloque II — Sistemas operativos",html:`
<h2>Bloque II — Sistemas Operativos</h2>
<div class="lead">El SO gestiona el hardware y ofrece servicios a las aplicaciones: procesos, memoria, archivos, dispositivos y usuarios.</div>

<h3>3.1 Funciones del sistema operativo</h3>
<div class="kvs">
<span class="k">Gestión de procesos</span><span class="v">Crear, planificar (scheduling), sincronizar y terminar procesos.</span>
<span class="k">Gestión de memoria</span><span class="v">Asignar/liberar RAM, memoria virtual, paginación, segmentación.</span>
<span class="k">Sistema de archivos</span><span class="v">Organizar datos en archivos y directorios.</span>
<span class="k">Gestión de E/S</span><span class="v">Controladores (drivers), buffers, spooling.</span>
<span class="k">Seguridad y usuarios</span><span class="v">Autenticación, permisos, cuentas.</span>
</div>

<h3>3.2 Procesos e hilos</h3>
<div class="kvs">
<span class="k">Proceso</span><span class="v">Programa en ejecución con su propio espacio de memoria.</span>
<span class="k">Hilo (thread)</span><span class="v">Unidad de ejecución dentro de un proceso; comparten memoria del proceso.</span>
<span class="k">Estados</span><span class="v">Nuevo, Listo (ready), En ejecución (running), Bloqueado (waiting), Terminado.</span>
<span class="k">Planificación (scheduling)</span><span class="v">FCFS, SJF, Round Robin (quantum), por prioridades, multinivel.</span>
<span class="k">Concurrencia</span><span class="v">Secciones críticas, semáforos, mutex, interbloqueo (deadlock).</span>
<span class="k">Deadlock</span><span class="v">Condiciones de Coffman: exclusión mutua, retención y espera, no apropiación, espera circular.</span>
</div>

<h3>3.3 Sistemas de archivos</h3>
<table>
<tr><th>Sistema</th><th>SO</th><th>Notas</th></tr>
<tr><td>NTFS</td><td>Windows</td><td>Permisos ACL, journaling, cifrado EFS, compresión.</td></tr>
<tr><td>FAT32 / exFAT</td><td>Multiplataforma</td><td>FAT32 límite 4GB/archivo. exFAT para USB grandes.</td></tr>
<tr><td>ext4</td><td>Linux</td><td>Journaling, estándar en muchas distros.</td></tr>
<tr><td>XFS / Btrfs / ZFS</td><td>Linux/Unix</td><td>Avanzados: snapshots, grandes volúmenes.</td></tr>
<tr><td>APFS</td><td>macOS</td><td>Snapshots, cifrado, optimizado SSD.</td></tr>
</table>

<h3>3.4 Windows</h3>
<div class="kvs">
<span class="k">Versiones</span><span class="v">Home, Pro, Enterprise, Education. Server: 2019, 2022.</span>
<span class="k">Active Directory</span><span class="v">Directorio de usuarios/equipos. Dominios, bosques, OU, GPO.</span>
<span class="k">GPO</span><span class="v">Group Policy Objects: configuración centralizada.</span>
<span class="k">Herramientas</span><span class="v">Administrador de tareas, Visor de eventos, regedit, services.msc, PowerShell, CMD.</span>
<span class="k">Comandos</span><span class="v">dir, cd, ipconfig, ping, sfc /scannow, chkdsk, gpupdate /force.</span>
</div>

<h3>3.5 Linux / Unix</h3>
<div class="kvs">
<span class="k">Distros</span><span class="v">Debian/Ubuntu, RHEL/CentOS/Rocky, SUSE, Arch.</span>
<span class="k">Estructura</span><span class="v">/ (raíz), /etc (config), /home, /var (logs), /bin, /usr, /dev, /proc.</span>
<span class="k">Permisos</span><span class="v">rwx para usuario/grupo/otros. chmod (755, 644), chown. Octal: r=4, w=2, x=1.</span>
<span class="k">Comandos</span><span class="v">ls, cd, cp, mv, rm, grep, find, ps, top, kill, sudo, apt/yum/dnf, systemctl.</span>
<span class="k">Shell</span><span class="v">Bash. Scripts, pipes (|), redirección (&gt;, &gt;&gt;, &lt;).</span>
<span class="k">Gestores de paquetes</span><span class="v">apt/dpkg (Debian), yum/dnf/rpm (RedHat).</span>
</div>
<div class="callout example"><span class="ico">▶</span><div><b>Permisos chmod 755:</b> propietario rwx (7=4+2+1), grupo r-x (5=4+0+1), otros r-x (5). Típico de directorios y ejecutables.</div></div>

<h3>3.6 Virtualización y contenedores</h3>
<div class="kvs">
<span class="k">Hipervisor tipo 1</span><span class="v">Bare-metal: VMware ESXi, Hyper-V, KVM, Xen, Proxmox.</span>
<span class="k">Hipervisor tipo 2</span><span class="v">Hosted: VirtualBox, VMware Workstation.</span>
<span class="k">Contenedores</span><span class="v">Docker, Podman. Comparten kernel, más ligeros que VMs.</span>
<span class="k">Orquestación</span><span class="v">Kubernetes para gestionar contenedores a escala.</span>
</div>
`},

{id:"d4",title:"Bloque IV — Redes y comunicaciones",html:`
<h2>Bloque IV — Redes y Comunicaciones</h2>
<div class="lead">Modelos de capas, TCP/IP, direccionamiento, dispositivos, protocolos y seguridad de red. Fundamental para el bloque específico.</div>

<h3>4.1 Modelo OSI</h3>
<table>
<tr><th>Capa</th><th>Nombre</th><th>Función</th><th>Ejemplos</th></tr>
<tr><td>7</td><td>Aplicación</td><td>Servicios al usuario</td><td>HTTP, DNS, SMTP, FTP</td></tr>
<tr><td>6</td><td>Presentación</td><td>Formato, cifrado</td><td>TLS, JPEG, ASCII</td></tr>
<tr><td>5</td><td>Sesión</td><td>Diálogos</td><td>NetBIOS, RPC</td></tr>
<tr><td>4</td><td>Transporte</td><td>Entrega extremo a extremo</td><td>TCP, UDP</td></tr>
<tr><td>3</td><td>Red</td><td>Direccionamiento y routing</td><td>IP, ICMP, OSPF</td></tr>
<tr><td>2</td><td>Enlace</td><td>Tramas, MAC</td><td>Ethernet, ARP, switch</td></tr>
<tr><td>1</td><td>Física</td><td>Bits, señales, cables</td><td>RJ45, fibra, hub</td></tr>
</table>
<p><b>Modelo TCP/IP</b> (4 capas): Acceso a red, Internet, Transporte, Aplicación. Es el modelo real de internet.</p>

<h3>4.2 TCP vs UDP</h3>
<div class="compare">
<div><h5>TCP</h5><p>Orientado a conexión. Fiable (confirma entrega, reordena). Three-way handshake (SYN, SYN-ACK, ACK). Web, correo, transferencia.</p></div>
<div><h5>UDP</h5><p>Sin conexión. Rápido, sin garantía de entrega. Streaming, VoIP, DNS, juegos.</p></div>
</div>

<h3>4.3 Direccionamiento IP</h3>
<div class="kvs">
<span class="k">IPv4</span><span class="v">32 bits, notación decimal (192.168.1.1). ~4.300 millones de direcciones (agotadas).</span>
<span class="k">IPv6</span><span class="v">128 bits, hexadecimal (2001:db8::1). Sin NAT necesario.</span>
<span class="k">Clases / CIDR</span><span class="v">Notación /24 = máscara 255.255.255.0. CIDR reemplaza clases A/B/C.</span>
<span class="k">Privadas (RFC1918)</span><span class="v">10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.</span>
<span class="k">Especiales</span><span class="v">127.0.0.1 loopback, 169.254.x.x APIPA, 0.0.0.0, broadcast.</span>
<span class="k">Subnetting</span><span class="v">Dividir una red en subredes ajustando la máscara. Bits de host vs bits de red.</span>
</div>

<h3>4.4 Puertos comunes</h3>
<p>FTP 20/21 · SSH 22 · Telnet 23 · SMTP 25 · DNS 53 · DHCP 67/68 · HTTP 80 · POP3 110 · IMAP 143 · HTTPS 443 · SMB 445 · RDP 3389 · MySQL 3306.</p>

<h3>4.5 Dispositivos de red</h3>
<div class="kvs">
<span class="k">Hub</span><span class="v">Capa 1, repite a todos. Obsoleto.</span>
<span class="k">Switch</span><span class="v">Capa 2, conmuta por MAC. VLANs, 802.1Q.</span>
<span class="k">Router</span><span class="v">Capa 3, enruta entre redes por IP. NAT.</span>
<span class="k">Firewall</span><span class="v">Filtra tráfico por reglas. Capa 3-7.</span>
<span class="k">AP</span><span class="v">Punto de acceso Wi-Fi.</span>
<span class="k">Proxy</span><span class="v">Intermediario (forward/reverse).</span>
</div>

<h3>4.6 Protocolos clave</h3>
<div class="kvs">
<span class="k">DNS</span><span class="v">Traduce nombres a IPs. Registros A, AAAA, MX, CNAME, NS, PTR, TXT.</span>
<span class="k">DHCP</span><span class="v">Asigna IPs automáticamente. Proceso DORA (Discover, Offer, Request, Ack).</span>
<span class="k">HTTP/HTTPS</span><span class="v">Web. HTTPS = HTTP sobre TLS (cifrado).</span>
<span class="k">ARP</span><span class="v">Traduce IP a MAC en LAN.</span>
<span class="k">NAT</span><span class="v">Traduce IPs privadas a públicas. PAT (overload).</span>
<span class="k">VPN</span><span class="v">Túnel cifrado. IPsec, SSL/TLS.</span>
</div>

<h3>4.7 Seguridad de red básica</h3>
<div class="kvs">
<span class="k">Cifrado Wi-Fi</span><span class="v">WPA3 &gt; WPA2 &gt; WPA &gt; WEP (roto).</span>
<span class="k">Segmentación</span><span class="v">VLANs, subredes, DMZ.</span>
<span class="k">IDS/IPS</span><span class="v">Detección/prevención de intrusiones.</span>
<span class="k">Ataques comunes</span><span class="v">DDoS, MITM, ARP spoofing, DNS poisoning, phishing.</span>
</div>
`},

{id:"d5",title:"Bloque III — Bases de datos",html:`
<h2>Bloque III — Bases de Datos</h2>
<div class="lead">Modelo relacional, SQL, normalización, transacciones y SGBD. Cae mucho en el supuesto práctico.</div>

<h3>5.1 Conceptos fundamentales</h3>
<div class="kvs">
<span class="k">SGBD</span><span class="v">Sistema Gestor de Bases de Datos. Ej: Oracle, MySQL/MariaDB, PostgreSQL, SQL Server.</span>
<span class="k">Modelo relacional</span><span class="v">Datos en tablas (relaciones), filas (tuplas), columnas (atributos). E.F. Codd.</span>
<span class="k">Clave primaria (PK)</span><span class="v">Identifica unívocamente cada fila. No nula, única.</span>
<span class="k">Clave foránea (FK)</span><span class="v">Referencia a la PK de otra tabla. Integridad referencial.</span>
<span class="k">Índice</span><span class="v">Estructura que acelera búsquedas (a costa de espacio y escrituras).</span>
</div>

<h3>5.2 Modelo Entidad-Relación (E-R)</h3>
<div class="kvs">
<span class="k">Entidad</span><span class="v">Objeto del mundo real (Cliente, Producto).</span>
<span class="k">Atributo</span><span class="v">Propiedad de la entidad (nombre, precio).</span>
<span class="k">Relación</span><span class="v">Asociación entre entidades.</span>
<span class="k">Cardinalidad</span><span class="v">1:1, 1:N, N:M. Las N:M se resuelven con tabla intermedia.</span>
</div>

<h3>5.3 SQL — Lenguaje de Consulta Estructurado</h3>
<div class="kvs">
<span class="k">DDL (Definición)</span><span class="v">CREATE, ALTER, DROP, TRUNCATE.</span>
<span class="k">DML (Manipulación)</span><span class="v">SELECT, INSERT, UPDATE, DELETE.</span>
<span class="k">DCL (Control)</span><span class="v">GRANT, REVOKE (permisos).</span>
<span class="k">TCL (Transacciones)</span><span class="v">COMMIT, ROLLBACK, SAVEPOINT.</span>
</div>
<h4>Ejemplo de consulta</h4>
<pre><code>SELECT c.nombre, COUNT(p.id) AS pedidos
FROM clientes c
JOIN pedidos p ON c.id = p.cliente_id
WHERE p.fecha &gt;= '2024-01-01'
GROUP BY c.nombre
HAVING COUNT(p.id) &gt; 5
ORDER BY pedidos DESC;</code></pre>
<div class="kvs">
<span class="k">JOIN</span><span class="v">INNER (coincidencias), LEFT/RIGHT (incluye sin coincidencia), FULL.</span>
<span class="k">WHERE vs HAVING</span><span class="v">WHERE filtra filas; HAVING filtra grupos (tras GROUP BY).</span>
<span class="k">Agregados</span><span class="v">COUNT, SUM, AVG, MIN, MAX.</span>
</div>

<h3>5.4 Normalización</h3>
<p>Proceso de organizar tablas para reducir redundancia y evitar anomalías.</p>
<div class="kvs">
<span class="k">1FN</span><span class="v">Valores atómicos (sin grupos repetitivos), PK definida.</span>
<span class="k">2FN</span><span class="v">1FN + sin dependencias parciales de la PK.</span>
<span class="k">3FN</span><span class="v">2FN + sin dependencias transitivas (atributos no clave dependen solo de la PK).</span>
<span class="k">BCNF</span><span class="v">Forma normal de Boyce-Codd, refinamiento de la 3FN.</span>
</div>

<h3>5.5 Transacciones — ACID</h3>
<div class="kvs">
<span class="k">Atomicity (Atomicidad)</span><span class="v">Todo o nada.</span>
<span class="k">Consistency (Consistencia)</span><span class="v">La BD pasa de un estado válido a otro válido.</span>
<span class="k">Isolation (Aislamiento)</span><span class="v">Las transacciones concurrentes no interfieren.</span>
<span class="k">Durability (Durabilidad)</span><span class="v">Lo confirmado persiste aunque falle el sistema.</span>
</div>

<h3>5.6 NoSQL</h3>
<div class="kvs">
<span class="k">Documental</span><span class="v">MongoDB (JSON/BSON).</span>
<span class="k">Clave-valor</span><span class="v">Redis, DynamoDB.</span>
<span class="k">Columnar</span><span class="v">Cassandra, HBase.</span>
<span class="k">Grafos</span><span class="v">Neo4j.</span>
<span class="k">Cuándo</span><span class="v">Big data, escalado horizontal, esquema flexible. Sacrifican parte de ACID (modelo BASE).</span>
</div>
`},

{id:"d6",title:"Bloque III — Programación e ingeniería del software",html:`
<h2>Bloque III — Programación e Ingeniería del Software</h2>
<div class="lead">Paradigmas, estructuras de datos, algoritmos y el ciclo de vida del desarrollo.</div>

<h3>6.1 Paradigmas de programación</h3>
<div class="kvs">
<span class="k">Imperativo / estructurado</span><span class="v">Secuencia, selección, iteración. C, Pascal.</span>
<span class="k">Orientado a objetos (POO)</span><span class="v">Clases, objetos, herencia, encapsulación, polimorfismo. Java, C++, Python, C#.</span>
<span class="k">Funcional</span><span class="v">Funciones puras, inmutabilidad. Haskell, Scala, partes de JS/Python.</span>
<span class="k">Declarativo</span><span class="v">Qué, no cómo. SQL, HTML, Prolog.</span>
</div>

<h3>6.2 Pilares de la POO</h3>
<div class="kvs">
<span class="k">Encapsulación</span><span class="v">Ocultar datos internos; acceso por métodos (getters/setters).</span>
<span class="k">Herencia</span><span class="v">Una clase hereda atributos/métodos de otra.</span>
<span class="k">Polimorfismo</span><span class="v">Un mismo método se comporta distinto según el objeto.</span>
<span class="k">Abstracción</span><span class="v">Modelar lo esencial, ocultar complejidad.</span>
</div>

<h3>6.3 Estructuras de control</h3>
<div class="kvs">
<span class="k">Secuencia</span><span class="v">Instrucciones una tras otra.</span>
<span class="k">Selección</span><span class="v">if/else, switch.</span>
<span class="k">Iteración</span><span class="v">for, while, do-while.</span>
</div>

<h3>6.4 Estructuras de datos</h3>
<table>
<tr><th>Estructura</th><th>Característica</th></tr>
<tr><td>Array / Vector</td><td>Acceso por índice O(1), tamaño fijo.</td></tr>
<tr><td>Lista enlazada</td><td>Nodos con punteros, inserción fácil.</td></tr>
<tr><td>Pila (Stack)</td><td>LIFO (Last In First Out).</td></tr>
<tr><td>Cola (Queue)</td><td>FIFO (First In First Out).</td></tr>
<tr><td>Árbol</td><td>Jerárquico. Binario, BST, AVL, B-tree.</td></tr>
<tr><td>Grafo</td><td>Nodos y aristas.</td></tr>
<tr><td>Hash table</td><td>Clave-valor, búsqueda O(1) promedio.</td></tr>
</table>

<h3>6.5 Algoritmos y complejidad</h3>
<div class="kvs">
<span class="k">Notación Big O</span><span class="v">O(1) constante, O(log n), O(n) lineal, O(n log n), O(n²) cuadrático.</span>
<span class="k">Ordenación</span><span class="v">Burbuja O(n²), inserción, quicksort O(n log n), mergesort.</span>
<span class="k">Búsqueda</span><span class="v">Lineal O(n), binaria O(log n) (requiere datos ordenados).</span>
</div>

<h3>6.6 Ingeniería del software</h3>
<h4>Ciclo de vida (SDLC)</h4>
<div class="flow">
<span class="step">Requisitos</span><span class="arr">→</span>
<span class="step">Análisis</span><span class="arr">→</span>
<span class="step">Diseño</span><span class="arr">→</span>
<span class="step">Implementación</span><span class="arr">→</span>
<span class="step">Pruebas</span><span class="arr">→</span>
<span class="step">Despliegue</span><span class="arr">→</span>
<span class="step">Mantenimiento</span>
</div>
<h4>Metodologías</h4>
<div class="kvs">
<span class="k">Cascada (Waterfall)</span><span class="v">Secuencial, fases cerradas. Rígido.</span>
<span class="k">Ágil (Scrum, Kanban)</span><span class="v">Iterativo, incremental. Sprints, backlog, daily.</span>
<span class="k">DevOps</span><span class="v">Integración desarrollo + operaciones. CI/CD.</span>
</div>
<h4>Tipos de pruebas</h4>
<div class="kvs">
<span class="k">Unitarias</span><span class="v">Componente aislado.</span>
<span class="k">Integración</span><span class="v">Módulos juntos.</span>
<span class="k">Sistema</span><span class="v">Aplicación completa.</span>
<span class="k">Aceptación (UAT)</span><span class="v">El usuario valida.</span>
<span class="k">Caja blanca vs negra</span><span class="v">Conoces el código interno vs solo entradas/salidas.</span>
</div>

<h3>6.7 Control de versiones</h3>
<p><b>Git:</b> commit, branch, merge, pull, push. Repositorios: GitHub, GitLab. Centralizado (SVN) vs distribuido (Git).</p>
`},

{id:"d7",title:"Ofimática y Administración Electrónica",html:`
<h2>Ofimática y Administración Electrónica</h2>
<div class="lead">El supuesto práctico de TAI suele incluir ofimática (Word, Excel) y conceptos de administración electrónica. Domina fórmulas, formato y firma electrónica.</div>

<h3>7.1 Procesador de textos (Word / Writer)</h3>
<div class="kvs">
<span class="k">Estilos</span><span class="v">Aplicar estilos para títulos permite generar índices/TOC automáticos.</span>
<span class="k">Secciones</span><span class="v">Saltos de sección para cambiar orientación, encabezados, numeración.</span>
<span class="k">Combinar correspondencia</span><span class="v">Mail merge: cartas masivas desde una fuente de datos.</span>
<span class="k">Control de cambios</span><span class="v">Revisión colaborativa, comentarios.</span>
<span class="k">Formatos</span><span class="v">.docx (OOXML), .odt (OpenDocument), PDF.</span>
</div>

<h3>7.2 Hoja de cálculo (Excel / Calc)</h3>
<div class="kvs">
<span class="k">Referencias</span><span class="v">Relativa (A1), absoluta ($A$1), mixta ($A1, A$1).</span>
<span class="k">Funciones básicas</span><span class="v">SUMA, PROMEDIO, CONTAR, MAX, MIN, SI (condicional).</span>
<span class="k">Búsqueda</span><span class="v">BUSCARV (VLOOKUP), BUSCARX (XLOOKUP), INDICE+COINCIDIR.</span>
<span class="k">Condicionales</span><span class="v">SI, SI.CONJUNTO, SUMAR.SI, CONTAR.SI.</span>
<span class="k">Tablas dinámicas</span><span class="v">Resumir y agrupar grandes conjuntos de datos.</span>
<span class="k">Formato condicional</span><span class="v">Colorear celdas según reglas.</span>
</div>
<div class="callout example"><span class="ico">▶</span><div><b>BUSCARV:</b> <code>=BUSCARV(valor; rango; nº_columna; FALSO)</code>. FALSO = coincidencia exacta. Busca "valor" en la 1ª columna del rango y devuelve el dato de la columna indicada.</div></div>

<h3>7.3 Correo y colaboración</h3>
<div class="kvs">
<span class="k">Protocolos</span><span class="v">SMTP (envío), POP3 (descarga), IMAP (sincroniza en servidor).</span>
<span class="k">Cliente</span><span class="v">Outlook, Thunderbolt. Reglas, filtros, firmas.</span>
<span class="k">Suites</span><span class="v">Microsoft 365, Google Workspace, LibreOffice (libre y gratuito).</span>
</div>

<h3>7.4 Firma electrónica</h3>
<div class="kvs">
<span class="k">Firma simple</span><span class="v">Datos electrónicos asociados (básica).</span>
<span class="k">Firma avanzada</span><span class="v">Identifica al firmante y detecta alteraciones.</span>
<span class="k">Firma cualificada</span><span class="v">Avanzada + certificado cualificado + dispositivo cualificado. Equivale a firma manuscrita (Reglamento eIDAS UE 910/2014).</span>
<span class="k">Certificado electrónico</span><span class="v">Emitido por prestador cualificado (FNMT). Vincula identidad con clave.</span>
<span class="k">DNIe</span><span class="v">DNI electrónico con chip para identificación y firma.</span>
</div>

<h3>7.5 Administración electrónica práctica</h3>
<div class="kvs">
<span class="k">Sede electrónica</span><span class="v">Punto de acceso oficial para trámites online.</span>
<span class="k">Cl@ve</span><span class="v">Sistema de identificación común (Cl@ve PIN, Cl@ve Permanente, certificado).</span>
<span class="k">Registro electrónico</span><span class="v">Presentar documentos 24/7. Genera justificante con fecha/hora.</span>
<span class="k">Notificaciones electrónicas</span><span class="v">DEH (Dirección Electrónica Habilitada). Se entienden rechazadas a los 10 días sin acceso.</span>
<span class="k">Carpeta Ciudadana</span><span class="v">Punto único de acceso del ciudadano a sus datos y trámites.</span>
<span class="k">PAe</span><span class="v">Portal de Administración Electrónica.</span>
</div>

<h3>7.6 Accesibilidad y software libre</h3>
<div class="kvs">
<span class="k">Accesibilidad web</span><span class="v">WCAG, RD 1112/2018 (accesibilidad de sitios web del sector público).</span>
<span class="k">Software libre</span><span class="v">Libertades de usar, estudiar, modificar, distribuir. Licencias GPL, MIT, Apache.</span>
<span class="k">Formatos abiertos</span><span class="v">ODF, PDF/A. Promovidos por el ENI.</span>
</div>
`}
],

questions: [
{d:0,q:"El Cuerpo de Técnicos Auxiliares de Informática de la AGE pertenece al grupo:",opts:["A1","A2","C1","C2"],c:2,e:"TAI es grupo C1 (requiere título de Bachiller o Técnico). TIC es A2 y los Superiores de Sistemas/TIC son A1."},
{d:1,q:"¿Cuántos artículos tiene la Constitución Española de 1978?",opts:["100","150","169","200"],c:2,e:"La CE tiene 169 artículos, además del preámbulo y disposiciones."},
{d:1,q:"La forma política del Estado español según la Constitución es:",opts:["República federal","Monarquía parlamentaria","Monarquía absoluta","Estado confederal"],c:1,e:"Art. 1.3 CE: la forma política del Estado español es la Monarquía parlamentaria."},
{d:1,q:"¿Qué ley regula el Procedimiento Administrativo Común?",opts:["Ley 40/2015","Ley 39/2015","Ley 19/2013","Ley 50/1997"],c:1,e:"Ley 39/2015 del Procedimiento Administrativo Común. La 40/2015 es Régimen Jurídico del Sector Público."},
{d:1,q:"Plazo para interponer recurso de alzada:",opts:["10 días","15 días","1 mes","3 meses"],c:2,e:"El recurso de alzada se interpone en el plazo de 1 mes (si el acto es expreso) ante el órgano superior jerárquico."},
{d:1,q:"Plazo de notificación de una brecha de datos personales a la AEPD según RGPD:",opts:["24 horas","48 horas","72 horas","7 días"],c:2,e:"RGPD art. 33: notificar a la autoridad de control (AEPD) sin dilación indebida y como máximo en 72 horas."},
{d:1,q:"Las cinco dimensiones de seguridad del ENS (RD 311/2022) son:",opts:["CIA","Disponibilidad, Integridad, Confidencialidad, Autenticidad, Trazabilidad","Solo confidencialidad","Bajo, Medio, Alto"],c:1,e:"ENS define 5 dimensiones: Disponibilidad, Integridad, Confidencialidad, Autenticidad y Trazabilidad (DICAT)."},
{d:1,q:"¿Cuál NO es un derecho del interesado en protección de datos (RGPD)?",opts:["Acceso","Rectificación","Supresión","Reventa de datos"],c:3,e:"Derechos ARSOLP: Acceso, Rectificación, Supresión, Oposición, Limitación, Portabilidad. La reventa no es un derecho."},
{d:2,q:"En la arquitectura von Neumann, ¿qué comparten datos e instrucciones?",opts:["La CPU","La misma memoria principal","El disco","La GPU"],c:1,e:"La clave de von Neumann es el 'programa almacenado': datos e instrucciones residen en la misma memoria."},
{d:2,q:"La memoria caché L1 respecto a la L3 es:",opts:["Más lenta y grande","Más rápida y pequeña","Igual","No volátil"],c:1,e:"L1 es la más rápida y pequeña, cercana al núcleo. L3 es mayor pero más lenta y compartida."},
{d:2,q:"¿Qué nivel de RAID ofrece espejo (redundancia sin paridad)?",opts:["RAID 0","RAID 1","RAID 5","RAID 6"],c:1,e:"RAID 1 es espejo (mirror): duplica los datos. RAID 0 es stripe (sin redundancia). RAID 5/6 usan paridad."},
{d:2,q:"El binario 1010 en decimal es:",opts:["8","10","12","16"],c:1,e:"1010 = 8+0+2+0 = 10. En hexadecimal sería A."},
{d:3,q:"Permiso chmod 755 en Linux significa para 'otros':",opts:["rwx","r-x","---","rw-"],c:1,e:"755: propietario rwx(7), grupo r-x(5), otros r-x(5). 5 = 4(r)+1(x), sin escritura."},
{d:3,q:"¿Qué condición NO es de Coffman para el deadlock?",opts:["Exclusión mutua","Espera circular","Apropiación forzosa","Retención y espera"],c:2,e:"Las 4 condiciones son: exclusión mutua, retención y espera, NO apropiación, y espera circular. La apropiación forzosa rompe el deadlock."},
{d:3,q:"Sistema de archivos nativo de Windows con permisos ACL y journaling:",opts:["FAT32","ext4","NTFS","APFS"],c:2,e:"NTFS soporta ACL, journaling, cifrado EFS y compresión. ext4 es Linux, APFS es macOS."},
{d:4,q:"¿En qué capa OSI opera un router?",opts:["Capa 2","Capa 3 (Red)","Capa 4","Capa 7"],c:1,e:"El router opera en capa 3 (Red), enrutando paquetes por dirección IP."},
{d:4,q:"El proceso DORA pertenece a:",opts:["DNS","DHCP","ARP","TCP"],c:1,e:"DHCP usa DORA: Discover, Offer, Request, Acknowledge para asignar IPs."},
{d:4,q:"Rango privado RFC1918 válido:",opts:["11.0.0.0/8","172.16.0.0/12","200.0.0.0/8","8.8.8.0/24"],c:1,e:"Privados: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. 172.16/12 es correcto."},
{d:4,q:"Diferencia clave entre TCP y UDP:",opts:["TCP es más rápido","TCP es fiable y orientado a conexión; UDP no garantiza entrega","UDP solo para web","Son idénticos"],c:1,e:"TCP usa handshake y confirma entrega (fiable). UDP envía sin confirmación (rápido, para streaming/VoIP)."},
{d:5,q:"En SQL, ¿qué cláusula filtra grupos tras GROUP BY?",opts:["WHERE","HAVING","ORDER BY","JOIN"],c:1,e:"WHERE filtra filas antes de agrupar; HAVING filtra los grupos resultantes del GROUP BY."},
{d:5,q:"La propiedad ACID 'Atomicidad' significa:",opts:["La BD siempre es válida","Todo o nada en la transacción","Las transacciones no interfieren","Los datos persisten"],c:1,e:"Atomicidad: la transacción se ejecuta completa o no se ejecuta nada (rollback si falla)."},
{d:5,q:"Una relación N:M en el modelo relacional se resuelve con:",opts:["Una clave primaria compuesta solo","Una tabla intermedia (de cruce)","Un índice","Un trigger"],c:1,e:"Las relaciones muchos-a-muchos se implementan con una tabla intermedia que contiene las FK de ambas entidades."},
{d:6,q:"¿Cuál es un pilar de la POO?",opts:["Recursión","Encapsulación","Compilación","Indexación"],c:1,e:"Pilares POO: encapsulación, herencia, polimorfismo y abstracción."},
{d:6,q:"Una pila (Stack) sigue el principio:",opts:["FIFO","LIFO","Random","Round Robin"],c:1,e:"Stack = LIFO (Last In, First Out). La cola (Queue) es FIFO."},
{d:6,q:"La complejidad de la búsqueda binaria es:",opts:["O(1)","O(n)","O(log n)","O(n²)"],c:2,e:"Búsqueda binaria O(log n), pero requiere que los datos estén ordenados."},
{d:7,q:"En Excel, una referencia absoluta se escribe:",opts:["A1","$A$1","A:1","#A1"],c:1,e:"$A$1 fija fila y columna al copiar la fórmula. A1 es relativa, $A1/A$1 son mixtas."},
{d:7,q:"La firma electrónica equivalente a la manuscrita es la:",opts:["Simple","Avanzada","Cualificada","Básica"],c:2,e:"La firma electrónica cualificada (avanzada + certificado cualificado + dispositivo cualificado) tiene el mismo valor que la manuscrita según eIDAS."},
{d:7,q:"Una notificación electrónica no atendida se entiende rechazada a los:",opts:["3 días","5 días","10 días naturales","1 mes"],c:2,e:"Ley 39/2015: transcurridos 10 días naturales sin acceder a la notificación electrónica, se entiende rechazada."}
],

flashcards: [
{d:0,q:"¿A qué grupo y cuerpo corresponde la oposición TAI?",a:"Grupo C1, Cuerpo de Técnicos Auxiliares de Informática de la Administración General del Estado. Requiere Bachillerato o Técnico FP."},
{d:1,q:"¿Qué regulan la Ley 39/2015 y la Ley 40/2015?",a:"39/2015: Procedimiento Administrativo Común de las AAPP. 40/2015: Régimen Jurídico del Sector Público (organización y funcionamiento electrónico)."},
{d:1,q:"Plazos de los recursos administrativos:",a:"Alzada: 1 mes (ante superior jerárquico). Reposición potestativo: 1 mes (mismo órgano). Extraordinario de revisión: 3 meses o 4 años según causa."},
{d:1,q:"¿Cuáles son las 5 dimensiones de seguridad del ENS?",a:"Disponibilidad, Integridad, Confidencialidad, Autenticidad y Trazabilidad. Niveles: BAJO, MEDIO, ALTO."},
{d:1,q:"¿Cuáles son los derechos del interesado en el RGPD?",a:"Acceso, Rectificación, Supresión (olvido), Oposición, Limitación del tratamiento, Portabilidad, y no ser objeto de decisiones automatizadas. Mnemotecnia: ARSOLP."},
{d:1,q:"¿Qué establece el ENI (RD 4/2010)?",a:"Esquema Nacional de Interoperabilidad: criterios para que los sistemas de las AAPP intercambien datos y servicios. Dimensiones: organizativa, semántica y técnica."},
{d:1,q:"¿Cuál es el plazo general para resolver un procedimiento administrativo?",a:"Si no se fija otro plazo por ley, 3 meses. Los plazos en días se computan en días hábiles (sábados, domingos y festivos no cuentan)."},
{d:2,q:"¿Cuál es la jerarquía de memoria de más rápida a más lenta?",a:"Registros → Caché L1/L2/L3 → RAM → SSD/Disco → Cinta/backup. A más velocidad, más coste y menos capacidad."},
{d:2,q:"¿Diferencia entre BIOS y UEFI?",a:"BIOS: firmware legacy, arranque MBR, límite 2TB. UEFI: moderno, soporta Secure Boot, GPT, discos grandes, arranque rápido e interfaz gráfica."},
{d:2,q:"¿Qué es RAID 5 y RAID 10?",a:"RAID 5: stripe con paridad distribuida (tolera 1 fallo). RAID 10: combinación de espejo (1) + stripe (0), alta velocidad y redundancia."},
{d:3,q:"¿Qué diferencia un proceso de un hilo?",a:"Proceso: programa en ejecución con espacio de memoria propio. Hilo: unidad de ejecución dentro de un proceso, comparten su memoria. Más ligeros."},
{d:3,q:"¿Cuáles son las 4 condiciones de Coffman para el deadlock?",a:"Exclusión mutua, retención y espera, no apropiación, y espera circular. Romper cualquiera evita el interbloqueo."},
{d:3,q:"En Linux, ¿qué significa chmod 644?",a:"Propietario rw- (6), grupo r-- (4), otros r-- (4). Lectura/escritura para el dueño, solo lectura para el resto. Típico de archivos."},
{d:4,q:"Enumera las 7 capas del modelo OSI.",a:"Física, Enlace, Red, Transporte, Sesión, Presentación, Aplicación. (1 a 7)."},
{d:4,q:"¿Qué hace el protocolo DNS y qué registros conoces?",a:"Traduce nombres de dominio a IPs. Registros: A (IPv4), AAAA (IPv6), MX (correo), CNAME (alias), NS (servidor de nombres), PTR (inverso), TXT."},
{d:4,q:"Diferencia entre switch y router:",a:"Switch: capa 2, conmuta tramas por dirección MAC dentro de una LAN. Router: capa 3, enruta paquetes entre redes distintas por dirección IP."},
{d:5,q:"¿Qué significan las siglas ACID en bases de datos?",a:"Atomicity (todo o nada), Consistency (estados válidos), Isolation (no interferencia entre transacciones), Durability (lo confirmado persiste)."},
{d:5,q:"Diferencia entre clave primaria y clave foránea:",a:"PK: identifica unívocamente cada fila de una tabla (única, no nula). FK: campo que referencia la PK de otra tabla, garantizando integridad referencial."},
{d:5,q:"¿Qué buscan la 1FN, 2FN y 3FN en normalización?",a:"1FN: valores atómicos sin grupos repetitivos. 2FN: 1FN + sin dependencias parciales de la clave. 3FN: 2FN + sin dependencias transitivas."},
{d:6,q:"¿Cuáles son los 4 pilares de la POO?",a:"Encapsulación (ocultar datos), Herencia (reutilizar de clases padre), Polimorfismo (mismo método, distinto comportamiento), Abstracción (modelar lo esencial)."},
{d:6,q:"¿Qué mide la notación Big O? Ejemplos.",a:"La complejidad/escalabilidad de un algoritmo. O(1) constante, O(log n) logarítmica, O(n) lineal, O(n log n), O(n²) cuadrática."},
{d:6,q:"Diferencia entre metodología en cascada y ágil:",a:"Cascada: fases secuenciales y cerradas, rígida. Ágil (Scrum/Kanban): iterativa e incremental, entregas frecuentes, adaptable al cambio."},
{d:7,q:"En Excel, ¿qué hace BUSCARV y cuándo usar FALSO?",a:"Busca un valor en la primera columna de un rango y devuelve un dato de otra columna. El 4º argumento FALSO exige coincidencia exacta (VERDADERO = aproximada)."},
{d:7,q:"¿Qué tipos de firma electrónica define eIDAS?",a:"Simple (datos asociados), Avanzada (identifica firmante y detecta cambios) y Cualificada (avanzada + certificado y dispositivo cualificados = equivale a manuscrita)."},
{d:7,q:"¿Qué es Cl@ve en la administración electrónica española?",a:"Plataforma común de identificación y firma electrónica para relacionarse con las AAPP. Modalidades: Cl@ve PIN (ocasional), Cl@ve Permanente y certificado/DNIe."}
]
};
