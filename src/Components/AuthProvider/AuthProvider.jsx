import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase_config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext(null);

export const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = async (email, password, displayName, photoURL) => {
        setLoading(true)
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);


            await updateProfile(userCredential.user, {
                displayName: displayName,
                photoURL: photoURL
            });

            setUser(auth.currentUser);

            return userCredential.user;
        } catch (error) {
            console.error(error);
        }
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }


    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false)
        })
        return () => {
            unsSubscribe();
        }
    }, [])

    const AuthInfo = {
        user,
        createUser,
        logOut,
        logIn,
        loading
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
