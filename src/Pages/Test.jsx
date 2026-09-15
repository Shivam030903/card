import React, { useContext } from "react";

import { FireBaseDataContext } from "../context/fireBaseContext";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  addDoc,
  where,
  query,
  getDocs,
  updateDoc
} from "firebase/firestore";

const Test = () => {
  const firebase = useContext(FireBaseDataContext);
  const app = firebase.firebaseApp;
  const firestore = getFirestore(app);

  const writeData = async () => {
    const response = await addDoc(collection(firestore, "cities"), {
      name: "delhi",
      pincode: 110040,
      lat: 101,
      long: 103,
    });
    console.log("result" , response);
    
  };
  const writeSubData = async () => {
    const response = await addDoc(collection(firestore, "cities/flinpdqXl8Yh1tUKjVe5/foods"), {
      name: "chole bathure",
      price: 70,
      pair: "lassi",
    });
    console.log("result" , response);
    
  };

  const getDocument = async()=>{
    const ref = doc(firestore,"cities","flinpdqXl8Yh1tUKjVe5")
    const snap = await getDoc(ref)
    console.log(snap.data());
    
  }

  const getDocumentByQuery = async()=>{
    const collectionRef = collection(firestore,"users")
    const q = query(collectionRef , where("isMale" ,"==",true))
    const snapshot = await getDocs(q)
    snapshot.forEach(data => console.log(data.data()))
  }

  const updateDocument = async ()=>{
    const docRef = doc(firestore,"cities","flinpdqXl8Yh1tUKjVe5")
    await updateDoc(docRef,{
        name:"New Delhi"
    })
  }

  return (
    <div className="h-[50%]">
      <button className="m-[15%] bg-red-500 p-3 text-white rounded-xl" onClick={writeData}>
        Create Data
      </button>
      <button className="m-[15%] bg-red-500 p-3 text-white rounded-xl" onClick={writeSubData}>
        Create Sub Data
      </button>
      <button className="m-[15%] bg-red-500 p-3 text-white rounded-xl" onClick={getDocument}>
        Get Document Data
      </button>
      <button className="m-[15%] bg-red-500 p-3 text-white rounded-xl" onClick={getDocumentByQuery }>
        Get Document Data by Query
      </button>
      <button className="m-[15%] bg-red-500 p-3 text-white rounded-xl" onClick={updateDocument }>
        Update Document Data 
      </button>
    </div>
  );
};

export default Test;
