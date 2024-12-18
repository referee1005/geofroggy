import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FiX, FiMenu } from "react-icons/fi";
import logoLight from "../../public/images/logo-light.svg";
import logoDark from "../../public/images/logo-dark.svg";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import CustomButton from "../reusable/CustomButton";
import { FiArrowRight } from "react-icons/fi";

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();
  const router = useRouter();

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }
  // useEffect(() => {
  //   setActiveMenu(router.pathname.replace('/', ''))
  // }, [])
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="container-custom fontsize-custom"
    >
      {/* Header */}
      <div className="z-10 w-full sm:w-full md:w-full lg:w-full xl:w-full block lg:flex sm:justify-between sm:items-center">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0 flex-shrink-0">
          <div>
            <Link href="/">
              {activeTheme === "dark" ? (
                <Image
                  src={logoDark}
                  className="cursor-pointer"
                  alt="Dark Logo"
                  width={180}
                />
              ) : (
                <Image
                  src={logoLight}
                  className="cursor-pointer"
                  alt="Light Logo"
                  width={180}
                />
              )}
            </Link>
          </div>

          {/* Small screen hamburger menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 sm:mt-3 xl:flex px-5 py-3 sm:p-0 justify-between items-center lg:shadow-none"
              : "hidden"
          }
        >
          <div
            className={`block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2 ${
              router.pathname === "/" ? "text-cyan-600" : ""
            }`}
          >
            <Link href="/" aria-label="Projects">
              Home
            </Link>
          </div>
          <div
            className={`block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark ${
              router.pathname.includes("/research") ? "text-cyan-600" : ""
            }`}
          >
            <Link href="/research" aria-label="Projects">
              Explore
            </Link>
          </div>
          <div
            className={`block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark ${
              router.pathname.includes("/aboutus") ? "text-cyan-600" : ""
            }`}
          >
            <Link href="/aboutus" aria-label="About Us">
              About
            </Link>
          </div>
          {/* <div
            className={`block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark ${
              router.pathname.includes('/faq') ? 'text-cyan-600' : ''
            }`}
          >
            <Link href='/faq' aria-label='FAQs'>
              FAQs
            </Link>
          </div> */}
          <div
            className={`block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark ${
              router.pathname.includes("/news") ? "text-cyan-600" : ""
            }`}
          >
            <Link href="/news" aria-label="News">
              News
            </Link>
          </div>
          <div
            className={`block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark ${
              router.pathname.includes("/contact") ? "text-cyan-600" : ""
            }`}
          >
            <Link href="/contact" aria-label="Contact">
              Contact
            </Link>
          </div>
          <div className="flex pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <button
              // onClick={showHireMeModal}
              className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24 text-center mr-8"
              aria-label="Join Us Button"
            >
              Join Us
            </button>
            <button
              onClick={() => router.push("/donate")}
              className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24 text-center"
              aria-label="Join Us Button"
            >
              Donate
            </button>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden mx-0 2xl:mx-48 xl:mx-24  lg:flex flex-1 sm:p-0 justify-between items-center shadow-lg sm:shadow-none">
          <div
            className={`block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-cyan-600 dark:hover:text-secondary-light sm:mx-4 sm:py-2 ${
              router.pathname === "/" ? "text-cyan-600" : ""
            }`}
            aria-label="home"
          >
            <Link href="/" className=" fontsize-custom">
              Home
            </Link>
          </div>
          <div
            className={`block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-cyan-600 dark:hover:text-secondary-light  sm:mx-4 sm:py-2 ${
              router.pathname.includes("/aboutus") ? "text-cyan-600" : ""
            }`}
            aria-label="About"
          >
            <Link href="/aboutus" className=" fontsize-custom">
              About
            </Link>
          </div>
          <div
            className={`block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-cyan-600 dark:hover:text-secondary-light  sm:mx-4 sm:py-2 ${
              router.pathname.includes("/news") ? "text-cyan-600" : ""
            }`}
            aria-label="News"
          >
            <Link href="/news" className=" fontsize-custom">
              News
            </Link>
          </div>
          {/* <div
            className={`block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-cyan-600 dark:hover:text-secondary-light  sm:mx-4 sm:py-2 ${
              router.pathname.includes('/faq') ? 'text-cyan-600' : ''
            }`}
            aria-label='Faqs'
          >
            <Link href='/faq' className=' fontsize-custom'>
              FAQs
            </Link>
          </div> */}
          <div
            className={`block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-cyan-600 dark:hover:text-secondary-light  sm:mx-4 sm:py-2 ${
              router.pathname.includes("/research") ? "text-cyan-600" : ""
            }`}
            aria-label="research"
          >
            <Link href="/research" className=" fontsize-custom">
              Explore
            </Link>
          </div>

          <div
            className={`block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-cyan-600 dark:hover:text-secondary-light  sm:mx-4 sm:py-2 ${
              router.pathname.includes("/contact") ? "text-cyan-600" : ""
            }`}
            aria-label="Contact"
          >
            <Link href="/contact" className=" fontsize-custom">
              Contact
            </Link>
          </div>
        </div>

        {/* Header right section buttons */}
        <div className="hidden lg:flex justify-between items-center flex-col md:flex-row flex-shrink-0">
          <div
            className="mr-8 text-[#8CC63E] text-base font-semibold cursor-pointer"
            onClick={() => router.push("/join")}
          >
            Login
          </div>
          <div className="flex gap-4 text-white bg-[#8CC63E] text-base font-semibold rounded-sm px-4 py-2">
            <div>Join Now </div>
            <FiArrowRight color="white" size={20} />
            {/* <CustomButton
              title={"Donate"}
              bgColor={"#269938"}
              click={() => router.push("/donate")}
            /> */}
          </div>

          {/* </div> */}
        </div>
      </div>
    </motion.nav>
  );
}

export default AppHeader;
