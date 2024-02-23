import { DiaryEntry, newDiaryEntry, nonSensitiveData} from '../types'
import diaryData from './diaries.json'

// handle json data as a type of Array<diaryEntry>
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntry = (): DiaryEntry[] => diaries

export const findById = (id: number): nonSensitiveData | undefined => {
    const entry = diaries.find(d => d.id === id)
    if (entry != null){
        const {comment, ...restOfDiary } = entry
        return restOfDiary
    }

    return undefined
}

export const getEntryWithoutSensitiveInfo = (): nonSensitiveData[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return{
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiaryEntry = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
    const NewDiary
     = {
        //looks for the max number of the id and then adds 1 to continue the sequence
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }
    diaries.push(NewDiary
        )
    return NewDiary


}

// const diariesWithoutSensitiveInfo = getEntryWithoutSensitiveInfo()
