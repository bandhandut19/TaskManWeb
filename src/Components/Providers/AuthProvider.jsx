import { createContext, useEffect, useState } from "react";
import app from "../../../firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import PropTypes from 'prop-types';

export const auth = getAuth(app)
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const userInfo={
        user,
        createUser,
        setUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={{userInfo}}>
            {children}

        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;