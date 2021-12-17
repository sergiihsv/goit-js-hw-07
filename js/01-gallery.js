import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

/* const galleryContainer = document.querySelector(".gallery");

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

galleryContainer.insertAdjacentHTML("beforeend", createImageMarkup); */

/* function openModal(evt) {
  evt.preventDefault();

  const selectedImage = evt.target.dataset.source;

  const modalImage = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);
  modalImage.show();
} */

/* if (!evt.target.classList.contains(".gallery_item")) {
  return;
} */

const galleryContainer = document.querySelector(".gallery");

const galleryCardMarkup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
  </a>
</div>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryCardMarkup);

let image = "";

function createImgInModal(event) {
  event.preventDefault();
  image = basicLightbox.create(
    `<div class="modal"><img src="${event.target.dataset.source}"></div>`
  );
  image.show();
}

galleryContainer.addEventListener("click", createImgInModal);

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    image.close();
  }
}

galleryContainer.addEventListener("keydown", onEscKeyPress);
