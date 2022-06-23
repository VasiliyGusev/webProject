const setElement = {
    queryAllElement: function (el) {
       return  Array.from(document.querySelectorAll(el))
    },
    clearActiveClass: (el, className = 'is-active') => {
        el.find(item => item.classList.remove(`${ className}`))
    },
    setActiveClass: (el, index, className = 'is-active') => {
        el[index].classList.add(`${className}`)
    }
}

export const allElement = setElement.queryAllElement
export const clear = setElement.clearActiveClass
export const seter = setElement.setActiveClass

