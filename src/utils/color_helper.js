export const getBackground = (htmlText) => {
  let elm = document.createElement('div')
  elm.innerHTML = htmlText
  return getBackgroundFrom(elm)
}

const getBackgroundFrom = (domElm) => {
  if (domElm.style.backgroundColor !== '') {
    return domElm.style.backgroundColor;
  }
  if (domElm.children.length > 0) {
    for (let i = 0; i < domElm.children.length; i++) {
      let result = getBackgroundFrom(domElm.children[i])
      if (result !== null) {
        return result;
      }
    }
  } else {
    return null
  }
}