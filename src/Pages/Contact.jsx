import React from 'react'

const Contact = () => {
  return (
    <section className="bg-[#1C1B1A]">
      <div className="py-16 lg:py-24 px-4 mx-auto max-w-2xl">
        <div className="text-center mb-10 lg:mb-14">
          <span
            className="inline-block mb-4 text-sm font-semibold tracking-tight text-[#FF6B4A]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Get in touch
          </span>
          <h2
            className="mb-4 text-4xl font-bold text-[#F5F1E8] leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Contact us
          </h2>
          <p className="font-normal text-[#B8B2A3] sm:text-lg">
            Question about a deck, an issue with your feed, or curious about a plan? Send us a message and we'll get back to you.
          </p>
        </div>

        <form action="#" className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#D8D3C7]">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#242322] border border-[#33312E] text-[#F5F1E8] text-sm rounded-lg focus:ring-2 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] block w-full p-3 placeholder-[#7A756A] outline-none transition-colors duration-150"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[#D8D3C7]">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-[#F5F1E8] bg-[#242322] rounded-lg border border-[#33312E] focus:ring-2 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] placeholder-[#7A756A] outline-none transition-colors duration-150"
              placeholder="Let us know how we can help"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#D8D3C7]">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-3 w-full text-sm text-[#F5F1E8] bg-[#242322] rounded-lg border border-[#33312E] focus:ring-2 focus:ring-[#FF6B4A] focus:border-[#FF6B4A] placeholder-[#7A756A] outline-none transition-colors duration-150"
              placeholder="Tell us what's going on..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-6 text-sm font-semibold text-center text-[#1C1B1A] rounded-lg bg-[#FF6B4A] sm:w-fit hover:bg-[#FF8266] focus:ring-4 focus:outline-none focus:ring-[#FF6B4A]/30 transition-colors duration-150"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact