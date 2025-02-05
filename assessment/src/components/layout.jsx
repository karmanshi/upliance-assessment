import React from "react";
import { Link, Outlet } from "react-router-dom";
import { all_components } from "./paths";

const Layout = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="mx-10 px-10 py-4 w-[90%]">
        <nav className="flex flex-rows gap-5 my-4">
          {all_components.map((elem) => (
            <span className="border border-2 py-1 px-3 text-center rounded-md">
              <Link to={elem.route}>{elem.title}</Link>
            </span>
          ))}
        </nav>
        <section className="mt-10">{<Outlet />}</section>
      </div>
    </div>
  );
};

export default Layout;
