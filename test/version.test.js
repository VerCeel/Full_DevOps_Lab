/**
 * Integration test for GET /version.
 * Focus: HTTP behavior & payload shape.
 */
import request from 'supertest'
import app from '../src/app.js'
import { describe, it, expect } from 'vitest'

describe('GET /version', () => {
  it('returns a semver formatted version (x.y.z)', async () => {
    const res = await request(app).get('/version')
    expect(res.body.version).toMatch(/^\d+\.\d+\.\d+/)
  })

  it('responds with JSON content-type', async () => {
    const res = await request(app).get('/version')
    expect(res.headers['content-type']).toMatch(/json/)
  })
})
