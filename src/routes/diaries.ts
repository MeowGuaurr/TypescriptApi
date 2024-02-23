import express from 'express'
import * as diaryServices from "../services/diary"

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntryWithoutSensitiveInfo())
})

router.post('/', (req, res) => {
  const {date, weather, visibility, comment} = req.body

  const newDiaryEntry = diaryServices.addDiaryEntry(
    {date, 
    weather, 
    visibility, 
    comment
  })

  res.json(newDiaryEntry)
})

router.get('/:id', (req, res) => {
  // transform req.params.id which is a string because is a param, to Number 
  const diary = diaryServices.findById(Number(req.params.id))
  return (diary != null)
    ? res.send(diary)
    : res.send(404)
  // res.send(diaryServices.getEntryWithoutSensitiveInfo())
})

export default router
