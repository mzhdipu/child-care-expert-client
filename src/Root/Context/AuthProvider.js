import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebaseConfig';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Create New User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      }

    // Login existing user
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      }
    
    // Update profile picture 
      const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // Google Login
    const googleSignIn = (provider )=>{
        return signInWithPopup(auth, provider)
    }

    // GitHub Login
    const gitHubSignIn = (provider )=>{
    return signInWithPopup(auth, provider)
}


    // User unsubscribe
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
    
        return () =>{
            return unsubscribe();
        }
    }, [])
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        loading,
        login,
        user,
        name: "dipu",
        updateUserProfile,
        gitHubSignIn,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;