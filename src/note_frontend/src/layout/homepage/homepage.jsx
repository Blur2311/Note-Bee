export const Homepage = () => {
  return (
    <div className="container">
      <div className="px-sm-4 py-sm-5 my-5 text-center">
        <h1 className="display-2 text-body-emphasis">
          Tame your work, <br /> organize your life
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead m-5">
            Remember everything and tackle any project with your notes, tasks,
            and schedule all in one place.
          </p>
          <div className="d-flex justify-content-center my-4">
            <button
              type="button"
              className="btn custom-btn btn-lg py-3 w-50 text-white border-1 border-black"
            >
              Start for free
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <a href="#" className="text-black" style={{ fontWeight: 500 }}>
              Log in now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
