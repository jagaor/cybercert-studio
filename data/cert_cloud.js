window.CERT_DATA = window.CERT_DATA || {};

// === AWS Security – Specialty SCS-C02 ===
CERT_DATA.awssec = {
theory: [
{id:"d1",title:"Domain 1 — Threat Detection & IR (14%)",html:`
<h2>AWS Security Specialty SCS-C02</h2>
<div class="lead">170 min, ~65 preguntas. Pasaje ~750/1000. Asume CSAA o equivalente. Foco en servicios AWS de seguridad.</div>
<h3>Servicios de detección</h3>
<div class="kvs">
<span class="k">GuardDuty</span><span class="v">Threat detection con ML. Analiza VPC Flow, CloudTrail, DNS logs.</span>
<span class="k">Security Hub</span><span class="v">Agregación central de findings (GuardDuty, Macie, Inspector, partners).</span>
<span class="k">Detective</span><span class="v">Investigación gráfica de relaciones e incidentes.</span>
<span class="k">Inspector</span><span class="v">Vulnerability mgmt para EC2, ECR, Lambda.</span>
<span class="k">Macie</span><span class="v">Descubre y clasifica datos sensibles (PII) en S3.</span>
</div>
<h3>IR en cloud</h3>
<p>Aislar instancia: cambiar Security Group a "deny all", quitar IAM role temporal. Snapshot EBS para forense. Memory dump si está corriendo.</p>
`},
{id:"d2",title:"Domain 2 — Logging & Monitoring (18%)",html:`
<h2>Logging & Monitoring</h2>
<h3>Servicios core</h3>
<div class="kvs">
<span class="k">CloudTrail</span><span class="v">Logs de TODAS las API calls. Habilitar Organization-wide trail. Log Integrity Validation.</span>
<span class="k">CloudWatch Logs</span><span class="v">Logs de aplicación, sistema, custom.</span>
<span class="k">VPC Flow Logs</span><span class="v">Metadata de tráfico en VPC. Análoga a NetFlow.</span>
<span class="k">Config</span><span class="v">Configuration history. Conformance Packs para compliance.</span>
<span class="k">Athena</span><span class="v">SQL sobre logs en S3 (CloudTrail, ALB, VPC Flow).</span>
</div>
<h3>Best practices</h3>
<p>CloudTrail multi-region + multi-account. S3 bucket con MFA Delete + Object Lock. Encrypt logs con KMS CMK separada.</p>
`},
{id:"d3",title:"Domain 3 — Infrastructure Security (20%)",html:`
<h2>Infrastructure Security</h2>
<h3>Networking</h3>
<div class="kvs">
<span class="k">VPC</span><span class="v">Public/private subnets. NACLs (stateless), Security Groups (stateful).</span>
<span class="k">VPC Endpoints</span><span class="v">Gateway (S3, DynamoDB) o Interface (PrivateLink). Evita tráfico por internet.</span>
<span class="k">Network Firewall</span><span class="v">Stateful firewall AWS-managed con Suricata IPS.</span>
<span class="k">WAF</span><span class="v">L7 firewall para CloudFront, ALB, API Gateway.</span>
<span class="k">Shield Standard / Advanced</span><span class="v">Anti-DDoS. Standard gratis. Advanced de pago con DRT.</span>
<span class="k">Transit Gateway</span><span class="v">Hub de conectividad entre VPCs.</span>
</div>
<h3>EC2 / Compute</h3>
<p>SSM Session Manager (no SSH). Instance metadata IMDSv2 obligatorio. Patch Manager. Hardened AMIs.</p>
`},
{id:"d4",title:"Domain 4 — IAM (16%)",html:`
<h2>Identity & Access Management</h2>
<h3>Tipos de policies</h3>
<div class="kvs">
<span class="k">Identity-based</span><span class="v">Adjuntas a usuarios, grupos, roles.</span>
<span class="k">Resource-based</span><span class="v">Adjuntas al recurso (S3 bucket policy, KMS key policy).</span>
<span class="k">Permissions boundary</span><span class="v">Límite máximo para una identidad.</span>
<span class="k">SCPs</span><span class="v">Service Control Policies en Organizations. Guardrails de cuenta.</span>
<span class="k">Session policies</span><span class="v">Temporal en AssumeRole.</span>
</div>
<h3>Best practices</h3>
<p>Root account: solo para tareas críticas, MFA obligatorio. IAM users: deprecar para humanos, usar IAM Identity Center (SSO). Roles para EC2/Lambda. Access Analyzer para detectar policies permisivas. Rotation de access keys (mejor: nunca usar).</p>
<h3>Federation</h3>
<p>SAML, OIDC. AWS IAM Identity Center con AD/Okta/Azure AD.</p>
`},
{id:"d5",title:"Domain 5 — Data Protection (18%)",html:`
<h2>Data Protection</h2>
<h3>KMS</h3>
<p>AWS-managed vs Customer-managed (CMK). Multi-Region keys. Automatic rotation (anual). Key Policy + IAM. CloudHSM si necesitas FIPS 140-3 L3.</p>
<h3>S3 encryption</h3>
<div class="kvs">
<span class="k">SSE-S3</span><span class="v">AWS gestiona claves (AES-256).</span>
<span class="k">SSE-KMS</span><span class="v">CMK en KMS.</span>
<span class="k">SSE-C</span><span class="v">Cliente provee la clave.</span>
<span class="k">DSSE-KMS</span><span class="v">Dual-layer encryption.</span>
</div>
<p>Default encryption (desde 2023 AES-256 obligatorio).</p>
<h3>Secrets</h3>
<p>Secrets Manager (rotación automática) vs Parameter Store. Nunca hardcoded en código.</p>
<h3>Certificates</h3>
<p>ACM (gratis para uso interno AWS). ACM Private CA para PKI interna.</p>
`},
{id:"d6",title:"Domain 6 — Mgmt & Governance (14%)",html:`
<h2>Management & Governance</h2>
<h3>Organizations</h3>
<p>OUs jerárquicas, SCPs, consolidated billing. Control Tower para landing zone con guardrails.</p>
<h3>Compliance</h3>
<p>Audit Manager, Config Conformance Packs (PCI, HIPAA, NIST CSF), AWS Artifact (compliance reports).</p>
<h3>Account separation</h3>
<p>Cuentas separadas por: prod/test/dev, security tooling (centralized), log archive (immutable), workload por team.</p>
`}
],
questions: [
{d:1,q:"Servicio AWS que usa ML para detectar threats analizando CloudTrail/VPC Flow/DNS:",opts:["Inspector","GuardDuty","Macie","Config"],c:1,e:"GuardDuty: detección continua. Inspector es vulns. Macie es PII. Config es compliance."},
{d:1,q:"Macie sirve para:",opts:["Detectar threats","Descubrir y clasificar datos sensibles (PII) en S3","Patchar EC2","DDoS protection"],c:1,e:"Macie usa ML para identificar PII, credenciales, etc. en buckets S3."},
{d:2,q:"Para auditar TODAS las API calls en una cuenta AWS:",opts:["CloudWatch Logs","CloudTrail","VPC Flow Logs","X-Ray"],c:1,e:"CloudTrail registra cada llamada API a la AWS API. Habilitar Organization trail multi-region."},
{d:2,q:"VPC Flow Logs registran:",opts:["Payload completo","Metadata de flujos IP (acepta/rechaza, puertos, bytes)","Solo errores","Llamadas API"],c:1,e:"Flow Logs son metadata estilo NetFlow: src/dst IP/puerto, protocolo, bytes, action."},
{d:3,q:"Diferencia NACL vs Security Group:",opts:["Mismo","NACL stateless a nivel subnet, SG stateful a nivel ENI","NACL solo egress","SG solo ingress"],c:1,e:"NACL: stateless, allow+deny, evaluado en orden. SG: stateful, solo allow, no orden."},
{d:3,q:"VPC Endpoint Gateway disponible para:",opts:["Cualquier servicio","Solo S3 y DynamoDB","Solo Lambda","Solo SNS"],c:1,e:"Gateway endpoint solo para S3 y DynamoDB (free). Resto usa Interface (PrivateLink, $$)."},
{d:4,q:"Mejor práctica para cargas EC2 que llaman a S3:",opts:["Hardcoded keys","IAM Role asignado a la instancia","Cuenta root","Usuario IAM nuevo por instancia"],c:1,e:"IAM role: credenciales temporales rotadas automáticamente vía IMDS. Nunca hardcodear keys."},
{d:4,q:"SCPs en Organizations son:",opts:["Permisos efectivos","Guardrails que limitan permisos máximos en cuentas miembro","Solo informativos","Para billing"],c:1,e:"SCPs definen el límite máximo. La identidad necesita permisos IAM Y la SCP debe permitir."},
{d:5,q:"Diferencia entre AWS-managed key y Customer-managed key (CMK) en KMS:",opts:["Velocidad","CMK te permite controlar política, rotación, eliminación, audit","AWS-managed es más segura","CMK es gratis"],c:1,e:"CMK te da control completo: key policy, alias, rotation, schedule deletion. AWS-managed las gestiona AWS."},
{d:5,q:"Servicio para gestionar secrets con rotación automática:",opts:["Parameter Store","Secrets Manager","S3","KMS"],c:1,e:"Secrets Manager: rotación automática programada (Lambda functions). Parameter Store no rota automático."},
{d:6,q:"Tool para evaluar configuración cumple PCI, HIPAA, NIST:",opts:["GuardDuty","Inspector","Config Conformance Packs / Audit Manager","CloudTrail"],c:2,e:"Config tiene Conformance Packs predefinidos. Audit Manager automatiza recolección de evidencia."}
],
flashcards: [
{d:1,q:"¿Qué hace GuardDuty y qué fuentes analiza?",a:"Threat detection con ML. Analiza CloudTrail event logs, VPC Flow Logs, DNS logs, S3 data events, EKS audit logs. Detecta cripto-mining, recon, exfil, IAM compromiso."},
{d:2,q:"¿Cómo se garantiza inmutabilidad de logs CloudTrail?",a:"Bucket S3 separado en cuenta dedicada (log archive). Object Lock + MFA Delete + bucket policy restrictiva. Log File Validation activado para detectar tampering."},
{d:3,q:"¿Qué es IMDSv2 y por qué importa?",a:"Instance Metadata Service v2 requiere session tokens (PUT al iniciar). IMDSv1 no requería: SSRF podía leer credenciales IAM. IMDSv2 mitiga el riesgo."},
{d:4,q:"¿Qué es AWS IAM Identity Center?",a:"Servicio SSO que reemplaza IAM users humanos. Federación con AD/Okta/Azure AD/Google. Permission Sets en lugar de policies por usuario."},
{d:5,q:"¿Qué es ACM Private CA?",a:"Servicio para PKI interna gestionada en AWS. Emite certs internos para mTLS, IoT, microservicios. CA root y subordinadas."}
]
};

// === Azure Security Engineer AZ-500 ===
CERT_DATA.az500 = {
theory: [
{id:"d1",title:"Domain 1 — Manage Identity & Access (25-30%)",html:`
<h2>AZ-500 Azure Security Engineer Associate</h2>
<div class="lead">~150 min, 40-60 preguntas, mix de scenarios y case studies. Pasaje 700/1000.</div>
<h3>Microsoft Entra ID (antes Azure AD)</h3>
<p>Tenant, users, groups, app registrations, enterprise apps. Identity types: cloud-only, hybrid (sync con on-prem AD), guest (B2B).</p>
<h3>Conditional Access</h3>
<p>Políticas if-then: si (user, app, device, location, risk) entonces (allow, block, require MFA, require compliant device).</p>
<h3>MFA</h3>
<p>Microsoft Authenticator (push, TOTP), FIDO2, Windows Hello, SMS (legacy). Number matching obligatorio.</p>
<h3>PIM (Privileged Identity Management)</h3>
<p>Just-in-time elevation a roles privilegiados. Eligible vs active assignment. MFA on activation, justification, approval workflow.</p>
<h3>Identity Protection</h3>
<p>Risk policies: user risk, sign-in risk. Detecciones: leaked credentials, atypical travel, malware-linked IP, password spray.</p>
`},
{id:"d2",title:"Domain 2 — Secure Networking (20-25%)",html:`
<h2>Secure Networking</h2>
<div class="kvs">
<span class="k">NSG</span><span class="v">Network Security Group: stateful, capa de subnet o NIC.</span>
<span class="k">ASG</span><span class="v">Application Security Group: agrupa VMs lógicamente.</span>
<span class="k">Azure Firewall</span><span class="v">Stateful firewall PaaS. Standard/Premium (TLS inspection, IDPS).</span>
<span class="k">Front Door + WAF</span><span class="v">Global L7 + WAF.</span>
<span class="k">Application Gateway + WAF</span><span class="v">Regional L7 con WAF.</span>
<span class="k">DDoS Protection</span><span class="v">Standard (de pago) vs Network Protection vs Basic.</span>
<span class="k">Private Endpoint / Private Link</span><span class="v">Conectar a PaaS desde VNet sin internet.</span>
<span class="k">Service Endpoint</span><span class="v">Extiende identidad de VNet a servicios PaaS.</span>
<span class="k">Bastion</span><span class="v">RDP/SSH a VMs sin IP pública.</span>
</div>
`},
{id:"d3",title:"Domain 3 — Compute, Storage, DB Security (20-25%)",html:`
<h2>Secure Compute, Storage & Databases</h2>
<h3>Compute</h3>
<p>Microsoft Defender for Cloud (CSPM + CWPP). Just-in-Time VM access. Disk encryption (Azure Disk Encryption con BitLocker/dm-crypt + Key Vault).</p>
<h3>Containers</h3>
<p>Defender for Containers. AKS RBAC, network policies (Calico), pod security, image scanning con ACR.</p>
<h3>Storage</h3>
<p>SSE (storage encryption por defecto). Cliente: customer-managed keys en Key Vault. Shared Access Signatures (SAS) — limitar IP, tiempo, permisos. Azure AD auth para Blob/File. Soft delete, immutable blobs (WORM).</p>
<h3>Databases</h3>
<p>SQL: TDE always on. Always Encrypted (cliente cifra antes de enviar). Auditing, threat detection. Dynamic Data Masking. Row-Level Security.</p>
<h3>Key Vault</h3>
<p>Keys, secrets, certificates. RBAC vs Access Policies. Soft delete + purge protection.</p>
`},
{id:"d4",title:"Domain 4 — Manage Security Operations (25-30%)",html:`
<h2>Security Operations</h2>
<h3>Microsoft Defender for Cloud</h3>
<p>CSPM (Cloud Security Posture Mgmt): Secure Score, recomendaciones. CWPP por workload (servers, app service, SQL, storage, containers, key vault, DNS).</p>
<h3>Microsoft Sentinel</h3>
<p>SIEM/SOAR cloud-native. Data connectors, analytics rules, hunting, workbooks, playbooks (Logic Apps), incidents, UEBA.</p>
<h3>Azure Monitor / Log Analytics</h3>
<p>KQL (Kusto Query Language). Workspaces, log retention, alerts.</p>
<h3>Defender XDR (M365)</h3>
<p>Defender for Endpoint, Identity, Cloud Apps (CASB), Office 365.</p>
`}
],
questions: [
{d:1,q:"Para forzar MFA solo si el sign-in es de IP no corporativa:",opts:["Habilitar MFA siempre","Crear Conditional Access policy con condición de location","Cambiar password","Bloquear todos los sign-ins"],c:1,e:"Conditional Access: condition Location (named locations definidas). Acción: require MFA."},
{d:1,q:"PIM en Entra ID permite:",opts:["Cifrar VMs","Just-in-time elevation a roles privilegiados con aprobación y MFA","DDoS protection","Backup"],c:1,e:"Privileged Identity Management: roles eligible (no activos), activación temporal con MFA y justificación."},
{d:2,q:"Diferencia NSG vs Azure Firewall:",opts:["Mismo","NSG es L3/L4 a nivel NIC/subnet; Azure Firewall es PaaS stateful con FQDN filtering, IDPS, threat intel","NSG es PaaS","Firewall solo en VMs"],c:1,e:"NSG es básico ACL. Azure Firewall ofrece L7 features, FQDN tags, threat intelligence-based filtering, TLS inspection (Premium)."},
{d:2,q:"Para conectar a Azure SQL desde VNet sin que el tráfico vaya por internet:",opts:["Service Endpoint","Private Endpoint con Private Link","NSG","Bastion"],c:1,e:"Private Endpoint asigna IP privada de la VNet al servicio PaaS. El tráfico nunca sale a internet."},
{d:3,q:"Always Encrypted en SQL difiere de TDE en que:",opts:["Mismo","Always Encrypted cifra del lado del cliente; el servidor nunca ve datos en claro","TDE es del cliente","Always Encrypted no soporta queries"],c:1,e:"Always Encrypted protege incluso del DBA: el servidor SQL nunca ve datos en claro. TDE solo cifra at rest."},
{d:3,q:"Soft delete + purge protection en Key Vault:",opts:["Inútil","Permite recuperar keys/secrets borrados y bloquea la eliminación permanente prematura","Acelera","Solo para certs"],c:1,e:"Soft delete: retención tras delete (default 90d). Purge protection: nadie puede purgar antes del retention. Protege contra accidente o malicious."},
{d:4,q:"Microsoft Sentinel es:",opts:["AV","SIEM/SOAR cloud-native con KQL","Antivirus","Patcher"],c:1,e:"Sentinel: SIEM PaaS sobre Log Analytics. KQL para queries. Playbooks en Logic Apps. UEBA integrada."},
{d:4,q:"Defender for Cloud Secure Score mide:",opts:["Disponibilidad","Postura de seguridad agregada con recomendaciones priorizadas","Coste","Latencia"],c:1,e:"Secure Score 0-100 según implementación de recomendaciones. Drives priorización de hardening."}
],
flashcards: [
{d:1,q:"¿Qué es Conditional Access?",a:"Motor de políticas if-then en Entra ID. Si (user, app, device, location, risk, etc.) entonces (allow, block, require MFA, require compliant device, require app protection)."},
{d:2,q:"¿Diferencia entre Azure Bastion y Just-in-Time VM Access?",a:"Bastion: gateway PaaS para RDP/SSH a VMs sin IP pública (TLS browser). JIT: abre puerto inbound temporalmente solo a tu IP, vía Defender for Cloud."},
{d:3,q:"¿Qué hace TDE en Azure SQL?",a:"Transparent Data Encryption: cifra automáticamente data files (.mdf), log files (.ldf), backups con clave gestionada por Azure o Customer-Managed (BYOK)."},
{d:4,q:"¿Qué es KQL?",a:"Kusto Query Language. Lenguaje de queries de Azure Data Explorer / Log Analytics / Sentinel. Estructura: Table | where ... | summarize ... | project ..."},
{d:1,q:"¿Qué es PIM en Microsoft Entra ID?",a:"Privileged Identity Management: activación just-in-time de roles privilegiados, con aprobación, MFA y justificación. Los roles quedan 'eligible' y solo se activan por tiempo limitado."},
{d:2,q:"¿Diferencia entre Service Endpoint y Private Endpoint?",a:"Service Endpoint extiende la identidad de la VNet al servicio PaaS (el tráfico sigue por la red de Azure). Private Endpoint asigna una IP privada de la VNet al recurso, manteniendo el tráfico totalmente privado."}
]
};

// === GCP PCSE ===
CERT_DATA.gcpsec = {
theory: [
{id:"d1",title:"Domain 1 — Cloud Identity & Access",html:`
<h2>GCP Professional Cloud Security Engineer (PCSE)</h2>
<div class="lead">2h examen, ~50-60 preguntas. Caso-based. Asume conocimiento de GCP general (ACE/PCA).</div>
<h3>Cloud Identity / Workspace</h3>
<p>Users, groups en Cloud Identity (gratis) o Workspace. Federación con AD via GCDS (directory sync) y SAML.</p>
<h3>IAM</h3>
<p>Members (user, service account, group, domain) + Role + Resource = Policy. Roles: primitive (owner/editor/viewer — evitar), predefined, custom. Service accounts con roles, no keys.</p>
<h3>Resource hierarchy</h3>
<p>Organization → Folders → Projects → Resources. Policies se heredan. Org Policy Service (constraints).</p>
<h3>Workload Identity</h3>
<p>Federation: workloads externos (AWS, on-prem, OIDC) acceden GCP sin claves. Para GKE: Workload Identity binds KSA ↔ GSA.</p>
`},
{id:"d2",title:"Domain 2 — Network Security",html:`
<h2>Network Security</h2>
<div class="kvs">
<span class="k">VPC</span><span class="v">Global por defecto. Subnets regionales.</span>
<span class="k">Firewall rules</span><span class="v">Stateful. Hierarchical firewall policies.</span>
<span class="k">Cloud Armor</span><span class="v">L7 WAF y anti-DDoS para Load Balancers HTTP(S).</span>
<span class="k">Private Service Connect</span><span class="v">Conectar a servicios Google sin internet.</span>
<span class="k">VPC Service Controls</span><span class="v">Perímetros de seguridad alrededor de servicios para prevenir exfil.</span>
<span class="k">Cloud NAT</span><span class="v">NAT outbound sin IP pública en VMs.</span>
<span class="k">IAP</span><span class="v">Identity-Aware Proxy: zero-trust access a apps y SSH/RDP a VMs.</span>
</div>
`},
{id:"d3",title:"Domain 3 — Data Protection",html:`
<h2>Data Protection</h2>
<h3>Cloud KMS</h3>
<p>Software-, HSM-, External-protected keys. Customer-Managed (CMEK), Customer-Supplied (CSEK). Key rings, automatic rotation.</p>
<h3>Cloud DLP</h3>
<p>Inspection y de-identification de PII. InfoTypes (CREDIT_CARD, EMAIL, PERSON_NAME). Tokenization, masking, redaction.</p>
<h3>Secret Manager</h3>
<p>Secrets versionados. IAM-based access. Replicación automática o personalizada.</p>
<h3>Confidential Computing</h3>
<p>Confidential VMs (AMD SEV / Intel TDX). Datos cifrados en memoria.</p>
`},
{id:"d4",title:"Domain 4 — Compliance & Operations",html:`
<h2>Compliance & SecOps</h2>
<h3>Security Command Center (SCC)</h3>
<p>Premium tier: continuous monitoring, threat detection (Event Threat Detection, Container Threat Detection), Web Security Scanner, vulnerability findings.</p>
<h3>Cloud Audit Logs</h3>
<p>Admin Activity (siempre on, gratis), Data Access (off por defecto, $$), System Event, Policy Denied. Export a Cloud Logging, Pub/Sub, BigQuery.</p>
<h3>Compliance</h3>
<p>Compliance Reports Manager. Assured Workloads (FedRAMP High, IL5, EU sovereign).</p>
`}
],
questions: [
{d:1,q:"Recomendado en GCP en lugar de service account keys:",opts:["Service account keys siempre","Workload Identity Federation","Cuentas root","Hardcoded secrets"],c:1,e:"Workload Identity Federation evita gestionar keys. Workloads externos asumen identidad GCP vía OIDC/SAML."},
{d:2,q:"VPC Service Controls sirve para:",opts:["Acelerar","Crear perímetros que evitan exfil de datos a fuera del perímetro definido","DDoS","Backup"],c:1,e:"VPC SC: perímetro alrededor de Storage/BigQuery/etc. APIs solo accesibles desde dentro. Defensa contra credenciales filtradas."},
{d:2,q:"IAP (Identity-Aware Proxy) permite:",opts:["NAT","Acceso a apps y SSH/RDP zero-trust validando identidad y contexto","DDoS","Cifrado"],c:1,e:"IAP: gateway que valida user IAM antes de pasar a la app. Reemplaza VPN para apps web internas y SSH."},
{d:3,q:"Cloud DLP InfoType detecta:",opts:["Solo IPs","Tipos de datos sensibles (PII, secretos, etc.) en texto/imagen","Logs","Métricas"],c:1,e:"DLP tiene cientos de InfoTypes incluidos: tarjetas, DNI, emails, números de SS, pasaportes, etc. Custom InfoTypes con regex."},
{d:4,q:"Para detectar threats con ML continuamente:",opts:["Cloud DLP","Security Command Center Premium con Event Threat Detection","Cloud Build","Pub/Sub"],c:1,e:"SCC Premium incluye ETD, Container Threat Detection, Web Security Scanner, vulnerability findings centralizados."}
],
flashcards: [
{d:1,q:"¿Qué es la jerarquía de recursos en GCP?",a:"Organization → Folders → Projects → Resources. IAM policies y org policies se heredan hacia abajo."},
{d:2,q:"¿Qué hace Cloud Armor?",a:"L7 WAF + anti-DDoS para HTTP(S) Load Balancers. Reglas managed (OWASP), custom, IP allow/deny, geo."},
{d:3,q:"¿Diferencia CMEK vs CSEK?",a:"CMEK: clave en Cloud KMS, gestionada por el cliente pero almacenada en Google. CSEK: cliente provee la clave en cada request, Google nunca la almacena."},
{d:4,q:"¿Qué loguean Cloud Audit Logs?",a:"Admin Activity (siempre, gratis): cambios de config. Data Access (opcional, costoso): lectura/escritura de datos. System Event: operaciones GCP automáticas. Policy Denied: denegaciones IAM."},
{d:1,q:"¿Por qué evitar service account keys en GCP?",a:"Son credenciales de larga vida fáciles de filtrar. Mejor usar Workload Identity Federation (identidad federada sin claves) o adjuntar la service account directamente al recurso (VM, GKE)."},
{d:3,q:"¿Qué hace Cloud DLP?",a:"Inspecciona y des-identifica datos sensibles (InfoTypes: tarjetas, emails, DNI...) en texto, imágenes y BigQuery. Aplica tokenización, masking o redacción."}
]
};

// === ISC2 CCSP ===
CERT_DATA.ccsp = {
theory: [
{id:"d1",title:"Domain 1 — Cloud Concepts (17%)",html:`
<h2>CCSP — Certified Cloud Security Professional</h2>
<div class="lead">ISC2. Vendor-neutral. 5 años exp recomendados. 125 preguntas, 4h. Pasaje 700/1000.</div>
<h3>Conceptos NIST</h3>
<p>Cloud essential characteristics (5): on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service. Service models: IaaS/PaaS/SaaS. Deployment: Public/Private/Hybrid/Community.</p>
<h3>Roles</h3>
<p>Cloud Service Customer (CSC), Cloud Service Provider (CSP), Cloud Service Partner, Cloud Service Broker.</p>
<h3>Shared responsibility</h3>
<p>Provider: physical, virt., network, hypervisor. Customer: data, identity, app config (varía según IaaS/PaaS/SaaS).</p>
`},
{id:"d2",title:"Domain 2 — Cloud Data Security (20%)",html:`
<h2>Cloud Data Security</h2>
<h3>Data lifecycle</h3>
<p>Create → Store → Use → Share → Archive → Destroy.</p>
<h3>Storage types</h3>
<p>Object (S3, Blob), Block (EBS, Disk), File (EFS, Files), Database, Ephemeral.</p>
<h3>Encryption</h3>
<p>At rest, in transit, in use. KMS, HSM (CloudHSM, Cloud HSM, Dedicated HSM). Customer-managed keys (BYOK).</p>
<h3>Data discovery & classification</h3>
<p>DLP (Macie en AWS, DLP en GCP, Purview en M365). Classification labels.</p>
<h3>IAM</h3>
<p>Role-based, attribute-based. Federation SAML/OIDC. Privileged access mgmt (PAM).</p>
`},
{id:"d3",title:"Domain 3 — Platform & Infrastructure Security (17%)",html:`
<h2>Platform & Infrastructure Security</h2>
<h3>Virtualización</h3>
<p>Hypervisor security (Type 1 vs 2). VM sprawl, VM escape, side-channel attacks.</p>
<h3>Containers / Orchestration</h3>
<p>Image scanning, runtime protection, K8s RBAC, network policies, pod security standards, secrets mgmt.</p>
<h3>Network</h3>
<p>VPC/VNet design, segmentation, NSGs/SGs, WAF, DDoS protection, private connectivity (Private Link, PrivateLink, Private Service Connect).</p>
<h3>BC/DR</h3>
<p>Multi-region, multi-AZ, geo-redundancy. RTO, RPO, MTTR. Backup strategy, snapshots, immutable.</p>
`},
{id:"d4",title:"Domain 4 — Cloud Application Security (17%)",html:`
<h2>Cloud Application Security</h2>
<h3>Secure SDLC</h3>
<p>Threat modeling (STRIDE, DREAD, PASTA), SAST/DAST/IAST/SCA, code signing, secret scanning.</p>
<h3>Identity</h3>
<p>OAuth 2.0, OIDC, SAML, SSO, MFA, FIDO2. API security: rate limiting, OAuth tokens, mTLS.</p>
<h3>OWASP Top 10 / API Top 10</h3>
<p>Conoce ambos: web app y API-specific (BOLA, broken auth, mass assignment, etc.).</p>
<h3>DevSecOps</h3>
<p>Shift left: security en CI/CD. Container scanning, IaC scanning (Checkov, tfsec), policy as code (OPA).</p>
`},
{id:"d5",title:"Domain 5 — Operations (16%)",html:`
<h2>Cloud Security Operations</h2>
<h3>Logging & Monitoring</h3>
<p>Centralized logging across multi-cloud. SIEM (Sentinel, Chronicle, Splunk Cloud), SOAR.</p>
<h3>IR en cloud</h3>
<p>Snapshots para forense, isolation via SG/NSG/firewall rules, IAM credential rotation, IMDS lockdown.</p>
<h3>BC/DR</h3>
<p>Multi-region failover, backup testing, runbooks.</p>
<h3>Vulnerability management</h3>
<p>Continuous scanning. Patch mgmt automatizado. Container image registry scanning.</p>
`},
{id:"d6",title:"Domain 6 — Legal, Risk & Compliance (13%)",html:`
<h2>Legal, Risk & Compliance</h2>
<h3>Frameworks</h3>
<p>ISO 27017/27018 (cloud), CSA CCM (Cloud Controls Matrix), CSA STAR, FedRAMP, SOC 2, PCI DSS.</p>
<h3>Privacy</h3>
<p>GDPR, CCPA, LGPD. Data sovereignty, data residency. SCCs, BCRs.</p>
<h3>Contratos</h3>
<p>SLA, contratos cloud, right-to-audit, data ownership clauses, exit strategy, vendor lock-in.</p>
<h3>Risk management</h3>
<p>Threat modeling (STRIDE), risk register, treatment (mitigate/transfer/accept/avoid).</p>
`}
],
questions: [
{d:1,q:"5 características esenciales de cloud según NIST:",opts:["Cifrado, escalabilidad, redundancia, MFA, backup","On-demand self-service, broad network access, resource pooling, rapid elasticity, measured service","Solo elasticidad","Cifrado y autenticación"],c:1,e:"NIST 800-145 define las 5 características esenciales del cloud computing."},
{d:1,q:"En SaaS, el cliente es responsable de:",opts:["Hardware","OS","Datos y configuración de la app","Hipervisor"],c:2,e:"En SaaS el proveedor cubre todo excepto datos del cliente y configuración de seguridad de la app (permisos, MFA)."},
{d:2,q:"Data lifecycle empieza con:",opts:["Store","Create","Use","Destroy"],c:1,e:"Lifecycle: Create → Store → Use → Share → Archive → Destroy."},
{d:2,q:"BYOK significa:",opts:["Bring Your Own Key — el cliente provee/gestiona sus propias claves de cifrado","Backup Your Own Kit","Block Your Output Keys","Buy Your Own KMS"],c:0,e:"BYOK: el cliente trae sus propias claves al servicio cloud (típicamente generadas en HSM externo)."},
{d:3,q:"Pod Security Standards de K8s reemplazan a:",opts:["RBAC","Pod Security Policies (deprecadas)","Network Policies","Secrets"],c:1,e:"PSS (Pod Security Standards) define perfiles Privileged/Baseline/Restricted reemplazando las PSP deprecadas en K8s 1.25+."},
{d:4,q:"OWASP API Top 10 incluye un riesgo NO presente en OWASP Web Top 10:",opts:["Injection","Broken Object Level Authorization (BOLA)","XSS","Broken Auth"],c:1,e:"BOLA es específico de APIs: el endpoint GET /users/123 debería verificar que el caller puede ver al user 123. Web Top 10 lo cubre como Broken Access Control."},
{d:5,q:"Para forensics de una VM cloud comprometida, primer paso típico:",opts:["Apagarla","Snapshot del disco y memoria, aislar via SG/NSG","Reinstalar","Borrar"],c:1,e:"Snapshot preserva evidencia. Aislar (SG deny-all) corta C2 sin destruir estado."},
{d:6,q:"Cloud Controls Matrix (CCM) es de:",opts:["NIST","Cloud Security Alliance (CSA)","ISO","ENISA"],c:1,e:"CSA CCM: framework de controles para cloud, mapea con ISO/NIST/PCI/SOC2/etc. STAR registry usa CCM."}
],
flashcards: [
{d:1,q:"¿Quién es responsable de la seguridad física en cualquier modelo cloud?",a:"Siempre el Cloud Service Provider. El cliente nunca tiene acceso al data center."},
{d:2,q:"¿Qué es tokenization vs encryption?",a:"Tokenization sustituye dato sensible por token sin valor matemático (mapeo en vault). Encryption es reversible matemáticamente con clave."},
{d:3,q:"¿Qué es VM escape y cómo se mitiga?",a:"Romper aislamiento de VM y ejecutar código en hipervisor o host. Mitigaciones: hipervisor parchado, instance isolation, confidential computing."},
{d:4,q:"¿Qué es OWASP API Security Top 10?",a:"Lista específica de riesgos en APIs: Broken Object Level Auth (BOLA), Broken Authentication, Object Property Level Auth, Unrestricted Resource Consumption, Function Level Auth, etc."},
{d:5,q:"¿Cómo afecta IR en cloud vs on-prem?",a:"Cloud: snapshots instantáneos, IAM lockout/rotation rápida, isolation via SG/NSG. Forense limitado a lo que el provider expone. Logs en CloudTrail/Activity Log fundamentales."},
{d:6,q:"¿Qué es CSA STAR?",a:"Security, Trust, Assurance and Risk registry. Repositorio público donde CSPs publican su CCM self-assessment o auditorías. Tres niveles: Self-Assessment, Third-Party Audit, Continuous."}
]
};
