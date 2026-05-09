# 🎓 CyberCert Studio — Plataforma de Estudio para Certificaciones de Ciberseguridad

Plataforma interactiva multi-cert para preparar las certificaciones más demandadas en ciberseguridad. Empieza con **CompTIA Security+ SY0-701** completamente desarrollada y lista para ampliar a OSCP, CISSP, CEH, AWS Security, CCSP, CySA+ y más.

> Aplicación 100% web estática (HTML + CSS + JS vanilla, sin build, sin dependencias). Abre `index.html` y a estudiar.

---

## ✨ Características

- **Selector multi-cert** con 30+ certificaciones organizadas en 6 tracks: Foundational, Blue Team, Red Team, Cloud, GRC, Network.
- **Teoría completa** con tablas comparativas, callouts visuales (info/tip/warn/example/analogy/exam), minicards y flujos paso a paso.
- **Analogías de la vida real** para CADA concepto técnico (banco, aeropuerto, cerradura, mailbox, sello de cera...) — entiende sin diccionario.
- **Tooltips flotantes** sobre cualquier término técnico (>250 definiciones simples para no-informáticos).
- **Flashcards** interactivas con flip 3D, marcado "domino/no sé", filtro por dominio, atajos de teclado.
- **Acrónimos** — 240+ siglas con modo browse y modo trainer (4 opciones, scoring).
- **Quiz por dominio** con feedback instantáneo y explicación tras cada pregunta.
- **Examen simulado** real: 90 preguntas, timer 90 min, mapa de preguntas, marcado para revisar, desglose por dominio.
- **Bot asistente** flotante: pregúntale dudas y busca en glosario, teoría, flashcards y banco de preguntas.
- **Bilingüe ES / EN** con toggle en caliente — el examen real es en inglés, prepárate en ambos idiomas.
- **Progreso persistente** en `localStorage` — historial de exámenes, quizzes y flashcards dominadas.

---

## 🖼 Capturas

### 1. Selector de certificación
Pantalla inicial. Elige la cert que quieres preparar — organizada por tracks.

![Cert selector](screenshots/01-cert-selector.png)

### 2. Dashboard
Panel de inicio con estadísticas, progreso y plan de estudio sugerido.

![Dashboard](screenshots/02-dashboard.png)

### 3. Teoría con tooltips flotantes
Pasa el ratón sobre cualquier término técnico y aparece una nube con explicación llana para no-técnicos.

![Theory with tooltip](screenshots/03-theory.png)

### 4. Flashcards
Tarjetas con flip 3D animado. Marca como dominadas o repite las que fallas.

![Flashcards](screenshots/04-flashcards.png)

### 5. Acrónimos
240+ siglas con buscador y modo trainer interactivo.

![Acronyms](screenshots/05-acronyms.png)

### 6. Quiz por dominio
Práctica con feedback inmediato y explicación tras cada pregunta.

![Quiz](screenshots/06-quiz.png)

### 7. Examen simulado
Formato real CompTIA: 90 preguntas, 90 minutos, mapa de navegación, desglose por dominio.

![Exam](screenshots/07-exam.png)

### 8. Bot asistente
Asistente flotante que responde dudas buscando en todo el contenido local.

![Bot](screenshots/08-bot.png)

### 9. Modo inglés
Toda la teoría y banco de preguntas disponibles en inglés (idioma del examen real).

![Theory English](screenshots/09-theory-english.png)

### 10. Glosario
Buscador unificado de términos, acrónimos y conceptos.

![Glossary](screenshots/10-glossary.png)

---

## 🗂 Estructura

```
examen comptia/
├── index.html              # Punto de entrada
├── styles.css              # Estilos completos (dark theme + componentes)
├── app.js                  # Router, lógica de vistas, bot, idioma
├── data/
│   ├── certs.js            # Catálogo de 30+ certificaciones
│   ├── theory.js           # Teoría Sec+ ES (con analogías)
│   ├── theory_en.js        # Teoría Sec+ EN (con analogías)
│   ├── questions.js        # Banco de preguntas Sec+ ES
│   ├── questions_en.js     # Banco de preguntas Sec+ EN (estilo examen real)
│   ├── flashcards.js       # ~110 flashcards con preguntas claras
│   ├── acronyms.js         # 240+ acrónimos oficiales
│   └── glossary.js         # Diccionario de tooltips (~250 términos)
├── screenshots/            # Capturas para README
└── capture.mjs             # Script Playwright para regenerar capturas
```

---

## 🚀 Uso

### Local (sin instalación)
Doble clic en `index.html`. Funciona offline.

### Servir localmente (recomendado)
```bash
python -m http.server 8765
# abre http://localhost:8765/index.html
```

### Regenerar capturas
```bash
npm install --save-dev playwright
npx playwright install chromium
node capture.mjs
```

---

## 🎯 Certificaciones soportadas

### Foundational
- ✅ **CompTIA Security+** (SY0-701) — completa
- 🔜 CompTIA Network+ (N10-009)
- 🔜 ISC2 Certified in Cybersecurity (CC)
- 🔜 CompTIA A+

### Blue Team / Defensa
- 🔜 CompTIA CySA+ (CS0-003)
- 🔜 CompTIA SecurityX / CASP+ (CAS-005)
- 🔜 GIAC GCIH, GCIA, GCFA
- 🔜 Blue Team Level 1 (BTL1)
- 🔜 ISC2 SSCP

### Red Team / Ofensiva
- 🔜 CompTIA PenTest+ (PT0-003)
- 🔜 OffSec OSCP, OSEP, OSWE
- 🔜 INE eJPT
- 🔜 EC-Council CEH
- 🔜 Zero-Point Security CRTO

### Cloud Security
- 🔜 AWS Certified Security – Specialty (SCS-C02)
- 🔜 Microsoft Azure AZ-500
- 🔜 Google Cloud PCSE
- 🔜 ISC2 CCSP

### GRC / Gestión
- 🔜 ISC2 CISSP
- 🔜 ISACA CISM, CISA, CRISC
- 🔜 ISO 27001 Lead Implementer / Auditor

### Network Security
- 🔜 Cisco CCNA (200-301), CCNP Security
- 🔜 Juniper JNCIS-SEC

> **🔜 Coming Soon:** la plataforma está construida para alojar cualquier cert con la misma estructura. Cada nueva cert solo requiere `theory_<id>.js`, `questions_<id>.js`, `flashcards_<id>.js`.

---

## ⚖️ Aviso legal

Las preguntas del banco están escritas siguiendo el **estilo y formato del examen real** (escenarios, "BEST/MOST appropriate", distractores plausibles) y cubriendo los objetivos oficiales de cada cert. **NO son preguntas filtradas del examen real** — el contenido oficial del examen está bajo NDA y compartirlo violaría el acuerdo del candidato. Esta plataforma es una herramienta de estudio basada en los objetivos públicos publicados por los vendors.

Marcas y nombres de certificaciones son propiedad de sus respectivos vendors (CompTIA, ISC2, OffSec, EC-Council, ISACA, Cisco, AWS, Microsoft, Google, Juniper, GIAC/SANS, etc.).

---

## 🛠 Stack

- HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- localStorage para persistencia
- Playwright para capturas automatizadas
- Cero dependencias en runtime

---

## 📄 Licencia

Uso personal y educativo. No redistribuir.
