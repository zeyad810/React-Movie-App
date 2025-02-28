import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <section className="bg-primary bg-hero-pattern relative flex h-screen w-full items-center justify-center bg-cover bg-center">
        <p className="text-light-100 absolute top-20 text-lg capitalize sm:text-2xl">
          🎬 I think You Lost Try To Search Again 🎬
        </p>
        <div>
          <div className="absolute top-1/2 left-1/2 w-xs -translate-x-1/2 -translate-y-1/2 px-4 sm:w-4xl md:w-2xl">
            <img src="./not-found.png" className="opacity-10" alt="" />
          </div>
          <div>
            <img
              src="./cinema-movie-time-element-illustration-free-vector-removebg-preview.png"
              alt=""
              className="z-10"
            />
            <div className="flex items-center justify-center">
              <Link
                to="/"
                className="bg-light-100 hover:bg-light-200 hover:ring-light-100 inline-block cursor-pointer rounded-full px-4 py-3 text-center text-sky-950 capitalize transition-colors duration-500 hover:ring hover:ring-offset-2 focus:outline-0"
              >
                Go To Home Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
