import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery"); 
const imgMarkup = createImagesGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imgMarkup); 


function createImagesGallery(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
  <a class="gallery__link" data-lightbox="modal" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt= "${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onPaletterContainerClick);
function onPaletterContainerClick(evt) {
    evt.preventDefault();
    const isImageSwatchEl = evt.target.classList.contains("gallery__image");
    if (!isImageSwatchEl) {
        return;
    }



  const bigImg = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  bigImg.show();


  document.addEventListener("keydown", (e) => closeModalWindow(e, bigImg));

  function closeModalWindow(e, modalWindow) {
    if (e.code === "Escape") {
      modalWindow.close();
      e.preventDefault;
      document.removeEventListener("keydown", closeModalWindow);
    }
  }
}