import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send('counting entries')
})

router.post('/', (_req, res) => {
    res.send("saving an entry")
})

export default router