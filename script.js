// Ensure script safely maps DOM elements after document parsing
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Toggle Mobile Navigation Overlay State
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Performance/A11y refinement: Update screen reader attribute feedback dynamically
        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu workspace automatically if an anchor selection is performed
    const anchorElements = navLinks.querySelectorAll('a');
    anchorElements.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
});