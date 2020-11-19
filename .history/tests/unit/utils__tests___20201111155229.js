import { compose } from '@/utils/index.js'

describe('utils.js', () => {
  // 测试内容：checkWidth
  // 测试应该包括该函数的所有可能性
  it('compose() test', () => {
    // 拿到函数的返回值
    expect(compose(() => { return 3 })).toBe(3)
  })
})