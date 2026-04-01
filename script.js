const themeButton = document.getElementById('theme-button');

if (localStorage.getItem('portfolio-theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('portfolio-theme', 'dark');
    } else {
        localStorage.setItem('portfolio-theme', 'light');
    }
});
