import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import nameReducer from "./nameReducer";
import lastNameReducer from "./lastName.reducer";


export const rootReducer = combineReducers({
auth: loginReducer,
user: userReducer,
name:nameReducer,
lastName: lastNameReducer
})