const wineArr = [
    {img:'/img/wine3.png', title: 'PINOT NOI', descr: 'Vintage wine (1999)'},
    {img:'/img/wine4.png', title: 'PINOT NOIR2', descr: 'Vintage wine (1)'},
    {img:'/img/wine1.png', title: 'PINOT NOIR3', descr: 'Vintage wine (9)'},
    {img:'/img/wine3.png', title: 'PINOT NOIR4', descr: 'Vintage wine (19)'},

];
const arrayLeft = document.querySelector('.choice-carousel__arrow-left'),
      arrayRight = document.querySelector('.choice-carousel__arrow-right');

let currentIndex = 0;

function calculateCardsToShow(){
    if(window.innerWidth <= 768){
        return 1;
    }
    else if(window.innerWidth <= 990){
        return 2;
    }
    else return 3;
};

function renderCarousel(){
    const cards = document.querySelector('.choice-carousel__cards');
    cards.innerHTML = '';

    const visibleCardsCount = calculateCardsToShow();
    for (let i = 0; i < visibleCardsCount; i++) {
        const wineIndex = (currentIndex + i) % wineArr.length; 
        const wine = wineArr[wineIndex];
        cards.innerHTML += `
            <li class="choice-carousel__card">
                <div class="choice-carousel__card-img">
                    <img src="${wine.img}" alt="${wine.title}">
                </div>
                <div class="choice-carousel__card-title">${wine.title}</div>
                <div class="choice-carousel__card-descr">${wine.descr}</div>
                <a href="#" class="choice-carousel__card-btn btn">Tasting</a>
            </li>
        `;
      }
};

function nextSlide(){
    currentIndex = (currentIndex + 1) % wineArr.length; 

    renderCarousel();
};

function prevSlide(){
    currentIndex = (currentIndex - 1 + wineArr.length) % wineArr.length; 

    renderCarousel();
};

renderCarousel();
window.addEventListener("resize", renderCarousel);

arrayLeft.addEventListener('click', prevSlide);
arrayRight.addEventListener('click', nextSlide);