const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const toggles = document.querySelectorAll('.toggle');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(toggle.getAttribute('data-target'));
        
        // Hide all other dropdowns
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            if (dropdown !== target) {
                dropdown.classList.remove('show');
            }
        });

        // Toggle the selected dropdown
        target.classList.toggle('show');
    });
});
