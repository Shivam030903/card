import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <section className="bg-[#1C1B1A]">
      <div className="py-16 px-4 mx-auto max-w-6xl lg:py-24 lg:px-6">
        <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
          <span
            className="inline-block mb-4 text-sm font-semibold tracking-tight text-[#FF6B4A]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Pricing
          </span>
          <h2
            className="mb-4 text-4xl font-bold text-[#F5F1E8] leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Pick a plan that fits how you study
          </h2>
          <p className="font-normal text-[#B8B2A3] sm:text-lg">
            Start free with your own decks, or upgrade for more storage, sharing, and space on the feed.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {/* Starter */}
          <div className="flex flex-col p-6 text-left bg-[#242322] rounded-2xl border border-[#33312E] xl:p-8">
            <h3 className="mb-2 text-2xl font-bold text-[#F5F1E8]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Starter
            </h3>
            <p className="font-normal text-[#B8B2A3] sm:text-base">
              Best for building your own decks and studying solo.
            </p>
            <div className="flex items-baseline my-8">
              <span className="mr-2 text-5xl font-bold text-[#F5F1E8]">$29</span>
              <span className="text-[#B8B2A3]">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left grow">
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">Custom flashcard decks</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">Profile visibility: <span className="font-semibold text-[#F5F1E8]">1 account</span></span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">Priority support: <span className="font-semibold text-[#F5F1E8]">6 months</span></span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">Free updates: <span className="font-semibold text-[#F5F1E8]">6 months</span></span>
              </li>
            </ul>
            <Link
              to="#"
              className="text-[#F5F1E8] bg-transparent border border-[#33312E] hover:bg-[#2A2927] font-semibold rounded-lg text-sm px-5 py-3 text-center transition-colors duration-150"
            >
              Get started
            </Link>
          </div>

          {/* Company - highlighted */}
          <div className="flex flex-col p-6 text-left bg-[#242322] rounded-2xl border-2 border-[#FF6B4A] xl:p-8 lg:-mt-4 lg:mb-4 relative">
            <span
              className="absolute -top-3 left-6 bg-[#FF6B4A] text-[#1C1B1A] text-xs font-bold px-3 py-1 rounded-full"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Most popular
            </span>
            <h3 className="mb-2 text-2xl font-bold text-[#F5F1E8]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Company
            </h3>
            <p className="font-normal text-[#B8B2A3] sm:text-base">
              For study groups and teams sharing decks on the feed.
            </p>
            <div className="flex items-baseline my-8">
              <span className="mr-2 text-5xl font-bold text-[#F5F1E8]">$99</span>
              <span className="text-[#B8B2A3]">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left grow">
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">Custom flashcard decks</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">Profile visibility: <span className="font-semibold text-[#F5F1E8]">10 accounts</span></span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">Priority support: <span className="font-semibold text-[#F5F1E8]">24 months</span></span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">Free updates: <span className="font-semibold text-[#F5F1E8]">24 months</span></span>
              </li>
            </ul>
            <Link
              to="#"
              className="text-[#1C1B1A] bg-[#FF6B4A] hover:bg-[#FF8266] font-semibold rounded-lg text-sm px-5 py-3 text-center transition-colors duration-150"
            >
              Get started
            </Link>
          </div>

          {/* Enterprise */}
          <div className="flex flex-col p-6 text-left bg-[#242322] rounded-2xl border border-[#33312E] xl:p-8">
            <h3 className="mb-2 text-2xl font-bold text-[#F5F1E8]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Enterprise
            </h3>
            <p className="font-normal text-[#B8B2A3] sm:text-base">
              Best for schools and large groups at scale.
            </p>
            <div className="flex items-baseline my-8">
              <span className="mr-2 text-5xl font-bold text-[#F5F1E8]">$499</span>
              <span className="text-[#B8B2A3]">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left grow">
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">Custom flashcard decks</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">Profile visibility: <span className="font-semibold text-[#F5F1E8]">100+ accounts</span></span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">Priority support: <span className="font-semibold text-[#F5F1E8]">36 months</span></span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="shrink-0 w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-[#D8D3C7]">Free updates: <span className="font-semibold text-[#F5F1E8]">36 months</span></span>
              </li>
            </ul>
            <Link
              to="#"
              className="text-[#F5F1E8] bg-transparent border border-[#33312E] hover:bg-[#2A2927] font-semibold rounded-lg text-sm px-5 py-3 text-center transition-colors duration-150"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing