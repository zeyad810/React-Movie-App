function Header({ children }) {
  return (
    <header className="mt-4">
      <img
        src="./hero.png"
        alt="Hero Banner"
        className="mx-auto h-auto w-full max-w-lg object-contain drop-shadow-md"
      />
      <h1>
        Find <span className="text-gradient">Movies</span> You`ll Enjoy Without
        the Hassle
      </h1>
      {children}
    </header>
  );
}

export default Header;
