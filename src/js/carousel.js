import '../styles/style.scss';
const images = ['Cuscuta', 'Mistletoe', 'Cytinus'];
const im = require('../images/Cuscuta.jpg')

export default function carousel() {
  
  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('col-md-4');
  
  const carouselTitle = document.createElement('h4');
  carouselTitle.classList.add('text-center');
  carouselTitle.innerHTML = 'Carousel';

  
  const carousel = document.createElement('div');
  carousel.classList.add('carousel','slide');
  carousel.setAttribute('data-ride','carousel');
  carousel.setAttribute('id','mau-carousel');

  const carouselInner = document.createElement('div');
  carouselInner.classList.add('carousel-inner');
  carouselInner.setAttribute('role','listbox')
  carousel.appendChild(carouselInner);

  for (let image of images) {
    const carouselItem = document.createElement('div');
    if (image == 'Cuscuta') {
      carouselItem.classList.add('active')
    }
    carouselItem.classList.add('carousel-item');

    const img = document.createElement('img');
    img.setAttribute('src',require(`../images/${image}.jpg`));
    img.setAttribute('alt',`picture of ${image}`);
    img.classList.add('d-block','w-100', 'img-fluid');
    carouselItem.appendChild(img);

    carouselInner.appendChild(carouselItem);
  }

  carouselContainer.appendChild(carouselTitle);
  carouselContainer.appendChild(carousel);


  return carouselContainer;
};