import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="d-flex gap-3 justify-content-end p-3 bg-primary">
        {/* <Link to={"/"} className="text-decoration-none text-light"> */}
          {/* Home */}
        {/* </Link> */}
        {/* <Link to={"/login"} className="text-decoration-none text-light">
          Login Now
        </Link> */}
      </div>
      <div className="flex justify-center bg-blue-700">
        <h1 className="text-4xl font-bold p-2.5 text-white">Login Form</h1>
      </div>
    </>
  );
};

export default Header;
