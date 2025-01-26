import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(loading, user);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const handleForgetPassword = (email) => {
        console.log(email);
        if (!email) {
            toast.error("Provide a valide email");
        }
        else{
            sendPasswordResetEmail(auth , email)
            .then(() => {
                toast.success("Reset Mail Sent, Please check your email")
            })
        }
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const provider = new GoogleAuthProvider();

    console.log(auth, provider)
    const handleSignInGoogle = () => {
        return signInWithPopup(auth, provider) 
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
        handleSignInGoogle,
        handleForgetPassword,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        };
    })

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
