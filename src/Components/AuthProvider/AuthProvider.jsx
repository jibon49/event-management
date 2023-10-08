import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase_config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

export const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = async (email, password, displayName, photoURL) => {
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
        return signOut(auth)

    }


    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
        })
        return () => {
            unsSubscribe();
        }
    }, [])

    const AuthInfo = {
        user,
        createUser,
        logOut,
        logIn
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
