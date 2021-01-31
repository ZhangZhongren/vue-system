
export default {
  bind(el, binding) {
    el.onclick = () => {
      const docElm = document.documentElement
      // W3C
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
      } else if (docElm.mozRequestFullScreen) { // FireFox
        docElm.mozRequestFullScreen()
      } else if (docElm.webkitRequestFullScreen) { // Chrome等
        docElm.webkitRequestFullScreen()
      } else if (docElm.msRequestFullscreen) { // IE11
        docElm.msRequestFullscreen()
      }
    }
  },
  unbind(el, binding) {

  },
}
