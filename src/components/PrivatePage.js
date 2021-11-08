import '../App.css';
import React from 'react';
import {useSelector} from "react-redux";

const PrivatePage = () => {
    const user = useSelector(state => state.user)

    return (
        <div className='user-page-wrapper'>
         <h1>Hello {user.name}</h1>
        </div>
    );
};

export default PrivatePage;