// define types for data entries
export enum weather{
  sunny = 'sunny',
  rainy = 'rainy',
  stormy ='stormy',
  cloudy = 'cloudy',
  windy= 'windy',
}

export enum visibility{
  great = 'great',
  good = 'good',
  ok ='ok',
  poor = 'poor'
}

// define interface of data with the types previously defined
export interface DiaryEntry {
  id: number
  date: string
  weather: weather
  visibility: visibility
  comment: string
}

// use utility to pick types from interface DiaryEntry
export type nonSensitiveData = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

// use utility to omit types from interface DiaryEntry
export type newDiaryEntry = Omit<DiaryEntry, 'id'>
