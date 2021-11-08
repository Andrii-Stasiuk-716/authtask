import {SET_USER_IN, SET_USER_OUT} from '../types';

const initialState = false;

const loginReducer = (state = initialState, action) => {
     switch (action.type){
         case SET_USER_IN:
             return state = true
         case SET_USER_OUT:
             return state = false
         default: return state
     }
}
export default loginReducer;