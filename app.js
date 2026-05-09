// === Estado persistido ===
const STORE_KEY = "secplus_sy0701_v1";
const store = {
  load(){ try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch(e){ return {}; } },
  save(s){ localStorage.setItem(STORE_KEY, JSON.stringify(s)); },
  get(){ return Object.assign({fcStudied:[], fcKnown:[], examHistory:[], quizHistory:[], acrSeen:[], lang:"es"}, this.load()); },
  set(patch){ this.save(Object.assign(this.get(), patch)); }
};

// === Idioma ===
function getLang(){ return store.get().lang || "es"; }
function setLang(l){ store.set({lang:l}); applyLangLabels(); }
function getActiveCertData(){
  const id = getCurrentCert();
  if(!id) return null;
  return (window.CERT_DATA && window.CERT_DATA[id]) || null;
}
function getTheoryData(){
  const cd = getActiveCertData();
  if(cd){
    if(getLang()==="en" && cd.theory_en) return cd.theory_en;
    return cd.theory || window.THEORY;
  }
  return getLang()==="en" && window.THEORY_EN ? window.THEORY_EN : window.THEORY;
}
function getQuestionsData(){
  const cd = getActiveCertData();
  if(cd){
    if(getLang()==="en" && cd.questions_en) return cd.questions_en;
    return cd.questions || window.QUESTIONS;
  }
  return getLang()==="en" && window.QUESTIONS_EN ? window.QUESTIONS_EN : window.QUESTIONS;
}
function getFlashcardsData(){
  const cd = getActiveCertData();
  return (cd && cd.flashcards) || window.FLASHCARDS;
}

// === Cert actual ===
function getCurrentCert(){ return store.get().currentCert || null; }
function setCurrentCert(id){ store.set({currentCert:id}); updateCertBadge(); }
function getCertMeta(id){ return (window.CERTS||[]).find(c => c.id === id); }

const I18N = {
  es:{dashboard:"Dashboard",theory:"Teoría",flashcards:"Flashcards",acronyms:"Acrónimos",quiz:"Quiz",exam:"Examen",glossary:"Glosario",langBtn:"🌐 ES / EN",
    quiz_title:"Quiz por dominio",quiz_dom:"Dominio",quiz_all:"Mezcla todos los dominios",quiz_n:"Nº preguntas",quiz_start:"Empezar",quiz_practice:"Modo práctica: feedback inmediato y explicación tras cada pregunta.",
    question:"Pregunta",hits:"Aciertos",exit:"Salir",see_results:"Ver resultados",next:"Siguiente ▶",prev:"◀ Anterior",confirm_exit:"¿Salir del quiz?",
    correct:"Correcto",wrong:"Incorrecto",another_quiz:"Otro quiz",review:"Revisar respuestas",your_answer:"Tu respuesta",correct_ans:"Correcta",
    review_title:"Revisión",back:"Volver",ok:"OK",fail:"FALLO",
    finish:"Terminar",flag:"☆ Marcar revisar",unflag:"★ Desmarcar",map:"Mapa",map_title:"Mapa de preguntas",close_map:"Cerrar",
    confirm_finish_pre:"¿Terminar el examen? Quedan ",confirm_finish_post:" preguntas sin responder.",
    passed:"Aprobado (estimación)",failed:"Por debajo del umbral",threshold:"Umbral real CompTIA: 750/900 (escalado). Aquí mostramos % directo como referencia.",
    another_exam:"Otro examen",full_review:"Revisión completa",blank:"<em>en blanco</em>",aciertos:"aciertos"},
  en:{dashboard:"Dashboard",theory:"Theory",flashcards:"Flashcards",acronyms:"Acronyms",quiz:"Quiz",exam:"Exam",glossary:"Glossary",langBtn:"🌐 EN / ES",
    quiz_title:"Quiz by Domain",quiz_dom:"Domain",quiz_all:"Mix all domains",quiz_n:"# of questions",quiz_start:"Start",quiz_practice:"Practice mode: instant feedback and explanation after each question.",
    question:"Question",hits:"Correct",exit:"Exit",see_results:"See results",next:"Next ▶",prev:"◀ Previous",confirm_exit:"Exit the quiz?",
    correct:"Correct",wrong:"Incorrect",another_quiz:"Another quiz",review:"Review answers",your_answer:"Your answer",correct_ans:"Correct answer",
    review_title:"Review",back:"Back",ok:"OK",fail:"WRONG",
    finish:"Finish",flag:"☆ Flag for review",unflag:"★ Unflag",map:"Map",map_title:"Question map",close_map:"Close",
    confirm_finish_pre:"Finish the exam? There are still ",confirm_finish_post:" unanswered questions.",
    passed:"Passed (estimate)",failed:"Below threshold",threshold:"Real CompTIA threshold: 750/900 (scaled). Shown as direct % for reference.",
    another_exam:"Another exam",full_review:"Full review",blank:"<em>blank</em>",aciertos:"correct"}
};
function T(k){ return (I18N[getLang()] || I18N.es)[k] || I18N.es[k] || k; }
function applyLangLabels(){
  const t = I18N[getLang()];
  document.querySelectorAll("#nav button[data-route]").forEach(b => {
    const r = b.dataset.route;
    if(t[r]) b.textContent = t[r];
  });
  const lb = document.getElementById("langToggle");
  if(lb) lb.textContent = t.langBtn;
}

// === Router ===
const view = document.getElementById("view");
const navBtns = document.querySelectorAll("#nav button");
navBtns.forEach(b => b.addEventListener("click", () => go(b.dataset.route)));
document.getElementById("reset").addEventListener("click", e => {
  e.preventDefault();
  if(confirm("¿Borrar todo el progreso local?")){ localStorage.removeItem(STORE_KEY); go("dashboard"); }
});

function go(route){
  // si no hay cert elegida, forzar selector
  if(!getCurrentCert() && route !== "certselect"){
    return certSelect();
  }
  if(route === "certselect"){
    document.getElementById("nav").style.display = "none";
    return certSelect();
  }
  document.getElementById("nav").style.display = "flex";
  navBtns.forEach(b => b.classList.toggle("active", b.dataset.route === route));
  ({dashboard, theory, flashcards, acronyms, quiz, exam, glossary})[route]();
  window.scrollTo(0,0);
}

// === Selector de certificación ===
function certSelect(){
  document.getElementById("nav").style.display = "none";
  const tracks = window.TRACKS || [];
  const certs = window.CERTS || [];
  const html = `
    <div class="cert-hero">
      <h1>Elige tu certificación</h1>
      <p>Plataforma multi-cert para preparar las certificaciones de ciberseguridad más demandadas. Selecciona una para empezar — verás teoría con analogías, flashcards, banco de preguntas, examen simulado y bot de ayuda.</p>
    </div>
    ${tracks.map(tr => {
      const list = certs.filter(c => c.track === tr.id);
      return `
      <div class="track">
        <div class="track-head">
          <span class="ico">${tr.icon}</span>
          <div><h2>${tr.name}</h2><p>${tr.desc}</p></div>
        </div>
        <div class="cert-grid">
          ${list.map(c => `
            <div class="cert-card ${c.status}" data-id="${c.id}" style="--c-color:${c.color}">
              <div class="top-bar"></div>
              ${c.status==="ready" ? `<span class="ready-tag">✓ LISTA</span>` : `<span class="coming-tag">PRÓXIMAMENTE</span>`}
              <span class="vendor-badge">${c.vendor}</span>
              <h3>${c.name}</h3>
              <div class="code">${c.code}</div>
              <div class="desc">${c.desc}</div>
              <div class="meta">
                <span class="pill">${c.level}</span>
                <span class="pill">${c.hours}</span>
              </div>
            </div>`).join("")}
        </div>
      </div>`;
    }).join("")}
  `;
  view.innerHTML = html;
  view.querySelectorAll(".cert-card").forEach(card => {
    card.onclick = ()=>{
      const id = card.dataset.id;
      const cert = getCertMeta(id);
      if(cert.status === "ready"){
        setCurrentCert(id);
        document.getElementById("nav").style.display = "flex";
        go("dashboard");
      } else {
        showComingModal(cert);
      }
    };
  });
}

function showComingModal(cert){
  const wrap = document.createElement("div");
  wrap.className = "coming-modal";
  wrap.innerHTML = `
    <div class="box">
      <h2>${cert.name}</h2>
      <p>Contenido en preparación. La plataforma está construida para alojar cualquier cert con teoría, flashcards, examen y bot.</p>
      <p style="font-size:13px"><b>${cert.vendor}</b> · ${cert.level} · ${cert.hours}<br><br>${cert.desc}</p>
      <p style="font-size:12px;color:var(--mut)">Pídele al desarrollador que expanda esta cert (igual que <b>Security+</b>) y la tendrás completa: dominios oficiales, analogías reales, banco de preguntas estilo examen, bilingüe ES/EN.</p>
      <div class="row">
        <button class="btn ghost" id="closeM">Volver</button>
      </div>
    </div>`;
  document.body.appendChild(wrap);
  wrap.querySelector("#closeM").onclick = ()=>wrap.remove();
  wrap.onclick = e => { if(e.target === wrap) wrap.remove(); };
}

function updateCertBadge(){
  const id = getCurrentCert();
  const cert = id ? getCertMeta(id) : null;
  const old = document.getElementById("certBadge");
  if(old) old.remove();
  if(!cert) return;
  const badge = document.createElement("span");
  badge.id = "certBadge";
  badge.className = "cert-current-badge";
  badge.style.marginLeft = "12px";
  badge.innerHTML = `<span class="dot" style="background:${cert.color}"></span> <b>${cert.name}</b> · ${cert.code}`;
  const brand = document.querySelector(".brand");
  if(brand) brand.appendChild(badge);
}

// === Helpers ===
const shuffle = a => { a = a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const fmtTime = s => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
const domainName = d => ({1:"Conceptos Generales",2:"Amenazas y Vulnerabilidades",3:"Arquitectura",4:"Operaciones",5:"Programa y Gobernanza"})[d];

// === DASHBOARD ===
function dashboard(){
  const s = store.get();
  const totalQ = QUESTIONS.length;
  const totalFC = FLASHCARDS.length;
  const totalAcr = ACRONYMS.length;
  const lastExam = s.examHistory[s.examHistory.length-1];
  const avgQuiz = s.quizHistory.length ? Math.round(s.quizHistory.reduce((a,b)=>a+b.pct,0)/s.quizHistory.length) : 0;

  view.innerHTML = `
    <h2>Bienvenido a tu plataforma de estudio</h2>
    <p style="color:var(--mut);margin-top:-8px">Versión SY0-701 · 5 dominios · Todo guardado en tu navegador.</p>

    <div class="grid cards" style="margin-top:18px">
      <div class="card">
        <p>Preguntas en banco</p>
        <div class="big">${totalQ}</div>
        <p>${totalFC} flashcards · ${totalAcr} acrónimos</p>
      </div>
      <div class="card">
        <p>Último examen</p>
        <div class="big">${lastExam ? lastExam.pct+"%" : "—"}</div>
        <p>${lastExam ? new Date(lastExam.t).toLocaleString() : "Aún sin completar"}</p>
      </div>
      <div class="card">
        <p>Promedio en quizzes</p>
        <div class="big">${s.quizHistory.length ? avgQuiz+"%" : "—"}</div>
        <p>${s.quizHistory.length} quizzes realizados</p>
      </div>
      <div class="card">
        <p>Flashcards dominadas</p>
        <div class="big">${s.fcKnown.length}/${totalFC}</div>
        <div class="progressbar"><span style="width:${(s.fcKnown.length/totalFC*100)}%"></span></div>
      </div>
    </div>

    <h3 style="margin-top:30px">Plan sugerido</h3>
    <div class="grid cards">
      <div class="card"><h3>1. Lee la teoría</h3><p>Empieza por el Dominio 1 y avanza en orden. Reserva ~30 min por dominio.</p><div class="row"><button class="btn" data-go="theory">Ir a Teoría</button></div></div>
      <div class="card"><h3>2. Refuerza con flashcards</h3><p>Marca como dominadas las que recuerdes. Repite las que falles.</p><div class="row"><button class="btn" data-go="flashcards">Estudiar</button></div></div>
      <div class="card"><h3>3. Memoriza acrónimos</h3><p>El examen está lleno de siglas. Usa el modo trainer.</p><div class="row"><button class="btn" data-go="acronyms">Practicar</button></div></div>
      <div class="card"><h3>4. Quiz por dominio</h3><p>Practica en bloques pequeños con feedback inmediato.</p><div class="row"><button class="btn" data-go="quiz">Lanzar quiz</button></div></div>
      <div class="card"><h3>5. Examen simulado</h3><p>90 preguntas, 90 minutos. Cuando te sientas listo.</p><div class="row"><button class="btn" data-go="exam">Empezar examen</button></div></div>
      <div class="card"><h3>6. Glosario</h3><p>Búsqueda rápida de cualquier término.</p><div class="row"><button class="btn" data-go="glossary">Abrir</button></div></div>
    </div>

    ${lastExam ? renderDomainBars(lastExam.byDomain) : ""}
  `;
  view.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", ()=>go(b.dataset.go)));
}

function renderDomainBars(byDomain){
  let html = `<h3 style="margin-top:30px">Aciertos por dominio (último examen)</h3><div class="card">`;
  for(let d=1; d<=5; d++){
    const v = byDomain[d] || {ok:0,total:0};
    const pct = v.total ? Math.round(v.ok/v.total*100) : 0;
    html += `<div class="bardomain"><div class="lbl">D${d} — ${domainName(d)}<br><small>${v.ok}/${v.total}</small></div><div class="pb"><div class="progressbar"><span style="width:${pct}%"></span></div></div><div style="width:50px;text-align:right">${pct}%</div></div>`;
  }
  return html+"</div>";
}

// === Tooltips automáticos sobre términos del glosario ===
function applyTooltips(rootEl){
  if(!window.GLOSSARY) return;
  const seen = new Set();
  const terms = Object.keys(window.GLOSSARY).sort((a,b)=>b.length-a.length);
  if(!terms.length) return;
  const escaped = terms.map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
  // \b funciona mal con acentos/&; usamos lookbehind/ahead simple
  const re = new RegExp('(^|[^\\w&])('+escaped.join('|')+')(?=$|[^\\w])', 'g');
  const SKIP_TAGS = new Set(['H2','H3','H4','H5','CODE','SCRIPT','STYLE','BUTTON']);
  const SKIP_CLASSES = new Set(['tt','t','h']);
  const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, {
    acceptNode(n){
      if(!n.textContent.trim()) return NodeFilter.FILTER_REJECT;
      let p = n.parentElement;
      while(p && p !== rootEl){
        if(SKIP_TAGS.has(p.tagName)) return NodeFilter.FILTER_REJECT;
        if(p.classList){
          for(const c of p.classList){ if(SKIP_CLASSES.has(c)) return NodeFilter.FILTER_REJECT; }
        }
        p = p.parentElement;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n => {
    const text = n.textContent;
    re.lastIndex = 0;
    let hasMatch = false;
    re.lastIndex = 0;
    const html = text.replace(re, (full, pre, term)=>{
      const key = term;
      if(seen.has(key)) return full;
      if(!window.GLOSSARY[key]) return full;
      seen.add(key);
      hasMatch = true;
      const tip = window.GLOSSARY[key].replace(/"/g,'&quot;').replace(/</g,'&lt;');
      return `${pre}<span class="tt" data-tip="${tip}">${term}</span>`;
    });
    if(!hasMatch) return;
    const wrap = document.createElement('span');
    wrap.innerHTML = html;
    n.parentNode.replaceChild(wrap, n);
  });
}

// === THEORY ===
function theory(){
  const data = getTheoryData();
  let active = data[0].id;
  const render = ()=>{
    const cur = getTheoryData();
    const t = cur.find(x=>x.id===active) || cur[0];
    active = t.id;
    view.innerHTML = `
    <div class="theory-wrap">
      <aside class="toc">
        ${cur.map(x => `<button data-id="${x.id}" class="${x.id===active?'active':''}">${x.title}</button>`).join("")}
      </aside>
      <article class="theory-content">${t.html}</article>
    </div>`;
    view.querySelectorAll(".toc button").forEach(b => b.addEventListener("click", ()=>{ active = b.dataset.id; render(); window.scrollTo(0,0); }));
    // Aplicar tooltips después de inyectar HTML
    const content = view.querySelector('.theory-content');
    if(content) applyTooltips(content);
  };
  render();
}

// === FLASHCARDS ===
function flashcards(){
  let domain = "all";
  let mode = "all"; // all | unknown
  const FC = getFlashcardsData();
  let order = shuffle(FC.map((_,i)=>i));
  let idx = 0;

  const render = () => {
    const s = store.get();
    const FC2 = getFlashcardsData();
    let pool = order.filter(i => i < FC2.length && (domain==="all" || FC2[i].d==Number(domain)));
    if(mode==="unknown") pool = pool.filter(i => !s.fcKnown.includes(i));
    if(idx >= pool.length) idx = 0;
    const card = pool.length ? FC2[pool[idx]] : null;

    view.innerHTML = `
      <h2>Flashcards</h2>
      <div class="row">
        <label>Dominio:
          <select id="fcDom">
            <option value="all">Todos</option>
            ${[1,2,3,4,5].map(d=>`<option value="${d}" ${domain==d?"selected":""}>D${d} ${domainName(d)}</option>`).join("")}
          </select>
        </label>
        <label>Modo:
          <select id="fcMode">
            <option value="all" ${mode=="all"?"selected":""}>Todas</option>
            <option value="unknown" ${mode=="unknown"?"selected":""}>Solo no dominadas</option>
          </select>
        </label>
        <button class="btn ghost" id="fcShuffle">Mezclar</button>
        <span style="color:var(--mut);font-size:13px">Tarjeta ${pool.length?idx+1:0}/${pool.length} · ${s.fcKnown.length}/${FC2.length} dominadas</span>
      </div>
      ${card ? `
      <div class="fc-stage">
        <div class="fc-card" id="fcCard">
          <div class="fc-inner">
            <div class="fc-face"><div><span class="tag">D${card.d} · ${domainName(card.d)}</span><div style="margin-top:14px;font-weight:600">${card.q}</div><div class="fc-meta">Click o pulsa <span class="kbd">Espacio</span> para girar</div></div></div>
            <div class="fc-face fc-back"><div>${card.a}</div></div>
          </div>
        </div>
      </div>
      <div class="row" style="justify-content:center">
        <button class="btn ghost" id="fcPrev">◀ Anterior</button>
        <button class="btn bad" id="fcUnknown">No la sé</button>
        <button class="btn" id="fcKnown">La domino</button>
        <button class="btn ghost" id="fcNext">Siguiente ▶</button>
      </div>` : `<div class="card" style="text-align:center;margin-top:30px"><p>No hay flashcards en este filtro. Cambia el modo a "Todas" o resetea progreso.</p></div>`}
    `;

    view.querySelector("#fcDom").onchange = e => { domain = e.target.value; idx=0; render(); };
    view.querySelector("#fcMode").onchange = e => { mode = e.target.value; idx=0; render(); };
    view.querySelector("#fcShuffle").onclick = ()=>{ order = shuffle(order); idx=0; render(); };
    if(card){
      const cardEl = view.querySelector("#fcCard");
      cardEl.onclick = ()=> cardEl.classList.toggle("flip");
      view.querySelector("#fcPrev").onclick = ()=>{ idx = (idx-1+pool.length)%pool.length; render(); };
      view.querySelector("#fcNext").onclick = ()=>{ idx = (idx+1)%pool.length; render(); };
      view.querySelector("#fcKnown").onclick = ()=>{
        const s2 = store.get();
        if(!s2.fcKnown.includes(pool[idx])) s2.fcKnown.push(pool[idx]);
        store.set({fcKnown: s2.fcKnown});
        idx = (idx+1)%pool.length; render();
      };
      view.querySelector("#fcUnknown").onclick = ()=>{
        const s2 = store.get();
        s2.fcKnown = s2.fcKnown.filter(i => i !== pool[idx]);
        store.set({fcKnown: s2.fcKnown});
        idx = (idx+1)%pool.length; render();
      };
    }
  };

  document.onkeydown = e => {
    const tag = document.activeElement?.tagName;
    if(tag === "INPUT" || tag === "TEXTAREA") return; // no interferir con campos de texto
    if(view.querySelector("#fcCard")){
      if(e.code==="Space"){ e.preventDefault(); view.querySelector("#fcCard").classList.toggle("flip"); }
      else if(e.code==="ArrowRight") view.querySelector("#fcNext")?.click();
      else if(e.code==="ArrowLeft") view.querySelector("#fcPrev")?.click();
    }
  };
  render();
}

// === ACRONYMS ===
function acronyms(){
  let mode = "browse"; // browse | trainer
  let filter = "";
  let trainer = null;

  const startTrainer = ()=>{
    const order = shuffle(ACRONYMS.map((_,i)=>i));
    trainer = {order, idx:0, score:0, answered:false, lastWasOk:false};
    render();
  };

  const render = ()=>{
    if(mode==="browse"){
      const filtered = ACRONYMS.filter(a => !filter || (a[0]+" "+a[1]).toLowerCase().includes(filter.toLowerCase()));
      view.innerHTML = `
        <h2>Acrónimos (${ACRONYMS.length})</h2>
        <div class="row">
          <button class="btn" id="toTrainer">Modo trainer</button>
          <input type="text" id="filter" placeholder="Filtrar..." value="${filter}" style="flex:1;min-width:200px"/>
        </div>
        <div class="acr-grid">
          ${filtered.map(a => `<div class="acr"><b>${a[0]}</b><p>${a[1]}</p></div>`).join("")}
        </div>`;
      view.querySelector("#toTrainer").onclick = ()=>{ mode="trainer"; startTrainer(); };
      view.querySelector("#filter").oninput = e => { filter = e.target.value; render(); };
    } else {
      // trainer: muestra acrónimo, 4 opciones de definición
      const i = trainer.order[trainer.idx];
      const correct = ACRONYMS[i];
      const distract = shuffle(ACRONYMS.filter((_,j)=>j!==i)).slice(0,3);
      const opts = trainer.opts || shuffle([correct, ...distract]);
      trainer.opts = opts;

      view.innerHTML = `
        <h2>Acrónimo trainer</h2>
        <div class="row">
          <button class="btn ghost" id="back">← Volver al listado</button>
          <span class="tag">Pregunta ${trainer.idx+1}/${trainer.order.length}</span>
          <span class="tag ok">Aciertos: ${trainer.score}</span>
        </div>
        <div class="qbox">
          <h3>¿Qué significa <span style="color:var(--acc2)">${correct[0]}</span>?</h3>
          ${opts.map((o,k)=>`<button class="opt" data-k="${k}">${o[1]}</button>`).join("")}
          <div id="explain"></div>
        </div>
        <div class="row">
          <button class="btn" id="next" ${trainer.answered?"":"disabled"}>${trainer.idx===trainer.order.length-1?"Terminar":"Siguiente"}</button>
        </div>`;
      view.querySelector("#back").onclick = ()=>{ mode="browse"; render(); };
      view.querySelectorAll(".opt").forEach(b => b.onclick = ()=>{
        if(trainer.answered) return;
        trainer.answered = true;
        const k = Number(b.dataset.k);
        const isOk = opts[k][0] === correct[0];
        if(isOk) trainer.score++;
        view.querySelectorAll(".opt").forEach((el,j)=>{
          if(opts[j][0]===correct[0]) el.classList.add("correct");
          else if(j===k) el.classList.add("wrong");
        });
        view.querySelector("#explain").innerHTML = `<div class="explain"><b>${correct[0]}</b> = ${correct[1]}</div>`;
        view.querySelector("#next").disabled = false;
      });
      view.querySelector("#next").onclick = ()=>{
        if(trainer.idx === trainer.order.length-1){
          view.innerHTML = `<div class="results"><div class="score">${Math.round(trainer.score/trainer.order.length*100)}%</div><p>${trainer.score}/${trainer.order.length} acrónimos correctos</p><div class="row" style="justify-content:center"><button class="btn" id="again">Otra vuelta</button><button class="btn ghost" id="exit">Volver al listado</button></div></div>`;
          view.querySelector("#again").onclick = startTrainer;
          view.querySelector("#exit").onclick = ()=>{ mode="browse"; render(); };
        } else {
          trainer.idx++; trainer.answered=false; trainer.opts=null; render();
        }
      };
    }
  };
  render();
}

// === QUIZ ===
function quiz(){
  let stage = "config";
  let cfg = {domain:"all", count:15};
  let session = null;

  const render = ()=>{
    if(stage==="config"){
      view.innerHTML = `
        <h2>${T("quiz_title")}</h2>
        <div class="card">
          <div class="row">
            <label>${T("quiz_dom")}:
              <select id="qd">
                <option value="all">${T("quiz_all")}</option>
                ${[1,2,3,4,5].map(d=>`<option value="${d}">D${d} ${domainName(d)}</option>`).join("")}
              </select>
            </label>
            <label>${T("quiz_n")}: <input type="number" id="qc" value="15" min="5" max="50"/></label>
            <button class="btn" id="qstart">${T("quiz_start")}</button>
          </div>
          <p style="color:var(--mut);font-size:13px;margin-top:10px">${T("quiz_practice")}</p>
        </div>`;
      view.querySelector("#qstart").onclick = ()=>{
        cfg.domain = view.querySelector("#qd").value;
        cfg.count = Math.max(5, Math.min(50, Number(view.querySelector("#qc").value)||15));
        const pool = getQuestionsData().filter(q => cfg.domain==="all" || q.d==Number(cfg.domain));
        const picks = shuffle(pool).slice(0, Math.min(cfg.count, pool.length));
        session = {qs: picks.map(q => ({...q, _opts: shuffle(q.opts.map((o,i)=>({o,i})))})), idx:0, answers:[], score:0};
        stage="play"; render();
      };
    } else if(stage==="play"){
      const q = session.qs[session.idx];
      const answered = session.answers[session.idx] !== undefined;
      view.innerHTML = `
        <div class="row" style="justify-content:space-between">
          <div><span class="tag">D${q.d} · ${domainName(q.d)}</span> <span class="tag">${T("question")} ${session.idx+1}/${session.qs.length}</span></div>
          <div><span class="tag ok">${T("hits")}: ${session.score}</span></div>
        </div>
        <div class="qbox">
          <h3>${q.q}</h3>
          ${q._opts.map((o,k)=>`<button class="opt" data-k="${k}">${o.o}</button>`).join("")}
          <div id="explain"></div>
        </div>
        <div class="row" style="justify-content:space-between">
          <button class="btn ghost" id="qabort">${T("exit")}</button>
          <button class="btn" id="qnext" ${answered?"":"disabled"}>${session.idx===session.qs.length-1?T("see_results"):T("next")}</button>
        </div>`;
      const showFeedback = (chosenK)=>{
        const chosenOriginalIdx = q._opts[chosenK].i;
        const isOk = chosenOriginalIdx === q.c;
        view.querySelectorAll(".opt").forEach((el,j)=>{
          if(q._opts[j].i === q.c) el.classList.add("correct");
          else if(j===chosenK) el.classList.add("wrong");
        });
        view.querySelector("#explain").innerHTML = `<div class="explain"><b>${isOk?T("correct"):T("wrong")} —</b> ${q.e}</div>`;
        view.querySelector("#qnext").disabled = false;
      };
      if(answered){ showFeedback(session.answers[session.idx]); }
      view.querySelectorAll(".opt").forEach(b => b.onclick = ()=>{
        if(session.answers[session.idx]!==undefined) return;
        const k = Number(b.dataset.k);
        session.answers[session.idx] = k;
        if(q._opts[k].i === q.c) session.score++;
        showFeedback(k);
      });
      view.querySelector("#qnext").onclick = ()=>{
        if(session.idx === session.qs.length-1){ stage="done"; render(); }
        else { session.idx++; render(); }
      };
      view.querySelector("#qabort").onclick = ()=>{ if(confirm(T("confirm_exit"))){ stage="config"; render(); } };
    } else { // done
      const pct = Math.round(session.score/session.qs.length*100);
      const s = store.get();
      s.quizHistory.push({t:Date.now(), pct, n:session.qs.length, domain:cfg.domain});
      store.set({quizHistory: s.quizHistory});
      view.innerHTML = `
        <div class="results">
          <div class="score">${pct}%</div>
          <p>${session.score}/${session.qs.length} ${T("aciertos")}</p>
          <div class="row" style="justify-content:center">
            <button class="btn" id="again">${T("another_quiz")}</button>
            <button class="btn ghost" id="rev">${T("review")}</button>
            <button class="btn ghost" id="dash">${T("dashboard")}</button>
          </div>
        </div>`;
      view.querySelector("#again").onclick = ()=>{ stage="config"; render(); };
      view.querySelector("#dash").onclick = ()=>go("dashboard");
      view.querySelector("#rev").onclick = ()=>{
        const list = session.qs.map((q,i)=>{
          const chosenK = session.answers[i];
          const chosenOriginalIdx = chosenK!==undefined ? q._opts[chosenK].i : -1;
          const ok = chosenOriginalIdx === q.c;
          return `<div class="qbox"><div><span class="tag ${ok?"ok":"bad"}">${ok?T("ok"):T("fail")}</span> <span class="tag">D${q.d}</span></div><h3>${q.q}</h3><p><b>${T("your_answer")}:</b> ${chosenK!==undefined?q._opts[chosenK].o:"—"}</p><p><b>${T("correct_ans")}:</b> ${q.opts[q.c]}</p><div class="explain">${q.e}</div></div>`;
        }).join("");
        view.innerHTML = `<h2>${T("review_title")}</h2>${list}<div class="row"><button class="btn" id="back2">${T("back")}</button></div>`;
        view.querySelector("#back2").onclick = ()=>{ stage="done"; render(); };
      };
    }
  };
  render();
}

// === EXAM (simulado) ===
function exam(){
  let stage = "intro";
  let session = null;
  let timerId = null;

  const render = ()=>{
    if(stage==="intro"){
      const isEN = getLang()==="en";
      const QSRC = getQuestionsData();
      const examLen = Math.min(90, QSRC.length);
      view.innerHTML = isEN ? `
        <h2>SY0-701 Practice Exam</h2>
        <div class="card">
          <p>Format:</p>
          <ul>
            <li>${examLen} questions (proportional to real exam domain weights).</li>
            <li>90-minute timer.</li>
            <li>No feedback during the exam — results at the end with per-domain breakdown.</li>
            <li>Navigate freely and flag for review.</li>
          </ul>
          <p style="color:var(--mut);font-size:12px"><i>Note: questions are written in real CompTIA exam style following SY0-701 objectives. They are NOT actual leaked exam content (which is under NDA).</i></p>
          <div class="row"><button class="btn" id="start">Start exam</button></div>
        </div>` : `
        <h2>Examen simulado SY0-701</h2>
        <div class="card">
          <p>Formato:</p>
          <ul>
            <li>${examLen} preguntas (proporcionales a los pesos del examen real).</li>
            <li>90 minutos cronometrados.</li>
            <li>Sin feedback durante el examen — resultados al final con desglose por dominio.</li>
            <li>Puedes navegar adelante/atrás y marcar para revisar.</li>
          </ul>
          <div class="row"><button class="btn" id="start">Comenzar examen</button></div>
        </div>`;
      view.querySelector("#start").onclick = ()=>{
        // proporciones: D1 12, D2 22, D3 18, D4 28, D5 20
        const weights = {1:0.12,2:0.22,3:0.18,4:0.28,5:0.20};
        const target = examLen;
        let picks = [];
        for(let d=1; d<=5; d++){
          const pool = QSRC.filter(q=>q.d===d);
          const n = Math.min(pool.length, Math.round(target*weights[d]));
          picks = picks.concat(shuffle(pool).slice(0,n));
        }
        // si quedó corto, rellena con aleatorias
        while(picks.length < target){
          const remaining = QSRC.filter(q=>!picks.includes(q));
          if(!remaining.length) break;
          picks.push(shuffle(remaining)[0]);
        }
        picks = shuffle(picks).slice(0,target);
        session = {qs: picks.map(q=>({...q, _opts: shuffle(q.opts.map((o,i)=>({o,i})))})), idx:0, answers: new Array(picks.length).fill(undefined), flagged: new Set(), seconds: 90*60};
        stage="play"; startTimer(); render();
      };
    } else if(stage==="play"){
      const q = session.qs[session.idx];
      const flagged = session.flagged.has(session.idx);
      const tcls = session.seconds<300 ? "bad" : session.seconds<900 ? "warn" : "";
      view.innerHTML = `
        <div class="row" style="justify-content:space-between">
          <div><span class="tag">D${q.d}</span> <span class="tag">${session.idx+1}/${session.qs.length}</span></div>
          <div class="timer ${tcls}" id="timer">${fmtTime(session.seconds)}</div>
        </div>
        <div class="qbox">
          <h3>${q.q}</h3>
          ${q._opts.map((o,k)=>`<button class="opt ${session.answers[session.idx]===k?"sel":""}" data-k="${k}">${o.o}</button>`).join("")}
        </div>
        <div class="row" style="justify-content:space-between">
          <div>
            <button class="btn ghost" id="prev" ${session.idx===0?"disabled":""}>${T("prev")}</button>
            <button class="btn ghost" id="next" ${session.idx===session.qs.length-1?"disabled":""}>${T("next")}</button>
            <button class="btn ghost" id="flag">${flagged?T("unflag"):T("flag")}</button>
          </div>
          <div>
            <button class="btn ghost" id="map">${T("map")}</button>
            <button class="btn bad" id="finish">${T("finish")}</button>
          </div>
        </div>`;
      view.querySelectorAll(".opt").forEach(b => b.onclick = ()=>{
        session.answers[session.idx] = Number(b.dataset.k); render();
      });
      view.querySelector("#prev").onclick = ()=>{ if(session.idx>0){ session.idx--; render(); } };
      view.querySelector("#next").onclick = ()=>{ if(session.idx<session.qs.length-1){ session.idx++; render(); } };
      view.querySelector("#flag").onclick = ()=>{ flagged ? session.flagged.delete(session.idx) : session.flagged.add(session.idx); render(); };
      view.querySelector("#finish").onclick = ()=>{
        const unans = session.answers.filter(x=>x===undefined).length;
        if(confirm(T("confirm_finish_pre")+unans+T("confirm_finish_post"))){ finish(); }
      };
      view.querySelector("#map").onclick = ()=>{
        const grid = session.qs.map((_,i)=>{
          const cls = session.answers[i]!==undefined ? "ok" : "warn";
          const fl = session.flagged.has(i) ? "★" : "";
          return `<button class="opt" data-i="${i}" style="display:inline-block;width:60px;text-align:center;margin:3px;padding:8px"><span class="tag ${cls}">${i+1}</span> ${fl}</button>`;
        }).join("");
        view.innerHTML = `<h2>${T("map_title")}</h2><div class="card">${grid}</div><div class="row"><button class="btn" id="closeMap">${T("close_map")}</button></div>`;
        view.querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>{ session.idx = Number(b.dataset.i); render(); });
        view.querySelector("#closeMap").onclick = render;
      };
    } else if(stage==="done"){
      const byDomain = {};
      let score = 0;
      session.qs.forEach((q,i) => {
        const ans = session.answers[i];
        const ok = ans!==undefined && q._opts[ans].i === q.c;
        if(ok) score++;
        byDomain[q.d] = byDomain[q.d] || {ok:0,total:0};
        byDomain[q.d].total++; if(ok) byDomain[q.d].ok++;
      });
      const pct = Math.round(score/session.qs.length*100);
      const passed = pct >= 75; // 750/900 ≈ 83% real, mostramos 75% como referencia indicativa
      const s = store.get();
      s.examHistory.push({t:Date.now(), pct, score, total:session.qs.length, byDomain});
      store.set({examHistory: s.examHistory});

      view.innerHTML = `
        <div class="results">
          <div class="score">${pct}%</div>
          <p>${score}/${session.qs.length} ${T("aciertos")} · ${passed?"<span class='tag ok'>"+T("passed")+"</span>":"<span class='tag bad'>"+T("failed")+"</span>"}</p>
          <p style="color:var(--mut);font-size:13px">${T("threshold")}</p>
        </div>
        ${renderDomainBars(byDomain)}
        <div class="row" style="margin-top:20px">
          <button class="btn" id="rev">${T("review")}</button>
          <button class="btn ghost" id="again">${T("another_exam")}</button>
          <button class="btn ghost" id="dash">Dashboard</button>
        </div>`;
      view.querySelector("#again").onclick = ()=>{ stage="intro"; render(); };
      view.querySelector("#dash").onclick = ()=>go("dashboard");
      view.querySelector("#rev").onclick = ()=>{
        const list = session.qs.map((q,i)=>{
          const ans = session.answers[i];
          const chosenOrig = ans!==undefined ? q._opts[ans].i : -1;
          const ok = chosenOrig === q.c;
          return `<div class="qbox"><div><span class="tag ${ok?"ok":"bad"}">${ok?T("ok"):T("fail")}</span> <span class="tag">D${q.d}</span></div><h3>${i+1}. ${q.q}</h3><p><b>${T("your_answer")}:</b> ${ans!==undefined?q._opts[ans].o:T("blank")}</p><p><b>${T("correct_ans")}:</b> ${q.opts[q.c]}</p><div class="explain">${q.e}</div></div>`;
        }).join("");
        view.innerHTML = `<h2>${T("full_review")}</h2>${list}<div class="row"><button class="btn" id="back2">${T("back")}</button></div>`;
        view.querySelector("#back2").onclick = ()=>{ stage="done"; render(); };
      };
    }
  };

  function startTimer(){
    if(timerId) clearInterval(timerId);
    timerId = setInterval(()=>{
      session.seconds--;
      const t = view.querySelector("#timer");
      if(t){ t.textContent = fmtTime(session.seconds); t.className = "timer "+(session.seconds<300?"bad":session.seconds<900?"warn":""); }
      if(session.seconds<=0){ clearInterval(timerId); finish(); }
    }, 1000);
  }
  function finish(){ if(timerId) clearInterval(timerId); stage="done"; render(); }

  render();
}

// === GLOSSARY (búsqueda combinada acrónimos + flashcards) ===
function glossary(){
  let q = "";
  const render = ()=>{
    const acrItems = ACRONYMS
      .filter(a => !q || (a[0]+" "+a[1]).toLowerCase().includes(q.toLowerCase()))
      .map(a => ({title:a[0], body:a[1], tag:"Acrónimo"}));
    const fcItems = FLASHCARDS
      .filter(f => !q || (f.q+" "+f.a).toLowerCase().includes(q.toLowerCase()))
      .map(f => ({title:f.q, body:f.a, tag:`D${f.d}`}));
    const items = [...acrItems, ...fcItems];

    view.innerHTML = `
      <h2>Glosario</h2>
      <div class="glos">
        <input type="text" id="gq" placeholder="Buscar término, sigla, concepto..." value="${q}"/>
        <p style="color:var(--mut);font-size:13px">${items.length} resultados</p>
        <div class="card" style="padding:0">
          ${items.slice(0,200).map(i => `<div class="glos-item"><span class="tag">${i.tag}</span> <b>${i.title}</b><p>${i.body}</p></div>`).join("") || "<div class='glos-item'><p>Sin resultados</p></div>"}
        </div>
      </div>`;
    const inp = view.querySelector("#gq");
    inp.oninput = e => { q = e.target.value; render(); inp.focus(); };
    inp.focus();
  };
  render();
}

// =====================================================
// === BOT DE AYUDA (búsqueda local en todo el contenido)
// =====================================================
const Bot = (()=>{
  const STOP = new Set(["el","la","los","las","un","una","unos","unas","de","del","al","y","o","u","a","en","es","son","ser","que","qué","cómo","como","cual","cuál","para","por","con","sin","se","lo","le","les","mi","tu","su","sus","este","esta","estos","estas","ese","esa","entre","tras","ante","sobre","bajo","hasta","desde","ya","muy","más","mas","menos","si","no","ni","pero","cuando","donde","dónde","quién","quien","cuanto","cuánto","gracias","hola","puedes","podrías","puede","decir","dime","explica","explícame","explícame","define","significa","sirve","funciona","tipos","tipo"]);

  function tokenize(s){
    return (s||"").toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g,"") // quitar tildes
      .replace(/[^\w\s&-]/g," ")
      .split(/\s+/)
      .filter(t => t && t.length>1 && !STOP.has(t));
  }

  function buildIndex(){
    const idx = [];
    // Glosario
    if(window.GLOSSARY){
      for(const k in GLOSSARY){
        idx.push({type:"glosario", title:k, body:GLOSSARY[k], tokens:tokenize(k+" "+GLOSSARY[k]), key:k});
      }
    }
    // Acrónimos
    if(window.ACRONYMS){
      ACRONYMS.forEach(a=>{
        idx.push({type:"acrónimo", title:a[0], body:a[1], tokens:tokenize(a[0]+" "+a[1]), key:a[0]});
      });
    }
    // Flashcards
    if(window.FLASHCARDS){
      FLASHCARDS.forEach(f=>{
        idx.push({type:"flashcard", title:f.q, body:f.a, tokens:tokenize(f.q+" "+f.a), domain:f.d});
      });
    }
    // Preguntas
    if(window.QUESTIONS){
      QUESTIONS.forEach(q=>{
        idx.push({type:"pregunta", title:q.q, body:q.opts[q.c]+" — "+q.e, tokens:tokenize(q.q+" "+q.e+" "+q.opts.join(" ")), domain:q.d});
      });
    }
    // Teoría — partir cada dominio en bloques h3/h4
    if(window.THEORY){
      THEORY.forEach(t=>{
        const tmp = document.createElement("div");
        tmp.innerHTML = t.html;
        let currentH = "";
        let buffer = "";
        const flush = ()=>{
          if(currentH && buffer){
            idx.push({type:"teoría", title:currentH, body:buffer.slice(0,500), tokens:tokenize(currentH+" "+buffer), domain:parseInt(t.id.replace("d",""))});
          }
          buffer="";
        };
        Array.from(tmp.children).forEach(el=>{
          if(/^H[2-4]$/.test(el.tagName)){
            flush();
            currentH = el.textContent.trim();
          } else {
            buffer += " "+el.textContent;
          }
        });
        flush();
      });
    }
    return idx;
  }

  let INDEX = null;
  function getIndex(){ if(!INDEX) INDEX = buildIndex(); return INDEX; }

  function score(query, entry){
    if(!query.length) return 0;
    let s = 0;
    const titleLower = entry.title.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
    const qStr = query.join(" ");
    // Match exacto en título → muy alto
    if(titleLower === qStr) s += 100;
    if(titleLower.includes(qStr)) s += 40;
    // Por token
    query.forEach(q => {
      if(titleLower.includes(q)) s += 10;
      const occ = entry.tokens.filter(t => t === q).length;
      s += occ * 4;
      const part = entry.tokens.filter(t => t.includes(q) || q.includes(t)).length;
      s += part;
    });
    // Bonus por tipo (glosario y acrónimos suelen ser respuestas más directas)
    if(entry.type === "glosario") s += 8;
    if(entry.type === "acrónimo") s += 6;
    return s;
  }

  function search(query, limit=4){
    const tokens = tokenize(query);
    if(!tokens.length) return [];
    const ranked = getIndex()
      .map(e => ({e, s: score(tokens, e)}))
      .filter(x => x.s > 0)
      .sort((a,b) => b.s - a.s)
      .slice(0, limit);
    return ranked.map(x => x.e);
  }

  function formatAnswer(query, results){
    if(!results.length){
      return {html:`No tengo nada concreto sobre eso en mi base local. Prueba con un término del temario (ej: "qué es TLS", "diferencia entre IDS e IPS", "calcular ALE").`, sources:[]};
    }
    const top = results[0];
    let html = "";
    if(top.type === "glosario" || top.type === "acrónimo"){
      html = `<b>${escapeHtml(top.title)}</b> — ${escapeHtml(top.body)}`;
    } else if(top.type === "flashcard" || top.type === "pregunta"){
      html = `<b>${escapeHtml(top.title)}</b><br>${escapeHtml(top.body)}`;
    } else { // teoría
      html = `<b>${escapeHtml(top.title)}</b><br>${escapeHtml(top.body)}${top.body.length>=500?"…":""}`;
    }
    // Fuentes adicionales
    const extras = results.slice(1, 4);
    if(extras.length){
      const list = extras.map(r => `<b>[${r.type}]</b> ${escapeHtml(r.title)}`).join("<br>");
      html += `<div class="src"><b>También relacionado:</b><br>${list}</div>`;
    }
    return {html, sources:results};
  }

  function escapeHtml(s){
    return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }

  return {search, formatAnswer, escapeHtml};
})();

// UI del bot
(function initBot(){
  const btn = document.getElementById("botBtn");
  const panel = document.getElementById("botPanel");
  const close = document.getElementById("botClose");
  const msgs = document.getElementById("botMsgs");
  const input = document.getElementById("botInput");
  const send = document.getElementById("botSend");
  const suggest = document.getElementById("botSuggest");
  if(!btn) return;

  const SUGGESTIONS = [
    "¿Qué es TLS?",
    "Diferencia entre IDS e IPS",
    "¿Cómo se calcula ALE?",
    "¿Qué es Zero Trust?",
    "Tipos de XSS",
    "¿Qué hace HIPS?",
    "Diferencia entre RTO y RPO",
    "¿Qué es MITRE ATT&CK?",
    "Pasos respuesta a incidentes NIST",
    "¿Qué es PFS?"
  ];

  function renderSuggestions(){
    suggest.innerHTML = SUGGESTIONS.slice(0,5).map(s => `<button>${s}</button>`).join("");
    suggest.querySelectorAll("button").forEach(b => b.onclick = ()=>{ input.value = b.textContent; ask(); });
  }

  function addMsg(html, who){
    const d = document.createElement("div");
    d.className = "bot-msg "+who;
    d.innerHTML = html;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  function showTyping(){
    const d = document.createElement("div");
    d.className = "bot-typing";
    d.id = "botTyping";
    d.innerHTML = "<span></span><span></span><span></span>";
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }
  function hideTyping(){
    const t = document.getElementById("botTyping");
    if(t) t.remove();
  }

  function ask(){
    const q = input.value.trim();
    if(!q) return;
    addMsg(Bot.escapeHtml(q), "user");
    input.value = "";
    suggest.style.display = "none";
    showTyping();
    setTimeout(()=>{
      hideTyping();
      const results = Bot.search(q);
      const ans = Bot.formatAnswer(q, results);
      addMsg(ans.html, "bot");
    }, 350 + Math.random()*250);
  }

  function open(){
    panel.classList.add("open");
    btn.style.display = "none";
    if(!msgs.children.length){
      addMsg("¡Hola! Soy tu asistente de estudio para Security+ SY0-701. Pregúntame por cualquier término, concepto o diferencia. Busco en el glosario, teoría, flashcards y banco de preguntas.", "bot");
      addMsg("Sugerencias rápidas:", "system");
      renderSuggestions();
      suggest.style.display = "flex";
    }
    input.focus();
  }
  function closeBot(){
    panel.classList.remove("open");
    btn.style.display = "grid";
  }

  btn.onclick = open;
  close.onclick = closeBot;
  send.onclick = ask;
  input.addEventListener("keydown", e => { if(e.key === "Enter") ask(); });
})();

// === Lang toggle wiring ===
(function initLangToggle(){
  const btn = document.getElementById("langToggle");
  if(!btn) return;
  btn.onclick = ()=>{
    setLang(getLang()==="es" ? "en" : "es");
    const active = document.querySelector("#nav button.active");
    const r = active?.dataset?.route || "dashboard";
    if(r) go(r);
  };
})();

// === Change cert wiring ===
(function initChangeCert(){
  const btn = document.getElementById("changeCertBtn");
  if(!btn) return;
  btn.onclick = ()=>{
    document.getElementById("certBadge")?.remove();
    store.set({currentCert:null});
    go("certselect");
  };
})();

// === Boot ===
applyLangLabels();
updateCertBadge();
if(getCurrentCert()) go("dashboard");
else go("certselect");
