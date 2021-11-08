import {SET_NAME} from '../types';

const initState = '';


const nameReducer = (state =initState, action) => {
      switch (action.type){
          case SET_NAME:
              return state = action.payload
          default: return state
      }
}

export default nameReducer;
