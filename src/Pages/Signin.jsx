import React, { useContext, useState } from 'react'
import { FireBaseDataContext } from '../context/fireBaseContext'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
    const firebase = useContext(FireBaseDataContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        const result = await firebase.loginuser(email, password)
        console.log(result);
        navigate("/profile")
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
                Welcome back
              </h1>
              <p className="text-sm text-[#B8B2A3]">Sign in to get back to your decks and feed.</p>
            </div>

            <form onSubmit={submitHandler} className="space-y-5" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#D8D3C7]">
                  Your email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#1C1B1A] border border-[#33312E] text-[#F5F1E8] rounded-lg focus:ring-2 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] block w-full p-3 placeholder-[#7A756A] outline-none transition-colors duration-150"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#D8D3C7]">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-[#1C1B1A] border border-[#33312E] text-[#F5F1E8] rounded-lg focus:ring-2 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] block w-full p-3 placeholder-[#7A756A] outline-none transition-colors duration-150"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-[#1C1B1A] bg-[#FF6B4A] hover:bg-[#FF8266] font-semibold rounded-lg text-sm px-5 py-3 text-center focus:ring-4 focus:outline-none focus:ring-[#FF6B4A]/30 transition-colors duration-150"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-[#B8B2A3]">
                Don't have an account yet?{' '}
                <Link to="/signup" className="font-medium text-[#FF6B4A] hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signin