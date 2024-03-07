import { Router } from 'express'
import { generate } from '../controllers/barcode'
import { token, generalManager } from '../services/jwt'

const router = new Router()

router.post('/generate', generate)

export default router