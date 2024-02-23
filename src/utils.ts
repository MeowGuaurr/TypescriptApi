import { newDiaryEntry, visibility } from "./types";
import { weather } from "./types";

// validate if comment is a string
const parseComment = (commentFromRequest: any): string => { 
    if (!isString(commentFromRequest)){
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

const isString = (string: string ): boolean => {
    return typeof string === 'string'
}

// validate if date is a date
const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error('Incorrect or missing date');
    }

    return dateFromRequest
}

const isDate = (date: string ): boolean => {
    return Boolean(Date.parse(date))
}

// validate wheater
const isWeather = (string: any): boolean => {
    return Object.values(weather).includes(string)
}

const parseWeather = (weatherFromRequest: any): weather => {
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest
}

// validate input for visibility
const isVisibility = (string: any): boolean => {
    return Object.values(visibility).includes(string)
}

const parseVisibility = (visibilityFromRequest: any): visibility => {
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error('Incorrect or missing visibility');
    }

    return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
    const newEntry: newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }
    return newEntry
}

export default toNewDiaryEntry