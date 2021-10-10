    import { initializeApp } from "firebase/app";
    import firebaseConfig from "./Firebaseconfic";


    const firebaseInitializeAuthentication= ()=>{
        initializeApp(firebaseConfig);
    }

    export default  firebaseInitializeAuthentication;