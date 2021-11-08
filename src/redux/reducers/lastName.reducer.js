import {SET_LAST_NAME} from '../types';
const initState = '';


const lastNameReducer = (state =initState, action) => {
  switch (action.type){
      case SET_LAST_NAME:
          return state = action.payload
      default: return state
  }
}

export default lastNameReducer;
