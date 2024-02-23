// define types for data entries
export type weather = 'sunny' | 'rainy' | 'stormy' | 'cloudy' | 'windy'
export type visibility = 'great' | 'good' | 'ok' | 'poor'

// define interface of data with the types previously defined
export interface diaryEntry {
  id: number
  date: string
  weather: weather
  visibility: visibility
  comment: string
}
