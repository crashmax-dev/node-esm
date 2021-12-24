import test from 'ava'
import FooBar from '../src/index.js'

const foobar = new FooBar('foo', 233)

test('foo bar', (to) => {
  to.is(foobar.foobar, 'foo 233')
})
