import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const createImageMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image"
        src="${preview}"
        alt="${description}"/>
</a>`;
  })
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", createImageMarkup);

const openLightbox = {
  captionsData: "alt",
  captionDelay: 250,
};

const lightbox = new SimpleLightbox(".gallery__item", openLightbox);
