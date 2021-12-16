import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const createImageMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
   <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  })
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", createImageMarkup);

function createModal(evt) {
  evt.preventDefault();

  const selectedImage = evt.target.dataset.source;
  const modalImage = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);

  modalImage.show();
  modalImage.show(() => console.log("lightbox now visible"));
}

createModal();
