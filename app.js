/* Mamá Planner — app web instalable. Todo se guarda solo en el teléfono. */
'use strict';

// ===== Íconos lineales =====
const P = {
  casa: '<path d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5h-5v5H5a1 1 0 0 1-1-1z"/>',
  calendario: '<rect x="4" y="5.5" width="16" height="14.5" rx="3"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
  corazon: '<path d="M12 19.5s-7.5-4.4-7.5-9.6A4.1 4.1 0 0 1 12 7.6a4.1 4.1 0 0 1 7.5 2.3c0 5.2-7.5 9.6-7.5 9.6z"/>',
  carpeta: '<path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/>',
  persona: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 19.5c1.2-3.3 3.8-5 7-5s5.8 1.7 7 5"/>',
  gota: '<path d="M12 3.8s6 6.4 6 10.4a6 6 0 0 1-12 0c0-4 6-10.4 6-10.4z"/>',
  luna: '<path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z"/><path d="M16 4h3l-3 3h3"/>',
  sol: '<circle cx="12" cy="12" r="3.5"/><path d="M12 4v1.5M12 18.5V20M4 12h1.5M18.5 12H20M6.3 6.3l1.1 1.1M16.6 16.6l1.1 1.1M6.3 17.7l1.1-1.1M16.6 7.4l1.1-1.1"/>',
  brillo: '<path d="M12 4c.6 4.3 1.7 5.4 6 6-4.3.6-5.4 1.7-6 6-.6-4.3-1.7-5.4-6-6 4.3-.6 5.4-1.7 6-6z"/><path d="M18 15.5c.2 1.4.6 1.8 2 2-1.4.2-1.8.6-2 2-.2-1.4-.6-1.8-2-2 1.4-.2 1.8-.6 2-2z"/>',
  hoja: '<path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14"/><path d="M5 19c3-4 6-7 10-9"/>',
  campana: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
  pastilla: '<rect x="3.5" y="9" width="12" height="6" rx="3" transform="rotate(-35 9.5 12)"/><path d="m7.6 9.4 3.5 5"/><circle cx="17.5" cy="16.5" r="3"/>',
  jeringa: '<path d="m15 4 5 5M17.5 6.5 9 15l-3-3 8.5-8.5M6 12l-2.5 2.5M9 15l-3 3 3 0"/><path d="m11 10 1.5 1.5M13 8l1.5 1.5"/>',
  esteto: '<path d="M6 4v5a4 4 0 0 0 8 0V4"/><path d="M10 13v2a4 4 0 0 0 8 0v-1.5"/><circle cx="18" cy="12" r="1.8"/>',
  mas: '<path d="M12 5v14M5 12h14"/>',
  izq: '<path d="m14.5 6-6 6 6 6"/>',
  der: '<path d="m9.5 6 6 6-6 6"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  play: '<path d="M8 5.5v13l10-6.5z"/>',
  pausa: '<path d="M9 6v12M15 6v12"/>',
  biberon: '<path d="M9.5 3.5h5M10 3.5v3l-2 2.5v10a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 16 19V9l-2-2.5v-3"/><path d="M8 13h8"/>',
  basura: '<path d="M5 7h14M10 7V5h4v2M7 7l1 12.5h8L17 7"/>',
  compartir: '<path d="M12 4v11M8 8l4-4 4 4"/><path d="M6 12v6.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V12"/>',
  foto: '<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><circle cx="9" cy="10.5" r="1.8"/><path d="m20.5 15.5-4.5-4.5-8 7.5"/>',
  doc: '<path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5a1.5 1.5 0 0 1 1-1.5z"/><path d="M14 3.5V8h4M9 12.5h6M9 16h6"/>',
  mitad: '<circle cx="12" cy="12" r="7.5"/><path d="M12 4.5v15" /><path d="M12 4.5a7.5 7.5 0 0 0 0 15z" fill="currentColor"/>',
  descarga: '<path d="M12 4v11M8 11l4 4 4-4M5 19.5h14"/>',
};
const ic = (n, extra = '') => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true" ${extra}>${P[n] || ''}</svg>`;

// ===== Datos =====
const CLAVE = 'mamaPlanner.v1';
const BASE = {
  perfil: { listo: false, mama: '', bebe: '', nacimiento: '', alimentacion: 'Pecho', recordar: [], paleta: 'arena', modo: 'auto', foto: '' },
  registros: [], recordatorios: [], citas: [], docs: [],
  crono: { inicio: 0, tramo: 0, acum: 0, pecho: true, lado: 'Izquierdo' },
};
let S = cargar();
function cargar() {
  try {
    const d = JSON.parse(localStorage.getItem(CLAVE));
    if (d) return { ...BASE, ...d, perfil: { ...BASE.perfil, ...d.perfil }, crono: { ...BASE.crono, ...d.crono } };
  } catch (e) { /* datos dañados: se parte de cero */ }
  return structuredClone(BASE);
}
function guardar() {
  try { localStorage.setItem(CLAVE, JSON.stringify(S)); }
  catch (e) { avisar('No hay espacio para guardar. Revisa la foto o los documentos.'); }
}
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Archivos (exámenes, fotos) en IndexedDB
const DB = (() => {
  let db;
  const abrir = () => db ? Promise.resolve(db) : new Promise((ok, mal) => {
    const r = indexedDB.open('mamaPlanner-archivos', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('archivos');
    r.onsuccess = () => { db = r.result; ok(db); };
    r.onerror = () => mal(r.error);
  });
  const tx = (modo, fn) => abrir().then(d => new Promise((ok, mal) => {
    const t = d.transaction('archivos', modo); const req = fn(t.objectStore('archivos'));
    t.oncomplete = () => ok(req && req.result); t.onerror = () => mal(t.error);
  }));
  return {
    poner: (id, blob) => tx('readwrite', s => s.put(blob, id)),
    leer: id => tx('readonly', s => s.get(id)),
    borrar: id => tx('readwrite', s => s.delete(id)),
  };
})();

// ===== Constantes =====
const PALETAS = {
  arena: { nombre: 'Arena y salvia', desc: 'Natural y tranquila', m: ['#F6F1EA', '#8FA58C', '#DDB5AB', '#D6A786'] },
  lavanda: { nombre: 'Lavanda y niebla', desc: 'Etérea y calma', m: ['#F4F2F7', '#A49BC8', '#A9C2D8', '#D8C3D9'] },
  rosa: { nombre: 'Rosa empolvado', desc: 'Cálida y suave', m: ['#F8F0EE', '#C9959A', '#E5C9B5', '#B9A8A2'] },
};
const ALIMENTACION = [
  ['Pecho', 'corazon', 'Lactancia materna'], ['Mamadera', 'biberon', 'Fórmula o leche extraída'], ['Mixta', 'mitad', 'Un poco de cada una'],
];
const CATS = {
  Tomas: 'gota', Medicamentos: 'pastilla', Vacunas: 'jeringa', 'Controles médicos': 'esteto', 'Sueño': 'luna', 'Pañales': 'brillo', Otro: 'brillo',
};
const REPETIR = { una: 'Una vez', diaria: 'Cada día', c3h: 'Cada 3 horas' };
const CATS_DOC = { 'Exámenes': 'esteto', Recetas: 'doc', Vacunas: 'jeringa', Identidad: 'persona', 'Seguro / Isapre': 'doc', Otros: 'carpeta' };
const TIPOS = { toma: ['Toma', 'c2'], sueno: ['Sueño', 'c1'], panal: ['Pañal', 'c3'] };

// ===== Utilidades de fecha =====
const fmtHora = d => new Date(d).toLocaleTimeString('es-CL', { hour: 'numeric', minute: '2-digit' });
const mismoDia = (a, b) => { a = new Date(a); b = new Date(b); return a.toDateString() === b.toDateString(); };
const esHoy = d => mismoDia(d, Date.now());
function diaCorto(d) {
  const x = new Date(d), m = new Date(); m.setDate(m.getDate() + 1);
  if (esHoy(x)) return 'Hoy';
  if (mismoDia(x, m)) return 'Mañana';
  const ay = new Date(); ay.setDate(ay.getDate() - 1);
  if (mismoDia(x, ay)) return 'Ayer';
  const t = x.toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'short' });
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function duracion(seg) {
  const min = Math.round(seg / 60);
  if (min < 60) return `${min} min`;
  return `${Math.floor(min / 60)} h${min % 60 ? ' ' + (min % 60) + ' min' : ''}`;
}
function reloj(seg) {
  const t = Math.max(0, Math.floor(seg)), h = Math.floor(t / 3600), m = Math.floor(t % 3600 / 60), s = t % 60;
  const p = n => String(n).padStart(2, '0');
  return h ? `${h}:${p(m)}:${p(s)}` : `${p(m)}:${p(s)}`;
}
function hace(d) {
  const min = Math.round((Date.now() - d) / 60000);
  if (min < 1) return 'recién';
  if (min < 60) return `hace ${min} min`;
  const h = Math.floor(min / 60);
  return `hace ${h} ${h === 1 ? 'hora' : 'horas'}`;
}
function edad(nac) {
  if (!nac) return '';
  const n = new Date(nac + 'T12:00'), h = new Date();
  let meses = (h.getFullYear() - n.getFullYear()) * 12 + h.getMonth() - n.getMonth();
  if (h.getDate() < n.getDate()) meses--;
  const pl = (v, s, p) => `${v} ${v === 1 ? s : p}`;
  if (meses >= 12) { const a = Math.floor(meses / 12), m = meses % 12; return pl(a, 'año', 'años') + (m ? ' y ' + pl(m, 'mes', 'meses') : ''); }
  if (meses >= 1) { const ref = new Date(n); ref.setMonth(n.getMonth() + meses); const s = Math.floor((h - ref) / 6048e5); return pl(meses, 'mes', 'meses') + (s ? ' y ' + pl(s, 'semana', 'semanas') : ''); }
  const dias = Math.floor((h - n) / 864e5);
  if (dias >= 7) { const s = Math.floor(dias / 7), d = dias % 7; return pl(s, 'semana', 'semanas') + (d ? ' y ' + pl(d, 'día', 'días') : ''); }
  return dias <= 0 ? 'Recién nacido' : pl(dias, 'día', 'días');
}
const saludo = () => { const h = new Date().getHours(); return h < 6 ? 'Buenas noches' : h < 12 ? 'Buenos días' : h < 20 ? 'Buenas tardes' : 'Buenas noches'; };
function proxima(r) {
  const f = new Date(r.fecha).getTime(), ahora = Date.now();
  if (r.rep === 'diaria') { const d = new Date(f); const n = new Date(); n.setHours(d.getHours(), d.getMinutes(), 0, 0); if (n < ahora - 6e4) n.setDate(n.getDate() + 1); return n.getTime(); }
  if (r.rep === 'c3h' && f < ahora) return f + Math.ceil((ahora - f) / 108e5) * 108e5;
  return f;
}
const aLocal = d => { const x = new Date(d); x.setMinutes(x.getMinutes() - x.getTimezoneOffset()); return x.toISOString().slice(0, 16); };

// ===== Tema =====
function aplicarTema() {
  const raiz = document.documentElement, p = S.perfil;
  raiz.dataset.paleta = p.paleta;
  const oscuro = p.modo === 'oscuro' || (p.modo === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  oscuro ? raiz.setAttribute('data-oscuro', '') : raiz.removeAttribute('data-oscuro');
  requestAnimationFrame(() => {
    const fondo = getComputedStyle(raiz).getPropertyValue('--fondo').trim();
    document.querySelector('meta[name="theme-color"]').setAttribute('content', fondo);
  });
}
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', aplicarTema);

// ===== Estado de la interfaz =====
const UI = { tab: 'inicio', paso: 0, atras: false, dia: Date.now(), filtroDoc: null };
const $app = document.getElementById('app');

function render() {
  aplicarTema();
  $app.innerHTML = S.perfil.listo ? vistaPrincipal() : vistaOnboarding();
  if (!S.perfil.listo) enfocarCampo();
  tic();
}

// ===== Onboarding =====
const ULTIMO = 9;
function vistaOnboarding() {
  const p = S.perfil, b = esc(p.bebe || 'tu bebé'), paso = UI.paso;
  const conBarra = paso > 0 && paso < ULTIMO;
  const cab = `<div class="onb-cab">
      <button class="btn-icono" data-a="onbAtras" aria-label="Atrás" style="visibility:${conBarra ? 'visible' : 'hidden'};border:0;background:none">${ic('izq')}</button>
      <div class="progreso" style="visibility:${conBarra ? 'visible' : 'hidden'}"><div style="width:${paso / ULTIMO * 100}%"></div></div>
      <span style="width:42px"></span></div>`;
  const preg = (a, z, cuerpo) => `<div class="pregunta"><div class="p1 serif">${a}</div><div class="p2 serif">${z}</div></div>${cuerpo}`;
  let cuerpo = '', boton = 'Continuar', extra = '', ok = true;
  switch (paso) {
    case 0:
      boton = 'Comenzar';
      cuerpo = `<div style="flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:36px;text-align:center">
        ${ilustracion()}
        <div><div class="serif" style="font-size:36px">Mamá Planner</div>
        <p class="suave" style="margin:12px 0 0">Tu libreta para los días con tu bebé.<br>Unas preguntas cortas y será completamente tuya.</p></div></div>`;
      break;
    case 1: ok = !!p.mama.trim();
      cuerpo = preg('Para empezar,', '¿cómo te llamas?', `<input class="campo serif" data-campo="mama" placeholder="Tu nombre" value="${esc(p.mama)}" autocomplete="given-name" enterkeyhint="next">`); break;
    case 2: ok = !!p.bebe.trim();
      cuerpo = preg(`Encantada, ${esc(p.mama)}.`, '¿Cómo se llama tu bebé?', `<input class="campo serif" data-campo="bebe" placeholder="Nombre del bebé" value="${esc(p.bebe)}" autocomplete="off" enterkeyhint="next">`); break;
    case 3: ok = !!p.nacimiento;
      cuerpo = preg('Cuéntanos,', `¿cuándo nació ${b}?`, `<input class="campo serif" type="date" data-campo="nacimiento" value="${esc(p.nacimiento)}" max="${new Date().toISOString().slice(0, 10)}">
        <p class="etiqueta" style="margin-top:12px">${p.nacimiento ? esc(edad(p.nacimiento)) : 'Toca para elegir la fecha'}</p>`); break;
    case 4:
      cuerpo = preg('Una foto', `de ${b}`, `<label class="foto-elegir" aria-label="Elegir foto">${fotoBebe(180)}<span class="mas">${ic('mas')}</span>
        <input type="file" accept="image/*" class="oculto" data-a-cambio="foto"></label>
        <p class="suave" style="text-align:center;margin-top:20px">Aparecerá en tu inicio. Puedes cambiarla cuando quieras.</p>`);
      extra = `<button class="btn-texto" data-a="onbSig">Ahora no</button>`; break;
    case 5:
      cuerpo = preg('¿Cómo se alimenta', `${b}?`, ALIMENTACION.map(([n, i, d]) => `
        <button class="opcion" data-a="setAlim" data-v="${n}" aria-pressed="${p.alimentacion === n}">
          <span class="circulo c1">${ic(i)}</span><span><div style="font-weight:400">${n}</div><div class="etiqueta">${d}</div></span>
          <span class="marca">${ic('check')}</span></button>`).join('')); break;
    case 6:
      cuerpo = preg('¿Qué te gustaría', 'recordar?', `<p class="suave" style="margin:-12px 0 16px">Elige todas las que quieras.</p>
        <div class="grilla">${Object.keys(CATS).filter(c => c !== 'Otro').map(c => `
          <button data-a="toggleRecordar" data-v="${c}" aria-pressed="${p.recordar.includes(c)}">${ic(CATS[c])}<span>${c}</span></button>`).join('')}</div>`); break;
    case 7:
      cuerpo = preg('Elige el estilo', 'que más te guste', selectorPaleta() + `<p class="titulo-seccion" style="margin-top:26px">Apariencia</p>` + selectorModo()); break;
    case 8:
      cuerpo = preg('Un último detalle', 'sobre los avisos', `
        <div class="tarjeta" style="display:flex;gap:14px;align-items:flex-start">
          <span class="circulo c1">${ic('campana')}</span>
          <div><div style="font-weight:400">Recordatorios en tu Calendario</div>
          <p class="etiqueta" style="margin:4px 0 0">Cada recordatorio o cita que crees se agrega al Calendario de tu iPhone, que te avisará a la hora justa.</p></div></div>
        <div class="tarjeta" style="display:flex;gap:14px;align-items:flex-start;margin-top:12px">
          <span class="circulo c2">${ic('corazon')}</span>
          <div><div style="font-weight:400">Tus datos son tuyos</div>
          <p class="etiqueta" style="margin:4px 0 0">Todo queda guardado solo en este teléfono. Desde Perfil puedes descargar un respaldo.</p></div></div>`); break;
    default:
      boton = 'Entrar';
      cuerpo = `<div style="flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:28px;text-align:center">
        ${fotoBebe(150)}<div><div class="serif" style="font-size:34px;line-height:1.15">Todo listo, ${esc(p.mama)} 🤍</div>
        <p class="suave" style="margin:12px 0 0">Preparamos tu libreta para acompañarte a ti y a ${b}.</p></div></div>`;
  }
  return `<main class="onb">${cab}<div class="onb-cuerpo ${UI.atras ? 'atras' : ''}">${cuerpo}</div>
    <div class="onb-pie"><button class="btn" data-a="onbSig" ${ok ? '' : 'disabled'}>${boton}</button>${extra}</div></main>`;
}

function ilustracion() {
  return `<svg class="ilustracion" viewBox="0 0 240 240" aria-hidden="true" fill="none" stroke-linecap="round">
    <circle cx="120" cy="120" r="96" fill="var(--acento2)" opacity=".22"/>
    <circle cx="120" cy="120" r="117" stroke="var(--acento)" stroke-opacity=".35" stroke-width=".8"/>
    <path d="M140 140a36 36 0 1 1-38-52 30 30 0 0 0 38 52z" stroke="var(--texto)" stroke-opacity=".75" stroke-width="1.6"/>
    <path d="M150 86c1.2 7 2.8 8.6 9.8 9.8-7 1.2-8.6 2.8-9.8 9.8-1.2-7-2.8-8.6-9.8-9.8 7-1.2 8.6-2.8 9.8-9.8z" stroke="var(--texto)" stroke-opacity=".75" stroke-width="1.4"/>
    <path d="M193 175c0-14 9-23 24-24 0 15-9 24-23 24M193 175c5-7 10-12 17-16" stroke="var(--acento)" stroke-width="1.4"/>
    <path d="M44 60c.6 4.3 1.7 5.4 6 6-4.3.6-5.4 1.7-6 6-.6-4.3-1.7-5.4-6-6 4.3-.6 5.4-1.7 6-6z" stroke="var(--acento3)" stroke-width="1.3"/>
  </svg>`;
}
function fotoBebe(t) {
  return `<span class="foto" style="width:${t}px;height:${t}px">${S.perfil.foto ? `<img src="${S.perfil.foto}" alt="Foto de ${esc(S.perfil.bebe)}">` : ic('hoja', `style="width:${t * .34}px;height:${t * .34}px;stroke-width:1"`)}</span>`;
}
function selectorPaleta() {
  return Object.entries(PALETAS).map(([k, v]) => `
    <button class="opcion" data-a="setPaleta" data-v="${k}" aria-pressed="${S.perfil.paleta === k}">
      <span class="muestras">${v.m.map(c => `<i style="background:${c}"></i>`).join('')}</span>
      <span style="margin-left:8px"><div style="font-weight:400">${v.nombre}</div><div class="etiqueta">${v.desc}</div></span>
      <span class="marca">${ic('check')}</span></button>`).join('');
}
function selectorModo() {
  return `<div class="segmentos">${[['auto', 'mitad', 'Automático'], ['claro', 'sol', 'Claro'], ['oscuro', 'luna', 'Oscuro']].map(([k, i, n]) => `
    <button data-a="setModo" data-v="${k}" aria-pressed="${S.perfil.modo === k}" style="flex-direction:column;gap:4px;border-radius:16px;font-size:13px">${ic(i)}${n}</button>`).join('')}</div>`;
}
function enfocarCampo() {
  const c = $app.querySelector('input.campo:not([type=date])');
  if (c) setTimeout(() => c.focus({ preventScroll: true }), 350);
}

// ===== Vista principal =====
const TABS = [['inicio', 'casa', 'Inicio'], ['agenda', 'calendario', 'Agenda'], ['bebe', 'corazon', 'Bebé'], ['carpeta', 'carpeta', 'Carpeta'], ['perfil', 'persona', 'Perfil']];
function vistaPrincipal() {
  const vistas = { inicio: vInicio, agenda: vAgenda, bebe: vBebe, carpeta: vCarpeta, perfil: vPerfil };
  return `<main class="pantalla" id="contenido">${vistas[UI.tab]()}</main>
    <nav class="pestanas" aria-label="Secciones">${TABS.map(([k, i, n]) =>
      `<button data-a="tab" data-v="${k}" ${UI.tab === k ? 'aria-current="page"' : ''}>${ic(i)}${n}</button>`).join('')}</nav>`;
}

function botonesRegistro() {
  const c = S.crono, sueno = S.registros.find(r => r.tipo === 'sueno' && !r.fin);
  const toma = c.inicio
    ? `<button class="activo" data-a="hojaToma"><span class="circulo c2">${ic('gota', 'style="fill:currentColor"')}</span>${c.tramo ? 'Toma' : 'En pausa'}<span class="det" data-crono></span></button>`
    : `<button data-a="hojaToma"><span class="circulo c2">${ic('gota')}</span>Toma</button>`;
  const suen = sueno
    ? `<button class="activo" data-a="despertar"><span class="circulo c1">${ic('sol')}</span>Despertó<span class="det" data-sueno="${sueno.inicio}"></span></button>`
    : `<button data-a="dormir"><span class="circulo c1">${ic('luna')}</span>Sueño</button>`;
  return `<div class="registrar">${toma}${suen}<button data-a="hojaPanal"><span class="circulo c3">${ic('brillo')}</span>Pañal</button></div>`;
}

function vInicio() {
  const p = S.perfil, hoy = S.registros.filter(r => esHoy(r.inicio));
  const tomas = hoy.filter(r => r.tipo === 'toma'), panales = hoy.filter(r => r.tipo === 'panal').length;
  const sueno = hoy.filter(r => r.tipo === 'sueno').reduce((a, r) => a + ((r.fin || Date.now()) - r.inicio) / 1000, 0);
  const ultima = S.registros.filter(r => r.tipo === 'toma').sort((a, b) => b.inicio - a.inicio)[0];
  const prox = itemsAgenda().filter(i => i.fecha >= Date.now() - 18e5).slice(0, 3);
  return `
    <div class="saludo"><div class="s1 serif">${saludo()},</div><div class="s2 serif">${esc(p.mama)}</div></div>
    <div class="tarjeta-bebe">${fotoBebe(76)}<div><div class="serif" style="font-size:24px">${esc(p.bebe)}</div><div class="suave">${esc(edad(p.nacimiento))}</div></div>
      <span class="hoja-deco">${ic('hoja')}</span></div>
    <section class="seccion"><h2 class="titulo-seccion">Registrar</h2>${botonesRegistro()}</section>
    <section class="seccion"><h2 class="titulo-seccion">Hoy</h2><div class="datos">
      <div class="dato"><div class="v serif">${tomas.length}</div><div class="e">tomas</div>${ultima ? `<div class="x">última ${hace(ultima.inicio)}</div>` : ''}</div>
      <div class="dato"><div class="v serif">${sueno > 0 ? duracion(sueno) : '—'}</div><div class="e">de sueño</div></div>
      <div class="dato"><div class="v serif">${panales}</div><div class="e">pañales</div></div></div></section>
    <section class="seccion"><h2 class="titulo-seccion">Próximo</h2>
      ${prox.length ? `<div class="lista">${prox.map(i => filaAgenda(i, true)).join('')}</div>`
        : `<div class="tarjeta suave">Nada pendiente por ahora. Disfruta este momento.</div>`}</section>`;
}

// ===== Agenda =====
function itemsAgenda() {
  const r = S.recordatorios.filter(x => !x.hecho || x.rep !== 'una').map(x => ({
    id: x.id, tipo: 'rec', titulo: x.titulo, fecha: proxima(x), icono: CATS[x.cat] || 'brillo', sub: x.rep === 'una' ? 'Recordatorio' : REPETIR[x.rep], cls: 'c2',
  }));
  const c = S.citas.map(x => ({ id: x.id, tipo: 'cita', titulo: x.titulo, fecha: new Date(x.fecha).getTime(), icono: 'esteto', sub: x.lugar || 'Cita médica', cls: 'c1' }));
  return [...r, ...c].sort((a, b) => a.fecha - b.fecha);
}
function filaAgenda(i, conDia = false) {
  return `<button class="fila" data-a="verItem" data-tipo="${i.tipo}" data-id="${i.id}">
    <span class="circulo ${i.cls}">${ic(i.icono)}</span>
    <span class="cuerpo"><div class="t">${esc(i.titulo)}</div><div class="s">${esc(i.sub)}</div></span>
    <span class="hora">${fmtHora(i.fecha)}${conDia ? `<div class="s" style="font-size:11px">${diaCorto(i.fecha)}</div>` : ''}</span></button>`;
}
function vAgenda() {
  const items = itemsAgenda(), grupos = {};
  items.forEach(i => { const k = new Date(i.fecha).toDateString(); (grupos[k] = grupos[k] || []).push(i); });
  return `<div class="cabecera"><h1 class="serif">Agenda</h1>
      <button class="btn-icono" data-a="hojaNuevoAgenda" aria-label="Agregar">${ic('mas')}</button></div>
    ${items.length ? Object.values(grupos).map(g => `
      <h2 class="serif" style="font-size:18px;margin:24px 4px 10px">${diaCorto(g[0].fecha)}</h2>
      <div class="lista">${g.map(i => filaAgenda(i)).join('')}</div>`).join('')
      : vacio('calendario', 'Tu agenda está libre', 'Agrega recordatorios o citas médicas con el botón +.')}`;
}

// ===== Bebé =====
function vBebe() {
  const delDia = S.registros.filter(r => mismoDia(r.inicio, UI.dia)).sort((a, b) => b.inicio - a.inicio);
  const tomas = delDia.filter(r => r.tipo === 'toma').length, panales = delDia.filter(r => r.tipo === 'panal').length;
  const sueno = delDia.filter(r => r.tipo === 'sueno').reduce((a, r) => a + ((r.fin || Date.now()) - r.inicio) / 1000, 0);
  const hoy = esHoy(UI.dia);
  const det = r => r.tipo === 'sueno' ? (r.fin ? duracion((r.fin - r.inicio) / 1000) : 'Durmiendo ahora') : esc(r.detalle);
  return `<div class="cabecera"><h1 class="serif">Diario de ${esc(S.perfil.bebe)}</h1></div>
    <div class="selector-dia">
      <button class="btn-icono" style="border:0;background:none" data-a="dia" data-v="-1" aria-label="Día anterior">${ic('izq')}</button>
      <span class="serif">${diaCorto(UI.dia)}</span>
      <button class="btn-icono" style="border:0;background:none;${hoy ? 'opacity:.25' : ''}" data-a="dia" data-v="1" ${hoy ? 'disabled' : ''} aria-label="Día siguiente">${ic('der')}</button></div>
    ${hoy ? botonesRegistro() : ''}
    <div class="tarjeta resumen" style="margin-top:18px">
      <div><div class="v serif">${tomas}</div><div class="etiqueta"><i class="punto" style="background:var(--acento2)"></i>tomas</div></div>
      <div><div class="v serif">${sueno > 0 ? duracion(sueno) : '—'}</div><div class="etiqueta"><i class="punto" style="background:var(--acento)"></i>sueño</div></div>
      <div><div class="v serif">${panales}</div><div class="etiqueta"><i class="punto" style="background:var(--acento3)"></i>pañales</div></div></div>
    <section class="seccion">${delDia.length ? `<h2 class="titulo-seccion">Línea del día</h2><div class="lista">${delDia.map(r => `
      <button class="fila" data-a="verRegistro" data-id="${r.id}">
        <span class="linea-hora">${fmtHora(r.inicio)}</span>
        <i class="punto" style="background:var(--${{ toma: 'acento2', sueno: 'acento', panal: 'acento3' }[r.tipo]})"></i>
        <span class="cuerpo"><div class="t">${TIPOS[r.tipo][0]}</div><div class="s">${det(r)}</div></span>
        <span class="suave" aria-hidden="true">${ic('der', 'style="width:18px;height:18px"')}</span></button>`).join('')}</div>
      <p class="etiqueta" style="text-align:center;margin:10px 0 0">Toca un registro para corregir la hora o la duración.</p>`
      : vacio('corazon', 'Sin registros', hoy ? 'Usa los botones de arriba para anotar el día.' : 'No hay registros este día.')}</section>`;
}

// ===== Carpeta =====
function vCarpeta() {
  const docs = S.docs.filter(d => !UI.filtroDoc || d.cat === UI.filtroDoc).sort((a, b) => b.fecha - a.fecha);
  return `<div class="cabecera"><h1 class="serif">Carpeta</h1>
      <label class="btn-icono" aria-label="Agregar documento">${ic('mas')}<input type="file" accept="image/*,application/pdf" class="oculto" data-a-cambio="doc"></label></div>
    <div class="chips">${['Todo', ...Object.keys(CATS_DOC)].map(c => {
      const v = c === 'Todo' ? '' : c; return `<button class="chip" data-a="filtroDoc" data-v="${v}" aria-pressed="${(UI.filtroDoc || '') === v}">${c}</button>`;
    }).join('')}</div>
    <div style="margin-top:14px">${docs.length ? `<div class="lista">${docs.map(d => `
      <button class="fila" data-a="verDoc" data-id="${d.id}">
        <span class="circulo c3">${ic(d.tipo.startsWith('image') ? 'foto' : 'doc')}</span>
        <span class="cuerpo"><div class="t">${esc(d.nombre)}</div><div class="s">${esc(d.cat)} · ${new Date(d.fecha).toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' })}</div></span></button>`).join('')}</div>`
      : vacio('carpeta', 'Tu carpeta está vacía', 'Guarda exámenes, recetas y el carnet de vacunas para tenerlos siempre a mano.')}</div>`;
}

// ===== Perfil =====
function vPerfil() {
  const p = S.perfil;
  return `<div class="cabecera"><h1 class="serif">Perfil</h1></div>
    <div style="text-align:center">
      <label style="display:inline-block;cursor:pointer" aria-label="Cambiar foto">${fotoBebe(110)}<input type="file" accept="image/*" class="oculto" data-a-cambio="foto"></label>
      <div class="serif" style="font-size:24px;margin-top:10px">${esc(p.bebe)}</div><div class="suave">${esc(edad(p.nacimiento))}</div></div>
    <section class="seccion"><h2 class="titulo-seccion">Bebé</h2><div class="lista formulario">
      <label>Nombre <input type="text" data-campo="bebe" value="${esc(p.bebe)}" style="text-align:right"></label>
      <label>Nacimiento <input type="date" data-campo="nacimiento" value="${esc(p.nacimiento)}"></label>
      <label>Alimentación <select data-campo="alimentacion">${ALIMENTACION.map(([n]) => `<option ${p.alimentacion === n ? 'selected' : ''}>${n}</option>`).join('')}</select></label></div></section>
    <section class="seccion"><h2 class="titulo-seccion">Tú</h2><div class="lista formulario">
      <label>Nombre <input type="text" data-campo="mama" value="${esc(p.mama)}" style="text-align:right"></label></div></section>
    <section class="seccion"><h2 class="titulo-seccion">Estilo</h2>${selectorPaleta()}<div style="margin-top:12px">${selectorModo()}</div></section>
    <section class="seccion"><h2 class="titulo-seccion">Respaldo</h2><div class="lista">
      <button class="fila" data-a="exportar"><span class="circulo c1">${ic('descarga')}</span><span class="cuerpo"><div class="t">Descargar respaldo</div><div class="s">Guarda una copia de todos tus datos</div></span></button>
      <label class="fila" style="cursor:pointer"><span class="circulo c2">${ic('compartir')}</span><span class="cuerpo"><div class="t">Restaurar respaldo</div><div class="s">Recupera tus datos desde una copia</div></span>
        <input type="file" accept="application/json,.json" class="oculto" data-a-cambio="importar"></label></div>
      <p class="etiqueta" style="margin:10px 4px 0">Tus datos se guardan solo en este teléfono. Si borras la app, se pierden: descarga un respaldo de vez en cuando.</p></section>
    <section class="seccion"><button class="btn-texto" data-a="reiniciarOnb">Volver a hacer la bienvenida</button></section>`;
}

function vacio(icono, t, txt) {
  return `<div class="vacio">${ic(icono)}<h3 class="serif">${t}</h3><p class="suave" style="margin:0">${txt}</p></div>`;
}

// ===== Hojas =====
const $hoja = document.getElementById('hoja'), $fondo = document.getElementById('hoja-fondo');
let hojaActual = null;
function abrirHoja(fn) {
  hojaActual = fn; $hoja.innerHTML = fn(); $hoja.hidden = false; $fondo.hidden = false;
  document.body.style.overflow = 'hidden'; tic();
}
function refrescarHoja() { if (hojaActual && !$hoja.hidden) { $hoja.innerHTML = hojaActual(); tic(); } }
function cerrarHoja() { $hoja.hidden = true; $fondo.hidden = true; hojaActual = null; document.body.style.overflow = ''; render(); }
$fondo.addEventListener('click', cerrarHoja);
const cab = (titulo, izq = ['Cancelar', 'cerrarHoja'], der = null) => `<div class="hoja-cab">
  <button data-a="${izq[1]}">${izq[0]}</button><h2 class="serif">${titulo}</h2>
  ${der ? `<button data-a="${der[1]}" ${der[2] ? 'disabled' : ''} style="font-weight:500">${der[0]}</button>` : '<span style="min-width:76px"></span>'}</div>`;
const stepper = (etq, val, accion) => `<div class="tarjeta stepper"><span>${etq}</span><span class="val">${val}</span>
  <span class="ctrl"><button data-a="${accion}" data-v="-1" aria-label="Menos">−</button><button data-a="${accion}" data-v="1" aria-label="Más">+</button></span></div>`;

// Cronómetro de toma
const H = { ml: 90, min: 15 };
const segCrono = () => S.crono.acum + (S.crono.tramo ? (Date.now() - S.crono.tramo) / 1000 : 0);
function hojaToma() {
  const c = S.crono, activa = !!c.inicio, seg = segCrono();
  const estado = !activa ? 'Listo para empezar' : c.tramo ? `Desde las ${fmtHora(c.inicio)}` : 'En pausa';
  const R = 110, L = 2 * Math.PI * R;
  return cab(activa ? 'Toma en curso' : 'Nueva toma', [activa ? 'Cerrar' : 'Cancelar', 'cerrarHoja'], activa ? ['Descartar', 'descartarToma'] : null) + `
  <div class="pila">
    <div class="segmentos">
      <button data-a="tomaTipo" data-v="1" aria-pressed="${c.pecho}">${ic('corazon')}Pecho</button>
      <button data-a="tomaTipo" data-v="0" aria-pressed="${!c.pecho}">${ic('biberon')}Biberón</button></div>
    ${c.pecho ? `<div><p class="titulo-seccion" style="text-align:center">Lado</p><div class="segmentos suaves">${['Izquierdo', 'Derecho', 'Ambos'].map(l =>
      `<button data-a="tomaLado" data-v="${l}" aria-pressed="${c.lado === l}">${l}</button>`).join('')}</div></div>` : ''}
    <div class="reloj" role="timer" aria-live="off">
      <svg viewBox="0 0 236 236"><circle cx="118" cy="118" r="${R}" stroke="var(--linea)" stroke-width="1.5" fill="none"/>
        <circle data-anillo cx="118" cy="118" r="${R}" stroke="var(--acento)" stroke-width="3" fill="none" stroke-linecap="round"
          stroke-dasharray="${L}" stroke-dashoffset="${L * (1 - Math.min(seg / 3600, 1))}" style="transition:stroke-dashoffset 1s linear"/>
        <circle cx="118" cy="118" r="${R - 14}" fill="var(--superficie)"/></svg>
      <div style="position:relative;text-align:center"><div class="tiempo" data-crono-grande>${reloj(seg)}</div><div class="estado">${estado}</div></div></div>
    ${!activa ? `<button class="btn" data-a="tomaIniciar">${ic('play', 'style="fill:currentColor;width:16px;height:16px"')}Iniciar</button>` : `
      <div class="pila" style="gap:10px">
        <button class="btn sec" data-a="${c.tramo ? 'tomaPausar' : 'tomaReanudar'}">${ic(c.tramo ? 'pausa' : 'play', 'style="width:18px;height:18px"')}${c.tramo ? 'Pausar' : 'Reanudar'}</button>
        <button class="btn" data-a="tomaGuardar">${ic('check', 'style="width:18px;height:18px"')}Terminar y guardar</button></div>`}
    ${!c.pecho ? stepper('Cantidad', `${H.ml} ml`, 'ml') : ''}
    ${!activa ? `<div><p class="etiqueta" style="text-align:center;margin:0 0 10px">¿Ya terminó? Anótala sin cronómetro</p>
      ${stepper('Duración', `${H.min} min`, 'minManual')}
      <button class="btn-texto" style="color:var(--acento)" data-a="tomaManual">Guardar toma</button></div>` : ''}
  </div>`;
}
function guardarToma(seg, manual) {
  const c = S.crono, fin = Date.now(), inicio = manual ? fin - seg * 1000 : c.inicio;
  const d = duracion(Math.max(seg, 60));
  S.registros.push({ id: uid(), tipo: 'toma', inicio, fin: inicio + seg * 1000, pecho: c.pecho, lado: c.lado, ml: H.ml,
    detalle: c.pecho ? `Pecho ${c.lado.toLowerCase()} · ${d}` : `Biberón · ${H.ml} ml · ${d}` });
  Object.assign(c, { inicio: 0, tramo: 0, acum: 0 });
  guardar(); cerrarHoja(); avisar('Toma guardada');
}

function hojaPanal() {
  return cab('¿Qué tenía el pañal?') + `<div class="registrar">${[['Pipí', 'gota'], ['Caca', 'hoja'], ['Ambos', 'brillo']].map(([n, i]) =>
    `<button data-a="panal" data-v="${n}"><span class="circulo c3">${ic(i)}</span>${n}</button>`).join('')}</div>`;
}

// Recordatorios y citas
const F = {};
function hojaNuevoAgenda() {
  return cab('Agregar') + `<div class="lista">
    <button class="fila" data-a="hojaRecordatorio"><span class="circulo c2">${ic('campana')}</span><span class="cuerpo"><div class="t">Recordatorio</div><div class="s">Tomas, vacunas, medicamentos…</div></span>${ic('der')}</button>
    <button class="fila" data-a="hojaCita"><span class="circulo c1">${ic('esteto')}</span><span class="cuerpo"><div class="t">Cita médica</div><div class="s">Pediatra, controles, exámenes</div></span>${ic('der')}</button></div>`;
}
function hojaRecordatorio() {
  const fav = S.perfil.recordar, cats = Object.keys(CATS).sort((a, b) => fav.includes(b) - fav.includes(a));
  return cab('Nuevo recordatorio', ['Cancelar', 'cerrarHoja'], ['Guardar', 'guardarRecordatorio', !F.titulo?.trim()]) + `
    <div class="chips" style="margin-bottom:16px">${cats.map(c => `<button class="chip" data-a="fCat" data-v="${c}" aria-pressed="${F.cat === c}">${c}</button>`).join('')}</div>
    <div class="lista formulario">
      <label><input type="text" data-f="titulo" value="${esc(F.titulo)}" placeholder="¿Qué quieres recordar?"></label>
      <label>Cuándo <input type="datetime-local" data-f="fecha" value="${F.fecha}"></label>
      <label>Repetir <select data-f="rep">${Object.entries(REPETIR).map(([k, v]) => `<option value="${k}" ${F.rep === k ? 'selected' : ''}>${v}</option>`).join('')}</select></label></div>
    <p class="etiqueta" style="margin:12px 4px 0">Al guardar, se abrirá tu Calendario para agregar el aviso.</p>`;
}
function hojaCita() {
  return cab('Nueva cita', ['Cancelar', 'cerrarHoja'], ['Agendar', 'guardarCita', !F.titulo?.trim()]) + `
    <div class="lista formulario">
      <label><input type="text" data-f="titulo" value="${esc(F.titulo)}" placeholder="Motivo"></label>
      <label>Fecha y hora <input type="datetime-local" data-f="fecha" value="${F.fecha}"></label>
      <label><input type="text" data-f="lugar" value="${esc(F.lugar)}" placeholder="Lugar (opcional)"></label>
      <label>Avisarme <select data-f="alerta">${[[30, '30 min antes'], [60, '1 hora antes'], [1440, '1 día antes']].map(([v, n]) =>
        `<option value="${v}" ${+F.alerta === v ? 'selected' : ''}>${n}</option>`).join('')}</select></label></div>
    <p class="etiqueta" style="margin:12px 4px 0">Al agendar, se abrirá tu Calendario para guardar la cita con su aviso.</p>`;
}
function hojaItem(tipo, id) {
  const x = (tipo === 'rec' ? S.recordatorios : S.citas).find(i => i.id === id);
  if (!x) return cab('');
  const fecha = tipo === 'rec' ? proxima(x) : new Date(x.fecha).getTime();
  return cab(tipo === 'rec' ? 'Recordatorio' : 'Cita médica', ['Cerrar', 'cerrarHoja']) + `
    <div class="tarjeta"><div class="serif" style="font-size:24px">${esc(x.titulo)}</div>
      <div class="suave">${diaCorto(fecha)} · ${fmtHora(fecha)}${tipo === 'rec' ? ' · ' + REPETIR[x.rep] : ''}</div>
      ${x.lugar ? `<div class="suave">${esc(x.lugar)}</div>` : ''}</div>
    <div class="pila" style="gap:10px;margin-top:20px">
      <button class="btn sec" data-a="aCalendario" data-tipo="${tipo}" data-id="${id}">${ic('calendario', 'style="width:18px;height:18px"')}Agregar al Calendario</button>
      ${tipo === 'rec' && x.rep === 'una' ? `<button class="btn" data-a="marcarHecho" data-id="${id}">${ic('check', 'style="width:18px;height:18px"')}Marcar como hecho</button>` : ''}
      <button class="btn-texto" data-a="borrarItem" data-tipo="${tipo}" data-id="${id}">Eliminar</button></div>`;
}
// ===== Editar un registro de la línea del día =====
const E = {};
// Registros antiguos guardaban todo en el texto; se recuperan los datos de ahí.
function datosToma(r) {
  const d = r.detalle || '';
  const pecho = r.pecho ?? !/biber|mamadera/i.test(d);
  const lado = r.lado || (d.match(/izquierdo|derecho|ambos/i) || ['Izquierdo'])[0];
  const ml = r.ml || +(d.match(/(\d+)\s*ml/) || [0, 90])[1];
  return { pecho, lado: lado.charAt(0).toUpperCase() + lado.slice(1).toLowerCase(), ml };
}
function prepararEdicion(r) {
  const min = r.fin ? Math.max(1, Math.round((r.fin - r.inicio) / 6e4)) : 15;
  Object.assign(E, { id: r.id, tipo: r.tipo, inicio: aLocal(r.inicio), fin: r.fin ? aLocal(r.fin) : aLocal(Date.now()),
    durmiendo: r.tipo === 'sueno' && !r.fin, min, panal: r.detalle || 'Pipí', error: '' });
  if (r.tipo === 'toma') Object.assign(E, datosToma(r));
}
function hojaRegistro() {
  const r = S.registros.find(x => x.id === E.id);
  if (!r) return cab('');
  const ahora = aLocal(Date.now());
  let campos = '';
  if (E.tipo === 'toma') {
    campos = `
      <div class="segmentos">
        <button data-a="eTipo" data-v="1" aria-pressed="${E.pecho}">${ic('corazon')}Pecho</button>
        <button data-a="eTipo" data-v="0" aria-pressed="${!E.pecho}">${ic('biberon')}Biberón</button></div>
      ${E.pecho ? `<div class="segmentos suaves">${['Izquierdo', 'Derecho', 'Ambos'].map(l =>
        `<button data-a="eLado" data-v="${l}" aria-pressed="${E.lado === l}">${l}</button>`).join('')}</div>` : ''}
      <div class="lista formulario">
        <label>Hora de inicio <input type="datetime-local" data-e="inicio" value="${E.inicio}" max="${ahora}"></label></div>
      ${stepper('Duración', `${E.min} min`, 'eMin')}
      ${!E.pecho ? stepper('Cantidad', `${E.ml} ml`, 'eMl') : ''}`;
  } else if (E.tipo === 'sueno') {
    campos = `
      <div class="lista formulario">
        <label>Se durmió <input type="datetime-local" data-e="inicio" value="${E.inicio}" max="${ahora}"></label>
        ${E.durmiendo ? '' : `<label>Despertó <input type="datetime-local" data-e="fin" value="${E.fin}" max="${ahora}"></label>`}</div>
      <div class="segmentos suaves">
        <button data-a="eDurmiendo" data-v="1" aria-pressed="${E.durmiendo}">Sigue durmiendo</button>
        <button data-a="eDurmiendo" data-v="0" aria-pressed="${!E.durmiendo}">Ya despertó</button></div>
      <p class="etiqueta" style="text-align:center;margin:0" data-e-dur>${duracionEdicion()}</p>`;
  } else {
    campos = `
      <div class="segmentos suaves">${['Pipí', 'Caca', 'Ambos'].map(v =>
        `<button data-a="ePanal" data-v="${v}" aria-pressed="${E.panal === v}">${v}</button>`).join('')}</div>
      <div class="lista formulario">
        <label>Hora <input type="datetime-local" data-e="inicio" value="${E.inicio}" max="${ahora}"></label></div>`;
  }
  return cab(`Editar ${TIPOS[E.tipo][0].toLowerCase()}`, ['Cancelar', 'cerrarHoja'], ['Guardar', 'guardarEdicion']) + `
    <div class="pila" style="gap:16px">${campos}
      ${E.error ? `<p class="etiqueta" role="alert" style="color:var(--acento3);text-align:center;margin:0">${E.error}</p>` : ''}
      <button class="btn-texto" data-a="borrarRegistro" data-id="${E.id}">Eliminar registro</button></div>`;
}
function duracionEdicion() {
  if (E.durmiendo) return `Durmiendo desde las ${fmtHora(new Date(E.inicio))}`;
  const s = (new Date(E.fin) - new Date(E.inicio)) / 1000;
  return s > 0 ? `Durmió ${duracion(s)}` : 'La hora de despertar debe ser después de la de dormir';
}

// Documentos
let docPendiente = null;
function hojaGuardarDoc() {
  return cab('Guardar documento', ['Cancelar', 'cancelarDoc'], ['Guardar', 'guardarDoc', !F.nombre?.trim()]) + `
    <div class="lista formulario">
      <label><input type="text" data-f="nombre" value="${esc(F.nombre)}" placeholder="Nombre (ej: Hemograma marzo)"></label>
      <label>Categoría <select data-f="cat">${Object.keys(CATS_DOC).map(c => `<option ${F.cat === c ? 'selected' : ''}>${c}</option>`).join('')}</select></label></div>`;
}
let urlVisor = null;
function hojaVerDoc(d) {
  return cab(esc(d.nombre), ['Cerrar', 'cerrarVisor']) + `<div class="visor" id="visor"><p class="suave" style="text-align:center">Cargando…</p></div>
    <div class="pila" style="gap:10px;margin-top:18px">
      <button class="btn sec" data-a="compartirDoc" data-id="${d.id}">${ic('compartir', 'style="width:18px;height:18px"')}Compartir</button>
      <button class="btn-texto" data-a="borrarDoc" data-id="${d.id}">Eliminar</button></div>`;
}

// ===== Calendario (.ics) =====
function ics({ titulo, inicio, alertaMin = 0, rep, lugar, uidEvento }) {
  const f = d => new Date(d).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const limpiar = s => String(s || '').replace(/[\\,;]/g, m => '\\' + m).replace(/\n/g, '\\n');
  const reglas = { diaria: 'RRULE:FREQ=DAILY', c3h: 'RRULE:FREQ=HOURLY;INTERVAL=3' };
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Mama Planner//ES', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT',
    `UID:${uidEvento}@mamaplanner`, `DTSTAMP:${f(Date.now())}`, `DTSTART:${f(inicio)}`, `DTEND:${f(inicio + (rep ? 9e5 : 36e5))}`,
    `SUMMARY:${limpiar(titulo)}`, lugar ? `LOCATION:${limpiar(lugar)}` : '', reglas[rep] || '',
    'BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${limpiar(titulo)}`, `TRIGGER:-PT${alertaMin}M`, 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR'].filter(Boolean).join('\r\n');
}
function abrirEnCalendario(texto, nombre) {
  // En iPhone, abrir el archivo .ics muestra "Agregar al Calendario".
  const blob = new Blob([texto], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = nombre + '.ics';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}
function calendarioDe(tipo, x) {
  const r = tipo === 'rec';
  abrirEnCalendario(ics({
    titulo: x.titulo, inicio: new Date(x.fecha).getTime(), alertaMin: r ? 0 : +x.alerta || 60,
    rep: r && x.rep !== 'una' ? x.rep : null, lugar: x.lugar, uidEvento: x.id,
  }), x.titulo.replace(/[^\w\sáéíóúñ-]/gi, '').trim() || 'evento');
}

// ===== Imágenes =====
function reducirImagen(archivo, max, calidad = .85) {
  return new Promise((ok, mal) => {
    const img = new Image(), url = URL.createObjectURL(archivo);
    img.onload = () => {
      const k = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
      c.toBlob(b => b ? ok(b) : mal(new Error('imagen')), 'image/jpeg', calidad);
    };
    img.onerror = () => { URL.revokeObjectURL(url); mal(new Error('imagen')); };
    img.src = url;
  });
}
const blobADataURL = b => new Promise(ok => { const r = new FileReader(); r.onload = () => ok(r.result); r.readAsDataURL(b); });

// ===== Aviso flotante =====
let tAviso;
function avisar(t) {
  const el = document.getElementById('aviso'); el.textContent = t; el.classList.add('visible');
  clearTimeout(tAviso); tAviso = setTimeout(() => el.classList.remove('visible'), 2200);
}

// ===== Acciones =====
const A = {
  // Onboarding
  onbSig() { if (UI.paso >= ULTIMO) { S.perfil.listo = true; UI.tab = 'inicio'; guardar(); render(); return; } UI.atras = false; UI.paso++; render(); },
  onbAtras() { UI.atras = true; UI.paso = Math.max(0, UI.paso - 1); render(); },
  setAlim(el) { S.perfil.alimentacion = el.dataset.v; guardar(); render(); },
  toggleRecordar(el) { const r = S.perfil.recordar, v = el.dataset.v; r.includes(v) ? r.splice(r.indexOf(v), 1) : r.push(v); guardar(); el.setAttribute('aria-pressed', r.includes(v)); },
  setPaleta(el) { S.perfil.paleta = el.dataset.v; guardar(); render(); },
  setModo(el) { S.perfil.modo = el.dataset.v; guardar(); render(); },
  reiniciarOnb() { if (confirm('¿Repetir las preguntas de bienvenida? No se borra ningún registro.')) { S.perfil.listo = false; UI.paso = 0; guardar(); render(); } },
  // Navegación
  tab(el) { UI.tab = el.dataset.v; UI.dia = Date.now(); render(); scrollTo(0, 0); },
  dia(el) { const d = new Date(UI.dia); d.setDate(d.getDate() + +el.dataset.v); UI.dia = d.getTime(); render(); },
  cerrarHoja,
  // Registros
  hojaToma() { if (!S.crono.inicio) S.crono.pecho = S.perfil.alimentacion !== 'Mamadera'; abrirHoja(hojaToma); },
  tomaTipo(el) { S.crono.pecho = el.dataset.v === '1'; guardar(); refrescarHoja(); },
  tomaLado(el) { S.crono.lado = el.dataset.v; guardar(); refrescarHoja(); },
  tomaIniciar() { const n = Date.now(); Object.assign(S.crono, { inicio: n, tramo: n, acum: 0 }); guardar(); vibrar(); refrescarHoja(); },
  tomaPausar() { S.crono.acum = segCrono(); S.crono.tramo = 0; guardar(); vibrar(); refrescarHoja(); },
  tomaReanudar() { S.crono.tramo = Date.now(); guardar(); vibrar(); refrescarHoja(); },
  tomaGuardar() { guardarToma(segCrono(), false); },
  tomaManual() { guardarToma(H.min * 60, true); },
  descartarToma() { if (confirm('¿Descartar esta toma?')) { Object.assign(S.crono, { inicio: 0, tramo: 0, acum: 0 }); guardar(); cerrarHoja(); } },
  ml(el) { H.ml = Math.min(300, Math.max(10, H.ml + 10 * el.dataset.v)); refrescarHoja(); },
  minManual(el) { H.min = Math.min(90, Math.max(1, H.min + +el.dataset.v)); refrescarHoja(); },
  dormir() { S.registros.push({ id: uid(), tipo: 'sueno', inicio: Date.now(), fin: null, detalle: '' }); guardar(); vibrar(); render(); avisar('Que descanse 🌙'); },
  despertar() { const r = S.registros.find(x => x.tipo === 'sueno' && !x.fin); if (r) { r.fin = Date.now(); guardar(); vibrar(); render(); avisar(`Durmió ${duracion((r.fin - r.inicio) / 1000)}`); } },
  hojaPanal() { abrirHoja(hojaPanal); },
  panal(el) { S.registros.push({ id: uid(), tipo: 'panal', inicio: Date.now(), detalle: el.dataset.v }); guardar(); cerrarHoja(); avisar('Pañal anotado'); },
  verRegistro(el) { const r = S.registros.find(x => x.id === el.dataset.id); if (r) { prepararEdicion(r); abrirHoja(hojaRegistro); } },
  eTipo(el) { E.pecho = el.dataset.v === '1'; refrescarHoja(); },
  eLado(el) { E.lado = el.dataset.v; refrescarHoja(); },
  eMin(el) { E.min = Math.min(180, Math.max(1, E.min + +el.dataset.v)); refrescarHoja(); },
  eMl(el) { E.ml = Math.min(300, Math.max(10, E.ml + 10 * el.dataset.v)); refrescarHoja(); },
  ePanal(el) { E.panal = el.dataset.v; refrescarHoja(); },
  eDurmiendo(el) { E.durmiendo = el.dataset.v === '1'; if (!E.durmiendo && new Date(E.fin) <= new Date(E.inicio)) E.fin = aLocal(Date.now()); refrescarHoja(); },
  guardarEdicion() {
    const r = S.registros.find(x => x.id === E.id); if (!r) return cerrarHoja();
    const inicio = new Date(E.inicio).getTime();
    if (!inicio) { E.error = 'Elige una hora válida'; return refrescarHoja(); }
    if (inicio > Date.now() + 6e4) { E.error = 'La hora no puede ser en el futuro'; return refrescarHoja(); }
    if (r.tipo === 'toma') {
      const d = duracion(E.min * 60);
      Object.assign(r, { inicio, fin: inicio + E.min * 6e4, pecho: E.pecho, lado: E.lado, ml: E.ml,
        detalle: E.pecho ? `Pecho ${E.lado.toLowerCase()} · ${d}` : `Biberón · ${E.ml} ml · ${d}` });
    } else if (r.tipo === 'sueno') {
      const fin = E.durmiendo ? null : new Date(E.fin).getTime();
      if (fin !== null && !(fin > inicio)) { E.error = 'La hora de despertar debe ser después de la de dormir'; return refrescarHoja(); }
      if (E.durmiendo && S.registros.some(x => x.tipo === 'sueno' && !x.fin && x.id !== r.id)) { E.error = 'Ya hay otro sueño en curso'; return refrescarHoja(); }
      Object.assign(r, { inicio, fin });
    } else {
      Object.assign(r, { inicio, detalle: E.panal });
    }
    UI.dia = inicio; guardar(); cerrarHoja(); avisar('Cambios guardados');
  },
  borrarRegistro(el) { if (confirm('¿Eliminar este registro?')) { S.registros = S.registros.filter(r => r.id !== el.dataset.id); guardar(); cerrarHoja(); } },
  // Agenda
  hojaNuevoAgenda() { abrirHoja(hojaNuevoAgenda); },
  hojaRecordatorio() {
    const cat = S.perfil.recordar[0] || 'Tomas';
    Object.assign(F, { titulo: cat, cat, fecha: aLocal(Date.now() + 36e5), rep: 'una', lugar: '' }); abrirHoja(hojaRecordatorio);
  },
  fCat(el) { const vieja = F.cat; F.cat = el.dataset.v; if (!F.titulo || F.titulo === vieja) F.titulo = F.cat; refrescarHoja(); },
  hojaCita() { Object.assign(F, { titulo: 'Control pediatra', fecha: aLocal(Date.now() + 864e5), lugar: '', alerta: 60 }); abrirHoja(hojaCita); },
  guardarRecordatorio() {
    const r = { id: uid(), titulo: F.titulo.trim(), cat: F.cat, fecha: new Date(F.fecha).toISOString(), rep: F.rep, hecho: false };
    S.recordatorios.push(r); guardar(); cerrarHoja(); calendarioDe('rec', r);
  },
  guardarCita() {
    const c = { id: uid(), titulo: F.titulo.trim(), fecha: new Date(F.fecha).toISOString(), lugar: (F.lugar || '').trim(), alerta: +F.alerta };
    S.citas.push(c); guardar(); cerrarHoja(); calendarioDe('cita', c);
  },
  verItem(el) { abrirHoja(() => hojaItem(el.dataset.tipo, el.dataset.id)); },
  aCalendario(el) { const lista = el.dataset.tipo === 'rec' ? S.recordatorios : S.citas; const x = lista.find(i => i.id === el.dataset.id); if (x) calendarioDe(el.dataset.tipo, x); },
  marcarHecho(el) { const r = S.recordatorios.find(x => x.id === el.dataset.id); if (r) { r.hecho = true; guardar(); cerrarHoja(); avisar('¡Listo!'); } },
  borrarItem(el) {
    if (!confirm('¿Eliminar? Si lo agregaste al Calendario, bórralo también allí.')) return;
    if (el.dataset.tipo === 'rec') S.recordatorios = S.recordatorios.filter(x => x.id !== el.dataset.id);
    else S.citas = S.citas.filter(x => x.id !== el.dataset.id);
    guardar(); cerrarHoja();
  },
  // Carpeta
  filtroDoc(el) { UI.filtroDoc = el.dataset.v || null; render(); },
  async guardarDoc() {
    const d = { id: docPendiente.id, nombre: F.nombre.trim(), cat: F.cat, fecha: Date.now(), tipo: docPendiente.tipo };
    S.docs.push(d); docPendiente = null; guardar(); cerrarHoja(); avisar('Documento guardado');
  },
  async cancelarDoc() { if (docPendiente) await DB.borrar(docPendiente.id).catch(() => {}); docPendiente = null; cerrarHoja(); },
  async verDoc(el) {
    const d = S.docs.find(x => x.id === el.dataset.id); if (!d) return;
    abrirHoja(() => hojaVerDoc(d));
    try {
      const blob = await DB.leer(d.id); const v = document.getElementById('visor'); if (!v) return;
      if (!blob) { v.innerHTML = '<p class="suave">No se encontró el archivo.</p>'; return; }
      urlVisor = URL.createObjectURL(blob);
      v.innerHTML = d.tipo.startsWith('image') ? `<img src="${urlVisor}" alt="${esc(d.nombre)}">` : `<iframe src="${urlVisor}" title="${esc(d.nombre)}"></iframe>`;
    } catch (e) { avisar('No se pudo abrir el documento'); }
  },
  cerrarVisor() { if (urlVisor) URL.revokeObjectURL(urlVisor); urlVisor = null; cerrarHoja(); },
  async compartirDoc(el) {
    const d = S.docs.find(x => x.id === el.dataset.id); const blob = await DB.leer(d.id);
    const ext = d.tipo.includes('pdf') ? 'pdf' : 'jpg', f = new File([blob], `${d.nombre}.${ext}`, { type: d.tipo });
    if (navigator.canShare && navigator.canShare({ files: [f] })) navigator.share({ files: [f], title: d.nombre }).catch(() => {});
    else { const u = URL.createObjectURL(f); const a = document.createElement('a'); a.href = u; a.download = f.name; a.click(); setTimeout(() => URL.revokeObjectURL(u), 6e4); }
  },
  async borrarDoc(el) {
    if (!confirm('¿Eliminar este documento?')) return;
    await DB.borrar(el.dataset.id).catch(() => {}); S.docs = S.docs.filter(x => x.id !== el.dataset.id); guardar(); A.cerrarVisor();
  },
  // Respaldo
  async exportar() {
    const archivos = {};
    for (const d of S.docs) { const b = await DB.leer(d.id).catch(() => null); if (b) archivos[d.id] = await blobADataURL(b); }
    const datos = JSON.stringify({ app: 'mamaPlanner', version: 1, fecha: new Date().toISOString(), estado: S, archivos });
    const f = new File([datos], `respaldo-mama-planner-${new Date().toISOString().slice(0, 10)}.json`, { type: 'application/json' });
    if (navigator.canShare && navigator.canShare({ files: [f] })) navigator.share({ files: [f], title: 'Respaldo Mamá Planner' }).catch(() => {});
    else { const u = URL.createObjectURL(f); const a = document.createElement('a'); a.href = u; a.download = f.name; a.click(); setTimeout(() => URL.revokeObjectURL(u), 6e4); }
  },
};
const vibrar = () => navigator.vibrate && navigator.vibrate(10);

// Cambios en archivos
const CAMBIOS = {
  async foto(input) {
    const f = input.files[0]; if (!f) return;
    try { S.perfil.foto = await blobADataURL(await reducirImagen(f, 480)); guardar(); render(); }
    catch (e) { avisar('No se pudo cargar la foto'); }
  },
  async doc(input) {
    const f = input.files[0]; if (!f) return;
    try {
      const esImg = f.type.startsWith('image'), blob = esImg ? await reducirImagen(f, 2000, .82) : f, id = uid();
      await DB.poner(id, blob);
      docPendiente = { id, tipo: esImg ? 'image/jpeg' : (f.type || 'application/pdf') };
      Object.assign(F, { nombre: esImg ? '' : f.name.replace(/\.[^.]+$/, ''), cat: UI.filtroDoc || 'Exámenes' });
      abrirHoja(hojaGuardarDoc);
    } catch (e) { avisar('No se pudo guardar el archivo'); }
    input.value = '';
  },
  async importar(input) {
    const f = input.files[0]; if (!f) return;
    try {
      const d = JSON.parse(await f.text());
      if (d.app !== 'mamaPlanner' || !d.estado) throw new Error('formato');
      if (!confirm('Esto reemplazará los datos actuales por los del respaldo. ¿Continuar?')) return;
      for (const [id, url] of Object.entries(d.archivos || {})) await DB.poner(id, await (await fetch(url)).blob());
      S = { ...structuredClone(BASE), ...d.estado }; guardar(); render(); avisar('Respaldo restaurado');
    } catch (e) { avisar('El archivo no es un respaldo válido'); }
    input.value = '';
  },
};

// ===== Eventos =====
document.addEventListener('click', e => {
  const el = e.target.closest('[data-a]');
  if (el && !el.disabled && A[el.dataset.a]) { e.preventDefault(); A[el.dataset.a](el); }
});
document.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.aCambio) CAMBIOS[t.dataset.aCambio](t);
  else if (t.dataset.campo) { S.perfil[t.dataset.campo] = t.value; guardar(); if (S.perfil.listo || t.type === 'date') render(); }
  else if (t.dataset.f) { F[t.dataset.f] = t.value; }
  else if (t.dataset.e) {
    E[t.dataset.e] = t.value; E.error = '';
    const d = $hoja.querySelector('[data-e-dur]'); if (d) d.textContent = duracionEdicion();
  }
});
document.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset.campo && t.type === 'text' || t.classList.contains('campo') && t.type !== 'date') {
    S.perfil[t.dataset.campo] = t.value; guardar();
    const b = $app.querySelector('.onb-pie .btn'); if (b && !S.perfil.listo) b.disabled = !t.value.trim();
  }
  if (t.dataset.f) {
    F[t.dataset.f] = t.value;
    const g = $hoja.querySelector('.hoja-cab button:last-child'); if (g && ['titulo', 'nombre'].includes(t.dataset.f)) g.disabled = !t.value.trim();
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.classList.contains('campo')) { const b = $app.querySelector('.onb-pie .btn'); if (b && !b.disabled) b.click(); }
  if (e.key === 'Escape' && !$hoja.hidden) cerrarHoja();
});

// Relojes en vivo
function tic() {
  const seg = segCrono();
  document.querySelectorAll('[data-crono]').forEach(el => el.textContent = reloj(seg));
  const g = document.querySelector('[data-crono-grande]'); if (g) g.textContent = reloj(seg);
  const an = document.querySelector('[data-anillo]');
  if (an) { const L = +an.getAttribute('stroke-dasharray'); an.setAttribute('stroke-dashoffset', L * (1 - Math.min(seg / 3600, 1))); }
  document.querySelectorAll('[data-sueno]').forEach(el => el.textContent = duracion((Date.now() - +el.dataset.sueno) / 1000));
}
setInterval(tic, 1000);
document.addEventListener('visibilitychange', () => { if (!document.hidden && !hojaActual) render(); });

// ===== Inicio =====
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
render();
