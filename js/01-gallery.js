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
}

galleryContainer.addEventListener("click", createImgInModal);

document.addEventListener("click", onOpenModal);
/* document.addEventListener("click", onCloseModal); */
/* document.addEventListener("kewdown", onEscapePress); */

function onOpenModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  /* image.src = event.target.dataset.source; */
  image.show();
}

/* function onCloseModal(event) {
   
  if () {
    image.close();
  }
  image.close();
} 
 */

/* function onEscapePress(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
} */
