import "../scss/style.scss"

// import './form.js'
import { drawGalleryItem } from './second'
import items from './first'

const galleryRootElement = document.getElementById('gallery');


items.map(item => galleryRootElement.appendChild(drawGalleryItem(item)))