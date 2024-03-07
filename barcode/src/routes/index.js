import express from 'express'
import barcode from './barcode'

const router = new express.Router()

router.use('/barcode', barcode)

export default router