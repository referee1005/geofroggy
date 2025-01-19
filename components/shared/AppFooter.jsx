import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import logoLight from "../../public/images/logo1.png";
import facebook from "../../public/images/facebook.png";
import twitter from "../../public/images/twitter.png";
import instagram from "../../public/images/instagram.png";
import youtube from "../../public/images/youtube.png";
import linkedin from "../../public/images/linkedin.png";
import googleplay from "../../public/images/google-play.png";
import appstore from "../../public/images/app-store.svg";
import { useRouter } from "next/router";

const socialLinks = [
  {
    id: 1,
    icon: instagram,
    url: "https://www.instagram.com",
  },
  {
    id: 2,
    icon: facebook,
    url: "https://www.facebook.com",
  },
  {
    id: 3,
    icon: youtube,
    url: "https://www.youtube.com",
  },
  {
    id: 4,
    icon: twitter,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: linkedin,
    url: "https://www.linkedin.com",
  },
];

function AppFooter() {
  const homeLoaded = useSelector((state) => state.home.homeLoaded);
  const flag = !homeLoaded

  return (
    <footer className={`${flag ? "hidden" : "text-white mb-[-8px]"}`}>
      <div className="bg-[#195883] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-stretch pb-4 pt-[120px]">
        {/* Left Section */}
        <div className="w-full lg:w-[25%] flex flex-col pl-16 lg:pl-0">
          <Image
            src={logoLight}
            className="cursor-pointer"
            alt="Light Logo"
            width={240}
          />
          <div className="font-extrabold">
            Cultured Media vs. The Cultured Media
          </div>
          <div className="font-extrabold text-2xl mt-6">
            (+800) 1234 5678 90
          </div>
          <div className="font-normal mt-2">support@geofroggy.com</div>
          <div className="font-normal mt-4">
            Copyright {new Date().getFullYear()} ©Geofroggy
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[75%] flex flex-col mt-12 lg:mt-20">
          {/* Navigation Columns */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[1/3] mt-8 md:mt-0 flex-grow">
              <div className="font-bold text-lg border-l-0 lg:border-l border-[#D9D9D9] pl-16">
                Company
              </div>
              <div className="mt-4 pl-16 font-montserrat">
                <div>News</div>
                <div>Media Page</div>
                <div>Advertise with Geofroggy</div>
                <div>Contact Us</div>
              </div>
            </div>
            <div className="w-full md:w-[1/3] mt-8 md:mt-0 flex-grow">
              <div className="font-bold text-lg border-l-0 md:border-l border-[#D9D9D9] pl-16">
                Legal
              </div>
              <div className="mt-4 pl-16">
                <div>Community Guidelines</div>
                <div>Terms of Use</div>
                <div>Privacy Policy</div>
                <div>FAQs</div>
              </div>
            </div>
            <div className="w-full md:w-[1/3] mt-8 md:mt-0 flex-grow">
              <div className="font-bold text-lg border-l-0 md:border-l border-[#D9D9D9] pl-16">
                Get Involve
              </div>
              <div className="mt-4 pl-16">
                <div>Careers</div>
                <div>Ambassadors</div>
                <div>Sponsor Geofroggy</div>
                <div>Donate</div>
                <div>Subscribe</div>
              </div>
            </div>
          </div>

          {/* Follow and Download Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full mt-8">
            {/* Follow us Section */}
            <div className="w-full md:w-[50%] flex flex-col items-center gap-4 mt-4">
              <div className="text-lg font-extrabold text-center">Follow us</div>
              <ul className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    href={link.url}
                    target="__blank"
                    key={link.id}
                    className="cursor-pointer"
                  >
                    <Image
                      src={link.icon}
                      alt={`Social Icon ${link.id}`}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </ul>
            </div>

            {/* Download App Section */}
            <div className="w-full md:w-[50%] flex flex-col md:flex-row items-center gap-4 mt-8">
              <div className="text-lg font-extrabold text-center">Download App</div>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="hover:opacity-80 flex items-center justify-center w-[150px] h-auto"
                >
                  <Image
                    src={googleplay}
                    alt="Get it on Google Play"
                    className="w-full h-auto object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="hover:opacity-80 flex items-center justify-center w-[150px] h-auto"
                >
                  <img
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="w-full h-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-[#8CC63E] h-8" content=""></div>
    </footer>
  )
}

export default AppFooter;
