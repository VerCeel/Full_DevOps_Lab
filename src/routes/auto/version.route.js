/**
 * GET /version → { version: "<package.json version>" }
 * Reads version from package.json (via appInfo helper) to keep it source-of-truth.
 */
import { Router } from 'express'
import { getPackageInfo } from '../../utils/appInfo.js'

const router = Router()

router.get('/version', (_req, res) => {
  res.status(200).json({ version: getPackageInfo().version })
})

export default router
