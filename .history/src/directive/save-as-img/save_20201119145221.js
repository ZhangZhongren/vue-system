import html2canvas from 'html2canvas'

export default {
  bind: (el, binding) => {
    function loadImg(fileName, base64) { // 下载图片
      const dlLink = document.createElement('a')
      const MIME_TYPE = 'image/jpeg'
      dlLink.download = fileName
      dlLink.href = base64
      dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':')
      document.body.appendChild(dlLink)
      dlLink.click()
      document.body.removeChild(dlLink)
    }
    el.onclick = () => {
      html2canvas(document.getElementById(binding.value)).then((canvas) => {
        loadImg(`${binding.value}.png`, canvas.toDataURL('image/jpeg'))
      })
    }
  }
}
