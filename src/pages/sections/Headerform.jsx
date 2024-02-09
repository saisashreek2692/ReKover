import { Link } from "react-router-dom";

export default function Headerform() {
  return (
    <>
      <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
        <Link
          to="/"
          className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
        >
          Sign in
        </Link>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          Sign up
        </Link>
      </div>
    </>
  );
}
