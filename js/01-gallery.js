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
galleryContainer.addEventListener("click", createImgInModal);

function createImgInModal(event) {
  event.preventDefault();
  const modalImage = event.target.classList.contains("gallery__image");
  if (!modalImage) {
    return;
  }

  const modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" >`,
    {
      onShow: (modal) => {
        window.addEventListener("keydown", onKeyboardClick);
      },
      onClose: (modal) => {
        window.removeEventListener("keydown", onKeyboardClick);
      },
    }
  );
  modal.show();

  function onKeyboardClick(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }
}
