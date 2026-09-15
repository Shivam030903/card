import React, { useContext, useEffect, useState } from "react";

import { FireBaseDataContext } from "../context/fireBaseContext";

import {
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const Feed = () => {

  const firebase = useContext(FireBaseDataContext);

  const app = firebase.firebaseApp;
  const fireStore = getFirestore(app);

  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {

    const collectionRef = collection(fireStore, "Cards");

    const snapshot = await getDocs(collectionRef);

    const allPosts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("All posts:", allPosts);

    setPosts(allPosts);
  };


  useEffect(() => {
    getAllPosts();
  }, []);


  return (
    <div className="min-h-screen bg-[#1C1B1A] pt-24 pb-12">

      <div className="max-w-5xl mx-auto px-4">

        <div className="mb-10">
          <span
            className="inline-block mb-2 text-sm font-semibold tracking-tight text-[#FF6B4A]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Feed
          </span>
          <h1
            className="text-3xl font-bold text-[#F5F1E8]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Community Feed
          </h1>
        </div>

        {posts.length === 0 ? (

          <p className="text-[#7A756A]">
            No posts available.
          </p>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {posts.map((post) => (

              <div
                key={post.id}
                className="bg-[#242322] border border-[#33312E] rounded-xl p-6 hover:border-[#FF6B4A] transition-colors duration-150"
              >

                <h2
                  className="text-xl font-bold text-[#F5F1E8]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {post.task}
                </h2>

                <p className="text-[#B8B2A3] mt-3 leading-relaxed">
                  {post.description}
                </p>

                <p className="text-sm text-[#7A756A] mt-5 pt-4 border-t border-[#33312E]">
                  Created by: {post.createdby}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Feed;