import { compose } from '@/utils/index.js'
describe('utils.js', () => {
  it('compose() test', () => {
    // 拿到函数的返回值
    expect(compose(() => { return 3 })).toBe(3)
  })
})