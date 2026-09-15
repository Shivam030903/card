import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FireBaseDataContext } from "../context/fireBaseContext";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const firebase = useContext(FireBaseDataContext);
  // console.log(firebase);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler  = async(e) =>{
    e.preventDefault()
    const result = await firebase.createuser(email,password)
    await updateProfile(result.user,{
      displayName:name,
    })

    console.log("User created" , result.uid);
    console.log("User Name" , result.user.displayName);
    
    alert("sucess created")
  }

  return (
    <section className="bg-[#1C1B1A] min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen">
        <Link to="/" className="flex items-center gap-2.5 mb-8">
          <img className="w-8 h-8" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          <span
            className="text-2xl font-bold text-[#F5F1E8]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Flowbite
          </span>
        </Link>

        <div className="w-full bg-[#242322] rounded-2xl border border-[#33312E] sm:max-w-md">
          <div className="p-6 space-y-6 sm:p-8">
            <div>
              <h1
                className="text-2xl font-bold leading-tight text-[#F5F1E8] mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Create your account
              </h1>
              <p className="text-sm text-[#B8B2A3]">Start building decks and join the feed.</p>
            </div>

            <form className="space-y-5" onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-[#D8D3C7]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  id="name"
                  className="bg-[#1C1B1A] border border-[#33312E] text-[#F5F1E8] text-sm rounded-lg focus:ring-2 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] block w-full p-3 placeholder-[#7A756A] outline-none transition-colors duration-150"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#D8D3C7]"
                >
                  Your email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  className="bg-[#1C1B1A] border border-[#33312E] text-[#F5F1E8] text-sm rounded-lg focus:ring-2 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] block w-full p-3 placeholder-[#7A756A] outline-none transition-colors duration-150"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-[#D8D3C7]"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-[#1C1B1A] border border-[#33312E] text-[#F5F1E8] text-sm rounded-lg focus:ring-2 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] block w-full p-3 placeholder-[#7A756A] outline-none transition-colors duration-150"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-[#1C1B1A] bg-[#FF6B4A] hover:bg-[#FF8266] font-semibold rounded-lg text-sm px-5 py-3 text-center focus:ring-4 focus:outline-none focus:ring-[#FF6B4A]/30 transition-colors duration-150"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-[#B8B2A3]">
                Already have an account?{" "}
                <Link to="/signin" className="font-medium text-[#FF6B4A] hover:underline">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;