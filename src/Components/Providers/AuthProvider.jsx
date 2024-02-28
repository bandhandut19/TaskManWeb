import { createContext, useState } from "react";
import app from "../../../firebase.config";
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
export const auth = getAuth(app)
const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }




    const userInfo={
        user,
        createUser
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