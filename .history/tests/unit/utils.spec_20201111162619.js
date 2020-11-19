import { hasClass, compose } from '@/utils/index.js'
describe('utils.js', () => {
  it('hasClass() test', () => {
    // 有属性
    expect(hasClass({ className: 'zzr' }, 'zzr')).toBe(true)
    // 无属性
    expect(hasClass({ className: 'zzr' }, '111')).toBe(false)
  })
  test('compose(10) equals', () => {
    expect(compose()(10)).toBe(10)
  })
})