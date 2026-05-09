window.THEORY = [
{
  id:"d1", title:"Dominio 1 — Conceptos Generales (12%)",
  html:`
<h2>Dominio 1 — Conceptos Generales de Seguridad</h2>
<div class="lead">Este dominio sienta las bases. Te enseña <b>cómo se clasifican los controles</b>, los <b>principios fundamentales</b> (CIA, AAA, Zero Trust), <b>cómo se gestionan los cambios</b> sin romper nada y la <b>criptografía</b> al detalle (PKI, certificados, hashing, claves).</div>

<h3>1.1 Categorías y tipos de controles</h3>
<p>Un <b>control</b> es cualquier medida que reduce riesgo. Cada control tiene una <b>categoría</b> (qué naturaleza) y uno o más <b>tipos</b> (qué función cumple).</p>

<h4>Categorías (qué naturaleza tiene)</h4>
<div class="minicards">
<div class="minicard"><div class="h"><span class="b">T</span>Técnico</div><p>Hardware o software. Ej: firewall, EDR, MFA, cifrado.</p></div>
<div class="minicard"><div class="h"><span class="b">M</span>Gerencial</div><p>Decisiones administrativas. Ej: políticas, evaluaciones de riesgo, BIA.</p></div>
<div class="minicard"><div class="h"><span class="b">O</span>Operacional</div><p>Lo ejecutan personas día a día. Ej: revisar logs, formación, IR.</p></div>
<div class="minicard"><div class="h"><span class="b">F</span>Físico</div><p>Protege espacios y hardware. Ej: cerraduras, vallas, CCTV.</p></div>
</div>

<h4>Tipos (qué función cumple)</h4>
<table>
<tr><th>Tipo</th><th>Qué hace</th><th>Ejemplo cotidiano</th></tr>
<tr><td><b>Preventivo</b></td><td>Bloquea antes de que pase</td><td>Cerradura que impide entrar</td></tr>
<tr><td><b>Disuasorio</b></td><td>Asusta pero no bloquea</td><td>Cartel "perro peligroso"</td></tr>
<tr><td><b>Detectivo</b></td><td>Avisa de que pasó algo</td><td>Alarma de casa</td></tr>
<tr><td><b>Correctivo</b></td><td>Repara tras el daño</td><td>Restaurar backup tras ransomware</td></tr>
<tr><td><b>Compensativo</b></td><td>Plan B si no puedes el A</td><td>No hay MFA → IP allowlist + log extra</td></tr>
<tr><td><b>Directivo</b></td><td>Te dice cómo comportarte</td><td>Manual de empleado, AUP</td></tr>
</table>

<div class="callout exam"><span class="ico">★</span><div><b>Tip de examen:</b> un mismo control puede tener varias etiquetas. Una <b>cámara CCTV visible</b> es <i>física</i> + <i>disuasoria</i> + <i>detectiva</i>. Lee siempre la pregunta para ver qué pide.</div></div>

<h3>1.2 Conceptos fundamentales</h3>

<h4>Triada CIA</h4>
<div class="minicards">
<div class="minicard"><div class="h">C — Confidencialidad</div><p>Sólo los autorizados ven los datos. <b>Cómo:</b> cifrado, control de acceso.</p></div>
<div class="minicard"><div class="h">I — Integridad</div><p>Los datos no se alteran sin permiso. <b>Cómo:</b> hashing, firma digital, FIM.</p></div>
<div class="minicard"><div class="h">A — Disponibilidad</div><p>Está accesible cuando hace falta. <b>Cómo:</b> redundancia, backups, anti-DDoS.</p></div>
</div>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogía:</b> el opuesto a CIA es <b>DAD</b> — Disclosure (filtración), Alteration (alteración), Destruction (destrucción). Lo que un atacante busca.</div></div>

<h4>Otros pilares</h4>
<div class="term"><div class="t">No repudio</div>El emisor no puede negar haber enviado el mensaje. Se logra con <b>firma digital</b>: si está firmado con tu clave privada, sólo tú pudiste hacerlo.<div class="why">Útil en transacciones, contratos, evidencia forense.</div></div>

<div class="term"><div class="t">AAA — Authentication, Authorization, Accounting</div>
<div class="kvs">
<span class="k">Authentication</span><span class="v">¿Quién eres? — usuario+pass, MFA, certificado, biometría.</span>
<span class="k">Authorization</span><span class="v">¿Qué puedes hacer? — roles, permisos, ACLs.</span>
<span class="k">Accounting</span><span class="v">¿Qué hiciste? — logs, audit trail.</span>
</div>
<div class="why">Aplica a personas y a sistemas (un servidor también se autentica con cert).</div></div>

<div class="term"><div class="t">RADIUS vs TACACS+ — protocolos AAA</div>
<div class="compare">
<div><h5>RADIUS</h5><p>UDP 1812/1813. Cifra solo la contraseña. Combina autenticación y autorización. Estándar abierto, usado en Wi-Fi 802.1X y VPNs.</p></div>
<div><h5>TACACS+</h5><p>TCP 49. Cifra todo el payload. Separa AAA en tres procesos. De Cisco, popular en gestión de equipos de red.</p></div>
</div></div>

<div class="term"><div class="t">Gap analysis</div>Comparas tu seguridad <b>actual</b> con la <b>deseada</b> (ej. ISO 27001, NIST CSF). La diferencia es la "brecha" que hay que cerrar.<div class="why">Sirve para priorizar inversión y justificar presupuesto.</div></div>

<h4>Zero Trust — "nunca confíes, siempre verifica"</h4>
<p>Modelo que asume que la red interna ya está comprometida. <b>No hay perímetro</b> confiable. Cada petición se verifica: usuario, dispositivo, contexto, riesgo.</p>

<div class="callout analogy"><span class="ico">◐</span><div><b>Analogía:</b> antes era un castillo con muralla (entras al castillo y andas libre). Zero Trust es un aeropuerto: en cada puerta (control de seguridad, embarque, asiento) te verifican otra vez.</div></div>

<div class="minicards">
<div class="minicard"><div class="h">Plano de Control</div><p><b>Policy Engine (PE)</b> decide. <b>Policy Administrator (PA)</b> ejecuta la decisión. Juntos = PDP (Policy Decision Point).</p></div>
<div class="minicard"><div class="h">Plano de Datos</div><p><b>Subject</b> (quien pide), <b>PEP</b> (Policy Enforcement Point — quien aplica), <b>Recurso</b> (lo que se pide).</p></div>
</div>

<div class="kvs">
<span class="k">Adaptive Identity</span><span class="v">Reevaluá identidad según contexto (hora, geo, dispositivo, riesgo).</span>
<span class="k">Threat Scope Reduction</span><span class="v">Limita lo que cada identidad puede tocar.</span>
<span class="k">Policy-Driven Access Control</span><span class="v">Decisiones por política, no por ubicación de red.</span>
<span class="k">Microsegmentación</span><span class="v">Trozar la red en segmentos pequeñísimos para aislar.</span>
</div>

<h4>Seguridad física</h4>
<div class="minicards">
<div class="minicard"><div class="h">Bollards</div><p>Pilotes de hormigón/metal que impiden vehículos.</p></div>
<div class="minicard"><div class="h">Vallas / Fences</div><p>Disuaden y retrasan.</p></div>
<div class="minicard"><div class="h">Iluminación</div><p>Disuasoria + permite que CCTV grabe.</p></div>
<div class="minicard"><div class="h">Mantrap (vestíbulo)</div><p>Dos puertas, una persona a la vez. Evita <b>tailgating</b> (colarse detrás).</p></div>
<div class="minicard"><div class="h">Badges</div><p>Tarjetas RFID/NFC con foto. Identifican y permiten paso.</p></div>
<div class="minicard"><div class="h">CCTV</div><p>Vigilancia en directo + grabación para forense.</p></div>
<div class="minicard"><div class="h">Guardias</div><p>Disuasión + decisión humana ante imprevistos.</p></div>
</div>

<div class="term"><div class="t">Sensores</div>
<div class="kvs">
<span class="k">Infrared (PIR)</span><span class="v">Detecta calor en movimiento — el típico sensor de alarma.</span>
<span class="k">Pressure</span><span class="v">Alfombras/suelos sensibles al peso.</span>
<span class="k">Microwave</span><span class="v">Emite microondas y mide reflexión; ve a través de obstáculos.</span>
<span class="k">Ultrasonic</span><span class="v">Sonido de alta frecuencia, detecta movimiento.</span>
</div></div>

<h4>Engaño y disrupción (Deception)</h4>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogía:</b> son trampas. Pones algo apetecible y al morder el anzuelo te enteras de que hay un atacante.</div></div>
<div class="minicards">
<div class="minicard"><div class="h">Honeypot</div><p>Un servidor señuelo aislado para atraer atacantes.</p></div>
<div class="minicard"><div class="h">Honeynet</div><p>Una red entera de honeypots simulando producción.</p></div>
<div class="minicard"><div class="h">Honeyfile</div><p>Archivo señuelo (ej. <code>passwords.xlsx</code>); si alguien lo abre, alerta.</p></div>
<div class="minicard"><div class="h">Honeytoken</div><p>Credencial o clave API <b>falsa</b> y monitoreada. Cualquier uso = compromiso garantizado.</p></div>
<div class="minicard"><div class="h">DNS sinkhole</div><p>Redirige consultas a dominios maliciosos a una IP controlada para neutralizar.</p></div>
</div>

<h3>1.3 Gestión del cambio</h3>
<p>Los cambios mal gestionados causan más caídas y brechas que los ataques. El examen pregunta el <i>proceso</i>, no la herramienta.</p>

<h4>Proceso de negocio</h4>
<div class="minicards">
<div class="minicard"><div class="h">Approval</div><p><b>CAB</b> (Change Advisory Board) o aprobador delegado revisa y aprueba.</p></div>
<div class="minicard"><div class="h">Ownership</div><p>Una persona/equipo responsable.</p></div>
<div class="minicard"><div class="h">Stakeholders</div><p>Todos los afectados deben enterarse.</p></div>
<div class="minicard"><div class="h">Impact analysis</div><p>¿Qué se rompe si esto falla?</p></div>
<div class="minicard"><div class="h">Test results</div><p>Probado en pre-producción antes.</p></div>
<div class="minicard"><div class="h">Backout plan</div><p>Cómo dar marcha atrás si va mal.</p></div>
<div class="minicard"><div class="h">Maintenance window</div><p>Ventana acordada (ej. domingo 3am) para minimizar impacto.</p></div>
<div class="minicard"><div class="h">SOP</div><p>Standard Operating Procedure: pasos documentados a seguir.</p></div>
</div>

<h4>Implicaciones técnicas (lo que rompes sin querer)</h4>
<div class="kvs">
<span class="k">Allow / deny lists</span><span class="v">Hay que actualizar las listas si cambia una IP/dominio/firma.</span>
<span class="k">Restricted activities</span><span class="v">Solo ciertos roles pueden ejecutar el cambio.</span>
<span class="k">Downtime</span><span class="v">Avisar y minimizar tiempo sin servicio.</span>
<span class="k">Service / app restarts</span><span class="v">Orden y dependencias importan; reiniciar mal cae todo.</span>
<span class="k">Legacy applications</span><span class="v">Romper la app vieja con cualquier toque es habitual.</span>
<span class="k">Dependencies</span><span class="v">Un cambio puede arrastrar 5 más.</span>
</div>

<div class="callout info"><span class="ico">ⓘ</span><div><b>Documentación y versionado:</b> tras cualquier cambio se actualizan diagramas, runbooks y políticas. <b>Version control</b> (Git) es imprescindible para configuración como código.</div></div>

<h3>1.4 Soluciones criptográficas</h3>

<h4>PKI — Public Key Infrastructure</h4>
<p>Sistema completo (CAs, certificados, claves, políticas) que permite usar <b>criptografía asimétrica</b> a escala para identidad y cifrado.</p>

<div class="term"><div class="t">Clave pública vs privada</div>
<div class="compare">
<div><h5>Pública</h5><p>Distribuible. Sirve para <b>cifrar para ti</b> y para <b>verificar tus firmas</b>.</p></div>
<div><h5>Privada</h5><p>Secreta. Sirve para <b>descifrar lo que cifraron para ti</b> y para <b>firmar</b>.</p></div>
</div></div>

<div class="kvs">
<span class="k">Key escrow</span><span class="v">Depositar copia de claves con un tercero confiable para recuperación legal/empresarial.</span>
<span class="k">Recovery agent</span><span class="v">Persona/rol autorizado para recuperar claves del escrow.</span>
</div>

<h4>Niveles de cifrado (¿qué cifras?)</h4>
<div class="minicards">
<div class="minicard"><div class="h">Full-disk (FDE)</div><p>Todo el disco. <b>Ej:</b> BitLocker (Win), FileVault (Mac), LUKS (Linux).</p></div>
<div class="minicard"><div class="h">Partition</div><p>Solo una partición concreta.</p></div>
<div class="minicard"><div class="h">File / folder</div><p>Granular. <b>Ej:</b> EFS en NTFS.</p></div>
<div class="minicard"><div class="h">Volume</div><p>Volúmenes lógicos.</p></div>
<div class="minicard"><div class="h">Database</div><p><b>TDE</b> (Transparent Data Encryption): la BBDD cifra/descifra al vuelo.</p></div>
<div class="minicard"><div class="h">Record / column</div><p>Campo a campo (ej. solo el número de tarjeta).</p></div>
</div>

<h4>Simétrico vs asimétrico</h4>
<div class="compare">
<div><h5>Simétrico</h5><p>Una sola clave compartida. <b>Rápido</b> (cifra GBs sin sudar).<br><b>Algoritmos:</b> AES (128/192/256), 3DES (legacy), ChaCha20, Blowfish, Twofish, RC4 (roto).<br><b>Problema:</b> ¿cómo intercambias la clave de forma segura?</p></div>
<div><h5>Asimétrico</h5><p>Par pública/privada. <b>Lento</b> (~1000× más).<br><b>Algoritmos:</b> RSA (2048+), ECC, ECDSA, DSA, Diffie-Hellman.<br><b>Uso:</b> intercambio de clave de sesión, firmas, autenticación.</p></div>
</div>

<div class="callout tip"><span class="ico">▲</span><div><b>Cifrado híbrido (TLS, PGP):</b> usa <b>asimétrico</b> para acordar una clave de sesión simétrica → el resto del tráfico va con simétrico (rápido). Lo mejor de ambos mundos.</div></div>

<h4>Modos de cifrado por bloques (cómo se aplican)</h4>
<div class="kvs">
<span class="k">ECB</span><span class="v">Electronic Code Book. Cada bloque por separado. <b>Inseguro</b>: revela patrones.</span>
<span class="k">CBC</span><span class="v">Cipher Block Chaining. Encadena bloques con XOR del anterior. Necesita IV.</span>
<span class="k">CTR</span><span class="v">Counter mode. Convierte un cifrador de bloque en stream cipher.</span>
<span class="k">GCM</span><span class="v">Galois Counter Mode. Cifra <b>+ autentica</b> (AEAD). Estándar moderno (TLS 1.3).</span>
</div>

<h4>Intercambio de claves</h4>
<div class="term"><div class="t">Diffie-Hellman (DH)</div>Permite a dos partes acordar una clave compartida <b>sobre un canal inseguro</b> sin haberla compartido antes. <b>Magia matemática</b>: aunque alguien escuche todo el intercambio, no puede deducir la clave.<div class="why">Base de TLS. <b>DHE / ECDHE</b> (ephemeral) generan clave nueva por sesión → <b>Perfect Forward Secrecy (PFS)</b>: si te roban la clave a largo plazo, las sesiones pasadas siguen seguras.</div></div>

<h4>Herramientas hardware</h4>
<div class="minicards">
<div class="minicard"><div class="h">TPM</div><p><b>Trusted Platform Module</b>: chip soldado a la placa base. Guarda claves del equipo, hace attestation, soporta Secure Boot y BitLocker. Estándar TPM 2.0.</p></div>
<div class="minicard"><div class="h">HSM</div><p><b>Hardware Security Module</b>: appliance dedicado (PCIe o de red). FIPS 140-2/3. Para gran volumen. La clave <b>nunca</b> sale del HSM.</p></div>
<div class="minicard"><div class="h">KMS</div><p><b>Key Management Service</b>: servicio (sobre todo cloud) que gestiona el ciclo de vida de claves. Ej: AWS KMS, Azure Key Vault.</p></div>
<div class="minicard"><div class="h">Secure Enclave / TEE</div><p>Zona aislada dentro del CPU. <b>Ej:</b> Apple Secure Enclave, Intel SGX, ARM TrustZone. Protege datos <b>en uso</b>.</p></div>
</div>

<h4>Ofuscación (esconder datos)</h4>
<div class="minicards">
<div class="minicard"><div class="h">Esteganografía</div><p>Ocultar mensaje dentro de imagen/audio/vídeo. <b>No cifra</b>: oculta que existe.</p></div>
<div class="minicard"><div class="h">Tokenización</div><p>Sustituir dato sensible por un <b>token</b> sin valor matemático. Mapeo en una bóveda. Muy usado en <b>PCI DSS</b>.</p></div>
<div class="minicard"><div class="h">Data masking</div><p>Sustitución parcial: <code>XXXX-XXXX-XXXX-1234</code>. Para tests y visualización.</p></div>
</div>

<h4>Hashing (huella de una sola vía)</h4>
<p>Función matemática: entrada → digest fijo. <b>No reversible</b>. Cualquier cambio mínimo en la entrada cambia el hash entero (efecto avalancha).</p>
<table>
<tr><th>Algoritmo</th><th>Salida</th><th>Estado</th></tr>
<tr><td>MD5</td><td>128 bit</td><td>Roto (colisiones prácticas)</td></tr>
<tr><td>SHA-1</td><td>160 bit</td><td>Deprecated</td></tr>
<tr><td>SHA-2 (256/384/512)</td><td>256-512 bit</td><td>✓ Vigente</td></tr>
<tr><td>SHA-3</td><td>variable</td><td>✓ Diseño distinto, vigente</td></tr>
<tr><td>HMAC</td><td>variable</td><td>Hash + clave para integridad+autenticación</td></tr>
</table>

<div class="term"><div class="t">Salt</div>Valor aleatorio único por usuario que se añade a la contraseña <b>antes</b> de hashear.<div class="why">Anula <b>rainbow tables</b> (tablas precomputadas hash↔password) y hace que dos usuarios con la misma password tengan hashes distintos.</div></div>

<div class="term"><div class="t">Key stretching / KDFs</div>Funciones de hash <b>deliberadamente lentas</b> y costosas en memoria. La intención: que probar millones de contraseñas sea inviable.
<div class="kvs">
<span class="k">PBKDF2</span><span class="v">Iteraciones de SHA. Aceptable.</span>
<span class="k">bcrypt</span><span class="v">Basado en Blowfish, factor de coste configurable.</span>
<span class="k">scrypt</span><span class="v">Memory-hard: necesita mucha RAM, resiste GPUs/ASICs.</span>
<span class="k">Argon2</span><span class="v">★ Recomendado actual (ganador PHC 2015). Variantes Argon2i/d/id.</span>
</div></div>

<h4>Firma digital — paso a paso</h4>
<div class="flow">
<span class="step">1. Hash del mensaje</span><span class="arr">→</span>
<span class="step">2. Cifrar hash con tu clave privada</span><span class="arr">→</span>
<span class="step">3. Enviar mensaje + firma</span>
</div>
<div class="flow">
<span class="step">Receptor: hashea el mensaje</span><span class="arr">→</span>
<span class="step">Descifra firma con tu pública</span><span class="arr">→</span>
<span class="step">Compara hashes</span>
</div>
<p><b>Si coinciden:</b> integridad ✓, autenticación ✓ (sólo tú tenías la privada), no repudio ✓.</p>

<h4>Blockchain</h4>
<p>Libro mayor distribuido <b>inmutable</b>. Cada bloque incluye el hash del anterior → modificar uno requiere recomputar todos. <b>Aplicaciones:</b> criptomonedas, smart contracts, supply chain integrity, registros médicos.</p>

<h4>Certificados digitales (X.509)</h4>
<p>Atan una <b>identidad</b> a una <b>clave pública</b>, firmados por una <b>CA</b> confiable. Es el equivalente digital del DNI emitido por una autoridad.</p>

<div class="minicards">
<div class="minicard"><div class="h">CA — Certificate Authority</div><p>Quien emite y firma certificados. La <b>Root CA</b> suele estar offline; <b>CAs intermedias</b> emiten a usuarios finales.</p></div>
<div class="minicard"><div class="h">RA — Registration Authority</div><p>Verifica identidad antes de que la CA emita.</p></div>
<div class="minicard"><div class="h">CSR</div><p><b>Certificate Signing Request</b>: petición que generas con tu clave pública e info; la envías a la CA.</p></div>
<div class="minicard"><div class="h">CRL</div><p><b>Certificate Revocation List</b>: lista descargable de certificados revocados, publicada periódicamente.</p></div>
<div class="minicard"><div class="h">OCSP</div><p><b>Online Certificate Status Protocol</b>: consulta on-demand del estado. <b>OCSP stapling</b>: el servidor adjunta la respuesta firmada al handshake TLS.</p></div>
<div class="minicard"><div class="h">SAN</div><p><b>Subject Alternative Name</b>: múltiples nombres/dominios en un mismo cert (web.com, www.web.com, api.web.com).</p></div>
<div class="minicard"><div class="h">Wildcard</div><p>Vale para cualquier subdominio: <code>*.dominio.com</code>.</p></div>
<div class="minicard"><div class="h">Self-signed</div><p>Firmado por uno mismo. Sin cadena de confianza pública. OK en test/lab o para una root CA propia.</p></div>
<div class="minicard"><div class="h">Root of trust</div><p>CA cuyas firmas se aceptan implícitamente. Preinstaladas en navegadores y SO.</p></div>
</div>

<div class="kvs">
<span class="k">Validación DV</span><span class="v">Domain Validated — solo confirman que controlas el dominio.</span>
<span class="k">Validación OV</span><span class="v">Organization Validated — verifican la organización.</span>
<span class="k">Validación EV</span><span class="v">Extended Validation — auditoría profunda. Antes daba barra verde.</span>
</div>

<div class="kvs">
<span class="k">PEM</span><span class="v">Base64 con cabeceras <code>-----BEGIN-----</code>. Extensiones .pem .crt .cer.</span>
<span class="k">DER</span><span class="v">Binario, sin cabeceras de texto.</span>
<span class="k">PKCS#12 / .pfx</span><span class="v">Cert + clave privada cifrada con password.</span>
<span class="k">PKCS#7 / .p7b</span><span class="v">Solo certs (sin clave privada).</span>
</div>
`},

{
  id:"d2", title:"Dominio 2 — Amenazas y Vulnerabilidades (22%)",
  html:`
<h2>Dominio 2 — Amenazas, Vulnerabilidades y Mitigaciones</h2>
<div class="lead">El dominio más extenso. Aprendes <b>quién ataca</b> (actores), <b>cómo entran</b> (vectores), <b>qué fallos explotan</b> (vulnerabilidades), <b>cómo lo notas</b> (indicadores) y <b>cómo lo paras</b> (mitigaciones).</div>

<h3>2.1 Actores de amenaza</h3>

<h4>¿Quién ataca y por qué?</h4>
<table>
<tr><th>Actor</th><th>Quién es</th><th>Recursos</th><th>Motivación típica</th></tr>
<tr><td><b>Nation-state / APT</b></td><td>Estados o agencias. Sigiloso, persistente. <b>APT</b> = Advanced Persistent Threat.</td><td>Muy altos</td><td>Espionaje, sabotaje, geopolítica, guerra cibernética</td></tr>
<tr><td><b>Organized crime</b></td><td>Grupos profesionales tipo mafia digital.</td><td>Altos</td><td>Lucro: ransomware, fraude, robo de datos para venta</td></tr>
<tr><td><b>Hacktivist</b></td><td>Activistas con causa.</td><td>Medios</td><td>Ideología, política, ética. Defacements, leaks, DDoS</td></tr>
<tr><td><b>Insider threat</b></td><td>Empleado o contratista (actual o pasado).</td><td>Variable; ya tiene acceso</td><td>Venganza, lucro, descuido</td></tr>
<tr><td><b>Unskilled / Script kiddie</b></td><td>Usuario sin skills, usa herramientas hechas.</td><td>Bajos</td><td>Curiosidad, notoriedad</td></tr>
<tr><td><b>Shadow IT</b></td><td>Empleados que usan TI sin aprobación (Dropbox, ChatGPT...).</td><td>—</td><td>No hostiles, pero crean riesgo</td></tr>
<tr><td><b>Competitors</b></td><td>Empresa rival.</td><td>Variable</td><td>Espionaje industrial</td></tr>
</table>

<h4>Atributos a considerar</h4>
<div class="kvs">
<span class="k">Internal vs External</span><span class="v">Donde están relativo a la org.</span>
<span class="k">Resources / funding</span><span class="v">Cuánto pueden gastar.</span>
<span class="k">Sophistication</span><span class="v">Capacidad técnica (de script kiddie a APT).</span>
</div>

<h4>Motivaciones (todas posibles en una pregunta)</h4>
<p>Data exfiltration · espionaje · chantaje · servicio (RaaS, "ataque por encargo") · beneficio financiero · creencias filosóficas/políticas · ética · venganza · disrupción/caos · guerra.</p>

<h3>2.2 Vectores y superficie de ataque</h3>

<div class="callout info"><span class="ico">ⓘ</span><div><b>Vector</b> = el camino que usa el atacante para entrar. <b>Superficie de ataque</b> = la suma de todos los puntos expuestos.</div></div>

<h4>Vectores por mensaje</h4>
<div class="minicards">
<div class="minicard"><div class="h">Email</div><p>El #1. Phishing, spear phishing, BEC.</p></div>
<div class="minicard"><div class="h">SMS</div><p>Smishing — phishing por SMS.</p></div>
<div class="minicard"><div class="h">Voz</div><p>Vishing — llamada falsa del "soporte técnico".</p></div>
<div class="minicard"><div class="h">IM</div><p>Teams, Slack, WhatsApp como vector cada vez más usado.</p></div>
</div>

<h4>Otros vectores</h4>
<div class="kvs">
<span class="k">Imágenes / archivos</span><span class="v">Esteganografía, macros (Word/Excel), ejecutables disfrazados.</span>
<span class="k">Removable devices</span><span class="v">USB drops (dejan un USB en el parking), <b>BadUSB</b> (pendrive que actúa como teclado), cables maliciosos como el O.MG cable.</span>
<span class="k">Software vulnerable</span><span class="v">Cliente (navegador, lector PDF) o agentes corporativos (RMM, antivirus).</span>
<span class="k">Sistemas EOL</span><span class="v">End-of-Life: sin parches del fabricante.</span>
<span class="k">Puertos / protocolos inseguros</span><span class="v">Telnet 23, FTP 21, SMBv1, SNMPv1/v2c.</span>
<span class="k">Default credentials</span><span class="v">admin/admin en routers, IoT, paneles.</span>
<span class="k">Open service ports</span><span class="v">Puertos abiertos sin necesidad — superficie regalada.</span>
<span class="k">Supply chain</span><span class="v">MSP comprometido, hardware con backdoor, dependencias de software (npm, PyPI).</span>
</div>

<h4>Ingeniería social (manipulación humana)</h4>
<table>
<tr><th>Técnica</th><th>Qué es</th></tr>
<tr><td>Phishing</td><td>Email masivo con anzuelo (link/adjunto malicioso).</td></tr>
<tr><td>Spear phishing</td><td>Phishing dirigido y personalizado a un objetivo.</td></tr>
<tr><td>Whaling</td><td>Spear phishing a "peces gordos" (CEO, CFO).</td></tr>
<tr><td>Vishing</td><td>Voz/teléfono. "Soy del banco, necesito su PIN".</td></tr>
<tr><td>Smishing</td><td>SMS. "Su paquete está retenido, pague aquí".</td></tr>
<tr><td>BEC</td><td><b>Business Email Compromise</b>: suplantan al CEO/proveedor para fraude financiero.</td></tr>
<tr><td>Pretexting</td><td>Inventan un pretexto creíble (auditor, técnico).</td></tr>
<tr><td>Watering hole</td><td>Comprometen una web que la víctima visita habitualmente.</td></tr>
<tr><td>Brand impersonation</td><td>Suplantan marca conocida (DHL, Microsoft, banco).</td></tr>
<tr><td>Typosquatting</td><td>Dominios parecidos: <code>amaz0n.com</code>, <code>microsft.com</code>.</td></tr>
<tr><td>Tailgating / Piggybacking</td><td>Colarse físicamente detrás de alguien autorizado.</td></tr>
<tr><td>Shoulder surfing</td><td>Mirar por encima del hombro al teclear.</td></tr>
<tr><td>Dumpster diving</td><td>Buscar info en la basura.</td></tr>
<tr><td>MFA fatigue / push bombing</td><td>Spamean prompts MFA hasta que el usuario aceptan por hartazgo.</td></tr>
</table>

<div class="callout exam"><span class="ico">★</span><div><b>Principios de influencia (Cialdini):</b> autoridad, intimidación, consenso, escasez, urgencia, familiaridad, confianza. El examen pregunta cuál se está usando.</div></div>

<h3>2.3 Tipos de vulnerabilidades</h3>

<h4>De aplicación</h4>
<div class="term"><div class="t">Memory injection</div>El atacante mete código en el espacio de memoria de un proceso legítimo. Lo ejecuta como si fuera el proceso original → evade AV.</div>

<div class="term"><div class="t">Buffer overflow</div>Escribir más datos de los que cabe en un buffer → sobrescribe memoria contigua. Permite ejecutar código arbitrario.<div class="why"><b>Mitigaciones:</b> ASLR (aleatoriza direcciones), DEP/NX (memoria no ejecutable), stack canaries (centinela detecta sobrescritura), lenguajes memory-safe (Rust, Go).</div></div>

<div class="term"><div class="t">Race condition (TOCTOU)</div><b>Time-Of-Check Time-Of-Use</b>. Hay una ventanita entre verificar algo y usarlo; el atacante cambia el estado en ese hueco.<div class="why"><b>Ejemplo:</b> verificas que un archivo es seguro, y antes de leerlo el atacante lo cambia por uno malicioso.</div></div>

<div class="term"><div class="t">Malicious update</div>Una actualización legítima viene comprometida (SolarWinds), o el atacante hace de fake updater.</div>

<h4>De sistema operativo</h4>
<p>Kernel exploits, drivers vulnerables, falta de parches. Permiten <b>privilege escalation</b> (subir de usuario normal a admin/root).</p>

<h4>Web</h4>
<div class="term"><div class="t">SQLi — SQL Injection</div>Inyectas SQL en un input no validado.<div class="why"><b>Ejemplo:</b> en login con <code>SELECT * WHERE user='X' AND pass='Y'</code> metes <code>' OR '1'='1</code> → siempre verdadero. <b>Mitigación:</b> prepared statements / parametrized queries.</div></div>

<div class="term"><div class="t">XSS — Cross-Site Scripting</div>Inyectas <code>&lt;script&gt;</code> que se ejecuta en el navegador de otros usuarios.
<div class="kvs">
<span class="k">Reflected</span><span class="v">Payload va en URL/parámetro; se ejecuta al cargar.</span>
<span class="k">Stored</span><span class="v">Persiste en BBDD/comentarios; afecta a todos los visitantes.</span>
<span class="k">DOM-based</span><span class="v">Manipulación del DOM en cliente sin tocar servidor.</span>
</div>
<div class="why"><b>Mitigaciones:</b> output encoding, Content Security Policy (CSP), sanitización, HttpOnly cookies.</div></div>

<div class="term"><div class="t">CSRF — Cross-Site Request Forgery</div>Te aprovechas de la sesión autenticada del usuario para que su navegador envíe una petición sin querer.<div class="why"><b>Ejemplo:</b> usuario logado en su banco abre una web maliciosa que dispara una transferencia. <b>Mitigación:</b> tokens anti-CSRF, cookies SameSite, verificación de Referer.</div></div>

<div class="term"><div class="t">Directory traversal</div>Saltar fuera del directorio permitido: <code>../../etc/passwd</code>.</div>

<div class="term"><div class="t">SSRF — Server-Side Request Forgery</div>Fuerzas al servidor a hacer peticiones a recursos internos en tu nombre. Permite acceder a APIs privadas o metadata cloud.</div>

<h4>Hardware</h4>
<div class="kvs">
<span class="k">Firmware</span><span class="v">Vulnerabilidades a bajo nivel (UEFI/BIOS rootkits, persistente entre reinstalaciones).</span>
<span class="k">EOL / End-of-Life</span><span class="v">Sin actualizaciones del fabricante. Riesgo creciente con el tiempo.</span>
<span class="k">End of service life</span><span class="v">Sin soporte ni parches.</span>
</div>

<h4>Virtualización</h4>
<div class="minicards">
<div class="minicard"><div class="h">VM escape</div><p>Romper el aislamiento de la VM y llegar al hipervisor o al host. Crítico.</p></div>
<div class="minicard"><div class="h">Resource reuse</div><p>Te asignan memoria/disco que aún tenía datos del cliente anterior.</p></div>
<div class="minicard"><div class="h">VM sprawl</div><p>Proliferación descontrolada de VMs sin gestión ni parches.</p></div>
</div>

<h4>Cloud</h4>
<p>Misconfiguraciones (buckets S3 públicos, IAM permisivo, credenciales en repos), shadow APIs, secretos hardcodeados.</p>

<h4>Supply chain</h4>
<p>Service provider, hardware provider, software provider. <b>Casos famosos:</b> SolarWinds, Log4j, dependencias npm comprometidas.</p>

<h4>Criptográficas</h4>
<p>Algoritmo débil (DES, MD5, SHA-1, RC4), clave corta, mala generación de aleatoriedad, IV/nonce reutilizado, implementaciones bugadas (Heartbleed, POODLE).</p>

<h4>Misconfiguration</h4>
<p>Default passwords, servicios innecesarios, permisos excesivos, logging deshabilitado, debug expuesto en producción.</p>

<h4>Móviles</h4>
<div class="kvs">
<span class="k">Sideloading</span><span class="v">Instalar apps fuera de la tienda oficial — sin verificación.</span>
<span class="k">Jailbreaking / Rooting</span><span class="v">Saltar restricciones del fabricante. Rompe el modelo de seguridad.</span>
</div>

<h4>Zero-day</h4>
<p>Vulnerabilidad <b>desconocida por el vendor</b>, sin parche. Vendidas en mercados negros y brokers gubernamentales por mucho dinero.<br><b>Defensa:</b> defensa en profundidad, EDR/XDR, segmentación, detección por comportamiento anómalo (no por firma).</p>

<h3>2.4 Indicadores de actividad maliciosa (IoC)</h3>

<h4>Familias de malware</h4>
<table>
<tr><th>Tipo</th><th>Comportamiento</th></tr>
<tr><td>Virus</td><td>Necesita un archivo anfitrión y acción del usuario para propagarse.</td></tr>
<tr><td>Worm</td><td>Auto-replica por red sin host ni interacción humana.</td></tr>
<tr><td>Trojan</td><td>Software aparentemente legítimo con payload malicioso oculto.</td></tr>
<tr><td>RAT</td><td><b>Remote Access Trojan</b>: control remoto del host comprometido.</td></tr>
<tr><td>Ransomware</td><td>Cifra archivos y exige rescate. Modelo moderno: <b>doble extorsión</b> (filtran datos + cifran).</td></tr>
<tr><td>Spyware</td><td>Espía: navegación, credenciales, capturas.</td></tr>
<tr><td>Keylogger</td><td>Captura pulsaciones de teclado. Hardware (en cable USB) o software.</td></tr>
<tr><td>Rootkit</td><td>Oculta presencia, opera en kernel/firmware. Difícil de detectar.</td></tr>
<tr><td>Bootkit</td><td>Rootkit en MBR/UEFI. Persiste antes de que arranque el SO.</td></tr>
<tr><td>Logic bomb</td><td>Código que se activa cuando se cumple una condición (fecha, evento).</td></tr>
<tr><td>Bloatware</td><td>Software preinstalado innecesario. Aumenta superficie sin aportar.</td></tr>
<tr><td>Cryptominer</td><td>Mina cripto secuestrando CPU/GPU. <b>Síntoma:</b> uso alto y ventiladores a tope.</td></tr>
<tr><td>Fileless malware</td><td>Vive en memoria; no toca disco. Usa PowerShell, WMI. Evade AV de archivos.</td></tr>
<tr><td>Botnet</td><td>Red de hosts comprometidos controlada por un servidor C2 (Command & Control).</td></tr>
<tr><td>PUP</td><td><b>Potentially Unwanted Program</b>: adware, toolbars, software molesto.</td></tr>
</table>

<h4>Ataques físicos</h4>
<div class="kvs">
<span class="k">Brute force físico</span><span class="v">Forzar cerradura, romper ventana.</span>
<span class="k">RFID cloning</span><span class="v">Copiar tarjetas de proximidad con dispositivos como Flipper Zero.</span>
<span class="k">Environmental</span><span class="v">Manipular HVAC para dañar hardware, o aplicar nieve carbónica a SSD para forzar lectura sin cifrado.</span>
</div>

<h4>Ataques de red</h4>
<div class="term"><div class="t">DDoS</div><b>Distributed Denial of Service</b>: muchos hosts atacando a la vez para tirar un servicio. Variantes:
<div class="kvs">
<span class="k">Volumétrico</span><span class="v">Saturar el ancho de banda.</span>
<span class="k">Por protocolo</span><span class="v">Agotar recursos (SYN flood).</span>
<span class="k">Capa 7</span><span class="v">Contra la app (peticiones HTTP costosas).</span>
<span class="k">Reflection</span><span class="v">Suplantan IP origen; las respuestas inundan a la víctima.</span>
<span class="k">Amplification</span><span class="v">Usan protocolos donde la respuesta es mucho mayor que la petición (DNS, NTP, Memcached).</span>
</div></div>

<div class="term"><div class="t">DNS attacks</div>
<div class="kvs">
<span class="k">DNS poisoning</span><span class="v">Envenenan caché DNS para redirigir tráfico. Mitigación: <b>DNSSEC</b>.</span>
<span class="k">DNS hijacking</span><span class="v">Alteran registros DNS reales del dominio.</span>
<span class="k">Domain hijacking</span><span class="v">Roban el dominio entero (ingeniería social al registrador).</span>
</div></div>

<div class="term"><div class="t">Spoofing</div>Suplantar identidad: IP, MAC, ARP, email. Base de muchos otros ataques.</div>

<div class="term"><div class="t">On-path attack (antes MITM)</div>Te metes <b>en medio</b> de la comunicación entre dos partes; puedes leer y modificar.<div class="why"><b>Defensa:</b> cifrado extremo a extremo, certificate pinning, HSTS.</div></div>

<div class="term"><div class="t">Replay attack</div>Capturas credenciales/tokens válidos y los reenvías más tarde.<div class="why"><b>Defensas:</b> nonces, timestamps, tokens de un solo uso, sesiones cortas, MFA.</div></div>

<div class="term"><div class="t">Wireless attacks</div>
<div class="kvs">
<span class="k">Deauth</span><span class="v">Envían paquetes de desconexión para tirar a usuarios del Wi-Fi.</span>
<span class="k">Evil twin</span><span class="v">AP gemelo malicioso con el mismo SSID que el corporativo.</span>
<span class="k">KRACK</span><span class="v">Vulnerabilidad histórica de WPA2.</span>
<span class="k">Bluejacking</span><span class="v">Envío no solicitado por Bluetooth.</span>
<span class="k">Bluesnarfing</span><span class="v">Robo de datos por Bluetooth.</span>
<span class="k">Bluebugging</span><span class="v">Control remoto por Bluetooth.</span>
</div></div>

<h4>Ataques de aplicación</h4>
<p>Injection (SQL, LDAP, command, XPath), buffer overflow, replay, privilege escalation, forgery (request, session), directory traversal, XSS, CSRF.</p>

<h4>Ataques criptográficos</h4>
<div class="kvs">
<span class="k">Downgrade</span><span class="v">Forzar versión débil. <b>POODLE</b> en SSLv3, <b>FREAK</b> en TLS.</span>
<span class="k">Collision</span><span class="v">Encontrar dos entradas con mismo hash. Roto en MD5/SHA-1.</span>
<span class="k">Birthday attack</span><span class="v">Aprovecha la paradoja del cumpleaños para reducir esfuerzo de colisión.</span>
<span class="k">Brute force</span><span class="v">Probar todo el espacio de claves.</span>
<span class="k">Side-channel</span><span class="v">Medir consumo, tiempo, EMI para deducir claves.</span>
</div>

<h4>Ataques de contraseñas</h4>
<div class="minicards">
<div class="minicard"><div class="h">Brute force</div><p>Probar todas las combinaciones.</p></div>
<div class="minicard"><div class="h">Dictionary</div><p>Lista de palabras probables.</p></div>
<div class="minicard"><div class="h">Spray</div><p>Pocas passwords comunes (Verano2024!) contra <b>muchas</b> cuentas. Evita lockouts.</p></div>
<div class="minicard"><div class="h">Rainbow table</div><p>Tablas precomputadas hash↔password. Salt las anula.</p></div>
<div class="minicard"><div class="h">Hybrid</div><p>Diccionario + mutaciones (Password1!, Password2024).</p></div>
</div>

<h4>Indicadores típicos (lo que ves cuando algo va mal)</h4>
<div class="callout warn"><span class="ico">⚠</span><div>Estos son los <b>IoC</b> (Indicators of Compromise) que el examen mencionará en escenarios. Tu trabajo: reconocerlos.</div></div>
<div class="kvs">
<span class="k">Account lockouts</span><span class="v">Cuentas bloqueadas en cantidad inusual → posible spray/brute.</span>
<span class="k">Concurrent session usage</span><span class="v">La misma cuenta logada en dos sitios a la vez.</span>
<span class="k">Impossible travel</span><span class="v">Login en Madrid y 5 min después en Tokio. Imposible físicamente.</span>
<span class="k">Resource consumption</span><span class="v">CPU/red disparada sin causa → cryptominer, exfiltración.</span>
<span class="k">Resource inaccessibility</span><span class="v">Archivos cifrados, recursos caídos → ransomware.</span>
<span class="k">Out-of-cycle logging</span><span class="v">Actividad fuera del horario habitual.</span>
<span class="k">Missing / blank logs</span><span class="v">Logs vacíos durante una franja → manipulación.</span>
<span class="k">Published indicators</span><span class="v">Threat intel publicado coincide con lo que ves.</span>
</div>

<h3>2.5 Técnicas de mitigación</h3>

<h4>Mitigaciones generales</h4>
<div class="minicards">
<div class="minicard"><div class="h">Segmentation</div><p>Trozar la red en VLANs/subredes para que un compromiso no se extienda.</p></div>
<div class="minicard"><div class="h">Access control</div><p>ACLs, permisos, <b>least privilege</b> (mínimo necesario), separación de funciones.</p></div>
<div class="minicard"><div class="h">Application allow list</div><p>Sólo se ejecutan los binarios firmados/aprobados. <b>Ej:</b> AppLocker, WDAC.</p></div>
<div class="minicard"><div class="h">Isolation</div><p>Sandboxing, contenedores, jaulas chroot.</p></div>
<div class="minicard"><div class="h">Patching</div><p>Pipeline ordenado: test → ring deployment → rollback plan.</p></div>
<div class="minicard"><div class="h">Encryption</div><p>En reposo, en tránsito, en uso.</p></div>
<div class="minicard"><div class="h">Monitoring</div><p>SIEM, EDR, UEBA (User Entity Behavior Analytics).</p></div>
<div class="minicard"><div class="h">Configuration enforcement</div><p>Forzar configuraciones aprobadas con GPO, MDM, IaC, CIS Benchmarks.</p></div>
<div class="minicard"><div class="h">Decommissioning</div><p>Sanitizar y retirar activos al EOL.</p></div>
</div>

<h4>Hardening (endurecer un sistema)</h4>
<div class="callout info"><span class="ico">ⓘ</span><div><b>Hardening</b> = reducir la superficie de ataque eliminando lo innecesario y aplicando configuraciones seguras. Lo opuesto a "instalar y dejar por defecto".</div></div>
<div class="kvs">
<span class="k">Encryption por defecto</span><span class="v">Disco, comunicaciones, backups.</span>
<span class="k">Instalar EDR</span><span class="v">Endpoint Detection and Response: detecta y responde en endpoints.</span>
<span class="k">Host-based firewall</span><span class="v">Firewall en el propio equipo (Windows Defender Firewall, ufw).</span>
<span class="k">HIPS</span><span class="v"><b>Host-based Intrusion Prevention System</b>: como un IPS pero corre en el host. Bloquea acciones sospechosas (ej. inyección de DLL).</span>
<span class="k">Deshabilitar puertos / protocolos</span><span class="v">Cerrar lo que no se usa: si no necesitas SMB, lo apagas. Cada puerto abierto es una puerta posible.</span>
<span class="k">Cambiar default passwords</span><span class="v">Routers, switches, IoT, paneles admin vienen con admin/admin.</span>
<span class="k">Eliminar software innecesario</span><span class="v">Bloatware, demos, software preinstalado que no usas. Cada programa = vulnerabilidades potenciales.</span>
</div>
`},

{
  id:"d3", title:"Dominio 3 — Arquitectura de Seguridad (18%)",
  html:`
<h2>Dominio 3 — Arquitectura de Seguridad</h2>
<div class="lead">Cómo se diseña la infraestructura de forma segura. Modelos cloud, segmentación de red, protección de datos en sus tres estados, alta disponibilidad y recuperación.</div>

<h3>3.1 Implicaciones de seguridad de modelos arquitectónicos</h3>

<h4>Cloud — modelos de servicio</h4>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogía de la pizza:</b> <b>On-prem</b> = haces la pizza en casa (todo tú). <b>IaaS</b> = pides masa y queso (te dan ingredientes, tú cocinas). <b>PaaS</b> = pides pizza congelada (sólo metes al horno). <b>SaaS</b> = vas a la pizzería (te la sirven hecha).</div></div>

<table>
<tr><th>Capa</th><th>On-prem</th><th>IaaS</th><th>PaaS</th><th>SaaS</th></tr>
<tr><td>Aplicación / datos</td><td>Cliente</td><td>Cliente</td><td>Cliente</td><td>Cliente (config)</td></tr>
<tr><td>Runtime / middleware</td><td>Cliente</td><td>Cliente</td><td>Proveedor</td><td>Proveedor</td></tr>
<tr><td>Sistema operativo</td><td>Cliente</td><td>Cliente</td><td>Proveedor</td><td>Proveedor</td></tr>
<tr><td>Virt. / HW / Red / Físico</td><td>Cliente</td><td>Proveedor</td><td>Proveedor</td><td>Proveedor</td></tr>
</table>

<h4>Modelos de despliegue cloud</h4>
<div class="kvs">
<span class="k">Public</span><span class="v">El proveedor te da recursos compartidos en su infra (AWS, Azure, GCP).</span>
<span class="k">Private</span><span class="v">Cloud dedicado a tu organización.</span>
<span class="k">Hybrid</span><span class="v">Mezcla de público y privado u on-prem.</span>
<span class="k">Community</span><span class="v">Compartido entre orgs con intereses comunes (ej. universidades).</span>
</div>

<div class="term"><div class="t">Third-party vendors</div>
<div class="kvs">
<span class="k">MSP</span><span class="v"><b>Managed Service Provider</b>: gestiona TI por ti.</span>
<span class="k">MSSP</span><span class="v"><b>Managed Security Service Provider</b>: gestiona seguridad (SOC, EDR).</span>
</div></div>

<h4>Otros modelos</h4>
<div class="term"><div class="t">IaC — Infrastructure as Code</div>Defines la infra en archivos versionables. <b>Ej:</b> Terraform, CloudFormation, Pulumi.<div class="why"><b>Beneficios:</b> repetibilidad, revisión por pares, evita "configuration drift", se puede escanear con herramientas (Checkov, tfsec).</div></div>

<div class="term"><div class="t">Serverless</div>El proveedor gestiona los servidores; tú subes funciones (AWS Lambda, Azure Functions).<div class="why"><b>Pros:</b> menos superficie, pago por uso. <b>Contras:</b> dependencia del proveedor, cold starts, monitoreo distinto.</div></div>

<div class="term"><div class="t">Microservicios</div>Aplicaciones partidas en muchos servicios pequeños que hablan por APIs.<div class="why"><b>Pros:</b> escalan y se despliegan independientes. <b>Contras:</b> más superficie, requieren autenticación entre servicios (mTLS, service mesh).</div></div>

<h4>Infraestructura de red</h4>
<div class="kvs">
<span class="k">Físico vs SDN</span><span class="v"><b>Software-Defined Networking</b>: separa plano de control y datos; políticas centralizadas.</span>
<span class="k">Centralizado vs descentralizado</span><span class="v">Trade-off entre control y resiliencia.</span>
<span class="k">Containerization</span><span class="v">Docker, podman. Comparten kernel; aislamiento menor que VMs pero arrancan en segundos.</span>
<span class="k">Virtualización Type 1</span><span class="v">Bare-metal: ESXi, Hyper-V, KVM, Xen. Hipervisor sobre el hardware.</span>
<span class="k">Virtualización Type 2</span><span class="v">Hosted: VMware Workstation, VirtualBox. Hipervisor sobre un SO.</span>
<span class="k">IoT</span><span class="v"><b>Internet of Things</b>: dispositivos conectados (cámaras, termostatos). Suelen estar mal parchados, con default creds.</span>
<span class="k">ICS / SCADA</span><span class="v">Control industrial. PLCs, HMIs. Legacy, segmentar a tope (modelo Purdue).</span>
<span class="k">RTOS</span><span class="v"><b>Real-Time OS</b>: tiempos deterministas. Aviónica, dispositivos médicos.</span>
<span class="k">Embebidos</span><span class="v">Funcionalidad fija; difícil actualizar.</span>
<span class="k">High availability</span><span class="v">Diseño que tolera fallos: clustering, geo-redundancia.</span>
</div>

<h4>Consideraciones a evaluar al elegir arquitectura</h4>
<p>Disponibilidad, resiliencia, costo, capacidad de respuesta, escalabilidad, facilidad de despliegue, riesgo asociado, capacidad de parcheo, costos de adquisición/operación, ease of recovery, requisitos de potencia/cómputo.</p>

<h3>3.2 Asegurar la infraestructura empresarial</h3>

<h4>Dispositivos clave</h4>
<table>
<tr><th>Dispositivo</th><th>Función</th></tr>
<tr><td>Firewall</td><td>Filtra tráfico. Stateful, NGFW, WAF (capa 7).</td></tr>
<tr><td>IDS</td><td><b>Intrusion Detection System</b>: detecta y avisa. <b>Pasivo</b>.</td></tr>
<tr><td>IPS</td><td><b>Intrusion Prevention System</b>: detecta y <b>bloquea</b>. <b>In-line</b>.</td></tr>
<tr><td>Switch</td><td>Capa 2. Port security, 802.1X, VLANs.</td></tr>
<tr><td>Router</td><td>Capa 3. ACLs, autenticación de routing.</td></tr>
<tr><td>Proxy forward</td><td>El cliente sale a internet vía proxy. Filtrado web.</td></tr>
<tr><td>Proxy reverse</td><td>Clientes externos llegan a tus servidores vía proxy. Load balancing, WAF, terminación TLS.</td></tr>
<tr><td>Load balancer</td><td>Reparte tráfico (round robin, least connections, weighted). Capa 4 o 7.</td></tr>
<tr><td>Sensores</td><td>NetFlow, sFlow, taps, packet brokers.</td></tr>
<tr><td>Jump server (bastión)</td><td>Único host endurecido para administrar el resto.</td></tr>
</table>

<h4>Modos de despliegue</h4>
<div class="kvs">
<span class="k">Active vs Passive</span><span class="v">Para HA: Active/Active reparte carga; Active/Passive uno espera.</span>
<span class="k">Inline vs Tap/Monitor</span><span class="v"><b>Inline</b> puede bloquear pero añade latencia. <b>Tap</b> sólo observa, no afecta a disponibilidad.</span>
<span class="k">Fail-open vs Fail-closed</span><span class="v">Si el control falla: <b>fail-open</b> deja pasar (disponibilidad), <b>fail-closed</b> corta (seguridad).</span>
</div>

<h4>Tipos de firewall</h4>
<table>
<tr><th>Tipo</th><th>Capas</th><th>Características</th></tr>
<tr><td>Packet filter</td><td>L3-L4</td><td>Stateless. Solo IP/puerto. Lo más básico.</td></tr>
<tr><td>Stateful</td><td>L3-L4</td><td>Recuerda el estado de las conexiones.</td></tr>
<tr><td>NGFW</td><td>L3-L7</td><td><b>Next-Gen</b>: DPI (Deep Packet Inspection), conoce aplicaciones, identidad de usuario, IPS integrado, threat intel.</td></tr>
<tr><td>WAF</td><td>L7</td><td><b>Web Application Firewall</b>: protege apps web contra OWASP Top 10 (SQLi, XSS).</td></tr>
<tr><td>UTM</td><td>L3-L7</td><td><b>Unified Threat Management</b>: caja todo-en-uno (FW + AV + IPS + VPN + filtrado web).</td></tr>
</table>

<h4>VPN y túneles</h4>
<div class="kvs">
<span class="k">Remote access VPN</span><span class="v">Usuario individual → red corporativa.</span>
<span class="k">Site-to-site VPN</span><span class="v">Gateway a gateway (oficina ↔ datacenter).</span>
<span class="k">Full tunnel</span><span class="v">Todo el tráfico va por VPN. Más seguro, peor rendimiento.</span>
<span class="k">Split tunnel</span><span class="v">Sólo el tráfico corporativo va por VPN; el resto sale directo.</span>
<span class="k">Always-on VPN</span><span class="v">Siempre conectada en cuanto haya red.</span>
<span class="k">Clientless VPN</span><span class="v">Sobre HTTPS desde el navegador, sin instalar cliente.</span>
</div>

<h4>IPsec — VPN a nivel de red</h4>
<div class="minicards">
<div class="minicard"><div class="h">AH — Authentication Header</div><p>Integridad y autenticación. <b>NO</b> cifra. Casi no se usa.</p></div>
<div class="minicard"><div class="h">ESP — Encapsulating Security Payload</div><p>Cifra + integridad + autenticación. Lo común.</p></div>
<div class="minicard"><div class="h">IKE / IKEv2</div><p>Negocia las claves y SAs. UDP 500 (NAT-T en UDP 4500).</p></div>
</div>
<div class="kvs">
<span class="k">Modo Transport</span><span class="v">Cifra solo el payload. Host-to-host.</span>
<span class="k">Modo Tunnel</span><span class="v">Cifra el paquete IP entero. Gateway-to-gateway (VPN site-to-site).</span>
</div>

<h4>SD-WAN y SASE</h4>
<div class="term"><div class="t">SD-WAN</div><b>Software-Defined WAN</b>. Abstrae los enlaces (MPLS, internet, LTE) y enruta dinámicamente por aplicación y políticas. Reemplaza al MPLS caro y rígido.</div>

<div class="term"><div class="t">SASE</div><b>Secure Access Service Edge</b>. SD-WAN + servicios de seguridad cloud (CASB, ZTNA, SWG, FWaaS, DLP) entregados desde el edge cercano al usuario. <b>"Red + seguridad como servicio".</b></div>

<h4>Control de acceso a red</h4>
<div class="term"><div class="t">802.1X</div>Autenticación basada en puerto. Tres roles:
<div class="flow">
<span class="step">Suplicante (cliente)</span><span class="arr">↔</span>
<span class="step">Authenticator (switch/AP)</span><span class="arr">↔</span>
<span class="step">Authentication Server (RADIUS)</span>
</div>
Usa <b>EAP</b> como protocolo de autenticación.</div>

<div class="term"><div class="t">NAC — Network Access Control</div>Antes de admitir un dispositivo en la red, verifica su <b>postura</b>: parches, AV, cifrado, dominio. Si no cumple → cuarentena/red de remediación.</div>

<div class="term"><div class="t">Port security</div>Limitar MACs por puerto en el switch, BPDU guard (evita BPDUs falsos en STP), DHCP snooping (filtra DHCP rogue), Dynamic ARP Inspection (evita ARP spoofing).</div>

<h4>Conceptos de diseño</h4>
<div class="kvs">
<span class="k">Security by design</span><span class="v">Seguridad integrada desde el inicio, no añadida después.</span>
<span class="k">Defense in depth</span><span class="v">Múltiples capas; si una falla, otra protege.</span>
<span class="k">Security zones</span><span class="v">Internet, DMZ, intranet, gestión, OT — cada una con su nivel de confianza.</span>
<span class="k">Screened subnet (DMZ)</span><span class="v">Subred entre internet y la LAN para servidores expuestos.</span>
<span class="k">East-West traffic</span><span class="v">Tráfico entre servidores dentro del datacenter. Suele ser la zona ciega.</span>
<span class="k">Attack surface</span><span class="v">Suma de todos los puntos expuestos. Hay que minimizarla.</span>
</div>

<h3>3.3 Proteger los datos</h3>

<h4>Tipos de datos</h4>
<div class="kvs">
<span class="k">Regulated</span><span class="v">Sujeto a ley (GDPR, HIPAA, PCI DSS).</span>
<span class="k">Trade secret / IP</span><span class="v">Secretos comerciales, propiedad intelectual.</span>
<span class="k">Legal information</span><span class="v">Documentos jurídicos, casos.</span>
<span class="k">Financial information</span><span class="v">Datos financieros.</span>
<span class="k">PII</span><span class="v"><b>Personally Identifiable Information</b>: datos que identifican a una persona (DNI, dirección).</span>
<span class="k">PHI</span><span class="v"><b>Protected Health Information</b>: salud (HIPAA en EEUU).</span>
<span class="k">Human-readable</span><span class="v">Texto plano, documentos.</span>
<span class="k">Non-human-readable</span><span class="v">Binarios, hashes, datos estructurados.</span>
</div>

<h4>Clasificaciones</h4>
<p><b>Public · Sensitive · Private · Confidential · Critical · Restricted</b>. Cada org define su esquema; debe ser consistente y aplicado.</p>

<h4>Estados de los datos — los tres frentes</h4>
<div class="minicards">
<div class="minicard"><div class="h">At rest (en reposo)</div><p>Almacenados (disco, BBDD, backup). <b>Protección:</b> cifrado FDE, file-level, TDE.</p></div>
<div class="minicard"><div class="h">In transit (en tránsito)</div><p>Viajando por red. <b>Protección:</b> TLS, IPsec, SSH.</p></div>
<div class="minicard"><div class="h">In use (en uso)</div><p>En RAM/proceso siendo usados. <b>Protección:</b> TEE, enclaves, confidential computing.</p></div>
</div>

<h4>Soberanía y geolocalización</h4>
<p>Las leyes que aplican dependen del <b>país donde residen físicamente</b> los datos. GDPR exige condiciones para sacar datos de la UE (SCC, BCR, decisiones de adecuación).</p>

<h4>Métodos de protección</h4>
<p>Encryption · Hashing (integridad) · Masking · Tokenization · Obfuscation · Segmentation · Permission restrictions · DRM (Digital Rights Management).</p>

<h3>3.4 Resiliencia y recuperación</h3>

<h4>Alta disponibilidad</h4>
<div class="compare">
<div><h5>Load balancing</h5><p>Reparte tráfico entre nodos sanos. Algoritmos: round robin, least connections, IP hash, weighted.</p></div>
<div><h5>Clustering</h5><p>Nodos coordinados que aparecen como uno solo. Failover automático si uno cae.</p></div>
</div>

<h4>Sites alternativos (recovery sites)</h4>
<table>
<tr><th>Tipo</th><th>Equipamiento</th><th>RTO típico</th><th>Coste</th></tr>
<tr><td>Hot</td><td>Operativo, datos sincronizados en vivo</td><td>Minutos – 1h</td><td>Alto</td></tr>
<tr><td>Warm</td><td>Hardware listo, datos algo desactualizados</td><td>Horas</td><td>Medio</td></tr>
<tr><td>Cold</td><td>Solo el espacio + utilities; sin hardware</td><td>Días – semanas</td><td>Bajo</td></tr>
</table>
<p><b>Geographic dispersion:</b> sitios separados lo bastante para sobrevivir a desastres regionales (terremoto, apagón, inundación).</p>

<h4>Continuidad y capacity planning</h4>
<p>Planificas <b>personas</b>, <b>tecnología</b> e <b>infraestructura</b>. Previsión de crecimiento, picos estacionales, recursos de respaldo.</p>

<h4>Pruebas de recuperación</h4>
<div class="minicards">
<div class="minicard"><div class="h">Tabletop exercise</div><p>Discusión de escenario sin tocar sistemas. Lo más barato.</p></div>
<div class="minicard"><div class="h">Failover test</div><p>Conmutación real al sitio secundario.</p></div>
<div class="minicard"><div class="h">Simulation</div><p>Escenario realista con ejecución parcial.</p></div>
<div class="minicard"><div class="h">Parallel processing</div><p>El sitio alternativo procesa en paralelo, sin asumir producción.</p></div>
</div>

<h4>Backups</h4>
<div class="kvs">
<span class="k">Full</span><span class="v">Copia completa.</span>
<span class="k">Incremental</span><span class="v">Sólo cambios desde el último backup (cualquiera).</span>
<span class="k">Differential</span><span class="v">Cambios desde el último <b>full</b>.</span>
<span class="k">Snapshot</span><span class="v">Foto del estado en un momento.</span>
<span class="k">Replication</span><span class="v">Copia continua a otro sitio.</span>
<span class="k">Journaling</span><span class="v">Log de cambios para recuperar transacciones.</span>
</div>

<div class="callout exam"><span class="ico">★</span><div><b>Regla 3-2-1:</b> 3 copias, en 2 medios distintos, con 1 offsite. Variante moderna <b>3-2-1-1-0</b>: 1 copia offline/inmutable, 0 errores tras verificación. Las copias <b>inmutables</b> protegen contra ransomware.</div></div>

<h4>Energía</h4>
<div class="kvs">
<span class="k">UPS</span><span class="v"><b>Uninterruptible Power Supply</b>: batería para cortes breves y apagado limpio.</span>
<span class="k">Generator</span><span class="v">Generador para cortes prolongados.</span>
<span class="k">PDU</span><span class="v"><b>Power Distribution Unit</b>: distribuye y monitoriza energía en rack.</span>
<span class="k">Dual power supplies</span><span class="v">Servidores con dos fuentes de alimentación, cada una en una línea distinta.</span>
</div>
`},

{
  id:"d4", title:"Dominio 4 — Operaciones de Seguridad (28%)",
  html:`
<h2>Dominio 4 — Operaciones de Seguridad</h2>
<div class="lead">El dominio más grande (28%). Día a día del SOC: hardening, gestión de vulnerabilidades, monitoreo, IAM, automatización, respuesta a incidentes y forense.</div>

<h3>4.1 Aplicar técnicas de seguridad</h3>

<h4>Secure baselines (configuración base segura)</h4>
<div class="callout info"><span class="ico">ⓘ</span><div>Una <b>baseline</b> es la configuración estándar mínima que todo sistema debe cumplir. Cualquier desviación es un riesgo.</div></div>
<div class="flow">
<span class="step">1. Establish</span><span class="arr">→</span>
<span class="step">2. Deploy</span><span class="arr">→</span>
<span class="step">3. Maintain</span>
</div>
<p>Se valida con escaneos, GPO, MDM y herramientas como <b>SCAP</b> (Security Content Automation Protocol), <b>CIS Benchmarks</b> y <b>DISA STIGs</b> (guías de hardening del DoD).</p>

<h4>Hardening por tipo de objetivo</h4>
<table>
<tr><th>Objetivo</th><th>Acciones clave</th></tr>
<tr><td>Mobile devices</td><td>MDM, cifrado, screen lock, sin jailbreak/root, sólo store oficial.</td></tr>
<tr><td>Workstations</td><td>Patching, AV/EDR, host firewall, GPO, app allow list, autorun off.</td></tr>
<tr><td>Switches / Routers</td><td>Passwords fuertes, SSH (no Telnet), SNMPv3, port security, ACLs, RBAC, separar plano de gestión.</td></tr>
<tr><td>Cloud</td><td>IAM least privilege, MFA, logging (CloudTrail), encryption por defecto, security groups restrictivos.</td></tr>
<tr><td>Servers</td><td>Minimizar servicios, parchear, hardening del OS, restringir admins, monitoring.</td></tr>
<tr><td>ICS / SCADA</td><td>Segmentar (modelo Purdue), unidirectional gateway, sin internet directo.</td></tr>
<tr><td>IoT</td><td>Cambiar default creds, deshabilitar UPnP, VLAN dedicada, parchear firmware.</td></tr>
<tr><td>Embedded / RTOS</td><td>Minimizar superficie, firma de firmware.</td></tr>
</table>

<h4>Wireless</h4>
<div class="minicards">
<div class="minicard"><div class="h">Site survey</div><p>Mides cobertura, SNR, interferencia para diseñar la red wifi.</p></div>
<div class="minicard"><div class="h">Heat map</div><p>Mapa visual de intensidad por zonas para colocar APs y detectar rogues.</p></div>
</div>

<h4>Móviles — modelos de despliegue</h4>
<div class="kvs">
<span class="k">BYOD</span><span class="v"><b>Bring Your Own Device</b>: del empleado, uso mixto.</span>
<span class="k">COBO</b></span><span class="v"><b>Corporate-Owned, Business-Only</b>: corporativo, solo uso laboral.</span>
<span class="k">COPE</span><span class="v"><b>Corporate-Owned, Personally-Enabled</b>: corporativo, permite uso personal.</span>
<span class="k">CYOD</span><span class="v"><b>Choose Your Own Device</b>: el empleado elige de un catálogo aprobado.</span>
</div>

<div class="term"><div class="t">MDM — Mobile Device Management</div>Gestión centralizada de móviles: aplicar políticas, cifrado, contenedores, wipe remoto, gestión de apps.<div class="why"><b>UEM (Unified Endpoint Management)</b> extiende MDM a portátiles, IoT, etc.</div></div>

<h4>Seguridad inalámbrica — protocolos</h4>
<table>
<tr><th>Protocolo</th><th>Estado</th><th>Notas</th></tr>
<tr><td>WEP</td><td>✗ Roto</td><td>No usar nunca.</td></tr>
<tr><td>WPA</td><td>✗ Vulnerable</td><td>TKIP. Deprecado.</td></tr>
<tr><td>WPA2</td><td>✓ Aceptable</td><td>CCMP/AES. Personal (PSK) o Enterprise (802.1X).</td></tr>
<tr><td>WPA3</td><td>★ Recomendado</td><td><b>SAE</b> (Simultaneous Authentication of Equals) reemplaza PSK; resiste ataques de diccionario offline. Forward secrecy.</td></tr>
</table>

<h4>EAP — métodos de autenticación</h4>
<div class="kvs">
<span class="k">EAP-TLS</span><span class="v">★ Más seguro. Certificados mutuos (cliente y servidor). Sin contraseñas.</span>
<span class="k">EAP-TTLS</span><span class="v">Túnel TLS con cert solo en el servidor; dentro va la autenticación del cliente.</span>
<span class="k">EAP-FAST</span><span class="v">De Cisco. Sin certs (usa PAC).</span>
<span class="k">PEAP</span><span class="v"><b>Protected EAP</b>: túnel TLS + autenticación interna (típicamente MSCHAPv2).</span>
</div>

<h4>Seguridad de aplicaciones</h4>
<div class="minicards">
<div class="minicard"><div class="h">Input validation</div><p>Validar en servidor; preferir <b>allowlist</b> (lo que sí permites) sobre denylist.</p></div>
<div class="minicard"><div class="h">Secure cookies</div><p>Flags <b>HttpOnly</b> (no accesible por JS), <b>Secure</b> (solo HTTPS), <b>SameSite</b> (anti-CSRF).</p></div>
<div class="minicard"><div class="h">SAST</div><p><b>Static Application Security Testing</b>: analiza código sin ejecutarlo. Detecta SQLi, secretos hardcodeados.</p></div>
<div class="minicard"><div class="h">DAST</div><p><b>Dynamic AST</b>: prueba sobre app en ejecución (como un atacante).</p></div>
<div class="minicard"><div class="h">SCA</div><p><b>Software Composition Analysis</b>: audita dependencias de terceros.</p></div>
<div class="minicard"><div class="h">Code signing</div><p>Firmar binarios para verificar autenticidad/integridad.</p></div>
<div class="minicard"><div class="h">Sandboxing</div><p>Ejecutar en entorno aislado.</p></div>
</div>

<h3>4.2 Gestión de activos y vulnerabilidades</h3>

<h4>Activos</h4>
<div class="kvs">
<span class="k">Acquisition / procurement</span><span class="v">Compra con validación de seguridad.</span>
<span class="k">Assignment / accounting</span><span class="v">Owner asignado, clasificación.</span>
<span class="k">Monitoring / tracking</span><span class="v">Inventario actualizado.</span>
</div>

<h4>Disposal / decommissioning (cuando un equipo deja de usarse)</h4>
<div class="callout warn"><span class="ico">⚠</span><div>Antes de descartar un equipo: <b>sanitizar o destruir</b>. Un disco "borrado" con format normal sigue teniendo todos los datos.</div></div>
<div class="kvs">
<span class="k">Sanitization</span><span class="v">Borrar de forma segura: overwrite múltiple, <b>cryptographic erase</b> (borrar la clave de cifrado), secure erase.</span>
<span class="k">Destruction</span><span class="v">Físico: <b>degaussing</b> (para HDD magnéticos), shredding, incineración.</span>
<span class="k">Certification</span><span class="v">Comprobante firmado de destrucción.</span>
<span class="k">Data retention</span><span class="v">Política de cuánto guardar antes de eliminar (legal vs práctico).</span>
</div>

<h4>Identificación de vulnerabilidades</h4>
<div class="minicards">
<div class="minicard"><div class="h">Vulnerability scan</div><p>Escáner automatizado: Nessus, OpenVAS, Qualys. <b>Authenticated</b> (con creds, ve más) vs <b>unauthenticated</b>.</p></div>
<div class="minicard"><div class="h">SAST / DAST / SCA</div><p>Para código y dependencias.</p></div>
<div class="minicard"><div class="h">Threat feeds</div><p>OSINT (abiertas), proprietary, ISACs (sectoriales), dark web monitoring.</p></div>
<div class="minicard"><div class="h">Penetration testing</div><p>Ataque simulado autorizado.</p></div>
<div class="minicard"><div class="h">Bug bounty</div><p>Programa que recompensa el reporte de vulnerabilidades.</p></div>
<div class="minicard"><div class="h">Audit del sistema</div><p>Revisión interna o externa.</p></div>
</div>

<div class="term"><div class="t">STIX / TAXII</div>Formatos para <b>compartir threat intelligence</b>. STIX = lenguaje estructurado; TAXII = protocolo de transporte.</div>

<h4>Análisis de vulnerabilidades</h4>
<div class="kvs">
<span class="k">Confirmation</span><span class="v">Eliminar <b>falsos positivos</b> (alerta sin amenaza) y <b>falsos negativos</b> (amenaza no detectada — peor).</span>
<span class="k">CVE</span><span class="v"><b>Common Vulnerabilities and Exposures</b>: identificador único de cada vulnerabilidad (CVE-2024-12345).</span>
<span class="k">CVSS</span><span class="v"><b>Common Vulnerability Scoring System</b>: puntúa de 0 a 10. Métricas <b>Base</b> (intrínsecas), <b>Temporal</b> (cambian), <b>Environmental</b> (tu org).</span>
<span class="k">CWE</span><span class="v"><b>Common Weakness Enumeration</b>: clasifica el <b>tipo</b> de debilidad (CWE-89 = SQLi).</span>
<span class="k">Exposure factor</span><span class="v">Qué porcentaje del activo se ve afectado.</span>
<span class="k">Industry impact</span><span class="v">Tu sector influye en la criticidad real.</span>
<span class="k">Risk tolerance</span><span class="v">Cuánto riesgo aceptas según contexto.</span>
</div>

<h4>Respuesta y remediación</h4>
<div class="minicards">
<div class="minicard"><div class="h">Patching</div><p>Aplicar parches en orden: test → ring deployment → producción.</p></div>
<div class="minicard"><div class="h">Insurance</div><p>Transferir el riesgo a un seguro.</p></div>
<div class="minicard"><div class="h">Segmentation</div><p>Aislar lo vulnerable mientras se parchea.</p></div>
<div class="minicard"><div class="h">Compensating controls</div><p>Controles alternativos cuando no puedes parchear.</p></div>
<div class="minicard"><div class="h">Exceptions / exemptions</div><p>Aceptar formalmente con plazo y owner.</p></div>
</div>
<p><b>Validación:</b> rescaneo, audit, verificación. <b>Reporting</b> a stakeholders y métricas de tendencia.</p>

<h3>4.3 Alerting y monitoreo</h3>

<h4>Qué se monitoriza</h4>
<p>Sistemas, aplicaciones e infraestructura.</p>

<h4>Actividades</h4>
<div class="kvs">
<span class="k">Log aggregation</span><span class="v">Centralizar logs (SIEM).</span>
<span class="k">Alerting</span><span class="v">Generar alertas según reglas.</span>
<span class="k">Scanning</span><span class="v">Búsqueda continua de vulnerabilidades.</span>
<span class="k">Reporting</span><span class="v">Informes a dirección y operación.</span>
<span class="k">Archiving</span><span class="v">Almacenamiento a largo plazo (cumplimiento, forense).</span>
<span class="k">Alert response</span><span class="v">Cuarentena, <b>alert tuning</b> para reducir fatiga del analista.</span>
</div>

<h4>Herramientas</h4>
<div class="minicards">
<div class="minicard"><div class="h">SCAP</div><p>Security Content Automation Protocol — estandariza descripción y evaluación de configuración.</p></div>
<div class="minicard"><div class="h">Benchmarks</div><p>CIS Benchmarks, DISA STIGs — guías de hardening.</p></div>
<div class="minicard"><div class="h">Agents / Agentless</div><p>Agente instalado en el host vs escaneo remoto.</p></div>
<div class="minicard"><div class="h">SIEM</div><p><b>Security Information & Event Management</b>: agrega, normaliza, correlaciona, alerta. Splunk, Sentinel, QRadar, Elastic.</p></div>
<div class="minicard"><div class="h">AV / EDR / XDR</div><p>Antivirus → EDR (endpoint) → XDR (endpoint+red+email+cloud+identidad).</p></div>
<div class="minicard"><div class="h">DLP</div><p><b>Data Loss Prevention</b>: detecta/bloquea exfiltración de datos sensibles.</p></div>
<div class="minicard"><div class="h">SNMP traps</div><p>Eventos enviados por dispositivos de red. SNMPv3 cifrado.</p></div>
<div class="minicard"><div class="h">NetFlow</div><p>Metadatos de flujos de red (no payload). Cisco. Variantes: sFlow, IPFIX.</p></div>
</div>

<h3>4.4 Mejorar la seguridad empresarial</h3>

<h4>Firewall</h4>
<p>Reglas explícitas, <b>deny by default</b>, ACLs, segmentación con screened subnets, logging activado.</p>

<h4>IDS / IPS — métodos de detección</h4>
<div class="kvs">
<span class="k">Signature-based</span><span class="v">Compara con patrones conocidos. Detecta lo conocido, no zero-days.</span>
<span class="k">Anomaly-based</span><span class="v">Compara con una baseline; lo distinto es sospechoso.</span>
<span class="k">Behavioral</span><span class="v">Analiza comportamiento (UEBA). Detecta cuentas comprometidas.</span>
<span class="k">Trend analysis</span><span class="v">Detecta ataques lentos que pasan desapercibidos a nivel evento.</span>
</div>

<h4>Web filter</h4>
<div class="kvs">
<span class="k">Agent-based</span><span class="v">Cliente en cada endpoint.</span>
<span class="k">Centralized proxy</span><span class="v">Todo el tráfico pasa por un proxy central.</span>
<span class="k">URL scanning</span><span class="v">Análisis de URLs en tiempo real.</span>
<span class="k">Content categorization</span><span class="v">Clasifica sitios (juegos, adultos, malware).</span>
<span class="k">Block rules</span><span class="v">Reglas explícitas.</span>
<span class="k">Reputation</span><span class="v">Puntuación de confianza por dominio/IP.</span>
</div>

<h4>Hardening del SO</h4>
<div class="kvs">
<span class="k">GPO</span><span class="v"><b>Group Policy Object</b>: aplica configuración masiva en Windows AD.</span>
<span class="k">SELinux / AppArmor</span><span class="v">MAC en Linux. Confina procesos según política.</span>
</div>

<h4>Implementación segura de protocolos (puertos a saber)</h4>
<table>
<tr><th>Inseguro</th><th>Seguro</th><th>Puertos</th></tr>
<tr><td>Telnet (23)</td><td><b>SSH</b></td><td>22</td></tr>
<tr><td>FTP (21)</td><td><b>SFTP</b> (sobre SSH) / <b>FTPS</b> (sobre TLS)</td><td>22 / 990, 989</td></tr>
<tr><td>HTTP (80)</td><td><b>HTTPS</b> (TLS)</td><td>443</td></tr>
<tr><td>SMTP (25)</td><td><b>SMTPS / STARTTLS</b></td><td>465 / 587</td></tr>
<tr><td>POP3 (110) / IMAP (143)</td><td><b>POP3S</b> / <b>IMAPS</b></td><td>995 / 993</td></tr>
<tr><td>SNMPv1/v2c (161)</td><td><b>SNMPv3</b> (autenticado y cifrado)</td><td>161</td></tr>
<tr><td>LDAP (389)</td><td><b>LDAPS</b> / StartTLS</td><td>636</td></tr>
<tr><td>DNS (53)</td><td><b>DNS over TLS</b> / DoH</td><td>853</td></tr>
</table>

<h4>DNS y email security</h4>
<div class="term"><div class="t">DNS filtering</div>Bloquea la resolución a dominios maliciosos. <b>Ej:</b> Cisco Umbrella, Quad9.</div>

<div class="term"><div class="t">DNSSEC</div>Firma criptográficamente las respuestas DNS. Evita poisoning.</div>

<div class="term"><div class="t">SPF, DKIM, DMARC — el trío anti-suplantación de email</div>
<div class="kvs">
<span class="k">SPF</span><span class="v"><b>Sender Policy Framework</b>: registro TXT que lista las IPs autorizadas a enviar correo de tu dominio.</span>
<span class="k">DKIM</span><span class="v"><b>DomainKeys Identified Mail</b>: firma criptográfica del email; el receptor verifica con la pública DNS.</span>
<span class="k">DMARC</span><span class="v"><b>Domain-based Message Authentication</b>: política a aplicar (<code>none</code>/<code>quarantine</code>/<code>reject</code>) cuando SPF/DKIM fallan + reporting.</span>
</div></div>

<div class="term"><div class="t">Email gateway</div>Filtrado entrante: anti-spam, antivirus, sandboxing de adjuntos, anti-phishing.</div>

<h4>Otras herramientas</h4>
<div class="minicards">
<div class="minicard"><div class="h">FIM</div><p><b>File Integrity Monitoring</b>: detecta cambios en archivos críticos (Tripwire, AIDE, OSSEC).</p></div>
<div class="minicard"><div class="h">DLP</div><p>Endpoint, network, cloud — detecta y bloquea exfiltración.</p></div>
<div class="minicard"><div class="h">NAC</div><p>Verifica postura del dispositivo antes de admitirlo.</p></div>
<div class="minicard"><div class="h">EDR / XDR</div><p>Detección y respuesta extendida.</p></div>
<div class="minicard"><div class="h">UEBA</div><p><b>User and Entity Behavior Analytics</b>: detecta anomalías de comportamiento que delatan cuentas comprometidas.</p></div>
</div>

<h3>4.5 Identidad y acceso (IAM)</h3>

<h4>Provisioning / deprovisioning</h4>
<p>Ciclo de vida del usuario: <b>Joiner-Mover-Leaver</b>. Automatizar evita cuentas huérfanas tras bajas.</p>

<h4>Identity proofing</h4>
<p>Verificar que la persona <b>es quien dice ser</b> antes de emitirle credencial. Documentación, biometría, video-verificación.</p>

<h4>Federación y SSO</h4>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogía:</b> SSO es como tu pasaporte. Te identificas una vez en el aeropuerto y con esa identidad cruzas múltiples controles. <b>Federación</b> es que países distintos confían en pasaportes mutuos.</div></div>

<div class="term"><div class="t">SAML</div><b>Security Assertions Markup Language</b>: federación basada en XML, típica en SSO empresarial. Roles: <b>IdP</b> (Identity Provider), <b>SP</b> (Service Provider), <b>principal</b> (usuario).</div>

<div class="term"><div class="t">OAuth 2.0</div>Protocolo de <b>autorización</b> (no autenticación). Permite delegar acceso sin compartir credenciales. Tokens de acceso. <b>Ejemplo:</b> "Login with Google" para apps de terceros.</div>

<div class="term"><div class="t">OIDC — OpenID Connect</div>Capa de <b>autenticación</b> sobre OAuth 2.0. Añade ID token. Lo que realmente usa "Login with X".</div>

<div class="term"><div class="t">LDAP / LDAPS</div>Protocolo de directorio (consultar usuarios, grupos). LDAP en claro (389), <b>LDAPS</b> sobre TLS (636).</div>

<div class="term"><div class="t">Kerberos</div>Autenticación con tickets. Roles: <b>KDC</b> (Key Distribution Center), <b>TGT</b> (Ticket Granting Ticket), <b>TGS</b> (Ticket Granting Service). Puerto 88. Sensible al tiempo (los tickets caducan rápido).</div>

<h4>Modelos de control de acceso — los pilares</h4>
<table>
<tr><th>Modelo</th><th>Decisión basada en</th><th>Ejemplo</th></tr>
<tr><td><b>MAC</b></td><td>Etiquetas asignadas por el sistema; el usuario NO puede cambiar</td><td>SE Linux, militar (Top Secret/Secret/Confidential)</td></tr>
<tr><td><b>DAC</b></td><td>El dueño del recurso decide</td><td>Permisos NTFS clásicos</td></tr>
<tr><td><b>RBAC</b></td><td>Rol del usuario</td><td>Grupos de Active Directory</td></tr>
<tr><td><b>ABAC</b></td><td>Atributos: usuario, recurso, acción, contexto (hora, geo, dispositivo)</td><td>Políticas dinámicas Zero Trust</td></tr>
<tr><td><b>Rule-based</b></td><td>Reglas globales independientes del rol</td><td>ACLs de firewall, time-of-day</td></tr>
</table>

<h4>MFA — los factores</h4>
<div class="callout exam"><span class="ico">★</span><div><b>Tip:</b> dos contraseñas <b>NO</b> son MFA — siguen siendo el mismo factor (algo que sabes). Tienen que ser <b>factores distintos</b>.</div></div>
<div class="minicards">
<div class="minicard"><div class="h">Algo que SABES</div><p>Password, PIN, respuesta secreta.</p></div>
<div class="minicard"><div class="h">Algo que TIENES</div><p>Token (HOTP, TOTP), smart card, FIDO2/U2F (YubiKey), push.</p></div>
<div class="minicard"><div class="h">Algo que ERES</div><p>Biometría: huella, iris, voz, facial, vena.</p></div>
<div class="minicard"><div class="h">Algún SITIO</div><p>Geolocalización, IP corporativa.</p></div>
<div class="minicard"><div class="h">Algo que HACES</div><p>Patrón de tecleo, dinámica de firma.</p></div>
</div>
<div class="kvs">
<span class="k">FAR</span><span class="v"><b>False Acceptance Rate</b>: dejas pasar a quien no debes. <b>Peligroso</b>.</span>
<span class="k">FRR</span><span class="v"><b>False Rejection Rate</b>: rechazas a quien sí debe. Molesto.</span>
<span class="k">CER</span><span class="v"><b>Crossover Error Rate</b>: punto donde FAR y FRR se cruzan. <b>Cuanto menor, mejor</b> el biométrico.</span>
</div>

<h4>Buenas prácticas de contraseñas (NIST 800-63B actual)</h4>
<div class="callout tip"><span class="ico">▲</span><div>El NIST <b>desaconseja</b> el cambio periódico forzado salvo señal de compromiso. Prioriza <b>longitud</b> (mín 8, ideal 14+) y <b>comprobación contra listas filtradas</b> (Have I Been Pwned). Usa password managers. <b>Passwordless</b> (FIDO2/passkeys) cuando sea posible.</div></div>

<h4>PAM — Privileged Access Management</h4>
<div class="kvs">
<span class="k">JIT permissions</span><span class="v"><b>Just-in-Time</b>: privilegios elevados sólo cuando se necesitan, por tiempo limitado.</span>
<span class="k">Password vaulting</span><span class="v">Bóveda con rotación automática.</span>
<span class="k">Ephemeral credentials</span><span class="v">Credenciales efímeras, no reutilizables.</span>
<span class="k">Session recording</span><span class="v">Graba sesión privilegiada para auditoría.</span>
</div>

<h3>4.6 Automatización y orquestación</h3>

<h4>Casos de uso</h4>
<p>User provisioning, resource provisioning, guard rails, security groups, ticket creation, escalation, enable/disable services, integración continua, integraciones API, escaneo continuo.</p>

<h4>Beneficios</h4>
<div class="minicards">
<div class="minicard"><div class="h">Eficiencia</div><p>Tareas en segundos vs horas humanas.</p></div>
<div class="minicard"><div class="h">Reaction time</div><p>Respuesta automática a amenazas.</p></div>
<div class="minicard"><div class="h">Workforce multiplier</div><p>Un analista hace lo de cinco.</p></div>
<div class="minicard"><div class="h">Baseline enforcement</div><p>Configuración estándar siempre aplicada.</p></div>
<div class="minicard"><div class="h">Standard config</div><p>Cero "drift".</p></div>
<div class="minicard"><div class="h">Scaling</div><p>Crecer sin contratar más.</p></div>
<div class="minicard"><div class="h">Retención</div><p>Menos tareas tediosas → analistas más felices.</p></div>
<div class="minicard"><div class="h">Reducción de errores</div><p>El humano se equivoca; el script no (si está bien).</p></div>
</div>

<h4>Consideraciones (lado oscuro)</h4>
<p>Complejidad, costo de implementación, <b>single point of failure</b> (si la automatización falla, falla todo), requisitos técnicos, deuda continua de mantenimiento.</p>

<h3>4.7 Respuesta a incidentes (IR)</h3>

<h4>Proceso NIST SP 800-61</h4>
<div class="flow">
<span class="step">1. Preparación</span><span class="arr">→</span>
<span class="step">2. Detección y análisis</span><span class="arr">→</span>
<span class="step">3. Contención · Erradicación · Recuperación</span><span class="arr">→</span>
<span class="step">4. Post-incidente (lessons learned)</span>
</div>

<div class="kvs">
<span class="k">Preparación</span><span class="v">Políticas, herramientas, equipo, formación, runbooks.</span>
<span class="k">Detección</span><span class="v">Identificar el incidente, alcance, severidad.</span>
<span class="k">Contención</span><span class="v">Cortar la propagación: aislar host, segmentar.</span>
<span class="k">Erradicación</span><span class="v">Eliminar el malware y cerrar la vulnerabilidad explotada.</span>
<span class="k">Recuperación</span><span class="v">Restaurar, monitorear, validar.</span>
<span class="k">Post-incident</span><span class="v">Lessons learned, actualizar runbooks, mejorar.</span>
</div>

<h4>Training y testing</h4>
<div class="minicards">
<div class="minicard"><div class="h">Tabletop</div><p>Discusión de escenario en sala. Lo más barato.</p></div>
<div class="minicard"><div class="h">Walkthrough</div><p>Repaso paso a paso del plan.</p></div>
<div class="minicard"><div class="h">Simulation</div><p>Ejecución parcial realista.</p></div>
</div>

<h4>Root cause analysis</h4>
<p><b>5 Whys</b> (preguntar "por qué" cinco veces hasta llegar a la causa real), <b>fishbone</b> (Ishikawa), análisis cronológico.</p>

<h4>Threat hunting</h4>
<p>Búsqueda <b>proactiva</b> de amenazas asumiendo que ya estás comprometido. Basado en hipótesis, TTPs (de MITRE ATT&CK) e IoCs.</p>

<div class="term"><div class="t">MITRE ATT&CK</div>Framework que cataloga <b>tácticas, técnicas y procedimientos (TTPs)</b> usados por atacantes. Estándar de facto para hunting y red teaming.</div>

<h4>Forense digital</h4>
<div class="callout warn"><span class="ico">⚠</span><div>El examen pregunta mucho sobre <b>preservación de evidencia</b>. Una evidencia mal manejada no vale en juicio.</div></div>
<div class="kvs">
<span class="k">Legal hold</span><span class="v">Obligación de preservar info que pueda ser relevante en litigio.</span>
<span class="k">Chain of custody</span><span class="v">Registro inalterable de quién manejó la evidencia, cuándo y cómo.</span>
<span class="k">Acquisition</span><span class="v">Toma de la evidencia. <b>Bit-for-bit image</b> con write blocker (impide escritura).</span>
<span class="k">Order of volatility</span><span class="v">Orden de captura: registros/CPU caché → RAM → temp → disco → backups → logs remotos.</span>
<span class="k">Hashing</span><span class="v">Hashear evidencia al recogerla y al usarla; mismo hash = no modificada.</span>
<span class="k">Reporting</span><span class="v">Documentación de hallazgos.</span>
<span class="k">E-discovery</span><span class="v">Recolección de info electrónica para procesos legales.</span>
</div>

<h3>4.8 Fuentes de datos para investigación</h3>

<h4>Logs</h4>
<div class="kvs">
<span class="k">Firewall logs</span><span class="v">Allows, denies, conexiones.</span>
<span class="k">Application logs</span><span class="v">Eventos de la aplicación.</span>
<span class="k">Endpoint logs</span><span class="v">EDR, AV.</span>
<span class="k">OS logs</span><span class="v">Windows Event Log: <b>4624</b> login OK, <b>4625</b> login fallido, <b>4688</b> creación de proceso. Linux: <code>/var/log/auth.log</code>, syslog.</span>
<span class="k">IPS / IDS logs</span><span class="v">Alertas de detección/bloqueo.</span>
<span class="k">Network logs</span><span class="v">Switches, routers, NetFlow.</span>
<span class="k">Metadata</span><span class="v">Email headers, propiedades de archivos.</span>
</div>

<h4>Otras fuentes</h4>
<p>Vulnerability scans, automated reports, dashboards, <b>packet captures</b> (.pcap, abre con Wireshark/tcpdump).</p>
`},

{
  id:"d5", title:"Dominio 5 — Programa y Gobernanza (20%)",
  html:`
<h2>Dominio 5 — Gestión y Supervisión del Programa de Seguridad</h2>
<div class="lead">El lado de gestión: gobernanza, riesgo, terceros, cumplimiento, auditorías, formación. Aquí menos técnica y más procesos, contratos y métricas.</div>

<h3>5.1 Gobernanza</h3>

<h4>Jerarquía de directrices</h4>
<div class="flow">
<span class="step">Política (qué/por qué)</span><span class="arr">→</span>
<span class="step">Estándar (qué específico, obligatorio)</span><span class="arr">→</span>
<span class="step">Procedimiento (paso a paso)</span><span class="arr">→</span>
<span class="step">Guideline (recomendación)</span>
</div>
<div class="kvs">
<span class="k">Policy</span><span class="v">Alto nivel. Aprobada por dirección. <b>Qué</b> y <b>por qué</b>.</span>
<span class="k">Standard</span><span class="v">Específico y obligatorio. <b>Cómo</b> a alto nivel.</span>
<span class="k">Procedure</span><span class="v">Paso a paso ejecutable.</span>
<span class="k">Guideline</span><span class="v">Recomendación; no obligatoria.</span>
</div>

<h4>Políticas comunes (saber identificar)</h4>
<div class="minicards">
<div class="minicard"><div class="h">AUP</div><p><b>Acceptable Use Policy</b>: qué pueden y no pueden hacer los usuarios con los recursos.</p></div>
<div class="minicard"><div class="h">InfoSec policy</div><p>Política general de seguridad de la información.</p></div>
<div class="minicard"><div class="h">Business continuity</div><p>Cómo mantener el negocio operativo ante interrupciones.</p></div>
<div class="minicard"><div class="h">Disaster recovery</div><p>Cómo recuperar tras un desastre mayor.</p></div>
<div class="minicard"><div class="h">Incident response</div><p>Cómo gestionar incidentes.</p></div>
<div class="minicard"><div class="h">SDLC</div><p><b>Software Development Lifecycle</b>: ciclo seguro de desarrollo.</p></div>
<div class="minicard"><div class="h">Change management</div><p>Cómo se aprueban y aplican cambios.</p></div>
<div class="minicard"><div class="h">Password policy</div><p>Reglas de contraseñas.</p></div>
<div class="minicard"><div class="h">Data classification</div><p>Cómo clasificar y manejar datos.</p></div>
</div>

<h4>Consideraciones externas</h4>
<div class="kvs">
<span class="k">Regulatory</span><span class="v">GDPR, HIPAA, PCI DSS, SOX, GLBA.</span>
<span class="k">Legal</span><span class="v">Leyes aplicables locales/nacionales/internacionales.</span>
<span class="k">Industry</span><span class="v">ISO 27001/27002, NIST CSF, COBIT.</span>
<span class="k">Local · Regional · National · Global</span><span class="v">Distintos niveles geográficos.</span>
</div>

<h4>Estructuras de gobernanza</h4>
<div class="minicards">
<div class="minicard"><div class="h">Boards</div><p>Junta directiva — supervisión de alto nivel.</p></div>
<div class="minicard"><div class="h">Committees</div><p>Risk committee, security committee.</p></div>
<div class="minicard"><div class="h">Government entities</div><p>Reguladores externos.</p></div>
<div class="minicard"><div class="h">Centralizado vs descentralizado</div><p>Trade-off entre control y agilidad.</p></div>
</div>

<h4>Roles y responsabilidades sobre los datos</h4>
<table>
<tr><th>Rol</th><th>Responsabilidad</th></tr>
<tr><td><b>Data owner</b></td><td>Responsable último; clasifica los datos.</td></tr>
<tr><td><b>Data controller</b></td><td>Decide finalidades y medios del tratamiento (GDPR).</td></tr>
<tr><td><b>Data processor</b></td><td>Procesa por cuenta del controller.</td></tr>
<tr><td><b>Data custodian / steward</b></td><td>Implementa controles diarios.</td></tr>
<tr><td><b>DPO</b></td><td>Data Protection Officer (obligatorio bajo GDPR en muchos casos).</td></tr>
<tr><td><b>CISO / CSO</b></td><td>Máximo responsable de seguridad de la organización.</td></tr>
</table>

<h3>5.2 Gestión del riesgo</h3>

<h4>Identificación y assessment</h4>
<p><b>Risk identification</b>: listar amenazas y vulnerabilidades. <b>Risk assessment</b> con frecuencias: ad hoc, recurring, one-time, continuous.</p>

<h4>Análisis: cualitativo vs cuantitativo</h4>
<div class="compare">
<div><h5>Cualitativo</h5><p>Subjetivo. Alto/Medio/Bajo, matriz 5×5. Rápido, sin datos exactos. <b>Cuándo:</b> cuando no hay datos numéricos fiables.</p></div>
<div><h5>Cuantitativo</h5><p>Numérico, monetario. Requiere datos. <b>Cuándo:</b> para justificar inversión con cifras.</p></div>
</div>

<h4>Fórmulas que entran en el examen</h4>
<div class="callout exam"><span class="ico">★</span><div><b>Memorízalas:</b><br>
<code>SLE = AV × EF</code> (pérdida por evento)<br>
<code>ARO</code> = nº de eventos al año<br>
<code>ALE = SLE × ARO</code> (pérdida anual esperada)</div></div>
<div class="kvs">
<span class="k">AV</span><span class="v">Asset Value (valor del activo).</span>
<span class="k">EF</span><span class="v">Exposure Factor (0 a 1, % afectado).</span>
<span class="k">SLE</span><span class="v">Single Loss Expectancy (pérdida por incidente).</span>
<span class="k">ARO</span><span class="v">Annualized Rate of Occurrence (eventos/año).</span>
<span class="k">ALE</span><span class="v">Annualized Loss Expectancy (pérdida anual).</span>
</div>
<div class="callout example"><span class="ico">▶</span><div><b>Ejemplo:</b> servidor vale 10.000€, un fuego destruye 50% (EF=0.5), pasa cada 4 años (ARO=0.25).<br>SLE = 10.000 × 0.5 = <b>5.000€</b><br>ALE = 5.000 × 0.25 = <b>1.250€/año</b><br>Si un control cuesta menos de 1.250€/año, sale rentable.</div></div>

<h4>Risk register</h4>
<p>Repositorio vivo: ID, descripción, owner, <b>KRI</b> (Key Risk Indicator), threshold, probabilidad, impacto, tratamiento, estado.</p>

<h4>Risk appetite vs risk tolerance</h4>
<div class="kvs">
<span class="k">Risk appetite</span><span class="v">Riesgo total que la org está dispuesta a asumir.</span>
<span class="k">Risk tolerance</span><span class="v">Desviación aceptable respecto al apetito.</span>
</div>
<div class="minicards">
<div class="minicard"><div class="h">Expansionary</div><p>Agresivo, busca crecimiento. Asume más riesgo.</p></div>
<div class="minicard"><div class="h">Neutral</div><p>Balanceado.</p></div>
<div class="minicard"><div class="h">Conservative</div><p>Adverso al riesgo.</p></div>
</div>

<h4>Estrategias de tratamiento — las 4 acciones</h4>
<div class="minicards">
<div class="minicard"><div class="h">Mitigate</div><p>Reducir con controles (firewall, patching).</p></div>
<div class="minicard"><div class="h">Transfer</div><p>Pasarlo a un tercero (seguro, outsourcing).</p></div>
<div class="minicard"><div class="h">Accept</div><p>Asumirlo (formal, con <b>exemption</b> permanente o <b>exception</b> temporal).</p></div>
<div class="minicard"><div class="h">Avoid</div><p>Eliminar la actividad que genera el riesgo.</p></div>
</div>

<h4>BIA — Business Impact Analysis</h4>
<p>Identifica funciones críticas, dependencias e impactos. Da las métricas que rigen DR/BC:</p>
<div class="kvs">
<span class="k">RTO</span><span class="v"><b>Recovery Time Objective</b>: tiempo máximo aceptable para volver a estar operativo.</span>
<span class="k">RPO</span><span class="v"><b>Recovery Point Objective</b>: máxima cantidad de datos (en tiempo) que se acepta perder.</span>
<span class="k">MTTR</span><span class="v"><b>Mean Time To Repair/Restore</b>: tiempo medio para reparar.</span>
<span class="k">MTBF</span><span class="v"><b>Mean Time Between Failures</b>: tiempo medio entre fallos.</span>
<span class="k">MTTF</span><span class="v"><b>Mean Time To Failure</b>: para componentes no reparables.</span>
</div>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogía:</b> RPO = "¿cuánto trabajo de la libreta puedo perder?". RTO = "¿cuánto puedo aguantar sin libreta?". RPO marca la frecuencia de backup; RTO marca cómo de rápido tienes que restaurar.</div></div>

<h3>5.3 Gestión de riesgo de terceros</h3>

<h4>Vendor assessment (evaluar proveedor)</h4>
<div class="kvs">
<span class="k">Penetration testing</span><span class="v">Pentest al proveedor.</span>
<span class="k">Right-to-audit clause</span><span class="v">Cláusula contractual: derecho a auditarles.</span>
<span class="k">Evidence of internal audits</span><span class="v">SOC 2 Type II, ISO 27001, certificaciones.</span>
<span class="k">Independent assessments</span><span class="v">Auditorías de terceros.</span>
<span class="k">Supply chain analysis</span><span class="v">Análisis de toda su cadena.</span>
</div>

<h4>Vendor selection</h4>
<div class="kvs">
<span class="k">Due diligence</span><span class="v">Investigación previa razonable antes de contratar.</span>
<span class="k">Conflict of interest</span><span class="v">Verificar que no haya conflictos.</span>
</div>

<h4>Tipos de acuerdos contractuales</h4>
<table>
<tr><th>Acuerdo</th><th>Para qué sirve</th></tr>
<tr><td><b>SLA</b></td><td><b>Service Level Agreement</b>: niveles cuantificables (uptime 99.9%, soporte 24/7) y <b>penalizaciones</b> si no se cumplen.</td></tr>
<tr><td><b>MOA / MOU</b></td><td>Memorandum of Agreement / Understanding: acuerdo de intenciones, no siempre vinculante.</td></tr>
<tr><td><b>MSA</b></td><td><b>Master Service Agreement</b>: marco general entre dos partes; bajo el MSA se firman trabajos específicos.</td></tr>
<tr><td><b>SOW / WO</b></td><td><b>Statement of Work / Work Order</b>: trabajo específico (alcance, entregables, plazos) bajo el MSA.</td></tr>
<tr><td><b>NDA</b></td><td><b>Non-Disclosure Agreement</b>: confidencialidad sobre info compartida.</td></tr>
<tr><td><b>BPA</b></td><td><b>Business Partnership Agreement</b>: relación entre socios.</td></tr>
</table>

<h4>Vendor monitoring</h4>
<p>Continuo: questionnaires periódicos, <b>rules of engagement</b> (en pentests: alcance y reglas), informes recurrentes, métricas de SLA.</p>

<h3>5.4 Cumplimiento (compliance)</h3>

<h4>Compliance reporting</h4>
<div class="kvs">
<span class="k">Internal</span><span class="v">Al consejo, comités internos.</span>
<span class="k">External</span><span class="v">A reguladores, clientes, auditores.</span>
</div>

<h4>Consecuencias del incumplimiento</h4>
<div class="callout warn"><span class="ico">⚠</span><div>GDPR puede multar hasta <b>4% facturación global o 20M€</b> (lo mayor). HIPAA, PCI, SOX también tienen sanciones graves.</div></div>
<p>Multas, sanciones, pérdida de licencia, contractual impacts, daño reputacional, pérdida de clientes, demandas civiles, en algunos casos responsabilidad penal.</p>

<h4>Compliance monitoring</h4>
<div class="kvs">
<span class="k">Due diligence</span><span class="v">Investigación previa razonable.</span>
<span class="k">Due care</span><span class="v">Ejercer cuidado razonable de forma continua (parchear, monitorizar).</span>
<span class="k">Attestation & acknowledgment</span><span class="v">Declaración formal (interna o externa) que da fe del cumplimiento.</span>
<span class="k">Internal & external monitoring</span><span class="v">Auditorías propias y de terceros.</span>
<span class="k">Automation</span><span class="v">Herramientas GRC (Governance, Risk, Compliance).</span>
</div>

<h4>Privacidad</h4>
<div class="kvs">
<span class="k">Implicaciones legales</span><span class="v">Local, regional, nacional, global.</span>
<span class="k">Data subject</span><span class="v">El individuo cuyos datos se procesan.</span>
<span class="k">Controller vs Processor</span><span class="v">Quien decide vs quien procesa.</span>
<span class="k">Ownership</span><span class="v">Quién posee los datos.</span>
<span class="k">Data inventory & retention</span><span class="v">Catálogo de datos y cuánto se guardan.</span>
<span class="k">Right to be forgotten</span><span class="v">Borrado a petición (GDPR).</span>
<span class="k">Privacy by design</span><span class="v">Privacidad integrada desde el diseño.</span>
</div>
<p><b>Regulaciones clave a saber:</b> <b>GDPR</b> (UE), <b>CCPA/CPRA</b> (California), <b>HIPAA</b> (sanidad EEUU), <b>PIPEDA</b> (Canadá), <b>LGPD</b> (Brasil).</p>

<h3>5.5 Audit y assessment</h3>

<h4>Audit interno</h4>
<div class="kvs">
<span class="k">Audit committee</span><span class="v">Comité que supervisa auditorías internas.</span>
<span class="k">Self-assessment</span><span class="v">Autoevaluación.</span>
</div>

<h4>Audit externo</h4>
<p>Regulatory examinations, assessment, attestation, auditorías independientes de terceros (SOC 2, ISO 27001).</p>

<h4>Penetration testing — modalidades</h4>
<div class="minicards">
<div class="minicard"><div class="h">Physical</div><p>Intento de entrada física al edificio.</p></div>
<div class="minicard"><div class="h">Offensive (red team)</div><p>Ataca de forma sigilosa y dirigida.</p></div>
<div class="minicard"><div class="h">Defensive (blue team)</div><p>Defiende y detecta.</p></div>
<div class="minicard"><div class="h">Integrated (purple team)</div><p>Red + blue colaboran en tiempo real.</p></div>
</div>

<h4>Conocimiento del entorno</h4>
<div class="kvs">
<span class="k">Known environment</span><span class="v">Antes "white box". Pleno acceso a info, código, diagramas.</span>
<span class="k">Partially known</span><span class="v">Antes "gray box". Información parcial.</span>
<span class="k">Unknown environment</span><span class="v">Antes "black box". Sin info; simula atacante externo.</span>
</div>

<h4>Reconnaissance</h4>
<div class="compare">
<div><h5>Pasivo</h5><p>Sin tocar el objetivo. <b>OSINT</b>: redes sociales, Shodan, registros DNS, GitHub.</p></div>
<div><h5>Activo</h5><p>Interactúa: port scanning, banner grabbing, fingerprinting.</p></div>
</div>

<div class="term"><div class="t">Rules of engagement (RoE)</div>Documento que define alcance, ventana de tiempo, contactos de emergencia y qué está <b>fuera de alcance</b>. <b>Sin RoE no se hace pentest</b>.</div>

<h3>5.6 Awareness y training</h3>

<h4>Phishing</h4>
<div class="callout info"><span class="ico">ⓘ</span><div>Las <b>phishing campaigns</b> internas son simulacros, <b>no castigos</b>. Sirven para medir click rate y report rate, y dirigir formación específica.</div></div>
<ul>
<li>Reconocer intentos: urgencia exagerada, faltas de ortografía, dominios extraños, peticiones inusuales.</li>
<li>Procedimiento para reportar: botón "Report Phishing" en el cliente de email.</li>
</ul>

<h4>Anomalous behavior (comportamiento anómalo)</h4>
<div class="minicards">
<div class="minicard"><div class="h">Risky</div><p>Saltarse controles a propósito.</p></div>
<div class="minicard"><div class="h">Unexpected</div><p>Fuera del patrón habitual del usuario.</p></div>
<div class="minicard"><div class="h">Unintentional</div><p>Error humano sin mala intención.</p></div>
</div>

<h4>User guidance & training (temas a cubrir)</h4>
<div class="kvs">
<span class="k">Policy / handbooks</span><span class="v">Manual del empleado.</span>
<span class="k">Situational awareness</span><span class="v">Estar alerta del contexto.</span>
<span class="k">Insider threat</span><span class="v">Reconocer señales en compañeros y en uno mismo.</span>
<span class="k">Password management</span><span class="v">Uso de password managers, MFA.</span>
<span class="k">Removable media & cables</span><span class="v">No insertes USB encontrados; cuidado con cables maliciosos.</span>
<span class="k">Social engineering</span><span class="v">Reconocer intentos de manipulación.</span>
<span class="k">OPSEC</span><span class="v"><b>Operational Security</b>: limitar exposición de info que un adversario podría agregar (redes sociales, conversaciones públicas).</span>
<span class="k">Hybrid / remote work</span><span class="v">Wi-Fi seguro, VPN, espacio físico privado.</span>
</div>

<h4>Reporting y monitoreo</h4>
<div class="kvs">
<span class="k">Initial</span><span class="v">Al onboarding del empleado.</span>
<span class="k">Recurring</span><span class="v">Anual mínimo, refrescos.</span>
<span class="k">Métricas</span><span class="v">Click rate, report rate, completion rate, mejora en el tiempo.</span>
</div>

<h4>Development y execution</h4>
<p>Programa estructurado, contenidos adaptados al rol (un developer no necesita lo mismo que recepción), gamificación para engagement, métricas para iterar.</p>
`}
];
