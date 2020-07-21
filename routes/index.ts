import express, { Router } from 'express'
import Gateway from '../api/Gateway'

const router: Router = express.Router()

router.post('/publisher/message', Gateway.postMessage)

export default router
