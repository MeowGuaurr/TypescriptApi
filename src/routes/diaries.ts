import express from 'express'
import * as diaryServices from "../services/diary"

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntryWithoutSensitiveInfo())
})

router.post('/', (req, res) => {
  try {
    const addNewDiaryEntry = toNewDiaryEntry(req.body)

    const newDiaryEntry = diaryServices.addDiaryEntry(addNewDiaryEntry)

    res.json(newDiaryEntry)

  } catch (e) {
    res.status(400).send(e.message)
  }
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
