import React from 'react';
import useAuth from '../Hooks/UseAuth';

const Home = () => {
    const {user} = useAuth()
    return (
        <div style={{textAlign:'center'}}>
            <h1>this  is home</h1>
            <h2>user:{user.displayName}</h2>
        </div>
    );
};

export default Home;