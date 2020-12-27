import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
export default {
  bind: (el, binding) => {
    console.log(document.getElementById(binding.value))
    el.onclick = () => {
      // binding.value && document.getElementById(binding.value) && html2canvas(document.getElementById(binding.value)).then((canvas) => {
      //   loadImg(`${binding.value}.png`, canvas.toDataURL('image/jpeg'))
      // })
      binding.value && savePdf(document.getElementById(binding.value), true)
    }

    // function loadImg(fileName, base64) { // 下载图片
    //   const dlLink = document.createElement('a')
    //   const MIME_TYPE = 'image/jpeg'
    //   dlLink.download = fileName
    //   dlLink.href = base64
    //   dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':')
    //   document.body.appendChild(dlLink)
    //   dlLink.click()
    //   document.body.removeChild(dlLink)
    // }
  }
}

async function savePdf(html) {
  let contentWidth = html.clientWidth // 获得该容器的宽
  let contentHeight = html.clientHeight // 获得该容器的高
  html2canvas(html).then(canvas => {
    const doc = new jsPDF();
    console.log(doc)
    doc.addImage(canvas.toDataURL('image/jpeg', 1), 'JPEG', 0, 0,  contentWidth / 4, contentHeight / 4);
    doc.save("a4.pdf");
  })
}