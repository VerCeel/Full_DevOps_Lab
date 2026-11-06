/**
 * Test d'intégration pour GET /boom.
 * Vérifie que le gestionnaire d'erreurs global formate correctement la réponse.
 */
import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../src/app.js'

describe('GET /boom', () => {
  it('retourne 500 avec un payload d\'erreur', async () => {
    const res = await request(app).get('/boom')

    expect(res.status).toBe(500)
    expect(res.headers['content-type']).toMatch(/json/)
    expect(res.body.error).toBe(true)
    expect(typeof res.body.message).toBe('string')
    expect(res.body.message.length).toBeGreaterThan(0)
  })

  it('n\'expose pas la stack trace', async () => {
    const res = await request(app).get('/boom')

    expect(res.body.stack).toBeUndefined()
  })
})