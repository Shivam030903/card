import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="bg-[#1C1B1A]">
      <div className="grid max-w-7xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-28 lg:grid-cols-12 items-center">
        <div className="mr-auto place-self-center lg:col-span-7">
          <span
            className="inline-block mb-4 text-sm font-semibold tracking-tight text-[#FF6B4A]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Study smarter, not longer
          </span>
          <h1
            className="max-w-2xl mb-5 text-4xl font-bold leading-tight text-[#F5F1E8] md:text-5xl xl:text-6xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Flashcards that stick, shared with people who get it
          </h1>
          <p className="max-w-xl mb-8 font-normal text-[#B8B2A3] md:text-lg lg:text-xl leading-relaxed">
            Build your own flashcard decks, track what you're learning on your profile, and see what everyone else in your feed is studying right now.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-center text-[#1C1B1A] rounded-lg bg-[#FF6B4A] hover:bg-[#FF8266] transition-colors duration-150 focus:outline-none focus:ring-4 focus:ring-[#FF6B4A]/30"
            >
              Get started
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-[#F5F1E8] border border-[#33312E] rounded-lg hover:bg-[#242322] transition-colors duration-150 focus:outline-none focus:ring-4 focus:ring-[#33312E]"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-4 bg-[#FF6B4A]/10 rounded-3xl blur-2xl" aria-hidden="true"></div>
            <div className="relative bg-[#242322] border border-[#33312E] rounded-2xl p-6 rotate-2">
              <p className="text-xs font-semibold tracking-tight text-[#FF6B4A] mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                CARD 1 OF 12
              </p>
              <p className="text-xl font-semibold text-[#F5F1E8] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                What is the capital of Australia?
              </p>
              <div className="h-px bg-[#33312E] mb-4"></div>
              <p className="text-sm text-[#B8B2A3]">Tap to flip</p>
            </div>
            <div className="relative bg-[#2A2927] border border-[#33312E] rounded-2xl p-6 -rotate-3 -mt-10 -ml-6 -z-10">
              <p className="text-sm text-[#7A756A]">Deck: World Capitals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home