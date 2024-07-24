import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="shadow-sm px-3 py-2">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="d-flex align-items-center">
              <img
                src="/bee-logo.png"
                alt=""
                className=""
                width={50}
                height={50}
              />
              <h1 className="m-0 ms-2">Note Bee</h1>
            </div>
          </a>
          {/* <form className="" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form> */}
          <Link to={"/note"} type="button" className="btn btn-outline-light">
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};
