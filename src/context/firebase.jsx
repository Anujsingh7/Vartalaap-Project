import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, getDocs, collection } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDWbAtgYF_7gPx8i2mFaiUHq1zMr4Y74fA",
    authDomain: "vartalaap01.firebaseapp.com",
    projectId: "vartalaap01",
    storageBucket: "vartalaap01.appspot.com",
    messagingSenderId: "913067160984",
    appId: "1:913067160984:web:805b16543df495786827ed",
    measurementId: "G-3YQQKMSEB7",
    databaseURL: "https://vartalaap01-default-rtdb.firebaseio.com/"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const firestore = getFirestore(app)

const FirebaseContext = createContext(null);

// Custom hook to use Firebase context
export const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return context;
};

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const signupWithEmailAndPassword = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error("Error signing up:", error.code, error.message);
            throw error;
        }
    };

    const signInUser = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error("Error signing in:", error.code, error.message);
            throw error;
        }
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => window.location.href = "/")
            .catch(error => {
                console.error("Error signing in with Google:", error.code, error.message);
            });
    };

    const logout = () => {
        signOut(auth).catch(error => {
            console.error("Error signing out:", error.code, error.message);
        });
    };


    const listAllNotes = () => {
        return getDocs(collection(firestore, "notes"));
    };

    const getImageUrl = (paths) => {
        console.log(paths);
        return getDownloadURL(ref(storage, paths));
    };

    return (
        <FirebaseContext.Provider value={{ user, signupWithEmailAndPassword, signInUser, signInWithGoogle, logout, listAllNotes, getImageUrl }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
