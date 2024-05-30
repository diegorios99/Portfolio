document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        toggleButton.classList.toggle('dark-mode');
        const elementsToToggle = document.querySelectorAll('header, h2, .project, footer, a');
        elementsToToggle.forEach(el => el.classList.toggle('dark-mode'));
        
        // Change button text
        if (toggleButton.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Light Mode';
        } else {
            toggleButton.textContent = 'Dark Mode';
        }
    });
});
