const getElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) return element
    throw Error(
 'please double check your class names, there is no ${selector} class '
 )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-links')

navBtnDOM.addEventListener( 'click ' , () => {
 links.classlist.toggle( 'show-link')
})
