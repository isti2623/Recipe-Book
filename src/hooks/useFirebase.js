import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";



initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password, name, navigate, location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let from = location?.state?.from?.pathname || "/";
                navigate(from, { replace: true });
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save database
                saveUser(email, name, 'POST');
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                setAuthError('');

            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));;
    }

    const loginUser = (email, password, navigate, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let from = location?.state?.from?.pathname || "/";
                navigate(from, { replace: true });
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));;
    }

    //Observer User State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe
    }, [auth])

    useEffect(() => {
        fetch(`https://glacial-beach-07491.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://glacial-beach-07491.herokuapp.com/userInfo', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        admin
    }
}

export default useFirebase;