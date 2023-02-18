import {createContext, useContext, useState, useEffect} from 'react'
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { auth } from './firebase';

const UserContext = createContext();



export const AuthContextProvider = ({children}) =>{
    const[user, setUser] = useState({});


    const logout = ()=>{
        return signOut(auth);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    return(
        <UserContext.Provider value={{ user, logout, signIn}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () =>{
    return useContext(UserContext);
}