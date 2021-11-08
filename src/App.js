import './App.css';
import {useDispatch, useSelector} from "react-redux";
import PrivatePage from "./components/PrivatePage";
import {setName, setLastName, setUser,setUserIn} from './redux/actions';
import {useEffect} from "react";

function App() {

    useEffect(() => {
        if (localStorage.getItem('user')){
            let user = JSON.parse(localStorage.getItem('user'));
            dispatch(setUser(user));
            dispatch(setUserIn());

        }
    },[])
    const dispatch = useDispatch()
    const isUserAuth = useSelector(state => state.auth)
    const name = useSelector(state => state.name)
    const lastName = useSelector(state => state.lastName)
    const formHandler = (e) => {
        e.preventDefault();
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



    if(!isUserAuth){
        return (
            <div className="App">
                <form onSubmit={e => formHandler(e)} action="#">
                    <label htmlFor="name">Type your name:</label>
                    <input onChange={e => dispatch(setName(e.target.value))} value={name} id='name' type="text"/>
                    <label htmlFor="last-name">Type your last name:</label>
                    <input onChange={e => dispatch(setLastName(e.target.value))} value={lastName} id='last-name' type="text"/>
                    <button type='submit'>Log In</button>
                </form>
            </div>
        );
    }
    if (isUserAuth){
        return (
            <PrivatePage/>
        )
    }

}

export default App;
