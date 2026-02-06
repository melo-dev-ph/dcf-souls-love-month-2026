document.addEventListener('DOMContentLoaded', () => {
        const sidebar = document.getElementById('sidebar');
        const toggleBtn = document.getElementById('sidebar-toggle');

        toggleBtn.addEventListener('click', () => {
            // Toggle the 'active' class which triggers the CSS slide animation
            sidebar.classList.toggle('active');
        });
    });