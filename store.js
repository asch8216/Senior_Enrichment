import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'

// action type
const ADD_STUDENT = "ADD_STUDENT"
const ADD_CAMPUS = "ADD_CAMPUS"

//action creators
export const addStudent = student => {
    return {
        type: ADD_STUDENT,
        student: student
    }
}

export const addCampus = campus => {
    return {
        type: ADD_CAMPUS,
        campus: campus
    }
}


//initial state
const initialState = {
    campus: [],
    students: []
}



//reducer

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case ADD_STUDENT: 
        const student = {
            
        }
    }
}