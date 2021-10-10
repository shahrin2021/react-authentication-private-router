import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

import './Header.css'

const Header = () => {
    const {user,logOut} =useAuth()
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/shipping'>Shipping</Link>
            <Link to='/placeorder'>Placeorder</Link>
            <Link to='/login'>Login</Link>
            <Link to='register'>Register</Link>
            <small>{user.displayName}</small>
            {user?.email && <button onClick={logOut} >Sign out</button>}
        </div>
    );
};

export default Header;