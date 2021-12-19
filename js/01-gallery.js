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

let image = "";

function createImgInModal(event) {
  event.preventDefault();
  image = basicLightbox.create(
    `<div class="modal"><img src="${event.target.dataset.source}"></div>`
  );
  image.show();
}

galleryContainer.addEventListener("click", createImgInModal);
