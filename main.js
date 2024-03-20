const grabItem = (id) => document.getElementById(id);

let closeBtn = grabItem('close');
let openBtn = document.querySelector('.menu');

closeBtn.addEventListener('click', ()=>{
    let navLinks = grabItem('nav-links');
    navLinks.classList.remove('show');
    navLinks.classList.add('hide');
    grabItem('overlay').style.display = 'none';
    document.body.style.overflowY = 'scroll';
});

openBtn.addEventListener('click', ()=>{
    grabItem('nav-links').classList.add('show');
    grabItem('overlay').style.display = 'block';
    document.body.style.overflowY = 'hidden';
})