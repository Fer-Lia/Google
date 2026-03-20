/**
 * Script para manejar interacciones en la página de producto Google Pixel Buds Pro.
 * Incluye control de cantidad, selección de colores y cambio de imágenes.
 */

// Constantes para selectores (facilita mantenimiento)
const SELECTORS = {
  qtyInput: '#qty',
  swatches: '.swatch',
  thumbnails: '.product__thumb',
  mainImage: '#mainProductImage'
};

/**
 * Maneja la selección de color: remueve 'selected' de todos y lo agrega al clickeado.
 * @param {Event} event - Evento de click
 */
function handleSwatchSelection(event) {
  const swatches = document.querySelectorAll(SELECTORS.swatches);
  swatches.forEach(swatch => swatch.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
}

/**
 * Maneja el cambio de imagen principal al hacer click en una miniatura.
 * @param {Event} event - Evento de click
 */
function handleThumbnailClick(event) {
  const thumbnails = document.querySelectorAll(SELECTORS.thumbnails);
  const mainImage = document.querySelector(SELECTORS.mainImage);

  if (!mainImage) return;

  // Remover 'active' de todas las miniaturas
  thumbnails.forEach(thumb => thumb.classList.remove('product__thumb--active'));

  // Agregar 'active' a la clickeada
  event.currentTarget.classList.add('product__thumb--active');

  // Cambiar imagen principal si hay dataset.image
  const newImageSrc = event.currentTarget.dataset.image;
  if (newImageSrc) {
    mainImage.src = newImageSrc;
  }
}

/**
 * Inicializa los event listeners cuando el DOM esté listo.
 */
function init() {
  // Botones de cantidad (removidos, solo input manual)

  // Swatches de color
  const swatches = document.querySelectorAll(SELECTORS.swatches);
  swatches.forEach(swatch => {
    swatch.addEventListener('click', handleSwatchSelection);
  });

  // Miniaturas de imagen
  const thumbnails = document.querySelectorAll(SELECTORS.thumbnails);
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', handleThumbnailClick);
  });
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);

