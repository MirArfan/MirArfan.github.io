document.addEventListener("DOMContentLoaded", () => {
    // Render Lucide Icons
    lucide.createIcons();

    // Dark/Light Theme Toggle Logic
    const toggleBtns = [
        document.getElementById('theme-toggle-desktop'),
        document.getElementById('theme-toggle-mobile')
    ];

    function toggleDarkMode() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    toggleBtns.forEach(btn => {
        if (btn) btn.addEventListener('click', toggleDarkMode);
    });
});