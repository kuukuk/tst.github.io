document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('notificationButton');

    // Registriert den Service Worker, sobald die Seite geladen ist
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('Service Worker erfolgreich registriert:', registration);
                })
                .catch(error => {
                    console.error('Fehler bei der Registrierung des Service Workers:', error);
                });
        });
    }

    button.addEventListener('click', () => {
        // Überprüft, ob der Browser Benachrichtigungen unterstützt
        if ('Notification' in window) {
            // Fordert die Berechtigung an
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    // Sendet die Benachrichtigung, wenn die Berechtigung erteilt wurde
                    new Notification('Hallo!', {
                        body: 'Dies ist eine Push-Benachrichtigung von Ihrer Webseite.',
                        icon: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', // Optional: Ein Icon für die Benachrichtigung
                        badge: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', // Optional: Ein Badge für Android
                        vibrate: [200, 100, 200] // Optional: Vibration für Android
                    });
                } else if (permission === 'denied') {
                    console.log('Benachrichtigungsberechtigung wurde verweigert.');
                }
            });
        } else {
            alert('Ihr Browser unterstützt keine Benachrichtigungen.');
        }
    });
});
