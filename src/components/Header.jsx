import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FireBaseDataContext } from "../context/fireBaseContext";
import { signOut } from "firebase/auth";

const Header = () => {
  const firebase = useContext(FireBaseDataContext);
  const user = firebase.user;
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handelLogout = async () => {
    await signOut(firebase.firebaseAuth);
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const navLinkClasses = (path) =>
    `block py-2 px-3 rounded-md text-[15px] font-medium transition-colors duration-150 ${
      isActive(path)
        ? "text-[#1E2A4A] md:text-[#E8A33D]"
        : "text-[#4B5065] hover:text-[#1E2A4A] md:hover:text-[#E8A33D]"
    }`;

  const initials = (user?.displayName || user?.email || "?")
    .trim()
    .charAt(0)
    .toUpperCase();

  return (
    <nav className="fixed w-full z-20 top-0 inset-x-0 bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-[#E7E3D9]">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="Flowbite Logo"
          />
          <span
            className="self-center text-2xl font-semibold text-[#1E2A4A] whitespace-nowrap"
            style={{ fontFamily: "'Fraunces', 'Source Serif 4', serif" }}
          >
            FlashCards
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-md text-[#1E2A4A] md:hidden hover:bg-[#EFEBE1] focus:outline-none focus:ring-2 focus:ring-[#E8A33D]"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {menuOpen ? (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Nav links */}
        <div
          className={`${menuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:items-center`}
          id="navbar-default"
        >
          <ul className="flex flex-col gap-1 mt-3 p-3 rounded-lg bg-white border border-[#E7E3D9] md:flex-row md:items-center md:gap-2 md:mt-0 md:p-0 md:border-0 md:bg-transparent">
            <li>
              <Link to="/pricing" className={navLinkClasses("/pricing")} onClick={() => setMenuOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className={navLinkClasses("/contact")} onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/feed" className={navLinkClasses("/feed")} onClick={() => setMenuOpen(false)}>
                Feed
              </Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link to="/flash" className={navLinkClasses("/flash")} onClick={() => setMenuOpen(false)}>
                    Flash Cards
                  </Link>
                </li>

                {/* Divider before profile/logout on desktop */}
                <li className="hidden md:block h-5 w-px bg-[#E7E3D9] mx-1" />

                <li>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 py-1.5 px-3 rounded-md text-[15px] font-medium text-[#1E2A4A] hover:bg-[#EFEBE1] transition-colors duration-150"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1E2A4A] text-[#FAF9F6] text-xs font-semibold">
                      {initials}
                    </span>
                    <span className="truncate max-w-35">{user.displayName || user.email}</span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handelLogout}
                    className="w-full text-left md:w-auto py-2 px-3 rounded-md text-[15px] font-medium text-[#B3492B] hover:bg-[#FBEAE4] transition-colors duration-150"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin" className={navLinkClasses("/signin")} onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block py-2 px-4 rounded-md text-[15px] font-semibold text-white bg-[#1E2A4A] hover:bg-[#16203A] transition-colors duration-150 text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;