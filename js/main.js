document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const mainMenu = document.querySelector('.main-menu');
    const faqItems = document.querySelectorAll('.faq-item');

    let mobileMenu = document.querySelector('.mobile-menu');

    if (!mobileMenu && hamburger) {
        mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        const menuClone = mainMenu.cloneNode(true);
        mobileMenu.appendChild(menuClone);
        navbar.querySelector('.container').appendChild(mobileMenu);
    }

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
