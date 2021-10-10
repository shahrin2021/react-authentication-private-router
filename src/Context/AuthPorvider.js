import React, { createContext } from 'react';
import useFirebase from '../Components/Hooks/Usefirebase';


export const AuthContext= createContext();
const AuthPorvider = ({children}) => {
    // const {children}= props
    const allContext= useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            
            {children}
        </AuthContext.Provider>

    );
};

export default AuthPorvider;