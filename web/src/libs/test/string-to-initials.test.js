import stringToInitials from '../string-to-initials'

describe('stringToInitials()', function () {
  test('should return expected initials from name-style string', function () {
    expect(stringToInitials('Firstname')).toEqual('F')
    expect(stringToInitials('Firstname Lastname')).toEqual('FL')
    expect(stringToInitials('Firstname Double-Barreled')).toEqual('FDB')
    expect(stringToInitials("Firstname O'Lastname")).toEqual('FOL')
    expect(stringToInitials('Firstname O’Lastname')).toEqual('FOL')
    expect(stringToInitials('Абрам Богдан')).toEqual('АБ')
  })

  test('should return early without expected types', function () {
    expect(stringToInitials(1)).toEqual(undefined)
    expect(stringToInitials(() => {})).toEqual(undefined)
  })
})
