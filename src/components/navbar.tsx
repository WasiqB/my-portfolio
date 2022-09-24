export const Navbar = () => {
  return (
    <header className="body-font bg-base-200 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-primary mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-base-100 p-2 bg-primary rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-primary justify-center">
          <a className="hover:text-base-300 mr-5" href="#">
            First Link
          </a>
          <a className="hover:text-base-300 mr-5" href="#">
            Second Link
          </a>
          <a className="hover:text-base-300 mr-5" href="#">
            Third Link
          </a>
          <a className="hover:text-base-300 mr-5" href="#">
            Fourth Link
          </a>
        </nav>
        <button className="bg-primary inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base-100 mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
