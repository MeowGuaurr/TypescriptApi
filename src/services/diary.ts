import { diaryEntry } from '../types'
import diaryData from './diaries.json'

// handle json data as a type of Array<diaryEntry>
const diaries: diaryEntry[] = diaryData as diaryEntry[]

export const getEntry = () => diaryData

export const addEntry = () => null
