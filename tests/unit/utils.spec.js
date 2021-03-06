import { hasClass, compose, pipe } from '@/utils/index.js'
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

  test('compose(add, multiple, minus)(10) equals ', () => {
    const add = n => n + 3
    const multiple = n => n * 2
    const minus = n => n - 1
    expect(
      compose(
        add,
        multiple,
        minus
      )(10)
    ).toBe(21)
  })

  test('pipe(add, multiple, minus)(10) equals ', () => {
    const add = n => n + 3
    const multiple = n => n * 2
    const minus = n => n - 1
    expect(
      pipe(
        add,
        multiple,
        minus
      )(10)
    ).toBe(25)
  })
})
