'use strict';

let currentImageNumber = null;

        function getRandomImage() {
            return Math.floor(Math.random() * 50) + 1;
        }

        function updateButtonText() {
            const button = document.getElementById('changeButton');
            button.textContent = `Нове зображення (${currentImageNumber})`;
        }

        function changeImage() {
            currentImageNumber = getRandomImage();
            const imgElement = document.getElementById('currentImage');
            
            imgElement.src = `img/${currentImageNumber}.jpg?t=${new Date().getTime()}`;
            imgElement.alt = `Image ${currentImageNumber}`;
            
            updateButtonText();
        }
        changeImage();
