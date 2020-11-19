import { compose } from '@/utils/index'

describe('CommonMethods.js', () => {
  // 测试内容：checkWidth
  // 测试应该包括该函数的所有可能性
  it('checkWidth() test', () => {
    // 不传参数，默认使用window.document.body.offsetWidth，测试环境下值为0
    expect(checkWidth()).toBe(true)
    // 参数小于1025
    expect(checkWidth(1024)).toBe(true)
    // 参数大于等于1025
    expect(checkWidth(1025)).toBe(false)
  })
})