// Replaces the previous editor build's service worker: unregisters itself and reloads its pages.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister()
    .then(() => self.clients.matchAll({ type: 'window' }))
    .then((clients) => clients.forEach((client) => client.navigate(client.url))));
});
