import assert from 'power-assert'
import zonedTimeToUtc from '.'

describe('zonedTimeToUtc', function() {
  it('returns the UTC time of the date in the time zone for a date input and IANA tz', function() {
    var result = zonedTimeToUtc(
      new Date(2014, 5, 25, 10, 0, 0, 123),
      'America/Los_Angeles'
    )
    assert.deepEqual(result.toISOString(), '2014-06-25T17:00:00.123Z')
  })

  it('returns the UTC time of the date in the time zone for a string and IANA tz', function() {
    var result = zonedTimeToUtc(
      '2014-06-25T10:00:00.123',
      'America/Los_Angeles'
    )
    assert.deepEqual(result.toISOString(), '2014-06-25T17:00:00.123Z')
  })

  it('returns the UTC time of the date for a UTC input', function() {
    var result = zonedTimeToUtc(new Date(2014, 5, 25, 10, 0, 0, 123), 'UTC')
    assert.deepEqual(result.toISOString(), '2014-06-25T10:00:00.123Z')
  })

  it('returns the UTC time of the date in the time zone for a date input and tz offset', function() {
    var result = zonedTimeToUtc(new Date(2014, 5, 25, 10, 0, 0, 123), '+0400')
    assert.deepEqual(result.toISOString(), '2014-06-25T06:00:00.123Z')
  })

  it('returns the UTC time of the date in the time zone for a string and tz offset', function() {
    var result = zonedTimeToUtc('2014-06-25T10:00:00.123', '-02:00')
    assert.deepEqual(result.toISOString(), '2014-06-25T12:00:00.123Z')
  })

  it('returns the UTC time of the date for the Z tz', function() {
    var result = zonedTimeToUtc(new Date(2014, 5, 25, 10, 0, 0, 123), 'Z')
    assert.deepEqual(result.toISOString(), '2014-06-25T10:00:00.123Z')
  })
})
