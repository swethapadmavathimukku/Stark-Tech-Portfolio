burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', ()=>{ 
    rightNav.classList.toggle('visibility');
    navList.classList.toggle('visibility');
    navbar.classList.toggle('h-nav');

})