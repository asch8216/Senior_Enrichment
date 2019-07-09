import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";

// action type
const GET_STUDENTS = "GET_STUDENTS";
const GET_NEW_STUDENT = "GET_NEW_STUDENT";

const GET_CAMPUSES = "GET_CAMPUSES";
const GET_NEW_CAMPUS = "GET_NEW_CAMPUS";

//initial state
const initialState = {
  campuses: [],
  students: []
  // newStudent: { firstName: "", lastName: "", email: "", GPA: 0 },
  // newCampus: { name: "", address: "", description: "" }
};

//action creators
export const getStudents = students => {
  return {
    type: GET_STUDENTS,
    students: students
  };
};
export const getNewStudent = student => {
  return {
    type: GET_NEW_STUDENT,
    student: student
  };
};

export const getCampuses = campuses => {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  };
};

export const getNewCampus = campus => {
  return {
    type: GET_NEW_CAMPUS,
    campus: campus
  };
};

//thunk creators

export function postCampus(campus) {
  return function thunk(dispatch) {
    return axios
      .post("/api/campuses", campus)
      .then(function(res) {
        return res.data;
      })
      .then(function(campus) {
        dispatch(getNewCampus(campus));
      });
  };
}

export function postStudent(student) {
  return function thunk(dispatch) {
    return axios
      .post("/api/students", student)
      .then(function(res) {
        return res.data;
      })
      .then(function(student) {
        dispatch(getNewStudent(student));
      });
  };
}

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios
      .get("/api/students")
      .then(res => res.data)
      .then(students => dispatch(getStudents(students)))
      .catch(e => {
        console.log("in fetch students error", e);
      });
  };
}

export function fetchCampus() {
  return function thunk(dispatch) {
    console.log("IN THUNK");
    return axios
      .get("/api/campuses")
      .then(res => res.data)
      .then(campuses => {
        console.log("campuses from thunk", campuses);
        dispatch(getCampuses(campuses));
      })
      .catch(e => {
        console.log("in fetch campus error", e);
      });
  };
}

//reducer

const reducer = (state = initialState, action) => {
  console.log("in reducer", action);
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.students
      };
    case GET_NEW_STUDENT:
      return {
        ...state,
        students: [...state.students, action.student]
      };

    case GET_CAMPUSES:
      return {
        ...state,
        campuses: action.campuses
      };
    case GET_NEW_CAMPUS:
      return {
        ...state,
        campuses: [...state.campuses, action.campus]
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);
export default store;
