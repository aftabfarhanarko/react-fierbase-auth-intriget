import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        // createUser: createUser
        createUser,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;



/**
 * 1. create a context and export 
 * 2. create a provider -- so that you can reuse the context in different places
 * 3. ensure you use the children prop
 * 4. make sure use the auth provider in the router 
 * 5. make the create user with email and password shared via provider
 * 6. set createUser in the authInfo object to share via context
 * 
*/