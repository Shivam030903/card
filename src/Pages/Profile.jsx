import React, { useContext, useEffect, useState } from "react";
import { FireBaseDataContext } from "../context/fireBaseContext";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const firebase = useContext(FireBaseDataContext);
  const user = firebase.user;
  const app = firebase.firebaseApp;
  const fireStore = getFirestore(app);
  const [mypost, setMypost] = useState([]);
  const navigate = useNavigate()

  const getDocumentByQuery = async () => {
    const collectionRef = collection(fireStore, "Cards");
    const q = query(collectionRef, where("createdby", "==", user.email));
    const snapshot = await getDocs(q);

    // snapshot.forEach((data) => console.log(data.data()));
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("My posts:", posts);
    setMypost(posts);
  };

  useEffect(() => {
    getDocumentByQuery();
  }, [user]);

  if (!user) {
    return (
      // navigate("/feed")
      <div className="flex justify-center items-center min-h-screen bg-[#1C1B1A]">
        <h1 className="text-[#F5F1E8] text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Please login first
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-[#1C1B1A] min-h-screen">
      {/* Profile card */}
      <div className="flex justify-center items-center pt-16 pb-10 px-4">
        <div className="bg-[#242322] border border-[#33312E] shadow-xl rounded-2xl p-8 w-full max-w-md">
          <div className="flex flex-col items-center">
            <div
              className="w-24 h-24 rounded-full bg-[#FF6B4A] flex items-center justify-center text-[#1C1B1A] text-4xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {user.email?.charAt(0).toUpperCase()}
            </div>

            <h1
              className="text-2xl font-bold mt-4 text-[#F5F1E8]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {user.displayName || "User"}
            </h1>

            <p className="text-[#B8B2A3]">{user.email}</p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="pb-3 border-b border-[#33312E]">
              <p className="text-xs uppercase tracking-wide text-[#7A756A]">Name</p>
              <p className="font-medium text-[#F5F1E8] mt-1">{user.displayName || "Not set"}</p>
            </div>

            <div className="pb-3 border-b border-[#33312E]">
              <p className="text-xs uppercase tracking-wide text-[#7A756A]">Email</p>
              <p className="font-medium text-[#F5F1E8] mt-1">{user.email}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-[#7A756A]">User ID</p>
              <p className="font-medium text-[#D8D3C7] break-all mt-1 text-sm">{user.uid}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Created posts */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <h2
          className="text-3xl font-bold text-center text-[#F5F1E8] mb-8"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Your Created Posts
        </h2>

        {mypost.length === 0 ? (
          <p className="text-center text-[#7A756A]">You haven't created any flashcards yet.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {mypost.map((post) => (
              <Link
                key={post.id}
                to="#"
                className="block bg-[#242322] border border-[#33312E] rounded-xl p-6 hover:border-[#FF6B4A] transition-colors duration-150"
              >
                <h5
                  className="mb-2 text-xl font-semibold text-[#F5F1E8] leading-snug"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {post.task}
                </h5>
                <p className="text-[#B8B2A3] text-sm">{post.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;