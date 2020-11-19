import { hasClass } from '@/utils/index.js'
describe('utils.js', () => {
  it('hasClass() test', () => {
    // 拿到函数的返回值
    expect(hasClass({ className: 'zzr' }, 'zzr')).toBe(true)
  })
})