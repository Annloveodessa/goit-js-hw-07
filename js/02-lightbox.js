import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery"); 
const imgMarkup = createImagesGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);


function createImagesGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt= "${description}" />
   </a>
</li>`;
    })
    .join("");
}

const simpleLightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
