const bannerText = document.getElementById('banner-text');
bannerText.addEventListener('click', changeText);

function changeText() {
    bannerText.textContent = 'Have a Good Time!'
}

const showMoreBtn = document.getElementById('callToAction');
showMoreBtn.addEventListener('click', toggleBoxes);
const bottomBox = document.getElementById('bottomBox');
let w = window.innerWidth;

function toggleBoxes() {
    if (bottomBox.style.display === 'none') {
        w = window.innerWidth;
        switch (true) {
            case w >= 500:
                return bottomBox.style.display = 'flex';
                break;
            case w < 500:
                return bottomBox.style.display = 'block';
                break;
        }
    } else {
        bottomBox.style.display = 'none';
    }
}

// 選單

const showMenuBtn = document.getElementById('menu-img');
const menu = document.querySelector('.menu');
const body = document.body;
showMenuBtn.addEventListener('click', showMenu);
const menuChildren = menu.children;

menu.addEventListener('click', (event) => {
    if (event.target.className === 'close-menu') {
        hideMenu();
    }
})

function showMenu() {
    addRemoveBtn();
    menu.style.right = '0';
    body.style.overflow = 'hidden';
}

function hideMenu() {
    menu.style.right = '-50%';
    body.style.overflow = 'scroll';
    const closeBtn = menuChildren[0];
    closeBtn.remove();
}

function addRemoveBtn() {
    let remove = document.createElement('div');
    remove.className = 'close-menu';
    remove.setAttribute('id', 'close-menu');
    remove.textContent = 'X';
    menu.prepend(remove);
}