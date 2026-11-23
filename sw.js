// Guarda la app en el teléfono para que funcione sin internet.
const CACHE = 'mama-planner-v2';
const ARCHIVOS = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest',
  './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Primero intenta traer la versión nueva (así llegan las actualizaciones);
// si no hay internet, usa la copia guardada.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(fetch(e.request).then(res => {
    const copia = res.clone();
    caches.open(CACHE).then(c => c.put(e.request, copia));
    return res;
  }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
