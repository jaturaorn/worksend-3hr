const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-10">
      <div className="navbar-start">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary>TH - THB</summary>
              <ul className="p-2">
                <li>
                  <a>US-USA</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="hover:scale-150 hover:bg-transparent hover:font-bold">
              WOMEN
            </a>
          </li>
          <li>
            <a className="hover:scale-150 hover:bg-transparent hover:font-bold">
              COLLECTION
            </a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="hover:scale-150 hover:bg-transparent hover:font-bold">
                EDITORIAL
              </summary>
              <ul className="p-2 bg-black text-white">
                <li>
                  <a className="hover:text-white hover:font-bold">A.S.C.</a>
                </li>
                <li>
                  <a className="hover:text-white hover:font-bold">BAZAAR</a>
                  <a className="hover:text-white hover:font-bold">ELLE</a>
                  <a className="hover:text-white hover:font-bold">GQ</a>
                  <a className="hover:text-white hover:font-bold">
                    L'OFFICIEL THAILAND
                  </a>
                  <a className="hover:text-white hover:font-bold">
                    L'OFFICIEL USA
                  </a>
                  <a className="hover:text-white hover:font-bold">NUMERO</a>
                  <a className="hover:text-white hover:font-bold">VOGUE</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="hover:scale-150 hover:bg-transparent hover:font-bold">
              NEWS
            </a>
          </li>
          <li>
            <a className="hover:scale-150 hover:bg-transparent hover:font-bold">
              STORIES
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Sign up</a>
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
