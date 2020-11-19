import { hasClass, addClass } from '@/utils/index.js'
describe('utils.js', () => {
  it('hasClass() test', () => {
    // 有属性
    expect(hasClass({ className: 'zzr' }, 'zzr')).toBe(true)
    // 无属性
    expect(hasClass({ className: 'zzr' }, '111')).toBe(false)
  })

  // 添加class
  const object = { className: 'zzr' }
  expect(hasClass(object, 'zp')).toBe(object.className === 'zzr zp')
})