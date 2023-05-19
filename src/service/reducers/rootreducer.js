import { combineReducers } from "redux";
import studentReducer from './Student.reducer';
import AuthReducer from "./Auth.reducer";

const rootReducer = combineReducers ({
    studentReducer,AuthReducer
})

export default rootReducer;