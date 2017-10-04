'use strict'

import test from 'ava'
import m from '.'

test('missing token', async t => {
  const error = await t.throws(m())

  t.is(error.message, 'Token required')
})
