'use strict';

let savedUrl = ''; 
        function saveUrl() {
            const url = prompt('Будь ласка, введіть URL (наприклад, https://example.com):');
            if (url) {
                savedUrl = url;
            }
        }

        function navigate() {
            if (savedUrl) {
                window.location.href = savedUrl;
            } else {
                alert('Спочатку введіть посилання!');
            }
        }