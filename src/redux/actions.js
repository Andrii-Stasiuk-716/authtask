import {SET_USER_IN, SET_USER_OUT,SET_USER,SET_NAME, SET_LAST_NAME} from '../redux/types';


export function setUserIn() {
  return{
      type: SET_USER_IN,
      payload: true
  }
}

export function setUserOut() {
    return{
        type: SET_USER_OUT,
        payload: false
    }
}

export function setUser (user) {
    return{
        type: SET_USER,
        payload: user
    }
}

export function setName (name)  {
    return{
        type: SET_NAME,
        payload: name
    }
}
export function setLastName (lastName)  {
    return{
        type: SET_LAST_NAME,
        payload: lastName
    }
}