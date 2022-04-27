const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
    menu.classList.add('showMenu');
    overlay.classList.add('showOverlay');
})

closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('showMenu');
    overlay.classList.remove('showOverlay');
})

document.querySelector('.features').addEventListener('click', () => {
    if(document.querySelector('.feature-contents').classList.contains('showFeatureContents')){
        document.querySelector('.feature-contents').classList.remove('showFeatureContents');
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        
    } else {
        document.querySelector('.feature-contents').classList.add('showFeatureContents');
        document.querySelector('.open').style.display = 'none';
        document.querySelector('.close').style.display = 'block';
    }
})