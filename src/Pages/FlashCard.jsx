import React, { useState } from "react";
import { useFirebase } from "../context/fireBaseContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const FlashCard = () => {

    const firebase = useFirebase()
    const app = firebase.firebaseApp
    const fireStore = getFirestore(app)

    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")

    const writeData = async(task,description)=>{
        const response = await addDoc(collection(fireStore,"Cards"),{
            createdby:firebase.user.email,
            task,
            description
        })
        console.log("Response" , response);
        
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        writeData(task,description)
        alert("Congratchs you created first card")
    }

  return (
    <div className="min-h-screen bg-[#1C1B1A] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[#242322] border border-[#33312E] rounded-2xl p-8">
        <div className="mb-6">
          <span
            className="inline-block mb-2 text-sm font-semibold tracking-tight text-[#FF6B4A]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            New flashcard
          </span>
          <h1
            className="text-2xl font-bold text-[#F5F1E8]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Create a card
          </h1>
        </div>

        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label
              htmlFor="task"
              className="block mb-2 text-sm font-medium text-[#D8D3C7]"
            >
              Your Task
            </label>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              id="task"
              aria-describedby="helper-text-explanation"
              className="bg-[#1C1B1A] border border-[#33312E] text-[#F5F1E8] text-sm rounded-lg focus:ring-2 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] block w-full px-3 py-2.5 placeholder-[#7A756A] outline-none transition-colors duration-150"
              placeholder="Enter your task"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-[#D8D3C7]"
            >
              Your description
            </label>
            <textarea
              id="message"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="bg-[#1C1B1A] border border-[#33312E] text-[#F5F1E8] text-sm rounded-lg focus:ring-2 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] block w-full p-3.5 placeholder-[#7A756A] outline-none transition-colors duration-150"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-[#1C1B1A] bg-[#FF6B4A] hover:bg-[#FF8266] font-semibold rounded-lg text-sm px-5 py-3 text-center transition-colors duration-150"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlashCard;