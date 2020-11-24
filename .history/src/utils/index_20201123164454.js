
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
export const changeTheme = async(val) => {
  const oldVal = this.chalk ? this.theme : ORIGINAL_THEME
  if (typeof val !== 'string') return
  const themeCluster = this.getThemeCluster(val.replace('#', ''))
  const originalCluster = this.getThemeCluster(oldVal.replace('#', ''))
  // console.log(themeCluster, originalCluster)

  const $message = this.$message({
    message: '  Compiling the theme',
    customClass: 'theme-message',
    type: 'success',
    duration: 0,
    iconClass: 'el-icon-loading'
  })

  const getHandler = (variable, id) => {
    return () => {
      const originalCluster = this.getThemeCluster(ORIGINAL_THEME.replace('#', ''))
      const newStyle = this.updateStyle(this[variable], originalCluster, themeCluster)

      let styleTag = document.getElementById(id)
      if (!styleTag) {
        styleTag = document.createElement('style')
        styleTag.setAttribute('id', id)
        document.head.appendChild(styleTag)
      }
      styleTag.innerText = newStyle
    }
  }

  if (!this.chalk) {
    const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
    await this.getCSSString(url, 'chalk')
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
    style.innerText = this.updateStyle(innerText, originalCluster, themeCluster)
  })
  this.$emit('change', val)
  $message.close()
}
