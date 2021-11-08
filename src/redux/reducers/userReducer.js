import {SET_USER} from '../types';
const initState = {}

const userReducer = (state = initState, action) => {
    switch (action.type){
        case SET_USER:
            return state = action.payload
        default: return state
    }
}
export default userReducer;