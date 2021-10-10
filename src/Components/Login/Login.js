import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';


const Login = () => {
    const {loginWithGoogle,loginWithGit}= useAuth()
    return (
        <div style={{textAlign:'center'}}>
            <h2>this is login</h2>
            <button onClick={loginWithGoogle}>google signin</button>
            <button onClick={loginWithGit}>github sign in</button>
            <Link  to='/register'>New user</Link>
        </div>
    );
};

export default Login;