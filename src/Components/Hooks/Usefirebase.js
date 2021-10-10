import { getAuth,signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut,GithubAuthProvider  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitializeAuthentication from "../../Firebase/Firebaseinitialize";


firebaseInitializeAuthentication()
const auth= getAuth();
const useFirebase= ()=>{
    const [user , setUser] = useState({});
    const [error, setError] = useState('');
    const auth= getAuth()
    const provider= new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();


    const loginWithGit =()=>{
        signInWithPopup(auth , githubProvider)
        .then(result=>{
            const user= result.user;
            setUser(result.user)
        })
    }
    const loginWithGoogle= () =>{
        signInWithPopup(auth , provider)
        .then(result=>{
            
            
            
            console.log( result.user)
            setUser( result.user)
        }).catch(error=>{
            setError(error.massage)
        })
    }
    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        }).catch(error=>{
            setError(error.massage)
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log('state change' , user)
                setUser(user)
            }
        })
    }, [])


    return {loginWithGoogle,user, error,logOut,loginWithGit}
}



export default useFirebase;

