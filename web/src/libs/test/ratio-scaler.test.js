import ratioScaler from '../ratio-scaler'

describe('ratioScaler', function () {
  test('should return target if passed', function () {
    const target = { width: 10, height: 20 }
    const native = { width: 100, height: 200 }
    const output = ratioScaler(target, native)
    expect(output.width).toEqual(10)
    expect(output.height).toEqual(20)
    expect(output.ratio).toEqual(undefined)
  })

  test('should return native if no target passed if passed', function () {
    const target = {}
    const native = { width: 100, height: 200 }
    const output = ratioScaler(target, native)
    expect(output.width).toEqual(100)
    expect(output.height).toEqual(200)
    expect(output.ratio).toEqual(undefined)
  })

  test('should return scaled height if target width passed', function () {
    const target = { width: 50 }
    const native = { width: 100, height: 200 }
    const output = ratioScaler(target, native)
    expect(output.width).toEqual(50)
    expect(output.height).toEqual(100)
    expect(output.ratio).toEqual(0.5)
  })

  test('should return scaled width if target height passed', function () {
    const target = { height: 50 }
    const native = { width: 100, height: 200 }
    const output = ratioScaler(target, native)
    expect(output.width).toEqual(25)
    expect(output.height).toEqual(50)
    expect(output.ratio).toEqual(0.25)
  })

  test('should not round results', function () {
    const target = { height: 50 }
    const native = { width: 103, height: 200 }
    const output = ratioScaler(target, native)
    expect(output.width).toEqual(25.75)
    expect(output.height).toEqual(50)
    expect(output.ratio).toEqual(0.25)
  })
})
