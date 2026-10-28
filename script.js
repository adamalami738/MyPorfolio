const themeButton = document.getElementById('theme-toggle');

themeButton.addEventListener('click', function() {

document.body.classList.toggle('light-mode');
});

const topButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});

topButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});