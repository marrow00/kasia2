const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
menuButton.addEventListener('click',function(){
    Array.from(this.children).forEach(e => e.classList.toggle('menu-open'))
    menu.classList.toggle('active');
})
   
