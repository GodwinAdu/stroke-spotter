import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <a
                href="#0"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Terms
              </a>{" "}
              ·{" "}
              <a
                href="#0"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-indigo/50 dark:text-white font-bold mb-2">
              Products
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Web Studio
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  DynamicBox Flex
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Programming Forms
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Integrations
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Command-line
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-indigo/50 dark:text-white font-bold mb-2">
              Resources
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Tutorials & Guides
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Support Center
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-indigo/50 dark:text-white font-bold mb-2">
              Company
            </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Company values
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-indigo/50 dark:text-white font-bold mb-2">
              Subscribe
            </h6>
            <p className="text-sm text-gray-600 mb-4">
              {" "}
              Spot Stroke Fast Foundation offers valuable health tips. To access
              them, please subscribe to our newsletter with your email. Thank
              you
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <Link href="https://web.facebook.com/Spotstrokefast?mibextid=ZbWKwL&_rdc=1&_rdr">
              <li className="bg-black text-white hover:text-blue-500 rounded-full p-2 cursor-pointer text-center shadow-lg">
                <Facebook />
              </li>
            </Link>
            <Link href="#" className="ml-4">
              <li className="bg-black text-white hover:text-blue-400 rounded-full p-2 cursor-pointer text-center shadow-lg">
                <Linkedin />
              </li>
            </Link>
            <Link href="https://twitter.com/spot_stroke/status/1586751572586930178?t=SUgLJpU7vmr5s8Dcal1lSQ&s=19" className="ml-4">
              <li className="bg-black text-white hover:text-blue-200 rounded-full p-2 cursor-pointer text-center shadow-lg">
                <Twitter />
              </li>
            </Link>
            <Link href="https://www.instagram.com/@spotstrokefast" className="ml-4">
              <li className="bg-black text-white hover:text-pink-500 rounded-full p-2 cursor-pointer text-center shadow-lg">
                <Instagram />
              </li>
            </Link>
            <Link href="https://youtube.com/@spotstrokefast2023" className="ml-4">
              <li className="bg-black text-white hover:text-red-500 rounded-full p-2 cursor-pointer text-center shadow-lg">
                <Youtube />
              </li>
            </Link>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4 flex ">
            &copy;{new Date().getFullYear()}{" "}
            <span className="hidden md:block pl-1">
              Spot Stroke Fast Foundation
            </span>
            <span className="block md:hidden pl-1">SSFF</span>. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
