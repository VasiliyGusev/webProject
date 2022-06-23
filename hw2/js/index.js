// import './main.js'
import bundlerPic from '../bundler.png'
import '../css/style.css'
import '../scss/style.scss'
import './timer.js'
import './datecalc.js'

import xor from 'lodash/xor'
console.log(xor([2, 1], [2, 3]));
console.log(bundlerPic);
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