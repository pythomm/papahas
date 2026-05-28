// This is a minimal service worker required for PWA detection
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Just pass requests through to the network normally
  event.respondWith(fetch(event.request));
});