import { newDiaryEntry } from "./types";
import { weather, visibility } from "./types";

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
}

const isDate = (date: string ): boolean => {
    return Boolean(Date.parse(date))
}

// validate wheater


const addNewDiaryEntry = (object: any): newDiaryEntry => {
    const newEntry: newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
    }
    return newEntry
}

export default addNewDiaryEntry