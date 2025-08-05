// sw.js

self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  // Optional: Wenn du willst, dass beim Klick eine Seite geöffnet wird
  event.waitUntil(
    clients.openWindow('/')
  );
});
