import { Link } from "react-router-dom";
import { Headernav, Headerform } from "./index";

export default function Header() {
  return (
    <>
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link
              to="/"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                RK<span className="text-indigo-600">.</span>
              </span>
            </Link>
            <Headernav />
          </div>

          <Headerform />
          
        </div>
      </section>
    </>
  );
}
