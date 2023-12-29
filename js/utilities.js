document.addEventListener('DOMContentLoaded', function() {
    function updateYear() {
        const currentYear = new Date().getFullYear();
        const textElement = document.getElementById('footer-text');
        textElement.textContent = `©Stefaaan06 - ${currentYear}`;
    }
    updateYear();
});