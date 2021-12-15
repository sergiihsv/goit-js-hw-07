import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const createImageMarkup = galleryItems.map((item) => {
  return;

  <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="small-image.jpg"
        data-source="large-image.jpg"
        alt="Image description"
      />
    </a>
  </div>;
});
