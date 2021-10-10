import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div style={{textAlign:'center'}}>
            <h2>please register</h2>
            <form>
                <div>
                    <input type="email" name="" id="" />
                    
                </div>
                <div>
                <input type="password" name="" id="" />
                </div>
                <input type="submit" value="register" />
            </form>
            <Link to ='/login'>Already Register</Link>
        </div>
    );
};

export default Register;