// Мобільне меню
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Закриття меню при кліку на посилання
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Плавна прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Анімація повідомлень в демо-боті
const messages = document.querySelectorAll('.message, .bot-message');
messages.forEach((message, index) => {
    message.style.animationDelay = `${index * 0.3}s`;
});

// Анімація при скролі
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section, .glass-card').forEach(element => {
    observer.observe(element);
});

// Ефект паралаксу для телефону
window.addEventListener('scroll', () => {
    const phone = document.querySelector('.phone-frame');
    if (phone) {
        const scrollPosition = window.scrollY;
        phone.style.transform = `translateY(${scrollPosition * -0.05}px)`;
    }
});

// Плавне завантаження сторінки
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});