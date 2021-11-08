import React from 'react';
import '../App.css';
import {useDispatch, useSelector} from "react-redux";
import {setLastName, setName, setUser, setUserIn,setUserOut} from "../redux/actions";

const Header = () => {
     const dispatch = useDispatch()
    const isUserAuth = useSelector(state => state.auth)
    const name = useSelector(state => state.name)
    const lastName = useSelector(state => state.lastName)

    const ifAuthFalse = isUserAuth ? true : false;
    const ifAuthTrue = !isUserAuth ? true : false;
    const logOutHandler = () => {
        dispatch(setUserOut());
        dispatch(setUser({}))
        localStorage.clear()
    }
    const logInHandler = () => {
        if (name === '' ||  name === ''){
            alert('You should to fill all input fields')
        }
        let user = {
            name: name,
            lastName :lastName
        }
        dispatch(setUser(user))
        dispatch(setName(''));
        dispatch(setLastName(''))
        dispatch(setUserIn())
        localStorage.setItem('user', JSON.stringify(user))
    }

        return (
            <header>
                <div className="nav__login-logout">
                    <button onClick={logInHandler} disabled={ifAuthFalse}>Log In</button>
                    <button onClick={logOutHandler} disabled={ifAuthTrue}>Log Out</button>
                </div>
            </header>
        );

};

export default Header;