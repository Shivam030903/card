import React, { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const FireBaseDataContext = createContext(null);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

const createuser = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

const loginuser = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);

};

export const useFirebase = ()=> useContext(FireBaseDataContext)

const FireBaseProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // yes you are logged in
        console.log("hello", user);
        setUser(user);
      } else {
        console.log("user is logged out ");
        setUser(null);
      }
    });
    return () => unsubscribe()
  }, []);

  return (
    <FireBaseDataContext.Provider
      value={{
        firebaseApp,
        firebaseAuth,
        createuser,
        loginuser,
        user,
        
      }}
    >
      {props.children}
    </FireBaseDataContext.Provider>
  );
};

export default FireBaseProvider;
