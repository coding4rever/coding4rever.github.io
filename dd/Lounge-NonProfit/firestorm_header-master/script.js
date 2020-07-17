const navToggle = document.querySelector('.lounge-nav-toggle');
const links = document.querySelector('.lounge-links');
const linksContainer = document.querySelector('.lounge-links-container')

const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

navToggle.addEventListener('click', function(){
    linksContainer.classList.toggle('show-links');
    navToggle.classList.toggle('show-icon')
})