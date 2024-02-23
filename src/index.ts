import express from 'express'

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/test', (_req, res) => {
  console.log('someone is testing ' + new Date().toLocaleDateString())
  res.send('testing approved ' + new Date().toLocaleDateString())
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
