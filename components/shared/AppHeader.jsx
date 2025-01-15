import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FiX, FiMenu } from "react-icons/fi";
import logoLight from "../../public/images/logo-light.png";
import logoDark from "../../public/images/logo-dark.svg";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();
  const router = useRouter();

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm"
    >
      <div className="flex justify-between bg-transparent items-center px-4 py-4 lg:px-8">
        {/* Logo */}
        <div>
          <Link href="/">
            {activeTheme === "dark" ? (
              <Image
                src={logoDark}
                className="cursor-pointer bg-transparent"
                alt="Dark Logo"
                width={180}
                height={50}
              />
            ) : (
              <Image
                src={logoLight}
                className="cursor-pointer bg-transparent"
                alt="Light Logo"
                width={180}
                height={50}
              />
            )}
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            {showMenu ? (
              <FiX className="text-3xl text-primary-dark" />
            ) : (
              <FiMenu className="text-3xl text-primary-dark" />
            )}
          </button>
        </div>

        {/* Large Screen Links */}
        <div className="hidden lg:flex lg:space-x-6 xl:space-x-20 items-center justify-between">
          <Link
            href="/"
            className={`text-lg font-medium ${router.pathname === "/"
              ? "text-[#8CC63E]"
              : "text-primary-dark hover:text-[#8CC63E]"
              }`}
          >
            Home
          </Link>
          <Link
            href="/countries"
            className={`text-lg font-medium ${router.pathname.includes("/countries")
              ? "text-[#8CC63E]"
              : "text-primary-dark hover:text-[#8CC63E]"
              }`}
          >
            Countries
          </Link>
          <Link
            href="/aboutus"
            className={`text-lg font-medium ${router.pathname.includes("/aboutus")
              ? "text-[#8CC63E]"
              : "text-primary-dark hover:text-[#8CC63E]"
              }`}
          >
            About
          </Link>
          <Link
            href="/donate"
            className={`text-lg font-medium ${router.pathname.includes("/donate")
              ? "text-[#8CC63E]"
              : "text-primary-dark hover:text-[#8CC63E]"
              }`}
          >
            Donate
          </Link>
          <Link
            href="/blog-news"
            className={`text-lg font-medium ${router.pathname.includes("/blog-news")
              ? "text-[#8CC63E]"
              : "text-primary-dark hover:text-[#8CC63E]"
              }`}
          >
            Blog & News
          </Link>
        </div>

        {/* Header right section buttons */}
        <div className="hidden lg:flex gap-4 items-center">
          {/* Join Now Button */}
          <button className="bg-[#1D4D7B] text-white px-6 py-2 rounded-full border-none cursor-pointer">
            Join Now
          </button>

          {/* Login Button */}
          <button className="bg-[#8CC63E] text-white px-6 py-2 rounded-full border-none cursor-pointer">
            Login
          </button>


          {/* Lock Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            aria-label="Lock Icon"
          >
            <path d="M17 8h-1V6c0-2.76-2.24-5-5-5S6 3.24 6 6v2H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm-6 8c-.83 0-1.5-.67-1.5-1.5S10.17 13 11 13s1.5.67 1.5 1.5S11.83 16 11 16zm3-8H8V6c0-1.65 1.35-3 3-3s3 1.35 3 3v2z" />
          </svg>
        </div>

      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="lg:hidden flex flex-col items-start space-y-4 px-4 py-4 bg-white/30 backdrop-blur-md shadow-md">
          <Link
            href="/"
            className={`text-lg font-medium ${router.pathname === "/"
              ? "text-[#8CC63E]"
              : "text-primary-dark hover:text-[#8CC63E]"
              }`}
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            href="/countries"
            className={`text-lg font-medium ${router.pathname.includes("/countries")
              ? "text-[#8CC63E]"
              : "text-primary-dark hover:text-[#8CC63E]"
              }`}
            onClick={() => setShowMenu(false)}
          >
            Countries
          </Link>
          <Link
            href="/aboutus"
            className={`text-lg font-medium ${router.pathname.includes("/aboutus")
              ? "text-[#8CC63E]"
              : "text-primary-dark hover:text-[#8CC63E]"
              }`}
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            href="/donate"
            className={`text-lg font-medium ${router.pathname.includes("/donate")
              ? "text-[#8CC63E]"
              : "text-primary-dark hover:text-[#8CC63E]"
              }`}
            onClick={() => setShowMenu(false)}
          >
            Donate
          </Link>
          <Link
            href="/blog-news"
            className={`text-lg font-medium ${router.pathname.includes("/blog-news")
              ? "text-[#8CC63E]"
              : "text-primary-dark hover:text-[#8CC63E]"
              }`}
            onClick={() => setShowMenu(false)}
          >
            Blog & News
          </Link>
          <button className="bg-[#1D4D7B] text-white px-6 py-2 rounded-full">
            Join Now
          </button>
          {/* Login Button */}
          <button className="bg-[#8CC63E] text-white px-6 py-2 rounded-full">
            Login
          </button>
        </div>
      )}
    </motion.nav>
  );
}

export default AppHeader;
