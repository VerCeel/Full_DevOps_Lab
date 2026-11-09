/**
 * GET /info → merges two small helpers for easy unit testing.
 * Returns: { name, version, node, uptime }
 * Errors are forwarded to the global error handler.
 */
import { Router } from 'express'
import { getPackageInfo, getRuntimeInfo } from '../../utils/appInfo.js'

const router = Router()

/**
 * Returns application information.
 * @route GET /info
 * @returns {object} 200 - { name, version, node, uptime }
 */
router.get('/info', (_req, res, next) => {
  try {
    const info = { ...getPackageInfo(), ...getRuntimeInfo() }
    res.status(200).json(info)
  } catch (err) {
    next(err)
  }
})

export default router
