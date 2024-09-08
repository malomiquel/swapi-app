import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-primary">
      <h1 className="text-9xl font-extrabold text-[#FFE81F] tracking-widest">
        404
      </h1>
      <div className="bg-[#FFE81F] px-2 text-xl rounded rotate-12 absolute">
        Page not found
      </div>
      <Link to="/">
        <button className="mt-5">
          <div className="relative inline-block text-lg font-medium text-[#FFE81F]">
            <span className="relative block px-8 py-3 bg-primary border border-current">
              Go Home
            </span>
          </div>
        </button>
      </Link>
    </main>
  );
}

export default NotFoundPage