import shallowObjectToQuery from '../shallow-object-to-query'

describe('shallowObjectToQuery()', function () {
  test('should return expected querystring from shallow object', function () {
    expect(shallowObjectToQuery({})).toEqual('')
    expect(shallowObjectToQuery({ one: 'alpha' })).toEqual('one=alpha')
    expect(shallowObjectToQuery({ one: 'alpha', two: 'bravo' })).toEqual(
      'one=alpha&two=bravo'
    )
  })

  test('should return early without expected types', function () {
    expect(shallowObjectToQuery()).toEqual(undefined)
    expect(shallowObjectToQuery('string')).toEqual(undefined)
    expect(shallowObjectToQuery(123)).toEqual(undefined)
  })
})
