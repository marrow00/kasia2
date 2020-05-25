const menuButton = document.getElementById('menu-button');
const menuSpan = Array.from(menuButton.children);
const menu = document.getElementById('menu');
const links = Array.from(menu.children)
menuButton.addEventListener('click',function(){
    menuSpan.forEach(e => e.classList.toggle('menu-open'))
    menu.classList.toggle('active');
})
links.forEach(link => {
    link.addEventListener('click', function(){
        menu.classList.remove('active');
        menuSpan.forEach(e => e.classList.remove('menu-open'))
    })
})
   
