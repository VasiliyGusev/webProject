import {allElement, clear, seter} from './queryers.js';

const tabLinks = allElement('.list')
const contentItems = allElement('.content')

const checkoutTab = (item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('is-active')) return
        clear(tabLinks)
        clear(contentItems)
        seter(tabLinks, index)
        seter(contentItems, index)
    })
}

tabLinks.forEach(checkoutTab)