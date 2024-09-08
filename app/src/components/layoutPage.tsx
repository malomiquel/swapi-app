import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import starWars from "@/assets/star-wars.png";

const PageLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 p-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center space-x-3">
            <img src={starWars} className="h-8" alt="Star Wars Logo" />
          </Link>


          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-800">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 ${isActive("/") ? "text-yellow-400" : "text-gray-300"
                    } rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/people"
                  className={`block py-2 px-3 ${isActive("/people") ? "text-yellow-400" : "text-gray-300"
                    } rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0`}
                >
                  Characters
                </Link>
              </li>
              <li>
                <Link
                  to="/planets"
                  className={`block py-2 px-3 ${isActive("/planets") ? "text-yellow-400" : "text-gray-300"
                    } rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0`}
                >
                  Planets
                </Link>
              </li>
              <li>
                <Link
                  to="/species"
                  className={`block py-2 px-3 ${isActive("/species") ? "text-yellow-400" : "text-gray-300"
                    } rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0`}
                >
                  Species
                </Link>
              </li>
              <li>
                <Link
                  to="/vehicles"
                  className={`block py-2 px-3 ${isActive("/vehicles") ? "text-yellow-400" : "text-gray-300"
                    } rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0`}
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <Link
                  to="/starships"
                  className={`block py-2 px-3 ${isActive("/starships") ? "text-yellow-400" : "text-gray-300"
                    } rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0`}
                >
                  Starships
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4 flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-800 p-4 text-center text-white mt-auto">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/malomiquel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline"
          >
            Malo Miquel
          </a>
        </p>
      </footer>
    </div>
  );
};

export default PageLayout;