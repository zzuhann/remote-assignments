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