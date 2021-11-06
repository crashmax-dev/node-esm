import test from 'ava'
import FooBar from '../src/index.js'

const foobar = new FooBar('foo', 233)

test('str', (to) => {
  to.is(foobar.str, 'foo 233')
})

test('env', (to) => {
  to.is(foobar.env, process.env['DOTENV_EXAMPLE'])
})