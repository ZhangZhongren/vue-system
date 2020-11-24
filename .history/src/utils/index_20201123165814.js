import { Message } from 'element-ui'
/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

// 串行
export const compose = (...args) => x => args.reduceRight((res, cb) => cb(res), x)
export const pipe = (...args) => x => args.reduce((res, cb) => cb(res), x)
// 防抖
export const debounce = (fn, wait) => {
  let timeout = null
  return function() {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(context, arguments)
    }, wait)
  }
}

const ORIGINAL_THEME = '#409EFF'
const version = require('element-ui/package.json').version // element-ui version from node_modules

export const changeTheme = async(val, chalk) => {
  const oldVal = chalk ? this.theme : ORIGINAL_THEME
  if (typeof val !== 'string') return
  const themeCluster = getThemeCluster(val.replace('#', ''))
  const originalCluster = getThemeCluster(oldVal.replace('#', ''))
  const $message = Message({
    message: '  Compiling the theme',
    customClass: 'theme-message',
    type: 'success',
    duration: 0,
    iconClass: 'el-icon-loading'
  })

  const getHandler = (variable, id) => {
    return () => {
      const originalCluster = getThemeCluster(ORIGINAL_THEME.replace('#', ''))
      const newStyle = updateStyle(this[variable], originalCluster, themeCluster)

      let styleTag = document.getElementById(id)
      if (!styleTag) {
        styleTag = document.createElement('style')
        styleTag.setAttribute('id', id)
        document.head.appendChild(styleTag)
      }
      styleTag.innerText = newStyle
    }
  }

  if (!chalk) {
    const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
    await getCSSString(url, (res) => {
      chalk = res
    })
  }

  const chalkHandler = getHandler('chalk', 'chalk-style')

  chalkHandler()

  const styles = [].slice.call(document.querySelectorAll('style'))
    .filter(style => {
      const text = style.innerText
      return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
    })
  styles.forEach(style => {
    const { innerText } = style
    if (typeof innerText !== 'string') return
    style.innerText = updateStyle(innerText, originalCluster, themeCluster)
  })
  $message.close()
}

const getThemeCluster = (theme) => {
  const tintColor = (color, tint) => {
    let red = parseInt(color.slice(0, 2), 16)
    let green = parseInt(color.slice(2, 4), 16)
    let blue = parseInt(color.slice(4, 6), 16)

    if (tint === 0) { // when primary color is in its rgb space
      return [red, green, blue].join(',')
    } else {
      red += Math.round(tint * (255 - red))
      green += Math.round(tint * (255 - green))
      blue += Math.round(tint * (255 - blue))

      red = red.toString(16)
      green = green.toString(16)
      blue = blue.toString(16)

      return `#${red}${green}${blue}`
    }
  }

  const shadeColor = (color, shade) => {
    let red = parseInt(color.slice(0, 2), 16)
    let green = parseInt(color.slice(2, 4), 16)
    let blue = parseInt(color.slice(4, 6), 16)

    red = Math.round((1 - shade) * red)
    green = Math.round((1 - shade) * green)
    blue = Math.round((1 - shade) * blue)

    red = red.toString(16)
    green = green.toString(16)
    blue = blue.toString(16)

    return `#${red}${green}${blue}`
  }

  const clusters = [theme]
  for (let i = 0; i <= 9; i++) {
    clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
  }
  clusters.push(shadeColor(theme, 0.1))
  return clusters
}

const updateStyle = (style, oldCluster, newCluster) => {
  let newStyle = style
  oldCluster.forEach((color, index) => {
    newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
  })
  return newStyle
}

const getCSSString = (url, call) => {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        call && call(xhr.responseText.replace(/@font-face{[^}]+}/, ''))
        resolve()
      }
    }
    xhr.open('GET', url)
    xhr.send()
  })
}
