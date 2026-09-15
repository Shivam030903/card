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
  apiKey: "AIzaSyB-mPSy93BBM3Yzwn5_BK38b_-ntDF1XL8",
  authDomain: "study-card-8ba01.firebaseapp.com",
  projectId: "study-card-8ba01",
  storageBucket: "study-card-8ba01.firebasestorage.app",
  messagingSenderId: "159701827709",
  appId: "1:159701827709:web:48a4eb687b6e530c167114",
  measurementId: "G-9C3TWFZ6PV",
  databaseURL: "https://study-card-8ba01-default-rtdb.firebaseio.com",
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
