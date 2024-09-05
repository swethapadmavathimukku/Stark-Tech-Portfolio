burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', ()=>{ 
    rightNav.classList.toggle('visibility');
    navList.classList.toggle('visibility');
    navbar.classList.toggle('h-nav');

})

const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;


    window.addEventListener('scroll', function() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('progress-bar').style.width = scrolled + '%';
        });
