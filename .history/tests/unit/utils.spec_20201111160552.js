import { getValue } from '@/utils/index.js'
describe('utils.js', () => {
  it('getValue() test', () => {
    // 拿到函数的返回值
    expect(getValue(3)).toBe(3)
  })
})