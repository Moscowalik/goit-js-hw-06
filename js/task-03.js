const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');

const createGallery = (array) => {
    const galleryItem = ({ url, alt }) => `<li><img src=${url} alt='${alt}' width='320'></li>`;
    const galleryConstruct = images.map(galleryItem).join(" ");
  galleryRef.insertAdjacentHTML('beforeend', galleryConstruct);
}

galleryRef.style.cssText = "list-style: none; display: flex; justify-content: center"

createGallery(images)